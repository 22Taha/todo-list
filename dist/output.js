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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html,body{\\n    min-height: 100%;\\n    background-color: #425765;\\n    width: 80%;\\n    margin:auto;\\n    position: relative;\\n    padding: 0;\\n    margin-top: 50px;\\n    text-align: center;\\n}\\n.input{\\n    font-size: 25px;\\n    border-radius: 20px;\\n    padding: 10px;\\n    width: 100%;\\n}\\n.addBtn{\\n    font-size: 25px;\\n    border-radius: 20px;\\n    padding: 10px;\\n    margin-left: 5px;\\n    color: #C8F8EA;\\n    background-color: #43977F;\\n    border: 0px;\\n}\\n.undo_redo{\\n    font-size: 25px;\\n    border-radius: 50%;\\n    height: 3rem;\\n    width: 3rem;\\n    margin-top: 10px;\\n    margin-left: 5px;\\n    color: #C8F8EA;\\n    background-color: #d66449;\\n    border: 0px;\\n}\\n.undo_redo:hover{\\n    color: #D5FAEF;\\n    background-color: #a34331;\\n}\\n.addBtn:hover{\\n    color: #D5FAEF;\\n    background-color: #1D4136;\\n}\\n\\nlabel{\\n    font-size: 20px;\\n    margin-top: 25px;\\n    color: #667374;\\n    margin: 5px;\\n    text-align: left;\\n    float: left;\\n}\\n.taskDiv{\\n    background-color: #eee;\\n    margin-top: 30px;\\n    width: 100%;\\n    padding-left: 5px;\\n    overflow:hidden;\\n    vertical-align: middle;\\n\\n}\\n.removeBtn{\\n    color: #667374;\\n}\\n.removeBtn:hover{\\n    color: white;\\n    background-color: #992823;\\n    border: 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Todo */ \"./src/js/modules/Todo.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOM */ \"./src/js/modules/DOM.js\");\n/* harmony import */ var _modules_undo_redo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/undo_redo */ \"./src/js/modules/undo_redo.js\");\n\n\n\n\n\n\n// get existing todos\nlet data = Object(_modules_undo_redo__WEBPACK_IMPORTED_MODULE_3__[\"todos\"])();\nif(data){\n    Object(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__[\"createItemsStorage\"])(data);\n}\n\n// go back\ndocument.getElementById('backBtn').onclick = function(){\n    data = Object(_modules_undo_redo__WEBPACK_IMPORTED_MODULE_3__[\"back\"])();\n    if(data){\n        Object(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__[\"createItemsStorage\"])(data);\n    }\n}\n\n// go forward\ndocument.getElementById('forwardBtn').onclick = function(){\n    data = Object(_modules_undo_redo__WEBPACK_IMPORTED_MODULE_3__[\"forward\"])();\n    if(data){\n        Object(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__[\"createItemsStorage\"])(data);\n    }\n}\n\n// alerts by Date\nlet dataL = null;\nconst alertPopup = () => {\n    if(data!=null){\n        dataL = JSON.parse(JSON.stringify(data))\n        setInterval(function(){\n            var diff = null;\n            dataL.forEach(element => {\n                if(element.date!=\"\"){\n                    diff = (new Date(Date.now()).getTime() - new Date(element.date).getTime())/1000;\n                    // console.log(diff);\n                    if( diff < 3 && diff > 0)\n                        alert(element.name);\n                }\n            });            \n        }, 1000);\n    }\n}\nalertPopup();\n\n// add task using button\ndocument.getElementById('addBtn').onclick = function(){\n    let task = document.getElementById('task').value;\n    let todo = new _modules_Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task);\n    if(task){\n        todo.date = document.getElementById('date').value;\n        if(document.getElementById('importantCheck').checked){\n            todo.isImportant=true;\n        }\n        Object(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__[\"createTask\"])(todo);\n        Object(_modules_undo_redo__WEBPACK_IMPORTED_MODULE_3__[\"addTask\"])(todo);\n        dataL.push(todo);\n    }\n};\n\n// add task using Enter key on task field\ndocument.getElementById('task').onkeypress = function(event){\n    if(event.keyCode==13){\n        addBtn.onclick();\n    }\n}\n\n// add task using Enter key on date field\ndocument.getElementById('date').onkeypress = function(event){\n    if(event.keyCode==13){\n        addBtn.onclick();\n    }\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/DOM.js":
/*!*******************************!*\
  !*** ./src/js/modules/DOM.js ***!
  \*******************************/
/*! exports provided: createItemsStorage, createTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createItemsStorage\", function() { return createItemsStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony import */ var _undo_redo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./undo_redo */ \"./src/js/modules/undo_redo.js\");\n\n\n\n// create existing tasks in list();\nconst createItemsStorage = (todos) => {\n    document.getElementById('globalDiv').innerHTML= \"\";\n    todos.forEach(todo => {\n        createTask(todo)\n    });\n}\n\n// create task in list \nconst createTask = (todo) => {\n    let taskDiv = document.getElementById('globalDiv');\n    let newChild = document.createElement('li');\n    let important=\"\";\n    let imp = 0;\n    if(todo.isImportant){\n        important = \"<span class=\\\"badge badge-pill badge-danger m-2\\\">Important</span>\"\n    }else{\n        important = \"\";\n    }\n    let color;\n    if(todo.state==\"done\") \n        color = \"success\"; \n    else color = \"primary\";\n        \n    newChild.innerHTML = \"<label>\"+todo.name+\"</label> <span name=\\\"state\\\" class=\\\"badge badge-pill badge-\"+color+\" m-2\\\">\"+todo.state+\"</span>\"+important+\"<button class=\\\"close m-2 rmv float-right\\\">X</button><select class=\\\"custom-select float-right\\\" style=\\\"width:auto;\\\"><option value=\\\"todo\\\" selected>todo</option><option value=\\\"done\\\">done</option></select><span class=\\\"mt-2 mr-1 float-right\\\">\"+todo.date+\"</span>\";\n    \n    if(important == \"\"){\n        newChild.children[3].value = todo.state;\n    }else{\n        newChild.children[4].value = todo.state;\n        imp++;\n    }\n\n    // remove task from todo\n    newChild.children[2+imp].addEventListener('click', function(){\n        Object(_undo_redo__WEBPACK_IMPORTED_MODULE_0__[\"removeTask\"])(this.parentElement.firstChild.textContent)\n        this.parentElement.remove()\n    });\n\n    // change task state\n    newChild.children[3+imp].addEventListener('change', function(){\n        Object(_undo_redo__WEBPACK_IMPORTED_MODULE_0__[\"updateTask\"])(this.parentElement.firstChild.textContent ,this.value)\n        if(this.value==\"done\"){\n            this.parentElement.querySelector('span[name=\"state\"]').classList.remove('badge-primary')\n            this.parentElement.querySelector('span[name=\"state\"]').classList.add('badge-success')\n            this.parentElement.querySelector('span[name=\"state\"]').innerHTML=\"done\"\n        }\n        else{\n            this.parentElement.querySelector('span[name=\"state\"]').classList.remove('badge-success')\n            this.parentElement.querySelector('span[name=\"state\"]').classList.add('badge-primary')\n            this.parentElement.querySelector('span[name=\"state\"]').innerHTML=\"todo\"\n        }\n    });\n    \n    taskDiv.insertBefore(newChild, taskDiv.firstChild);\n    resetFields();\n}\n\n//  reset inputs and fields \nconst resetFields = () => {\n    document.getElementById('task').value='';\n    document.getElementById('importantCheck').checked=false;\n    document.getElementById('date').value = \"\";\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/DOM.js?");

