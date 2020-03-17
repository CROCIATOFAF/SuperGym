'use strict';
var btnScrollDown =
document.querySelector('.promo__button');
var subscriptionSection = document.querySelector('.subscriptions');

btnScrollDown.addEventListener('click', function (evt) {
  evt.preventDefault();
  subscriptionSection.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
});
