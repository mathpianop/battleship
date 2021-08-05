/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n#game-container {\n  width: 740px;\n  margin: auto\n}\n\n\n\n#gameboards {\n  display: flex;\n  justify-content: space-between;\n  width: 100%\n}\n\n.gameboard {\n  width: 300px;\n  height: 300px;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n}\n\n\n#board-divider {\n  border-right: 2px solid black;\n}\n\n\n\n.position {\n  height: 20px;\n  width: 20px;\n  border: 1px solid black;\n  background-image: radial-gradient(#000 0%, lightgray  20%);\n  background-color: lightgray;\n}\n\n#computer-response-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.hit {\n  background-color: red;\n  background-image: none;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n}\n\n.missed{\n  background-color: white;\n  background-image: none;\n}\n\n\n\n\n.sunk {\n  background-color: black;\n  color: white;\n}\n.active {\n  cursor: pointer;\n}\n\n.occupied {\n  background-image: none;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;EACE,YAAY;EACZ;AACF;;;;AAIA;EACE,aAAa;EACb,8BAA8B;EAC9B;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,aAAa;EACb,sCAAsC;AACxC;;;AAGA;EACE,6BAA6B;AAC/B;;;;AAIA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,0DAA0D;EAC1D,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,gDAAgD;EAChD,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;;;;;AAKA;EACE,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,gDAAgD;AAClD","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n#game-container {\n  width: 740px;\n  margin: auto\n}\n\n\n\n#gameboards {\n  display: flex;\n  justify-content: space-between;\n  width: 100%\n}\n\n.gameboard {\n  width: 300px;\n  height: 300px;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n}\n\n\n#board-divider {\n  border-right: 2px solid black;\n}\n\n\n\n.position {\n  height: 20px;\n  width: 20px;\n  border: 1px solid black;\n  background-image: radial-gradient(#000 0%, lightgray  20%);\n  background-color: lightgray;\n}\n\n#computer-response-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.hit {\n  background-color: red;\n  background-image: none;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n}\n\n.missed{\n  background-color: white;\n  background-image: none;\n}\n\n\n\n\n.sunk {\n  background-color: black;\n  color: white;\n}\n.active {\n  cursor: pointer;\n}\n\n.occupied {\n  background-image: none;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories/AttackReport.js":
/*!***************************************!*\
  !*** ./src/factories/AttackReport.js ***!
  \***************************************/
/***/ ((module) => {

function AttackReport(coors, hitShip) {
  if (hitShip && hitShip.isSunk()) {
    //If the attack shot hits, report hit details
    return {
      hit: true,
      sunk: true,
      shipName: hitShip.name,
      coors: coors,
      message: `${hitShip.name} hit and sunk!`
    }
  } else if (hitShip) {
    return {
      hit: true,
      sunk: false,
      shipName: hitShip.name,
      coors: coors,
      message: `${hitShip.name} hit!`
    }
  } else {
    //If the shot misses, report hit as false
    return {
      hit: false,
      coors: coors,
      message: "Missed!"
    }
  }
}

module.exports = AttackReport;


/***/ }),

/***/ "./src/factories/Game.js":
/*!*******************************!*\
  !*** ./src/factories/Game.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Player = __webpack_require__(/*! ./Player */ "./src/factories/Player.js");
const Gameboard = __webpack_require__(/*! ./Gameboard */ "./src/factories/Gameboard.js");
const Ship = __webpack_require__(/*! ./Ship */ "./src/factories/Ship.js")
const initializeBoards = __webpack_require__(/*! ../interface/initializeBoards */ "./src/interface/initializeBoards.js");
const gameplayDisplay = __webpack_require__(/*! ../interface/gameplayDisplay */ "./src/interface/gameplayDisplay.js");

