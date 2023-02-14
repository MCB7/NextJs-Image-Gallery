"use strict";
exports.id = 462;
exports.ids = [462];
exports.modules = {

/***/ 462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(504);
/* harmony import */ var _styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(704);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_2__);





const Menu = ({ menuToggle  })=>{
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(menuToggle);
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(menuToggle);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setToggle(menuToggle);
        setIsActive(toggle);
        setIsActive(true);
    }, [
        menuToggle,
        toggle
    ]);
    const [email_, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const email = document.querySelector(".email");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [
        email_
    ]);
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("");
    let mail = email_;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setEmail((email_)=>email_);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(email_);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        emailRef.current = mail;
    }, [
        mail
    ]);
    const email__ = emailRef.current; // corresponding DOM node
    const [checking, setChecking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { executeRecaptcha  } = (0,react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_2__.useGoogleReCaptcha)();
    const handleSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.preventDefault();
        if (!executeRecaptcha) {
            console.log("Execute recaptcha not yet available");
            return;
        }
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken)=>{
            console.log(gReCaptchaToken, "response Google reCaptcha server");
            submitEnquiryForm(gReCaptchaToken);
            setChecking(true);
        });
    }, [
        executeRecaptcha
    ]);
    const submitEnquiryForm = (gReCaptchaToken)=>{
        const name = document.querySelector(".name");
        const email = document.querySelector(".email");
        const message = document.querySelector(".message");
        const submit = document.querySelector(`.${(_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sendbutton)}`);
        const contactForm = document.querySelector(`.${(_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ContactForm)}`);
        submit.addEventListener("click", (e)=>{
            e.preventDefault();
            fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name.value,
                    email: emailRef.current,
                    message: message.value,
                    gRecaptchaToken: gReCaptchaToken
                })
            }).then((res)=>res.json()).then((res)=>{
                console.log(res, "response from backend");
                if (res?.status === "success") {
                    setNotification(res?.message);
                    contactForm.reset();
                    console.log("message sent ");
                    setChecking(false);
                } else {
                    setNotification(res?.message);
                }
            });
        });
    };
    const funkychicken = ()=>{
        return null;
    };
    const [contactActive, setContactActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isActive);
    const handleContactClose = (event)=>{
        // 👇️ toggle isActive state on click
        setContactActive((current)=>!current);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: contactActive ? (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ContactSection) : (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ContactSectionHIDE),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ContactFlexContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: `${(_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ContactForm)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                onClick: handleContactClose,
                                className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ContactClose)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inputflex),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "name",
                                        type: "text",
                                        name: "user_name",
                                        placeholder: "Name*",
                                        required: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "email",
                                        onChange: (e)=>setEmail(e?.target?.value),
                                        ref: emailRef,
                                        type: "email",
                                        name: "user_email",
                                        placeholder: "E-mail*",
                                        required: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        className: "message",
                                        name: "message",
                                        placeholder: "Questions",
                                        required: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        value: "send",
                                        className: `${(_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sendbutton)}`,
                                        onClick: submitEnquiryForm,
                                        children: "Send"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().CheckMarkVerify),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "checkbox",
                                                onChange: funkychicken,
                                                checked: checking,
                                                className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkbox),
                                                onClick: handleSubmitForm,
                                                required: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().verify),
                                                children: "Verify"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    notification && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ContactInfo),
                        children: notification
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ })

};
;