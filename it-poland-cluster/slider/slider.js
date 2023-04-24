var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 3000,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
    },
    slidesPerView: 3,
    breakpoints: {
      425: {
        slidesPerView: 2,
      },
    },
    centeredSlides: true,
});