webpackJsonp([5],{

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

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(76)
/* template */
var __vue_template__ = __webpack_require__(77)
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
Component.options.__file = "resources/assets/js/pages/answer_list/MainPage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-af303996", Component.options)
  } else {
    hotAPI.reload("data-v-af303996", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewAnswer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewAnswer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ViewAnswer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_axios__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(72);
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
    components: {
        appViewAnswer: __WEBPACK_IMPORTED_MODULE_0__ViewAnswer___default.a
    },
    data: function data() {
        return {
            total_results: 0,
            result_sets: [],
            fetching: false,
            pagination: {},
            per_page: [10, 25, 50],
            headers: [{
                text: 'Name',
                sortable: false,
                align: 'left'
            }, {
                text: 'Action',
                width: '100',
                align: 'center',
                sortable: false
            }],
            show_answer_dialog: false,
            answer: [],
            selected_id: 0,
            show_dialog: false
        };
    },

    watch: {
        pagination: {
            handler: function handler(newPage, oldPage) {
                this.get_list();
            },
            deep: true
        }
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('loading', ['loadingState'])),
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('loading', ['EmitLoading']), {
        get_list: function get_list() {
            var vm = this,
                params = {};
            vm.fetching = true;

            params = {
                page: vm.pagination.page,
                per_page: vm.pagination.rowsPerPage
            };

            __WEBPACK_IMPORTED_MODULE_1__api_axios__["a" /* default */].get('/api/get_list', { params: params }).then(function (response) {
                vm.result_sets = response.data.data;
                vm.total_results = response.data.model.total;
                vm.fetching = false;
            }).catch(function (error) {
                console.log(error);
                vm.fetching = false;
            });
        },
        show_answer: function show_answer(data) {
            this.selected_id = data.id;
            this.show_answer_dialog = true;
            this.answer = data.answer;
        },
        delete_answer: function delete_answer(data) {
            this.selected_id = data.id;
            this.show_dialog = true;
        },
        process_delete: function process_delete() {
            var vm = this,
                updated_answer = [];

            vm.EmitLoading(true);

            Object(__WEBPACK_IMPORTED_MODULE_1__api_axios__["a" /* default */])({
                method: 'POST',
                url: '/api/delete_answer',
                data: { id: vm.selected_id }
            }).then(function (response) {
                EventBus.$emit('show_snackbar', {
                    show: true,
                    message: response.data.message,
                    type: response.data.status
                });
                if (response.data.status == 'success') {
                    vm.show_dialog = false;
                    vm.get_list();
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
        this.get_list();
    }
});

/***/ }),

/***/ 77:
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
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          items: _vm.result_sets,
                          headers: _vm.headers,
                          pagination: _vm.pagination,
                          "total-items": _vm.total_results,
                          loading: _vm.fetching,
                          "rows-per-page-items": _vm.per_page
                        },
                        on: {
                          "update:pagination": function($event) {
                            _vm.pagination = $event
                          }
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "items",
                            fn: function(props) {
                              return [
                                _c("tr", { staticClass: "hand" }, [
                                  _c("td", { staticClass: "text-xs-left" }, [
                                    _vm._v(_vm._s(props.item.name))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "text-xs-center" },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          staticClass: "tab-custom",
                                          attrs: {
                                            bottom: "",
                                            left: "",
                                            "nudge-bottom": 40
                                          }
                                        },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                slot: "activator",
                                                icon: ""
                                              },
                                              slot: "activator"
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("more_vert")
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list",
                                            [
                                              _c(
                                                "v-list-tile",
                                                {
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.show_answer(
                                                        props.item
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-tile-action",
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("search")
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-tile-content",
                                                    [
                                                      _c("v-list-tile-title", [
                                                        _vm._v("View")
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-tile",
                                                {
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.delete_answer(
                                                        props.item
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-tile-action",
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("delete")
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-tile-content",
                                                    [
                                                      _c("v-list-tile-title", [
                                                        _vm._v("Delete")
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
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ]
                            }
                          }
                        ])
                      })
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
      _c("app-view-answer", {
        attrs: { answer: _vm.answer, id: _vm.selected_id },
        model: {
          value: _vm.show_answer_dialog,
          callback: function($$v) {
            _vm.show_answer_dialog = $$v
          },
          expression: "show_answer_dialog"
        }
      }),
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
                  "\n                Are you sure you want to delete? Click confirm to continue.\n            "
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
                      on: { click: _vm.process_delete }
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
    require("vue-hot-reload-api")      .rerender("data-v-af303996", module.exports)
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(79)
/* template */
var __vue_template__ = __webpack_require__(80)
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
Component.options.__file = "resources/assets/js/pages/answer_list/ViewAnswer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48df3960", Component.options)
  } else {
    hotAPI.reload("data-v-48df3960", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_axios__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(72);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    props: {
        value: {
            type: Boolean,
            default: false
        },
        id: {
            type: Number,
            default: 0
        },
        answer: {
            type: Array | Object,
            default: []
        }
    },
    data: function data() {
        return {
            valid: false,
            editing: false,
            rules: {
                required: function required(v) {
                    return !!v || 'This field is required.';
                }
            },
            edit_data: [],
            show_dialog: false
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
            var vm = this,
                updated_answer = [];

            vm.EmitLoading(true);
            vm.loading = true;

            updated_answer = [].concat(_toConsumableArray(vm.answer));

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = updated_answer.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var i = _ref2[0];
                    var v = _ref2[1];

                    updated_answer[i].answer = v.new_answer;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            Object(__WEBPACK_IMPORTED_MODULE_0__api_axios__["a" /* default */])({
                method: 'POST',
                url: '/api/update_answer',
                data: { id: vm.id, answer: updated_answer }
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
    })
});

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", scrollable: "", "max-width": "600px" },
          model: {
            value: _vm.value,
            callback: function($$v) {
              _vm.value = $$v
            },
            expression: "value"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("span", { staticClass: "headline" }, [
                    _vm._v("User Answer")
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  !_vm.editing
                    ? _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "primary",
                            fab: "",
                            small: "",
                            dark: ""
                          },
                          on: {
                            click: function($event) {
                              _vm.editing = !_vm.editing
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-pencil")])],
                        1
                      )
                    : _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "error",
                            fab: "",
                            small: "",
                            dark: ""
                          },
                          on: {
                            click: function($event) {
                              _vm.editing = !_vm.editing
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      ),
                  _vm._v(" "),
                  _vm.editing
                    ? [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              color: "success",
                              fab: "",
                              small: "",
                              dark: ""
                            },
                            on: { click: _vm.confirmation }
                          },
                          [_c("v-icon", [_vm._v("save")])],
                          1
                        )
                      ]
                    : [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              color: "blue darken-4",
                              fab: "",
                              small: "",
                              dark: "",
                              href: "/print_answer/" + _vm.id,
                              target: "_blank"
                            }
                          },
                          [_c("v-icon", [_vm._v("print")])],
                          1
                        )
                      ]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  !_vm.editing
                    ? [
                        _vm._l(_vm.answer, function(data, i) {
                          return [
                            _c(
                              "div",
                              {
                                staticClass: "body-1 grey--text text--darken-1"
                              },
                              [_vm._v(_vm._s(data.name))]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "title" }, [
                              _vm._v(_vm._s(data.answer))
                            ]),
                            _vm._v(" "),
                            _c("v-divider")
                          ]
                        })
                      ]
                    : [
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
                            _vm._l(_vm.answer, function(data, i) {
                              return [
                                data.type === "actual"
                                  ? _c("v-text-field", {
                                      attrs: {
                                        name: "name",
                                        label: data.name,
                                        id: "id",
                                        rules: [_vm.rules.required]
                                      },
                                      model: {
                                        value: data.new_answer,
                                        callback: function($$v) {
                                          _vm.$set(data, "new_answer", $$v)
                                        },
                                        expression: "data.new_answer"
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
                                        value: data.new_answer,
                                        callback: function($$v) {
                                          _vm.$set(data, "new_answer", $$v)
                                        },
                                        expression: "data.new_answer"
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
                                        value: data.new_answer,
                                        callback: function($$v) {
                                          _vm.$set(data, "new_answer", $$v)
                                        },
                                        expression: "data.new_answer"
                                      }
                                    })
                              ]
                            })
                          ],
                          2
                        )
                      ]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("div", { staticClass: "flex-grow-1" }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "default", flat: "" },
                      on: {
                        click: function($event) {
                          _vm.editing = false
                          _vm.$emit("input", false)
                        }
                      }
                    },
                    [_vm._v("Close")]
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
                  "\n            Are you sure you want to save changes? Click confirm to continue.\n        "
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
    require("vue-hot-reload-api")      .rerender("data-v-48df3960", module.exports)
  }
}

/***/ })

});