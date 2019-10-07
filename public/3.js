webpackJsonp([3],{

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(61)
/* template */
var __vue_template__ = __webpack_require__(62)
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
Component.options.__file = "resources/assets/js/pages/question_settings/MainPage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dedd6b8", Component.options)
  } else {
    hotAPI.reload("data-v-3dedd6b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_axios__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(72);
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
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            valid: false,
            form: {
                choices: [],
                is_currency: false
            },
            show_dialog: false,
            rules: {
                required: function required(v) {
                    return !!v || 'This field is required.';
                }
            },
            loading: false
        };
    },

    watch: {
        form: {
            handler: function handler(newValue, OldVal) {
                var vm = this;
                if (vm.form.type === 'dropdown') {
                    if (vm.form.choices.length <= 0) {
                        vm.addChoices();
                    }
                }
                if (vm.form.type === 'actual') {
                    vm.form.is_currency = false;
                }
            },
            deep: true
        }
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('loading', ['loadingState'])),
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('loading', ['EmitLoading']), {
        addChoices: function addChoices() {
            this.form.choices.push({
                choice: ''
            });
        },
        removeItem: function removeItem(row) {
            this.form.choices.splice(row, 1);
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
                url: '/api/save_question',
                data: vm.form
            }).then(function (response) {
                EventBus.$emit('show_snackbar', {
                    show: true,
                    message: response.data.message,
                    type: response.data.status
                });
                if (response.data.status == 'success') {
                    vm.show_dialog = false;
                    vm.reset();
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
    })
});

/***/ }),

/***/ 62:
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
                  _c(
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
                              name: "",
                              label: "Name of Question",
                              id: "id",
                              rules: [_vm.rules.required]
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "body-2" }, [
                            _vm._v(
                              "\n                            Type of Question\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-radio-group",
                            {
                              attrs: { rules: [_vm.rules.required], row: "" },
                              model: {
                                value: _vm.form.type,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "type", $$v)
                                },
                                expression: "form.type"
                              }
                            },
                            [
                              _c("v-radio", {
                                attrs: { label: "Boolean", value: "boolean" }
                              }),
                              _vm._v(" "),
                              _c("v-radio", {
                                attrs: { label: "Dropdown", value: "dropdown" }
                              }),
                              _vm._v(" "),
                              _c("v-radio", {
                                attrs: {
                                  label: "Actual Input",
                                  value: "actual"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.form.type === "dropdown"
                            ? [
                                _c("span", { staticClass: "body-2" }, [
                                  _vm._v(
                                    "\n                                Choices\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mx-2",
                                    attrs: {
                                      fab: "",
                                      small: "",
                                      color: "primary"
                                    },
                                    on: { click: _vm.addChoices }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-plus")])],
                                  1
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.form.choices, function(item, index) {
                                  return [
                                    _c(
                                      "v-layout",
                                      { attrs: { row: "", wrap: "" } },
                                      [
                                        _c(
                                          "v-flex",
                                          { attrs: { xs11: "" } },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                name: "name",
                                                label: "Description",
                                                id: "id",
                                                rules: [_vm.rules.required]
                                              },
                                              model: {
                                                value: item.choice,
                                                callback: function($$v) {
                                                  _vm.$set(item, "choice", $$v)
                                                },
                                                expression: "item.choice"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-flex",
                                          { attrs: { xs1: "" } },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mx-2",
                                                attrs: {
                                                  fab: "",
                                                  small: "",
                                                  color: "error"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.removeItem(index)
                                                  }
                                                }
                                              },
                                              [
                                                _c("v-icon", [
                                                  _vm._v("mdi-minus")
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                })
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.type === "actual"
                            ? [
                                _c("v-checkbox", {
                                  attrs: { label: "Currency" },
                                  model: {
                                    value: _vm.form.is_currency,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "is_currency", $$v)
                                    },
                                    expression: "form.is_currency"
                                  }
                                })
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ],
                    1
                  ),
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "error", small: "", round: "" },
                          on: { click: _vm.reset }
                        },
                        [_vm._v("Reset")]
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
                  "\n                Are you sure you want to save this question? Click confirm to continue.\n            "
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
    require("vue-hot-reload-api")      .rerender("data-v-3dedd6b8", module.exports)
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

/***/ })

});