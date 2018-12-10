(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/services/index.vue?vue&type=template&id=10779bc3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Services')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/services/index.vue?vue&type=template&id=10779bc3&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/services/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//
/* harmony default export */ var servicesvue_type_script_lang_js_ = ({
  fetch: function () {
    var _fetch = asyncToGenerator_default()(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref) {
      var store;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              store = _ref.store;

              if (!(store.state.callsToAction.length === 0)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return store.dispatch('getCallsToAction');

            case 4:
              if (!(store.state.services.length === 0)) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return store.dispatch("getServices");

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function fetch(_x) {
      return _fetch.apply(this, arguments);
    }

    return fetch;
  }()
});
// CONCATENATED MODULE: ./pages/services/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_servicesvue_type_script_lang_js_ = (servicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./pages/services/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_servicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ var services = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);