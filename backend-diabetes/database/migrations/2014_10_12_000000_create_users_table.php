<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Jalankan migrasi.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Kolom id sebagai primary key
            $table->string('name'); // Kolom name untuk nama pengguna
            $table->string('email')->unique(); // Kolom email dengan constraint unique
            $table->timestamp('email_verified_at')->nullable(); // Kolom untuk menyimpan waktu verifikasi email
            $table->string('password'); // Kolom password
            $table->rememberToken(); // Kolom untuk menyimpan token untuk "remember me"
            $table->timestamps(); // Kolom created_at dan updated_at
        });
    }

    /**
     * Membalikkan migrasi.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users'); // Menghapus tabel users
    }
};
