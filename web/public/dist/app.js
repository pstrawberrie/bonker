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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  _button2.default.init();
  _modal2.default.init();
  _userlist2.default.init();
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
  //@TODO: We can abstract the button 'success' and 'error' states into a single function 
  //       instead of using direct methods like `this.buttonEvents.iconAbove(ele)`, 
  //       maybe we can use something like btn.listening

  ele: {
    iconAboveBtns: document.querySelectorAll('.btn[data-icon-above]')
  },

  attachEventListeners: function attachEventListeners() {
    // Icon Above
    if (this.ele.iconAboveBtns.length) {
      [].concat(_toConsumableArray(this.ele.iconAboveBtns)).map(function (btn) {
        btn.addEventListener('click', function () {
          Button.buttonEvents.iconAbove(btn);
        });
      });
    }
  },


  buttonEvents: {
    // Icon Above Event
    iconAbove: function iconAbove(ele) {
      ele.classList.add('icon-active');
      setTimeout(function () {
        ele.classList.remove('icon-active');
      }, 300);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvdXNlcmxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2xlc3MvZ2xvYmFsLmxlc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiQnV0dG9uIiwiaW5pdCIsIk1vZGFsIiwiVXNlcmxpc3QiLCJlbGUiLCJpY29uQWJvdmVCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dGFjaEV2ZW50TGlzdGVuZXJzIiwibGVuZ3RoIiwibWFwIiwiYnRuIiwiYnV0dG9uRXZlbnRzIiwiaWNvbkFib3ZlIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRyaWdnZXJzIiwibW9kYWxzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldE1vZGFsIiwibmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRNb2RhbEJvZHkiLCJtb2RhbCIsImdldEFjdGl2ZU1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ0cmlnZ2VyIiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJ0cmlnZ2Vyc01vZGFsIiwiZGlzcGxheSIsImNsb3Nlc3RNb2RhbCIsInV0aWwiLCJnZXRDbG9zZXN0RWxlQnlDbGFzcyIsImNsb3Nlc3RUcmlnZ2VyIiwia2V5Q29kZSIsIndoaWNoIiwiYm9vbCIsIm1vZGFsRWxlIiwibW9kYWxCb2R5IiwiYWRkQW5pbWF0aW9uIiwicHJlcEFuaW1hdGlvbnMiLCJjb250YWluZXIiLCJidG5Ud2l0Y2hJZCIsInN0b3AiLCJ0d2l0Y2hJZCIsImNsaXBib2FyZCIsImNhdGNoIiwidGhlbiIsImhhc0NsYXNzIiwiZWxlbSIsImNscyIsInN0ciIsImNsYXNzTmFtZSIsInRlc3RDbHMiLCJpbmRleE9mIiwiZWwiLCJwYXJlbnROb2RlIiwiZWxBcnIiLCJzdHlsZSIsIm9wYWNpdHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN1Y2Nlc3MiLCJsaXN0ZW5lciIsImNsaXBib2FyZERhdGEiLCJzZXREYXRhIiwicHJldmVudERlZmF1bHQiLCJleGVjQ29tbWFuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsREMsbUJBQU9DLElBQVA7QUFDQUMsa0JBQU1ELElBQU47QUFDQUUscUJBQVNG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O0FBQ2YyQyxTQUFHN0MsU0FBSCxDQUFhRyxNQUFiLENBQW9CLFVBQXBCO0FBQ0EwQyxTQUFHN0MsU0FBSCxDQUFhRyxNQUFiLENBQW9CcUMsR0FBcEI7QUFDQUssU0FBR0csS0FBSCxDQUFTQyxPQUFULEdBQW1CLEVBQW5CO0FBQ0QsS0FKRCxFQUlHLEdBSkg7QUFLRCxHQWpEVTtBQW1EWGQsV0FuRFcscUJBbURETSxHQW5EQyxFQW1ESTtBQUNiLFdBQU8sSUFBSVMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQzNDLFVBQUlDLFVBQVUsS0FBZDtBQUNBLGVBQVNDLFFBQVQsQ0FBa0J2QyxDQUFsQixFQUFxQjtBQUNuQkEsVUFBRXdDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCLFlBQXhCLEVBQXNDZixHQUF0QztBQUNBMUIsVUFBRTBDLGNBQUY7QUFDQUosa0JBQVUsSUFBVjtBQUNEO0FBQ0RwRSxlQUFTQyxnQkFBVCxDQUEwQixNQUExQixFQUFrQ29FLFFBQWxDO0FBQ0FyRSxlQUFTeUUsV0FBVCxDQUFxQixNQUFyQjtBQUNBekUsZUFBUzBFLG1CQUFULENBQTZCLE1BQTdCLEVBQXFDTCxRQUFyQztBQUNBRCxnQkFBVUYsU0FBVixHQUFxQkMsUUFBckI7QUFDRCxLQVhNLENBQVA7QUFZRDtBQWhFVSxDQUFiOztrQkFvRWUvQixJOzs7Ozs7Ozs7OztBQ3BFZix1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3B1YmxpYy9qcy9hcHAuanNcIik7XG4iLCJpbXBvcnQgJy4uL2xlc3MvZ2xvYmFsLmxlc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJztcclxuaW1wb3J0IFVzZXJsaXN0IGZyb20gJy4vY29tcG9uZW50cy91c2VybGlzdCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgQnV0dG9uLmluaXQoKTtcclxuICBNb2RhbC5pbml0KCk7XHJcbiAgVXNlcmxpc3QuaW5pdCgpO1xyXG59KTsiLCJjb25zdCBCdXR0b24gPSB7XHJcbiAgLy9AVE9ETzogV2UgY2FuIGFic3RyYWN0IHRoZSBidXR0b24gJ3N1Y2Nlc3MnIGFuZCAnZXJyb3InIHN0YXRlcyBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIFxyXG4gIC8vICAgICAgIGluc3RlYWQgb2YgdXNpbmcgZGlyZWN0IG1ldGhvZHMgbGlrZSBgdGhpcy5idXR0b25FdmVudHMuaWNvbkFib3ZlKGVsZSlgLCBcclxuICAvLyAgICAgICBtYXliZSB3ZSBjYW4gdXNlIHNvbWV0aGluZyBsaWtlIGJ0bi5saXN0ZW5pbmdcclxuXHJcbiAgZWxlOiB7XHJcbiAgICBpY29uQWJvdmVCdG5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuW2RhdGEtaWNvbi1hYm92ZV0nKSxcclxuICB9LFxyXG5cclxuICBhdHRhY2hFdmVudExpc3RlbmVycygpIHtcclxuICAgIC8vIEljb24gQWJvdmVcclxuICAgIGlmKHRoaXMuZWxlLmljb25BYm92ZUJ0bnMubGVuZ3RoKSB7XHJcbiAgICAgIFsuLi50aGlzLmVsZS5pY29uQWJvdmVCdG5zXS5tYXAoYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBCdXR0b24uYnV0dG9uRXZlbnRzLmljb25BYm92ZShidG4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgYnV0dG9uRXZlbnRzOiB7XHJcbiAgICAvLyBJY29uIEFib3ZlIEV2ZW50XHJcbiAgICBpY29uQWJvdmUoZWxlKSB7XHJcbiAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKCdpY29uLWFjdGl2ZScpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZSgnaWNvbi1hY3RpdmUnKTtcclxuICAgICAgfSwzMDApO1xyXG5cclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9LFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgdXRpbCBmcm9tICcuLi91dGlsJztcclxuXHJcbmNvbnN0IE1vZGFsID0ge1xyXG5cclxuICAvLysgTG9jYWwgRWxlbWVudCBVdGlsaXRpZXNcclxuICBlbGU6IHtcclxuICAgIHRyaWdnZXJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2RhdGEtdHJpZ2dlcnMtbW9kYWxdJyksXHJcbiAgICBtb2RhbHM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJyksXHJcbiAgICBnZXRNb2RhbChuYW1lKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tb2RhbD0ke25hbWV9XWApXHJcbiAgICB9LFxyXG4gICAgZ2V0TW9kYWxCb2R5KG1vZGFsKSB7XHJcbiAgICAgIHJldHVybiBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2JvZHknKTtcclxuICAgIH0sXHJcbiAgICBnZXRBY3RpdmVNb2RhbCgpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5hY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8rIEFkZCBFdmVudCBMaXN0ZW5lcnNcclxuICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuXHJcbiAgICAvLyBNb2RhbCBUcmlnZ2Vyc1xyXG4gICAgWy4uLnRoaXMuZWxlLnRyaWdnZXJzXS5tYXAodHJpZ2dlciA9PiB7XHJcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IE1vZGFsLmVsZS5nZXRNb2RhbChlLnRhcmdldC5kYXRhc2V0LnRyaWdnZXJzTW9kYWwpO1xyXG4gICAgICAgIE1vZGFsLmRpc3BsYXkodHJ1ZSwgbW9kYWwpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERvY3VtZW50IE9mZi1jbGlja1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgY29uc3QgY2xvc2VzdE1vZGFsID0gdXRpbC5nZXRDbG9zZXN0RWxlQnlDbGFzcyhlLnRhcmdldCwgJ21vZGFsX19ib2R5Jyk7XHJcbiAgICAgIGNvbnN0IGNsb3Nlc3RUcmlnZ2VyID0gdXRpbC5nZXRDbG9zZXN0RWxlQnlDbGFzcyhlLnRhcmdldCwgJ21vZGFsLXRyaWdnZXInKTtcclxuICAgICAgaWYoY2xvc2VzdE1vZGFsID09IG51bGwgJiYgY2xvc2VzdFRyaWdnZXIgPT0gbnVsbCkgTW9kYWwuZGlzcGxheShmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIC8vIERvY3VtZW50IEVzY2FwZSBLZXlcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XHJcbiAgICAgIGlmKGUua2V5Q29kZSA9PT0gMjcgfHwgZS53aGljaCA9PT0gMjcpIHtcclxuICAgICAgICBNb2RhbC5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8vKyBGdW5jdGlvbiB0byBEaXNwbGF5IG9yIEhpZGUgTW9kYWxzIChmaXhlZCBhbmltYXRpb25zIGJ1aWx0IGluKVxyXG4gIGRpc3BsYXkoYm9vbCwgbW9kYWxFbGUpIHtcclxuICAgIGlmKGJvb2wgPT0gZmFsc2UpIHtcclxuICAgICAgLy8tIENsb3NlXHJcbiAgICAgIGNvbnN0IG1vZGFsRWxlID0gTW9kYWwuZWxlLmdldEFjdGl2ZU1vZGFsKCk7XHJcbiAgICAgIGlmKG1vZGFsRWxlID09IG51bGwpIHJldHVybjtcclxuICAgICAgY29uc3QgbW9kYWxCb2R5ID0gTW9kYWwuZWxlLmdldE1vZGFsQm9keShtb2RhbEVsZSk7XHJcbiAgICAgIHV0aWwuYWRkQW5pbWF0aW9uKG1vZGFsQm9keSwgJ2ZhZGVPdXRVcCcpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1dGlsLnByZXBBbmltYXRpb25zKFttb2RhbEJvZHldKTtcclxuICAgICAgICB1dGlsLmFkZEFuaW1hdGlvbihtb2RhbEVsZSwgJ2ZhZGVPdXQnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG1vZGFsRWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgbW9kYWxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSwyNTApO1xyXG4gICAgICB9LDI1MCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vLSBPcGVuXHJcbiAgICAgIGlmKCFtb2RhbEVsZSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBtb2RhbEJvZHkgPSBNb2RhbC5lbGUuZ2V0TW9kYWxCb2R5KG1vZGFsRWxlKTtcclxuICAgICAgdXRpbC5wcmVwQW5pbWF0aW9ucyhbbW9kYWxFbGUsIG1vZGFsQm9keV0pO1xyXG4gICAgICBtb2RhbEVsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgbW9kYWxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgIHV0aWwuYWRkQW5pbWF0aW9uKG1vZGFsRWxlLCAnZmFkZUluJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHV0aWwuYWRkQW5pbWF0aW9uKG1vZGFsQm9keSwgJ2ZhZGVJbkRvd24nKTtcclxuICAgICAgfSwxMzApO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vKyBJbml0aWFsaXplIE1vZGFsc1xyXG4gIGluaXQoKSB7XHJcbiAgICBpZih0aGlzLmVsZS5tb2RhbHMgJiYgdGhpcy5lbGUubW9kYWxzLmxlbmd0aCA+IDApIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7IiwiaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5jb25zdCBVc2VybGlzdCA9IHtcclxuXHJcbiAgZWxlOiB7XHJcbiAgICBjb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXVzZXJsaXN0XScpLFxyXG4gICAgYnRuVHdpdGNoSWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXR3aXRjaC1pZF0nKSxcclxuICB9LFxyXG5cclxuICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIC8vIENvcHkgVHdpdGNoIElEXHJcbiAgICBbLi4udGhpcy5lbGUuYnRuVHdpdGNoSWRdLm1hcChidG4gPT4ge1xyXG4gICAgICBsZXQgc3RvcCA9IGZhbHNlO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjb25zdCB0d2l0Y2hJZCA9IGUudGFyZ2V0LmRhdGFzZXQudHdpdGNoSWQ7XHJcbiAgICAgICAgdXRpbC5jbGlwYm9hcmQodHdpdGNoSWQpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHN0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgIH0sNDIwKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGlmKHN0b3ApIHJldHVybjtcclxuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICB9LDQyMClcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBpZih0aGlzLmVsZS5jb250YWluZXIgIT09IG51bGwpIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcmxpc3Q7IiwiY29uc3QgdXRpbCA9IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgaGFzIGEgY2xhc3NcclxuICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW0gXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNscyBcclxuICAgKi9cclxuICBoYXNDbGFzcyhlbGVtLCBjbHMpIHtcclxuICAgIHZhciBzdHIgPSBcIiBcIiArIGVsZW0uY2xhc3NOYW1lICsgXCIgXCI7XHJcbiAgICB2YXIgdGVzdENscyA9IFwiIFwiICsgY2xzICsgXCIgXCI7XHJcbiAgICByZXR1cm4oc3RyLmluZGV4T2YodGVzdENscykgIT0gLTEpIDtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGNsb3Nlc3QgdG8gZ2l2ZW4gZWxlbWVudCBieSBjbGFzc25hbWVcclxuICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsIC0gZWxlbWVudCB0byBmaW5kIGNsb3Nlc3QgZnJvbVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbHMgLSBjbGFzcyB0byBmaW5kIGNsb3Nlc3Qgb2ZcclxuICAgKi9cclxuICBnZXRDbG9zZXN0RWxlQnlDbGFzcyhlbCwgY2xzKSB7XHJcbiAgICB3aGlsZSAoZWwgICYmIGVsICE9PSBkb2N1bWVudCkge1xyXG4gICAgICBpZiAodXRpbC5oYXNDbGFzcyhlbCwgY2xzKSkgcmV0dXJuIGVsO1xyXG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBQcmVwYXJlIGFuaW1hdGlvbnMgYnkgYWRkaW5nIHN0YXJ0aW5nIHN0eWxlcyB0byBlbGVtZW50c1xyXG4gICAqIEBwYXJhbSB7YXJyYXl9IGVsQXJyIC0gQXJyYXkgb2YgZWxlbWVudHMgdG8gcHJlcFxyXG4gICAqL1xyXG4gIHByZXBBbmltYXRpb25zKGVsQXJyKSB7XHJcbiAgICBbLi4uZWxBcnJdLm1hcChlbCA9PiB7XHJcbiAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIEFuaW1hdGUuY3NzIGNsYXNzIHRvIGVsZW1lbnRzIChwcmVwIHRoZW0gZmlyc3QpXHJcbiAgICogQHBhcmFtIHtlbGVtZW50fSBlbCBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xzIFxyXG4gICAqL1xyXG4gIGFkZEFuaW1hdGlvbihlbCwgY2xzKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkJyk7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcclxuICAgICAgZWwuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG4gICAgfSwgMjUwKTtcclxuICB9LFxyXG5cclxuICBjbGlwYm9hcmQoc3RyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgIGZ1bmN0aW9uIGxpc3RlbmVyKGUpIHtcclxuICAgICAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgc3RyKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgbGlzdGVuZXIpO1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIGxpc3RlbmVyKTtcclxuICAgICAgc3VjY2VzcyA/IHJlc29sdmUoKTogcmVqZWN0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9