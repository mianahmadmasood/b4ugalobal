(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_lang_entries_es-ES_js"],{

/***/ "./resources/js/src/lang/entries/es-ES.js":
/*!************************************************!*\
  !*** ./resources/js/src/lang/entries/es-ES.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl/locale-data/es */ "./node_modules/react-intl/locale-data/es.js");
/* harmony import */ var react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_es_ES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/es_ES */ "./resources/js/src/lang/locales/es_ES.js");
/* harmony import */ var _locales_es_ES__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locales_es_ES__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var EsLang = {
  messages: _objectSpread({}, (_locales_es_ES__WEBPACK_IMPORTED_MODULE_1___default())),
  locale: 'es-ES',
  data: (react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_0___default())
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EsLang);

/***/ }),

/***/ "./resources/js/src/lang/locales/es_ES.js":
/*!************************************************!*\
  !*** ./resources/js/src/lang/locales/es_ES.js ***!
  \************************************************/
/***/ ((module) => {

/* Gogo Language Texts

Table of Contents

01.General
02.User Login, Logout, Register
03.Menu
04.Error Page
*/
module.exports = {
  /* 01.General */
  "general.copyright": "Gogo React ?? Todos los derechos reservados.",

  /* 02.Inicio de sesi??n de usuario, cierre de sesi??n, registro */
  "user.login-title": "Iniciar sesi??n",
  "user.register": "Registro",
  "user.forgot-password": "Se te olvid?? tu contrase??a",
  "user.email": "Email",
  "user.password": "Contrase??a",
  "user.forgot-password-question": "??Contrase??a olvidada?",
  "user.fullname": "Nombre completo",
  "user.login-button": "INICIAR SESI??N",
  "user.register-button": "REGISTRO",
  "user.reset-password-button": "REINICIAR",
  "user.buy": "COMPRAR",
  "user.username": "Nombre de Usuario",

  /* 03.Men?? */
  "menu.app": "Inicio",
  "menu.dashboards": "Tableros",
  "menu.gogo": "Gogo",
  "menu.start": "Comienzo",
  "menu.second-menu": "Segundo men??",
  "menu.second": "Segundo",
  "menu.ui": "IU",
  "menu.charts": "Gr??ficos",
  "menu.chat": "Chatea",
  "menu.survey": "Encuesta",
  "menu.todo": "Notas",
  "menu.search": "B??squeda",
  "menu.docs": "Docs",
  "menu.blank-page": "Blank Page",

  /* 04.Error  */
  "pages.error-title": "Vaya, parece que ha ocurrido un error!",
  "pages.error-code": "C??digo de error",
  "pages.go-back-home": "REGRESAR A INICIO"
};

/***/ }),

/***/ "./node_modules/react-intl/locale-data/es.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/es.js ***!
  \***************************************************/
