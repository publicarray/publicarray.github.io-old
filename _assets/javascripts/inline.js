// http://youmightnotneedjquery.com/#ready
function domReady(fn) {
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

(function () { // don't pollute DOM with global vars
  'strict mode'
  // check for js, transition and transform support
  var style = document.documentElement.style;
  if ('transition' in style && 'transform' in style || 'WebkitTransition' in style && 'WebkitTransform' in style) {
    document.documentElement.classList.add('sr');
  }

  function show(el) {
    el.classList.add('visible');
  }

  function reveal(els, interval) {
    if (interval) {
      for (var i = els.length - 1; i >= 0; i--) {
        setTimeout(show.bind(null, els[i]), interval*i);
      }
    } else {
      for (var i = els.length - 1; i >= 0; i--) {
        show(els[i]);
      }
    }
  }

  function loadGlyps() {
    document.body.classList.add('font-loaded');
  }

  domReady(function () { // when Dom ready reveal elements
    var revealEls = document.getElementsByClassName('reveal');
    reveal(revealEls, 180);

    // animate social icons
    waitForWebfont('ionicons', function() {
      var socialRevealEls = document.getElementsByClassName('social-reveal');
      reveal(socialRevealEls);
    });
  });

  // https://www.paulirish.com/2009/fighting-the-font-face-fout/
  // https://medium.com/@addyosmani/javascript-start-up-performance-69200f43b201
  function waitForWebfont(font, callback) {
      if (performance.mark) {
        performance.mark("web fonts start");
      }
      // http://caniuse.com/#feat=font-loading
      var fontsAPI = document.fonts;
      var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') != -1 &&
        navigator.userAgent.toLowerCase().indexOf('chrome') == -1;

      if (fontsAPI && !isSafari) {
        console.log("A-grade font loading")
        // ready is fulfilled when all of the fonts are loaded
        // and ready to be used, or rejected if any font failed to load properly.
        fontsAPI.ready.then(function () {
          // check determines whether you can "safely" render some provided text
          // with a particular font list, such that it won’t cause a "font swap" later.
          if (fontsAPI.check('1em ' + font)) {
            loadGlyps(); // only load font glyps when the font is loaded and ready
          }
          callback();  // do animation when allFonts are ready (not necessaraly loades)

          if (performance.mark) {
            performance.mark("web fonts downloaded");
            performance.measure("web fonts", "web fonts start", "web fonts downloaded");
          }
        });
      } else { // fall-back to probing
        console.log("B-grade font loading")
        // https://stackoverflow.com/questions/4383226/using-jquery-to-know-when-font-face-fonts-are-loaded#11689060
        // https://css-tricks.com/using-requestanimationframe/
        // http://caniuse.com/#feat=requestanimationframe
        var requestAnimationFrame = window.requestAnimationFrame ||
          function (f) {return setTimeout(f, 50)};

        var iteration = 0;
        var node = document.createElement('span');
        // Characters for testing char width
        node.innerHTML = '&#xf423;';
        // Visible - so we can measure it - but not on the screen
        node.style.position      = 'absolute';
        node.style.top           = '-10000px';
        node.style.left          = '-10000px';
        // Large font size makes even subtle changes obvious
        node.style.fontSize      = '300px';
        node.style.fontFamily    = 'sans-serif';
        document.body.appendChild(node);
        // Remember width with no applied web font
        var width = node.offsetWidth;
        // change font
        node.style.fontFamily = font + ', sans-serif';

        // wait for font to load and compare the width
        function checkFont() {
           // wait for a maximum of (750 ms) 15 iterations before animation
          if (iteration == 15 || node && node.offsetWidth != width) {
            callback(); // do animation even when fonts are not yet ready (use fallback text)
          }
          // Compare current width with original width
          if (node && node.offsetWidth != width) {
            // font has loaded
            node.parentNode.removeChild(node);
            node = null;
            loadGlyps(); // only load font glyps when the font is loaded and ready
            return true;
          }
          iteration++;
          requestAnimationFrame(checkFont);
        }
        requestAnimationFrame(checkFont);
      }
  }
})();
