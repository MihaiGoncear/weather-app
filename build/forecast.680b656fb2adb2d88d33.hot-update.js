webpackHotUpdate("forecast",{

/***/ "./src/js/forecastJS/forecastPageRender.js":
/*!*************************************************!*\
  !*** ./src/js/forecastJS/forecastPageRender.js ***!
  \*************************************************/
/*! exports provided: forecastRenderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forecastRenderPage\", function() { return forecastRenderPage; });\nfunction forecastRenderPage(info) {\r\n    console.log(info)\r\n\r\n    let mainDiv = document.getElementById('forecast__main')\r\n    mainDiv.setAttribute('class', 'forecast__main')\r\n\r\n    let forecastDiv = document.createElement('ul');\r\n    forecastDiv.setAttribute('class', 'forecast__main-list')\r\n\r\n\r\n    let firstListItem = document.createElement('li');\r\n    let secondListItem = document.createElement('li');\r\n    let thirdListItem = document.createElement('li');\r\n\r\n    let weatherTableDataThirdImg = document.createElement('img');\r\n    weatherTableDataThirdImg.setAttribute('src', `http://openweathermap.org/img/w/${info.weather[0].icon}.png`)\r\n    weatherTableDataThirdImg.setAttribute('alt', info.weather[0].description)\r\n    \r\n    let dateString = info.dt_txt\r\n\r\n    firstListItem.innerText = dateString.substr(8, 2);\r\n    secondListItem.append(weatherTableDataThirdImg) \r\n    thirdListItem.innerHTML = `${Math.floor(info.main.temp)}<sup>°C</sup>`;\r\n\r\n    forecastDiv.append(firstListItem)\r\n    forecastDiv.append(secondListItem)\r\n    forecastDiv.append(thirdListItem)\r\n\r\n    mainDiv.append(forecastDiv)\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/forecastJS/forecastPageRender.js?");

/***/ })

})