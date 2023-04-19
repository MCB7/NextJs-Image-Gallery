"use strict";
(() => {
var exports = {};
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 401:
/***/ ((module) => {

module.exports = import("@firebase/firestore");;

/***/ }),

/***/ 290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);
_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const handler = (req, res)=>{
    if (req.method === "POST") {
        try {
            fetch("https://www.google.com/recaptcha/api/siteverify ", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `secret=6Lch41EkAAAAALLFtNwy0x5yb7p-02x5cDH8I8AC&response=${req.body.gRecaptchaToken}`
            }).then((reCaptchaRes)=>reCaptchaRes.json()).then((reCaptchaRes)=>{
                console.log(reCaptchaRes, "Response from Google reCatpcha verification API");
                if (reCaptchaRes?.score > 0.5 && req.body.email != null) {
                    // Save data to the database from here
                    const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();
                    const date = new Date();
                    const docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "email"), {
                        name: req.body.name,
                        email: req.body.email,
                        message: req.body.message,
                        date: date
                    });
                    res.status(200).json({
                        status: "success",
                        message: "Enquiry submitted successfully"
                    });
                } else {
                    res.status(200).json({
                        status: "failure",
                        message: "Google ReCaptcha Failure"
                    });
                }
            });
        } catch (err) {
            res.status(405).json({
                status: "failure",
                message: "Error submitting the enquiry form"
            });
        }
    } else {
        res.status(405);
        res.end();
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(290));
module.exports = __webpack_exports__;

})();