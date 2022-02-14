/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n// Create Functions\r\nfunction createFavicon(faviconPath, attachTo) {\r\n  let faviconEl = document.createElement('link');\r\n  faviconEl.setAttribute('rel', 'shortcut icon');\r\n  faviconEl.setAttribute('href', faviconPath);\r\n  attachTo.appendChild(faviconEl);\r\n  return faviconEl;\r\n}\r\nfunction createTitle(webpagetitle, attachTo) {\r\n  let titleEl = document.createElement('title');\r\n  titleEl.innerHTML = webpagetitle;\r\n  attachTo.appendChild(titleEl);\r\n  return titleEl;\r\n}\r\nfunction createHeader(attachTo, ...classes) {\r\n  let headerEl = document.createElement('header');\r\n  headerEl = classify(headerEl, classes);\r\n  attachTo.appendChild(headerEl);\r\n  return headerEl;\r\n}\r\nfunction createMain(attachTo, ...classes) {\r\n  let mainEl = document.createElement('main');\r\n  mainEl = classify(mainEl, classes);\r\n  attachTo.appendChild(mainEl);\r\n  return mainEl;\r\n}\r\nfunction createFooter(attachTo, ...classes) {\r\n  let footerEl = document.createElement('footer');\r\n  footerEl = classify(footerEl, classes);\r\n  attachTo.appendChild(footerEl);\r\n  return footerEl;\r\n}\r\nfunction createDiv(attachTo, ...classes) {\r\n  let divEl = document.createElement('div');\r\n  divEl = classify(divEl, classes);\r\n  attachTo.appendChild(divEl);\r\n  return divEl;\r\n}\r\nfunction createButton(attachTo, ...classes) {\r\n  let buttonEl = document.createElement('button');\r\n  buttonEl.type = 'button';\r\n  buttonEl = classify(buttonEl, classes);\r\n  attachTo.appendChild(buttonEl);\r\n  return buttonEl;\r\n}\r\nfunction createImage(attachTo, src, alt, ...classes) {\r\n  let imageEl = document.createElement('img');\r\n  imageEl.src = src;\r\n  imageEl.alt = alt;\r\n  imageEl = classify(imageEl, classes);\r\n  attachTo.appendChild(imageEl);\r\n  return imageEl;\r\n}\r\nfunction createSpan(attachTo, text, ...classes) {\r\n  let spanEl = document.createElement('span');\r\n  spanEl.innerText = text;\r\n  spanEl = classify(spanEl, classes);\r\n  attachTo.appendChild(spanEl);\r\n  return spanEl;\r\n}\r\nfunction createAnchor(attachTo, href, ...classes) {\r\n  let anchorEl = document.createElement('a');\r\n  anchorEl.href = href;\r\n  anchorEl = classify(anchorEl, classes);\r\n  attachTo.appendChild(anchorEl);\r\n  return anchorEl;\r\n}\r\nfunction createUL(attachTo, ...classes) {\r\n  let ulEl = document.createElement('ul');\r\n  ulEl = classify(ulEl, classes);\r\n  attachTo.appendChild(ulEl);\r\n  return ulEl;\r\n}\r\nfunction createOL(attachTo, ...classes) {\r\n  let olEl = document.createElement('ol');\r\n  olEl = classify(olEl, classes);\r\n  attachTo.appendChild(olEl);\r\n  return olEl;\r\n}\r\nfunction createLI(attachTo, ...classes) {\r\n  let liEl = document.createElement('li');\r\n  liEl = classify(liEl, classes);\r\n  attachTo.appendChild(liEl);\r\n  return liEl;\r\n}\r\nfunction createForm(attachTo, action='', ...classes) {\r\n  let formEl = document.createElement('form');\r\n  formEl.action = action;\r\n  formEl = classify(formEl, classes);\r\n  attachTo.appendChild(formEl);\r\n  return formEl;\r\n}\r\nfunction createInput(attachTo, type, name, value, ...classes) {\r\n  let inputEl = document.createElement('input');\r\n  inputEl.type = type;\r\n  inputEl.name = name;\r\n  inputEl.value = value;\r\n  inputEl = classify(inputEl, classes);\r\n  attachTo.appendChild(inputEl);\r\n  return inputEl;\r\n}\r\n\r\nfunction createLabel(attachTo, labelFor, labelText, ...classes) {\r\n  let labelEl = document.createElement('label');\r\n  labelEl.innerText = labelText;\r\n  labelEl.htmlFor = labelFor;\r\n  labelEl = classify(labelEl, classes);\r\n  attachTo.appendChild(labelEl);\r\n  return labelEl;\r\n}\r\nfunction createTextArea(attachTo, name, cols='30', rows='10', text='', ...classes) {\r\n  let textAreaEl = document.createElement('textarea');\r\n  textAreaEl.name = name;\r\n  textAreaEl.cols = cols;\r\n  textAreaEl.rows = rows;\r\n  textAreaEl.innerText = text;\r\n  textAreaEl = classify(textAreaEl, classes);\r\n  attachTo.appendChild(textAreaEl);\r\n  return textAreaEl;\r\n}\r\n\r\n// GET Functions - Used to grab nodes that exist by default or have already been created using the functions above\r\nfunction getHTML() {\r\n  let htmlEl = document.querySelector('html');\r\n  return htmlEl;\r\n}\r\nfunction getHead() {\r\n  let headEl = document.querySelector('head');\r\n  return headEl;\r\n}\r\nfunction getBody() {\r\n  let bodyEl = document.querySelector('body');\r\n  return bodyEl;\r\n}\r\n\r\n// HELPER functions\r\nfunction addClasses(element, ...classes) {\r\n  element.classList.add(classes);\r\n  return element;\r\n}\r\nfunction classify(element, classes) {\r\n  // expects an array of class names\r\n  if (classes.length !== 0) {\r\n    element.classList.add(...classes);\r\n  }\r\n  return element;\r\n}\r\nfunction declassify(element, classesToRemove) {\r\n  // expects an array of class names\r\n  if (classesToRemove.length !== 0) {\r\n    for (let i=0; i < classesToRemove.length; i++) {\r\n      element.classList.remove(classesToRemove[i]);\r\n    }\r\n  }\r\n  return element;\r\n}\r\nfunction getClasses(element) {\r\n  const classList = element.className.split(' ');\r\n  return classList;\r\n}\r\nfunction attach(element, attachTo) {\r\n  attachTo.appendChild(element);\r\n}\r\nfunction setInnerText(element, text) {\r\n  element.innerText = text;\r\n}\r\n\r\n// Export\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  // CREATE functions\r\n  createFavicon, createTitle, createHeader, createMain, createFooter, createDiv, createButton, createImage, createSpan, createAnchor, createUL, createOL, createLI, createForm, createLabel, createInput, createTextArea,\r\n  // GET functions\r\n  getHTML, getHead, getBody,\r\n  // HELPER functions\r\n  addClasses, attach, setInnerText, classify, declassify, getClasses,\r\n  });\n\n//# sourceURL=webpack://todo_titan/./src/dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/dom.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;