async function cargarProductos() {
  const response = await fetch('http://localhost:3000/api/productos');
  const productos = await response.json();
  
  const contenedor = document.getElementById('productos-container');
  productos.forEach(producto => {
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
      </div>
    `;
  });
}

document.addEventListener('DOMContentLoaded', cargarProductos);