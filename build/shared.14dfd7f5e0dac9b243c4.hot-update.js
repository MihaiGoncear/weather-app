webpackHotUpdate("shared",{

/***/ "./src/js/commonJS/styles.js":
/*!***********************************!*\
  !*** ./src/js/commonJS/styles.js ***!
  \***********************************/
/*! exports provided: headTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headTitle\", function() { return headTitle; });\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _commonJS_dateFormator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonJS/dateFormator.js */ \"./src/js/commonJS/dateFormator.js\");\n\r\n\r\n\r\nlet currentDate = document.getElementById('date');\r\ncurrentDate.innerText = Object(_commonJS_dateFormator_js__WEBPACK_IMPORTED_MODULE_1__[\"dateFormator\"])();\r\n\r\nlet homeBtn = document.getElementById('home');\r\nlet listBtn = document.getElementById('list');\r\nlet contactBtn = document.getElementById('contact');\r\nlet forecastBtn = document.getElementById('forecast');\r\nlet headTitle = document.getElementById('title');\r\n\r\nhomeBtn.onclick = buttonChange(homeBtn);\r\nlistBtn.onclick = buttonChange(listBtn);\r\ncontactBtn.onclick = buttonChange(contactBtn);\r\nforecastBtn.onclick = buttonChange(forecastBtn);\r\n\r\nfunction buttonChange(mainButton){\r\n\r\n    if(headTitle.dataset.name === mainButton.id){\r\n        mainButton.style.color = 'rgba(0, 0, 255, 0.548)';\r\n        mainButton.style.backgroundColor = 'rgba(153, 155, 255, 0.418)';\r\n        mainButton.style.fontWeight = 'bold';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/commonJS/styles.js?");

/***/ })

})