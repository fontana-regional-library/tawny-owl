(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=01e94c26&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Index')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=01e94c26&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
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
              if (!(store.state.events.length === 0)) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return store.dispatch('getUpcomingEvents');

            case 7:
              if (!(store.state.services.length === 0)) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return store.dispatch("getServices");

            case 10:
              if (!(store.state.pages.length === 0)) {
                _context.next = 13;
                break;
              }

              _context.next = 13;
              return store.dispatch("getPages");

            case 13:
              if (!(store.state.collection.length === 0)) {
                _context.next = 16;
                break;
              }

              _context.next = 16;
              return store.dispatch("getCollection");

            case 16:
              if (!(store.state.posts.length === 0)) {
                _context.next = 19;
                break;
              }

              _context.next = 19;
              return store.dispatch("getPosts");

            case 19:
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
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);