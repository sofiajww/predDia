<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class data_kesehatan extends Model
{
    protected $table = 'data_kesehatans';

    protected $fillable = [
        'user_id',
        'Pregnancies',
        'Glucose',
        'BMI',
        'DiabetesPedigreeFunction',
        'Age',
    ];

    public function hasilPrediksi()
    {
        return $this->hasMany(HasilPrediksi::class, 'data_kesehatan_id', 'id');
    }
}
