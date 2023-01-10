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
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/signup.js":
/*!*********************************!*\
  !*** ./src/pages/api/signup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { avatar , name , username , birthday , password: rawPassword  } = JSON.parse(req.body);\n    const filename = `profile-${username}.jpg`;\n    // Save the image to the project directory\n    // Update the user's profile picture in the database\n    const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().genSalt();\n    const password = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(rawPassword, salt);\n    const signup = await prisma.user.create({\n        data: {\n            avatar,\n            name,\n            username,\n            birthday,\n            password\n        }\n    });\n    res.json(signup);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDZ0I7QUFDckI7QUFDSjtBQUVwQixNQUFNSSxTQUFTLElBQUlILHdEQUFZQTtBQUUvQixpRUFBZSxPQUFPSSxLQUFLQyxNQUFRO0lBRWpDLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFQyxVQUFVQyxZQUFXLEVBQUUsR0FBR0MsS0FBS0MsS0FBSyxDQUFDVCxJQUFJVSxJQUFJO0lBQ3ZGLE1BQU1DLFdBQVcsQ0FBQyxRQUFRLEVBQUVQLFNBQVMsSUFBSSxDQUFDO0lBRTFDLDBDQUEwQztJQUUxQyxvREFBb0Q7SUFFcEQsTUFBTVEsT0FBTyxNQUFNakIsdURBQWM7SUFDakMsTUFBTVcsV0FBVyxNQUFNWCxvREFBVyxDQUFDWSxhQUFhSztJQUVoRCxNQUFNRyxTQUFTLE1BQU1oQixPQUFPaUIsSUFBSSxDQUFDQyxNQUFNLENBQUM7UUFDdENDLE1BQU07WUFDSmhCO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7SUFDRjtJQUNBTCxJQUFJa0IsSUFBSSxDQUFDSjtBQUNYLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL3NpZ251cC5qcz8wYTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG4gIGNvbnN0IHsgYXZhdGFyLCBuYW1lLCB1c2VybmFtZSwgYmlydGhkYXksIHBhc3N3b3JkOiByYXdQYXNzd29yZCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSlcbiAgY29uc3QgZmlsZW5hbWUgPSBgcHJvZmlsZS0ke3VzZXJuYW1lfS5qcGdgO1xuXG4gIC8vIFNhdmUgdGhlIGltYWdlIHRvIHRoZSBwcm9qZWN0IGRpcmVjdG9yeVxuIFxuICAvLyBVcGRhdGUgdGhlIHVzZXIncyBwcm9maWxlIHBpY3R1cmUgaW4gdGhlIGRhdGFiYXNlXG5cbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KClcbiAgY29uc3QgcGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChyYXdQYXNzd29yZCwgc2FsdClcblxuICBjb25zdCBzaWdudXAgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIGF2YXRhcixcbiAgICAgIG5hbWUsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGJpcnRoZGF5LFxuICAgICAgcGFzc3dvcmRcbiAgICB9XG4gIH0pXG4gIHJlcy5qc29uKHNpZ251cCkgXG59Il0sIm5hbWVzIjpbImJjcnlwdCIsIlByaXNtYUNsaWVudCIsInBhdGgiLCJmcyIsInByaXNtYSIsInJlcSIsInJlcyIsImF2YXRhciIsIm5hbWUiLCJ1c2VybmFtZSIsImJpcnRoZGF5IiwicGFzc3dvcmQiLCJyYXdQYXNzd29yZCIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJmaWxlbmFtZSIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsInNpZ251cCIsInVzZXIiLCJjcmVhdGUiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/signup.js"));
module.exports = __webpack_exports__;

})();