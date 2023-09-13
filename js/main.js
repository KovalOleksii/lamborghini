// МЕНЮ БУРГЕР
const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
});


// СЛАЙДЕР
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    // СМЕНИЛ КЛЛАСЫ И УБРАЛИСЬ КНОПКИ СТАНДАРТНЫЕ И HTML
    nextEl: '.swiper-button-left',
    prevEl: '.swiper-button-right',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,    
    }
  }
});

 
