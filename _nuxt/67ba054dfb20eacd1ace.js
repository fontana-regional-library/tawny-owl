(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/events/_slug/index.vue?vue&type=template&id=a23e9b5e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Event',{attrs:{"event-object":_vm.eventObject}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/events/_slug/index.vue?vue&type=template&id=a23e9b5e&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/events/_slug/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  computed: {
    eventObject: function eventObject() {
      return this.$store.getters['getEventBySlug'](this.$route.params.slug);
    }
  },
  fetch: function () {
    var _fetch = asyncToGenerator_default()(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref) {
      var route, store, event;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              route = _ref.route, store = _ref.store;
              event = store.getters['getEventBySlug'](route.params.slug);

              if (!(event === null)) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return store.dispatch('getEventBySlug', {
                slug: route.params.slug
              });

            case 5:
              if (!(store.state.authors.length === 0)) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return store.dispatch('getAuthors');

            case 8:
              if (!(store.state.events.length === 0)) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return store.dispatch('getUpcomingEvents');

            case 11:
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
// CONCATENATED MODULE: ./pages/events/_slug/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var events_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./pages/events/_slug/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  events_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);