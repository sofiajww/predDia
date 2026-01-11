<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\DataKesehatan;

class HasilPrediksi extends Model
{
    // Nama tabel
    protected $table = 'hasil_prediksi';

    // Primary key (DEFAULT = id)
    protected $primaryKey = 'id';

    // Timestamps aktif
    public $timestamps = true;

    // Kolom yang boleh diisi mass assignment
    protected $fillable = [
        'user_id',
        'data_kesehatan_id',
        'id_admin',
        'hasil',
        'tanggal_prediksi',
    ];

    /**
     * Relasi ke data_kesehatan
     * hasil_prediksi.data_kesehatan_id -> data_kesehatans.id
     */
    public function dataKesehatan()
    {
        return $this->belongsTo(data_kesehatan::class, 'data_kesehatan_id', 'id');
    }

    /**
     * Relasi ke user
     * hasil_prediksi.user_id -> users.id
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