/***/ (function(module) {

!function(e,a){ true?module.exports=a():0}(this,function(){"use strict";return[{locale:"es",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"a??o",relative:{0:"este a??o",1:"el pr??ximo a??o","-1":"el a??o pasado"},relativeTime:{future:{one:"dentro de {0} a??o",other:"dentro de {0} a??os"},past:{one:"hace {0} a??o",other:"hace {0} a??os"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el pr??ximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"d??a",relative:{0:"hoy",1:"ma??ana",2:"pasado ma??ana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} d??a",other:"dentro de {0} d??as"},past:{one:"hace {0} d??a",other:"hace {0} d??as"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-419",parentLocale:"es"},{locale:"es-AR",parentLocale:"es-419"},{locale:"es-BO",parentLocale:"es-419"},{locale:"es-BR",parentLocale:"es-419"},{locale:"es-BZ",parentLocale:"es-419"},{locale:"es-CL",parentLocale:"es-419"},{locale:"es-CO",parentLocale:"es-419"},{locale:"es-CR",parentLocale:"es-419",fields:{year:{displayName:"a??o",relative:{0:"este a??o",1:"el pr??ximo a??o","-1":"el a??o pasado"},relativeTime:{future:{one:"dentro de {0} a??o",other:"dentro de {0} a??os"},past:{one:"hace {0} a??o",other:"hace {0} a??os"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el pr??ximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"d??a",relative:{0:"hoy",1:"ma??ana",2:"pasado ma??ana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} d??a",other:"dentro de {0} d??as"},past:{one:"hace {0} d??a",other:"hace {0} d??as"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-CU",parentLocale:"es-419"},{locale:"es-DO",parentLocale:"es-419",fields:{year:{displayName:"A??o",relative:{0:"este a??o",1:"el pr??ximo a??o","-1":"el a??o pasado"},relativeTime:{future:{one:"dentro de {0} a??o",other:"dentro de {0} a??os"},past:{one:"hace {0} a??o",other:"hace {0} a??os"}}},month:{displayName:"Mes",relative:{0:"este mes",1:"el pr??ximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"D??a",relative:{0:"hoy",1:"ma??ana",2:"pasado ma??ana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} d??a",other:"dentro de {0} d??as"},past:{one:"hace {0} d??a",other:"hace {0} d??as"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"Minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"Segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-EA",parentLocale:"es"},{locale:"es-EC",parentLocale:"es-419"},{locale:"es-GQ",parentLocale:"es"},{locale:"es-GT",parentLocale:"es-419",fields:{year:{displayName:"a??o",relative:{0:"este a??o",1:"el pr??ximo a??o","-1":"el a??o pasado"},relativeTime:{future:{one:"dentro de {0} a??o",other:"dentro de {0} a??os"},past:{one:"hace {0} a??o",other:"hace {0} a??os"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el pr??ximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"d??a",relative:{0:"hoy",1:"ma??ana",2:"pasado ma??ana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} d??a",other:"dentro de {0} d??as"},past:{one:"hace {0} d??a",other:"hace {0} d??as"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-HN",parentLocale:"es-419",fields:{year:{displayName:"a??o",relative:{0:"este a??o",1:"el pr??ximo a??o","-1":"el a??o pasado"},relativeTime:{future:{one:"dentro de {0} a??o",other:"dentro de {0} a??os"},past:{one:"hace {0} a??o",other:"hace {0} a??os"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el pr??ximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"d??a",relative:{0:"hoy",1:"ma??ana",2:"pasado ma??ana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} d??a",other:"dentro de {0} d??as"},past:{one:"hace {0} d??a",other:"hace {0} d??as"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-IC",parentLocale:"es"},{locale:"es-MX",parentLocale:"es-419",fields:{year:{displayName:"a??o",relative:{0:"este a??o",1:"el a??o pr??ximo","-1":"el a??o pasado"},relativeTime:{future:{one:"dentro de {0} a??o",other:"dentro de {0} a??os"},past:{one:"hace {0} a??o",other:"hace {0} a??os"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el mes pr??ximo","-1":"el mes pasado"},relativeTime:{future:{one:"en {0} mes",other:"en {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"d??a",relative:{0:"hoy",1:"ma??ana",2:"pasado ma??ana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} d??a",other:"dentro de {0} d??as"},past:{one:"hace {0} d??a",other:"hace {0} d??as"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-NI",parentLocale:"es-419",fields:{year:{displayName:"a??o",relative:{0:"este a??o",1:"el pr??ximo a??o","-1":"el a??o pasado"},relativeTime:{future:{one:"dentro de {0} a??o",other:"dentro de {0} a??os"},past:{one:"hace {0} a??o",other:"hace {0} a??os"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el pr??ximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"d??a",relative:{0:"hoy",1:"ma??ana",2:"pasado ma??ana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} d??a",other:"dentro de {0} d??as"},past:{one:"hace {0} d??a",other:"hace {0} d??as"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-PA",parentLocale:"es-419",fields:{year:{displayName:"a??o",relative:{0:"este a??o",1:"el pr??ximo a??o","-1":"el a??o pasado"},relativeTime:{future:{one:"dentro de {0} a??o",other:"dentro de {0} a??os"},past:{one:"hace {0} a??o",other:"hace {0} a??os"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el pr??ximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"d??a",relative:{0:"hoy",1:"ma??ana",2:"pasado ma??ana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} d??a",other:"dentro de {0} d??as"},past:{one:"hace {0} d??a",other:"hace {0} d??as"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-PE",parentLocale:"es-419"},{locale:"es-PH",parentLocale:"es"},{locale:"es-PR",parentLocale:"es-419"},{locale:"es-PY",parentLocale:"es-419",fields:{year:{displayName:"a??o",relative:{0:"este a??o",1:"el pr??ximo a??o","-1":"el a??o pasado"},relativeTime:{future:{one:"dentro de {0} a??o",other:"dentro de {0} a??os"},past:{one:"hace {0} a??o",other:"hace {0} a??os"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el pr??ximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"d??a",relative:{0:"hoy",1:"ma??ana",2:"pasado ma??ana","-2":"antes de ayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} d??a",other:"dentro de {0} d??as"},past:{one:"hace {0} d??a",other:"hace {0} d??as"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-SV",parentLocale:"es-419",fields:{year:{displayName:"a??o",relative:{0:"este a??o",1:"el pr??ximo a??o","-1":"el a??o pasado"},relativeTime:{future:{one:"dentro de {0} a??o",other:"dentro de {0} a??os"},past:{one:"hace {0} a??o",other:"hace {0} a??os"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el pr??ximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"d??a",relative:{0:"hoy",1:"ma??ana",2:"pasado ma??ana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} d??a",other:"dentro de {0} d??as"},past:{one:"hace {0} d??a",other:"hace {0} d??as"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-US",parentLocale:"es-419"},{locale:"es-UY",parentLocale:"es-419"},{locale:"es-VE",parentLocale:"es-419"}]});


/***/ })

}]);