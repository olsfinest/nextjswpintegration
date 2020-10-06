webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Post = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Post, _React$Component);

  var _super = _createSuper(Post);

  function Post() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Post);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      post: [],
      isLoaded: false
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://www.baguiotransient.net/olsfinesttest/wp-json/wp/v2/posts').then(function (res) {
        return _this2.setState({
          post: res.data,
          isLoaded: true
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoaded = this.state.isLoaded;
      var post = this.state.post;

      if (isLoaded) {
        var listItems = post.map(function (postlist) {
          return __jsx("div", {
            className: "col-md-4 postlist"
          }, __jsx("h2", null, postlist.title.rendered), __jsx("span", {
            dangerouslySetInnerHTML: {
              __html: postlist.excerpt.rendered
            }
          }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: '/post/?id=' + postlist.id
          }, "Click Here"));
        });
        return __jsx("div", null, listItems);
      } else {
        return __jsx("div", null);
      }
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Post);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwiaXNMb2FkZWQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJsaXN0SXRlbXMiLCJtYXAiLCJwb3N0bGlzdCIsInRpdGxlIiwicmVuZGVyZWQiLCJfX2h0bWwiLCJleGNlcnB0IiwiaWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUdNQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUdNO0FBQ0pDLFVBQUksRUFBRyxFQURIO0FBRUpDLGNBQVEsRUFBRztBQUZQLEs7Ozs7Ozs7d0NBS1k7QUFBQTs7QUFDaEJDLGtEQUFLLENBQUNDLEdBQU4sQ0FBVSxtRUFBVixFQUNDQyxJQURELENBQ00sVUFBQUMsR0FBRztBQUFBLGVBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFDdkJOLGNBQUksRUFBR0ssR0FBRyxDQUFDRSxJQURZO0FBRXZCTixrQkFBUSxFQUFHO0FBRlksU0FBZCxDQUFKO0FBQUEsT0FEVCxXQUtPLFVBQUFPLEdBQUc7QUFBQSxlQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsT0FMVjtBQU1IOzs7NkJBR1E7QUFFTCxVQUFNUCxRQUFRLEdBQUcsS0FBS1UsS0FBTCxDQUFXVixRQUE1QjtBQUNBLFVBQU1ELElBQUksR0FBRyxLQUFLVyxLQUFMLENBQVdYLElBQXhCOztBQUVBLFVBQUdDLFFBQUgsRUFBYTtBQUVULFlBQU1XLFNBQVMsR0FBR1osSUFBSSxDQUFDYSxHQUFMLENBQVMsVUFBQ0MsUUFBRDtBQUFBLGlCQUUzQjtBQUFLLHFCQUFTLEVBQUM7QUFBZixhQUVRLGtCQUFLQSxRQUFRLENBQUNDLEtBQVQsQ0FBZUMsUUFBcEIsQ0FGUixFQUlRO0FBQU0sbUNBQXVCLEVBQUU7QUFBQ0Msb0JBQU0sRUFBRUgsUUFBUSxDQUFDSSxPQUFULENBQWlCRjtBQUExQjtBQUEvQixZQUpSLEVBTVEsTUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUUsZUFBY0YsUUFBUSxDQUFDSztBQUFuQywwQkFOUixDQUYyQjtBQUFBLFNBQVQsQ0FBbEI7QUFhQSxlQUNBLG1CQUNLUCxTQURMLENBREE7QUFNSCxPQXJCRCxNQXFCTztBQUVILGVBQ0ksa0JBREo7QUFNSDtBQUdKOzs7O0VBdkRjUSw0Q0FBSyxDQUFDQyxTOztBQTJEVnRCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFlNDY0OWEwN2YxYmFjMGY5NmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNsYXNzIFBvc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIFxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgcG9zdCA6IFtdLFxyXG4gICAgICAgIGlzTG9hZGVkIDogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vd3d3LmJhZ3Vpb3RyYW5zaWVudC5uZXQvb2xzZmluZXN0dGVzdC93cC1qc29uL3dwL3YyL3Bvc3RzJylcclxuICAgICAgICAudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBvc3QgOiByZXMuZGF0YSAsXHJcbiAgICAgICAgICAgIGlzTG9hZGVkIDogdHJ1ZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCBpc0xvYWRlZCA9IHRoaXMuc3RhdGUuaXNMb2FkZWQ7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IHRoaXMuc3RhdGUucG9zdDtcclxuXHJcbiAgICAgICAgaWYoaXNMb2FkZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtcyA9IHBvc3QubWFwKChwb3N0bGlzdCkgPT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgcG9zdGxpc3RcIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Bvc3RsaXN0LnRpdGxlLnJlbmRlcmVkfTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwb3N0bGlzdC5leGNlcnB0LnJlbmRlcmVkfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0Lz9pZD0nKyBwb3N0bGlzdC5pZH0+Q2xpY2sgSGVyZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=