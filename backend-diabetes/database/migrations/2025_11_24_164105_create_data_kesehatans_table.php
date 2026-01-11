<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataKesehatansTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('data_kesehatans', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');

            $table->integer('Pregnancies')->nullable();
            $table->integer('Glucose');
            $table->integer('BloodPressure')->nullable();
            $table->integer('SkinThickness')->nullable();
            $table->float('Insulin')->nullable();
            $table->float('BMI');
            $table->float('DiabetesPedigreeFunction')->nullable();
            $table->integer('Age');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('data_kesehatans');
    }
}
