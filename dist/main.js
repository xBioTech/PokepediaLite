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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AAHJ;;AAMA;EACI,yBAXO;AAQX;;AAOI;EACI,yBAfO;EAgBP,cAjBG;EAkBH,uBAAA;AAJR;AAKQ;EACI,aAAA;EACA,8BAAA;AAHZ;AAIY;EACI,cAAA;EACA,eAAA;AAFhB;AAMI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAJR;AAKQ;EACI,yBA/BG;EAgCH,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;AAHZ;AAMI;EACI,uBAAA;EACA,MAAA;EACA,UAAA;EACA,aAAA;EACA,eAAA;EACA,aAAA;EACA,gCAAA;EACA,wBAAA;EACA,gBAAA;AAJR;AAMQ;EACI,aAAA;EACA,sBAAA;AAJZ;AAMY;EACI,gBAAA;EACA,8BAAA;AAJhB;AAOQ;EACI,gBAAA;EACA,eAAA;AALZ;AAMY;EACI,yBAhED;EAiEC,uBAAA;AAJhB;AAQQ;EACI,qBAAA;EACA,YAAA;AANZ;AAUI;EACI;IACI,UAAA;EARV;EAWM;IACI,OAAA;EATV;AACF;;AAaA;EAGY;IACI,mBAAA;EAZd;EAac;IACI,aAAA;EAXlB;EAac;IACI,yBA9FL;IA+FK,aAAA;IACA,yBAAA;IACA,mBAAA;IACA,gBAAA;EAXlB;AACF","sourcesContent":["$bg-color: #FAF9F6;\n$header-color: #FF0000;\n$searchbar-bg: #F7F7F7;\n\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    background-color: $bg-color;\n}\n\n#content{\n    .header{\n        background-color: $header-color;\n        color: $bg-color;\n        border: solid 2px black;\n        .header-navigation{\n            display: flex;\n            justify-content: space-between;\n            .hamburger-icon, .magnifying-glass-icon{\n                max-width: 10%;\n                cursor: pointer;\n            }\n        }\n    }\n    .searchbar-mobile{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        .search-bar-mobile{\n            background-color: $searchbar-bg;\n            outline: none;\n            border: 1px solid #D1D5DB;\n            border-radius: 25px;\n            padding: 1em 3em;\n            margin-top: 1em;\n        }\n    }\n    .menu-div{\n        background-color: white;\n        top: 0;\n        width: 55%;\n        height: 100vh;\n        position: fixed;\n        z-index: 1000;\n        animation-name: menu-div-sidebar;\n        animation-duration: 0.5s;\n        overflow: scroll;\n\n        .menu-ul{\n            display: flex;\n            flex-direction: column;\n\n            .menu-div-headline{\n                padding: 1em 1em;\n                border-bottom: 1px solid black;\n            }\n        }\n        li{\n            padding: 1em 1em;\n            cursor: pointer;\n            &:hover{\n                background-color: $header-color;\n                border: solid 2px black;\n            }\n        }\n        \n        a{\n            text-decoration: none;\n            color: black;\n        }\n    }\n\n    @keyframes menu-div-sidebar{\n        0% {\n            left: -50%;\n        }\n\n        100%{\n            left: 0;\n        }\n    }\n}\n\n@media only screen and (min-width: 1200px){\n    #content{\n        .header{\n            .header-navigation{\n                align-items: center;\n                .hamburger-icon{\n                    max-width: 3%;\n                }\n                .search-bar{\n                    background-color: $searchbar-bg;\n                    outline: none;\n                    border: 1px solid #D1D5DB;\n                    border-radius: 25px;\n                    padding: 1em 2em;\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
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

    console.log(responseData);

    return responseData;
  } catch (error) {
    console.log(error.message);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAllPokemons);


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







