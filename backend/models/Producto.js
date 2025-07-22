const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/productos.json');

class Producto {
  static async getAll() {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
  }

  static async create(producto) {
    const productos = await this.getAll();
    const nuevoProducto = { id: productos.length + 1, ...producto };
    productos.push(nuevoProducto);
    fs.writeFileSync(dataPath, JSON.stringify(productos, null, 2));
    return nuevoProducto;
  }
}

module.exports = Producto;