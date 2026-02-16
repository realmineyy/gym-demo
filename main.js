// IronPeak Fitness - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Navbar scroll effect
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
            // Scrolling down
            nav.classList.remove('scroll-up');
            nav.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
            // Scrolling up
            nav.classList.remove('scroll-down');
            nav.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    const sections = document.querySelectorAll('.program-card, .coach-card, .proof-card, .why-item');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                goal: document.getElementById('goal').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission
            console.log('Form submitted:', formData);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
        });
    }
    
    function showSuccessMessage() {
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="16 9 10 15 8 13"/>
                </svg>
                <h3>Thank You!</h3>
                <p>We've received your request and will get back to you within 24 hours to schedule your free trial class.</p>
                <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">Got It</button>
            </div>
        `;
        
        // Add styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .success-message {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            
            .success-content {
                background: var(--color-surface);
                padding: 3rem;
                border-radius: var(--radius);
                text-align: center;
                max-width: 500px;
                border: 2px solid var(--color-primary);
                animation: slideUp 0.4s ease;
            }
            
            .success-content svg {
                color: var(--color-primary);
                margin-bottom: 1rem;
            }
            
            .success-content h3 {
                font-family: var(--font-display);
                font-size: 2rem;
                letter-spacing: 1px;
                margin-bottom: 1rem;
            }
            
            .success-content p {
                color: var(--color-text-secondary);
                margin-bottom: 2rem;
                line-height: 1.8;
            }
            
            @keyframes slideUp {
                from {
                    transform: translateY(30px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(successMessage);
    }
    
    // Add parallax effect to hero background
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
    
    // Animate statistics on scroll
    const stats = document.querySelectorAll('.stat-number, .visual-number');
    
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + (element.dataset.suffix || '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const text = entry.target.textContent.trim();
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                
                if (!isNaN(number)) {
                    entry.target.dataset.suffix = text.replace(/[0-9]/g, '');
                    animateValue(entry.target, 0, number, 2000);
                }
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // Add hover effect to program cards
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.setProperty('--hover', '1');
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.setProperty('--hover', '0');
        });
    });
    
    // Lazy loading for images (when real images are added)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Add custom cursor effect (optional enhancement)
    const addCustomCursor = () => {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'cursor-follower';
        document.body.appendChild(cursorFollower);
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        const animateCursor = () => {
            // Smooth cursor movement
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
            
            requestAnimationFrame(animateCursor);
        };
        
        animateCursor();
        
        // Add hover effects
        const hoverElements = document.querySelectorAll('a, button, .program-card, .coach-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursorFollower.classList.add('cursor-hover');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursorFollower.classList.remove('cursor-hover');
            });
        });
    };
    
    // Uncomment to enable custom cursor (desktop only)
    // if (window.innerWidth > 768) {
    //     addCustomCursor();
    // }
    
    // Add scroll progress indicator
    const addScrollProgress = () => {
        const progress = document.createElement('div');
        progress.className = 'scroll-progress';
        progress.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progress);
        
        const progressBar = progress.querySelector('.scroll-progress-bar');
        
        window.addEventListener('scroll', () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.pageYOffset / scrollHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: rgba(255, 255, 255, 0.1);
                z-index: 9999;
            }
            
            .scroll-progress-bar {
                height: 100%;
                background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
                transition: width 0.1s ease;
            }
        `;
        document.head.appendChild(style);
    };
    
    addScrollProgress();
    
    console.log('IronPeak Fitness - Site loaded successfully!');
});