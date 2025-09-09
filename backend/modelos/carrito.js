const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/carrito.json');

class Carrito {
  static async getAll() {
    if (!fs.existsSync(dataPath)) return [];
    return JSON.parse(fs.readFileSync(dataPath));
  }

  static async addItem(productoId, cantidad) {
    const items = await this.getAll();
    const nuevoItem = { id: items.length + 1, productoId, cantidad };
    items.push(nuevoItem);
    fs.writeFileSync(dataPath, JSON.stringify(items, null, 2));
    return nuevoItem;
  }
}

module.exports = Carrito;