webpackHotUpdate_N_E("pages/movie",{

/***/ "./pages/movie.js":
/*!************************!*\
  !*** ./pages/movie.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/List */ \"./components/List.js\");\n\n\n\n\n\nvar _jsxFileName = \"/media/haddad/6a8a543b-c57b-47b0-a06e-396959f42841/sandra-udemy/next-movie-omdb/pages/movie.js\";\n\n\n\nfunction Movie(_ref) {\n  var results = _ref.results;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_List__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      results: results\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 8\n    }, this)\n  }, void 0, false);\n}\n\n_c = Movie;\n\nMovie.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var _ctx$query$query, _ctx$query, _yield$response$json, _data$Search;\n\n    var req, res, match, history, location, ctx, search, response, data, results;\n    return _media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            req = _ref2.req, res = _ref2.res, match = _ref2.match, history = _ref2.history, location = _ref2.location, ctx = Object(_media_haddad_6a8a543b_c57b_47b0_a06e_396959f42841_sandra_udemy_next_movie_omdb_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"req\", \"res\", \"match\", \"history\", \"location\"]);\n            search = (_ctx$query$query = ctx === null || ctx === void 0 ? void 0 : (_ctx$query = ctx.query) === null || _ctx$query === void 0 ? void 0 : _ctx$query.query) !== null && _ctx$query$query !== void 0 ? _ctx$query$query : \"\";\n            _context.next = 4;\n            return node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"http://www.omdbapi.com/?apikey=7714b291&s=\".concat(search, \"type=movie\"));\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            _context.t1 = _yield$response$json = _context.sent;\n            _context.t0 = _context.t1 !== null;\n\n            if (!_context.t0) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.t0 = _yield$response$json !== void 0;\n\n          case 11:\n            if (!_context.t0) {\n              _context.next = 15;\n              break;\n            }\n\n            _context.t2 = _yield$response$json;\n            _context.next = 16;\n            break;\n\n          case 15:\n            _context.t2 = [];\n\n          case 16:\n            data = _context.t2;\n            results = (_data$Search = data.Search) !== null && _data$Search !== void 0 ? _data$Search : [];\n            return _context.abrupt(\"return\", {\n              results: results // will be passed to the page component as props\n\n            });\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\n\nvar _c;\n\n$RefreshReg$(_c, \"Movie\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUuanM/ZTAyZSJdLCJuYW1lcyI6WyJNb3ZpZSIsInJlc3VsdHMiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJyZXMiLCJtYXRjaCIsImhpc3RvcnkiLCJsb2NhdGlvbiIsImN0eCIsInNlYXJjaCIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTJCO0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVO0FBR3ZCLHNCQUNJO0FBQUEsMkJBQ0QscUVBQUMsd0RBQUQ7QUFBTSxhQUFPLEVBQUVBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURDLG1CQURKO0FBS0g7O0tBUlFELEs7O0FBVVRBLEtBQUssQ0FBQ0UsZUFBTjtBQUFBLHVYQUF3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJDLGVBRG9CLFNBQ3BCQSxHQURvQixFQUVwQkMsR0FGb0IsU0FFcEJBLEdBRm9CLEVBR3BCQyxLQUhvQixTQUdwQkEsS0FIb0IsRUFJcEJDLE9BSm9CLFNBSXBCQSxPQUpvQixFQUtwQkMsUUFMb0IsU0FLcEJBLFFBTG9CLEVBTWpCQyxHQU5pQjtBQVFkQyxrQkFSYyx1QkFRTEQsR0FSSyxhQVFMQSxHQVJLLHFDQVFMQSxHQUFHLENBQUVFLEtBUkEsK0NBUUwsV0FBWUEsS0FSUCwrREFRZ0IsRUFSaEI7QUFBQTtBQUFBLG1CQVNHQyxpREFBSyxxREFBOENGLE1BQTlDLGdCQVRSOztBQUFBO0FBU2RHLG9CQVRjO0FBQUE7QUFBQSxtQkFVREEsUUFBUSxDQUFDQyxJQUFULEVBVkM7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsMEJBVWtCLEVBVmxCOztBQUFBO0FBVWRDLGdCQVZjO0FBV2RiLG1CQVhjLG1CQVdKYSxJQUFJLENBQUNDLE1BWEQsdURBV1csRUFYWDtBQUFBLDZDQWFiO0FBQ0xkLHFCQUFPLEVBQVBBLE9BREssQ0FFTDs7QUFGSyxhQWJhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CZUQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xuXG5mdW5jdGlvbiBNb3ZpZSAoe3Jlc3VsdHN9KSB7XG4gXG4gICBcbiAgICByZXR1cm4gIChcbiAgICAgICAgPD5cbiAgICAgICA8TGlzdCByZXN1bHRzPXtyZXN1bHRzfSAvPlxuICAgICAgICA8Lz5cbiAgICk7XG59XG5cbk1vdmllLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICAoe1xuICAgIHJlcSxcbiAgICByZXMsXG4gICAgbWF0Y2gsXG4gICAgaGlzdG9yeSxcbiAgICBsb2NhdGlvbixcbiAgICAuLi5jdHhcbn0pID0+IHtcbiAgICBjb25zdCBzZWFyY2ggPSBjdHg/LnF1ZXJ5Py5xdWVyeSA/PyBcIlwiO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT03NzE0YjI5MSZzPSR7c2VhcmNofXR5cGU9bW92aWVgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpID8/IFtdO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLlNlYXJjaCA/PyBbXTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdHMsIFxuICAgICAgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfTtcbiAgfTtcbiAgXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movie.js\n");

/***/ })

})