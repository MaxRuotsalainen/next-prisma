"use strict";
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
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("next-iron-session");

/***/ }),

/***/ "(api)/./src/pages/api/logout.js":
/*!*********************************!*\
  !*** ./src/pages/api/logout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res, session) {\n    req.session.destroy();\n    res.send(\"Logged out\");\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {\n    password: \"complex_password_at_least_32_characters_long\",\n    cookieName: \"myapp_cookiename\",\n    // if your localhost is served on http:// then disable the secure flag\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ291dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE9BQU8sRUFBRTtJQUNsQ0YsSUFBSUUsT0FBTyxDQUFDQyxPQUFPO0lBQ25CRixJQUFJRyxJQUFJLENBQUM7QUFDWDtBQUVBLGlFQUFlTixrRUFBZUEsQ0FBQ0MsU0FBUztJQUN0Q00sVUFBVTtJQUNWQyxZQUFZO0lBQ1osc0VBQXNFO0lBQ3RFQyxlQUFlO1FBQ2JDLFFBQVFDLGtCQUF5QjtJQUNuQztBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL2xvZ291dC5qcz84MjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWlyb24tc2Vzc2lvblwiXG5cbmZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMsIHNlc3Npb24pIHtcbiAgcmVxLnNlc3Npb24uZGVzdHJveSgpXG4gIHJlcy5zZW5kKFwiTG9nZ2VkIG91dFwiKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoSXJvblNlc3Npb24oaGFuZGxlciwge1xuICBwYXNzd29yZDogXCJjb21wbGV4X3Bhc3N3b3JkX2F0X2xlYXN0XzMyX2NoYXJhY3RlcnNfbG9uZ1wiLFxuICBjb29raWVOYW1lOiBcIm15YXBwX2Nvb2tpZW5hbWVcIixcbiAgLy8gaWYgeW91ciBsb2NhbGhvc3QgaXMgc2VydmVkIG9uIGh0dHA6Ly8gdGhlbiBkaXNhYmxlIHRoZSBzZWN1cmUgZmxhZ1xuICBjb29raWVPcHRpb25zOiB7XG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59KSJdLCJuYW1lcyI6WyJ3aXRoSXJvblNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsImRlc3Ryb3kiLCJzZW5kIiwicGFzc3dvcmQiLCJjb29raWVOYW1lIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/logout.js"));
module.exports = __webpack_exports__;

})();