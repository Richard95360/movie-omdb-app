module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/media/haddad/6a8a543b-c57b-47b0-a06e-396959f42841/sandra-udemy/next-movie-omdb/components/Card.js\";\nconst placeholderImg = \"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDsfRCwQvpsd4O5b6IK9evG9H1PTxZLoI6ew5iVnlz3ftQjMBQ\";\n\nconst Card = ({\n  Title,\n  Poster,\n  Year,\n  imdbID\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    class: \"card\",\n    style: {\n      marginBottom: \"10px\"\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      class: \"card-body d-flex justify-content-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        class: \"d-flex align-items-start\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: `https://www.imdb.com/title/${imdbID}`,\n          target: \"_blank\",\n          style: {\n            color: \"#9b59b6\"\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"mr-2 rounded\",\n            src: Poster === \"N/A\" ? placeholderImg : Poster,\n            alt: \"placeholder\",\n            width: \"100\",\n            height: \"130\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            class: \"title\",\n            style: {\n              fontSize: \"20px\"\n            },\n            children: Title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        style: {\n          fontSize: \"20px\"\n        },\n        children: Year\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQuanM/ZGNjYiJdLCJuYW1lcyI6WyJwbGFjZWhvbGRlckltZyIsIkNhcmQiLCJUaXRsZSIsIlBvc3RlciIsIlllYXIiLCJpbWRiSUQiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLGNBQWMsR0FDbEIsNEdBREY7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxRQUFUO0FBQWlCQyxNQUFqQjtBQUF1QkM7QUFBdkIsQ0FBRCxLQUFxQztBQUNoRCxzQkFDRTtBQUFLLFNBQUssRUFBQyxNQUFYO0FBQWtCLFNBQUssRUFBRTtBQUFFQyxrQkFBWSxFQUFFO0FBQWhCLEtBQXpCO0FBQUEsMkJBQ0U7QUFBSyxXQUFLLEVBQUMsMENBQVg7QUFBQSw4QkFDRTtBQUFLLGFBQUssRUFBQywwQkFBWDtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFHLDhCQUE2QkQsTUFBTyxFQUQ3QztBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLGVBQUssRUFBRTtBQUFFRSxpQkFBSyxFQUFFO0FBQVQsV0FIVDtBQUFBLGtDQUtFO0FBQ0UscUJBQVMsRUFBQyxjQURaO0FBRUUsZUFBRyxFQUFFSixNQUFNLEtBQUssS0FBWCxHQUFtQkgsY0FBbkIsR0FBb0NHLE1BRjNDO0FBR0UsZUFBRyxFQUFDLGFBSE47QUFJRSxpQkFBSyxFQUFDLEtBSlI7QUFLRSxrQkFBTSxFQUFDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRixlQWFFO0FBQU0saUJBQUssRUFBQyxPQUFaO0FBQW9CLGlCQUFLLEVBQUU7QUFBRUssc0JBQVEsRUFBRTtBQUFaLGFBQTNCO0FBQUEsc0JBQ0dOO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBb0JFO0FBQUcsYUFBSyxFQUFFO0FBQUVNLGtCQUFRLEVBQUU7QUFBWixTQUFWO0FBQUEsa0JBQWlDSjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEwQkQsQ0EzQkQ7O0FBNEJlSCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBsYWNlaG9sZGVySW1nID1cbiAgXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibiUzQUFOZDlHY1FEc2ZSQ3dRdnBzZDRPNWI2SUs5ZXZHOUgxUFR4WkxvSTZldzVpVm5sejNmdFFqTUJRXCI7XG5jb25zdCBDYXJkID0gKHsgVGl0bGUsIFBvc3RlciwgWWVhciwgaW1kYklEIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS8ke2ltZGJJRH1gfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM5YjU5YjZcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgc3JjPXtQb3N0ZXIgPT09IFwiTi9BXCIgPyBwbGFjZWhvbGRlckltZyA6IFBvc3Rlcn1cbiAgICAgICAgICAgICAgYWx0PVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEzMFwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICB7VGl0bGV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiIH19PntZZWFyfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ }),

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n\nvar _jsxFileName = \"/media/haddad/6a8a543b-c57b-47b0-a06e-396959f42841/sandra-udemy/next-movie-omdb/components/List.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst List = props => {\n  if (!props.results.length) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"No Results :(\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 37\n  }, undefined);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      height: \"calc(100vh - 180px)\",\n      overflow: \"scroll\"\n    },\n    children: props.results && props.results.map(result => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, result), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 55\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/MGQ2YyJdLCJuYW1lcyI6WyJMaXN0IiwicHJvcHMiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJtYXAiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDdEIsTUFBSSxDQUFDQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsTUFBbkIsRUFBMkIsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUMzQixzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUUscUJBQVY7QUFBaUNDLGNBQVEsRUFBRTtBQUEzQyxLQUFaO0FBQUEsY0FDR0osS0FBSyxDQUFDQyxPQUFOLElBQWlCRCxLQUFLLENBQUNDLE9BQU4sQ0FBY0ksR0FBZCxDQUFtQkMsTUFBRCxpQkFBWSxxRUFBQyx3REFBRCxvQkFBVUEsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE5QjtBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQVBEOztBQVNlUCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5cbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IHtcbiAgaWYgKCFwcm9wcy5yZXN1bHRzLmxlbmd0aCkgcmV0dXJuIDxwPk5vIFJlc3VsdHMgOig8L3A+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSAxODBweClcIiwgb3ZlcmZsb3c6IFwic2Nyb2xsXCIgfX0+XG4gICAgICB7cHJvcHMucmVzdWx0cyAmJiBwcm9wcy5yZXN1bHRzLm1hcCgocmVzdWx0KSA9PiA8Q2FyZCB7Li4ucmVzdWx0fSAvPil9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/List.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List */ \"./components/List.js\");\n\n\nvar _jsxFileName = \"/media/haddad/6a8a543b-c57b-47b0-a06e-396959f42841/sandra-udemy/next-movie-omdb/pages/index.js\";\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nfunction Movie({\n  results,\n  search\n}) {\n  console.log({\n    search\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      results: results\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 8\n    }, this)\n  }, void 0, false);\n}\n\nMovie.getInitialProps = async (_ref) => {\n  var _ctx$query$query, _ctx$query;\n\n  let {\n    req,\n    res,\n    match,\n    history,\n    location\n  } = _ref,\n      ctx = _objectWithoutProperties(_ref, [\"req\", \"res\", \"match\", \"history\", \"location\"]);\n\n  const search = (_ctx$query$query = ctx === null || ctx === void 0 ? void 0 : (_ctx$query = ctx.query) === null || _ctx$query === void 0 ? void 0 : _ctx$query.query) !== null && _ctx$query$query !== void 0 ? _ctx$query$query : \"\";\n  const response = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://www.omdbapi.com/?s=fast&apikey=7714b291`);\n  const data = await response.json();\n  const results = data.Search;\n  return {\n    results,\n    search // will be passed to the page component as props\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk1vdmllIiwicmVzdWx0cyIsInNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJyZXMiLCJtYXRjaCIsImhpc3RvcnkiLCJsb2NhdGlvbiIsImN0eCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFnQjtBQUFDQyxTQUFEO0FBQVVDO0FBQVYsQ0FBaEIsRUFBbUM7QUFDakNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNGO0FBQUQsR0FBWjtBQUVFLHNCQUNJO0FBQUEsMkJBQ0QscUVBQUMsd0RBQUQ7QUFBTSxhQUFPLEVBQUVEO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURDLG1CQURKO0FBS0g7O0FBRURELEtBQUssQ0FBQ0ssZUFBTixHQUF3QixnQkFPbEI7QUFBQTs7QUFBQSxNQVAwQjtBQUNoQ0MsT0FEZ0M7QUFFaENDLE9BRmdDO0FBR2hDQyxTQUhnQztBQUloQ0MsV0FKZ0M7QUFLaENDO0FBTGdDLEdBTzFCO0FBQUEsTUFESEMsR0FDRzs7QUFDRixRQUFNVCxNQUFNLHVCQUFHUyxHQUFILGFBQUdBLEdBQUgscUNBQUdBLEdBQUcsQ0FBRUMsS0FBUiwrQ0FBRyxXQUFZQSxLQUFmLCtEQUF3QixFQUFwQztBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxpREFBSyxDQUFFLGdEQUFGLENBQTVCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUNBLFFBQU1mLE9BQU8sR0FBR2MsSUFBSSxDQUFDRSxNQUFyQjtBQUVBLFNBQU87QUFDTGhCLFdBREs7QUFDSUMsVUFESixDQUNZOztBQURaLEdBQVA7QUFHRCxDQWhCSDs7QUFtQmVGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcblxuXG5mdW5jdGlvbiBNb3ZpZSAoe3Jlc3VsdHMsIHNlYXJjaH0pIHtcbiAgY29uc29sZS5sb2coe3NlYXJjaH0pO1xuICAgXG4gICAgcmV0dXJuICAoXG4gICAgICAgIDw+XG4gICAgICAgPExpc3QgcmVzdWx0cz17cmVzdWx0c30gLz5cbiAgICAgICAgPC8+XG4gICApO1xufVxuXG5Nb3ZpZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAgKHtcbnJlcSxcbnJlcyxcbm1hdGNoLFxuaGlzdG9yeSxcbmxvY2F0aW9uLFxuLi4uY3R4XG59KSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoID0gY3R4Py5xdWVyeT8ucXVlcnkgPz8gXCJcIlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP3M9ZmFzdCZhcGlrZXk9NzcxNGIyOTFgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29uc3QgcmVzdWx0cyA9IGRhdGEuU2VhcmNoO1xuICBcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0cywgc2VhcmNoLCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICB9XG4gIH1cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCI/NWNkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///node-fetch\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });