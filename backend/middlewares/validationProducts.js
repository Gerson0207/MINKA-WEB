function validarProducto(req, res, next) {
  const { nombre, precio, categoria } = req.body;
  const categoriasPermitidas = ['tecnologia', 'hogar', 'ropa'];

  if (!nombre || !precio || !categoria) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  if (precio <= 0) {
    return res.status(400).json({ error: 'El precio debe ser positivo' });
  }

  if (!categoriasPermitidas.includes(categoria)) {
    return res.status(400).json({ error: 'Categoría no permitida' });
  }

  next();
}

module.exports = validarProducto;