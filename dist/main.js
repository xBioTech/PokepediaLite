/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #FAF9F6;
}

#content .header {
  background-color: #FF0000;
  color: #FAF9F6;
  border: solid 2px black;
}
#content .header .header-navigation {
  display: flex;
  justify-content: space-between;
}
#content .header .header-navigation .hamburger-icon, #content .header .header-navigation .magnifying-glass-icon {
  max-width: 10%;
  cursor: pointer;
}
#content .searchbar-mobile {
  display: flex;
  justify-content: center;
  align-items: center;
}
#content .searchbar-mobile .search-bar-mobile {
  background-color: #F7F7F7;
  outline: none;
  border: 1px solid #D1D5DB;
  border-radius: 25px;
  padding: 1em 3em;
  margin-top: 1em;
}
#content .menu-div {
  background-color: white;
  top: 0;
  width: 55%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  animation-name: menu-div-sidebar;
  animation-duration: 0.5s;
  overflow: scroll;
}
#content .menu-div .menu-ul {
  display: flex;
  flex-direction: column;
}
#content .menu-div .menu-ul .menu-div-headline {
  padding: 1em 1em;
  border-bottom: 1px solid black;
}
#content .menu-div li {
  padding: 1em 1em;
  cursor: pointer;
}
#content .menu-div li:hover {
  background-color: #FF0000;
  border: solid 2px black;
}
#content .menu-div a {
  text-decoration: none;
  color: black;
}
@keyframes menu-div-sidebar {
  0% {
    left: -50%;
  }
  100% {
    left: 0;
  }
}
#content .main-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  padding: 1em;
}
#content .main-content .pokemon-card {
  background-color: black;
  width: 120px;
  height: 120px;
  padding: 20px;
  align-self: center;
  justify-self: center;
}

@media only screen and (min-width: 1200px) {
  #content .header .header-navigation {
    align-items: center;
  }
  #content .header .header-navigation .hamburger-icon {
    max-width: 3%;
  }
  #content .header .header-navigation .search-bar {
    background-color: #F7F7F7;
    outline: none;
    border: 1px solid #D1D5DB;
    border-radius: 25px;
    padding: 1em 2em;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AAHJ;;AAMA;EACI,yBAXO;AAQX;;AAOI;EACI,yBAfO;EAgBP,cAjBG;EAkBH,uBAAA;AAJR;AAKQ;EACI,aAAA;EACA,8BAAA;AAHZ;AAIY;EACI,cAAA;EACA,eAAA;AAFhB;AAMI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAJR;AAKQ;EACI,yBA/BG;EAgCH,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;AAHZ;AAMI;EACI,uBAAA;EACA,MAAA;EACA,UAAA;EACA,aAAA;EACA,eAAA;EACA,aAAA;EACA,gCAAA;EACA,wBAAA;EACA,gBAAA;AAJR;AAMQ;EACI,aAAA;EACA,sBAAA;AAJZ;AAMY;EACI,gBAAA;EACA,8BAAA;AAJhB;AAOQ;EACI,gBAAA;EACA,eAAA;AALZ;AAMY;EACI,yBAhED;EAiEC,uBAAA;AAJhB;AAQQ;EACI,qBAAA;EACA,YAAA;AANZ;AAUI;EACI;IACI,UAAA;EARV;EAWM;IACI,OAAA;EATV;AACF;AAWI;EACI,aAAA;EACA,2DAAA;EACA,mCAAA;EACA,YAAA;AATR;AAUQ;EACI,uBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,oBAAA;AARZ;;AAaA;EAGY;IACI,mBAAA;EAZd;EAac;IACI,aAAA;EAXlB;EAac;IACI,yBA5GL;IA6GK,aAAA;IACA,yBAAA;IACA,mBAAA;IACA,gBAAA;EAXlB;AACF","sourcesContent":["$bg-color: #FAF9F6;\n$header-color: #FF0000;\n$searchbar-bg: #F7F7F7;\n\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    background-color: $bg-color;\n}\n\n#content{\n    .header{\n        background-color: $header-color;\n        color: $bg-color;\n        border: solid 2px black;\n        .header-navigation{\n            display: flex;\n            justify-content: space-between;\n            .hamburger-icon, .magnifying-glass-icon{\n                max-width: 10%;\n                cursor: pointer;\n            }\n        }\n    }\n    .searchbar-mobile{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        .search-bar-mobile{\n            background-color: $searchbar-bg;\n            outline: none;\n            border: 1px solid #D1D5DB;\n            border-radius: 25px;\n            padding: 1em 3em;\n            margin-top: 1em;\n        }\n    }\n    .menu-div{\n        background-color: white;\n        top: 0;\n        width: 55%;\n        height: 100vh;\n        position: fixed;\n        z-index: 1000;\n        animation-name: menu-div-sidebar;\n        animation-duration: 0.5s;\n        overflow: scroll;\n\n        .menu-ul{\n            display: flex;\n            flex-direction: column;\n\n            .menu-div-headline{\n                padding: 1em 1em;\n                border-bottom: 1px solid black;\n            }\n        }\n        li{\n            padding: 1em 1em;\n            cursor: pointer;\n            &:hover{\n                background-color: $header-color;\n                border: solid 2px black;\n            }\n        }\n        \n        a{\n            text-decoration: none;\n            color: black;\n        }\n    }\n\n    @keyframes menu-div-sidebar{\n        0% {\n            left: -50%;\n        }\n\n        100%{\n            left: 0;\n        }\n    }\n    .main-content{\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n        grid-auto-rows: minmax(150px, auto);\n        padding: 1em;\n        .pokemon-card{\n            background-color: black;\n            width: 120px;\n            height: 120px;\n            padding: 20px;\n            align-self: center;\n            justify-self: center;\n        }\n    }\n}\n\n@media only screen and (min-width: 1200px){\n    #content{\n        .header{\n            .header-navigation{\n                align-items: center;\n                .hamburger-icon{\n                    max-width: 3%;\n                }\n                .search-bar{\n                    background-color: $searchbar-bg;\n                    outline: none;\n                    border: 1px solid #D1D5DB;\n                    border-radius: 25px;\n                    padding: 1em 2em;\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/menu.svg */ "./src/assets/menu.svg");


