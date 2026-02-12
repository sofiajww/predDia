<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\data_kesehatan;
use App\Models\HasilPrediksi;

class PrediksiController extends Controller
{
    public function prediksi(Request $request)
    {
        // 🔐 pastikan login
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        // ✅ VALIDASI SESUAI DATA FRONTEND
        $request->validate([
            'Pregnancies'              => 'required|numeric',
            'Glucose'                  => 'required|numeric',
            'BMI'                      => 'required|numeric',
            'DiabetesPedigreeFunction' => 'required|numeric',
            'Age'                      => 'required|numeric',
        ]);

        // 💾 SIMPAN DATA KESEHATAN
        $data = data_kesehatan::create([
            'user_id'                  => $user->id,
            'Pregnancies'              => $request->Pregnancies,
            'Glucose'                  => $request->Glucose,
            'BMI'                      => $request->BMI,
            'DiabetesPedigreeFunction' => $request->DiabetesPedigreeFunction,
            'Age'                      => $request->Age,
        ]);

        // 🤖 KIRIM KE FLASK
        $response = Http::post('http://127.0.0.1:5000/predict', [
            'Pregnancies'              => $request->Pregnancies,
            'Glucose'                  => $request->Glucose,
            'BMI'                      => $request->BMI,
            'DiabetesPedigreeFunction' => $request->DiabetesPedigreeFunction,
            'Age'                      => $request->Age,
        ]);

        if (!$response->successful()) {
            return response()->json([
                'message' => 'Gagal menghubungi server prediksi'
            ], 500);
        }

        $hasil = $response->json('prediction');

        if ($hasil === null) {
            return response()->json([
                'message' => 'Format hasil prediksi tidak valid'
            ], 500);
        }

        // 💾 SIMPAN HASIL
        $hasilPrediksi = HasilPrediksi::create([
            'user_id'            => $user->id,
            'data_kesehatan_id'  => $data->id,
            'hasil'              => $hasil,
            'tanggal_prediksi'   => now(),
        ]);

        // ✅ AMBIL 1 RECORD RIWAYAT TERBARU LENGKAP
        $riwayatBaru = HasilPrediksi::with('dataKesehatan')->find($hasilPrediksi->id);

        // ✅ RETURN: termasuk riwayat baru
        return response()->json([
            'message' => 'Prediksi berhasil',
            'hasil'   => $hasil,
            'data'    => $data,
            'riwayat' => $riwayatBaru,
        ], 200);
    }

    public function riwayat(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json([
                'message' => 'Unauthenticated'
            ], 401);
        }

        $riwayat = HasilPrediksi::with('dataKesehatan')
            ->where('user_id', $user->id)
            ->orderByDesc('tanggal_prediksi')
            ->get();

        return response()->json([
            'message' => 'Riwayat prediksi berhasil',
            'data' => $riwayat
        ], 200);
    }
}
