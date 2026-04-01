// ===== Navbar scroll effect =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Mobile menu toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ===== Fade-in on scroll =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .stat-card, .skill-category, .passion-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Deep Dive toggle =====
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.hiw-toggle');
    if (!btn) return;
    btn.closest('.hiw-card').classList.toggle('expanded');
});

// ===== Project tab switching =====
document.querySelectorAll('.project-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.project-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.project-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.project).classList.add('active');
    });
});
