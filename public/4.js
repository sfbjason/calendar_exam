webpackJsonp([4],{

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(69)
/* template */
var __vue_template__ = __webpack_require__(70)
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
Component.options.__file = "resources/assets/js/pages/form/MainPage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25a96eb4", Component.options)
  } else {
    hotAPI.reload("data-v-25a96eb4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_axios__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_v_money__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_v_money___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_v_money__);
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
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    directives: { money: __WEBPACK_IMPORTED_MODULE_2_v_money__["VMoney"] },
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
            },
            money: {
                decimal: '.',
                thousands: ',',
                prefix: '$',
                suffix: '',
                precision: 0,
                masked: false
            }
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('loading', ['loadingState'])),
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('loading', ['EmitLoading']), {
        get_questions: function get_questions() {
            var vm = this;

            Object(__WEBPACK_IMPORTED_MODULE_0__api_axios__["a" /* default */])({
                method: 'GET',
                url: '/api/get_question',
                data: vm.form
            }).then(function (response) {
                vm.questions = response.data;
            }).catch(function (error) {

                console.log(error);
            });
        },
        confirmation: function confirmation() {
            if (this.$refs.form.validate()) {
                this.show_dialog = true;
            }
        },
        reset: function reset() {
            this.$refs.form.reset();
            this.form.choices = [];
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
    mounted: function mounted() {
        this.get_questions();
    }
});

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "", "justify-center": "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", sm6: "" } },
            [
              _c(
                "v-card",
                [
                  _vm.questions
                    ? _c(
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            {
                              ref: "form",
                              model: {
                                value: _vm.valid,
                                callback: function($$v) {
                                  _vm.valid = $$v
                                },
                                expression: "valid"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  name: "name",
                                  label: "Name",
                                  id: "id",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name"
                                }
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.questions, function(data, i) {
                                return [
                                  data.type === "actual" && data.is_currency
                                    ? _c("v-text-field", {
                                        directives: [
                                          {
                                            name: "money",
                                            rawName: "v-money",
                                            value: _vm.money,
                                            expression: "money"
                                          }
                                        ],
                                        attrs: {
                                          name: "name",
                                          label: data.name,
                                          id: "id",
                                          rules: [_vm.rules.required]
                                        },
                                        model: {
                                          value: data.answer,
                                          callback: function($$v) {
                                            _vm.$set(data, "answer", $$v)
                                          },
                                          expression: "data.answer"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  data.type === "actual" && !data.is_currency
                                    ? _c("v-text-field", {
                                        attrs: {
                                          name: "name",
                                          label: data.name,
                                          id: "id",
                                          rules: [_vm.rules.required]
                                        },
                                        model: {
                                          value: data.answer,
                                          callback: function($$v) {
                                            _vm.$set(data, "answer", $$v)
                                          },
                                          expression: "data.answer"
                                        }
                                      })
                                    : data.type === "boolean"
                                    ? _c("v-select", {
                                        attrs: {
                                          items: [
                                            { id: 1, choice: "Yes" },
                                            { id: 0, choice: "No" }
                                          ],
                                          label: data.name,
                                          "item-text": "choice",
                                          "item-value": "choice",
                                          rules: [_vm.rules.required]
                                        },
                                        model: {
                                          value: data.answer,
                                          callback: function($$v) {
                                            _vm.$set(data, "answer", $$v)
                                          },
                                          expression: "data.answer"
                                        }
                                      })
                                    : _c("v-select", {
                                        attrs: {
                                          items: data.choices,
                                          label: data.name,
                                          "item-text": "choice",
                                          "item-value": "choice",
                                          rules: [_vm.rules.required]
                                        },
                                        model: {
                                          value: data.answer,
                                          callback: function($$v) {
                                            _vm.$set(data, "answer", $$v)
                                          },
                                          expression: "data.answer"
                                        }
                                      })
                                ]
                              })
                            ],
                            2
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "success", small: "", round: "" },
                          on: { click: _vm.confirmation }
                        },
                        [_vm._v("Save")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "290" },
          model: {
            value: _vm.show_dialog,
            callback: function($$v) {
              _vm.show_dialog = $$v
            },
            expression: "show_dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "subheading" }, [
                _c("b", [_vm._v("Confirmation")])
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to save your answer? Click confirm to continue.\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "green darken-1",
                        disabled: _vm.loadingState,
                        flat: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.show_dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "green darken-1",
                        loading: _vm.loadingState,
                        flat: ""
                      },
                      on: { click: _vm.save }
                    },
                    [_vm._v("Confirm")]
                  )
                ],
                1
              )
            ],
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
    require("vue-hot-reload-api")      .rerender("data-v-25a96eb4", module.exports)
  }
}

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).MIX_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}));

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VMoney=t():e.VMoney=t()})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,n){"use strict";var r=n(2),i=n(5),u=n(0);t.a=function(e,t){if(t.value){var o=n.i(i.a)(u.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");1!==a.length||(e=a[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=n.i(r.a)(e.value,o),t=Math.max(t,o.suffix.length),t=e.value.length-t,t=Math.max(t,o.prefix.length+1),n.i(r.b)(e,t),e.dispatchEvent(n.i(r.c)("change"))},e.onfocus=function(){n.i(r.b)(e,e.value.length-o.suffix.length)},e.oninput(),e.dispatchEvent(n.i(r.c)("input"))}}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a;"number"==typeof e&&(e=e.toFixed(o(t.precision)));var n=e.indexOf("-")>=0?"-":"",r=u(e),i=c(r,t.precision),a=d(i).split("."),p=a[0],l=a[1];return p=f(p,t.thousands),t.prefix+n+s(p,l,t.decimal)+t.suffix}function i(e,t){var n=e.indexOf("-")>=0?-1:1,r=u(e),i=c(r,t);return parseFloat(i)*n}function u(e){return d(e).replace(/\D+/g,"")||"0"}function o(e){return a(0,e,20)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function c(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(o(t))}function f(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function s(e,t,n){return t?e+n+t:e}function d(e){return e?e.toString():""}function p(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function l(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var m=n(0);n.d(t,"a",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return l})},function(e,t,n){"use strict";function r(e,t){t&&Object.keys(t).map(function(e){a.a[e]=t[e]}),e.directive("money",o.a),e.component("money",u.a)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),u=n.n(i),o=n(1),a=n(0);n.d(t,"Money",function(){return u.a}),n.d(t,"VMoney",function(){return o.a}),n.d(t,"options",function(){return a.a}),n.d(t,"VERSION",function(){return c});var c="0.8.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),u=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var r=n.i(u.a)(e,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:n.i(u.d)(e.target.value,this.precision))}}}},function(e,t,n){"use strict";t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})}},function(e,t,n){var r=n(7)(n(4),n(8),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,u=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,u=e.default);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:u,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});

/***/ })

});