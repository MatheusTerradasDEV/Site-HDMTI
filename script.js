const carousel = document.querySelector('.clientes-carousel');
const leftArrow = document.querySelector('.seta-esquerda');
const rightArrow = document.querySelector('.seta-direita');
let scrollInterval;


function scrollLeft() {
  carousel.scrollLeft -= 10;
}


function scrollRight() {
  carousel.scrollLeft += 10;
}


leftArrow.addEventListener('mouseenter', () => {
  scrollInterval = setInterval(scrollLeft, 10);
});

rightArrow.addEventListener('mouseenter', () => {
  scrollInterval = setInterval(scrollRight, 10);
});


leftArrow.addEventListener('mouseleave', () => {
  clearInterval(scrollInterval);
});

rightArrow.addEventListener('mouseleave', () => {
  clearInterval(scrollInterval);
});








document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
      threshold: 0.2 // 20% do elemento deve estar visível para disparar
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          }
      });
  }, observerOptions);

  // Seleciona elementos que terão animação
  const elementsToAnimate = document.querySelectorAll('.section-title, .section-description, .service-item, .service-item-content');
  elementsToAnimate.forEach(element => observer.observe(element));
});









// script.js
window.onscroll = function() {
  var header = document.querySelector(".header");
  if (window.scrollY > 50) {  // Quando a rolagem for maior que 50px
      header.classList.add("transparent");
  } else {
      header.classList.remove("transparent");
  }
};
