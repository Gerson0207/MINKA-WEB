const express = require('express');
const router = express.Router();
const {
  getCarrito,
  addToCarrito
} = require('../controllers/carritoController');

router.get('/', getCarrito);
router.post('/', addToCarrito);

module.exports = router;