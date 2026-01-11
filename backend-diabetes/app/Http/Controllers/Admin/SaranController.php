<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Saran;

class SaranController extends Controller
{
    /**
     * ADMIN: lihat semua saran
     * GET /api/admin/saran  (auth:admin + admin middleware)
     */
    public function index()
    {
        $data = Saran::orderBy('id', 'desc')->get();
        return response()->json($data, 200);
    }

    /**
     * PUBLIC: user kirim saran
     * POST /api/saran (tanpa token)
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nama'  => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'pesan' => 'required|string|max:2000',
        ]);

        $s = Saran::create($data);

        return response()->json([
            'message' => 'Saran berhasil dikirim',
            'data'    => $s,
        ], 201);
    }

    /**
     * ADMIN: hapus saran
     * DELETE /api/admin/saran/{id} (auth:admin + admin middleware)
     */
    public function destroy($id)
    {
        $s = Saran::find($id);
        if (!$s) {
            return response()->json(['message' => 'Saran tidak ditemukan'], 404);
        }

        $s->delete();

        return response()->json(['message' => 'Saran berhasil dihapus'], 200);
    }
}