function createHeaderComponent() {
  const contentDiv = document.getElementById('content');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const navigationDiv = document.createElement('div');
  navigationDiv.classList.add('header-navigation');

  headerDiv.appendChild(navigationDiv);

  const hamburgerIcon = new Image();
  hamburgerIcon.src = _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__;
  hamburgerIcon.classList.add('hamburger-icon');

  navigationDiv.appendChild(hamburgerIcon);

  const headlineElement = document.createElement('h1');
  headlineElement.classList.add('headline');
  headlineElement.textContent = 'PokepediaLite';

  navigationDiv.appendChild(headlineElement);

  contentDiv.appendChild(headerDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeaderComponent);


/***/ }),

/***/ "./src/components/mainContent.js":
/*!***************************************!*\
  !*** ./src/components/mainContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderMainContent(apiDataAll, apiDataAllDetails) {
  const contentDiv = document.getElementById('content');

  const mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('main-content');

  apiDataAll.results.forEach((pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonDetails = apiDataAllDetails.find(detail => detail.name === pokemon.name);

    if(pokemonDetails && pokemonDetails.sprites && pokemonDetails.sprites.front_default){
      const img = new Image();
      img.src = pokemonDetails.sprites.front_default;
      pokemonCard.appendChild(img);
    
      mainContentDiv.appendChild(pokemonCard);
    } else {
      console.warn(`Sprite not found ${pokemon.name}`);
    }
  });



  contentDiv.appendChild(mainContentDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMainContent);


/***/ }),

/***/ "./src/components/renderHamburgerIconMenu.js":
/*!***************************************************!*\
  !*** ./src/components/renderHamburgerIconMenu.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderHamburgerIconMenu() {
  const contentDiv = document.getElementById('content');

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');

  const ul = document.createElement('ul');
  ul.classList.add('menu-ul');

  menuDiv.appendChild(ul);

  const hElement = document.createElement('h4');
  hElement.textContent = 'Filter for Pokemon Type';
  hElement.classList.add('menu-div-headline');
  ul.appendChild(hElement);

  const li1 = document.createElement('li');
  ul.appendChild(li1);
  const a1 = document.createElement('a');
  a1.href = '#';
  a1.textContent = 'normal';
  li1.appendChild(a1);

  const li2 = document.createElement('li');
  ul.appendChild(li2);
  const a2 = document.createElement('a');
  a2.href = '#';
  a2.textContent = 'fighting';
  li2.appendChild(a2);

  const li3 = document.createElement('li');
  ul.appendChild(li3);
  const a3 = document.createElement('a');
  a3.href = '#';
  a3.textContent = 'flying';
  li3.appendChild(a3);

  const li4 = document.createElement('li');
  ul.appendChild(li4);
  const a4 = document.createElement('a');
  a4.href = '#';
  a4.textContent = 'poison';
  li4.appendChild(a4);

  const li5 = document.createElement('li');
  ul.appendChild(li5);
  const a5 = document.createElement('a');
  a5.href = '#';
  a5.textContent = 'ground';
  li5.appendChild(a5);

  const li6 = document.createElement('li');
  ul.appendChild(li6);
  const a6 = document.createElement('a');
  a6.href = '#';
  a6.textContent = 'rock';
  li6.appendChild(a6);

  const li7 = document.createElement('li');
  ul.appendChild(li7);
  const a7 = document.createElement('a');
  a7.href = '#';
  a7.textContent = 'bug';
  li7.appendChild(a7);

  const li8 = document.createElement('li');
  ul.appendChild(li8);
  const a8 = document.createElement('a');
  a8.href = '#';
  a8.textContent = 'ghost';
  li8.appendChild(a8);

  const li9 = document.createElement('li');
  ul.appendChild(li9);
  const a9 = document.createElement('a');
  a9.href = '#';
  a9.textContent = 'steel';
  li9.appendChild(a9);

  const li10 = document.createElement('li');
  ul.appendChild(li10);
  const a10 = document.createElement('a');
  a10.href = '#';
  a10.textContent = 'fire';
  li10.appendChild(a10);

  const li11 = document.createElement('li');
  ul.appendChild(li11);
  const a11 = document.createElement('a');
  a11.href = '#';
  a11.textContent = 'water';
  li11.appendChild(a11);

  const li12 = document.createElement('li');
  ul.appendChild(li12);
  const a12 = document.createElement('a');
  a12.href = '#';
  a12.textContent = 'grass';
  li12.appendChild(a12);

  const li13 = document.createElement('li');
  ul.appendChild(li13);
  const a13 = document.createElement('a');
  a13.href = '#';
  a13.textContent = 'electric';
  li13.appendChild(a13);

  const li14 = document.createElement('li');
  ul.appendChild(li14);
  const a14 = document.createElement('a');
  a14.href = '#';
  a14.textContent = 'psychic';
  li14.appendChild(a14);

  const li15 = document.createElement('li');
  ul.appendChild(li15);
  const a15 = document.createElement('a');
  a15.href = '#';
  a15.textContent = 'ice';
  li15.appendChild(a15);

  const li16 = document.createElement('li');
  ul.appendChild(li16);
  const a16 = document.createElement('a');
  a16.href = '#';
  a16.textContent = 'dragon';
  li16.appendChild(a16);

  const li17 = document.createElement('li');
  ul.appendChild(li17);
  const a17 = document.createElement('a');
  a17.href = '#';
  a17.textContent = 'dark';
  li17.appendChild(a17);

  const li18 = document.createElement('li');
  ul.appendChild(li18);
  const a18 = document.createElement('a');
  a18.href = '#';
  a18.textContent = 'fairy';
  li18.appendChild(a18);

  const li19 = document.createElement('li');
  ul.appendChild(li19);
  const a19 = document.createElement('a');
  a19.href = '#';
  a19.textContent = 'shadow';
  li19.appendChild(a19);

  contentDiv.appendChild(menuDiv);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHamburgerIconMenu);


/***/ }),

