"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/deleteacc",{

/***/ "./src/pages/deleteacc.jsx":
/*!*********************************!*\
  !*** ./src/pages/deleteacc.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { account  } = param;\n    _s();\n    console.log(account.username);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const deletePost = async (postId)=>{\n        try {\n            setLoading(true);\n            await fetch(\"/api/delete\", {\n                method: \"DELETE\",\n                body: JSON.stringify({\n                    postId\n                })\n            });\n            setLoading(false);\n            await router.push(\"/\");\n        } catch (error) {\n            console.log(\"error\", error);\n            setLoading(false);\n        }\n    };\n    async function handleLogout() {\n        await fetch(\"/api/logout\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        router.push(\"/login\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/deleteacc.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/deleteacc.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/deleteacc.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css\",\n                        rel: \"stylesheet\",\n                        integrity: \"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/deleteacc.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/deleteacc.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: \"/api/form\",\n                method: \"post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"first\",\n                        children: \"Username\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/deleteacc.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"first\",\n                        name: \"first\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/deleteacc.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submt\",\n                        className: \"w-full px-5 py-3 border border-yellow-300 focus:outline-none\",\n                        onClick: handleLogout,\n                        children: \"Delete acc\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/deleteacc.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/deleteacc.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/deleteacc.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"wyLmrtRC2OKK6TwrXwYEMKxQaAo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGVsZXRlYWNjLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFFVztBQUNFO0FBQ2I7QUFDb0I7QUFFaEI7QUFDRDs7QUFJakIsU0FBU1EsS0FBSyxLQUFXLEVBQUU7UUFBYixFQUFFQyxRQUFPLEVBQUUsR0FBWDs7SUFFN0JDLFFBQVFDLEdBQUcsQ0FBQ0YsUUFBUUcsUUFBUTtJQUMxQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNUyxTQUFTZCxzREFBU0E7SUFFeEIsTUFBTWUsYUFBYSxPQUFNQyxTQUFVO1FBQ2pDLElBQUk7WUFDRkgsV0FBVyxJQUFJO1lBQ2YsTUFBTUksTUFBTSxlQUFjO2dCQUN4QkMsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFTDtnQkFBTztZQUNoQztZQUVBSCxXQUFXLEtBQUs7WUFDaEIsTUFBTUMsT0FBT1EsSUFBSSxDQUFDO1FBQ3BCLEVBQUUsT0FBT0MsT0FBTztZQUNkZCxRQUFRQyxHQUFHLENBQUMsU0FBU2E7WUFDckJWLFdBQVcsS0FBSztRQUNsQjtJQUVGO0lBRUEsZUFBZVcsZUFBZTtRQUM1QixNQUFNUCxNQUFNLGVBQWU7WUFDekJDLFFBQVE7WUFDUk8sU0FBVTtnQkFDUixnQkFBZ0I7WUFDbEI7UUFDRjtRQUNBWCxPQUFPUSxJQUFJLENBQUM7SUFDZDtJQUdBLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUMzQixrREFBSUE7O2tDQUNILDhEQUFDNEI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7a0NBQ3RCLDhEQUFDRjt3QkFBS0UsTUFBSzt3QkFBaUZELEtBQUk7d0JBQWFFLFdBQVU7d0JBQTBFQyxhQUFZOzs7Ozs7Ozs7Ozs7MEJBSS9NLDhEQUFDQztnQkFBS0MsUUFBTztnQkFBWW5CLFFBQU87O2tDQUNwQyw4REFBQ29CO3dCQUFNQyxLQUFJO2tDQUFROzs7Ozs7a0NBQ25CLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsSUFBRzt3QkFBUWIsTUFBSzs7Ozs7O2tDQUNuQyw4REFBQ2M7d0JBQU9GLE1BQUs7d0JBQVFHLFdBQVU7d0JBQStEQyxTQUFTckI7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2SCxDQUFDO0dBcER1QmpCOztRQUlQUCxrREFBU0E7OztLQUpGTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGVsZXRlYWNjLmpzeD84OGI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB3aXRoU2Vzc2lvbiBmcm9tIFwifi9saWIvU2Vzc2lvblwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyBcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFjY291bnQgfSkge1xuXG5jb25zb2xlLmxvZyhhY2NvdW50LnVzZXJuYW1lKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBcbiAgY29uc3QgZGVsZXRlUG9zdCA9IGFzeW5jIHBvc3RJZCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBhd2FpdCBmZXRjaCgnL2FwaS9kZWxldGUnLHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBvc3RJZCB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgfVxuIFxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVMb2dvdXQoKSB7XG4gICAgYXdhaXQgZmV0Y2goJy9hcGkvbG9nb3V0Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzIDogeyBcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH1cbiAgICB9KVxuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4zLjAtYWxwaGExL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC1HTGhsVFE4aVJBQmRaTGw2TzNvVk1XU2t0UU9wNmI3SW4xWmwzL0pyNTliNkVHR29JMWFGa3c3Y21EQTZqNmdEXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICBcbiBcbiAgICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgPGxhYmVsIGZvcj1cImZpcnN0XCI+VXNlcm5hbWU8L2xhYmVsPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZpcnN0XCIgbmFtZT1cImZpcnN0XCIgLz5cbiAgPGJ1dHRvbiB0eXBlPVwic3VibXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNSBweS0zIGJvcmRlciBib3JkZXIteWVsbG93LTMwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkRlbGV0ZSBhY2M8L2J1dHRvbj5cbiAgXG48L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aFNlc3Npb24oYXN5bmMgZnVuY3Rpb24gKHsgcmVxLCByZXMgfSkge1xuICAvL2NoZWNrIHRoZSB1c2VyIHNlc3Npb25cbiAgXG4gIGNvbnN0IHVzZXIgPSByZXEuc2Vzc2lvbi5nZXQoJ3VzZXInKVxuICBjb25zb2xlLmxvZyh1c2VyLnVzZXJuYW1lKVxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9XG4gIH1cbi8vdXBkYXRlIHBhc3N3b3JkXG4gXG5cblxuICAvL2dldCB0aGUgdXNlciBmcm9tIHRoZSBkYXRhYmFzZVxuICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcm5hbWU6IHJlcS5zZXNzaW9uLmdldCgndXNlcicpLnVzZXJuYW1lXG4gICAgfVxuICB9KVxuXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWNjb3VudFxuICAgIH1cbiAgfVxufSkiXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJMaW5rIiwidG9hc3QiLCJUb2FzdGVyIiwidXNlU3RhdGUiLCJTY3JpcHQiLCJIb21lIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VybmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiZGVsZXRlUG9zdCIsInBvc3RJZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiZXJyb3IiLCJoYW5kbGVMb2dvdXQiLCJoZWFkZXJzIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImludGVncml0eSIsImNyb3Nzb3JpZ2luIiwiZm9ybSIsImFjdGlvbiIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/deleteacc.jsx\n"));

/***/ })

});