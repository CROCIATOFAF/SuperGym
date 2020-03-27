'use strict';

var tabs = document.querySelectorAll('.subscriptions__item-month');
var tabControls = document.querySelector('.subscriptions__controls-list');
var tabContent = document.querySelectorAll('.subscriptions__tabs-list');
var subscriptionsPage = document.querySelector('.subscriptions');

var visitorReview = document.querySelector('.visitor-review');
var visitorReviewSlide = document.querySelectorAll('.visitor-review__item');
var reviewArrowLeft = document.querySelector('.visitor-review__arrow-left');
var reviewArrowRight = document.querySelector('.visitor-review__arrow-right');

var coachesPage = document.querySelector('.coaches');
var coachesList = document.querySelector('.coaches__list');
var coachesSlides = document.querySelectorAll('.coaches__item');
var coachesArrowRight = document.querySelector('.coaches__arrow-right');
var coachesArrowLeft = document.querySelector('.coaches__arrow-left');

var btnScrollDown =
document.querySelector('.promo__button');

function switchTabs() {
  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.add('hide');
      tabContent[i].classList.remove('show');
      tabs[i].classList.remove('subscriptions__item-month--active');
    }
  }

  hideTabContent(1);

  function showTabContent(b, target) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
      target.classList.add('subscriptions__item-month--active');
    }
  }

  tabControls.addEventListener('click', function (evt) {
    var target = evt.target;
    if (target && target.classList.contains('subscriptions__item-month')) {
      for (var i = 0; i < tabs.length; i++) {
        if (target === tabs[i]) {
          hideTabContent(0);
          showTabContent(i, target);
          break;
        }
      }
    }
  });
}

if (subscriptionsPage) {
  switchTabs();
}

function switchSlider(step, slides, prev, next) {
  var startIndex = 0;
  var endIndex = step;

  function showSlide(n, k) {
    for (var j = 0; j < slides.length; j++) {
      slides[j].style.display = 'none';
    }

    for (var i = n; i < k; i++) {
      if (slides[i]) {
        slides[i].style.display = 'block';
      }
    }
  }

  showSlide(startIndex, endIndex);

  function plusSlide(n) {
    showSlide(startIndex += n, endIndex += n);
  }


  next.addEventListener('click', function () {
    if (endIndex < slides.length) {
      plusSlide(step);
    }
  });


  prev.addEventListener('click', function () {
    if (startIndex >= step) {
      plusSlide(-step);
    }
  });
}

function changeCoachesSlider() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    switchSlider(1, coachesSlides, coachesArrowLeft, coachesArrowRight);
  } else if (window.matchMedia('(max-width: 1199px)').matches) {
    switchSlider(2, coachesSlides, coachesArrowLeft, coachesArrowRight);
  } else {
    switchSlider(4, coachesSlides, coachesArrowLeft, coachesArrowRight);
  }
}

if (coachesPage) {
  coachesArrowLeft.classList.remove('no-js');
  coachesArrowRight.classList.remove('no-js');
  changeCoachesSlider();
  window.addEventListener('resize', changeCoachesSlider);
}

if (visitorReview) {
  reviewArrowLeft.classList.remove('no-js');
  reviewArrowRight.classList.remove('no-js');
  coachesList.classList.remove('coaches__list--no-js');
  switchSlider(1, visitorReviewSlide, reviewArrowLeft, reviewArrowRight);
}

// добавить переменную блока и в window
var subscriptionsSecton = document.querySelector('.subscriptions');

btnScrollDown.addEventListener('click', function (evt) {
  evt.preventDefault();
  subscriptionsSecton.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
});
