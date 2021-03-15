(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_constants_menu_js"],{

/***/ "./resources/js/src/constants/menu.js":
/*!********************************************!*\
  !*** ./resources/js/src/constants/menu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var data = [{
  id: 'Compaign',
  icon: 'iconsminds-air-balloon-1',
  label: 'menu.compaign',
  to: '/app/compaign' // subs: [
  //   {
  //     icon: 'simple-icon-paper-plane',
  //     label: 'menu.start',
  //     to: '/app/compa/start',
  //   },
  // ],

}, {
  id: 'templates',
  icon: 'iconsminds-three-arrow-fork',
  label: 'menu.templates',
  to: '/app/templates',
  subs: [{
    icon: 'simple-icon-paper-plane',
    label: 'menu.email',
    to: '/app/templates/email'
  }, {
    icon: 'simple-icon-paper-plane',
    label: 'menu.sms',
    to: '/app/templates/sms'
  }]
} // {
//   id: "blankpage",
//   icon: "iconsminds-bucket",
//   label: "menu.blank-page",
//   to: "/app/blank-page"
// },
// {
//   id: "docs",
//   icon: "iconsminds-library",
//   label: "menu.docs",
//   to: "https://gogo-react-docs.coloredstrategies.com/",
//   newWindow:true
// }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ })

}]);