/***/ "./src/components/searchBarDivForMobile.js":
/*!*************************************************!*\
  !*** ./src/components/searchBarDivForMobile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createSearchBarDivForMobile() {
  const contentDiv = document.getElementById('content');

  const searchBarDiv = document.createElement('div');
  searchBarDiv.classList.add('searchbar-mobile');

  contentDiv.appendChild(searchBarDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSearchBarDivForMobile);


/***/ }),

/***/ "./src/components/searchBarIconForMobile.js":
/*!**************************************************!*\
  !*** ./src/components/searchBarIconForMobile.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_magnify_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/magnify.svg */ "./src/assets/magnify.svg");


function createSearchBarIconForMobile() {
  const headerNavigationDiv = document.querySelector('.header-navigation');

  const magnifyingGlassIcon = new Image();
  magnifyingGlassIcon.src = _assets_magnify_svg__WEBPACK_IMPORTED_MODULE_0__;
  magnifyingGlassIcon.classList.add('magnifying-glass-icon');

  headerNavigationDiv.appendChild(magnifyingGlassIcon);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSearchBarIconForMobile);


/***/ }),

/***/ "./src/functions/eventHandlers.js":
/*!****************************************!*\
  !*** ./src/functions/eventHandlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachHamburgerNavigationMenu: () => (/* binding */ attachHamburgerNavigationMenu),
/* harmony export */   attachSearchBarEventListenerForMobile: () => (/* binding */ attachSearchBarEventListenerForMobile)
/* harmony export */ });
/* harmony import */ var _components_renderHamburgerIconMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderHamburgerIconMenu */ "./src/components/renderHamburgerIconMenu.js");


function attachSearchBarEventListenerForMobile() {
  const searchBarDiv = document.querySelector('.searchbar-mobile');
  const searchBarIcon = document.querySelector('.magnifying-glass-icon');

  searchBarIcon.addEventListener('click', () => {
    const inputField = document.createElement('input');
    inputField.type = 'search';
    inputField.placeholder = 'Search for Pokemon';
    inputField.classList.add('search-bar-mobile');
    searchBarDiv.appendChild(inputField);
  });
}

function attachHamburgerNavigationMenu() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');

  hamburgerIcon.addEventListener('click', () => {
    (0,_components_renderHamburgerIconMenu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
}




/***/ }),

/***/ "./src/functions/fetchAllPokemons.js":
/*!*******************************************!*\
  !*** ./src/functions/fetchAllPokemons.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function fetchAllPokemons() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', { mode: 'cors' });

    if (!response.ok) {
      throw new Error('something went wrong');
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.log(error.message);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAllPokemons);


/***/ }),

/***/ "./src/functions/fetchPokemonDetails.js":
/*!**********************************************!*\
  !*** ./src/functions/fetchPokemonDetails.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setApiDataAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setApiDataAll */ "./src/functions/setApiDataAll.js");


async function fetchPokemonDetails(){
    const data = (0,_setApiDataAll__WEBPACK_IMPORTED_MODULE_0__.getPokemonDataAll)();
    
    const pokemonPromises = data.results.map(async pokemon =>{
        try {
            const pokemonResponse = await fetch(pokemon.url);

            if(!pokemonResponse.ok){
                throw new Error('something went wrong');
            }

            const pokemonResponseData = await pokemonResponse.json();
            return pokemonResponseData;
        }
        catch (error) {
            console.log(error.message);
          }
    });
    return Promise.all(pokemonPromises);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchPokemonDetails);

/***/ }),

/***/ "./src/functions/firstPageLoad.js":
/*!****************************************!*\
  !*** ./src/functions/firstPageLoad.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _fetchAllPokemons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchAllPokemons */ "./src/functions/fetchAllPokemons.js");
/* harmony import */ var _components_searchBarIconForMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/searchBarIconForMobile */ "./src/components/searchBarIconForMobile.js");
/* harmony import */ var _renderSearchBarDesktop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderSearchBarDesktop */ "./src/functions/renderSearchBarDesktop.js");
/* harmony import */ var _eventHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventHandlers */ "./src/functions/eventHandlers.js");
/* harmony import */ var _components_searchBarDivForMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/searchBarDivForMobile */ "./src/components/searchBarDivForMobile.js");
/* harmony import */ var _components_mainContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/mainContent */ "./src/components/mainContent.js");
/* harmony import */ var _setApiDataAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setApiDataAll */ "./src/functions/setApiDataAll.js");
/* harmony import */ var _fetchPokemonDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetchPokemonDetails */ "./src/functions/fetchPokemonDetails.js");










