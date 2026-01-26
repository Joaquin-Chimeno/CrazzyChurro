
// Cuando el usuario hace scroll hacia abajo, el menú cambia de estilo
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});


// Hace que las secciones aparezcan suavemente al bajar
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Aplicamos la animación a todas las secciones
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});