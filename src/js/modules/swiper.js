import Swiper from 'swiper/bundle';

import 'swiper/css';

function swiper() {
  const swiper = new Swiper('.swiper', {

    slidesPerView: "auto",
    spaceBetween: 12,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      840: {
        spaceBetween: 24,
      }
    }

  });
}


export default swiper;