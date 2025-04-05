/**
 * Main JavaScript for Akhil Kalia's Professional Website
 * Author: Manus AI
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVBAR SCROLL BEHAVIOR =====
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
    });
    
    // ===== SMOOTH SCROLLING FOR NAVIGATION =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
    
    // ===== BACK TO TOP BUTTON =====
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    // ===== TOGGLE EXPERIENCE DETAILS =====
    const toggleButtons = document.querySelectorAll('.toggle-details');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement.style.display === 'none' || !targetElement.style.display) {
                targetElement.style.display = 'block';
                this.textContent = 'Less Details';
            } else {
                targetElement.style.display = 'none';
                this.textContent = 'More Details';
            }
        });
    });
    
    // ===== VIEW MORE EXPERIENCE BUTTON =====
    const viewMoreButton = document.getElementById('viewMoreExperience');
    const moreExperienceItems = document.getElementById('moreExperienceItems');
    
    if (viewMoreButton && moreExperienceItems) {
        viewMoreButton.addEventListener('click', function() {
            if (moreExperienceItems.style.display === 'none' || !moreExperienceItems.style.display) {
                moreExperienceItems.style.display = 'block';
                this.textContent = 'View Less Experience';
            } else {
                moreExperienceItems.style.display = 'none';
                this.textContent = 'View More Experience';
            }
        });
    }
    
    // ===== ANIMATE SKILL BARS =====
    function animateSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');
        
        skillLevels.forEach(skill => {
            const width = skill.style.width;
            skill.style.width = '0';
            
            setTimeout(() => {
                skill.style.width = width;
            }, 200);
        });
    }
    
    // Animate skill bars when skills section is in viewport
    const skillsSection = document.getElementById('skills');
    let skillsAnimated = false;
    
    function checkSkillsVisibility() {
        if (!skillsAnimated && isElementInViewport(skillsSection)) {
            animateSkillBars();
            skillsAnimated = true;
        }
    }
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        if (!el) return false;
        
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Check skills visibility on scroll
    window.addEventListener('scroll', checkSkillsVisibility);
    
    // Initial check for skills visibility
    checkSkillsVisibility();
    
    // ===== CONTACT FORM SUBMISSION =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real implementation, you would send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! This is a demo form. In a production environment, your message would be sent to Akhil Kalia.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // ===== DOWNLOAD CV BUTTON =====
    const downloadCVButton = document.getElementById('downloadCV');
    
    if (downloadCVButton) {
        downloadCVButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would download the actual CV
            // For now, we'll trigger the print dialog to create a PDF
            window.print();
        });
    }
    
    // ===== DARK MODE TOGGLE =====
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add('dark-mode');
        updateDarkModeIcon(true);
    }
    
    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            
            // Save preference to localStorage
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            
            // Update icon
            updateDarkModeIcon(isDarkMode);
        });
    }
    
    // Update dark mode toggle icon
    function updateDarkModeIcon(isDarkMode) {
        if (!darkModeToggle) return;
        
        const icon = darkModeToggle.querySelector('i');
        if (isDarkMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    // ===== INITIALIZE ANIMATIONS =====
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.section-header, .timeline-item, .education-item, .achievement-item');
        
        animatedElements.forEach(element => {
            element.classList.add('fadeIn');
        });
    }
    
    // Initialize animations after a short delay
    setTimeout(initAnimations, 500);
});