function Game() {
  const humanPlayer = Player("placeholder");
  const computerPlayer = Player("computer", true);
  const humanGameboard = Gameboard();
  const computerGameboard = Gameboard();
  let victor;
  let attackReportMessage;

  const illegalHumanMoveMessage = function(humanCoors) {
    return humanPlayer.illegalMoveMessage(humanCoors)
  }

  const takeShot = function(coors, playerIsComputer) {
    let offensivePlayer
    let defensiveGameboard;

    if (playerIsComputer) {
      offensivePlayer = computerPlayer;
      defensiveGameboard = humanGameboard;
    } else {
      offensivePlayer = humanPlayer;
      defensiveGameboard = computerGameboard;
    }

    //call receiveAttack on defensive Gameboard
    defensiveGameboard.receiveAttack(coors);
    //call getAttackReport on defensive Gameboard
    const attackReport = defensiveGameboard.getAttackReport();
    //call receiveReport on offensive Player
    offensivePlayer.receiveReport(attackReport);
    //Set the current attackReportMessage
    attackReportMessage = attackReport.message
    //call allSunk on defensive Gameboard to check for victory
    if (defensiveGameboard.allSunk()) {
      victor = offensivePlayer
    }
  }

 
  

 
  

  //Place ships arbitrarily for now

  //Place Patrol Boats
  const computerPatrol = Ship(2, "Patrol Boat")
  const humanPatrol = Ship(2, "Patrol Boat")
  computerGameboard.placeShip([[9,7], [9,6]], computerPatrol)
  humanGameboard.placeShip([[1,2], [2,2]], humanPatrol)


  //Place Destroyers
  const computerDestroyer = Ship(3, "Destroyer")
  const humanDestroyer = Ship(3, "Destroyer")
  computerGameboard.placeShip([[1,2], [2,2], [3,2]], computerDestroyer)
  humanGameboard.placeShip([[5,6], [4,6], [3,6]], humanDestroyer)

  //Place Submarines
  const computerSubmarine = Ship(3, "Submarine")
  const humanSubmarine = Ship(3, "Submarine")
  computerGameboard.placeShip([[4,5], [5,5], [5,6]], computerSubmarine)
  humanGameboard.placeShip([[3,1], [3,2], [3,3]], humanSubmarine)

  //Place Battleships
  const computerBattleship = Ship(4, "Battleship")
  const humanBattleship = Ship(4, "Battleship")
  computerGameboard.placeShip([[8,3], [8,4], [8,5], [8,6]], computerBattleship)
  humanGameboard.placeShip([[6,5], [6,6], [6,7], [6,8]], humanBattleship)

  //Place Carriers
  const computerCarrier = Ship(5, "Carrier")
  const humanCarrier = Ship(5, "Carrier")
  computerGameboard.placeShip([[2,10], [3,10], [4,10], [5,10], [6,10]], computerCarrier)
  humanGameboard.placeShip([[10,9], [9,9], [8,9], [7,9], [6,9]], humanCarrier)


  return {
    get victor() {
      return victor
    },
    get computerMove() {
      return computerPlayer.getComputerMove()
    },
    get allShots() {
      return {
        human: humanPlayer.shots,
        computer: computerPlayer.shots
      }
    },
    get attackReportMessage() {
      return attackReportMessage
    },
    get humanShipDetailsArray() {
      return humanGameboard.shipDetailsArray;
    },
    illegalHumanMoveMessage,
    takeShot
  }
}

module.exports = Game;

/***/ }),

/***/ "./src/factories/Gameboard.js":
/*!************************************!*\
  !*** ./src/factories/Gameboard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./Ship */ "./src/factories/Ship.js");
const ShipDetails = __webpack_require__(/*! ./ShipDetails */ "./src/factories/ShipDetails.js")
const AttackReport = __webpack_require__(/*! ./AttackReport */ "./src/factories/AttackReport.js");
const legalPlacement = __webpack_require__(/*! ../helpers/legalPlacement */ "./src/helpers/legalPlacement.js")


