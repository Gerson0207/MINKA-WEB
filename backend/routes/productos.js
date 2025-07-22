// routes/productos.js
const express = require('express');
const router = express.Router();
const {
  getProductos,
  getProductoById,  // ¡Debe existir en el controller!
  createProducto
} = require('../controllers/productosController');

// Ruta GET (asegúrate de que getProductos esté definido)
router.get('/', getProductos); 

// Ruta GET por ID (si usas esta ruta, getProductoById debe existir)
router.get('/:id', getProductoById); 

// Ruta POST
router.post('/', createProducto);

module.exports = router;