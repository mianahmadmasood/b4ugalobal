(self["webpackChunk"] = self["webpackChunk"] || []).push([["viwes-gogo"],{

/***/ "./resources/js/src/views/pages/login/login.component.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/login/login.component.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components/login/lg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var _this = undefined;

 // import Login from "components/login/login.component";



var login = function login() {
  // const [userCredentials, setUserCredentials] = useState({
  //   email: "demo@gogo.com",
  //   password: "gogo123"
  // });
  var onUserLogin = function onUserLogin(values) {
    console.log("VALUES", values);

    if (!_this.props.loading) {
      if (values.email !== "" && values.password !== "") {
        _this.props.history.push("/app");
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components/login/lg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    onUserLogin: onUserLogin
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);

/***/ })

}]);