const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importa el middleware cors

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Habilita CORS para todas las rutas
app.use(cors());

app.post('/verificarSRI', async (req, res) => {
    try {
      const { numeroRuc } = req.body;
      const response = await axios.get(`https://srienlinea.sri.gob.ec/sri-catastro-sujeto-servicio-internet/rest/ConsolidadoContribuyente/existePorNumeroRuc?numeroRuc=${numeroRuc}`);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en la verificación del SRI', details: error.message });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Servidor de MicroservicioSRI en http://localhost:${PORT}`);
});
