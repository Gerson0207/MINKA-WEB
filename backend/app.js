const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const productosPath = path.join(__dirname, 'data/productos.json');
const carritoPath = path.join(__dirname, 'data/carrito.json');

// Helper: Leer archivos JSON
function leerJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath));
}

// Helper: Guardar archivos JSON
function guardarJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// ✅ Endpoints de Productos
app.get('/api/productos', (req, res) => {
  const productos = leerJSON(productosPath);
  res.json(productos);
});

app.get('/api/productos/:id', (req, res) => {
  const productos = leerJSON(productosPath);
  const producto = productos.find(p => p.id == req.params.id);
  producto ? res.json(producto) : res.status(404).json({ error: 'Producto no encontrado' });
});

app.post('/api/productos', (req, res) => {
  const productos = leerJSON(productosPath);
  const nuevoProducto = { id: productos.length + 1, ...req.body };
  productos.push(nuevoProducto);
  guardarJSON(productosPath, productos);
  res.status(201).json(nuevoProducto);
});

// ✅ Endpoints de Carrito (simplificado)
app.post('/api/carrito', (req, res) => {
  const carrito = leerJSON(carritoPath);
  const producto = leerJSON(productosPath).find(p => p.id == req.body.productoId);
  
  if (!producto) return res.status(404).json({ error: 'Producto no existe' });

  carrito.push(producto);
  guardarJSON(carritoPath, carrito);
  res.json({ mensaje: 'Producto agregado al carrito' });
});

app.get('/api/carrito', (req, res) => {
  const carrito = leerJSON(carritoPath);
  res.json(carrito);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🛒 Backend listo en http://localhost:${PORT}`));