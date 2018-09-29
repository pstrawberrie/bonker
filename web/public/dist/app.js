/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../less/global.less */ "./public/less/global.less");

var _button = __webpack_require__(/*! ./components/button */ "./public/js/components/button.js");

var _button2 = _interopRequireDefault(_button);

var _modal = __webpack_require__(/*! ./components/modal */ "./public/js/components/modal.js");

var _modal2 = _interopRequireDefault(_modal);

var _userlist = __webpack_require__(/*! ./components/userlist */ "./public/js/components/userlist.js");

var _userlist2 = _interopRequireDefault(_userlist);

var _userSearch = __webpack_require__(/*! ./components/userSearch */ "./public/js/components/userSearch.js");

var _userSearch2 = _interopRequireDefault(_userSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  _button2.default.init();
  _modal2.default.init();
  _userlist2.default.init();
  _userSearch2.default.init();
});

/***/ }),

/***/ "./public/js/components/button.js":
/*!****************************************!*\
  !*** ./public/js/components/button.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Button = {

  ele: {
    iconEventBtns: document.querySelectorAll('.btn.icon-event')
  },

  attachEventListeners: function attachEventListeners() {
    // Icon Above
    if (this.ele.iconEventBtns.length) {
      [].concat(_toConsumableArray(this.ele.iconEventBtns)).map(function (btn) {
        btn.addEventListener('click', function () {
          Button.triggerBtnEvent(btn);
        });
      });
    }
  },
  triggerBtnEvent: function triggerBtnEvent(ele) {
    ele.classList.add('icon-active');
    setTimeout(function () {
      ele.classList.remove('icon-active');
    }, 300);
  },
  init: function init() {
    this.attachEventListeners();
  }
};

exports.default = Button;

/***/ }),

/***/ "./public/js/components/modal.js":
/*!***************************************!*\
  !*** ./public/js/components/modal.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(/*! ../util */ "./public/js/util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Modal = {

  //+ Local Element Utilities
  ele: {
    triggers: document.querySelectorAll('a[data-triggers-modal]'),
    modals: document.getElementsByClassName('modal'),
    getModal: function getModal(name) {
      return document.querySelector('[data-modal=' + name + ']');
    },
    getModalBody: function getModalBody(modal) {
      return modal.querySelector('.modal__body');
    },
    getActiveModal: function getActiveModal() {
      return document.querySelector('.modal.active');
    }
  },

  //+ Add Event Listeners
  addEventListeners: function addEventListeners() {

    // Modal Triggers
    [].concat(_toConsumableArray(this.ele.triggers)).map(function (trigger) {
      trigger.addEventListener('click', function (e) {
        var modal = Modal.ele.getModal(e.target.dataset.triggersModal);
        Modal.display(true, modal);
      });
    });

    // Document Off-click
    document.addEventListener('click', function (e) {
      var closestModal = _util2.default.getClosestEleByClass(e.target, 'modal__body');
      var closestTrigger = _util2.default.getClosestEleByClass(e.target, 'modal-trigger');
      if (closestModal == null && closestTrigger == null) Modal.display(false);
    });
    // Document Escape Key
    document.addEventListener('keyup', function (e) {
      if (e.keyCode === 27 || e.which === 27) {
        Modal.display(false);
      }
    });
  },


  //+ Function to Display or Hide Modals (fixed animations built in)
  display: function display(bool, modalEle) {
    if (bool == false) {
      //- Close
      var _modalEle = Modal.ele.getActiveModal();
      if (_modalEle == null) return;
      var modalBody = Modal.ele.getModalBody(_modalEle);
      _util2.default.addAnimation(modalBody, 'fadeOutUp');
      setTimeout(function () {
        _util2.default.prepAnimations([modalBody]);
        _util2.default.addAnimation(_modalEle, 'fadeOut');
        setTimeout(function () {
          _modalEle.classList.add('hidden');
          _modalEle.classList.remove('active');
        }, 250);
      }, 250);
      return;
    } else {
      //- Open
      if (!modalEle) return;
      var _modalBody = Modal.ele.getModalBody(modalEle);
      _util2.default.prepAnimations([modalEle, _modalBody]);
      modalEle.classList.add('active');
      modalEle.classList.remove('hidden');
      _util2.default.addAnimation(modalEle, 'fadeIn');
      setTimeout(function () {
        _util2.default.addAnimation(_modalBody, 'fadeInDown');
      }, 130);
    }
  },


  //+ Initialize Modals
  init: function init() {
    if (this.ele.modals && this.ele.modals.length > 0) this.addEventListeners();
  }
};