function Gameboard() {
  const shipDetailsArray = [];
  let attackReport = {};

  

  const illegalPlacementError = function(positions) {
    const message = legalPlacement.illegalPlacementMessage(shipDetailsArray, positions);
    if (message) {
      throw new Error(message)
    }
  }

  

  const getHitShipDetails = function(targetCoors) {
    return shipDetailsArray.find(shipDetails => shipDetails.matches(targetCoors))
  }

  
  const receiveAttack = function(targetCoors) {
    const hitShipDetails = getHitShipDetails(targetCoors);
    if (hitShipDetails) {
      //If a ship is hit, call the hit method on the hitShip
      hitShipDetails.markPositionHit(targetCoors);
    } 
    //Update the attackReport
    setAttackReport(targetCoors, hitShipDetails);
  }

  const setAttackReport = function(coors, hitShipDetails) {
    attackReport = (
      hitShipDetails ? AttackReport(coors, hitShipDetails.ship) : AttackReport(coors)
    )
  }

  const getAttackReport = function() {
    return attackReport;
  }

  const allSunk = function() {
    if (shipDetailsArray.length === 0) {
      return false
    } else {
      return shipDetailsArray.every(shipDetails => shipDetails.ship.isSunk())
    }
  }

  // Create new Ship object and add to ships unless
  // out of bounds
  const placeShip = function(positions, ship) {
    const error = illegalPlacementError(positions);
    if (!error) {
      const newShip = Ship(positions.length, ship.name)
      shipDetailsArray.push(ShipDetails(positions, newShip))
    } else {
      throw error
    }
  }

  const placeComputerShips = function() {

  }
  
  return {
    get shipDetailsArray() {
      return shipDetailsArray;
    },
    placeShip, 
    receiveAttack, 
    getAttackReport, /* Refactor */
    allSunk, 
    placeComputerShips
  }
}

module.exports = Gameboard;

/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const coordinatesExist = __webpack_require__(/*! ../helpers/coordinatesExist */ "./src/helpers/coordinatesExist.js");

function Player(name, isComputer) {
  const shots = {
    hit: [],
    missed: [],
    sunk: []
  }

  

  const illegalMoveMessage = function(coors) {
    if (!coordinatesExist(coors)) {
      return "Those coordinates are nonexistant"
    } else if (includesCoordinates(shots.hit, coors)) {
      return "Those coordinates have already been hit"
    } else if (includesCoordinates(shots.missed, coors)) {
      return "Those coordinates have already been shot at and missed"
    } 
  }


  const includesCoordinates = function(shotsArray, testCoors) {
    return !!shotsArray.map(shot => shot.coors).find(coordinates => {
      return (
        testCoors[0] === coordinates[0] &&
        testCoors[1] === coordinates[1]
      )
    })
  }

  const getComputerMove = function() {
    let computerMove;
    //return an array with 2 coordinates between 1 and 10 that isn't
    //in the hitShots or missedShots arrays
    do {
      computerMove = [
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 1)
      ]
    } while (includesCoordinates(shots.hit.concat(shots.missed), computerMove))   
    return computerMove;
  }

  const getShipCoordinates = function(shipName) {
    return shots.hit.filter(shot => {
      return shot.shipName === shipName
    }).map(shot => shot.coors)
  }

  const receiveReport = function(attackReport) {
    //Add shot to either shots.hit or shots.missed
    if (attackReport.hit) {
      shots.hit.push(attackReport)
    } else  {
      shots.missed.push(attackReport)
    }

    //If the shot has sunk target, add shot to shots.sunk
    if(attackReport.sunk) {
      //Add shipCoors property
      attackReport.shipCoors = getShipCoordinates(attackReport.shipName)
      shots.sunk.push(attackReport)
    }
  }

  

  return {
    illegalMoveMessage, 
    getComputerMove, 
    receiveReport, 
    get shots() {
      return shots
    }, 
    isComputer, 
    name
  }
  
}

module.exports = Player;


/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((module) => {

function Ship(length, name) {
  //Initialize an array as long as the ship, 
  //with each position starting out as false (not hit)
  const positionsHit = Array(length).fill(false)
  
  //Set the given position as hit
  const hit = (positionIndex) => positionsHit[positionIndex] = true
 
  //Check whether all positions are hit
  const isSunk = () => positionsHit.every(Boolean);
  
  return {hit, isSunk, length, name}
}

module.exports = Ship;

/***/ }),

/***/ "./src/factories/ShipDetails.js":
/*!**************************************!*\
  !*** ./src/factories/ShipDetails.js ***!
  \**************************************/
