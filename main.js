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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n#game-container {\n  width: 740px\n}\n\n\n\n#gameboards {\n  display: flex;\n  justify-content: space-between;\n  width: 100%\n}\n\n.gameboard {\n  width: 300px;\n  height: 300px;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n}\n\n\n#board-divider {\n  border-right: 2px solid black;\n}\n\n\n\n.position {\n  height: 20px;\n  width: 20px;\n  border: 1px solid black;\n  background-image: radial-gradient(#000 0%, lightgray  20%);\n  background-color: lightgray;\n}\n\n#computer-response-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;EACE;AACF;;;;AAIA;EACE,aAAa;EACb,8BAA8B;EAC9B;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,aAAa;EACb,sCAAsC;AACxC;;;AAGA;EACE,6BAA6B;AAC/B;;;;AAIA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,0DAA0D;EAC1D,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n#game-container {\n  width: 740px\n}\n\n\n\n#gameboards {\n  display: flex;\n  justify-content: space-between;\n  width: 100%\n}\n\n.gameboard {\n  width: 300px;\n  height: 300px;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n}\n\n\n#board-divider {\n  border-right: 2px solid black;\n}\n\n\n\n.position {\n  height: 20px;\n  width: 20px;\n  border: 1px solid black;\n  background-image: radial-gradient(#000 0%, lightgray  20%);\n  background-color: lightgray;\n}\n\n#computer-response-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n\n\n"],"sourceRoot":""}]);
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
  if (hitShip) {
    //If the attack shot hits, report hit details
    return {
      hit: true,
      sunk: hitShip.isSunk(),
      shipName: hitShip.name,
      coors: coors
    }
  } else {
    //If the shot misses, report hit as false
    return {
      hit: false,
      coors: coors
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

function Game() {
  const humanPlayer = Player("placeholder");
  const computerPlayer = Player("computer", true);
  const humanGameboard = Gameboard();
  const computerGameboard = Gameboard();
  let victor;
  let illegalMoveMessage;

  //Place ships arbitrarily for now

  //Place Patrol Boats
  computerGameboard.placeShip([[9,7], [9,6]], "Patrol Boat")
  humanGameboard.placeShip([[1,2], [2,2]], "Patrol Boat")


  //Place Destroyers
  computerGameboard.placeShip([[1,2], [2,2], [3,2]], "Destroyer")
  humanGameboard.placeShip([[5,6], [4,6], [3,6]], "Destroyer")

  //Place Submarines
  computerGameboard.placeShip([[4,5], [5,5], [5,6]], "Submarine")
  humanGameboard.placeShip([[3,1], [3,2], [3,3]], "Submarine")

  //Place Battleships
  computerGameboard.placeShip([[8,3], [8,4], [8,5], [8,6]], "Battleship")
  humanGameboard.placeShip([[6,5], [6,6], [6,7], [6,8]], "Battleship")

  //Place Carriers
  computerGameboard.placeShip([[2,10], [3,10], [4,10], [5,10], [6,10]], "Carrier")
  humanGameboard.placeShip([[10,9], [9,9], [8,9], [7,9], [6,9]], "Carrier")

  const takeHumanTurn = function(coors) {
    //Check to see if move is illegal
    const errorMessage = humanPlayer.illegalMoveMessage(coors)
    if (!errorMessage) {
      takeTurn(humanPlayer, computerGameboard, coors)
    } else {
      illegalMoveMessage = errorMessage
    } 
  }
  
  const takeTurn = function(offensivePlayer, defensiveGameboard, coors) {
    //call receiveAttack on defensive Gameboard
    defensiveGameboard.receiveAttack(coors);
    //call getAttackReport on defensive Gameboard
    const attackReport = defensiveGameboard.getAttackReport();
    //call receiveReport on offensive Player
    offensivePlayer.receiveReport(attackReport);
    //call allSunk on defensive Gameboard to check for victory
    if (defensiveGameboard.allSunk()) {
      declareVictory()
    }
  }

  const takeComputerTurn = function() {
    const coors = computerPlayer.getComputerMove();
    takeTurn(computerPlayer, humanGameboard, coors);
  }

  const declareVictory = function(player) {
    //update DOM
    victor = player;
  }

  const getVictor = function() {
    return victor;
  }

  const getIllegalMoveMessage = function() {
    return illegalMoveMessage;
  }

  return {takeHumanTurn, getVictor, getIllegalMoveMessage}
}

module.exports = Game;

/***/ }),

/***/ "./src/factories/Gameboard.js":
/*!************************************!*\
  !*** ./src/factories/Gameboard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./Ship */ "./src/factories/Ship.js");
const coordinatesExist = __webpack_require__(/*! ../helpers/coordinatesExist */ "./src/helpers/coordinatesExist.js");
const AttackReport = __webpack_require__(/*! ./AttackReport */ "./src/factories/AttackReport.js");


