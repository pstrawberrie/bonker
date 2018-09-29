const util = {

  /**
   * Checks if an element has a class
   * @param {element} elem 
   * @param {string} cls 
   */
  hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return(str.indexOf(testCls) != -1) ;
  },

  /**
   * Gets closest to given element by classname
   * @param {element} el - element to find closest from
   * @param {string} cls - class to find closest of
   */
  getClosestEleByClass(el, cls) {
    while (el  && el !== document) {
      if (util.hasClass(el, cls)) return el;
      el = el.parentNode;
    }
    return null;
  },

  /**
   * Prepare animations by adding starting styles to elements
   * @param {array} elArr - Array of elements to prep
   */
  prepAnimations(elArr) {
    [...elArr].map(el => {
      el.style.opacity = 0;
    });
  },

  /**
   * Add Animate.css class to elements (prep them first)
   * @param {element} el 
   * @param {string} cls 
   */
  addAnimation(el, cls) {
    el.classList.add('animated');
    el.classList.add(cls);
    setTimeout(() => {
      el.classList.remove('animated');
      el.classList.remove(cls);
      el.style.opacity = '';
    }, 250);
  },

  /**
   * Copy text to the clipboard
   * @param {string} str 
   */
  clipboard(str) {
    return new Promise(function(resolve, reject) {
      var success = false;
      function listener(e) {
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
        success = true;
      }
      document.addEventListener("copy", listener);
      document.execCommand("copy");
      document.removeEventListener("copy", listener);
      success ? resolve(): reject();
    });
  },

  /**
   * Page Loader
   * @param {boolean} bool
   */
  pageLoader(bool) {
    const loaderEle = document.getElementsByClassName('page-loader')[0];
    if(bool) {
      loaderEle.classList.add('active')
    } else {
      loaderEle.classList.remove('active')
    }
  },

  /**
   * Debounce
   * @param {function} func
   * @param {integer} wait
   * @param {bool} immediate
   */
  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

}

export default util;