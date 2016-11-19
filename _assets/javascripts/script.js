//= require jquery
//= require vendor/jquery-throttle-debounce.js
//= require fluidbox

$(function () {
  $('.fluidbox-trigger').fluidbox({
    // viewportFill: 0.95,
    immediateOpen: false,
    loader: true
  });
})

