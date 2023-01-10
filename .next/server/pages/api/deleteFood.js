"use strict";
(() => {
var exports = {};
exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 4511:
/***/ ((module) => {

module.exports = require("next-iron-session");

/***/ }),

/***/ 315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(3524);
// EXTERNAL MODULE: external "next-iron-session"
var external_next_iron_session_ = __webpack_require__(4511);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/pages/api/deleteFood.js

const prisma = new client_.PrismaClient();


async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body;
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log("body: ", body);
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    const user = await prisma.user.findUnique({
        where: {
            username: body.first
        }
    });
    if (!user) {
        return "User does not exist";
    }
    async function handleLogout() {
        await fetch("/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        router.push("/login");
    }
    const result = await prisma.user.delete({
        where: {
            username: body.first
        }
    });
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({
        data: `${body.first} ${body.last}`
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(315));
module.exports = __webpack_exports__;

})();