/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/nav.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/nav.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".search {\\r\\n  max-width: 300px;\\r\\n}\\r\\n.form-inline {\\r\\n  background: white;\\r\\n}\\r\\n.filter-container {\\r\\n  margin-bottom: 40px;\\r\\n}\\r\\n.filter-container button,\\r\\ninput {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n.filter-available,\\r\\n.filter-price {\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/nav.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\r\\n  margin: 0;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  position: relative;\\r\\n  background: white;\\r\\n  border-radius: 5px;\\r\\n  padding: 10px;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.item-container {\\r\\n  max-width: 200px;\\r\\n  height: auto;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 6px;\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.item-container:hover {\\r\\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\n.item {\\r\\n  position: relative;\\r\\n  margin: 10px;\\r\\n}\\r\\n.item-info {\\r\\n  padding: 0;\\r\\n}\\r\\n.item-img {\\r\\n  width: auto;\\r\\n  height: 80px;\\r\\n  margin: 10px;\\r\\n}\\r\\n.item-desc {\\r\\n  margin: 10px;\\r\\n}\\r\\n.item-btn {\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n.cart {\\r\\n  position: relative;\\r\\n  border: 1px solid cornflowerblue;\\r\\n}\\r\\n.cart::after {\\r\\n  content: \\\"0\\\";\\r\\n  position: absolute;\\r\\n  height: 20px;\\r\\n  width: 20px;\\r\\n  top: -15px;\\r\\n  left: 95px;\\r\\n  padding: 5px;\\r\\n  text-align: center;\\r\\n  line-height: 10px;\\r\\n  border-radius: 50%;\\r\\n  background: red;\\r\\n}\\r\\n.cart:hover {\\r\\n  background: red;\\r\\n}\\r\\n\\r\\n.available {\\r\\n  color: green;\\r\\n}\\r\\n.out-of-stock {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.display-none {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/create-elements.js":
/*!********************************!*\
  !*** ./src/create-elements.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateElements; });\nfunction CreateElements(data) {\n  let newHTML; //if items in localstorage parse it\n\n  if (localStorage.getItem(\"mykey\") != null) newHTML = JSON.parse(localStorage.getItem(\"myKey\"));else newHTML = Object.keys(data).map(key => `<div\n          class=\"item-container container-sm d-flex flex-column justify-content-center \"\n          name=\"item\"\n          id='${data[key].id}'\n        >\n          <div class=\"item cart-body\">\n            <div class=\"item-info container-sm d-flex justify-content-between\">\n              <span>Код: <span id=\"id\">${data[key].id}</span></span>\n              <span class=\"${data[key].available === true ? \"available\" : \"out-of-stock\"}\" id=\"available\">Наличие</span>\n            </div>\n            <div class=\"d-flex justify-content-center\">\n              <img\n                class=\"item-img\"\n                id=\"img\"\n                src=\"${data[key].image}\"\n                alt=\"item image\"\n              />\n            </div>\n            <div class=\"d-flex justify-content-center\">\n              <h3 class=\"item-title card-title\" id=\"title\">${data[key].title}</h3>\n            </div>\n            <div class=\"item-desc card-text d-flex justify-content-center\" id=\"descr\">\n              <p>${data[key].descr}</p>\n            </div>\n            <div class=\"d-flex flex-row justify-content-between align-items-center\">\n              <div class=\"item-price-container d-flex flex-column justify-content-center\">\n                <span class=\"item-price\" id=\"price\">${data[key].price}$</span>\n              </div>\n              <form class=\"item-form\" action=\"\" onsubmit=\"\">\n                <button class=\"cart item-btn btn btn-primary\" id=\"${data[key].id}\" type=\"submit\">\n                  В Корзину\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>`);\n  return newHTML;\n}\n\n//# sourceURL=webpack:///./src/create-elements.js?");

/***/ }),

