document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".projects_slider", {
    slidesPerView: 1.1,
    spaceBetween: 20,

    grabCursor: true,
    speed: 600,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 1.4,
      },
      900: {
        slidesPerView: 2.2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
});
