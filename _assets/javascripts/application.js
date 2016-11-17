//= require_self

// Initialize fluidbox

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
  duration: 400,
  delay: 0,
  opacity: 0,
  scale: 0.9,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  mobile: true,
  reset: false,
  // easing: 'ease-in-out',
  origin: 'bottom',
  // scale: 1,
  reset: false,
  // viewFactor: 0.2,
  viewFactor: 0
});

// WebFont.load({
//   google: {
//     families: ['Cormorant Garamond:700', 'Lato:300,400,700']
//   }
// });

// {% if site.ga_analytics %}
//     window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
//     ga('create','{{ site.ga_analytics }}','auto');ga('send','pageview')
// {% endif %}
