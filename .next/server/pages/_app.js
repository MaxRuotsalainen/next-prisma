/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/NextProgressBar.js":
/*!************************************!*\
  !*** ./src/lib/NextProgressBar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* eslint-disable react/prefer-stateless-function */ class NextNProgress extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {\n    static defaultProps = {\n        color: \"#1769BB\",\n        startPosition: 0.3,\n        stopDelayMs: 200,\n        height: 4\n    };\n    timer = null;\n    routeChangeStart = ()=>{\n        nprogress__WEBPACK_IMPORTED_MODULE_3___default().set(this.props.startPosition);\n        nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();\n    };\n    routeChangeEnd = ()=>{\n        clearTimeout(this.timer);\n        this.timer = setTimeout(()=>{\n            nprogress__WEBPACK_IMPORTED_MODULE_3___default().done(true);\n        }, this.props.stopDelayMs);\n    };\n    render() {\n        const { color , height  } = this.props;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n            id: \"806a735224603e0d\",\n            dynamic: [\n                color,\n                height,\n                color,\n                color\n            ],\n            children: `#nprogress{pointer-events:none}#nprogress .bar{background:${color};position:fixed;z-index:1031;top:0;left:0;width:100%;height:${height}px}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;-webkit-box-shadow:0 0 10px ${color},0 0 5px ${color};-moz-box-shadow:0 0 10px ${color},0 0 5px ${color};box-shadow:0 0 10px ${color},0 0 5px ${color};opacity:1;-webkit-transform:rotate(3deg)translate(0px,-4px);-ms-transform:rotate(3deg)translate(0px,-4px);-moz-transform:rotate(3deg)translate(0px,-4px);-o-transform:rotate(3deg)translate(0px,-4px);transform:rotate(3deg)translate(0px,-4px)}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes nprogress-spinner{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes nprogress-spinner{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}`\n        }, void 0, false, void 0, this);\n    }\n    componentDidMount() {\n        const { options  } = this.props;\n        if (options) {\n            nprogress__WEBPACK_IMPORTED_MODULE_3___default().configure(options);\n        }\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on(\"routeChangeStart\", this.routeChangeStart);\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on(\"routeChangeComplete\", this.routeChangeEnd);\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on(\"routeChangeError\", this.routeChangeEnd);\n    }\n}\nNextNProgress.propTypes = {\n    color: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n    startPosition: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),\n    stopDelayMs: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),\n    options: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextNProgress);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL05leHRQcm9ncmVzc0Jhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ1E7QUFDRDtBQUNFO0FBRW5DLGtEQUFrRCxHQUNsRCxNQUFNSSxzQkFBc0JKLHdEQUFlO0lBQ3pDLE9BQU9NLGVBQWU7UUFDcEJDLE9BQU87UUFDUEMsZUFBZTtRQUNmQyxhQUFhO1FBQ2JDLFFBQVE7SUFDVixFQUFFO0lBRUZDLFFBQVEsSUFBSSxDQUFDO0lBRWJDLG1CQUFtQixJQUFNO1FBQ3ZCWCxvREFBYSxDQUFDLElBQUksQ0FBQ2EsS0FBSyxDQUFDTixhQUFhO1FBQ3RDUCxzREFBZTtJQUNqQixFQUFFO0lBRUZlLGlCQUFpQixJQUFNO1FBQ3JCQyxhQUFhLElBQUksQ0FBQ04sS0FBSztRQUN2QixJQUFJLENBQUNBLEtBQUssR0FBR08sV0FBVyxJQUFNO1lBQzVCakIscURBQWMsQ0FBQyxJQUFJO1FBQ3JCLEdBQUcsSUFBSSxDQUFDYSxLQUFLLENBQUNMLFdBQVc7SUFDM0IsRUFBRTtJQUVGVyxTQUFTO1FBQ1AsTUFBTSxFQUFFYixNQUFLLEVBQUVHLE9BQU0sRUFBRSxHQUFHLElBQUksQ0FBQ0ksS0FBSztRQUVwQyxPQUFPLDhEQUFDOzs7Z0JBTVlQO2dCQU1KRztnQkFRYUg7Z0JBQWtCQTs7bUZBZDNCQSxvRUFNSkcsMEhBUWFILGlCQUFrQkEsa0NBQWxCQSxpQkFBa0JBLDZCQUFsQkEsaUJBQWtCQTs7SUErQmpEO0lBRUFjLG9CQUFvQjtRQUNsQixNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHLElBQUksQ0FBQ1IsS0FBSztRQUU5QixJQUFJUSxTQUFTO1lBQ1hyQiwwREFBbUIsQ0FBQ3FCO1FBQ3RCLENBQUM7UUFFRHBCLDREQUFnQixDQUFDLG9CQUFvQixJQUFJLENBQUNVLGdCQUFnQjtRQUMxRFYsNERBQWdCLENBQUMsdUJBQXVCLElBQUksQ0FBQ2MsY0FBYztRQUMzRGQsNERBQWdCLENBQUMsb0JBQW9CLElBQUksQ0FBQ2MsY0FBYztJQUMxRDtBQUNGO0FBRUFaLGNBQWNzQixTQUFTLEdBQUc7SUFDeEJuQixPQUFPSiwwREFBZ0I7SUFDdkJLLGVBQWVMLDBEQUFnQjtJQUMvQk0sYUFBYU4sMERBQWdCO0lBQzdCbUIsU0FBU25CLDBEQUFnQjtBQUMzQjtBQUVBLGlFQUFlQyxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2xpYi9OZXh0UHJvZ3Jlc3NCYXIuanM/YWZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb24gKi9cbmNsYXNzIE5leHROUHJvZ3Jlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAnIzE3NjlCQicsXG4gICAgc3RhcnRQb3NpdGlvbjogMC4zLFxuICAgIHN0b3BEZWxheU1zOiAyMDAsXG4gICAgaGVpZ2h0OiA0LFxuICB9O1xuXG4gIHRpbWVyID0gbnVsbDtcblxuICByb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xuICAgIE5Qcm9ncmVzcy5zZXQodGhpcy5wcm9wcy5zdGFydFBvc2l0aW9uKTtcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgfTtcblxuICByb3V0ZUNoYW5nZUVuZCA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgTlByb2dyZXNzLmRvbmUodHJ1ZSk7XG4gICAgfSwgdGhpcy5wcm9wcy5zdG9wRGVsYXlNcyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sb3IsIGhlaWdodCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAjbnByb2dyZXNzIC5iYXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3J9O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAxMDMxO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XG4gICAgICAgIH1cbiAgICAgICAgI25wcm9ncmVzcyAucGVnIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICR7Y29sb3J9LCAwIDAgNXB4ICR7Y29sb3J9O1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICAgIH1cbiAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50IHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcbiAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCB0aGlzLnJvdXRlQ2hhbmdlU3RhcnQpO1xuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCB0aGlzLnJvdXRlQ2hhbmdlRW5kKTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgdGhpcy5yb3V0ZUNoYW5nZUVuZCk7XG4gIH1cbn1cblxuTmV4dE5Qcm9ncmVzcy5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdGFydFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdG9wRGVsYXlNczogUHJvcFR5cGVzLm51bWJlcixcbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHROUHJvZ3Jlc3M7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTlByb2dyZXNzIiwiUm91dGVyIiwiUHJvcFR5cGVzIiwiTmV4dE5Qcm9ncmVzcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImNvbG9yIiwic3RhcnRQb3NpdGlvbiIsInN0b3BEZWxheU1zIiwiaGVpZ2h0IiwidGltZXIiLCJyb3V0ZUNoYW5nZVN0YXJ0Iiwic2V0IiwicHJvcHMiLCJzdGFydCIsInJvdXRlQ2hhbmdlRW5kIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImRvbmUiLCJyZW5kZXIiLCJjb21wb25lbnREaWRNb3VudCIsIm9wdGlvbnMiLCJjb25maWd1cmUiLCJldmVudHMiLCJvbiIsInByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/NextProgressBar.js\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tailwind.css */ \"./src/styles/tailwind.css\");\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_NextProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/lib/NextProgressBar */ \"./src/lib/NextProgressBar.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_NextProgressBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/_app.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/_app.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNDO0FBQ2M7QUFFN0MsU0FBU0MsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLHFCQUNFOzswQkFDRSw4REFBQ0gsNERBQVNBOzs7OzswQkFDViw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9fYXBwLmpzeD80Yzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICd+L2xpYi9OZXh0UHJvZ3Jlc3NCYXInXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TlByb2dyZXNzIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcblxuIl0sIm5hbWVzIjpbIk5Qcm9ncmVzcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/tailwind.css":
/*!*********************************!*\
  !*** ./src/styles/tailwind.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();