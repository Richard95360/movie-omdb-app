webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Searchbar.js":
/*!*********************************!*\
  !*** ./components/Searchbar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Context */ \"./lib/Context.js\");\n\n\nvar _jsxFileName = \"/media/haddad/6a8a543b-c57b-47b0-a06e-396959f42841/sandra-udemy/next-movie-omdb/components/Searchbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Searchbar = function Searchbar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_lib_Context__WEBPACK_IMPORTED_MODULE_3__[\"Context\"]),\n      setQuery = _React$useContext.setQuery,\n      query = _React$useContext.state.query;\n\n  var setResults = function setResults(e) {\n    e.preventDefault();\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.pus;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    style: {\n      marginBottom: \"20px\"\n    },\n    onSubmit: function onSubmit(e) {\n      return setResults(e);\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"form-group\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        className: \"form-control form-control-lg\",\n        id: \"searchbar\",\n        defaultValue: query,\n        onChange: function onChange(e) {\n          return setQuery(e.target.value);\n        },\n        placeholder: \"Search Title ...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Searchbar, \"59T/vSrMxlXEFzAdFjWEPAotZto=\");\n\n_c = Searchbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Searchbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Searchbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hiYXIuanM/ZjEwMyJdLCJuYW1lcyI6WyJTZWFyY2hiYXIiLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0Iiwic2V0UXVlcnkiLCJxdWVyeSIsInN0YXRlIiwic2V0UmVzdWx0cyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlJvdXRlciIsInB1cyIsIm1hcmdpbkJvdHRvbSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBQUEsMEJBSWxCQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxvREFBakIsQ0FKa0I7QUFBQSxNQUVmQyxRQUZlLHFCQUVmQSxRQUZlO0FBQUEsTUFHYkMsS0FIYSxxQkFHckJDLEtBSHFCLENBR2JELEtBSGE7O0FBS3RCLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLENBQUMsRUFBSTtBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUFDLHNEQUFNLENBQUNDLEdBQVA7QUFDRCxHQUpEOztBQUtBLHNCQUNFO0FBQU0sU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FBYjtBQUF1QyxZQUFRLEVBQUUsa0JBQUNKLENBQUQ7QUFBQSxhQUFPRCxVQUFVLENBQUNDLENBQUQsQ0FBakI7QUFBQSxLQUFqRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsaUJBQVMsRUFBQyw4QkFGWjtBQUdFLFVBQUUsRUFBQyxXQUhMO0FBSUUsb0JBQVksRUFBRUgsS0FKaEI7QUFLRSxnQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsaUJBQU9KLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLFNBTFo7QUFNRSxtQkFBVyxFQUFDO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQXhCRDs7R0FBTWpCLFM7O0tBQUFBLFM7QUEwQlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWFyY2hiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vbGliL0NvbnRleHRcIjtcblxuXG5jb25zdCBTZWFyY2hiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdICA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IHtzZXRRdWVyeSxcbiAgIHN0YXRlOnsgcXVlcnl9LFxuICB9ID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3Qgc2V0UmVzdWx0cyA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIFJvdXRlci5wdXNcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19IG9uU3VibWl0PXsoZSkgPT4gc2V0UmVzdWx0cyhlKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIlxuICAgICAgICAgIGlkPVwic2VhcmNoYmFyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFRpdGxlIC4uLlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Searchbar.js\n");

/***/ })

})