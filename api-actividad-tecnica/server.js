const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;
const LARAVEL_ENDPOINT = 'http://localhost:8000/api';

app.use(cors());
app.use(bodyParser.json());

// Obtener todos los comentarios
app.get('/comentarios', async (req, res) => {
    try {
        const response = await axios.get(`${LARAVEL_ENDPOINT}/comentarios`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener comentarios' });
    }
});

// Crear un nuevo comentario
app.post('/comentarios', async (req, res) => {
    try {
        const response = await axios.post(`${LARAVEL_ENDPOINT}/comentarios`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Error detallado:", error.response.data || error.message);  // Esto imprimirá el error detallado
        res.status(500).json({ error: 'Error al crear comentario', detalle: error.response.data || error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
