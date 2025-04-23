// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Adjust for header height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === current) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    
    // Scroll animations for elements
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .floating-card, .discord-card, .section-title');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('show');
            }
        });
    }
    
    // Add CSS class for animation elements
    const animationElements = document.querySelectorAll('.feature-card, .floating-card, .discord-card, .section-title');
    animationElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    
    // Call once to check for elements in view on page load
    animateOnScroll();
    
    // Use placeholder images if server-side images are missing
    const placeholderImages = document.querySelectorAll('[id$="-placeholder"]');
    
    placeholderImages.forEach(img => {
        img.addEventListener('error', function() {
            // Set placeholder images for missing images
            if (img.id === 'logo-placeholder' || img.id === 'footer-logo-placeholder') {
                this.src = 'https://via.placeholder.com/40/5865F2/FFFFFF?text=DS';
            } else if (img.id === 'server-icon-placeholder') {
                this.src = 'https://via.placeholder.com/100/5865F2/FFFFFF?text=DISCORD';
            }
        });
        
        // Manually trigger the error handler to check images
        if (img.complete && img.naturalHeight === 0) {
            img.dispatchEvent(new Event('error'));
        }
    });
    
    // Create images directory if needed
    function checkImagesDir() {
        // This is a client-side script, so we can't directly check if the directory exists.
        // We'll just ensure the placeholder fallbacks work.
        const testImage = new Image();
        testImage.src = 'images/logo.png?' + new Date().getTime(); // Prevent caching
        
        testImage.onerror = function() {
            console.log('Note: The "images" directory might be missing. Placeholders will be used instead.');
            
            placeholderImages.forEach(img => {
                img.dispatchEvent(new Event('error'));
            });
        };
    }
    
    checkImagesDir();
    
    // Create a loading animation
    const body = document.body;
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="spinner">
            <i class="fab fa-discord"></i>
        </div>
    `;
    
    body.appendChild(loadingOverlay);
    
    // Hide loading screen when page is fully loaded
    window.addEventListener('load', function() {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
        
        // Add entry animation to hero section
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent) heroContent.classList.add('animated');
        if (heroImage) heroImage.classList.add('animated');
    });
    
    // Add CSS for the new elements we created in JS
    const style = document.createElement('style');
    style.textContent = `
        /* Loading Overlay */
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .spinner {
            width: 70px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: pulse 1.5s ease-in-out infinite;
        }
        
        .spinner i {
            font-size: 3rem;
            color: var(--primary-color);
        }
        
        @keyframes pulse {
            0% {
                transform: scale(0.95);
                opacity: 0.7;
            }
            50% {
                transform: scale(1.05);
                opacity: 1;
            }
            100% {
                transform: scale(0.95);
                opacity: 0.7;
            }
        }
        
        /* Navigation for mobile devices */
        @media (max-width: 768px) {
            .nav-links {
                position: absolute;
                top: 70px;
                left: 0;
                width: 100%;
                background: white;
                flex-direction: column;
                align-items: center;
                padding: 20px 0;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                transform: translateY(-150%);
                transition: transform 0.3s ease;
                z-index: 999;
            }
            
            .nav-links.active {
                transform: translateY(0);
                display: flex;
            }
            
            .nav-links a {
                margin: 10px 0;
            }
        }
        
        /* Animation classes for scroll effects */
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Entry animations for hero section */
        .hero-content {
            opacity: 0;
            transform: translateX(-50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .hero-image {
            opacity: 0;
            transform: translateX(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .hero-content.animated, .hero-image.animated {
            opacity: 1;
            transform: translateX(0);
        }
    `;
    
    document.head.appendChild(style);
}); 