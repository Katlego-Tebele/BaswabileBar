// ====================
// Smooth Scroll & Navigation
// ====================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Sticky Navbar on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // ====================
    // Gallery System
    // ====================

    const galleryImages = [
        { src: 'images/gallery/g1.png', category: 'mobile-bars', alt: 'Baswabile mobile bar setup' },
        { src: 'images/gallery/g2.png', category: 'events', alt: 'Baswabile event service' },
        { src: 'images/gallery/g3.png', category: 'cocktails', alt: 'Baswabile cocktail bar' },
        { src: 'images/gallery/g4.png', category: 'mobile-bars', alt: 'Baswabile elegant bar setup' },
        { src: 'images/gallery/g5.png', category: 'events', alt: 'Baswabile celebration setup' },
        { src: 'images/gallery/Background.png', category: 'mobile-bars', alt: 'Baswabile mobile bar service' },
        { src: 'images/gallery/about.us.png', category: 'events', alt: 'Baswabile event planning' },
        { src: 'images/gallery/makeup&installation.webp', category: 'events', alt: 'Baswabile makeup and installation services' }
    ];

    const galleryGrid = document.getElementById('galleryGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentCategory = 'all';

    // Check if galleryGrid exists
    if (!galleryGrid) {
        console.error('Gallery grid element not found!');
    } else {
        console.log('Gallery grid found, loading images...');
    }

    // Render Gallery
    function renderGallery(category = 'all') {
        if (!galleryGrid) {
            console.error('Cannot render gallery - galleryGrid is null');
            return;
        }

        console.log(`Rendering gallery with category: ${category}`);
        galleryGrid.innerHTML = '';
        
        const filteredImages = category === 'all' 
            ? galleryImages 
            : galleryImages.filter(img => img.category === category);

        console.log(`Found ${filteredImages.length} images to display`);

        filteredImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item reveal active';
            galleryItem.setAttribute('data-category', image.category);
            galleryItem.setAttribute('data-index', index);
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.loading = 'eager';
            
            // Add error handler
            img.onerror = function() {
                console.error(`Failed to load image: ${image.src}`);
            };
            
            img.onload = function() {
                console.log(`Successfully loaded: ${image.src}`);
            };
            
            galleryItem.appendChild(img);
            galleryGrid.appendChild(galleryItem);

            // Add click event for modal
            galleryItem.addEventListener('click', () => openModal(index));
        });

        console.log(`Gallery rendered with ${galleryGrid.children.length} items`);
    }

    // Filter Gallery
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            currentCategory = filterValue;
            renderGallery(filterValue);
        });
    });

    // Initial gallery render
    renderGallery();

    // ====================
    // Image Modal
    // ====================

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');
    let currentImageIndex = 0;

    function openModal(index) {
        currentImageIndex = index;
        const filteredImages = currentCategory === 'all' 
            ? galleryImages 
            : galleryImages.filter(img => img.category === currentCategory);
        
        modalImage.src = filteredImages[currentImageIndex].src;
        modalImage.alt = filteredImages[currentImageIndex].alt;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function showPrevImage() {
        const filteredImages = currentCategory === 'all' 
            ? galleryImages 
            : galleryImages.filter(img => img.category === currentCategory);
        
        currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
        modalImage.src = filteredImages[currentImageIndex].src;
        modalImage.alt = filteredImages[currentImageIndex].alt;
    }

    function showNextImage() {
        const filteredImages = currentCategory === 'all' 
            ? galleryImages 
            : galleryImages.filter(img => img.category === currentCategory);
        
        currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
        modalImage.src = filteredImages[currentImageIndex].src;
        modalImage.alt = filteredImages[currentImageIndex].alt;
    }

    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', showPrevImage);
    modalNext.addEventListener('click', showNextImage);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });

    // ====================
    // Booking Form
    // ====================

    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const eventType = document.getElementById('eventType').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventLocation = document.getElementById('eventLocation').value.trim();
        const serviceRequired = document.getElementById('serviceRequired').value;
        const additionalInfo = document.getElementById('additionalInfo').value.trim();

        // Validate form
        if (!fullName || !eventType || !eventDate || !eventLocation || !serviceRequired) {
            alert('Please fill in all required fields.');
            return;
        }

        // Validate date (should be in the future)
        const selectedDate = new Date(eventDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert('Please select a future date for your event.');
            return;
        }

        // Format the message
        let message = `Hello Baswabile Mobile Bars Services,\n\n`;
        message += `I would like to make a booking enquiry:\n\n`;
        message += `*Name:* ${fullName}\n`;
        message += `*Event Type:* ${eventType}\n`;
        message += `*Event Date:* ${formatDate(eventDate)}\n`;
        message += `*Location:* ${eventLocation}\n`;
        message += `*Service Required:* ${serviceRequired}\n`;
        
        if (additionalInfo) {
            message += `*Additional Information:* ${additionalInfo}\n`;
        }
        
        message += `\nLooking forward to hearing from you!`;

        // Encode the message for WhatsApp URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/27798599536?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Reset form
        bookingForm.reset();
    });

    // Date input minimum date
    const eventDateInput = document.getElementById('eventDate');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    eventDateInput.setAttribute('min', minDate);

    // ====================
    // Helper Functions
    // ====================

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-ZA', options);
    }

    // Prevent form submission on enter in text inputs (except textarea)
    const formInputs = bookingForm.querySelectorAll('input, select');
    formInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    });

    // ====================
    // Smooth Scrolling for Anchor Links
    // ====================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ====================
    // Performance: Lazy Loading Images
    // ====================

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
