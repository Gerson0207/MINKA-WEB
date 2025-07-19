fetch('http://localhost:3000/api/productos')
  .then(res => res.json())
  .then(data => {
    const lista = document.getElementById('lista-productos');
    data.forEach(producto => {
      const item = document.createElement('li');
      item.textContent = `${producto.nombre} - Bs.${producto.precio}`;
      lista.appendChild(item);
    });
  });
