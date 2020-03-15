webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Copyright.js":
/*!*********************************!*\
  !*** ./components/Copyright.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
var _jsxFileName = "W:\\learning\\corona-viz\\components\\Copyright.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Copyright = function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, 'Copyright © ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "inherit",
    href: "https://material-ui.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Your Website"), ' ', new Date().getFullYear(), '.');
};

/* harmony default export */ __webpack_exports__["default"] = (Copyright);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useFetch */ "./utils/useFetch.js");
/* harmony import */ var _src_ProTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ProTip */ "./src/ProTip.js");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Link */ "./src/Link.js");
/* harmony import */ var _pages_covidGlobal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/covidGlobal */ "./pages/covidGlobal.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Copyright */ "./components/Copyright.js");
var _jsxFileName = "W:\\learning\\corona-viz\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Index = function Index() {
  var apiResponse = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])();
  console.log(apiResponse);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pageTitle: "COVID-19 Global",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/covidGlobal",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_pages_covidGlobal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx(_src_ProTip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_Copyright__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a10f14118aaae473227a.hot-update.js.map