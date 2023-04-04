"use strict";
exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(939);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_LibraryBooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(866);
/* harmony import */ var _mui_icons_material_LibraryBooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LibraryBooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(603);
/* harmony import */ var _mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(959);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(174);
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(142);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(818);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_10__);











function MIcon({ type , variant ="primary"  }) {
    const cnExtension = `text-${variant}`;
    switch(type){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .iconType.up */ .G.up:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default()), {
                className: cnExtension
            });
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .iconType.down */ .G.down:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default()), {
                className: cnExtension
            });
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .iconType.left */ .G.left:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_9___default()), {
                className: cnExtension
            });
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .iconType.right */ .G.right:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: cnExtension
            });
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .iconType.profile */ .G.profile:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: cnExtension
            });
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .iconType.experience */ .G.experience:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LibraryBooks__WEBPACK_IMPORTED_MODULE_4___default()), {
                className: cnExtension
            });
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .iconType.contact */ .G.contact:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: cnExtension
            });
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_6___default()), {});
    }
}


/***/ }),

/***/ 721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MTypography)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function MTypography({ type , text , variant  }) {
    switch(type){
        case "title":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: `font-burtons text-3xl p-2 ${variant == "primary" ? " text-primary" : " text-secondary"}`,
                children: text
            });
        case "subtitle":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: ` uppercase text-xl ${variant == "primary" ? " text-primary" : " text-secondary"}`,
                children: text
            });
        case "caption":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: " text-sm opacity-60",
                children: text
            });
        case "text":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: text
            });
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: text
            });
    }
}


/***/ }),

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ iconType)
/* harmony export */ });
var iconType;
(function(iconType) {
    iconType[iconType["up"] = 0] = "up";
    iconType[iconType["down"] = 1] = "down";
    iconType[iconType["left"] = 2] = "left";
    iconType[iconType["right"] = 3] = "right";
    iconType[iconType["profile"] = 4] = "profile";
    iconType[iconType["experience"] = 5] = "experience";
    iconType[iconType["contact"] = 6] = "contact";
})(iconType || (iconType = {}));


/***/ })

};
;