function firstPageLoad() {
  (0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_fetchAllPokemons__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.attachHamburgerNavigationMenu)();
  if (window.matchMedia('(max-width: 767px)').matches) {
    (0,_components_searchBarIconForMobile__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_components_searchBarDivForMobile__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.attachSearchBarEventListenerForMobile)();
  } else {
    (0,_renderSearchBarDesktop__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCO0FBQzFCO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25CN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLHNCQUFzQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYdEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2dDOztBQUV0RCxvRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvY29tcG9uZW50cy9yZW5kZXJIYW1idXJnZXJJY29uTWVudS5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoQmFyRGl2Rm9yTW9iaWxlLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvY29tcG9uZW50cy9zZWFyY2hCYXJJY29uRm9yTW9iaWxlLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvZnVuY3Rpb25zL2V2ZW50SGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL3NyYy9mdW5jdGlvbnMvZmV0Y2hBbGxQb2tlbW9ucy5qcyIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlLy4vc3JjL2Z1bmN0aW9ucy9maXJzdFBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvLi9zcmMvZnVuY3Rpb25zL3JlbmRlclNlYXJjaEJhckRlc2t0b3AuanMiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb2tlcGVkaWFsaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bva2VwZWRpYWxpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9rZXBlZGlhbGl0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUY5RjY7XG59XG5cbiNjb250ZW50IC5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xuICBjb2xvcjogI0ZBRjlGNjtcbiAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XG59XG4jY29udGVudCAuaGVhZGVyIC5oZWFkZXItbmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiNjb250ZW50IC5oZWFkZXIgLmhlYWRlci1uYXZpZ2F0aW9uIC5oYW1idXJnZXItaWNvbiwgI2NvbnRlbnQgLmhlYWRlciAuaGVhZGVyLW5hdmlnYXRpb24gLm1hZ25pZnlpbmctZ2xhc3MtaWNvbiB7XG4gIG1heC13aWR0aDogMTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jY29udGVudCAuc2VhcmNoYmFyLW1vYmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2NvbnRlbnQgLnNlYXJjaGJhci1tb2JpbGUgLnNlYXJjaC1iYXItbW9iaWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDVEQjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZzogMWVtIDNlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuI2NvbnRlbnQgLm1lbnUtZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDU1JTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICBhbmltYXRpb24tbmFtZTogbWVudS1kaXYtc2lkZWJhcjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuI2NvbnRlbnQgLm1lbnUtZGl2IC5tZW51LXVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNjb250ZW50IC5tZW51LWRpdiAubWVudS11bCAubWVudS1kaXYtaGVhZGxpbmUge1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG4jY29udGVudCAubWVudS1kaXYgbGkge1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jY29udGVudCAubWVudS1kaXYgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcbn1cbiNjb250ZW50IC5tZW51LWRpdiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5Aa2V5ZnJhbWVzIG1lbnUtZGl2LXNpZGViYXIge1xuICAwJSB7XG4gICAgbGVmdDogLTUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICNjb250ZW50IC5oZWFkZXIgLmhlYWRlci1uYXZpZ2F0aW9uIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICNjb250ZW50IC5oZWFkZXIgLmhlYWRlci1uYXZpZ2F0aW9uIC5oYW1idXJnZXItaWNvbiB7XG4gICAgbWF4LXdpZHRoOiAzJTtcbiAgfVxuICAjY29udGVudCAuaGVhZGVyIC5oZWFkZXItbmF2aWdhdGlvbiAuc2VhcmNoLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQ1REI7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFISjs7QUFNQTtFQUNJLHlCQVhPO0FBUVg7O0FBT0k7RUFDSSx5QkFmTztFQWdCUCxjQWpCRztFQWtCSCx1QkFBQTtBQUpSO0FBS1E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFIWjtBQUlZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGaEI7QUFNSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSlI7QUFLUTtFQUNJLHlCQS9CRztFQWdDSCxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhaO0FBTUk7RUFDSSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFNUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUpaO0FBTVk7RUFDSSxnQkFBQTtFQUNBLDhCQUFBO0FBSmhCO0FBT1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFMWjtBQU1ZO0VBQ0kseUJBaEVEO0VBaUVDLHVCQUFBO0FBSmhCO0FBUVE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFOWjtBQVVJO0VBQ0k7SUFDSSxVQUFBO0VBUlY7RUFXTTtJQUNJLE9BQUE7RUFUVjtBQUNGOztBQWFBO0VBR1k7SUFDSSxtQkFBQTtFQVpkO0VBYWM7SUFDSSxhQUFBO0VBWGxCO0VBYWM7SUFDSSx5QkE5Rkw7SUErRkssYUFBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQVhsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRiZy1jb2xvcjogI0ZBRjlGNjtcXG4kaGVhZGVyLWNvbG9yOiAjRkYwMDAwO1xcbiRzZWFyY2hiYXItYmc6ICNGN0Y3Rjc7XFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICAuaGVhZGVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1jb2xvcjtcXG4gICAgICAgIGNvbG9yOiAkYmctY29sb3I7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgICAgIC5oZWFkZXItbmF2aWdhdGlvbntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAuaGFtYnVyZ2VyLWljb24sIC5tYWduaWZ5aW5nLWdsYXNzLWljb257XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAlO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5zZWFyY2hiYXItbW9iaWxle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC5zZWFyY2gtYmFyLW1vYmlsZXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VhcmNoYmFyLWJnO1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QxRDVEQjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAzZW07XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5tZW51LWRpdntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDU1JTtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAxMDAwO1xcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG1lbnUtZGl2LXNpZGViYXI7XFxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcblxcbiAgICAgICAgLm1lbnUtdWx7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgICAgIC5tZW51LWRpdi1oZWFkbGluZXtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtIDFlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIGxpe1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAxZW07XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItY29sb3I7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgYXtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgbWVudS1kaXYtc2lkZWJhcntcXG4gICAgICAgIDAlIHtcXG4gICAgICAgICAgICBsZWZ0OiAtNTAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgMTAwJXtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcXG4gICAgI2NvbnRlbnR7XFxuICAgICAgICAuaGVhZGVye1xcbiAgICAgICAgICAgIC5oZWFkZXItbmF2aWdhdGlvbntcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgLmhhbWJ1cmdlci1pY29ue1xcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzJTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc2VhcmNoLWJhcntcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWFyY2hiYXItYmc7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QxRDVEQjtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW0gMmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBoYW1idXJnZXJTdmcgZnJvbSAnLi4vYXNzZXRzL21lbnUuc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyQ29tcG9uZW50KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IG5hdmlnYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2aWdhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbmF2aWdhdGlvbicpO1xuXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uRGl2KTtcblxuICBjb25zdCBoYW1idXJnZXJJY29uID0gbmV3IEltYWdlKCk7XG4gIGhhbWJ1cmdlckljb24uc3JjID0gaGFtYnVyZ2VyU3ZnO1xuICBoYW1idXJnZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1pY29uJyk7XG5cbiAgbmF2aWdhdGlvbkRpdi5hcHBlbmRDaGlsZChoYW1idXJnZXJJY29uKTtcblxuICBjb25zdCBoZWFkbGluZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkbGluZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGxpbmUnKTtcbiAgaGVhZGxpbmVFbGVtZW50LnRleHRDb250ZW50ID0gJ1Bva2VwZWRpYUxpdGUnO1xuXG4gIG5hdmlnYXRpb25EaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmVFbGVtZW50KTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlckNvbXBvbmVudDtcbiIsImZ1bmN0aW9uIHJlbmRlckhhbWJ1cmdlckljb25NZW51KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1kaXYnKTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmNsYXNzTGlzdC5hZGQoJ21lbnUtdWwnKTtcblxuICBtZW51RGl2LmFwcGVuZENoaWxkKHVsKTtcblxuICBjb25zdCBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGhFbGVtZW50LnRleHRDb250ZW50ID0gJ0ZpbHRlciBmb3IgUG9rZW1vbiBUeXBlJztcbiAgaEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1kaXYtaGVhZGxpbmUnKTtcbiAgdWwuYXBwZW5kQ2hpbGQoaEVsZW1lbnQpO1xuXG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMS5ocmVmID0gJyMnO1xuICBhMS50ZXh0Q29udGVudCA9ICdub3JtYWwnO1xuICBsaTEuYXBwZW5kQ2hpbGQoYTEpO1xuXG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMi5ocmVmID0gJyMnO1xuICBhMi50ZXh0Q29udGVudCA9ICdmaWdodGluZyc7XG4gIGxpMi5hcHBlbmRDaGlsZChhMik7XG5cbiAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgY29uc3QgYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEzLmhyZWYgPSAnIyc7XG4gIGEzLnRleHRDb250ZW50ID0gJ2ZseWluZyc7XG4gIGxpMy5hcHBlbmRDaGlsZChhMyk7XG5cbiAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGk0KTtcbiAgY29uc3QgYTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGE0LmhyZWYgPSAnIyc7XG4gIGE0LnRleHRDb250ZW50ID0gJ3BvaXNvbic7XG4gIGxpNC5hcHBlbmRDaGlsZChhNCk7XG5cbiAgY29uc3QgbGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGk1KTtcbiAgY29uc3QgYTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGE1LmhyZWYgPSAnIyc7XG4gIGE1LnRleHRDb250ZW50ID0gJ2dyb3VuZCc7XG4gIGxpNS5hcHBlbmRDaGlsZChhNSk7XG5cbiAgY29uc3QgbGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGk2KTtcbiAgY29uc3QgYTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGE2LmhyZWYgPSAnIyc7XG4gIGE2LnRleHRDb250ZW50ID0gJ3JvY2snO1xuICBsaTYuYXBwZW5kQ2hpbGQoYTYpO1xuXG4gIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpNyk7XG4gIGNvbnN0IGE3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhNy5ocmVmID0gJyMnO1xuICBhNy50ZXh0Q29udGVudCA9ICdidWcnO1xuICBsaTcuYXBwZW5kQ2hpbGQoYTcpO1xuXG4gIGNvbnN0IGxpOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpOCk7XG4gIGNvbnN0IGE4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhOC5ocmVmID0gJyMnO1xuICBhOC50ZXh0Q29udGVudCA9ICdnaG9zdCc7XG4gIGxpOC5hcHBlbmRDaGlsZChhOCk7XG5cbiAgY29uc3QgbGk5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGk5KTtcbiAgY29uc3QgYTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGE5LmhyZWYgPSAnIyc7XG4gIGE5LnRleHRDb250ZW50ID0gJ3N0ZWVsJztcbiAgbGk5LmFwcGVuZENoaWxkKGE5KTtcblxuICBjb25zdCBsaTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkxMCk7XG4gIGNvbnN0IGExMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTEwLmhyZWYgPSAnIyc7XG4gIGExMC50ZXh0Q29udGVudCA9ICdmaXJlJztcbiAgbGkxMC5hcHBlbmRDaGlsZChhMTApO1xuXG4gIGNvbnN0IGxpMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTExKTtcbiAgY29uc3QgYTExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMTEuaHJlZiA9ICcjJztcbiAgYTExLnRleHRDb250ZW50ID0gJ3dhdGVyJztcbiAgbGkxMS5hcHBlbmRDaGlsZChhMTEpO1xuXG4gIGNvbnN0IGxpMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTEyKTtcbiAgY29uc3QgYTEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMTIuaHJlZiA9ICcjJztcbiAgYTEyLnRleHRDb250ZW50ID0gJ2dyYXNzJztcbiAgbGkxMi5hcHBlbmRDaGlsZChhMTIpO1xuXG4gIGNvbnN0IGxpMTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTEzKTtcbiAgY29uc3QgYTEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMTMuaHJlZiA9ICcjJztcbiAgYTEzLnRleHRDb250ZW50ID0gJ2VsZWN0cmljJztcbiAgbGkxMy5hcHBlbmRDaGlsZChhMTMpO1xuXG4gIGNvbnN0IGxpMTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTE0KTtcbiAgY29uc3QgYTE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMTQuaHJlZiA9ICcjJztcbiAgYTE0LnRleHRDb250ZW50ID0gJ3BzeWNoaWMnO1xuICBsaTE0LmFwcGVuZENoaWxkKGExNCk7XG5cbiAgY29uc3QgbGkxNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMTUpO1xuICBjb25zdCBhMTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExNS5ocmVmID0gJyMnO1xuICBhMTUudGV4dENvbnRlbnQgPSAnaWNlJztcbiAgbGkxNS5hcHBlbmRDaGlsZChhMTUpO1xuXG4gIGNvbnN0IGxpMTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTE2KTtcbiAgY29uc3QgYTE2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMTYuaHJlZiA9ICcjJztcbiAgYTE2LnRleHRDb250ZW50ID0gJ2RyYWdvbic7XG4gIGxpMTYuYXBwZW5kQ2hpbGQoYTE2KTtcblxuICBjb25zdCBsaTE3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkxNyk7XG4gIGNvbnN0IGExNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTE3LmhyZWYgPSAnIyc7XG4gIGExNy50ZXh0Q29udGVudCA9ICdkYXJrJztcbiAgbGkxNy5hcHBlbmRDaGlsZChhMTcpO1xuXG4gIGNvbnN0IGxpMTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTE4KTtcbiAgY29uc3QgYTE4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMTguaHJlZiA9ICcjJztcbiAgYTE4LnRleHRDb250ZW50ID0gJ2ZhaXJ5JztcbiAgbGkxOC5hcHBlbmRDaGlsZChhMTgpO1xuXG4gIGNvbnN0IGxpMTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB1bC5hcHBlbmRDaGlsZChsaTE5KTtcbiAgY29uc3QgYTE5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMTkuaHJlZiA9ICcjJztcbiAgYTE5LnRleHRDb250ZW50ID0gJ3NoYWRvdyc7XG4gIGxpMTkuYXBwZW5kQ2hpbGQoYTE5KTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xufVxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySGFtYnVyZ2VySWNvbk1lbnU7XG4iLCJmdW5jdGlvbiBjcmVhdGVTZWFyY2hCYXJEaXZGb3JNb2JpbGUoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IHNlYXJjaEJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hCYXJEaXYuY2xhc3NMaXN0LmFkZCgnc2VhcmNoYmFyLW1vYmlsZScpO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyRGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VhcmNoQmFyRGl2Rm9yTW9iaWxlO1xuIiwiaW1wb3J0IG1hZ25pZnlpbmdHbGFzc1N2ZyBmcm9tICcuLi9hc3NldHMvbWFnbmlmeS5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hCYXJJY29uRm9yTW9iaWxlKCkge1xuICBjb25zdCBoZWFkZXJOYXZpZ2F0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1uYXZpZ2F0aW9uJyk7XG5cbiAgY29uc3QgbWFnbmlmeWluZ0dsYXNzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBtYWduaWZ5aW5nR2xhc3NJY29uLnNyYyA9IG1hZ25pZnlpbmdHbGFzc1N2ZztcbiAgbWFnbmlmeWluZ0dsYXNzSWNvbi5jbGFzc0xpc3QuYWRkKCdtYWduaWZ5aW5nLWdsYXNzLWljb24nKTtcblxuICBoZWFkZXJOYXZpZ2F0aW9uRGl2LmFwcGVuZENoaWxkKG1hZ25pZnlpbmdHbGFzc0ljb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZWFyY2hCYXJJY29uRm9yTW9iaWxlO1xuIiwiaW1wb3J0IHJlbmRlckhhbWJ1cmdlckljb25NZW51IGZyb20gJy4uL2NvbXBvbmVudHMvcmVuZGVySGFtYnVyZ2VySWNvbk1lbnUnO1xuXG5mdW5jdGlvbiBhdHRhY2hTZWFyY2hCYXJFdmVudExpc3RlbmVyRm9yTW9iaWxlKCkge1xuICBjb25zdCBzZWFyY2hCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoYmFyLW1vYmlsZScpO1xuICBjb25zdCBzZWFyY2hCYXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hZ25pZnlpbmctZ2xhc3MtaWNvbicpO1xuXG4gIHNlYXJjaEJhckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRGaWVsZC50eXBlID0gJ3NlYXJjaCc7XG4gICAgaW5wdXRGaWVsZC5wbGFjZWhvbGRlciA9ICdTZWFyY2ggZm9yIFBva2Vtb24nO1xuICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhci1tb2JpbGUnKTtcbiAgICBzZWFyY2hCYXJEaXYuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhdHRhY2hIYW1idXJnZXJOYXZpZ2F0aW9uTWVudSgpIHtcbiAgY29uc3QgaGFtYnVyZ2VySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItaWNvbicpO1xuXG4gIGhhbWJ1cmdlckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVuZGVySGFtYnVyZ2VySWNvbk1lbnUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGF0dGFjaFNlYXJjaEJhckV2ZW50TGlzdGVuZXJGb3JNb2JpbGUsIGF0dGFjaEhhbWJ1cmdlck5hdmlnYXRpb25NZW51IH07XG4iLCJhc3luYyBmdW5jdGlvbiBmZXRjaEFsbFBva2Vtb25zKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xMDAwMDAmb2Zmc2V0PTAnLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEFsbFBva2Vtb25zO1xuIiwiaW1wb3J0IGNyZWF0ZUhlYWRlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgZmV0Y2hBbGxQb2tlbW9ucyBmcm9tICcuL2ZldGNoQWxsUG9rZW1vbnMnO1xuaW1wb3J0IGNyZWF0ZVNlYXJjaEJhckljb25Gb3JNb2JpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hCYXJJY29uRm9yTW9iaWxlJztcbmltcG9ydCByZW5kZXJTZWFyY2hCYXJEZXNrdG9wIGZyb20gJy4vcmVuZGVyU2VhcmNoQmFyRGVza3RvcCc7XG5pbXBvcnQgeyBhdHRhY2hTZWFyY2hCYXJFdmVudExpc3RlbmVyRm9yTW9iaWxlLCBhdHRhY2hIYW1idXJnZXJOYXZpZ2F0aW9uTWVudSB9IGZyb20gJy4vZXZlbnRIYW5kbGVycyc7XG5pbXBvcnQgY3JlYXRlU2VhcmNoQmFyRGl2Rm9yTW9iaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoQmFyRGl2Rm9yTW9iaWxlJztcblxuZnVuY3Rpb24gZmlyc3RQYWdlTG9hZCgpIHtcbiAgY3JlYXRlSGVhZGVyQ29tcG9uZW50KCk7XG4gIGZldGNoQWxsUG9rZW1vbnMoKTtcbiAgYXR0YWNoSGFtYnVyZ2VyTmF2aWdhdGlvbk1lbnUoKTtcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG4gICAgY3JlYXRlU2VhcmNoQmFySWNvbkZvck1vYmlsZSgpO1xuICAgIGNyZWF0ZVNlYXJjaEJhckRpdkZvck1vYmlsZSgpO1xuICAgIGF0dGFjaFNlYXJjaEJhckV2ZW50TGlzdGVuZXJGb3JNb2JpbGUoKTtcbiAgfSBlbHNlIHtcbiAgICByZW5kZXJTZWFyY2hCYXJEZXNrdG9wKCk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZpcnN0UGFnZUxvYWQ7XG4iLCJmdW5jdGlvbiByZW5kZXJTZWFyY2hCYXJEZXNrdG9wKCkge1xuICBjb25zdCBoZWFkZXJOYXZpZ2F0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1uYXZpZ2F0aW9uJyk7XG5cbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hJbnB1dC50eXBlID0gJ3NlYXJjaCc7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBmb3IgUG9rZW1vbic7XG4gIHNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXInKTtcblxuICBoZWFkZXJOYXZpZ2F0aW9uRGl2LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU2VhcmNoQmFyRGVza3RvcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZmlyc3RQYWdlTG9hZCBmcm9tICcuL2Z1bmN0aW9ucy9maXJzdFBhZ2VMb2FkJztcblxuZmlyc3RQYWdlTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9