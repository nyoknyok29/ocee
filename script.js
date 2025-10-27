document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    const likeButtons = document.querySelectorAll('.like-btn');
    const header = document.querySelector('.header');

    // 1. Toggle Menu Navigasi (Mobile)
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            // Ganti icon burger ke close (X)
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 2. Animasi Like Button
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            console.log('Produk disukai/tidak disukai!');
        });
    });

    // 3. Header Background saat Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)'; 
        } else {
            header.style.backgroundColor = 'var(--bg-light)';
        }
    });

    // 4. Scroll Reveal Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Ketika 15% elemen terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Amati elemen produk dan ulasan
    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        observer.observe(el);
    });
});