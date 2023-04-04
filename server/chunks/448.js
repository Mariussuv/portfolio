"use strict";
exports.id = 448;
exports.ids = [448];
exports.modules = {

/***/ 448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AboutSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/mComponents/MTypography.tsx
var MTypography = __webpack_require__(721);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/pp.jpg
/* harmony default export */ const pp = ({"src":"/_next/static/media/pp.ec9920a2.jpg","height":2412,"width":2248,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAALQr/8QAHBAAAgICAwAAAAAAAAAAAAAAAgQBAxESAAVS/9oACAEBAAE/AGO8QSYFq/cV7QMAwOSOay0mdfMc/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Aj//EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAEDAQE/AFv/2Q==","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/utils/images.ts
const hobbyImages = ()=>{
    return [
        {
            name: "Gaming",
            url: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
        },
        {
            name: "Homebrewing",
            url: "https://images.unsplash.com/photo-1618584386532-f59df5adbbfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2325&q=80"
        },
        {
            name: "Workout",
            url: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        },
        {
            name: "Food",
            url: "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2640&q=80"
        }
    ];
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/custom/HobbyCard.tsx


function HobbyCard({ title , illustration  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " bg-secondary rounded-lg shadow-sm flex flex-col justify-between max-w-md",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: " h-40 w-full object-cover rounded-t-md",
                src: illustration
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "m-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                    type: "subtitle",
                    variant: "primary",
                    text: title
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/mComponents/MIcon.tsx
var MIcon = __webpack_require__(785);
// EXTERNAL MODULE: ./src/components/types.ts
var types = __webpack_require__(52);
;// CONCATENATED MODULE: ./src/components/custom/HobbySlider.tsx





function HobbySlider({ hobbies  }) {
    const [iterator, setIterator] = (0,external_react_.useState)(0);
    const handleClick = (click)=>{
        let temp = iterator + click;
        if (temp < 0) temp = hobbies.length - 1;
        if (temp > hobbies.length - 1) temp = 0;
        setIterator(temp);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HobbyCard, {
                title: hobbies[iterator].name,
                illustration: hobbies[iterator].url
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between absolute top-1/2 w-full p-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " rounded-full bg-bg-white",
                        onClick: ()=>handleClick(-1),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MIcon/* default */.Z, {
                            type: types/* iconType.left */.G.left,
                            variant: "primary"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " rounded-full bg-bg-white",
                        onClick: ()=>handleClick(1),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MIcon/* default */.Z, {
                            type: types/* iconType.right */.G.right
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/AboutSection.tsx






function AboutSection() {
    const hobbies = hobbyImages();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " relative max-w-md w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                type: "title",
                text: "about me",
                variant: "secondary"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " bg-secondary rounded-lg shadow-lg flex justify-between max-w-md p-4 bg-gradient-to-t from-secondary to-bg-white",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "p-2 w-1/2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                type: "subtitle",
                                text: "Marius Suvatne",
                                variant: "primary"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                type: "caption",
                                text: "Software Developer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                                type: "text",
                                text: "Marius is a software engineer working for Capgemini Norway. "
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " w-1/2 m-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: " rounded-full",
                            src: pp,
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " absolute w-full bottom-28",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MTypography/* default */.Z, {
                        type: "title",
                        text: "things i also enjoy",
                        variant: "secondary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HobbySlider, {
                        hobbies: hobbies
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;