"use strict";
(() => {
var exports = {};
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 5136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { PrismaClient  } = __webpack_require__(3524);
const prisma = new PrismaClient();
module.exports = async (req, res)=>{
    const accounts = await prisma.user.findMany();
    res.json(accounts);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5136));
module.exports = __webpack_exports__;

})();