(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_redux_actions_js"],{

/***/ "./resources/js/src/redux/actions.js":
/*!*******************************************!*\
  !*** ./resources/js/src/redux/actions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_LOCALE": () => /* binding */ CHANGE_LOCALE,
/* harmony export */   "MENU_SET_CLASSNAMES": () => /* binding */ MENU_SET_CLASSNAMES,
/* harmony export */   "MENU_CONTAINER_ADD_CLASSNAME": () => /* binding */ MENU_CONTAINER_ADD_CLASSNAME,
/* harmony export */   "MENU_CLICK_MOBILE_MENU": () => /* binding */ MENU_CLICK_MOBILE_MENU,
/* harmony export */   "MENU_CHANGE_DEFAULT_CLASSES": () => /* binding */ MENU_CHANGE_DEFAULT_CLASSES,
/* harmony export */   "MENU_CHANGE_HAS_SUB_ITEM_STATUS": () => /* binding */ MENU_CHANGE_HAS_SUB_ITEM_STATUS,
/* harmony export */   "addContainerClassname": () => /* reexport safe */ _menu_actions__WEBPACK_IMPORTED_MODULE_0__.addContainerClassname,
/* harmony export */   "changeDefaultClassnames": () => /* reexport safe */ _menu_actions__WEBPACK_IMPORTED_MODULE_0__.changeDefaultClassnames,
/* harmony export */   "changeSelectedMenuHasSubItems": () => /* reexport safe */ _menu_actions__WEBPACK_IMPORTED_MODULE_0__.changeSelectedMenuHasSubItems,
/* harmony export */   "clickOnMobileMenu": () => /* reexport safe */ _menu_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnMobileMenu,
/* harmony export */   "setContainerClassnames": () => /* reexport safe */ _menu_actions__WEBPACK_IMPORTED_MODULE_0__.setContainerClassnames,
/* harmony export */   "changeLocale": () => /* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_1__.changeLocale
/* harmony export */ });
/* harmony import */ var _menu_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/actions */ "./resources/js/src/redux/menu/actions.js");
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/actions */ "./resources/js/src/redux/settings/actions.js");
/* SETTINGS */
var CHANGE_LOCALE = "CHANGE_LOCALE";
/* MENU */

var MENU_SET_CLASSNAMES = "MENU_SET_CLASSNAMES";
var MENU_CONTAINER_ADD_CLASSNAME = "MENU_CONTAINER_ADD_CLASSNAME";
var MENU_CLICK_MOBILE_MENU = "MENU_CLICK_MOBILE_MENU";
var MENU_CHANGE_DEFAULT_CLASSES = "MENU_CHANGE_DEFAULT_CLASSES";
var MENU_CHANGE_HAS_SUB_ITEM_STATUS = "MENU_CHANGE_HAS_SUB_ITEM_STATUS";



/***/ }),

/***/ "./resources/js/src/redux/menu/actions.js":
/*!************************************************!*\
  !*** ./resources/js/src/redux/menu/actions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeSelectedMenuHasSubItems": () => /* binding */ changeSelectedMenuHasSubItems,
/* harmony export */   "changeDefaultClassnames": () => /* binding */ changeDefaultClassnames,
/* harmony export */   "addContainerClassname": () => /* binding */ addContainerClassname,
/* harmony export */   "clickOnMobileMenu": () => /* binding */ clickOnMobileMenu,
/* harmony export */   "setContainerClassnames": () => /* binding */ setContainerClassnames
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./resources/js/src/redux/actions.js");

