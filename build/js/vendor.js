'use strict';
// mask
var element = document.getElementById('tel');

if (element) {
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);
}