exports.default = Modal;

/***/ }),

/***/ "./public/js/components/userSearch.js":
/*!********************************************!*\
  !*** ./public/js/components/userSearch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(/*! ../util */ "./public/js/util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSearch = {

  searchEle: document.getElementsByClassName('user-search')[0],

  attachEventListeners: function attachEventListeners() {
    // Input Keyup
    var inputKeyupEvent = _util2.default.debounce(function (e) {
      var inputVal = e.target.value.trim();
      if (inputVal === '') return;
      console.log(inputVal);
    }, 420);

    this.inputEle.addEventListener('keyup', inputKeyupEvent);
  },
  init: function init() {
    if (this.searchEle == undefined) return;
    this.inputEle = document.querySelector('.user-search input');
    this.attachEventListeners();
  }
};

exports.default = UserSearch;

/***/ }),

/***/ "./public/js/components/userlist.js":
/*!******************************************!*\
  !*** ./public/js/components/userlist.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(/*! ../util */ "./public/js/util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Userlist = {

  ele: {
    container: document.querySelector('[data-userlist]'),
    btnTwitchId: document.querySelectorAll('[data-twitch-id]')
  },

  addEventListeners: function addEventListeners() {
    // Copy Twitch ID
    [].concat(_toConsumableArray(this.ele.btnTwitchId)).map(function (btn) {
      var stop = false;
      btn.addEventListener('click', function (e) {
        var twitchId = e.target.dataset.twitchId;
        _util2.default.clipboard(twitchId).catch(function () {
          stop = true;
          btn.classList.add('error');
          setTimeout(function () {
            e.target.classList.remove('error');
          }, 420);
        }).then(function () {
          if (stop) return;
          e.target.classList.add('success');
          setTimeout(function () {
            e.target.classList.remove('success');
          }, 420);
        });
      });
    });
  },
  init: function init() {
    if (this.ele.container !== null) this.addEventListeners();
  }
};

exports.default = Userlist;

/***/ }),

/***/ "./public/js/util.js":
/*!***************************!*\
  !*** ./public/js/util.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var util = {

  /**
   * Checks if an element has a class
   * @param {element} elem 
   * @param {string} cls 
   */
  hasClass: function hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return str.indexOf(testCls) != -1;
  },


  /**
   * Gets closest to given element by classname
   * @param {element} el - element to find closest from
   * @param {string} cls - class to find closest of
   */
  getClosestEleByClass: function getClosestEleByClass(el, cls) {
    while (el && el !== document) {
      if (util.hasClass(el, cls)) return el;
      el = el.parentNode;
    }
    return null;
  },


  /**
   * Prepare animations by adding starting styles to elements
   * @param {array} elArr - Array of elements to prep
   */
  prepAnimations: function prepAnimations(elArr) {
    [].concat(_toConsumableArray(elArr)).map(function (el) {
      el.style.opacity = 0;
    });
  },


  /**
   * Add Animate.css class to elements (prep them first)
   * @param {element} el 
   * @param {string} cls 
   */
  addAnimation: function addAnimation(el, cls) {
    el.classList.add('animated');
    el.classList.add(cls);
    setTimeout(function () {
      el.classList.remove('animated');
      el.classList.remove(cls);
      el.style.opacity = '';
    }, 250);
  },


  /**
   * Copy text to the clipboard
   * @param {string} str 
   */
  clipboard: function clipboard(str) {
    return new Promise(function (resolve, reject) {
      var success = false;
      function listener(e) {
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
        success = true;
      }
      document.addEventListener("copy", listener);
      document.execCommand("copy");
      document.removeEventListener("copy", listener);
      success ? resolve() : reject();
    });
  },


  /**
   * Page Loader
   * @param {boolean} bool
   */
  pageLoader: function pageLoader(bool) {
    var loaderEle = document.getElementsByClassName('page-loader')[0];
    if (bool) {
      loaderEle.classList.add('active');
    } else {
      loaderEle.classList.remove('active');
    }
  },


  /**
   * Debounce
   * @param {function} func
   * @param {integer} wait
   * @param {bool} immediate
   */
  debounce: function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
};

