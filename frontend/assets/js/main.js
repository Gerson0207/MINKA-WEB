// Consumir la API y mostrar productos en el index.html
fetch('http://localhost:3000/api/productos')
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById('productos-container');

    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>Precio: Bs. ${producto.precio}</p>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });
