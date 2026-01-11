<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\User;
use App\Models\HasilPrediksi;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    // POST /api/admin/login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $admin = Admin::where('email', $request->email)->first();

        if (!$admin || !Hash::check($request->password, $admin->password)) {
            return response()->json(['message' => 'Email atau password salah'], 401);
        }

        // buat token Sanctum
        $token = $admin->createToken('admin-token')->plainTextToken;

        return response()->json([
            'message' => 'Login berhasil',
            'token' => $token,
            'user' => $admin,
        ]);
    }

    // GET /api/admin/profile
    public function profile(Request $request)
    {
        return response()->json($request->user());
    }

    /* =========================
       DATA USER
    ========================= */

    // GET /api/admin/pengguna
    public function semuaPengguna()
    {
        $users = User::orderBy('id', 'asc')->get();
        return response()->json($users);
    }

    // DELETE /api/admin/pengguna/{id}
    public function hapusPengguna($id, Request $request)
    {
        $admin = $request->user();
        $user  = User::findOrFail($id);

        if ($admin && $admin->id == $user->id) {
            return response()->json([
                'message' => 'Tidak bisa menghapus akun sendiri'
            ], 422);
        }

        $user->delete();

        return response()->json([
            'message'    => 'User berhasil dihapus',
            'deleted_id' => $id
        ], 200);
    }

    /* =========================
       DATA PREDIKSI
    ========================= */

    // GET /api/admin/prediksi
    public function semuaPrediksi()
    {
        $data = HasilPrediksi::with(['user', 'dataKesehatan'])
            ->orderBy('id', 'desc')
            ->get();

        return response()->json($data);
    }

    // PUT /api/admin/prediksi/{id}/cek
    public function cekPrediksi($id, Request $request)
    {
        $admin = $request->user();

        HasilPrediksi::where('id', $id)
            ->update([
                'id_admin' => $admin->id,
            ]);

        return response()->json([
            'message'  => 'Prediksi telah ditandai sudah dicek admin',
            'id'       => $id,
            'id_admin' => $admin->id,
        ], 200);
    }
}
