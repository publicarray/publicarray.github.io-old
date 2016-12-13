'strict mode'
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

(function isSupported() { // check for js, transition and transform support
  var style = document.documentElement.style;
  if ('transition' in style && 'transform' in style || 'WebkitTransition' in style && 'WebkitTransform' in style) {
    document.documentElement.classList.add('sr');
  }
})();

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

ready(function () { // when Dom ready reveal elements
  var revealEls = document.getElementsByClassName('reveal');
  reveal(revealEls, 180);

  // animate social icons
  waitForWebfont('ionicons', function() {
    var socialRevealEls = document.getElementsByClassName('social-reveal');
    reveal(socialRevealEls);
  });
});

function waitForWebfont(font, callback) {
    console.time("web fonts");
    // http://caniuse.com/#feat=font-loading
    var fontsAPI = document.fonts;
    if (fontsAPI) {

      // ready is fulfilled when all of the fonts are loaded
      // and ready to be used, or rejected if any font failed to load properly.
      fontsAPI.ready.then(function () {
        // check determines whether you can "safely" render some provided text
        // with a particular font list, such that it won’t cause a "font swap" later.
        // if (fontsAPI.check('1em ' + font)) {
        //   console.log(font +' successfully loaded');
        callback();
        console.timeEnd("web fonts");
        // }
      });
    } else { // fall-back to probing
      // https://stackoverflow.com/questions/4383226/using-jquery-to-know-when-font-face-fonts-are-loaded#11689060
      var requestID;
      // https://css-tricks.com/using-requestanimationframe/
      // http://caniuse.com/#feat=requestanimationframe
      var requestAnimationFrame = window.requestAnimationFrame ||
        function (f) {return setTimeout(f, 50)};
      var cancelAnimationFrame = window.cancelAnimationFrame ||
        window.clearTimeout;
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
        // Compare current width with original width
        if (node && node.offsetWidth != width) {
          // font has loaded
          node.parentNode.removeChild(node);
          node = null;
          callback();
          console.timeEnd("web fonts");
          return true;
        }
        requestID = requestAnimationFrame(checkFont);
      };
      requestID = requestAnimationFrame(checkFont);
    }
};


