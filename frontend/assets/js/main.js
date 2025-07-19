fetch('http://localhost:3000/api/productos')
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById('productos-container');

    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
        <h2>${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p>${producto.descripcion}</p>
        <p><strong>Precio:</strong> Bs. ${producto.precio}</p>
      `;
      contenedor.appendChild(div);
    });
  });
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
});