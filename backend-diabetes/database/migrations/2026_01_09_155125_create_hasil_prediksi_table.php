<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
{
    Schema::create('hasil_prediksi', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('id_admin')->nullable();
        $table->foreign('id_admin')->references('id')->on('users')->onDelete('set null');
        // Kolom-kolom lainnya sesuai kebutuhan
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hasil_prediksi');
    }
};