/***/ ((module) => {

module.exports = function ShipDetails(positions, ship) {
  const matches = function(testPosition) {
    return positions.some(iteratedPos => positionsAreEqual(iteratedPos, testPosition))
  }

  const positionsAreEqual = function(pos1, pos2) {
    return (pos1[0] === pos2[0] && pos1[1] === pos2[1])
  }

  const getPositionIndex = function(testPosition) {
    return positions.findIndex(pos => positionsAreEqual(pos, testPosition))
  }

  const markPositionHit = function(targetPosition) {
    const positionIndex = getPositionIndex(targetPosition);
    ship.hit(positionIndex)
  }


  return {ship, positions, matches, markPositionHit}
}

/***/ }),

/***/ "./src/helpers/coordinatesExist.js":
/*!*****************************************!*\
  !*** ./src/helpers/coordinatesExist.js ***!
  \*****************************************/
/***/ ((module) => {

module.exports = function coordinatesExist(coors) {
  return (
    coors[0] <= 10 &&       
    coors[0] >= 1 &&
    coors[1] <= 10 &&
    coors[1] >= 1 &&
    Number.isInteger(coors[0]) &&
    Number.isInteger(coors[1])
  )
}

/***/ }),

/***/ "./src/helpers/legalPlacement.js":
/*!***************************************!*\
  !*** ./src/helpers/legalPlacement.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const coordinatesExist = __webpack_require__(/*! ../helpers/coordinatesExist */ "./src/helpers/coordinatesExist.js");


const overlapsWithPreviousPlacement = function(shipDetailsCollection, positions) {
  return shipDetailsCollection.some(shipDetails => {
    return positions.some(position => shipDetails.matches(position))
  })
}

//Check that all positions fall within Gameboard boundaries
const positionsAreLegal = function(positions) {
  return positions.every(position => {
    return coordinatesExist(position)
  })
}

const illegalPlacementMessage = function(shipDetailsCollection, positions) {
  if (!positionsAreLegal(positions)) {
    return "One or more positions are out of bounds"
  } else if (overlapsWithPreviousPlacement(shipDetailsCollection, positions)) {
    return "A ship already occupies one or more of those coordinates"
  }
}

module.exports = {illegalPlacementMessage}

/***/ }),

/***/ "./src/helpers/positionHelpers.js":
/*!****************************************!*\
  !*** ./src/helpers/positionHelpers.js ***!
  \****************************************/
/***/ ((module) => {

const getPositionDivFromCoors = function(coors, gameboardPositions) {
  return gameboardPositions[((coors[0] - 1) * 10 + coors[1] - 1)];
}

const applyToPositions = function(coorsSet, gameboardPositions, callback, callbackArgs) {
  coorsSet.forEach(coors => {
    callback(getPositionDivFromCoors(coors, gameboardPositions), ...callbackArgs);
  });
}

const applyArrayToPositions = function(coors, gameboardPositions, callback, array) {
  coors.forEach((coors, idx) => {
    callback(getPositionDivFromCoors(coors, gameboardPositions), array[idx]);
  });
}

const addClassToPosition = (position, className) => position.classList.add(className);

const addInitialToPosition = (position, initial) => position.textContent = initial;

module.exports = {
  applyToPositions, 
  applyArrayToPositions, 
  addClassToPosition, 
  addInitialToPosition
}

/***/ }),

/***/ "./src/interface/createCustomElement.js":
/*!**********************************************!*\
  !*** ./src/interface/createCustomElement.js ***!
  \**********************************************/
/***/ ((module) => {

module.exports = function(type, className, text) {
  const el = document.createElement(type);
  el.className = className;
  if (text) {el.textContent = text;}
  return el;
}

/***/ }),

/***/ "./src/interface/gameplayDisplay.js":
/*!******************************************!*\
  !*** ./src/interface/gameplayDisplay.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const createCustomElement = __webpack_require__(/*! ./createCustomElement.js */ "./src/interface/createCustomElement.js")
const {
  applyToPositions, 
  applyArrayToPositions, 
  addClassToPosition, 
  addInitialToPosition
} = __webpack_require__(/*! ../helpers/positionHelpers */ "./src/helpers/positionHelpers.js")




