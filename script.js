// Custom Cursor with enhanced interactions
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const speed = 0.2;
    const followerSpeed = 0.1;
    
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    followerX += (mouseX - followerX) * followerSpeed;
    followerY += (mouseY - followerY) * followerSpeed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .btn-primary, .btn-secondary, .project-card, .skill-card, .info-card, .journey-card');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Smooth Scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards with stagger effect per section
const sections = ['#projects', '#skills', '#about', '#journey'];
sections.forEach(sectionId => {
    const section = document.querySelector(sectionId);
    if (section) {
        const cards = section.querySelectorAll('.project-card, .skill-card, .info-card, .journey-card');
        cards.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            el.dataset.delay = index * 100;
            observer.observe(el);
        });
    }
});

// Section title animations
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            titleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.section-title').forEach(title => {
    titleObserver.observe(title);
});


// Parallax scroll effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0005})`;
    }
});

// Add subtle tilt effect on cards
const tiltCards = document.querySelectorAll('.project-card, .skill-card, .journey-card');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (!card.classList.contains('animated')) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        if (card.classList.contains('animated')) {
            card.style.transform = 'translateY(0)';
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.padding = '1.2rem 5%';
        nav.style.background = 'rgba(10, 10, 10, 0.85)';
        nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.padding = '2rem 5%';
        nav.style.background = 'rgba(10, 10, 10, 0.6)';
        nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Magnetic button effect
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) translateY(-4px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

// Prefers reduced motion check
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    document.body.style.cursor = 'auto';
    if (cursor) cursor.style.display = 'none';
    if (follower) follower.style.display = 'none';
}

// Immediate typing animation
const heroDesc = document.querySelector('.hero-description');
if (heroDesc && !prefersReducedMotion) {
    const text = heroDesc.textContent;
    heroDesc.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    heroDesc.appendChild(cursor);
    
    let i = 0, lastTime = 0;
    function type(time) {
        if (time - lastTime > (text[i] === ' ' ? 20 : 30)) {
            if (i < text.length) {
                heroDesc.insertBefore(document.createTextNode(text[i++]), cursor);
                lastTime = time;
            } else {
                cursor.style.animation = 'blink 0.8s infinite';
                return;
            }
        }
        requestAnimationFrame(type);
    }
    requestAnimationFrame(type);
}
