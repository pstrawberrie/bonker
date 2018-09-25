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

var _modal = __webpack_require__(/*! ./components/modal */ "./public/js/components/modal.js");

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  _modal2.default.init();
});

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
  },


  //+ Function to Display or Hide Modals (fixed animations built in)
  display: function display(bool, modalEle) {
    if (bool == false) {
      //- Close
      var _modalEle = Modal.ele.getActiveModal();
      if (_modalEle == null) return;
      var modalBody = Modal.ele.getModalBody(_modalEle);
      _util2.default.addAnimation(modalBody, 'zoomOut');
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
    this.addEventListeners();
  }
};

exports.default = Modal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbGVzcy9nbG9iYWwubGVzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsImluaXQiLCJlbGUiLCJ0cmlnZ2VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2RhbHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0TW9kYWwiLCJuYW1lIiwicXVlcnlTZWxlY3RvciIsImdldE1vZGFsQm9keSIsIm1vZGFsIiwiZ2V0QWN0aXZlTW9kYWwiLCJhZGRFdmVudExpc3RlbmVycyIsIm1hcCIsInRyaWdnZXIiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsInRyaWdnZXJzTW9kYWwiLCJkaXNwbGF5IiwiY2xvc2VzdE1vZGFsIiwidXRpbCIsImdldENsb3Nlc3RFbGVCeUNsYXNzIiwiY2xvc2VzdFRyaWdnZXIiLCJib29sIiwibW9kYWxFbGUiLCJtb2RhbEJvZHkiLCJhZGRBbmltYXRpb24iLCJzZXRUaW1lb3V0IiwicHJlcEFuaW1hdGlvbnMiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoYXNDbGFzcyIsImVsZW0iLCJjbHMiLCJzdHIiLCJjbGFzc05hbWUiLCJ0ZXN0Q2xzIiwiaW5kZXhPZiIsImVsIiwicGFyZW50Tm9kZSIsImVsQXJyIiwic3R5bGUiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7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QixVQUFJd0IsS0FBS1ksUUFBTCxDQUFjTyxFQUFkLEVBQWtCTCxHQUFsQixDQUFKLEVBQTRCLE9BQU9LLEVBQVA7QUFDNUJBLFdBQUtBLEdBQUdDLFVBQVI7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEdBeEJVOzs7QUEwQlg7Ozs7QUFJQVosZ0JBOUJXLDBCQThCSWEsS0E5QkosRUE4Qlc7QUFDcEIsaUNBQUlBLEtBQUosR0FBVzdCLEdBQVgsQ0FBZSxjQUFNO0FBQ25CMkIsU0FBR0csS0FBSCxDQUFTQyxPQUFULEdBQW1CLENBQW5CO0FBQ0QsS0FGRDtBQUdELEdBbENVOzs7QUFvQ1g7Ozs7O0FBS0FqQixjQXpDVyx3QkF5Q0VhLEVBekNGLEVBeUNNTCxHQXpDTixFQXlDVztBQUNwQkssT0FBR1YsU0FBSCxDQUFhQyxHQUFiLENBQWlCLFVBQWpCO0FBQ0FTLE9BQUdWLFNBQUgsQ0FBYUMsR0FBYixDQUFpQkksR0FBakI7QUFDQVAsZUFBVyxZQUFNO0FBQ2ZZLFNBQUdWLFNBQUgsQ0FBYUUsTUFBYixDQUFvQixVQUFwQjtBQUNBUSxTQUFHVixTQUFILENBQWFFLE1BQWIsQ0FBb0JHLEdBQXBCO0FBQ0FLLFNBQUdHLEtBQUgsQ0FBU0MsT0FBVCxHQUFtQixFQUFuQjtBQUNELEtBSkQsRUFJRyxHQUpIO0FBS0Q7QUFqRFUsQ0FBYjs7a0JBcURldkIsSTs7Ozs7Ozs7Ozs7QUNyRGYsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wdWJsaWMvanMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9sZXNzL2dsb2JhbC5sZXNzJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vY29tcG9uZW50cy9tb2RhbCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgTW9kYWwuaW5pdCgpO1xyXG59KTsiLCJpbXBvcnQgdXRpbCBmcm9tICcuLi91dGlsJztcclxuXHJcbmNvbnN0IE1vZGFsID0ge1xyXG5cclxuICAvLysgTG9jYWwgRWxlbWVudCBVdGlsaXRpZXNcclxuICBlbGU6IHtcclxuICAgIHRyaWdnZXJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2RhdGEtdHJpZ2dlcnMtbW9kYWxdJyksXHJcbiAgICBtb2RhbHM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJyksXHJcbiAgICBnZXRNb2RhbChuYW1lKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tb2RhbD0ke25hbWV9XWApXHJcbiAgICB9LFxyXG4gICAgZ2V0TW9kYWxCb2R5KG1vZGFsKSB7XHJcbiAgICAgIHJldHVybiBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2JvZHknKTtcclxuICAgIH0sXHJcbiAgICBnZXRBY3RpdmVNb2RhbCgpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5hY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8rIEFkZCBFdmVudCBMaXN0ZW5lcnNcclxuICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuXHJcbiAgICAvLyBNb2RhbCBUcmlnZ2Vyc1xyXG4gICAgWy4uLnRoaXMuZWxlLnRyaWdnZXJzXS5tYXAodHJpZ2dlciA9PiB7XHJcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IE1vZGFsLmVsZS5nZXRNb2RhbChlLnRhcmdldC5kYXRhc2V0LnRyaWdnZXJzTW9kYWwpO1xyXG4gICAgICAgIE1vZGFsLmRpc3BsYXkodHJ1ZSwgbW9kYWwpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERvY3VtZW50IE9mZi1jbGlja1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBjbG9zZXN0TW9kYWwgPSB1dGlsLmdldENsb3Nlc3RFbGVCeUNsYXNzKGUudGFyZ2V0LCAnbW9kYWxfX2JvZHknKTtcclxuICAgICAgY29uc3QgY2xvc2VzdFRyaWdnZXIgPSB1dGlsLmdldENsb3Nlc3RFbGVCeUNsYXNzKGUudGFyZ2V0LCAnbW9kYWwtdHJpZ2dlcicpO1xyXG4gICAgICBpZihjbG9zZXN0TW9kYWwgPT0gbnVsbCAmJiBjbG9zZXN0VHJpZ2dlciA9PSBudWxsKSBNb2RhbC5kaXNwbGF5KGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICB9LFxyXG5cclxuICAvLysgRnVuY3Rpb24gdG8gRGlzcGxheSBvciBIaWRlIE1vZGFscyAoZml4ZWQgYW5pbWF0aW9ucyBidWlsdCBpbilcclxuICBkaXNwbGF5KGJvb2wsIG1vZGFsRWxlKSB7XHJcbiAgICBpZihib29sID09IGZhbHNlKSB7XHJcbiAgICAgIC8vLSBDbG9zZVxyXG4gICAgICBjb25zdCBtb2RhbEVsZSA9IE1vZGFsLmVsZS5nZXRBY3RpdmVNb2RhbCgpO1xyXG4gICAgICBpZihtb2RhbEVsZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG1vZGFsQm9keSA9IE1vZGFsLmVsZS5nZXRNb2RhbEJvZHkobW9kYWxFbGUpO1xyXG4gICAgICB1dGlsLmFkZEFuaW1hdGlvbihtb2RhbEJvZHksICd6b29tT3V0Jyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHV0aWwucHJlcEFuaW1hdGlvbnMoW21vZGFsQm9keV0pO1xyXG4gICAgICAgIHV0aWwuYWRkQW5pbWF0aW9uKG1vZGFsRWxlLCAnZmFkZU91dCcpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbW9kYWxFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICBtb2RhbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9LDI1MCk7XHJcbiAgICAgIH0sMjUwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8tIE9wZW5cclxuICAgICAgaWYoIW1vZGFsRWxlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG1vZGFsQm9keSA9IE1vZGFsLmVsZS5nZXRNb2RhbEJvZHkobW9kYWxFbGUpO1xyXG4gICAgICB1dGlsLnByZXBBbmltYXRpb25zKFttb2RhbEVsZSwgbW9kYWxCb2R5XSk7XHJcbiAgICAgIG1vZGFsRWxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBtb2RhbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgdXRpbC5hZGRBbmltYXRpb24obW9kYWxFbGUsICdmYWRlSW4nKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXRpbC5hZGRBbmltYXRpb24obW9kYWxCb2R5LCAnZmFkZUluRG93bicpO1xyXG4gICAgICB9LDEzMCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8rIEluaXRpYWxpemUgTW9kYWxzXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJjb25zdCB1dGlsID0ge1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYW4gZWxlbWVudCBoYXMgYSBjbGFzc1xyXG4gICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbSBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xzIFxyXG4gICAqL1xyXG4gIGhhc0NsYXNzKGVsZW0sIGNscykge1xyXG4gICAgdmFyIHN0ciA9IFwiIFwiICsgZWxlbS5jbGFzc05hbWUgKyBcIiBcIjtcclxuICAgIHZhciB0ZXN0Q2xzID0gXCIgXCIgKyBjbHMgKyBcIiBcIjtcclxuICAgIHJldHVybihzdHIuaW5kZXhPZih0ZXN0Q2xzKSAhPSAtMSkgO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgY2xvc2VzdCB0byBnaXZlbiBlbGVtZW50IGJ5IGNsYXNzbmFtZVxyXG4gICAqIEBwYXJhbSB7ZWxlbWVudH0gZWwgLSBlbGVtZW50IHRvIGZpbmQgY2xvc2VzdCBmcm9tXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNscyAtIGNsYXNzIHRvIGZpbmQgY2xvc2VzdCBvZlxyXG4gICAqL1xyXG4gIGdldENsb3Nlc3RFbGVCeUNsYXNzKGVsLCBjbHMpIHtcclxuICAgIHdoaWxlIChlbCAgJiYgZWwgIT09IGRvY3VtZW50KSB7XHJcbiAgICAgIGlmICh1dGlsLmhhc0NsYXNzKGVsLCBjbHMpKSByZXR1cm4gZWw7XHJcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBhcmUgYW5pbWF0aW9ucyBieSBhZGRpbmcgc3RhcnRpbmcgc3R5bGVzIHRvIGVsZW1lbnRzXHJcbiAgICogQHBhcmFtIHthcnJheX0gZWxBcnIgLSBBcnJheSBvZiBlbGVtZW50cyB0byBwcmVwXHJcbiAgICovXHJcbiAgcHJlcEFuaW1hdGlvbnMoZWxBcnIpIHtcclxuICAgIFsuLi5lbEFycl0ubWFwKGVsID0+IHtcclxuICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBBZGQgQW5pbWF0ZS5jc3MgY2xhc3MgdG8gZWxlbWVudHMgKHByZXAgdGhlbSBmaXJzdClcclxuICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbHMgXHJcbiAgICovXHJcbiAgYWRkQW5pbWF0aW9uKGVsLCBjbHMpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xyXG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcbiAgICB9LCAyNTApO1xyXG4gIH0sXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=