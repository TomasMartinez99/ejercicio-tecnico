import React, { useState } from 'react';
import axios from 'axios';

function AddComment({ onCommentAdded }) {
    const [usuario, setUsuario] = useState(''); // Nuevo estado para el usuario
    const [contenido, setContenido] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/comentarios', { usuario, contenido });

            if (response.data ) {
                setUsuario(''); // Limpiar el campo usuario después de enviar
                setContenido(''); // Limpiar el campo contenido después de enviar
                window.location.reload();
            }
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />
                </div>
                <br />
                <div>
                    <label>Comentario:</label>
                    <textarea
                        value={contenido}
                        onChange={(e) => setContenido(e.target.value)}
                        required
                    />
                </div>
                <br />
                <div>
                    <button type="submit">Agregar comentario</button>
                </div>
            </form>
        </div>
    );
}

export default AddComment;
