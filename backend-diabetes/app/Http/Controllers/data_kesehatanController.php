<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\data_kesehatan;

class data_kesehatanController extends Controller
{
    // Ambil semua data milik user login
    public function index()
    {
        $data = data_kesehatan::where('user_id', auth()->id())->get();
        return response()->json($data);
    }

    // Simpan data baru
    public function store(Request $request)
    {
        $request->validate([
            'Pregnancies' => 'nullable|integer',
            'Glucose' => 'required|integer',
            'BloodPressure' => 'nullable|integer',
            'SkinThickness' => 'nullable|integer',
            'Insulin' => 'nullable|numeric',
            'BMI' => 'required|numeric',
            'DiabetesPedigreeFunction' => 'nullable|numeric',
            'Age' => 'required|integer',
        ]);

        $data = data_kesehatan::create([
            'user_id' => auth()->id(),
            'Pregnancies' => $request->Pregnancies,
            'Glucose' => $request->Glucose,
            'BloodPressure' => $request->BloodPressure,
            'SkinThickness' => $request->SkinThickness,
            'Insulin' => $request->Insulin,
            'BMI' => $request->BMI,
            'DiabetesPedigreeFunction' => $request->DiabetesPedigreeFunction,
            'Age' => $request->Age,
        ]);

        return response()->json($data, 201);
    }

    // Ambil data berdasarkan ID (milik user saja)
    public function show($id)
    {
        $data = data_kesehatan::where('user_id', auth()->id())
                              ->where('id', $id)
                              ->firstOrFail();

        return response()->json($data);
    }

    // Update data berdasarkan ID
    public function update(Request $request, $id)
    {
        $data = data_kesehatan::where('user_id', auth()->id())
                              ->where('id', $id)
                              ->firstOrFail();

        $data->update([
            'Pregnancies' => $request->Pregnancies,
            'Glucose' => $request->Glucose,
            'BloodPressure' => $request->BloodPressure,
            'SkinThickness' => $request->SkinThickness,
            'Insulin' => $request->Insulin,
            'BMI' => $request->BMI,
            'DiabetesPedigreeFunction' => $request->DiabetesPedigreeFunction,
            'Age' => $request->Age,
        ]);

        return response()->json($data);
    }

    // Hapus data
    public function destroy($id)
    {
        $data = data_kesehatan::where('user_id', auth()->id())
                              ->where('id', $id)
                              ->firstOrFail();

        $data->delete();

        return response()->json(['message' => 'Data berhasil dihapus']);
    }
}
