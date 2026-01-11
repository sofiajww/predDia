<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Models\User;

class PasswordResetController extends Controller
{
    // POST /api/forgot-password
    public function forgot(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $msg = 'Jika email terdaftar, kami akan mengirim instruksi reset password.';
        $email = $request->email;

        $user = User::where('email', $email)->first();
        if (!$user) {
            // Jangan bocorkan apakah email ada atau tidak
            return response()->json(['message' => $msg], 200);
        }

        // generate token
        $token = Str::random(64);
        $tokenHash = hash('sha256', $token);
        $ttl = 15;

        // hapus token lama
        DB::table('password_resets')->where('email', $email)->delete();

        // simpan token baru
        DB::table('password_resets')->insert([
            'email' => $email,
            'token_hash' => $tokenHash,
            'expires_at' => Carbon::now()->addMinutes($ttl),
            'created_at' => Carbon::now(),
        ]);

        // build reset URL (frontend)
        $frontend = rtrim(config('app.frontend_url'), '/');
        $url = $frontend . '/reset-password?token=' . $token . '&email=' . urlencode($email);

        // KIRIM EMAIL DENGAN BLADE (INI KUNCI FIX-NYA)
        Mail::send('emails.reset-password', [
            'url' => $url,
            'ttl' => $ttl,
        ], function ($m) use ($email) {
            $m->to($email)->subject('Reset Password');
        });

        return response()->json(['message' => $msg], 200);
    }

    // POST /api/reset-password
    public function reset(Request $request)
    {
        $request->validate([
            'token' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $email = $request->email;
        $tokenHash = hash('sha256', $request->token);

        $row = DB::table('password_resets')
            ->where('email', $email)
            ->where('token_hash', $tokenHash)
            ->where('expires_at', '>', Carbon::now())
            ->first();

        if (!$row) {
            return response()->json([
                'message' => 'Token tidak valid atau sudah kadaluarsa.'
            ], 400);
        }

        $user = User::where('email', $email)->first();
        if (!$user) {
            DB::table('password_resets')->where('email', $email)->delete();
            return response()->json(['message' => 'Akun tidak ditemukan.'], 404);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        DB::table('password_resets')->where('email', $email)->delete();

        return response()->json([
    'success' => true,
    'message' => 'Password berhasil direset'
], 200);

    }
}
