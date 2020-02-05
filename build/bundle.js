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
/******/ 	__webpack_require__.p = "./";
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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\r\\n  margin: 0;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  position: relative;\\r\\n  background: white;\\r\\n  border-radius: 5px;\\r\\n  padding: 10px;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.item-container {\\r\\n  max-width: 200px;\\r\\n  height: auto;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 6px;\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.item-container:hover {\\r\\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\n.item {\\r\\n  position: relative;\\r\\n  margin: 10px;\\r\\n}\\r\\n.item-info {\\r\\n  padding: 0;\\r\\n}\\r\\n.item-img {\\r\\n  width: auto;\\r\\n  height: 80px;\\r\\n  margin: 10px;\\r\\n}\\r\\n.item-desc {\\r\\n  margin: 10px;\\r\\n}\\r\\n.item-btn {\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n.cart {\\r\\n  position: relative;\\r\\n  border: 1px solid cornflowerblue;\\r\\n}\\r\\n.cart::after {\\r\\n  content: \\\"0\\\";\\r\\n  position: absolute;\\r\\n  height: 20px;\\r\\n  width: 20px;\\r\\n  top: -15px;\\r\\n  left: 95px;\\r\\n  padding: 5px;\\r\\n  text-align: center;\\r\\n  line-height: 10px;\\r\\n  border-radius: 50%;\\r\\n  background: red;\\r\\n}\\r\\n.cart:hover {\\r\\n  background: red;\\r\\n}\\r\\n\\r\\n.available {\\r\\n  color: green;\\r\\n}\\r\\n.out-of-stock {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n/*  */\\r\\n.pagination {\\r\\n  max-width: 400px;\\r\\n  min-width: 300px;\\r\\n  width: 100%;\\r\\n  display: block;\\r\\n  margin: 0 auto;\\r\\n  position: relative;\\r\\n  background-color: lightgreen;\\r\\n  padding: 20px;\\r\\n}\\r\\n.pagination .tableList {\\r\\n  min-height: 250px;\\r\\n  text-indent: 20px;\\r\\n}\\r\\n.tableList .objectBlock {\\r\\n  position: relative;\\r\\n  background-color: black;\\r\\n  color: white;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n.pageButton {\\r\\n  border: 1px solid black;\\r\\n  padding: 5px;\\r\\n}\\r\\n.clickPageNumber {\\r\\n  background-color: lightgrey;\\r\\n  padding: 5px;\\r\\n  margin-left: 2px;\\r\\n  margin-right: 2px;\\r\\n}\\r\\n.pagination-block {\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n}\\r\\n.pagination-block span {\\r\\n  display: inline-block;\\r\\n}\\r\\n.pagination-block .pageButton {\\r\\n  background-color: grey;\\r\\n  color: white;\\r\\n}\\r\\n.pagination-block span:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n.opacity {\\r\\n  opacity: 0.5;\\r\\n}\\r\\n.outline-none {\\r\\n  outline: none;\\r\\n  user-select: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./products.json":
/*!***********************!*\
  !*** ./products.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":2,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":3,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":4,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":5,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":6,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":7,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":8,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":9,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":10,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":11,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":12,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":13,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":14,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":15,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":16,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":17,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false},{\\\"id\\\":18,\\\"title\\\":\\\"Стул 1\\\",\\\"image\\\":\\\"https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg\\\",\\\"descr\\\":\\\"Супер стул\\\",\\\"price\\\":300,\\\"available\\\":false}]\");\n\n//# sourceURL=webpack:///./products.json?");

/***/ }),

/***/ "./src/create-elements.js":
/*!********************************!*\
  !*** ./src/create-elements.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateElements; });\nfunction CreateElements(data) {\n  const newHTML = Object.keys(data).map(key => `<div\n          class=\"item-container col-sm container-sm d-flex flex-column justify-content-center \"\n          name=\"item\"\n          id='${data[key].id}'\n        >\n          <div class=\"item\">\n            <div class=\"item-info container-sm d-flex justify-content-between\">\n              <span>Код:<span id=\"id\">${data[key].id}</span></span>\n              <span class=\"${data[key].available === true ? \"available\" : \"out-of-stock\"}\" id=\"available\">Наличие</span>\n            </div>\n            <div class=\"d-flex justify-content-center\">\n              <img\n                class=\"item-img\"\n                id=\"img\"\n                src=\"${data[key].image}\"\n                alt=\"item image\"\n              />\n            </div>\n            <div class=\"d-flex justify-content-center\">\n              <h3 class=\"item-title\" id=\"title\">${data[key].title}</h3>\n            </div>\n            <div class=\"item-desc d-flex justify-content-center\" id=\"descr\">\n              <p>${data[key].descr}</p>\n            </div>\n            <div class=\"d-flex flex-row justify-content-between align-items-center\">\n              <div class=\"item-price-container d-flex flex-column justify-content-center\">\n                <span class=\"item-price\" id=\"price\">${data[key].price}$</span>\n              </div>\n              <form class=\"item-form\" action=\"\" onsubmit=\"\">\n                <button class=\"cart item-btn btn btn-primary\" id=\"${data[key].id}\" type=\"submit\">\n                  В Корзину\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>`);\n  const list = document.querySelector(\"#items_placeholder\");\n  list.insertAdjacentHTML(\"beforeEnd\", newHTML);\n  return true;\n}\n\n//# sourceURL=webpack:///./src/create-elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.css */ \"./src/nav.css\");\n/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nav_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _create_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-elements.js */ \"./src/create-elements.js\");\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.json */ \"./products.json\");\nvar _products_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../products.json */ \"./products.json\", 1);\n\n\n\n\n\n(function App() {\n  const items = {\n    products: _products_json__WEBPACK_IMPORTED_MODULE_3__\n  };\n  const data = items.products;\n  Object(_create_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

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