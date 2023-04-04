"use strict";
exports.id = 711;
exports.ids = [711];
exports.modules = {

/***/ 711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ExperienceSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/mComponents/MTypography.tsx
var MTypography = __webpack_require__(721);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/types.ts
var types = __webpack_require__(52);
// EXTERNAL MODULE: ./src/components/mComponents/MIcon.tsx
var MIcon = __webpack_require__(785);
;// CONCATENATED MODULE: ./src/components/mComponents/MAccordion.tsx





function MAccordion({ label , expanded =false , children  }) {
    const [isExpanded, setIsExpanded] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setIsExpanded(expanded);
    }, [
        expanded
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " bg-secondary w-full rounded-lg shadow-2xl  ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` bg-bg-primary rounded-t-lg w-full flex flex-row justify-between cursor-pointer p-2 ${!isExpanded && "rounded-lg"}`,
                onClick: ()=>setIsExpanded(!isExpanded),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                        type: "subtitle",
                        text: label ?? ""
                    }),
                    isExpanded ? /*#__PURE__*/ jsx_runtime_.jsx(MIcon/* default */.Z, {
                        type: types/* iconType.up */.G.up,
                        variant: "secondary"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(MIcon/* default */.Z, {
                        type: types/* iconType.down */.G.down,
                        variant: "secondary"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `px-2 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${isExpanded ? " max-h-[1000px]" : "max-h-0"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " p-4 flex flex-col gap-2",
                    children: children
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/ExperienceSection.tsx



function ExperienceSection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " max-w-md w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                type: "title",
                text: "experience",
                variant: "secondary"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-2 gap-4 flex flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MAccordion, {
                        label: "education",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "caption",
                                                text: "2017"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "caption",
                                                text: "2020"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: " border-primary border-l-2 ml-2 pl-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "text",
                                                text: "University of Agder"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "caption",
                                                text: "Bachelor Degree Computer Engineering"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row mt-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "caption",
                                                text: "2020"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "caption",
                                                text: "2022"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: " border-primary border-l-2 ml-2 pl-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "text",
                                                text: "University of Agder"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "caption",
                                                text: "Masters Degree in Artificial Intelligence"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MAccordion, {
                        label: "job experience",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: " w-full bg-bg-white rounded-md flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-1/3 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80')] bg-no-repeat bg-cover rounded-l-md p-2 justify-center"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-2/3 p-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "subtitle",
                                                variant: "primary",
                                                text: "Bitmesh AS"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "text",
                                                text: "Bitmesh provides a collection of services, enabling rapid IoT application development."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: " w-full bg-bg-white rounded-md flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-1/3 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80')] bg-no-repeat bg-cover rounded-l-md p-2 justify-center"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-2/3 p-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "subtitle",
                                                variant: "primary",
                                                text: "Capgemini"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "text",
                                                text: "Capgemini is a multinational information technology (IT) services and consulting company."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MAccordion, {
                        label: "projects",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: " w-full bg-bg-white rounded-md flex",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-1/2 p-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "subtitle",
                                                variant: "primary",
                                                text: "Min Side 2.0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "caption",
                                                text: "Nortura"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "text",
                                                text: "Min Side 2.0 is a large system for Norwegian farmers to aid in operation. I worked as a fullstack developer using React.JS and dotnet."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-1/2 bg-[url('../../public/illustrations/cows.jpg')] bg-no-repeat bg-cover rounded-r-md"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: " w-full bg-bg-white rounded-md flex",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-1/2 p-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "subtitle",
                                                variant: "primary",
                                                text: "Osterham"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "caption",
                                                text: "Viggoman Plays"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                                type: "text",
                                                text: "Osterham is a huge Minecraft project building a realistic medieval city"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-1/2 bg-[url('../../public/illustrations/Osterham.png')] bg-no-repeat bg-cover rounded-r-md"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MAccordion, {
                        label: "certifications"
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;