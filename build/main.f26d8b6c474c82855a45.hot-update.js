webpackHotUpdate("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cityKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cityKeys.js */ \"./src/js/cityKeys.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n/* harmony import */ var _navMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navMenu.js */ \"./src/js/navMenu.js\");\n\r\n\r\n\r\n// import { getCityFromLocalStorage } from \"./localStorage.js\"\r\n// import { setCityToLocalStorage } from \"./localStorage.js\"\r\n\r\n\r\nlet mainTag = document.getElementById('locations')\r\n\r\nlet currentDate = document.getElementById('date');\r\ncurrentDate.innerText = new Date();\r\n\r\ndocument.onload = createPage();\r\n\r\nfunction createPage() {\r\n    if(_navMenu_js__WEBPACK_IMPORTED_MODULE_3__[\"headTitle\"].dataset.name === 'home') {\r\n        createDropdown()\r\n    }else{\r\n        return;\r\n    }\r\n}\r\n\r\nfunction createDropdown() {\r\n    let select = document.createElement('select');\r\n    let target = document.querySelector('.locations');\r\n    \r\n    select.setAttribute('name', 'city');\r\n    select.setAttribute('id', 'city');\r\n    select.setAttribute('class', 'city-select')\r\n\r\n    for(const city in _cityKeys_js__WEBPACK_IMPORTED_MODULE_1__[\"cities\"]) {\r\n        let option = document.createElement('option');\r\n        option.setAttribute('value', city)\r\n        option.innerText = _cityKeys_js__WEBPACK_IMPORTED_MODULE_1__[\"cities\"][city].name;\r\n        option.setAttribute('id', _cityKeys_js__WEBPACK_IMPORTED_MODULE_1__[\"cities\"][city].name)\r\n        select.append(option);\r\n    }\r\n\r\n    select.addEventListener('change', changeBackground)\r\n    target.append(select);    \r\n    \r\n}\r\n\r\nfunction changeBackground(event){\r\n    let mainDiv = document.getElementById('main__div');\r\n\r\n    let cityKey = event.target.value;\r\n    let cityImage = _cityKeys_js__WEBPACK_IMPORTED_MODULE_1__[\"cities\"][cityKey].url    \r\n    document.body.style.backgroundImage = `url(${cityImage})`;\r\n\r\n    if(mainDiv){\r\n        mainTag.removeChild(mainDiv)\r\n    }\r\n\r\n    Object(_api_js__WEBPACK_IMPORTED_MODULE_2__[\"fetchWeatherApi\"])(_cityKeys_js__WEBPACK_IMPORTED_MODULE_1__[\"cities\"][cityKey].name);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/localStorage.js":
false

})