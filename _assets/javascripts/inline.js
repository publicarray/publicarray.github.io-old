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

// https://stackoverflow.com/questions/4383226/using-jquery-to-know-when-font-face-fonts-are-loaded#11689060
function waitForWebfont(font, callback) {
    var loadedFonts = 0;
    var node = document.createElement('span');
    // Characters for testing char width
    node.innerHTML = 'W&#xf423;"';
    // Visible - so we can measure it - but not on the screen
    node.style.position      = 'absolute';
    node.style.left          = '-10000px';
    node.style.top           = '-10000px';
    // Large font size makes even subtle changes obvious
    node.style.fontSize      = '300px';
    node.style.fontFamily    = 'sans-serif';
    document.body.appendChild(node);
    // Remember width with no applied web font
    var width = node.offsetWidth;
    // change font
    node.style.fontFamily = font + ', sans-serif';
    // wait for font to load and compare the width
    var interval;
    function checkFont() {
        // Compare current width with original width
        if (node && node.offsetWidth != width) {
            ++loadedFonts;
            node.parentNode.removeChild(node);
            node = null;
        }

        // If font have been loaded
        if (loadedFonts == 1) {
            if (interval) {
                clearInterval(interval);
            }
            callback();
            return true;
        }
    };

    if (!checkFont()) {
        interval = setInterval(checkFont, 50);
    }
};