const updateBoard = function(allShots, playerIsComputer) {
  const offensiveName = (playerIsComputer ? "computer" : "human")
  const defensiveName = (playerIsComputer ? "human" : "computer")

  //Get the gameboard positions DOMCollection of the defensive player
  const defensiveGameboard = document.getElementById(`${defensiveName}-gameboard`)
  const gameboardPositions = defensiveGameboard.getElementsByClassName("position")

  //Add the appropriate class to "missed" positions
  const missedCoors = allShots[offensiveName].missed.map(shot => shot.coors)
  applyToPositions(missedCoors, gameboardPositions, addClassToPosition, ["missed"])

  //Add the appropriate class to "hit" positions
  //Insert the initial of the hit ship into the "hit" positions
  const hitCoors = allShots[offensiveName].hit.map(shot => shot.coors);
  const hitShipsInitials = allShots[offensiveName].hit.map(shots => shots.shipName[0]);
  applyToPositions(hitCoors, gameboardPositions, addClassToPosition, ["hit"])
  applyArrayToPositions(hitCoors, gameboardPositions, addInitialToPosition, hitShipsInitials)
  
  //Add the appropriate class to "sunk" positions
  const sunkCoors = allShots[offensiveName].sunk.map(shot => shot.shipCoors).flat();
  applyToPositions(sunkCoors, gameboardPositions, addClassToPosition, ["sunk"])
}



const displayMessage = function(wrapperId, messageId, message, timeout) {
  //Insert message into message element
  const wrapperEl = document.getElementById(wrapperId);
  wrapperEl.textContent = "";
  const messageEl = createCustomElement("DIV", "message", message);
  messageEl.id = messageId;
  wrapperEl.appendChild(messageEl)

  if (timeout) {
    //disappear message after 3s
    setTimeout(() => {
      messageEl.remove();
    }, 3000)
  }
}

const displayIllegalMessage = function(message) {
  displayMessage("error-message-wrapper", "error-message", message, true)
}

const displayComputerResponse = function(message) {
  displayMessage("computer-response-wrapper", "computer-response", message, true)
}

//Refactor
const addNewGameBtn = function() {
  const newGameBtn = createCustomElement("BTN", "", "New Game?");
  newGameBtn.id = "new-game-btn";
  const victoryDisplay = document.getElementById("victory-display");
  victoryDisplay.appendChild(newGameBtn);
}

const displayVictory = function(victor/*, startNewGame*/) {
  let message;
  if (victor.isComputer) {
    message = "Rats! Computer wins..."
  } else if (victor.name) {
    message = `Congratulations, ${victor.name}, you win!`
  } else {
    message = "Congratulations, you win!"
  }
  //Display the victory message
  displayMessage("victory-message-wrapper", "victory-message", message)

  //addNewGameBtn(startNewGame);
}

module.exports = {displayIllegalMessage, updateBoard, displayVictory, displayComputerResponse}

/***/ }),

/***/ "./src/interface/initializeBoards.js":
/*!*******************************************!*\
  !*** ./src/interface/initializeBoards.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const createCustomElement = __webpack_require__(/*! ./createCustomElement.js */ "./src/interface/createCustomElement.js");
const {
  applyToPositions, 
  applyArrayToPositions, 
  addClassToPosition, 
  addInitialToPosition
} = __webpack_require__(/*! ../helpers/positionHelpers */ "./src/helpers/positionHelpers.js")

const ROWINDICES = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const wipeBoard = function(board) {
  board.textContent = "";
}

const createPositionEl = function(coordinates) {
  const positionEl = createCustomElement("DIV", "position")
  positionEl.dataset.xCoor = coordinates[0];
  positionEl.dataset.yCoor = coordinates[1];
  return positionEl
}

const createRowIndexDiv = function(index) {
  return createCustomElement("DIV", "row-index", ROWINDICES[index]);
}

const createColumnIndex = function(index) {
  return createCustomElement("DIV", "column-index", index + 1);
}

const createEmptyCorner = function() {
  return createCustomElement("DIV", "empty-corner")
}


