// 1. HEADER PEGAJOSO
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});

// 2. ANIMACIÓN DE APARICIÓN
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section, article.item, .review-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// 3. AÑO AUTOMÁTICO FOOTER
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}