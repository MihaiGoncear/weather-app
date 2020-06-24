webpackHotUpdate("main",{

/***/ "./src/js/navMenu.js":
/*!***************************!*\
  !*** ./src/js/navMenu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let homeBtn = document.getElementById('home');\r\nlet aboutBtn = document.getElementById('about');\r\nlet contactBtn = document.getElementById('contact');\r\nlet headTitle = document.getElementById('title');\r\n\r\nhomeBtn.onclick = buttonChange(homeBtn);\r\naboutBtn.onclick = buttonChange(aboutBtn);\r\ncontactBtn.onclick = buttonChange(contactBtn);\r\n\r\nfunction buttonChange(mainButton){\r\n\r\n    if(headTitle.dataset.name === mainButton.id){\r\n        mainButton.style.color = 'rgba(0, 0, 255, 0.548)';\r\n        mainButton.style.backgroundColor = 'rgba(153, 155, 255, 0.418)';\r\n        mainButton.style.fontWeight = 'bold';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/navMenu.js?");

/***/ })

})