exports.default = util;

/***/ }),

/***/ "./public/less/global.less":
/*!*********************************!*\
  !*** ./public/less/global.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvdXNlclNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy91c2VybGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbGVzcy9nbG9iYWwubGVzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJCdXR0b24iLCJpbml0IiwiTW9kYWwiLCJVc2VybGlzdCIsIlVzZXJTZWFyY2giLCJlbGUiLCJpY29uRXZlbnRCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dGFjaEV2ZW50TGlzdGVuZXJzIiwibGVuZ3RoIiwibWFwIiwiYnRuIiwidHJpZ2dlckJ0bkV2ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRyaWdnZXJzIiwibW9kYWxzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldE1vZGFsIiwibmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRNb2RhbEJvZHkiLCJtb2RhbCIsImdldEFjdGl2ZU1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ0cmlnZ2VyIiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJ0cmlnZ2Vyc01vZGFsIiwiZGlzcGxheSIsImNsb3Nlc3RNb2RhbCIsInV0aWwiLCJnZXRDbG9zZXN0RWxlQnlDbGFzcyIsImNsb3Nlc3RUcmlnZ2VyIiwia2V5Q29kZSIsIndoaWNoIiwiYm9vbCIsIm1vZGFsRWxlIiwibW9kYWxCb2R5IiwiYWRkQW5pbWF0aW9uIiwicHJlcEFuaW1hdGlvbnMiLCJzZWFyY2hFbGUiLCJpbnB1dEtleXVwRXZlbnQiLCJkZWJvdW5jZSIsImlucHV0VmFsIiwidmFsdWUiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsImlucHV0RWxlIiwidW5kZWZpbmVkIiwiY29udGFpbmVyIiwiYnRuVHdpdGNoSWQiLCJzdG9wIiwidHdpdGNoSWQiLCJjbGlwYm9hcmQiLCJjYXRjaCIsInRoZW4iLCJoYXNDbGFzcyIsImVsZW0iLCJjbHMiLCJzdHIiLCJjbGFzc05hbWUiLCJ0ZXN0Q2xzIiwiaW5kZXhPZiIsImVsIiwicGFyZW50Tm9kZSIsImVsQXJyIiwic3R5bGUiLCJvcGFjaXR5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdWNjZXNzIiwibGlzdGVuZXIiLCJjbGlwYm9hcmREYXRhIiwic2V0RGF0YSIsInByZXZlbnREZWZhdWx0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFnZUxvYWRlciIsImxvYWRlckVsZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUs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LFNBQTNCO0FBQ0EsVUFBSUMsUUFBUSxTQUFSQSxLQUFRLEdBQVc7QUFDckJKLGtCQUFVLElBQVY7QUFDQSxZQUFJLENBQUNELFNBQUwsRUFBZ0JGLEtBQUtRLEtBQUwsQ0FBV0osT0FBWCxFQUFvQkMsSUFBcEI7QUFDakIsT0FIRDtBQUlBLFVBQUlJLFVBQVVQLGFBQWEsQ0FBQ0MsT0FBNUI7QUFDQU8sbUJBQWFQLE9BQWI7QUFDQUEsZ0JBQVV6RSxXQUFXNkUsS0FBWCxFQUFrQk4sSUFBbEIsQ0FBVjtBQUNBLFVBQUlRLE9BQUosRUFBYVQsS0FBS1EsS0FBTCxDQUFXSixPQUFYLEVBQW9CQyxJQUFwQjtBQUNkLEtBVkQ7QUFXRDtBQXRHVSxDQUFiOztrQkEwR2V4RCxJOzs7Ozs7Ozs7OztBQzFHZix1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3B1YmxpYy9qcy9hcHAuanNcIik7XG4iLCJpbXBvcnQgJy4uL2xlc3MvZ2xvYmFsLmxlc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJztcclxuaW1wb3J0IFVzZXJsaXN0IGZyb20gJy4vY29tcG9uZW50cy91c2VybGlzdCc7XHJcbmltcG9ydCBVc2VyU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy91c2VyU2VhcmNoJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgQnV0dG9uLmluaXQoKTtcclxuICBNb2RhbC5pbml0KCk7XHJcbiAgVXNlcmxpc3QuaW5pdCgpO1xyXG4gIFVzZXJTZWFyY2guaW5pdCgpO1xyXG59KTsiLCJjb25zdCBCdXR0b24gPSB7XHJcblxyXG4gIGVsZToge1xyXG4gICAgaWNvbkV2ZW50QnRuczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi5pY29uLWV2ZW50JyksXHJcbiAgfSxcclxuXHJcbiAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBJY29uIEFib3ZlXHJcbiAgICBpZih0aGlzLmVsZS5pY29uRXZlbnRCdG5zLmxlbmd0aCkge1xyXG4gICAgICBbLi4udGhpcy5lbGUuaWNvbkV2ZW50QnRuc10ubWFwKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgQnV0dG9uLnRyaWdnZXJCdG5FdmVudChidG4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgdHJpZ2dlckJ0bkV2ZW50KGVsZSkge1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoJ2ljb24tYWN0aXZlJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2ljb24tYWN0aXZlJyk7XHJcbiAgICB9LDMwMCk7XHJcbiAgfSxcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9LFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgdXRpbCBmcm9tICcuLi91dGlsJztcclxuXHJcbmNvbnN0IE1vZGFsID0ge1xyXG5cclxuICAvLysgTG9jYWwgRWxlbWVudCBVdGlsaXRpZXNcclxuICBlbGU6IHtcclxuICAgIHRyaWdnZXJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2RhdGEtdHJpZ2dlcnMtbW9kYWxdJyksXHJcbiAgICBtb2RhbHM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJyksXHJcbiAgICBnZXRNb2RhbChuYW1lKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tb2RhbD0ke25hbWV9XWApXHJcbiAgICB9LFxyXG4gICAgZ2V0TW9kYWxCb2R5KG1vZGFsKSB7XHJcbiAgICAgIHJldHVybiBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2JvZHknKTtcclxuICAgIH0sXHJcbiAgICBnZXRBY3RpdmVNb2RhbCgpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5hY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8rIEFkZCBFdmVudCBMaXN0ZW5lcnNcclxuICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuXHJcbiAgICAvLyBNb2RhbCBUcmlnZ2Vyc1xyXG4gICAgWy4uLnRoaXMuZWxlLnRyaWdnZXJzXS5tYXAodHJpZ2dlciA9PiB7XHJcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IE1vZGFsLmVsZS5nZXRNb2RhbChlLnRhcmdldC5kYXRhc2V0LnRyaWdnZXJzTW9kYWwpO1xyXG4gICAgICAgIE1vZGFsLmRpc3BsYXkodHJ1ZSwgbW9kYWwpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERvY3VtZW50IE9mZi1jbGlja1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgY29uc3QgY2xvc2VzdE1vZGFsID0gdXRpbC5nZXRDbG9zZXN0RWxlQnlDbGFzcyhlLnRhcmdldCwgJ21vZGFsX19ib2R5Jyk7XHJcbiAgICAgIGNvbnN0IGNsb3Nlc3RUcmlnZ2VyID0gdXRpbC5nZXRDbG9zZXN0RWxlQnlDbGFzcyhlLnRhcmdldCwgJ21vZGFsLXRyaWdnZXInKTtcclxuICAgICAgaWYoY2xvc2VzdE1vZGFsID09IG51bGwgJiYgY2xvc2VzdFRyaWdnZXIgPT0gbnVsbCkgTW9kYWwuZGlzcGxheShmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIC8vIERvY3VtZW50IEVzY2FwZSBLZXlcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XHJcbiAgICAgIGlmKGUua2V5Q29kZSA9PT0gMjcgfHwgZS53aGljaCA9PT0gMjcpIHtcclxuICAgICAgICBNb2RhbC5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8vKyBGdW5jdGlvbiB0byBEaXNwbGF5IG9yIEhpZGUgTW9kYWxzIChmaXhlZCBhbmltYXRpb25zIGJ1aWx0IGluKVxyXG4gIGRpc3BsYXkoYm9vbCwgbW9kYWxFbGUpIHtcclxuICAgIGlmKGJvb2wgPT0gZmFsc2UpIHtcclxuICAgICAgLy8tIENsb3NlXHJcbiAgICAgIGNvbnN0IG1vZGFsRWxlID0gTW9kYWwuZWxlLmdldEFjdGl2ZU1vZGFsKCk7XHJcbiAgICAgIGlmKG1vZGFsRWxlID09IG51bGwpIHJldHVybjtcclxuICAgICAgY29uc3QgbW9kYWxCb2R5ID0gTW9kYWwuZWxlLmdldE1vZGFsQm9keShtb2RhbEVsZSk7XHJcbiAgICAgIHV0aWwuYWRkQW5pbWF0aW9uKG1vZGFsQm9keSwgJ2ZhZGVPdXRVcCcpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1dGlsLnByZXBBbmltYXRpb25zKFttb2RhbEJvZHldKTtcclxuICAgICAgICB1dGlsLmFkZEFuaW1hdGlvbihtb2RhbEVsZSwgJ2ZhZGVPdXQnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG1vZGFsRWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgbW9kYWxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSwyNTApO1xyXG4gICAgICB9LDI1MCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vLSBPcGVuXHJcbiAgICAgIGlmKCFtb2RhbEVsZSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBtb2RhbEJvZHkgPSBNb2RhbC5lbGUuZ2V0TW9kYWxCb2R5KG1vZGFsRWxlKTtcclxuICAgICAgdXRpbC5wcmVwQW5pbWF0aW9ucyhbbW9kYWxFbGUsIG1vZGFsQm9keV0pO1xyXG4gICAgICBtb2RhbEVsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgbW9kYWxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgIHV0aWwuYWRkQW5pbWF0aW9uKG1vZGFsRWxlLCAnZmFkZUluJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHV0aWwuYWRkQW5pbWF0aW9uKG1vZGFsQm9keSwgJ2ZhZGVJbkRvd24nKTtcclxuICAgICAgfSwxMzApO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vKyBJbml0aWFsaXplIE1vZGFsc1xyXG4gIGluaXQoKSB7XHJcbiAgICBpZih0aGlzLmVsZS5tb2RhbHMgJiYgdGhpcy5lbGUubW9kYWxzLmxlbmd0aCA+IDApIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7IiwiaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5jb25zdCBVc2VyU2VhcmNoID0ge1xyXG5cclxuICBzZWFyY2hFbGU6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VzZXItc2VhcmNoJylbMF0sXHJcblxyXG4gIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gSW5wdXQgS2V5dXBcclxuICAgIGNvbnN0IGlucHV0S2V5dXBFdmVudCA9IHV0aWwuZGVib3VuY2UoZSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0VmFsID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xyXG4gICAgICBpZiAoaW5wdXRWYWwgPT09ICcnKSByZXR1cm47XHJcbiAgICAgIGNvbnNvbGUubG9nKGlucHV0VmFsKTtcclxuICAgIH0sIDQyMCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGlucHV0S2V5dXBFdmVudCk7XHJcbiAgfSxcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGlmKHRoaXMuc2VhcmNoRWxlID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5pbnB1dEVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXNlYXJjaCBpbnB1dCcpO1xyXG4gICAgdGhpcy5hdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gIH0sXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2VhcmNoOyIsImltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwnO1xyXG5cclxuY29uc3QgVXNlcmxpc3QgPSB7XHJcblxyXG4gIGVsZToge1xyXG4gICAgY29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS11c2VybGlzdF0nKSxcclxuICAgIGJ0blR3aXRjaElkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10d2l0Y2gtaWRdJyksXHJcbiAgfSxcclxuXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBDb3B5IFR3aXRjaCBJRFxyXG4gICAgWy4uLnRoaXMuZWxlLmJ0blR3aXRjaElkXS5tYXAoYnRuID0+IHtcclxuICAgICAgbGV0IHN0b3AgPSBmYWxzZTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHdpdGNoSWQgPSBlLnRhcmdldC5kYXRhc2V0LnR3aXRjaElkO1xyXG4gICAgICAgIHV0aWwuY2xpcGJvYXJkKHR3aXRjaElkKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBzdG9wID0gdHJ1ZTtcclxuICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgICB9LDQyMCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBpZihzdG9wKSByZXR1cm47XHJcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpO1xyXG4gICAgICAgICAgfSw0MjApXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbml0KCkge1xyXG4gICAgaWYodGhpcy5lbGUuY29udGFpbmVyICE9PSBudWxsKSB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJsaXN0OyIsImNvbnN0IHV0aWwgPSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhbiBlbGVtZW50IGhhcyBhIGNsYXNzXHJcbiAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbHMgXHJcbiAgICovXHJcbiAgaGFzQ2xhc3MoZWxlbSwgY2xzKSB7XHJcbiAgICB2YXIgc3RyID0gXCIgXCIgKyBlbGVtLmNsYXNzTmFtZSArIFwiIFwiO1xyXG4gICAgdmFyIHRlc3RDbHMgPSBcIiBcIiArIGNscyArIFwiIFwiO1xyXG4gICAgcmV0dXJuKHN0ci5pbmRleE9mKHRlc3RDbHMpICE9IC0xKSA7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBjbG9zZXN0IHRvIGdpdmVuIGVsZW1lbnQgYnkgY2xhc3NuYW1lXHJcbiAgICogQHBhcmFtIHtlbGVtZW50fSBlbCAtIGVsZW1lbnQgdG8gZmluZCBjbG9zZXN0IGZyb21cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xzIC0gY2xhc3MgdG8gZmluZCBjbG9zZXN0IG9mXHJcbiAgICovXHJcbiAgZ2V0Q2xvc2VzdEVsZUJ5Q2xhc3MoZWwsIGNscykge1xyXG4gICAgd2hpbGUgKGVsICAmJiBlbCAhPT0gZG9jdW1lbnQpIHtcclxuICAgICAgaWYgKHV0aWwuaGFzQ2xhc3MoZWwsIGNscykpIHJldHVybiBlbDtcclxuICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogUHJlcGFyZSBhbmltYXRpb25zIGJ5IGFkZGluZyBzdGFydGluZyBzdHlsZXMgdG8gZWxlbWVudHNcclxuICAgKiBAcGFyYW0ge2FycmF5fSBlbEFyciAtIEFycmF5IG9mIGVsZW1lbnRzIHRvIHByZXBcclxuICAgKi9cclxuICBwcmVwQW5pbWF0aW9ucyhlbEFycikge1xyXG4gICAgWy4uLmVsQXJyXS5tYXAoZWwgPT4ge1xyXG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBBbmltYXRlLmNzcyBjbGFzcyB0byBlbGVtZW50cyAocHJlcCB0aGVtIGZpcnN0KVxyXG4gICAqIEBwYXJhbSB7ZWxlbWVudH0gZWwgXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNscyBcclxuICAgKi9cclxuICBhZGRBbmltYXRpb24oZWwsIGNscykge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZCcpO1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XHJcbiAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAnJztcclxuICAgIH0sIDI1MCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQ29weSB0ZXh0IHRvIHRoZSBjbGlwYm9hcmRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFxyXG4gICAqL1xyXG4gIGNsaXBib2FyZChzdHIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgdmFyIHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgZnVuY3Rpb24gbGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGUuY2xpcGJvYXJkRGF0YS5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBzdHIpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCBsaXN0ZW5lcik7XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgbGlzdGVuZXIpO1xyXG4gICAgICBzdWNjZXNzID8gcmVzb2x2ZSgpOiByZWplY3QoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFBhZ2UgTG9hZGVyXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBib29sXHJcbiAgICovXHJcbiAgcGFnZUxvYWRlcihib29sKSB7XHJcbiAgICBjb25zdCBsb2FkZXJFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdlLWxvYWRlcicpWzBdO1xyXG4gICAgaWYoYm9vbCkge1xyXG4gICAgICBsb2FkZXJFbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvYWRlckVsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIERlYm91bmNlXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xyXG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gd2FpdFxyXG4gICAqIEBwYXJhbSB7Ym9vbH0gaW1tZWRpYXRlXHJcbiAgICovXHJcbiAgZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcbiAgICB2YXIgdGltZW91dDtcclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG4gICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==