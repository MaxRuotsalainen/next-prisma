"use strict";
(() => {
var exports = {};
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 1738:
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 3293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1738);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_2__]);
([next_connect__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



let filename = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)() + "-" + new Date().getTime();
const upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({
    storage: multer__WEBPACK_IMPORTED_MODULE_1___default().diskStorage({
        destination: "../public",
        filename: (req, file, cb)=>cb(null, getFileName(file))
    })
});
const getFileName = (file)=>{
    filename += "." + file.originalname.substring(file.originalname.lastIndexOf(".") + 1, file.originalname.length);
    return filename;
};
const apiRoute = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onError (error, req, res) {
        res.status(501).json({
            error: `Sorry something Happened! ${error.message}`
        });
    },
    onNoMatch (req, res) {
        res.status(405).json({
            error: `Method '${req.method}' Not Allowed`
        });
    }
});
apiRoute.use(upload.array("file")); // attribute name you are sending the file by 
apiRoute.post((req, res)=>{
    res.status(200).json({
        data: `../public/${filename}`
    }); // response
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiRoute);
const config = {
    api: {
        bodyParser: false
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3293));
module.exports = __webpack_exports__;

})();