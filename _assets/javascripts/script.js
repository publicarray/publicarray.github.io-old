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

// Initialize scrollreveal
sr.reveal('.reveal', {
  distance: '15px',
  scale: 0.9,
  duration: 180,
  viewFactor: 0,
  afterReveal: function (domEl) {
    if (window.chrome) { // if Google chrome
      // force browser to redraw dom element.
      domEl.style.display='table';
      domEl.offsetHeight;
      domEl.style.display='';
      // domEl.style.webkitFontSmoothing = antialiased;
    }
  }
}, 180);
