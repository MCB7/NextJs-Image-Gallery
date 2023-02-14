"use strict";
exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 385:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);




const Menu = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>__webpack_require__.e(/* import() */ 462).then(__webpack_require__.bind(__webpack_require__, 462)));
const Modal = ({ imageToggle , selectedImg , selectedTitle , selectedDate , selectedMedium , selectedSize , selectedPrice , modalID  })=>{
    const [IMGsrc, setIMGsrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [medium, setMedium] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imageToggle);
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imageToggle);
    const [ID, setID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIMGsrc(selectedImg);
        setTitle(selectedTitle);
        setDate(selectedDate);
        setMedium(selectedMedium);
        setSize(selectedSize);
        setPrice(selectedPrice);
        setToggle(imageToggle);
        setIsActive(true);
        setID(modalID);
    }, [
        imageToggle,
        modalID,
        selectedImg,
        IMGsrc,
        toggle
    ]);
    const handleClick = (event)=>{
        // 👇️ toggle isActive state on click
        setIsActive((current)=>!current);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    });
    const Enlarge = (event)=>{
        window.open(selectedImg);
    };
    const [menuToggle, setMenuToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [
        menuToggle,
        menuOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: isActive ? (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().IMGOverlayContainer) : (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().IMGOverlayContainerHIDE),
        id: "1",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().child),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().overlayCloseBackground),
                        onClick: ()=>{
                            handleClick();
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: selectedImg,
                        className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().overlay_image_container),
                        "data-src": selectedImg,
                        alt: "Modal Image",
                        width: 304,
                        height: 204,
                        priority: true,
                        unoptimized: true,
                        onClick: ()=>{
                            handleClick();
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().child),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().IMGInfoOverlay),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                children: [
                                    '"',
                                    title,
                                    '"'
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().date),
                            children: date
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().medium),
                            children: medium
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().size),
                            children: [
                                size,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().price),
                            children: price
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().child),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inquire),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().InquireButton),
                                        onClick: ()=>{
                                            Enlarge();
                                        },
                                        children: "Enlarge"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inquire),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_styles_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().InquireButton),
                                        onClick: ()=>{
                                            setTimeout(()=>{
                                                if (menuOpen == true) {
                                                    setMenuToggle(false);
                                                } else if (menuOpen == false) {
                                                    setMenuToggle(true);
                                                }
                                            }, 500);
                                            setMenuToggle((menuOpen)=>!menuOpen);
                                        },
                                        children: "Inquire"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "Loading..."
                }),
                children: menuToggle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Menu, {
                    menuToggle: menuToggle
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ })

};
;