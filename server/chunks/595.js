"use strict";
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/pages/AboutSection.tsx + 4 modules
var AboutSection = __webpack_require__(448);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/pages/ExperienceSection.tsx + 1 modules
var ExperienceSection = __webpack_require__(711);
// EXTERNAL MODULE: ./src/components/mComponents/MTypography.tsx
var MTypography = __webpack_require__(721);
;// CONCATENATED MODULE: ./src/components/mComponents/MTopNav.tsx


function MTopNav({ children , label  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex justify-between p-2 bg-bg-primary shadow-lg mb-4 sticky top-0 z-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                type: "title",
                text: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center gap-3",
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/mComponents/MIcon.tsx
var MIcon = __webpack_require__(785);
;// CONCATENATED MODULE: ./src/components/mComponents/MButton.tsx


function MButton({ variant , label , icon , onClick  }) {
    const cnExtension = variant == "primary" ? "transition ease-in-out delay-150 bg-primary text-secondary hover:bg-primaryhighlight" : "bg-secondary border-2 ";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `px-4 py-2 rounded-lg cursor-pointer shadow-md flex flex-row ${cnExtension}`,
        onClick: onClick,
        children: [
            label && /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: label
            }),
            icon && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(MIcon/* default */.Z, {
                    type: icon,
                    variant: variant == "primary" ? "secondary" : "primary"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/types.ts
var types = __webpack_require__(52);
;// CONCATENATED MODULE: ./src/pages/MainPage.tsx







function MainPage() {
    const [tab, setTab] = (0,external_react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MTopNav, {
                label: "portfolio",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MButton, {
                        variant: "primary",
                        onClick: ()=>setTab(0),
                        icon: types/* iconType.profile */.G.profile
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MButton, {
                        variant: "primary",
                        onClick: ()=>setTab(1),
                        icon: types/* iconType.experience */.G.experience
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MButton, {
                        variant: "primary",
                        onClick: ()=>setTab(2),
                        icon: types/* iconType.contact */.G.contact
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center p-2 h-full",
                children: [
                    tab == 0 && /*#__PURE__*/ jsx_runtime_.jsx(AboutSection["default"], {}),
                    tab == 1 && /*#__PURE__*/ jsx_runtime_.jsx(ExperienceSection["default"], {})
                ]
            })
        ]
    });
}


/***/ })

};
;