function Gameboard() {
  const ships = [];
  let attackReport = {};

  // Add create new Ship object and add to ships unless
  // out of bounds
  const placeShip = function(positions, name) {
    const error = illegalPlacementError(positions);
    if (!error) {
      ships.push({
        ship: Ship(positions.length, name),
        positions: positions
      })
    } else {
      throw error
    }
  }

  const illegalPlacementError = function(positions) {
    if (!positionsAreLegal(positions)) {
      return new Error("One or more positions are out of bounds")
    } else if (overlapsWithPreviousPlacement(positions)) {
      return new Error("A ship already occupies one or more of those coordinates")
    }
  }

  const overlapsWithPreviousPlacement = function(positions) {
    return ships.some(ship => {
      return positions.some(iteratedPos => getMatchedPosition(ship, iteratedPos))
    })
  }
  //Check that all positions fall within Gameboard boundaries
  const positionsAreLegal = function(positions) {
    return positions.every(position => {
      return coordinatesExist(position)
    })
  }

  const getMatchedPosition = function(ship, position) {
    return ship.positions.some(iteratedPos => positionsAreEqual(iteratedPos, position))
  }

  const getHitShipInfo = function(targetCoors) {
    return ships.find(ship => getMatchedPosition(ship, targetCoors))
  }

  const getHitPositionIndex = function(hitShipInfo, targetCoors) {
    return hitShipInfo.positions.findIndex(pos => positionsAreEqual(pos, targetCoors))
  }

  const markPositionHit = function(hitShipInfo, targetCoors) {
    const positionIndex = getHitPositionIndex(hitShipInfo, targetCoors);
    hitShipInfo.ship.hit(positionIndex)
  }

  const positionsAreEqual = function(pos1, pos2) {
    return (pos1[0] === pos2[0] && pos1[1] === pos2[1])
  }


  const receiveAttack = function(targetCoors) {
    const hitShipInfo = getHitShipInfo(targetCoors);
    if (hitShipInfo) {
      //If a ship is hit, call the hit method on the hitShip
      markPositionHit(hitShipInfo, targetCoors);
    } 
    //Update the attackReport
    setAttackReport(targetCoors, hitShipInfo);
  }

  const setAttackReport = function(coors, hitShipInfo) {
    attackReport = (
      hitShipInfo ? AttackReport(coors, hitShipInfo.ship) : AttackReport(coors)
    )
  }

  const getAttackReport = function() {
    return attackReport;
  }

  const allSunk = function() {
    if (ships.length === 0) {
      return false
    } else {
      return ships.every(shipInfo => shipInfo.ship.isSunk())
    }
  }
  
  return {placeShip, receiveAttack, getAttackReport, allSunk}
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
  const hitShots = []
  const missedShots = []

  

  const illegalMoveMessage = function(coors) {
    if (!coordinatesExist(coors)) {
      return "Those coordinates are nonexistant"
    } else if (includesCoordinates(hitShots, coors)) {
      return "Those coordinates have already been hit"
    } else if (includesCoordinates(missedShots, coors)) {
      return "Those coordinates have already been shot at and missed"
    } 
  }


  const includesCoordinates = function(array, coors) {
    return !!array.find(coordinates => {
      return (
        coors[0] === coordinates[0] &&
        coors[1] === coordinates[1]
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
    } while (includesCoordinates(hitShots.concat(missedShots), computerMove))   
    return computerMove;
  }

  const receiveReport = function(attackReport) {
    if (attackReport.hit) {
      hitShots.push(attackReport.coors)
    } else {
      missedShots.push(attackReport.coors)
    }
  }

  const getMissedShots = function() {
    return missedShots
  }

  const getHitShots = function() {
    return hitShots
  }

  return {illegalMoveMessage, getComputerMove, receiveReport, getMissedShots, getHitShots, isComputer}
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

/***/ "./src/interface/manageDOM.js":
/*!************************************!*\
  !*** ./src/interface/manageDOM.js ***!
  \************************************/
/***/ ((module) => {

const createCustomElement = function(type, className, text) {
  const el = document.createElement(type);
  el.className = className;
  if (text) {el.textContent = text;}
  return el;
}

const fillGameboard = function() {
  const rowIndices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const humanGameboard = document.getElementById("human-gameboard")
  const computerGameboard = document.getElementById("computer-gameboard")

  const createPositionEl = function(coordinates) {
    const positionEl = createCustomElement("DIV", "position")
    positionEl.dataset.xCoor = coordinates[0];
    positionEl.dataset.yCoor = coordinates[1];
    return positionEl
  }

  const createRowIndexDiv = function(index) {
    return createCustomElement("DIV", "row-index", rowIndices[index]);
  }

  const createColumnIndex = function(index) {
    return createCustomElement("DIV", "column-index", index + 1);
  }
  
  const createEmptyCorner = function() {
    return createCustomElement("DIV", "empty-corner")
  }

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
}

const handlePositionClick = function(e) {

}


const attachPositionListeners = function(takeHumanTurn) {
  const positionEls = document.getElementsByClassName("PositionEls");
  for (i = 0; i < PositionEls; i++) {
    positionEls[i].addEventListener("click", () => {
      takeHumanTurn(e.target.dataset.xCoor, e.target.dataset.yCoor)
    })
  }
}



module.exports = {fillGameboard, attachPositionListeners}

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _factories_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/Game */ "./src/factories/Game.js");
/* harmony import */ var _factories_Game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factories_Game__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interface_manageDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface/manageDOM.js */ "./src/interface/manageDOM.js");
/* harmony import */ var _interface_manageDOM_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_interface_manageDOM_js__WEBPACK_IMPORTED_MODULE_2__);






_interface_manageDOM_js__WEBPACK_IMPORTED_MODULE_2__.fillGameboard();

const game = _factories_Game__WEBPACK_IMPORTED_MODULE_1___default()();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map