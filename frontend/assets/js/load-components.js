// Cargar Header y Footer en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    // Cargar Header
    fetch('../components/header.html')
        .then(response => {
            if (!response.ok) throw new Error("Header no encontrado");
            return response.text();
        })
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
            // Ejecutar scripts del header (como el carrito)
            if (typeof initHeader === 'function') initHeader();
        })
        .catch(error => console.error('Error loading header:', error));

    // Cargar Footer
    fetch('../components/footer.html')
        .then(response => {
            if (!response.ok) throw new Error("Footer no encontrado");
            return response.text();
        })
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
});