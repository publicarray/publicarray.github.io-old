//= require scrollreveal

// http://youmightnotneedjquery.com/#ready
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

// Initialize scrollreveal
ready(function() {
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
});