async function firstPageLoad() {
  (0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.attachHamburgerNavigationMenu)();
  if (window.matchMedia('(max-width: 767px)').matches) {
    (0,_components_searchBarIconForMobile__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_components_searchBarDivForMobile__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.attachSearchBarEventListenerForMobile)();
  } else {
    (0,_renderSearchBarDesktop__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
  const apiDataAll = await (0,_fetchAllPokemons__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_setApiDataAll__WEBPACK_IMPORTED_MODULE_7__.setPokemonDataAll)(apiDataAll);
  const apiDataAllDetails = await (0,_fetchPokemonDetails__WEBPACK_IMPORTED_MODULE_8__["default"])();
  console.log(apiDataAll);
  console.log(apiDataAllDetails);
  (0,_components_mainContent__WEBPACK_IMPORTED_MODULE_6__["default"])(apiDataAll, apiDataAllDetails);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstPageLoad);


/***/ }),

/***/ "./src/functions/renderSearchBarDesktop.js":
/*!*************************************************!*\
  !*** ./src/functions/renderSearchBarDesktop.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderSearchBarDesktop() {
  const headerNavigationDiv = document.querySelector('.header-navigation');

  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.placeholder = 'Search for Pokemon';
  searchInput.classList.add('search-bar');

  headerNavigationDiv.appendChild(searchInput);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSearchBarDesktop);


/***/ }),

/***/ "./src/functions/setApiDataAll.js":
/*!****************************************!*\
  !*** ./src/functions/setApiDataAll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPokemonDataAll: () => (/* binding */ getPokemonDataAll),
/* harmony export */   setPokemonDataAll: () => (/* binding */ setPokemonDataAll)
/* harmony export */ });
let pokemonDataAll = null;

function setPokemonDataAll(data) {
    pokemonDataAll = data;
}

function getPokemonDataAll(){
    return pokemonDataAll;
}





/***/ }),

/***/ "./src/assets/magnify.svg":
/*!********************************!*\
  !*** ./src/assets/magnify.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c856f2b7b2fa83e37229.svg";

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "093c72912e6a9533ada1.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _functions_firstPageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/firstPageLoad */ "./src/functions/firstPageLoad.js");




