const carousel = document.getElementById('carousel');
const totalItems = document.querySelectorAll('.carousel-item').length;
let currentIndex = 0;

function getItemsToShow() {
    return window.innerWidth >= 768 ? 4 : 1;
}

function updateCarousel() {
    const itemsToShow = getItemsToShow();
    const offset = currentIndex * -100 / itemsToShow;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    const itemsToShow = getItemsToShow();
    const maxIndex = Math.ceil(totalItems / itemsToShow) - 1;
    
    currentIndex += itemsToShow; 
    
    if (currentIndex / itemsToShow > maxIndex) {
        currentIndex = 0; 
    }
    updateCarousel();
}

setInterval(nextSlide, 4000); 

window.addEventListener('resize', updateCarousel);

// Menu hambúrguer
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navLinks.classList.toggle('active');
        console.log('Menu clicked');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Controle de visibilidade do menu hambúrguer
const videoSection = document.querySelector('.video-section');

if (menuIcon && videoSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se a seção de vídeo estiver visível, esconde o menu
            if (entry.isIntersecting) {
                menuIcon.classList.add('hidden');
            } else {
                // Se estiver acima da seção de vídeo, mostra o menu
                const rect = entry.target.getBoundingClientRect();
                if (rect.top > window.innerHeight) {
                    menuIcon.classList.remove('hidden');
                }
            }
        });
    }, {
        threshold: 0.1 // 10% da seção visível é suficiente para trigger
    });

    observer.observe(videoSection);

    // Controle adicional baseado no scroll
    window.addEventListener('scroll', () => {
        const videoRect = videoSection.getBoundingClientRect();
        if (window.scrollY < videoRect.top) {
            menuIcon.classList.remove('hidden');
        } else {
            menuIcon.classList.add('hidden');
        }
    });
}