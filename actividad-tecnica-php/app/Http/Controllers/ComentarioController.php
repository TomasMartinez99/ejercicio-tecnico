<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comentario;

class ComentarioController extends Controller
{
    public function index()
    {
        // Obtener todos los comentarios
        $comentarios = Comentario::all();
        return response()->json($comentarios);
    }

    public function store(Request $request)
    {
        // Validar la solicitud
        $validatedData = $request->validate([
            'usuario' => 'required|string',
            'contenido' => 'required|string'
        ]);

        // Crear un nuevo comentario
        $comentario = Comentario::create($validatedData);

        // Redirigir o responder según lo necesario
        return 'Comentario creado con éxito.';
    }

    public function show($id)
    {
        // Obtener un comentario específico
        $comentario = Comentario::findOrFail($id);
        return response()->json($comentario);
    }

    public function update(Request $request, $id)
    {
        // Actualizar un comentario
        $comentario = Comentario::findOrFail($id);
        $comentario->update($request->all());
        return response()->json($comentario);
    }

    public function destroy($id)
    {
        // Eliminar un comentario
        $comentario = Comentario::findOrFail($id);
        $comentario->delete();
        return response()->json(null, 204);
    }
}

