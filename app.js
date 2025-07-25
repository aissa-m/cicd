const express = require('express');
const app = express();

// Puerto
const PORT = process.env.PORT || 3000;

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('✅ ¡Hola desde tu app Node.js con CI/CD!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app; // para los tests si los usas
