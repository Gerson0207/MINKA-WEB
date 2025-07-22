const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usersPath = path.join(__dirname, '../data/usuarios.json');

class Usuario {
  static async crear({ email, password }) {
    const usuarios = await this.getAll();
    const existe = usuarios.find(u => u.email === email);
    if (existe) throw new Error('El usuario ya existe');

    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = { id: usuarios.length + 1, email, password: hashedPassword };
    
    fs.writeFileSync(usersPath, JSON.stringify([...usuarios, nuevoUsuario], null, 2));
    return nuevoUsuario;
  }

  static async login({ email, password }) {
    const usuarios = await this.getAll();
    const usuario = usuarios.find(u => u.email === email);
    if (!usuario) throw new Error('Credenciales inválidas');

    const isValid = await bcrypt.compare(password, usuario.password);
    if (!isValid) throw new Error('Credenciales inválidas');

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }

  static async getAll() {
    if (!fs.existsSync(usersPath)) return [];
    return JSON.parse(fs.readFileSync(usersPath));
  }
}

module.exports = Usuario;