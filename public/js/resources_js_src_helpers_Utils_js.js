(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_helpers_Utils_js"],{

/***/ "./resources/js/src/constants/defaultValues.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/constants/defaultValues.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMenuType": () => /* binding */ defaultMenuType,
/* harmony export */   "subHiddenBreakpoint": () => /* binding */ subHiddenBreakpoint,
/* harmony export */   "menuHiddenBreakpoint": () => /* binding */ menuHiddenBreakpoint,
/* harmony export */   "defaultLocale": () => /* binding */ defaultLocale,
/* harmony export */   "localeOptions": () => /* binding */ localeOptions,
/* harmony export */   "searchPath": () => /* binding */ searchPath,
/* harmony export */   "servicePath": () => /* binding */ servicePath,
/* harmony export */   "themeColorStorageKey": () => /* binding */ themeColorStorageKey,
/* harmony export */   "isMultiColorActive": () => /* binding */ isMultiColorActive,
/* harmony export */   "isDarkSwitchActive": () => /* binding */ isDarkSwitchActive,
/* harmony export */   "defaultColor": () => /* binding */ defaultColor,
/* harmony export */   "defaultDirection": () => /* binding */ defaultDirection,
/* harmony export */   "themeRadiusStorageKey": () => /* binding */ themeRadiusStorageKey,
/* harmony export */   "isDemo": () => /* binding */ isDemo
/* harmony export */ });
/* 
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
var defaultMenuType = "menu-default";
var subHiddenBreakpoint = 1440;
var menuHiddenBreakpoint = 768;
var defaultLocale = "en";
var localeOptions = [{
  id: "en",
  name: "English - LTR",
  direction: "ltr"
}, {
  id: "es",
  name: "Español",
  direction: "ltr"
}, {
  id: "enrtl",
  name: "English - RTL",
  direction: "rtl"
}];
var searchPath = "/app/pages/search";
var servicePath = "https://api.coloredstrategies.com";
/* 
Color Options:
"light.purple", "light.blue", "light.green", "light.orange", "light.red", "dark.purple", "dark.blue", "dark.green", "dark.orange", "dark.red"
*/

var themeColorStorageKey = "__theme_color";
var isMultiColorActive = true;
var isDarkSwitchActive = true;
var defaultColor = "light.purple";
var defaultDirection = "ltr";
var themeRadiusStorageKey = "__theme_radius";
var isDemo = true;

/***/ }),

/***/ "./resources/js/src/helpers/Utils.js":
/*!*******************************************!*\
  !*** ./resources/js/src/helpers/Utils.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapOrder": () => /* binding */ mapOrder,
/* harmony export */   "getDateWithFormat": () => /* binding */ getDateWithFormat,
/* harmony export */   "getCurrentTime": () => /* binding */ getCurrentTime,
/* harmony export */   "getDirection": () => /* binding */ getDirection,
/* harmony export */   "setDirection": () => /* binding */ setDirection
/* harmony export */ });
/* harmony import */ var _constants_defaultValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/defaultValues */ "./resources/js/src/constants/defaultValues.js");

var mapOrder = function mapOrder(array, order, key) {
  array.sort(function (a, b) {
    var A = a[key],
        B = b[key];

    if (order.indexOf(A + "") > order.indexOf(B + "")) {
      return 1;
    } else {
      return -1;
    }
  });
  return array;
};
var getDateWithFormat = function getDateWithFormat() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy;
};
var getCurrentTime = function getCurrentTime() {
  var now = new Date();
  return now.getHours() + ":" + now.getMinutes();
};
var getDirection = function getDirection() {
  var direction = _constants_defaultValues__WEBPACK_IMPORTED_MODULE_0__.defaultDirection;

  if (localStorage.getItem("direction")) {
    var localValue = localStorage.getItem("direction");

    if (localValue === "rtl" || localValue === "ltr") {
      direction = localValue;
    }
  }

  return {
    direction: direction,
    isRtl: direction === "rtl"
  };
};
var setDirection = function setDirection(localValue) {
  var direction = "ltr";

  if (localValue === "rtl" || localValue === "ltr") {
    direction = localValue;
  }

  localStorage.setItem("direction", direction);
};

/***/ })

}]);