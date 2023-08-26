/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 5,
 
  autoplay: true,
  autoplayHoverPause: true,


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    300: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});


