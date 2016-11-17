//= require jquery
//= require vendor/jquery-throttle-debounce.js
//= require fluidbox

$(function () {
  $('.fluidbox-trigger').fluidbox({
    viewportFill: 0.9,
    immediateOpen: false,
    loader: true
  });
})

// Initialize scrollreveal
sr.reveal('.reveal', {
  distance: '15px',
  // duration: 400,
  scale: 0.9,
  duration: 180,
  viewFactor: 0
}, 180);
