const express = require('express'); // Importa el framework Express
const app = express(); // Crea una aplicación Express
const port = 3000; // Puedes usar cualquier puerto disponible

// Define una ruta básica inicial para probar el servidor
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde mi primera API con Express!');
});

app.get('/noticias', (req, res) => {
  
    const noticias = [
      { id: 1, titulo: 'Noticia 1', contenido: 'Contenido de la noticia 1' },
      { id: 2, titulo: 'Noticia 2', contenido: 'Contenido de la noticia 2' },
      { id: 3, titulo: 'Noticia 3', contenido: 'Contenido de la noticia 3' },
    ];

    res.json(noticias);
});

// Inicia el servidor y escucha en el puerto definido
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});