/***/ "./src/filters.js":
/*!************************!*\
  !*** ./src/filters.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/filters.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.css */ \"./src/nav.css\");\n/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nav_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/filters.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_filters_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _create_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-elements.js */ \"./src/create-elements.js\");\n\n\n\n\nlet state = {\n  items: [],\n  price_sorted: [\"price_up\", false],\n  //[last sorted, is array already sorted]\n  title_sorted: false,\n  available_sorted: false\n};\nconst available = document.querySelector(\"#available\");\nconst price_up = document.querySelector(\"#price_up\");\nconst price_down = document.querySelector(\"#price_down\");\nconst title_sort = document.querySelector(\"#title_sort\");\nconst list = document.querySelector(\"#items_placeholder\");\n\nfunction setArray() {\n  let elem = {};\n\n  for (let i = 0; i < 10; i++) {\n    elem.id = i;\n    i % 2 === 0 ? elem.title = \"Стул\" : elem.title = \"Табуретка\";\n    elem.image = \"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\";\n    elem.price = Math.trunc(Math.random(0, 100) * 1000);\n    if (i % 2 == 0) elem.available = true;else elem.available = false;\n    elem.descr = \"Cупер стул\";\n    state.items[i] = { ...elem\n    };\n  }\n}\n\nfunction handlePriceSort(e) {\n  const element = document.getElementById(e.currentTarget.id);\n\n  if (e.currentTarget.classList.contains(\"active\")) {\n    element.classList.remove(\"active\");\n    console.log(state.items);\n    sortobj(state, \"id\");\n    state.price_sorted[1] = false;\n  } else if (state.price_sorted[1] === false) {\n    sortobj(state, \"price\");\n\n    if (e.currentTarget.id === \"price_up\") {\n      price_up.classList.add(\"active\");\n      if (price_down.classList.contains(\"active\")) price_down.classList.remove(\"active\");\n      state.price_sorted = [\"price_up\", true];\n    } else {\n      price_down.classList.add(\"active\");\n      if (price_up.classList.contains(\"active\")) price_up.classList.remove(\"active\");\n      state.items.reverse();\n      state.price_sorted = [\"price_down\", true];\n    }\n  }\n\n  list.dispatchEvent(new CustomEvent(\"itemsUpdated\"));\n}\n\nfunction handleAvailableSort(e) {\n  if (state.available_sorted === false) {\n    available.classList.add(\"active\");\n    state.available_sorted = true;\n    sortobj(state, \"available\");\n  } else {\n    state.available_sorted = false;\n    sortobj(state, \"id\");\n    available.classList.remove(\"active\");\n  }\n\n  list.dispatchEvent(new CustomEvent(\"itemsUpdated\"));\n}\n\nfunction handleTitleSort(e) {\n  if (state.title_sorted === false) {\n    title_sort.classList.add(\"active\");\n    state.title_sorted = true;\n    sortobj(state, \"title\");\n  } else {\n    title_sort.classList.remove(\"active\");\n    sortobj(state, \"id\");\n    state.title_sorted = false;\n  }\n\n  list.dispatchEvent(new CustomEvent(\"itemsUpdated\"));\n}\n\nfunction displayElement() {\n  const list = document.querySelector(\"#items_placeholder\");\n  list.innerHTML = \"\";\n  if (list.innerHTML != \"\") list.innerHTML = \"\";\n  const html = Object(_create_elements_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state.items);\n  list.insertAdjacentHTML(\"beforeEnd\", html);\n}\n\nfunction savingItemsToLocalStorage() {\n  localStorage.setItem(\"state\", JSON.stringify(state.items));\n}\n\nfunction toggle(obj) {\n  var el = document.getElementById(obj);\n\n  if (el.style.display != \"none\") {\n    el.style.display = \"none\";\n  } else {\n    el.style.display = \"\";\n  }\n}\n\nfunction sortobj(data, type) {\n  const result = data.items.sort(function (a, b) {\n    if (type === \"available\") return b[type] - a[type];\n    if (type === \"title\") return a[type].toLowerCase() - b[type].toLowerCase();\n    return a[type] - b[type];\n  });\n  return result;\n}\n\navailable.addEventListener(\"click\", handleAvailableSort);\nprice_up.addEventListener(\"click\", handlePriceSort);\nprice_down.addEventListener(\"click\", handlePriceSort);\ntitle_sort.addEventListener(\"click\", handleTitleSort);\nlist.addEventListener(\"itemsUpdated\", displayElement);\nlist.addEventListener(\"itemsUpdated\", savingItemsToLocalStorage);\n\nwindow.onload = function () {\n  setArray();\n  displayElement(state.items);\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/nav.css":
/*!*********************!*\
  !*** ./src/nav.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./nav.css */ \"./node_modules/css-loader/dist/cjs.js!./src/nav.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/nav.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });