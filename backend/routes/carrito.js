const express = require('express');
const router = express.Router();
const { 
  getCarrito, 
  addToCarrito, 
  deleteFromCarrito 
} = require('../controllers/carritoController');

router.get('/', getCarrito);
router.post('/', addToCarrito);
router.delete('/:productoId', deleteFromCarrito);

module.exports = router;