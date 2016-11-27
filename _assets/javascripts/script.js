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

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    // Registration was successful
    console.info('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.error('ServiceWorker registration failed: ', err);
  });
} else {
  console.log('Service workers are not supported');
}
