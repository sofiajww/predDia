<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Auth\PasswordResetController;

use App\Http\Controllers\data_kesehatanController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\PrediksiController;
use App\Http\Controllers\Admin\SaranController;

/*
|--------------------------------------------------------------------------
| PUBLIC ROUTES
|--------------------------------------------------------------------------
*/

// Ping (cek server)
Route::get('/ping', function () {
    return response()->json([
        'ok' => true,
        'app' => config('app.name'),
        'env' => app()->environment(),
        'time' => now()->toDateTimeString(),
    ]);
});

// Saran public
Route::post('/saran', [SaranController::class, 'store']);

// Auth user
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Admin login (harus PUBLIC karena belum punya token)
Route::post('/admin/login', [AdminController::class, 'login']);

// Password reset (public)
Route::post('/forgot-password', [PasswordResetController::class, 'forgot']);
Route::post('/reset-password',  [PasswordResetController::class, 'reset']);


/*
|--------------------------------------------------------------------------
| USER ROUTES (auth:sanctum)
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn (Request $request) => $request->user());
    Route::post('/logout', [AuthController::class, 'logout']);

    // Data Kesehatan
    Route::get('/data-kesehatan',         [data_kesehatanController::class, 'index']);
    Route::post('/data-kesehatan',        [data_kesehatanController::class, 'store']);
    Route::get('/data-kesehatan/{id}',    [data_kesehatanController::class, 'show']);
    Route::put('/data-kesehatan/{id}',    [data_kesehatanController::class, 'update']);
    Route::delete('/data-kesehatan/{id}', [data_kesehatanController::class, 'destroy']);

    // Prediksi (user)
    Route::post('/prediksi', [PrediksiController::class, 'prediksi']);
    Route::get('/prediksi/riwayat', [PrediksiController::class, 'riwayat']);
});


/*
|--------------------------------------------------------------------------
| ADMIN ROUTES (auth:admin + admin middleware)
|--------------------------------------------------------------------------
| Penting:
| - auth:admin memaksa guard "admin" (provider: admins) sesuai config/auth.php
| - middleware "admin" memakai $request->user('admin')
*/

Route::middleware(['auth:admin', 'admin'])->group(function () {
    // Admin profile
    Route::get('/admin/profile', [AdminController::class, 'profile']);

    // Admin Pengguna
    Route::get('/admin/pengguna', [AdminController::class, 'semuaPengguna']);
    Route::delete('/admin/pengguna/{id}', [AdminController::class, 'hapusPengguna']);

    // Admin Prediksi
    Route::get('/admin/prediksi', [AdminController::class, 'semuaPrediksi']);
    Route::put('/admin/prediksi/{id}/cek', [AdminController::class, 'cekPrediksi']);

    // Admin Saran
    Route::get('/admin/saran', [SaranController::class, 'index']);
    Route::delete('/admin/saran/{id}', [SaranController::class, 'destroy']);
});