/***/ }),

/***/ "./src/js/modules/Todo.js":
/*!********************************!*\
  !*** ./src/js/modules/Todo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todo; });\n\nclass Todo {\n    \n    constructor(name, isImportant = false, state = \"todo\", date = null){\n        this.name = name;\n        this.isImportant = isImportant;\n        this.state = state;\n        this.date = date;\n    }\n}\n\n//# sourceURL=webpack:///./src/js/modules/Todo.js?");

/***/ }),

/***/ "./src/js/modules/storage.js":
/*!***********************************!*\
  !*** ./src/js/modules/storage.js ***!
  \***********************************/
/*! exports provided: getStorageData, updateLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStorageData\", function() { return getStorageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLocalStorage\", function() { return updateLocalStorage; });\n\n// get data from storage \nconst getStorageData = () => {\n    if(localStorage.getItem(\"storage\")){\n        let data = JSON.parse(localStorage.getItem(\"storage\"));\n        return data;\n    }\n    let empty = {\n        past: [],\n        present: [],\n        futur: []\n    };    \n    localStorage.setItem(\"storage\",JSON.stringify(empty));\n    return empty;\n}\n\n// push element to localStorage\nconst updateLocalStorage = (data) => {\n    localStorage.setItem(\"storage\",JSON.stringify(data));\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/storage.js?");

/***/ }),

/***/ "./src/js/modules/undo_redo.js":
/*!*************************************!*\
  !*** ./src/js/modules/undo_redo.js ***!
  \*************************************/
/*! exports provided: todos, addTask, updateTask, removeTask, back, forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todos\", function() { return todos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTask\", function() { return addTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTask\", function() { return updateTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTask\", function() { return removeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"back\", function() { return back; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forward\", function() { return forward; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/js/modules/storage.js\");\n\n\n// get data from localStorage\nlet data = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getStorageData\"])();\n\n// get todo list\nconst todos = () => {\n    return data.present;\n}\n\n// add changes to history states \nconst updatePast =() => {\n    data.futur = []; \n    data.past.push(JSON.parse(JSON.stringify(data.present)))\n    while(data.past.length > 5)\n        data.past.shift();\n}\n\n// add a todo \nconst addTask = (todo) => {\n    updatePast();\n    data.present.push(todo);\n    Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"updateLocalStorage\"])(data);\n}\n\n// change a todo state \nconst updateTask = (todoName, state) => {\n    updatePast();\n\n    let pos = data.present.map(function(e) { return e.name; }).indexOf(todoName);\n    data.present[pos].state=state;\n    \n    Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"updateLocalStorage\"])(data);\n}\n\n// delete a todo \nconst removeTask = (todoName) => {\n    updatePast();\n\n    let pos = data.present.map(function(e) { return e.name; }).indexOf(todoName);\n    data.present.splice(pos, 1);\n    Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"updateLocalStorage\"])(data);\n}\n\n// go back \nconst back = () => {\n    if(data.past.length > 0){\n        data.futur.push(data.present);\n        data.present = data.past.pop();\n        Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"updateLocalStorage\"])(data);\n        return data.present;\n    }\n    return null;\n}\n\n// go forward \nconst forward = () => {\n    if(data.futur.length > 0){\n        data.past.push(data.present);\n        data.present = data.futur.pop();\n        Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"updateLocalStorage\"])(data);\n        return data.present;\n    }\n    return null;\n}\n\n//# sourceURL=webpack:///./src/js/modules/undo_redo.js?");

/***/ })

/******/ });