webpackHotUpdate("static\\development\\pages\\covidGlobal.js",{

/***/ "./pages/covidGlobal.js":
/*!******************************!*\
  !*** ./pages/covidGlobal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nivo_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/pie */ "./node_modules/@nivo/pie/dist/nivo-pie.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Link */ "./src/Link.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./constants/index.js");

var _jsxFileName = "W:\\learning\\corona-viz\\pages\\covidGlobal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var CovidGlobal = function CovidGlobal(props) {
  var pieData = props.pieData;
  console.log(pieData);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageTitle: "PieChart Representation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Home"), __jsx("div", {
    style: {
      height: 500,
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_nivo_pie__WEBPACK_IMPORTED_MODULE_2__["ResponsivePie"], {
    data: pieData,
    margin: {
      top: 40,
      right: 80,
      bottom: 80,
      left: 80
    },
    innerRadius: 0.5,
    padAngle: 0.7,
    cornerRadius: 3,
    colors: {
      scheme: 'nivo'
    },
    borderWidth: 1,
    borderColor: {
      from: 'color',
      modifiers: [['darker', 0.2]]
    },
    radialLabelsSkipAngle: 10,
    radialLabelsTextXOffset: 6,
    radialLabelsTextColor: "#333333",
    radialLabelsLinkOffset: 0,
    radialLabelsLinkDiagonalLength: 16,
    radialLabelsLinkHorizontalLength: 24,
    radialLabelsLinkStrokeWidth: 1,
    radialLabelsLinkColor: {
      from: 'color'
    },
    slicesLabelsSkipAngle: 10,
    slicesLabelsTextColor: "#333333",
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    defs: [{
      id: 'dots',
      type: 'patternDots',
      background: 'inherit',
      color: 'rgba(255, 255, 255, 0.3)',
      size: 4,
      padding: 1,
      stagger: true
    }, {
      id: 'lines',
      type: 'patternLines',
      background: 'inherit',
      color: 'rgba(255, 255, 255, 0.3)',
      rotation: -45,
      lineWidth: 6,
      spacing: 10
    }],
    fill: [{
      match: {
        id: 'Confirmed'
      },
      id: 'dots'
    }, {
      match: {
        id: 'Recovered'
      },
      id: 'dots'
    }, {
      match: {
        id: 'Deaths'
      },
      id: 'dots'
    }],
    legends: [{
      anchor: 'bottom',
      direction: 'row',
      translateY: 56,
      itemWidth: 100,
      itemHeight: 18,
      itemTextColor: '#999',
      symbolSize: 18,
      symbolShape: 'circle',
      effects: [{
        on: 'hover',
        style: {
          itemTextColor: '#000'
        }
      }]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })));
};

CovidGlobal.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(_constants__WEBPACK_IMPORTED_MODULE_6__["COVID_API"]));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            pieData: [{
              id: "Confirmed",
              label: "Confirmed",
              value: data.confirmed.value,
              "color": "hsl(292, 70%, 50%)"
            }, {
              id: "Recovered",
              label: "Recovered",
              value: data.recovered.value,
              "color": "hsl(108, 70%, 50%)"
            }, {
              id: "Deaths",
              label: "Deaths",
              value: data.deaths.value,
              "color": "hsl(153, 70%, 50%)"
            }]
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (CovidGlobal);

/***/ })

})
//# sourceMappingURL=covidGlobal.js.c45eb2da29bc721b10ad.hot-update.js.map