document.getElementById('form-producto').addEventListener('submit', async function (e) {
  e.preventDefault();

  const producto = {
    nombre: document.getElementById('nombre').value,
    precio: parseFloat(document.getElementById('precio').value),
    descripcion: document.getElementById('descripcion').value,
    imagen: document.getElementById('imagen').value
  };

  try {
    const res = await fetch('http://localhost:3000/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto)
    });

    const data = await res.json();
    document.getElementById('mensaje').innerText = data.mensaje;
  } catch (err) {
    console.error(err);
    document.getElementById('mensaje').innerText = 'Error al agregar producto.';
  }
});
