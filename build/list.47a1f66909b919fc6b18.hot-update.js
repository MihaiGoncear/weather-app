webpackHotUpdate("list",{

/***/ "./src/js/listPageJS/createDivList.js":
/*!********************************************!*\
  !*** ./src/js/listPageJS/createDivList.js ***!
  \********************************************/
/*! exports provided: listDivViaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listDivViaApi\", function() { return listDivViaApi; });\n/* harmony import */ var _localStorageJS_localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localStorageJS/localStorage.js */ \"./src/js/localStorageJS/localStorage.js\");\n/* harmony import */ var _commonJS_cityKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonJS/cityKeys.js */ \"./src/js/commonJS/cityKeys.js\");\n\r\n\r\n\r\n\r\nfunction listDivViaApi(info) {\r\n    let myStorage = Object(_localStorageJS_localStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"getCityFromLocalStorage\"])();\r\n\r\n    if(myStorage){\r\n        let storageCity = _commonJS_cityKeys_js__WEBPACK_IMPORTED_MODULE_1__[\"cities\"][myStorage].name;\r\n        \r\n        if(info.name === storageCity){\r\n            return\r\n        }\r\n    } \r\n    \r\n    let mainTag = document.getElementById('list__main');\r\n    \r\n    let mainDiv = document.getElementById('list__div')\r\n\r\n    let weatherTable = document.getElementById('city__table')\r\n\r\n    let weatherTableRow = document.createElement('tr');\r\n    weatherTableRow.classList.add('city__table-row')\r\n\r\n    let weatherTableDataFirst = document.createElement('td');\r\n    let weatherTableDataSecond = document.createElement('td');\r\n    let weatherTableDataThird = document.createElement('td');\r\n    \r\n    \r\n\r\n    let weatherTableDataThirdImg = document.createElement('img');\r\n    weatherTableDataThirdImg.setAttribute('src', `http://openweathermap.org/img/w/${info.weather[0].icon}.png`)\r\n    weatherTableDataThirdImg.setAttribute('alt', info.weather[0].description)\r\n     \r\n    weatherTableDataFirst.innerText = info.name;\r\n    weatherTableDataSecond.innerHTML = `${Math.floor(info.main.temp)}<sup>°C</sup>`;\r\n    weatherTableDataThird.append(weatherTableDataThirdImg);\r\n\r\n    weatherTableRow.append(weatherTableDataFirst);\r\n    weatherTableRow.append(weatherTableDataSecond);\r\n    weatherTableRow.append(weatherTableDataThird)\r\n\r\n    weatherTable.append(weatherTableRow);\r\n\r\n    mainDiv.append(weatherTable);\r\n\r\n    mainTag.append(mainDiv);\r\n}\n\n//# sourceURL=webpack:///./src/js/listPageJS/createDivList.js?");

/***/ })

})