(0,_functions_firstPageLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsMkJBQTJCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUWTs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixnREFBa0I7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSw0QkFBNEIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZ0M7O0FBRTVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksK0VBQXVCO0FBQzNCLEdBQUc7QUFDSDs7QUFFZ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCaEY7QUFDQTtBQUNBLDhGQUE4RixjQUFjOztBQUU1RztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJvQjs7QUFFcEQ7QUFDQSxpQkFBaUIsaUVBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ1QjtBQUNQO0FBQzhCO0FBQ2xCO0FBQ3lDO0FBQ3pCO0FBQ3BCO0FBQ047QUFDSTs7QUFFeEQ7QUFDQSxFQUFFLDhEQUFxQjtBQUN2QixFQUFFLDZFQUE2QjtBQUMvQjtBQUNBLElBQUksOEVBQTRCO0FBQ2hDLElBQUksNkVBQTJCO0FBQy9CLElBQUkscUZBQXFDO0FBQ3pDLElBQUk7QUFDSixJQUFJLG1FQUFzQjtBQUMxQjtBQUNBLDJCQUEyQiw2REFBZ0I7QUFDM0MsRUFBRSxpRUFBaUI7QUFDbkIsa0NBQWtDLGdFQUFtQjtBQUNyRDtBQUNBO0FBQ0EsRUFBRSxtRUFBaUI7QUFDbkI7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNCN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLHNCQUFzQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWHRDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVjdDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNnQzs7O0FBR3RELG9FQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL3NyYy9jb21wb25lbnRzL21haW5Db250ZW50LmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvY29tcG9uZW50cy9yZW5kZXJIYW1idXJnZXJJY29uTWVudS5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoQmFyRGl2Rm9yTW9iaWxlLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvY29tcG9uZW50cy9zZWFyY2hCYXJJY29uRm9yTW9iaWxlLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvZnVuY3Rpb25zL2V2ZW50SGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL3NyYy9mdW5jdGlvbnMvZmV0Y2hBbGxQb2tlbW9ucy5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vc3JjL2Z1bmN0aW9ucy9mZXRjaFBva2Vtb25EZXRhaWxzLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvZnVuY3Rpb25zL2ZpcnN0UGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL3NyYy9mdW5jdGlvbnMvcmVuZGVyU2VhcmNoQmFyRGVza3RvcC5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vc3JjL2Z1bmN0aW9ucy9zZXRBcGlEYXRhQWxsLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGOUY2O1xufVxuXG4jY29udGVudCAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbiAgY29sb3I6ICNGQUY5RjY7XG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xufVxuI2NvbnRlbnQgLmhlYWRlciAuaGVhZGVyLW5hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4jY29udGVudCAuaGVhZGVyIC5oZWFkZXItbmF2aWdhdGlvbiAuaGFtYnVyZ2VyLWljb24sICNjb250ZW50IC5oZWFkZXIgLmhlYWRlci1uYXZpZ2F0aW9uIC5tYWduaWZ5aW5nLWdsYXNzLWljb24ge1xuICBtYXgtd2lkdGg6IDEwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvbnRlbnQgLnNlYXJjaGJhci1tb2JpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNjb250ZW50IC5zZWFyY2hiYXItbW9iaWxlIC5zZWFyY2gtYmFyLW1vYmlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQ1REI7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDFlbSAzZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbiNjb250ZW50IC5tZW51LWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgYW5pbWF0aW9uLW5hbWU6IG1lbnUtZGl2LXNpZGViYXI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbiNjb250ZW50IC5tZW51LWRpdiAubWVudS11bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jY29udGVudCAubWVudS1kaXYgLm1lbnUtdWwgLm1lbnUtZGl2LWhlYWRsaW5lIHtcbiAgcGFkZGluZzogMWVtIDFlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuI2NvbnRlbnQgLm1lbnUtZGl2IGxpIHtcbiAgcGFkZGluZzogMWVtIDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvbnRlbnQgLm1lbnUtZGl2IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbiAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XG59XG4jY29udGVudCAubWVudS1kaXYgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuQGtleWZyYW1lcyBtZW51LWRpdi1zaWRlYmFyIHtcbiAgMCUge1xuICAgIGxlZnQ6IC01MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuI2NvbnRlbnQgLm1haW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDE1MHB4LCBhdXRvKTtcbiAgcGFkZGluZzogMWVtO1xufVxuI2NvbnRlbnQgLm1haW4tY29udGVudCAucG9rZW1vbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgI2NvbnRlbnQgLmhlYWRlciAuaGVhZGVyLW5hdmlnYXRpb24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgI2NvbnRlbnQgLmhlYWRlciAuaGVhZGVyLW5hdmlnYXRpb24gLmhhbWJ1cmdlci1pY29uIHtcbiAgICBtYXgtd2lkdGg6IDMlO1xuICB9XG4gICNjb250ZW50IC5oZWFkZXIgLmhlYWRlci1uYXZpZ2F0aW9uIC5zZWFyY2gtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QxRDVEQjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0kseUJBWE87QUFRWDs7QUFPSTtFQUNJLHlCQWZPO0VBZ0JQLGNBakJHO0VBa0JILHVCQUFBO0FBSlI7QUFLUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUhaO0FBSVk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUZoQjtBQU1JO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQUtRO0VBQ0kseUJBL0JHO0VBZ0NILGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSFo7QUFNSTtFQUNJLHVCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU1RO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBSlo7QUFNWTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7QUFKaEI7QUFPUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUxaO0FBTVk7RUFDSSx5QkFoRUQ7RUFpRUMsdUJBQUE7QUFKaEI7QUFRUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQU5aO0FBVUk7RUFDSTtJQUNJLFVBQUE7RUFSVjtFQVdNO0lBQ0ksT0FBQTtFQVRWO0FBQ0Y7QUFXSTtFQUNJLGFBQUE7RUFDQSwyREFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtBQVRSO0FBVVE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFSWjs7QUFhQTtFQUdZO0lBQ0ksbUJBQUE7RUFaZDtFQWFjO0lBQ0ksYUFBQTtFQVhsQjtFQWFjO0lBQ0kseUJBNUdMO0lBNkdLLGFBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFYbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmctY29sb3I6ICNGQUY5RjY7XFxuJGhlYWRlci1jb2xvcjogI0ZGMDAwMDtcXG4kc2VhcmNoYmFyLWJnOiAjRjdGN0Y3O1xcblxcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgLmhlYWRlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItY29sb3I7XFxuICAgICAgICBjb2xvcjogJGJnLWNvbG9yO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgICAgICAuaGVhZGVyLW5hdmlnYXRpb257XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgLmhhbWJ1cmdlci1pY29uLCAubWFnbmlmeWluZy1nbGFzcy1pY29ue1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwJTtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuc2VhcmNoYmFyLW1vYmlsZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAuc2VhcmNoLWJhci1tb2JpbGV7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlYXJjaGJhci1iZztcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQ1REI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gM2VtO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAubWVudS1kaXZ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiA1NSU7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBtZW51LWRpdi1zaWRlYmFyO1xcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG5cXG4gICAgICAgIC5tZW51LXVse1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgICAgICAubWVudS1kaXYtaGVhZGxpbmV7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAxZW07XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gMWVtO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWNvbG9yO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIGF7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIG1lbnUtZGl2LXNpZGViYXJ7XFxuICAgICAgICAwJSB7XFxuICAgICAgICAgICAgbGVmdDogLTUwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDEwMCV7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAubWFpbi1jb250ZW50e1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxNTBweCwgYXV0byk7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICAucG9rZW1vbi1jYXJke1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcXG4gICAgI2NvbnRlbnR7XFxuICAgICAgICAuaGVhZGVye1xcbiAgICAgICAgICAgIC5oZWFkZXItbmF2aWdhdGlvbntcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgLmhhbWJ1cmdlci1pY29ue1xcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzJTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc2VhcmNoLWJhcntcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWFyY2hiYXItYmc7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QxRDVEQjtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW0gMmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBoYW1idXJnZXJTdmcgZnJvbSAnLi4vYXNzZXRzL21lbnUuc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyQ29tcG9uZW50KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IG5hdmlnYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2aWdhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbmF2aWdhdGlvbicpO1xuXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uRGl2KTtcblxuICBjb25zdCBoYW1idXJnZXJJY29uID0gbmV3IEltYWdlKCk7XG4gIGhhbWJ1cmdlckljb24uc3JjID0gaGFtYnVyZ2VyU3ZnO1xuICBoYW1idXJnZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1pY29uJyk7XG5cbiAgbmF2aWdhdGlvbkRpdi5hcHBlbmRDaGlsZChoYW1idXJnZXJJY29uKTtcblxuICBjb25zdCBoZWFkbGluZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkbGluZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGxpbmUnKTtcbiAgaGVhZGxpbmVFbGVtZW50LnRleHRDb250ZW50ID0gJ1Bva2VwZWRpYUxpdGUnO1xuXG4gIG5hdmlnYXRpb25EaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmVFbGVtZW50KTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlckNvbXBvbmVudDtcbiIsImZ1bmN0aW9uIHJlbmRlck1haW5Db250ZW50KGFwaURhdGFBbGwsIGFwaURhdGFBbGxEZXRhaWxzKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Db250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gIGFwaURhdGFBbGwucmVzdWx0cy5mb3JFYWNoKChwb2tlbW9uKSA9PiB7XG4gICAgY29uc3QgcG9rZW1vbkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb2tlbW9uQ2FyZC5jbGFzc0xpc3QuYWRkKCdwb2tlbW9uLWNhcmQnKTtcblxuICAgIGNvbnN0IHBva2Vtb25EZXRhaWxzID0gYXBpRGF0YUFsbERldGFpbHMuZmluZChkZXRhaWwgPT4gZGV0YWlsLm5hbWUgPT09IHBva2Vtb24ubmFtZSk7XG5cbiAgICBpZihwb2tlbW9uRGV0YWlscyAmJiBwb2tlbW9uRGV0YWlscy5zcHJpdGVzICYmIHBva2Vtb25EZXRhaWxzLnNwcml0ZXMuZnJvbnRfZGVmYXVsdCl7XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBwb2tlbW9uRGV0YWlscy5zcHJpdGVzLmZyb250X2RlZmF1bHQ7XG4gICAgICBwb2tlbW9uQ2FyZC5hcHBlbmRDaGlsZChpbWcpO1xuICAgIFxuICAgICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocG9rZW1vbkNhcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oYFNwcml0ZSBub3QgZm91bmQgJHtwb2tlbW9uLm5hbWV9YCk7XG4gICAgfVxuICB9KTtcblxuXG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluQ29udGVudERpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1haW5Db250ZW50O1xuIiwiZnVuY3Rpb24gcmVuZGVySGFtYnVyZ2VySWNvbk1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWRpdicpO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwuY2xhc3NMaXN0LmFkZCgnbWVudS11bCcpO1xuXG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIGNvbnN0IGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgaEVsZW1lbnQudGV4dENvbnRlbnQgPSAnRmlsdGVyIGZvciBQb2tlbW9uIFR5cGUnO1xuICBoRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWRpdi1oZWFkbGluZScpO1xuICB1bC5hcHBlbmRDaGlsZChoRWxlbWVudCk7XG5cbiAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExLmhyZWYgPSAnIyc7XG4gIGExLnRleHRDb250ZW50ID0gJ25vcm1hbCc7XG4gIGxpMS5hcHBlbmRDaGlsZChhMSk7XG5cbiAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEyLmhyZWYgPSAnIyc7XG4gIGEyLnRleHRDb250ZW50ID0gJ2ZpZ2h0aW5nJztcbiAgbGkyLmFwcGVuZENoaWxkKGEyKTtcblxuICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICBjb25zdCBhMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTMuaHJlZiA9ICcjJztcbiAgYTMudGV4dENvbnRlbnQgPSAnZmx5aW5nJztcbiAgbGkzLmFwcGVuZENoaWxkKGEzKTtcblxuICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTQpO1xuICBjb25zdCBhNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTQuaHJlZiA9ICcjJztcbiAgYTQudGV4dENvbnRlbnQgPSAncG9pc29uJztcbiAgbGk0LmFwcGVuZENoaWxkKGE0KTtcblxuICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTUpO1xuICBjb25zdCBhNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTUuaHJlZiA9ICcjJztcbiAgYTUudGV4dENvbnRlbnQgPSAnZ3JvdW5kJztcbiAgbGk1LmFwcGVuZENoaWxkKGE1KTtcblxuICBjb25zdCBsaTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTYpO1xuICBjb25zdCBhNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTYuaHJlZiA9ICcjJztcbiAgYTYudGV4dENvbnRlbnQgPSAncm9jayc7XG4gIGxpNi5hcHBlbmRDaGlsZChhNik7XG5cbiAgY29uc3QgbGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGk3KTtcbiAgY29uc3QgYTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGE3LmhyZWYgPSAnIyc7XG4gIGE3LnRleHRDb250ZW50ID0gJ2J1Zyc7XG4gIGxpNy5hcHBlbmRDaGlsZChhNyk7XG5cbiAgY29uc3QgbGk4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGk4KTtcbiAgY29uc3QgYTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGE4LmhyZWYgPSAnIyc7XG4gIGE4LnRleHRDb250ZW50ID0gJ2dob3N0JztcbiAgbGk4LmFwcGVuZENoaWxkKGE4KTtcblxuICBjb25zdCBsaTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTkpO1xuICBjb25zdCBhOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTkuaHJlZiA9ICcjJztcbiAgYTkudGV4dENvbnRlbnQgPSAnc3RlZWwnO1xuICBsaTkuYXBwZW5kQ2hpbGQoYTkpO1xuXG4gIGNvbnN0IGxpMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTEwKTtcbiAgY29uc3QgYTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMTAuaHJlZiA9ICcjJztcbiAgYTEwLnRleHRDb250ZW50ID0gJ2ZpcmUnO1xuICBsaTEwLmFwcGVuZENoaWxkKGExMCk7XG5cbiAgY29uc3QgbGkxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMTEpO1xuICBjb25zdCBhMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExMS5ocmVmID0gJyMnO1xuICBhMTEudGV4dENvbnRlbnQgPSAnd2F0ZXInO1xuICBsaTExLmFwcGVuZENoaWxkKGExMSk7XG5cbiAgY29uc3QgbGkxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMTIpO1xuICBjb25zdCBhMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExMi5ocmVmID0gJyMnO1xuICBhMTIudGV4dENvbnRlbnQgPSAnZ3Jhc3MnO1xuICBsaTEyLmFwcGVuZENoaWxkKGExMik7XG5cbiAgY29uc3QgbGkxMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMTMpO1xuICBjb25zdCBhMTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExMy5ocmVmID0gJyMnO1xuICBhMTMudGV4dENvbnRlbnQgPSAnZWxlY3RyaWMnO1xuICBsaTEzLmFwcGVuZENoaWxkKGExMyk7XG5cbiAgY29uc3QgbGkxNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMTQpO1xuICBjb25zdCBhMTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExNC5ocmVmID0gJyMnO1xuICBhMTQudGV4dENvbnRlbnQgPSAncHN5Y2hpYyc7XG4gIGxpMTQuYXBwZW5kQ2hpbGQoYTE0KTtcblxuICBjb25zdCBsaTE1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkxNSk7XG4gIGNvbnN0IGExNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTE1LmhyZWYgPSAnIyc7XG4gIGExNS50ZXh0Q29udGVudCA9ICdpY2UnO1xuICBsaTE1LmFwcGVuZENoaWxkKGExNSk7XG5cbiAgY29uc3QgbGkxNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMTYpO1xuICBjb25zdCBhMTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExNi5ocmVmID0gJyMnO1xuICBhMTYudGV4dENvbnRlbnQgPSAnZHJhZ29uJztcbiAgbGkxNi5hcHBlbmRDaGlsZChhMTYpO1xuXG4gIGNvbnN0IGxpMTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTE3KTtcbiAgY29uc3QgYTE3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMTcuaHJlZiA9ICcjJztcbiAgYTE3LnRleHRDb250ZW50ID0gJ2RhcmsnO1xuICBsaTE3LmFwcGVuZENoaWxkKGExNyk7XG5cbiAgY29uc3QgbGkxOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMTgpO1xuICBjb25zdCBhMTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExOC5ocmVmID0gJyMnO1xuICBhMTgudGV4dENvbnRlbnQgPSAnZmFpcnknO1xuICBsaTE4LmFwcGVuZENoaWxkKGExOCk7XG5cbiAgY29uc3QgbGkxOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMTkpO1xuICBjb25zdCBhMTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExOS5ocmVmID0gJyMnO1xuICBhMTkudGV4dENvbnRlbnQgPSAnc2hhZG93JztcbiAgbGkxOS5hcHBlbmRDaGlsZChhMTkpO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG59XG5leHBvcnQgZGVmYXVsdCByZW5kZXJIYW1idXJnZXJJY29uTWVudTtcbiIsImZ1bmN0aW9uIGNyZWF0ZVNlYXJjaEJhckRpdkZvck1vYmlsZSgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3Qgc2VhcmNoQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaEJhckRpdi5jbGFzc0xpc3QuYWRkKCdzZWFyY2hiYXItbW9iaWxlJyk7XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChzZWFyY2hCYXJEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZWFyY2hCYXJEaXZGb3JNb2JpbGU7XG4iLCJpbXBvcnQgbWFnbmlmeWluZ0dsYXNzU3ZnIGZyb20gJy4uL2Fzc2V0cy9tYWduaWZ5LnN2Zyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaEJhckljb25Gb3JNb2JpbGUoKSB7XG4gIGNvbnN0IGhlYWRlck5hdmlnYXRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW5hdmlnYXRpb24nKTtcblxuICBjb25zdCBtYWduaWZ5aW5nR2xhc3NJY29uID0gbmV3IEltYWdlKCk7XG4gIG1hZ25pZnlpbmdHbGFzc0ljb24uc3JjID0gbWFnbmlmeWluZ0dsYXNzU3ZnO1xuICBtYWduaWZ5aW5nR2xhc3NJY29uLmNsYXNzTGlzdC5hZGQoJ21hZ25pZnlpbmctZ2xhc3MtaWNvbicpO1xuXG4gIGhlYWRlck5hdmlnYXRpb25EaXYuYXBwZW5kQ2hpbGQobWFnbmlmeWluZ0dsYXNzSWNvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlYXJjaEJhckljb25Gb3JNb2JpbGU7XG4iLCJpbXBvcnQgcmVuZGVySGFtYnVyZ2VySWNvbk1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9yZW5kZXJIYW1idXJnZXJJY29uTWVudSc7XG5cbmZ1bmN0aW9uIGF0dGFjaFNlYXJjaEJhckV2ZW50TGlzdGVuZXJGb3JNb2JpbGUoKSB7XG4gIGNvbnN0IHNlYXJjaEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hiYXItbW9iaWxlJyk7XG4gIGNvbnN0IHNlYXJjaEJhckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFnbmlmeWluZy1nbGFzcy1pY29uJyk7XG5cbiAgc2VhcmNoQmFySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dEZpZWxkLnR5cGUgPSAnc2VhcmNoJztcbiAgICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBmb3IgUG9rZW1vbic7XG4gICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyLW1vYmlsZScpO1xuICAgIHNlYXJjaEJhckRpdi5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaEhhbWJ1cmdlck5hdmlnYXRpb25NZW51KCkge1xuICBjb25zdCBoYW1idXJnZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlci1pY29uJyk7XG5cbiAgaGFtYnVyZ2VySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW5kZXJIYW1idXJnZXJJY29uTWVudSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgYXR0YWNoU2VhcmNoQmFyRXZlbnRMaXN0ZW5lckZvck1vYmlsZSwgYXR0YWNoSGFtYnVyZ2VyTmF2aWdhdGlvbk1lbnUgfTtcbiIsImFzeW5jIGZ1bmN0aW9uIGZldGNoQWxsUG9rZW1vbnMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTEwMDAwMCZvZmZzZXQ9MCcsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgd2VudCB3cm9uZycpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hBbGxQb2tlbW9ucztcbiIsImltcG9ydCB7IGdldFBva2Vtb25EYXRhQWxsIH0gZnJvbSBcIi4vc2V0QXBpRGF0YUFsbFwiO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFBva2Vtb25EZXRhaWxzKCl7XG4gICAgY29uc3QgZGF0YSA9IGdldFBva2Vtb25EYXRhQWxsKCk7XG4gICAgXG4gICAgY29uc3QgcG9rZW1vblByb21pc2VzID0gZGF0YS5yZXN1bHRzLm1hcChhc3luYyBwb2tlbW9uID0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcG9rZW1vblJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocG9rZW1vbi51cmwpO1xuXG4gICAgICAgICAgICBpZighcG9rZW1vblJlc3BvbnNlLm9rKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBva2Vtb25SZXNwb25zZURhdGEgPSBhd2FpdCBwb2tlbW9uUmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHBva2Vtb25SZXNwb25zZURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHBva2Vtb25Qcm9taXNlcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoUG9rZW1vbkRldGFpbHM7IiwiaW1wb3J0IGNyZWF0ZUhlYWRlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgZmV0Y2hBbGxQb2tlbW9ucyBmcm9tICcuL2ZldGNoQWxsUG9rZW1vbnMnO1xuaW1wb3J0IGNyZWF0ZVNlYXJjaEJhckljb25Gb3JNb2JpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hCYXJJY29uRm9yTW9iaWxlJztcbmltcG9ydCByZW5kZXJTZWFyY2hCYXJEZXNrdG9wIGZyb20gJy4vcmVuZGVyU2VhcmNoQmFyRGVza3RvcCc7XG5pbXBvcnQgeyBhdHRhY2hTZWFyY2hCYXJFdmVudExpc3RlbmVyRm9yTW9iaWxlLCBhdHRhY2hIYW1idXJnZXJOYXZpZ2F0aW9uTWVudSB9IGZyb20gJy4vZXZlbnRIYW5kbGVycyc7XG5pbXBvcnQgY3JlYXRlU2VhcmNoQmFyRGl2Rm9yTW9iaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoQmFyRGl2Rm9yTW9iaWxlJztcbmltcG9ydCByZW5kZXJNYWluQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL21haW5Db250ZW50JztcbmltcG9ydCB7IHNldFBva2Vtb25EYXRhQWxsIH0gZnJvbSAnLi9zZXRBcGlEYXRhQWxsJztcbmltcG9ydCBmZXRjaFBva2Vtb25EZXRhaWxzIGZyb20gJy4vZmV0Y2hQb2tlbW9uRGV0YWlscyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGZpcnN0UGFnZUxvYWQoKSB7XG4gIGNyZWF0ZUhlYWRlckNvbXBvbmVudCgpO1xuICBhdHRhY2hIYW1idXJnZXJOYXZpZ2F0aW9uTWVudSgpO1xuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpIHtcbiAgICBjcmVhdGVTZWFyY2hCYXJJY29uRm9yTW9iaWxlKCk7XG4gICAgY3JlYXRlU2VhcmNoQmFyRGl2Rm9yTW9iaWxlKCk7XG4gICAgYXR0YWNoU2VhcmNoQmFyRXZlbnRMaXN0ZW5lckZvck1vYmlsZSgpO1xuICB9IGVsc2Uge1xuICAgIHJlbmRlclNlYXJjaEJhckRlc2t0b3AoKTtcbiAgfVxuICBjb25zdCBhcGlEYXRhQWxsID0gYXdhaXQgZmV0Y2hBbGxQb2tlbW9ucygpO1xuICBzZXRQb2tlbW9uRGF0YUFsbChhcGlEYXRhQWxsKTtcbiAgY29uc3QgYXBpRGF0YUFsbERldGFpbHMgPSBhd2FpdCBmZXRjaFBva2Vtb25EZXRhaWxzKCk7XG4gIGNvbnNvbGUubG9nKGFwaURhdGFBbGwpO1xuICBjb25zb2xlLmxvZyhhcGlEYXRhQWxsRGV0YWlscyk7XG4gIHJlbmRlck1haW5Db250ZW50KGFwaURhdGFBbGwsIGFwaURhdGFBbGxEZXRhaWxzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZpcnN0UGFnZUxvYWQ7XG4iLCJmdW5jdGlvbiByZW5kZXJTZWFyY2hCYXJEZXNrdG9wKCkge1xuICBjb25zdCBoZWFkZXJOYXZpZ2F0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1uYXZpZ2F0aW9uJyk7XG5cbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hJbnB1dC50eXBlID0gJ3NlYXJjaCc7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBmb3IgUG9rZW1vbic7XG4gIHNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXInKTtcblxuICBoZWFkZXJOYXZpZ2F0aW9uRGl2LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU2VhcmNoQmFyRGVza3RvcDtcbiIsImxldCBwb2tlbW9uRGF0YUFsbCA9IG51bGw7XG5cbmZ1bmN0aW9uIHNldFBva2Vtb25EYXRhQWxsKGRhdGEpIHtcbiAgICBwb2tlbW9uRGF0YUFsbCA9IGRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldFBva2Vtb25EYXRhQWxsKCl7XG4gICAgcmV0dXJuIHBva2Vtb25EYXRhQWxsO1xufVxuXG5leHBvcnQge3NldFBva2Vtb25EYXRhQWxsLCBnZXRQb2tlbW9uRGF0YUFsbH1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBmaXJzdFBhZ2VMb2FkIGZyb20gJy4vZnVuY3Rpb25zL2ZpcnN0UGFnZUxvYWQnO1xuXG5cbmZpcnN0UGFnZUxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==