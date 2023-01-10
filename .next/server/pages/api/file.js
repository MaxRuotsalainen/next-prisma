"use strict";
(() => {
var exports = {};
exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 4439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ file)
});

;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
var external_formidable_default = /*#__PURE__*/__webpack_require__.n(external_formidable_namespaceObject);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
;// CONCATENATED MODULE: ./src/pages/api/file.js


const config = {
    api: {
        bodyParser: false
    }
};
const post = async (req, res)=>{
    const form = new (external_formidable_default()).IncomingForm();
    form.parse(req, async function(err, fields, files) {
        await saveFile(files.file);
        return res.status(201).send("");
    });
};
const saveFile = async (file)=>{
    const data = external_fs_default().readFileSync(file.path);
    external_fs_default().writeFileSync(`../public/${file.name}`, data);
    await external_fs_default().unlinkSync(file.path);
    return;
};
/* harmony default export */ const file = ((req, res)=>{
    req.method === "POST" ? post(req, res) : req.method === "PUT" ? console.log("PUT") : req.method === "DELETE" ? console.log("DELETE") : req.method === "GET" ? console.log("GET") : res.status(404).send("");
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4439));
module.exports = __webpack_exports__;

})();