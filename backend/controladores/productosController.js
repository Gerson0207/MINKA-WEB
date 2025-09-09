const Producto = require('../models/producto');

exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.getAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

exports.createProducto = async (req, res) => {
  try {
    const { nombre, precio, categoria } = req.body;
    if (!nombre || !precio || precio <= 0) {
      return res.status(400).json({ error: 'Datos inválidos' });
    }
    const nuevoProducto = await Producto.create({ nombre, precio, categoria });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.getById(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar producto' });
  }
};