const fillGameboards = function(shipDetailsArray) {
  
  const humanGameboard = document.getElementById("human-gameboard")
  const computerGameboard = document.getElementById("computer-gameboard")


  //Begin by wiping both boards
  wipeBoard(humanGameboard);
  wipeBoard(computerGameboard);

  //Create the column index row
  humanGameboard.appendChild(createEmptyCorner())
  computerGameboard.appendChild(createEmptyCorner())
  for (let i = 0; i < 10; i++) {
    //Add the column index
    humanGameboard.appendChild(createColumnIndex(i))
    computerGameboard.appendChild(createColumnIndex(i))
  }

  //Create the main rows
  for (let i = 0; i < 10; i++) {
    // Add the row index to both gameboards
    humanGameboard.appendChild(createRowIndexDiv(i))
    computerGameboard.appendChild(createRowIndexDiv(i));
    //Add a row of position divs to both gameboards
    for (let j = 0; j < 10; j++ ) {
      humanGameboard.appendChild(createPositionEl([i + 1, j + 1]))
      computerGameboard.appendChild(createPositionEl([i + 1, j + 1]));
    }
  }

  
  const humanPositions = humanGameboard.getElementsByClassName("position");
  if (shipDetailsArray.length > 0) {
    shipDetailsArray.forEach(shipDetails => {
      //Add the ships initials to occupied positions if there are any ships
      applyToPositions(
        shipDetails.positions,
        humanPositions, 
        addInitialToPosition, 
        [shipDetails.ship.name[0]]
      )

      applyToPositions(
        shipDetails.positions,
        humanPositions,
        addClassToPosition,
        ["occupied"]
      )
    })
  }
}



const attachPositionListeners = function(takeRound) {
  const positionEls = document.getElementById("computer-gameboard")
                              .getElementsByClassName("position");
                              
  for (i = 0; i < positionEls.length; i++) {
    //Attach the listener
    positionEls[i].addEventListener("click", (e) => {
      const xCoordinate = parseInt(e.target.dataset.xCoor);
      const yCoordinate = parseInt(e.target.dataset.yCoor);
      takeRound([xCoordinate, yCoordinate])
    })

    positionEls[i].classList.add("active")
  }
}

module.exports = {fillGameboards, attachPositionListeners}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__(/*! ./style/style.css */ "./src/style/style.css")
const Game = __webpack_require__(/*! ./factories/Game */ "./src/factories/Game.js");
const initializeBoards = __webpack_require__(/*! ./interface/initializeBoards */ "./src/interface/initializeBoards.js")
const gameplayDisplay = __webpack_require__(/*! ./interface/gameplayDisplay */ "./src/interface/gameplayDisplay.js")


let currentGame = Game();
let nextGame;

const takeTurn = function(coors, playerIsComputer) {
  //Record the shot in the game object
  currentGame.takeShot(coors, playerIsComputer)
  
  //Update the board in the UI
  gameplayDisplay.updateBoard(currentGame.allShots, playerIsComputer);

  //Display attackReportMessage if this is the human's turn
  if (!playerIsComputer) {
    gameplayDisplay.displayComputerResponse(currentGame.attackReportMessage)
  }
}

const takeComputerTurn = function() {
  const computerCoors = currentGame.computerMove;
  takeTurn(computerCoors, true);
}


const takeRound = function(humanCoors) {
  //If victory has already been declared, do not execute the round
  if (currentGame.victor) {
    return
  }

  //If move is illegal, display the illegal move message in the UI
  const errorMessage = currentGame.illegalHumanMoveMessage(humanCoors)
  if (errorMessage) {
    return gameplayDisplay.displayIllegalMessage(errorMessage)
  }
  
  //If move is legal, take the turn
  takeTurn(humanCoors, false)

  //If human turn is decisive, short-circuit the round
  if (currentGame.victor) {
    //FIX THIS (add display and new game stuff)
    nextGame = Game();
    return gameplayDisplay.displayVictory(currentGame.victor/*, nextGame.setup*/)
  }

  //If the human turn is not decisive, let the computer go
  takeComputerTurn()
}





//Set up DOM boards
initializeBoards.fillGameboards(currentGame.humanShipDetailsArray);
initializeBoards.attachPositionListeners(takeRound);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map