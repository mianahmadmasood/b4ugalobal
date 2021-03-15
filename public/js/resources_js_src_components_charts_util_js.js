(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_components_charts_util_js"],{

/***/ "./resources/js/src/components/charts/util.js":
/*!****************************************************!*\
  !*** ./resources/js/src/components/charts/util.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chartTooltip": () => /* binding */ chartTooltip,
/* harmony export */   "centerTextPlugin": () => /* binding */ centerTextPlugin
/* harmony export */ });
/* harmony import */ var _helpers_ThemeColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/ThemeColors */ "./resources/js/src/helpers/ThemeColors.js");

var chartTooltip = {
  backgroundColor: (0,_helpers_ThemeColors__WEBPACK_IMPORTED_MODULE_0__.ThemeColors)().foregroundColor,
  titleFontColor: (0,_helpers_ThemeColors__WEBPACK_IMPORTED_MODULE_0__.ThemeColors)().primaryColor,
  borderColor: (0,_helpers_ThemeColors__WEBPACK_IMPORTED_MODULE_0__.ThemeColors)().separatorColor,
  borderWidth: 0.5,
  bodyFontColor: (0,_helpers_ThemeColors__WEBPACK_IMPORTED_MODULE_0__.ThemeColors)().primaryColor,
  bodySpacing: 10,
  xPadding: 15,
  yPadding: 15,
  cornerRadius: 0.15
};
var centerTextPlugin = {
  afterDatasetsUpdate: function afterDatasetsUpdate(chart) {},
  beforeDraw: function beforeDraw(chart) {
    var width = chart.chartArea.right;
    var height = chart.chartArea.bottom;
    var ctx = chart.chart.ctx;
    ctx.restore();
    var activeLabel = chart.data.labels[0];
    var activeValue = chart.data.datasets[0].data[0];
    var dataset = chart.data.datasets[0];

    var meta = dataset._meta[Object.keys(dataset._meta)[0]];

    var total = meta.total;
    var activePercentage = parseFloat((activeValue / total * 100).toFixed(1));
    activePercentage = chart.legend.legendItems[0].hidden ? 0 : activePercentage;

    if (chart.pointAvailable) {
      activeLabel = chart.data.labels[chart.pointIndex];
      activeValue = chart.data.datasets[chart.pointDataIndex].data[chart.pointIndex];
      dataset = chart.data.datasets[chart.pointDataIndex];
      meta = dataset._meta[Object.keys(dataset._meta)[0]];
      total = meta.total;
      activePercentage = parseFloat((activeValue / total * 100).toFixed(1));
      activePercentage = chart.legend.legendItems[chart.pointIndex].hidden ? 0 : activePercentage;
    }

    ctx.font = '36px Nunito, sans-serif';
    ctx.fillStyle = (0,_helpers_ThemeColors__WEBPACK_IMPORTED_MODULE_0__.ThemeColors)().primaryColor;
    ctx.textBaseline = 'middle';
    var text = activePercentage + '%';
    var textX = Math.round((width - ctx.measureText(text).width) / 2);
    var textY = height / 2;
    ctx.fillText(text, textX, textY);
    ctx.font = '14px Nunito, sans-serif';
    ctx.textBaseline = 'middle';
    var text2 = activeLabel;
    var textX2 = Math.round((width - ctx.measureText(text2).width) / 2);
    var textY2 = height / 2 - 30;
    ctx.fillText(text2, textX2, textY2);
    ctx.save();
  },
  beforeEvent: function beforeEvent(chart, event, options) {
    var firstPoint = chart.getElementAtEvent(event)[0];

    if (firstPoint) {
      chart.pointIndex = firstPoint._index;
      chart.pointDataIndex = firstPoint._datasetIndex;
      chart.pointAvailable = true;
    }
  }
};

/***/ }),

/***/ "./resources/js/src/helpers/ThemeColors.js":
/*!*************************************************!*\
  !*** ./resources/js/src/helpers/ThemeColors.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeColors": () => /* binding */ ThemeColors
/* harmony export */ });
var ThemeColors = function ThemeColors() {
  var rootStyle = getComputedStyle(document.body);
  return {
    themeColor1: rootStyle.getPropertyValue("--theme-color-1").trim(),
    themeColor2: rootStyle.getPropertyValue("--theme-color-2").trim(),
    themeColor3: rootStyle.getPropertyValue("--theme-color-3").trim(),
    themeColor4: rootStyle.getPropertyValue("--theme-color-4").trim(),
    themeColor5: rootStyle.getPropertyValue("--theme-color-5").trim(),
    themeColor6: rootStyle.getPropertyValue("--theme-color-6").trim(),
    themeColor1_10: rootStyle.getPropertyValue("--theme-color-1-10").trim(),
    themeColor2_10: rootStyle.getPropertyValue("--theme-color-2-10").trim(),
    themeColor3_10: rootStyle.getPropertyValue("--theme-color-3-10").trim(),
    themeColor4_10: rootStyle.getPropertyValue("--theme-color-3-10").trim(),
    themeColor5_10: rootStyle.getPropertyValue("--theme-color-3-10").trim(),
    themeColor6_10: rootStyle.getPropertyValue("--theme-color-3-10").trim(),
    primaryColor: rootStyle.getPropertyValue("--primary-color").trim(),
    foregroundColor: rootStyle.getPropertyValue("--foreground-color").trim(),
    separatorColor: rootStyle.getPropertyValue("--separator-color").trim()
  };
};

/***/ })

}]);