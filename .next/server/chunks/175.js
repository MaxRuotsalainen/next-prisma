"use strict";
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 2175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ withSession)
/* harmony export */ });
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4511);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);
// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions

function withSession(handler) {
    return (0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {
        password: "complex_password_at_least_32_characters_long",
        cookieName: "myapp_cookiename",
        // if your localhost is served on http:// then disable the secure flag
        cookieOptions: {
            secure: "production" === "production"
        }
    });
}


/***/ })

};
;