// Detectar cuando la página hace scroll y añadir la clase 'visible' para animaciones
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.section');
    elements.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Función para descargar el CV
document.getElementById('cvBtn').addEventListener('click', function() {
    window.location.href = 'https://mi-cv.com/mi-cv.pdf'; // Sustituye este enlace con el tuyo
});
