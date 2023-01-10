"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 9327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ signup)
});

// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(3524);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
;// CONCATENATED MODULE: ./src/pages/api/signup.js




const prisma = new client_.PrismaClient();
/* harmony default export */ const signup = (async (req, res)=>{
    const { avatar , name , username , birthday , password: rawPassword  } = JSON.parse(req.body);
    const filename = `profile-${username}.jpg`;
    // Save the image to the project directory
    // Update the user's profile picture in the database
    const salt = await external_bcryptjs_default().genSalt();
    const password = await external_bcryptjs_default().hash(rawPassword, salt);
    const signup = await prisma.user.create({
        data: {
            avatar,
            name,
            username,
            birthday,
            password
        }
    });
    res.json(signup);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9327));
module.exports = __webpack_exports__;

})();