const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const productos = [
  { id: 1, nombre: 'Celular Samsung', precio: 1500 },
  { id: 2, nombre: 'Laptop HP', precio: 3500 },
];

// Ruta simple
app.get('/', (req, res) => res.send('API MINKA funcionando'));

// Ruta productos
app.get('/api/productos', (req, res) => res.json(productos));

app.listen(3000, () => console.log('Servidor backend en puerto 3000'));
