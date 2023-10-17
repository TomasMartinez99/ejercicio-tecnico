<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    use HasFactory;

    protected $table = 'comentarios';

    // Desactivar los timestamps predeterminados de Laravel
    public $timestamps = false;

    protected $fillable = ['usuario', 'contenido'];

}
