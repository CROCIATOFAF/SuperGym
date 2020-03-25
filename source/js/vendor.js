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
  dots: false,
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
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
});

// visitor-review.scss
var reviewsContainer = document.querySelector('.visitor-review__container');
var reviewsList = document.querySelector('.visitor-review__list');
$(reviewsList).slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  prevArrow: reviewsContainer.querySelector('.visitor-review__arrow-left'),
  nextArrow: reviewsContainer.querySelector('.visitor-review__arrow-right')
});
