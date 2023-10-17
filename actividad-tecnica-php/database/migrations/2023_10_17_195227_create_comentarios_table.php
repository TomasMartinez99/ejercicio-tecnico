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
        Schema::create('comentarios', function (Blueprint $table) {
            $table->id(); // Esto crea un campo 'id' autoincrementable, que es la llave primaria.
            $table->string('usuario'); // Esto crea un campo 'usuario' de tipo VARCHAR.
            $table->text('contenido'); // Esto crea un campo 'contenido' de tipo TEXT.
            $table->timestamps(); // Esto crea dos campos: 'created_at' y 'updated_at' que Laravel manejará automáticamente.
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comentarios');
    }
};
