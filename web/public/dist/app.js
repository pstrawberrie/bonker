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


  //+ Function to Display or Hide Modals
  display: function display(bool, modalEle) {
    if (bool === false) {
      [].concat(_toConsumableArray(Modal.ele.modals)).map(function (modal) {
        modal.classList.remove('active');
      });
    }
    if (!modalEle) return;
    modalEle.classList.add('active');
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
var util = {
  hasClass: function hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return str.indexOf(testCls) != -1;
  },
  getClosestEleByClass: function getClosestEleByClass(el, cls) {
    while (el && el !== document) {
      if (util.hasClass(el, cls)) return el;
      el = el.parentNode;
    }
    return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbGVzcy9nbG9iYWwubGVzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsImluaXQiLCJlbGUiLCJ0cmlnZ2VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2RhbHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0TW9kYWwiLCJuYW1lIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXJzIiwibWFwIiwidHJpZ2dlciIsIm1vZGFsIiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJ0cmlnZ2Vyc01vZGFsIiwiZGlzcGxheSIsImNsb3Nlc3RNb2RhbCIsInV0aWwiLCJnZXRDbG9zZXN0RWxlQnlDbGFzcyIsImNsb3Nlc3RUcmlnZ2VyIiwiYm9vbCIsIm1vZGFsRWxlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaGFzQ2xhc3MiLCJlbGVtIiwiY2xzIiwic3RyIiwiY2xhc3NOYW1lIiwidGVzdENscyIsImluZGV4T2YiLCJlbCIsInBhcmVudE5vZGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7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LFFBQUwsQ0FBY08sRUFBZCxFQUFrQkwsR0FBbEIsQ0FBSixFQUE0QixPQUFPSyxFQUFQO0FBQzVCQSxXQUFLQSxHQUFHQyxVQUFSO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRDtBQWRVLENBQWI7O2tCQWtCZWhCLEk7Ozs7Ozs7Ozs7O0FDbEJmLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcHVibGljL2pzL2FwcC5qc1wiKTtcbiIsImltcG9ydCAnLi4vbGVzcy9nbG9iYWwubGVzcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIE1vZGFsLmluaXQoKTtcclxufSk7IiwiaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5jb25zdCBNb2RhbCA9IHtcclxuXHJcbiAgLy8rIExvY2FsIEVsZW1lbnQgVXRpbGl0aWVzXHJcbiAgZWxlOiB7XHJcbiAgICB0cmlnZ2VyczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtkYXRhLXRyaWdnZXJzLW1vZGFsXScpLFxyXG4gICAgbW9kYWxzOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCcpLFxyXG4gICAgZ2V0TW9kYWwobmFtZSkge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbW9kYWw9JHtuYW1lfV1gKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vKyBBZGQgRXZlbnQgTGlzdGVuZXJzXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgLy8gTW9kYWwgVHJpZ2dlcnNcclxuICAgIFsuLi50aGlzLmVsZS50cmlnZ2Vyc10ubWFwKHRyaWdnZXIgPT4ge1xyXG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBNb2RhbC5lbGUuZ2V0TW9kYWwoZS50YXJnZXQuZGF0YXNldC50cmlnZ2Vyc01vZGFsKTtcclxuICAgICAgICBNb2RhbC5kaXNwbGF5KHRydWUsIG1vZGFsKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEb2N1bWVudCBPZmYtY2xpY2tcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgY2xvc2VzdE1vZGFsID0gdXRpbC5nZXRDbG9zZXN0RWxlQnlDbGFzcyhlLnRhcmdldCwgJ21vZGFsX19ib2R5Jyk7XHJcbiAgICAgIGNvbnN0IGNsb3Nlc3RUcmlnZ2VyID0gdXRpbC5nZXRDbG9zZXN0RWxlQnlDbGFzcyhlLnRhcmdldCwgJ21vZGFsLXRyaWdnZXInKTtcclxuICAgICAgaWYoY2xvc2VzdE1vZGFsID09IG51bGwgJiYgY2xvc2VzdFRyaWdnZXIgPT0gbnVsbCkgTW9kYWwuZGlzcGxheShmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSxcclxuXHJcbiAgLy8rIEZ1bmN0aW9uIHRvIERpc3BsYXkgb3IgSGlkZSBNb2RhbHNcclxuICBkaXNwbGF5KGJvb2wsIG1vZGFsRWxlKSB7XHJcbiAgICBpZihib29sID09PSBmYWxzZSkge1xyXG4gICAgICBbLi4uTW9kYWwuZWxlLm1vZGFsc10ubWFwKG1vZGFsID0+IHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKCFtb2RhbEVsZSkgcmV0dXJuO1xyXG4gICAgbW9kYWxFbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfSxcclxuXHJcbiAgLy8rIEluaXRpYWxpemUgTW9kYWxzXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJjb25zdCB1dGlsID0ge1xyXG5cclxuICBoYXNDbGFzcyhlbGVtLCBjbHMpIHtcclxuICAgIHZhciBzdHIgPSBcIiBcIiArIGVsZW0uY2xhc3NOYW1lICsgXCIgXCI7XHJcbiAgICB2YXIgdGVzdENscyA9IFwiIFwiICsgY2xzICsgXCIgXCI7XHJcbiAgICByZXR1cm4oc3RyLmluZGV4T2YodGVzdENscykgIT0gLTEpIDtcclxuICB9LFxyXG5cclxuICBnZXRDbG9zZXN0RWxlQnlDbGFzcyhlbCwgY2xzKSB7XHJcbiAgICB3aGlsZSAoZWwgICYmIGVsICE9PSBkb2N1bWVudCkge1xyXG4gICAgICBpZiAodXRpbC5oYXNDbGFzcyhlbCwgY2xzKSkgcmV0dXJuIGVsO1xyXG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9LFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9