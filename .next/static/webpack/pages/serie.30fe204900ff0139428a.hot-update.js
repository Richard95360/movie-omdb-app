webpackHotUpdate_N_E("pages/serie",{

/***/ "./pages/serie.js":
/*!************************!*\
  !*** ./pages/serie.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/List */ \"./components/List.js\");\n\n\n\n\n\nvar _jsxFileName = \"/media/haddad/6a8a543b-c57b-47b0-a06e-396959f42841/sandra-udemy/next-movie-omdb/pages/serie.js\";\n\n\n\nfunction Serie(_ref) {\n  var results = _ref.results;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_List__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      results: results\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 8\n    }, this)\n  }, void 0, false);\n}\n\n_c = Serie;\n\nSerie.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var _ctx$query$query, _ctx$query, _yield$response$json, _data$Search;\n\n    var req, res, match, history, location, ctx, search, response, data, results;\n    return _media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            req = _ref2.req, res = _ref2.res, match = _ref2.match, history = _ref2.history, location = _ref2.location, ctx = Object(_media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"req\", \"res\", \"match\", \"history\", \"location\"]);\n            search = (_ctx$query$query = ctx === null || ctx === void 0 ? void 0 : (_ctx$query = ctx.query) === null || _ctx$query === void 0 ? void 0 : _ctx$query.query) !== null && _ctx$query$query !== void 0 ? _ctx$query$query : \"\";\n            _context.next = 4;\n            return node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"http://www.omdbapi.com/?apikey=7714b291&s=\".concat(search));\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            _context.t1 = _yield$response$json = _context.sent;\n            _context.t0 = _context.t1 !== null;\n\n            if (!_context.t0) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.t0 = _yield$response$json !== void 0;\n\n          case 11:\n            if (!_context.t0) {\n              _context.next = 15;\n              break;\n            }\n\n            _context.t2 = _yield$response$json;\n            _context.next = 16;\n            break;\n\n          case 15:\n            _context.t2 = [];\n\n          case 16:\n            data = _context.t2;\n            results = (_data$Search = data.Search) !== null && _data$Search !== void 0 ? _data$Search : [];\n            return _context.abrupt(\"return\", {\n              results: results // will be passed to the page component as props\n\n            });\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\n\nvar _c;\n\n$RefreshReg$(_c, \"Serie\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VyaWUuanM/NjU3OCJdLCJuYW1lcyI6WyJTZXJpZSIsInJlc3VsdHMiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJyZXMiLCJtYXRjaCIsImhpc3RvcnkiLCJsb2NhdGlvbiIsImN0eCIsInNlYXJjaCIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiU2VhcmNoIiwiTW92aWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBMkI7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7QUFHdkIsc0JBQ0k7QUFBQSwyQkFDRCxxRUFBQyx3REFBRDtBQUFNLGFBQU8sRUFBRUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREMsbUJBREo7QUFLSDs7S0FSUUQsSzs7QUFVVEEsS0FBSyxDQUFDRSxlQUFOO0FBQUEsdVhBQXdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkMsZUFEb0IsU0FDcEJBLEdBRG9CLEVBRXBCQyxHQUZvQixTQUVwQkEsR0FGb0IsRUFHcEJDLEtBSG9CLFNBR3BCQSxLQUhvQixFQUlwQkMsT0FKb0IsU0FJcEJBLE9BSm9CLEVBS3BCQyxRQUxvQixTQUtwQkEsUUFMb0IsRUFNakJDLEdBTmlCO0FBUWRDLGtCQVJjLHVCQVFMRCxHQVJLLGFBUUxBLEdBUksscUNBUUxBLEdBQUcsQ0FBRUUsS0FSQSwrQ0FRTCxXQUFZQSxLQVJQLCtEQVFnQixFQVJoQjtBQUFBO0FBQUEsbUJBU0dDLGlEQUFLLHFEQUE4Q0YsTUFBOUMsRUFUUjs7QUFBQTtBQVNkRyxvQkFUYztBQUFBO0FBQUEsbUJBVURBLFFBQVEsQ0FBQ0MsSUFBVCxFQVZDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBCQVVrQixFQVZsQjs7QUFBQTtBQVVkQyxnQkFWYztBQVdkYixtQkFYYyxtQkFXSmEsSUFBSSxDQUFDQyxNQVhELHVEQVdXLEVBWFg7QUFBQSw2Q0FhYjtBQUNMZCxxQkFBTyxFQUFQQSxPQURLLENBRUw7O0FBRkssYUFiYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQmVlLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2VyaWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcblxuZnVuY3Rpb24gU2VyaWUgKHtyZXN1bHRzfSkge1xuIFxuICAgXG4gICAgcmV0dXJuICAoXG4gICAgICAgIDw+XG4gICAgICAgPExpc3QgcmVzdWx0cz17cmVzdWx0c30gLz5cbiAgICAgICAgPC8+XG4gICApO1xufVxuXG5TZXJpZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAgKHtcbiAgICByZXEsXG4gICAgcmVzLFxuICAgIG1hdGNoLFxuICAgIGhpc3RvcnksXG4gICAgbG9jYXRpb24sXG4gICAgLi4uY3R4XG59KSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoID0gY3R4Py5xdWVyeT8ucXVlcnkgPz8gXCJcIjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NzcxNGIyOTEmcz0ke3NlYXJjaH1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpID8/IFtdO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLlNlYXJjaCA/PyBbXTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdHMsIFxuICAgICAgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfTtcbiAgfTtcbiAgXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/serie.js\n");

/***/ })

})