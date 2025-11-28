document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById("menuIcon");
    const mobileMenu = document.getElementById("mobileMenu");
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    // 1. Mobile Menu Toggle Functionality
    menuIcon.addEventListener("click", () => {
        // Toggle the 'active' class for slide-down animation
        mobileMenu.classList.toggle("active");
        // Toggle 'active' on the icon for rotation/visual change
        menuIcon.classList.toggle("active");
    });
    
    // Close menu when a link is clicked (for single-page smooth scroll)
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove("active");
                menuIcon.classList.remove("active");
            }
        });
    });


    // 2. Scroll Animation (Intersection Observer)
    // This watches for elements with the class 'animate-on-scroll'
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to apply the transition/animation
                entry.target.classList.add('is-visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Apply the observer to all sections/cards we want to animate
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });


    // 3. Contact Form Submission Handler (Client-side feedback only)
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission/page reload
        
        formMessage.classList.remove('hidden', 'success');
        
        // Display a success message
        formMessage.textContent = 'Message sent! I will be in touch soon.';
        formMessage.classList.add('success');
        
        contactForm.reset(); // Clear the form fields
        
        // Hide the message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    });
});