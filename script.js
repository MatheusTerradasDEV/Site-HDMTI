const carousel = document.getElementById('carousel');
const totalItems = document.querySelectorAll('.carousel-item').length;
let currentIndex = 0;

// Define quantos itens mostrar por vez, dependendo do tamanho da tela
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
    
    currentIndex += itemsToShow; // Avançar de acordo com o número de itens visíveis
    
    if (currentIndex / itemsToShow > maxIndex) {
        currentIndex = 0; // Volta ao início se ultrapassar o total de itens
    }
    updateCarousel();
}

// Avançar automaticamente a cada 4 segundos
setInterval(nextSlide, 4000); // Intervalo mais lento (4s)

// Atualiza o carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarousel);






const menuToggle = document.getElementById('menuToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const menuIcon = document.getElementById('menuIcon');

    menuToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('open');
      menuIcon.classList.toggle('active');
    });