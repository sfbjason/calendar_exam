webpackJsonp([0],{

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(65)
/* template */
var __vue_template__ = __webpack_require__(67)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/calendar/MainPage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59cc6aec", Component.options)
  } else {
    hotAPI.reload("data-v-59cc6aec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_axios__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(14);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            name: '',
            questions: null,
            show_dialog: false,
            valid: false,
            rules: {
                required: function required(v) {
                    return !!v || 'This field is required.';
                }
            }
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('loading', ['loadingState'])),
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('loading', ['EmitLoading']), {
        confirmation: function confirmation() {
            if (this.$refs.form.validate()) {
                this.show_dialog = true;
            }
        },
        save: function save() {
            var vm = this;

            vm.EmitLoading(true);
            vm.loading = true;

            Object(__WEBPACK_IMPORTED_MODULE_0__api_axios__["a" /* default */])({
                method: 'POST',
                url: '/api/save_answer',
                data: { answer: vm.questions, name: vm.name }
            }).then(function (response) {
                EventBus.$emit('show_snackbar', {
                    show: true,
                    message: response.data.message,
                    type: response.data.status
                });
                if (response.data.status == 'success') {
                    vm.show_dialog = false;
                }
                vm.EmitLoading(false);
            }).catch(function (error) {
                EventBus.$emit('show_snackbar', {
                    show: true,
                    message: 'Something went wrong when saving data',
                    type: 'error'
                });
                console.log(error);
                vm.EmitLoading(false);
            });
        }
    }),
    mounted: function mounted() {}
});

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    // baseURL: process.env.MIX_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}));

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-lg": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [_c("v-flex", { attrs: { md12: "" } }, [_c("router-view")], 1)],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59cc6aec", module.exports)
  }
}

/***/ })

});