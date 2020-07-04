webpackHotUpdate("forecast",{

/***/ "./src/js/forecastJS/forecast.js":
/*!***************************************!*\
  !*** ./src/js/forecastJS/forecast.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiJS_apiForecast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apiJS/apiForecast.js */ \"./src/js/apiJS/apiForecast.js\");\n/* harmony import */ var _localStorageJS_localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localStorageJS/localStorage.js */ \"./src/js/localStorageJS/localStorage.js\");\n/* harmony import */ var _commonJS_cityKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonJS/cityKeys.js */ \"./src/js/commonJS/cityKeys.js\");\n\r\n\r\n\r\n\r\nlet myStorage = Object(_localStorageJS_localStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"getCityFromLocalStorage\"])()\r\n\r\nif(myStorage) {\r\n    Object(_apiJS_apiForecast_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchWeatherApi\"])(_commonJS_cityKeys_js__WEBPACK_IMPORTED_MODULE_2__[\"cities\"][myStorage].name)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/forecastJS/forecast.js?");

/***/ })

})