var changeSelectedMenuHasSubItems = function changeSelectedMenuHasSubItems(payload) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_0__.MENU_CHANGE_HAS_SUB_ITEM_STATUS,
    payload: payload
  };
};
var changeDefaultClassnames = function changeDefaultClassnames(strCurrentClasses) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_0__.MENU_CHANGE_DEFAULT_CLASSES,
    payload: strCurrentClasses
  };
};
var addContainerClassname = function addContainerClassname(classname, strCurrentClasses) {
  var newClasses = !strCurrentClasses.indexOf(classname) > -1 ? strCurrentClasses + ' ' + classname : strCurrentClasses;
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_0__.MENU_CONTAINER_ADD_CLASSNAME,
    payload: newClasses
  };
};
var clickOnMobileMenu = function clickOnMobileMenu(strCurrentClasses) {
  var currentClasses = strCurrentClasses ? strCurrentClasses.split(' ').filter(function (x) {
    return x !== '' && x !== 'sub-show-temporary';
  }) : '';
  var nextClasses = '';

  if (currentClasses.includes('main-show-temporary')) {
    nextClasses = currentClasses.filter(function (x) {
      return x !== 'main-show-temporary';
    }).join(' ');
  } else {
    nextClasses = currentClasses.join(' ') + ' main-show-temporary';
  }

  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_0__.MENU_CLICK_MOBILE_MENU,
    payload: {
      containerClassnames: nextClasses,
      menuClickCount: 0
    }
  };
};
var setContainerClassnames = function setContainerClassnames(clickIndex, strCurrentClasses, selectedMenuHasSubItems) {
  var currentClasses = strCurrentClasses ? strCurrentClasses.split(' ').filter(function (x) {
    return x !== '';
  }) : '';
  var nextClasses = '';

  if (!selectedMenuHasSubItems) {
    if (currentClasses.includes("menu-default") && (clickIndex % 4 === 0 || clickIndex % 4 === 3)) {
      clickIndex = 1;
    }

    if (currentClasses.includes("menu-sub-hidden") && clickIndex % 4 === 2) {
      clickIndex = 0;
    }

    if (currentClasses.includes("menu-hidden") && (clickIndex % 4 === 2 || clickIndex % 4 === 3)) {
      clickIndex = 0;
    }
  }

  if (clickIndex % 4 === 0) {
    if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
      nextClasses = 'menu-default menu-sub-hidden';
    } else if (currentClasses.includes('menu-default')) {
      nextClasses = 'menu-default';
    } else if (currentClasses.includes('menu-sub-hidden')) {
      nextClasses = 'menu-sub-hidden';
    } else if (currentClasses.includes('menu-hidden')) {
      nextClasses = 'menu-hidden';
    }

    clickIndex = 0;
  } else if (clickIndex % 4 === 1) {
    if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
      nextClasses = 'menu-default menu-sub-hidden main-hidden sub-hidden';
    } else if (currentClasses.includes('menu-default')) {
      nextClasses = 'menu-default sub-hidden';
    } else if (currentClasses.includes('menu-sub-hidden')) {
      nextClasses = 'menu-sub-hidden main-hidden sub-hidden';
    } else if (currentClasses.includes('menu-hidden')) {
      nextClasses = 'menu-hidden main-show-temporary';
    }
  } else if (clickIndex % 4 === 2) {
    if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
      nextClasses = 'menu-default menu-sub-hidden sub-hidden';
    } else if (currentClasses.includes('menu-default')) {
      nextClasses = 'menu-default main-hidden sub-hidden';
    } else if (currentClasses.includes('menu-sub-hidden')) {
      nextClasses = 'menu-sub-hidden sub-hidden';
    } else if (currentClasses.includes('menu-hidden')) {
      nextClasses = 'menu-hidden main-show-temporary sub-show-temporary';
    }
  } else if (clickIndex % 4 === 3) {
    if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
      nextClasses = 'menu-default menu-sub-hidden sub-show-temporary';
    } else if (currentClasses.includes('menu-default')) {
      nextClasses = 'menu-default sub-hidden';
    } else if (currentClasses.includes('menu-sub-hidden')) {
      nextClasses = 'menu-sub-hidden sub-show-temporary';
    } else if (currentClasses.includes('menu-hidden')) {
      nextClasses = 'menu-hidden main-show-temporary';
    }
  }

  if (currentClasses.includes('menu-mobile')) {
    nextClasses += ' menu-mobile';
  }

  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_0__.MENU_SET_CLASSNAMES,
    payload: {
      containerClassnames: nextClasses,
      menuClickCount: clickIndex
    }
  };
};

/***/ }),

/***/ "./resources/js/src/redux/settings/actions.js":
/*!****************************************************!*\
  !*** ./resources/js/src/redux/settings/actions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeLocale": () => /* binding */ changeLocale
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./resources/js/src/redux/actions.js");

var changeLocale = function changeLocale(locale) {
  localStorage.setItem('currentLanguage', locale);
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_LOCALE,
    payload: locale
  };
};

/***/ })

}]);