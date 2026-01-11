<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('hasil_prediksi', function (Blueprint $table) {
            $table->string('hasil')->after('id_admin');
            $table->timestamp('tanggal_prediksi')->after('hasil');
        });
    }

    public function down()
    {
        Schema::table('hasil_prediksi', function (Blueprint $table) {
            $table->dropColumn(['hasil', 'tanggal_prediksi']);
        });
    }
};
