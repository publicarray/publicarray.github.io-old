//= require scrollreveal

function forceRedraw (domEl) {
  if (window.chrome) { // if Google chrome
    // force browser to redraw dom element.
    domEl.style.display='table';
    domEl.offsetHeight;
    domEl.style.display='';
    // domEl.style.webkitFontSmoothing = antialiased;
  }
}

// http://youmightnotneedjquery.com/#ready
// function ready(fn) {
//   if (document.readyState != 'loading'){
//     fn();
//   } else if (document.addEventListener) {
//     document.addEventListener('DOMContentLoaded', fn);
//   } else {
//     document.attachEvent('onreadystatechange', function() {
//       if (document.readyState != 'loading')
//         fn();
//     });
//   }
// }

window.sr = ScrollReveal();
// Add class to <html> if ScrollReveal is supported
if (sr && sr.isSupported()) {
  document.documentElement.classList.add('sr');
}

// Initialize scrollreveal
sr.reveal('.reveal', {
  distance: '15px',
  scale: 0.9,
  duration: 180,
  viewFactor: 0,
  afterReveal: forceRedraw
}, 180);
sr.reveal('.social-reveal', {
  distance: '200px',
  origin: 'right',
  scale: .9,
  delay: 100,
  useDelay: 'onload',
  duration: 400,
  viewFactor: 0,
  afterReveal: forceRedraw
});
