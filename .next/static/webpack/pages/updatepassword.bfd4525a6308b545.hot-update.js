"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/updatepassword",{

/***/ "./src/pages/updatepassword.jsx":
/*!**************************************!*\
  !*** ./src/pages/updatepassword.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { account  } = param;\n    _s();\n    console.log(account.username);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const deletePost = async (postId)=>{\n        try {\n            setLoading(true);\n            await fetch(\"/api/delete\", {\n                method: \"DELETE\",\n                body: JSON.stringify({\n                    postId\n                })\n            });\n            setLoading(false);\n            await router.push(\"/\");\n        } catch (error) {\n            console.log(\"error\", error);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {\n                position: \"top-center\",\n                reverseOrder: true\n            }, void 0, false, {\n                fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"vh-100 gradient-custom\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"updateContainer justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row d-flex justify-content-center align-items-center h-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-12 col-md-8 col-lg-6 col-xl-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card bg-dark text-white wrapper\",\n                                style: {\n                                    marginRight: 1 + \"rem\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body p-5 text-center box\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-md-5 mt-md-4 pb-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            action: \"/api/update\",\n                                            method: \"post\",\n                                            className: \"flex flex-col w-full space-y-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"form-outline form-white mb-4\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            for: \"name\",\n                                                            className: \"form-label\",\n                                                            children: \"Username\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            className: \"form-control form-control-lg\",\n                                                            type: \"text\",\n                                                            name: \"username\",\n                                                            id: \"username\",\n                                                            placeholder: \"Username\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"form-outline form-white mb-4\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            for: \"name\",\n                                                            className: \"form-label\",\n                                                            children: \"Password\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            className: \"form-control form-control-lg\",\n                                                            type: \"password\",\n                                                            name: \"password\",\n                                                            id: \"password\",\n                                                            placeholder: \"Password\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submt\",\n                                                    className: \"w-full px-5 py-3 border border-300 focus:outline-none\",\n                                                    children: \"Logout\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 20\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: \"/api/update\",\n                method: \"post\"\n            }, void 0, false, {\n                fileName: \"/Users/max.ruotsalainen/Desktop/Nya projekt/Nexxtt copy 4/my-app/src/pages/updatepassword.jsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"wyLmrtRC2OKK6TwrXwYEMKxQaAo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXBkYXRlcGFzc3dvcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUVXO0FBQ0U7QUFDYjtBQUNvQjtBQUVoQjtBQUNEOztBQUtqQixTQUFTUSxLQUFLLEtBQVcsRUFBRTtRQUFiLEVBQUVDLFFBQU8sRUFBRSxHQUFYOztJQUU3QkMsUUFBUUMsR0FBRyxDQUFDRixRQUFRRyxRQUFRO0lBQzFCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU1TLFNBQVNkLHNEQUFTQTtJQUV4QixNQUFNZSxhQUFhLE9BQU1DLFNBQVU7UUFDakMsSUFBSTtZQUNGSCxXQUFXLElBQUk7WUFDZixNQUFNSSxNQUFNLGVBQWM7Z0JBQ3hCQyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVMO2dCQUFPO1lBQ2hDO1lBRUFILFdBQVcsS0FBSztZQUNoQixNQUFNQyxPQUFPUSxJQUFJLENBQUM7UUFDcEIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RkLFFBQVFDLEdBQUcsQ0FBQyxTQUFTYTtZQUNyQlYsV0FBVyxLQUFLO1FBQ2xCO0lBRUY7SUFJQSxxQkFDRTs7MEJBQ0UsOERBQUNkLGtEQUFJQTs7a0NBQ0gsOERBQUN5QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUMxQixvREFBT0E7Z0JBQUMyQixVQUFTO2dCQUFhQyxjQUFjLElBQUk7Ozs7OzswQkFDL0MsOERBQUNDO2dCQUFRQyxXQUFVOzBCQUNuQiw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBSUQsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQ0NELFdBQVU7Z0NBQ1ZFLE9BQU87b0NBQUVDLGFBQWEsSUFBSTtnQ0FBTTswQ0FFL0IsNEVBQUNGO29DQUFJRCxXQUFVOzhDQUVkLDRFQUFDQzt3Q0FBSUQsV0FBVTtrREFFYiw0RUFBQ0k7NENBQUtDLFFBQU87NENBQWNyQixRQUFPOzRDQUNoQ2dCLFdBQVU7OzhEQUdaLDhEQUFDQztvREFBSUQsV0FBVTs7c0VBQ2IsOERBQUNNOzREQUFNQyxLQUFJOzREQUFPUCxXQUFVO3NFQUFhOzs7Ozs7c0VBSXpDLDhEQUFDUTs0REFDQ1IsV0FBVTs0REFDUlMsTUFBSzs0REFDTGpCLE1BQUs7NERBQ0xrQixJQUFHOzREQUNIQyxhQUFZOzs7Ozs7Ozs7Ozs7OERBS2hCLDhEQUFDVjtvREFBSUQsV0FBVTs7c0VBQ2YsOERBQUNNOzREQUFNQyxLQUFJOzREQUFPUCxXQUFVO3NFQUFhOzs7Ozs7c0VBR3pDLDhEQUFDUTs0REFDQ1IsV0FBVTs0REFDUlMsTUFBSzs0REFDTGpCLE1BQUs7NERBQ0xrQixJQUFHOzREQUNIQyxhQUFZOzs7Ozs7Ozs7Ozs7OERBS2hCLDhEQUFDQztvREFBT0gsTUFBSztvREFBUVQsV0FBVTs4REFBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWF4Ryw4REFBQ0k7Z0JBQUtDLFFBQU87Z0JBQWNyQixRQUFPOzs7Ozs7OztBQU8xQyxDQUFDO0dBbkd1Qlg7O1FBSVBQLGtEQUFTQTs7O0tBSkZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy91cGRhdGVwYXNzd29yZC5qc3g/Y2EzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgd2l0aFNlc3Npb24gZnJvbSBcIn4vbGliL1Nlc3Npb25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgXG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFjY291bnQgfSkge1xuXG5jb25zb2xlLmxvZyhhY2NvdW50LnVzZXJuYW1lKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBcbiAgY29uc3QgZGVsZXRlUG9zdCA9IGFzeW5jIHBvc3RJZCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBhd2FpdCBmZXRjaCgnL2FwaS9kZWxldGUnLHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBvc3RJZCB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgfVxuIFxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICBcbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUb2FzdGVyIHBvc2l0aW9uPVwidG9wLWNlbnRlclwiIHJldmVyc2VPcmRlcj17dHJ1ZX0gLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmgtMTAwIGdyYWRpZW50LWN1c3RvbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwZGF0ZUNvbnRhaW5lciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTggY29sLWxnLTYgY29sLXhsLTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkIGJnLWRhcmsgdGV4dC13aGl0ZSB3cmFwcGVyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxICsgXCJyZW1cIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBwLTUgdGV4dC1jZW50ZXIgYm94XCI+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi1tZC01IG10LW1kLTQgcGItNVwiPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvdXBkYXRlXCIgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBzcGFjZS15LTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vdXRsaW5lIGZvcm0td2hpdGUgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vdXRsaW5lIGZvcm0td2hpdGUgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNSBweS0zIGJvcmRlciBib3JkZXItMzAwIGZvY3VzOm91dGxpbmUtbm9uZVwiID5Mb2dvdXQ8L2J1dHRvbj5cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICAgICAgXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvdXBkYXRlXCIgbWV0aG9kPVwicG9zdFwiPlxuXG4gXG4gIFxuPC9mb3JtPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhTZXNzaW9uKGFzeW5jIGZ1bmN0aW9uICh7IHJlcSwgcmVzIH0pIHtcbiAgLy9jaGVjayB0aGUgdXNlciBzZXNzaW9uXG4gIFxuICBjb25zdCB1c2VyID0gcmVxLnNlc3Npb24uZ2V0KCd1c2VyJylcbiAgY29uc29sZS5sb2codXNlci51c2VybmFtZSlcbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiAnL2xvZ2luJyxcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG4vL3VwZGF0ZSBwYXNzd29yZFxuIFxuXG5cbiAgLy9nZXQgdGhlIHVzZXIgZnJvbSB0aGUgZGF0YWJhc2VcbiAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJuYW1lOiByZXEuc2Vzc2lvbi5nZXQoJ3VzZXInKS51c2VybmFtZVxuICAgIH1cbiAgfSlcblxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFjY291bnRcbiAgICB9XG4gIH1cbn0pIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwiTGluayIsInRvYXN0IiwiVG9hc3RlciIsInVzZVN0YXRlIiwiU2NyaXB0IiwiSG9tZSIsImFjY291bnQiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImRlbGV0ZVBvc3QiLCJwb3N0SWQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImVycm9yIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInBvc2l0aW9uIiwicmV2ZXJzZU9yZGVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwibWFyZ2luUmlnaHQiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/updatepassword.jsx\n"));

/***/ })

});