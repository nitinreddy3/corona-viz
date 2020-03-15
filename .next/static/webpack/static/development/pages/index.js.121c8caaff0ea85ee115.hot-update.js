webpackHotUpdate("static\\development\\pages\\index.js",{

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
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.121c8caaff0ea85ee115.hot-update.js.map