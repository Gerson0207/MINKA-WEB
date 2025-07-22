const Carrito = require('../models/carrito');

exports.getCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.getAll();
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener carrito' });
  }
};

exports.addToCarrito = async (req, res) => {
  try {
    const { productoId, cantidad } = req.body;
    const item = await Carrito.addItem(productoId, cantidad);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  exports.getCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.getAll();
    const productos = await Producto.getAll(); // Asegúrate de importar el modelo Producto
    
    const carritoConDetalles = carrito.map(item => {
      const producto = productos.find(p => p.id == item.productoId);
      return {
        ...item,
        nombre: producto?.nombre || 'Producto eliminado',
        precio: producto?.precio || 0
      };
    });
    
    res.json(carritoConDetalles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener carrito' });
  }
};
};