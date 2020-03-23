'use strict';
// mask
var element = document.getElementById('tel');

if (element) {
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);
}

var coachesContainer = document.querySelector('.coaches__container');
var coachesList = document.querySelector('.coaches__list');

// coaches-carousel
$(coachesList).slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  prevArrow: coachesContainer.querySelector('.coaches__arrow-left'),
  nextArrow: coachesContainer.querySelector('.coaches__arrow-right'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// visitor-review.scss
var reviewsContainer = document.querySelector('.reviews__container');
var reviewsList = document.querySelector('.reviews__list');
$(reviewsList).slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  prevArrow: reviewsContainer.querySelector('.reviews__arrow-left'),
  nextArrow: reviewsContainer.querySelector('.reviews__arrow-right')
});
