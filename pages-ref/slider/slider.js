var mySwiper = new Swiper('.swiper-container', {
    effect: 'fade',
    speed: 1000,
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});