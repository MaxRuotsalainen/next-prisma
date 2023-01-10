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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("next-iron-session");

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function handler(req, res) {\n    // get user from prisma\n    const findUser = await prisma.user.findMany({\n        where: {\n            username: req.body.username\n        },\n        select: {\n            id: true,\n            username: true\n        }\n    });\n    const getId = findUser[0].id;\n    const getUsername = findUser[0].username;\n    // get user from database then:\n    req.session.set(\"user\", {\n        id: getId,\n        username: getUsername,\n        admin: true\n    });\n    await req.session.save();\n    res.send(\"Logged in\");\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {\n    password: \"complex_password_at_least_32_characters_long\",\n    cookieName: \"myapp_cookiename\",\n    // if your localhost is served on http:// then disable the secure flag\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBQ1A7QUFFN0MsTUFBTUUsU0FBUyxJQUFJRCx3REFBWUE7QUFFL0IsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFL0IsdUJBQXVCO0lBQ3ZCLE1BQU1DLFdBQVcsTUFBTUosT0FBT0ssSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFDMUNDLE9BQU87WUFDTEMsVUFBVU4sSUFBSU8sSUFBSSxDQUFDRCxRQUFRO1FBQzdCO1FBQ0FFLFFBQVE7WUFDTkMsSUFBSSxJQUFJO1lBQ1JILFVBQVUsSUFBSTtRQUNoQjtJQUNGO0lBRUEsTUFBTUksUUFBUVIsUUFBUSxDQUFDLEVBQUUsQ0FBQ08sRUFBRTtJQUM1QixNQUFNRSxjQUFjVCxRQUFRLENBQUMsRUFBRSxDQUFDSSxRQUFRO0lBRXhDLCtCQUErQjtJQUMvQk4sSUFBSVksT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUTtRQUN0QkosSUFBSUM7UUFDSkosVUFBVUs7UUFDVkcsT0FBTyxJQUFJO0lBQ2I7SUFDQSxNQUFNZCxJQUFJWSxPQUFPLENBQUNHLElBQUk7SUFDdEJkLElBQUllLElBQUksQ0FBQztBQUNYO0FBRUEsaUVBQWVwQixrRUFBZUEsQ0FBQ0csU0FBUztJQUN0Q2tCLFVBQVU7SUFDVkMsWUFBWTtJQUNaLHNFQUFzRTtJQUN0RUMsZUFBZTtRQUNiQyxRQUFRQyxrQkFBeUI7SUFDbkM7QUFDRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzP2VlZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uIH0gZnJvbSBcIm5leHQtaXJvbi1zZXNzaW9uXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblxuICAvLyBnZXQgdXNlciBmcm9tIHByaXNtYVxuICBjb25zdCBmaW5kVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcm5hbWU6IHJlcS5ib2R5LnVzZXJuYW1lXG4gICAgfSxcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGlkOiB0cnVlLFxuICAgICAgdXNlcm5hbWU6IHRydWVcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgZ2V0SWQgPSBmaW5kVXNlclswXS5pZFxuICBjb25zdCBnZXRVc2VybmFtZSA9IGZpbmRVc2VyWzBdLnVzZXJuYW1lXG5cbiAgLy8gZ2V0IHVzZXIgZnJvbSBkYXRhYmFzZSB0aGVuOlxuICByZXEuc2Vzc2lvbi5zZXQoXCJ1c2VyXCIsIHtcbiAgICBpZDogZ2V0SWQsXG4gICAgdXNlcm5hbWU6IGdldFVzZXJuYW1lLFxuICAgIGFkbWluOiB0cnVlXG4gIH0pO1xuICBhd2FpdCByZXEuc2Vzc2lvbi5zYXZlKCk7XG4gIHJlcy5zZW5kKFwiTG9nZ2VkIGluXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoSXJvblNlc3Npb24oaGFuZGxlciwge1xuICBwYXNzd29yZDogXCJjb21wbGV4X3Bhc3N3b3JkX2F0X2xlYXN0XzMyX2NoYXJhY3RlcnNfbG9uZ1wiLFxuICBjb29raWVOYW1lOiBcIm15YXBwX2Nvb2tpZW5hbWVcIixcbiAgLy8gaWYgeW91ciBsb2NhbGhvc3QgaXMgc2VydmVkIG9uIGh0dHA6Ly8gdGhlbiBkaXNhYmxlIHRoZSBzZWN1cmUgZmxhZ1xuICBjb29raWVPcHRpb25zOiB7XG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59KTsiXSwibmFtZXMiOlsid2l0aElyb25TZXNzaW9uIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbmRVc2VyIiwidXNlciIsImZpbmRNYW55Iiwid2hlcmUiLCJ1c2VybmFtZSIsImJvZHkiLCJzZWxlY3QiLCJpZCIsImdldElkIiwiZ2V0VXNlcm5hbWUiLCJzZXNzaW9uIiwic2V0IiwiYWRtaW4iLCJzYXZlIiwic2VuZCIsInBhc3N3b3JkIiwiY29va2llTmFtZSIsImNvb2tpZU9wdGlvbnMiLCJzZWN1cmUiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/login.js"));
module.exports = __webpack_exports__;

})();