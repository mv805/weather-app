/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 14px;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(43, 43, 43);\r\n    margin: 0;\r\n    width: 100vw;\r\n    min-height: 130vh;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: top;\r\n    align-items: center;\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n    margin: 5px 0 0 0;\r\n    color: rgb(168, 168, 168);\r\n    font-size: 2rem;\r\n    font-family: 'Lobster', cursive;\r\n}\r\nimg {\r\n    width: 2.5rem;\r\n}\r\n\r\n/*panel  ||*/\r\n.panel {\r\n    background-color: rgb(77, 77, 80);\r\n    border-radius: .5rem;\r\n    color: white;\r\n    margin: 10px;\r\n    width: 80%;\r\n    max-width: 450px;\r\n    padding: 1rem;\r\n    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\r\n}\r\n\r\n/*search bar ||*/\r\n\r\n.search-bar {\r\n    height: 8rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: top;\r\n    align-items: center;\r\n\r\n}\r\n\r\n#search-bar {\r\n    font: inherit;\r\n    color: aliceblue;\r\n    margin: 10px 0;\r\n    height: 2rem;\r\n    width: 100%;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n    background-color: rgb(131, 131, 131);\r\n}\r\n\r\n#search-bar::placeholder {\r\n    color: rgb(88, 88, 88)\r\n}\r\n\r\n#search-bar:focus {\r\n    outline-color: rgb(255, 234, 166);\r\n    outline-style: solid;\r\n    outline-width: 3px;\r\n}\r\n\r\n.search-bar button {\r\n    width: 100px;\r\n    border-radius: 3px;\r\n    border-style: none;\r\n    height: 30px;\r\n    font-family: inherit;\r\n    background-color: rgb(134, 158, 179);\r\n}\r\n\r\n.search-bar button:active {\r\n    color: aliceblue;\r\n    background-color: rgb(194, 194, 194);\r\n}\r\n\r\n.search-bar button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.search-error-text {\r\n    height: 2rem;\r\n    width: 100%;\r\n    text-align: left;\r\n    font-size: .8rem;\r\n    font-family: inherit;\r\n    color: rgb(255, 145, 145);\r\n}\r\n\r\n/*weather display ||*/\r\n\r\n.weather-display {\r\n    font-size: 1.25rem;\r\n    display: grid;\r\n    grid-template: 1fr 2fr repeat(4, 1fr)/1fr 1fr;\r\n    grid-template-areas:\r\n        'city-name city-name'\r\n        'weather-status weather-status'\r\n        'feels-like feels-like'\r\n        'high high'\r\n        'low low'\r\n        'humidity humidity';\r\n    gap: 10px;\r\n\r\n}\r\n\r\n#city-name {\r\n    grid-area: city-name;\r\n    align-self: center;\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    font-style: italic;\r\n    text-decoration: underline;\r\n}\r\n#weather {\r\n    grid-area: weather-status;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n    background-color: rgb(89, 92, 94);\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\r\n}\r\n#weather-status {\r\n    justify-self: center;\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgb(131, 131, 131);\r\n    height: 5rem;\r\n    width: 70%;\r\n    border-radius: 4px;\r\n}\r\n\r\n#current-temp {\r\n    justify-self: center;\r\n    align-self: center;\r\n    font-size: 3rem;\r\n    font-weight: 900;\r\n    padding-left: 1rem;\r\n}\r\n\r\n#feels-like {\r\n    grid-area: feels-like;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#feels-like div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#low {\r\n    grid-area: low;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#low div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#high {\r\n    grid-area: high;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#high div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#humidity {\r\n    grid-area: humidity;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#humidity div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n.temp-value {\r\n    background-color: rgb(59, 59, 59);\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    line-height: 2.5;\r\n    box-shadow: rgb(34, 34, 34) 3px 3px 6px 0px inset, rgba(63, 63, 63, 0.5) -3px -3px 6px 1px inset;\r\n    border-radius: 5px;\r\n}\r\n\r\n#conversion-button {\r\n    width: 100px;\r\n    border-radius: 3px;\r\n    border-style: none;\r\n    padding: .5rem 0;\r\n    font-family: inherit;\r\n    background-color: rgb(190, 190, 190);\r\n}\r\n\r\n#conversion-button:active {\r\n    background-color: rgb(78, 78, 78);\r\n    color: rgb(161, 161, 161);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,SAAS;IACT,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;IACzB,eAAe;IACf,+BAA+B;AACnC;AACA;IACI,aAAa;AACjB;;AAEA,YAAY;AACZ;IACI,iCAAiC;IACjC,oBAAoB;IACpB,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,kLAAkL;AACtL;;AAEA,gBAAgB;;AAEhB;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI;AACJ;;AAEA;IACI,iCAAiC;IACjC,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA,qBAAqB;;AAErB;IACI,kBAAkB;IAClB,aAAa;IACb,6CAA6C;IAC7C;;;;;;2BAMuB;IACvB,SAAS;;AAEb;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;AAC9B;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,2BAA2B;IAC3B,iCAAiC;IACjC,kBAAkB;IAClB,4IAA4I;AAChJ;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,YAAY;IACZ,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,gGAAgG;IAChG,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,oBAAoB;IACpB,oCAAoC;AACxC;;AAEA;IACI,iCAAiC;IACjC,yBAAyB;AAC7B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\n\r\n:root {\r\n    font-size: 14px;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(43, 43, 43);\r\n    margin: 0;\r\n    width: 100vw;\r\n    min-height: 130vh;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: top;\r\n    align-items: center;\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n    margin: 5px 0 0 0;\r\n    color: rgb(168, 168, 168);\r\n    font-size: 2rem;\r\n    font-family: 'Lobster', cursive;\r\n}\r\nimg {\r\n    width: 2.5rem;\r\n}\r\n\r\n/*panel  ||*/\r\n.panel {\r\n    background-color: rgb(77, 77, 80);\r\n    border-radius: .5rem;\r\n    color: white;\r\n    margin: 10px;\r\n    width: 80%;\r\n    max-width: 450px;\r\n    padding: 1rem;\r\n    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\r\n}\r\n\r\n/*search bar ||*/\r\n\r\n.search-bar {\r\n    height: 8rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: top;\r\n    align-items: center;\r\n\r\n}\r\n\r\n#search-bar {\r\n    font: inherit;\r\n    color: aliceblue;\r\n    margin: 10px 0;\r\n    height: 2rem;\r\n    width: 100%;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n    background-color: rgb(131, 131, 131);\r\n}\r\n\r\n#search-bar::placeholder {\r\n    color: rgb(88, 88, 88)\r\n}\r\n\r\n#search-bar:focus {\r\n    outline-color: rgb(255, 234, 166);\r\n    outline-style: solid;\r\n    outline-width: 3px;\r\n}\r\n\r\n.search-bar button {\r\n    width: 100px;\r\n    border-radius: 3px;\r\n    border-style: none;\r\n    height: 30px;\r\n    font-family: inherit;\r\n    background-color: rgb(134, 158, 179);\r\n}\r\n\r\n.search-bar button:active {\r\n    color: aliceblue;\r\n    background-color: rgb(194, 194, 194);\r\n}\r\n\r\n.search-bar button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.search-error-text {\r\n    height: 2rem;\r\n    width: 100%;\r\n    text-align: left;\r\n    font-size: .8rem;\r\n    font-family: inherit;\r\n    color: rgb(255, 145, 145);\r\n}\r\n\r\n/*weather display ||*/\r\n\r\n.weather-display {\r\n    font-size: 1.25rem;\r\n    display: grid;\r\n    grid-template: 1fr 2fr repeat(4, 1fr)/1fr 1fr;\r\n    grid-template-areas:\r\n        'city-name city-name'\r\n        'weather-status weather-status'\r\n        'feels-like feels-like'\r\n        'high high'\r\n        'low low'\r\n        'humidity humidity';\r\n    gap: 10px;\r\n\r\n}\r\n\r\n#city-name {\r\n    grid-area: city-name;\r\n    align-self: center;\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    font-style: italic;\r\n    text-decoration: underline;\r\n}\r\n#weather {\r\n    grid-area: weather-status;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n    background-color: rgb(89, 92, 94);\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\r\n}\r\n#weather-status {\r\n    justify-self: center;\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgb(131, 131, 131);\r\n    height: 5rem;\r\n    width: 70%;\r\n    border-radius: 4px;\r\n}\r\n\r\n#current-temp {\r\n    justify-self: center;\r\n    align-self: center;\r\n    font-size: 3rem;\r\n    font-weight: 900;\r\n    padding-left: 1rem;\r\n}\r\n\r\n#feels-like {\r\n    grid-area: feels-like;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#feels-like div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#low {\r\n    grid-area: low;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#low div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#high {\r\n    grid-area: high;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#high div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#humidity {\r\n    grid-area: humidity;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#humidity div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n.temp-value {\r\n    background-color: rgb(59, 59, 59);\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    line-height: 2.5;\r\n    box-shadow: rgb(34, 34, 34) 3px 3px 6px 0px inset, rgba(63, 63, 63, 0.5) -3px -3px 6px 1px inset;\r\n    border-radius: 5px;\r\n}\r\n\r\n#conversion-button {\r\n    width: 100px;\r\n    border-radius: 3px;\r\n    border-style: none;\r\n    padding: .5rem 0;\r\n    font-family: inherit;\r\n    background-color: rgb(190, 190, 190);\r\n}\r\n\r\n#conversion-button:active {\r\n    background-color: rgb(78, 78, 78);\r\n    color: rgb(161, 161, 161);\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
  } // For old IE

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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearSearchAndError": () => (/* binding */ clearSearchAndError),
/* harmony export */   "convertTemperaturesOnDisplay": () => (/* binding */ convertTemperaturesOnDisplay),
/* harmony export */   "createConversionButton": () => (/* binding */ createConversionButton),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createSearchBarArea": () => (/* binding */ createSearchBarArea),
/* harmony export */   "createWeatherDisplay": () => (/* binding */ createWeatherDisplay),
/* harmony export */   "domIdList": () => (/* binding */ domIdList),
/* harmony export */   "updateWeatherDisplay": () => (/* binding */ updateWeatherDisplay)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
//ABOUT: various functions for manipulating the display, to be referenced from the index module


const domIdList = {
    'Search Bar': 'search-bar',
    'City Name': 'city-name',
    'Weather Status Container': 'weather',
    'Current Temperature': 'current-temp',
    'Weather Status Box': 'weather-status',
    'Feels Like Temperature': 'feels-like',
    'High Temperature': 'high',
    'Low Temperature': 'low',
    'Humidity': 'humidity',
    'Weather Icon': 'weather-icon',
    'Weather Description': 'weather-description',
    'Temperature Unit Conversion Button': 'conversion-button',
    'Search Button': 'search',
}

function createSearchBarArea() {

    const searchBarBox = _createSearchContainer();
    const searchBar = _createSearchBar();
    const errorText = _createErrorTextArea();
    const searchButton = _createSearchButton();

    searchBarBox.appendChild(searchBar);
    searchBarBox.appendChild(errorText);
    searchBarBox.appendChild(searchButton);

    document.body.appendChild(searchBarBox);

    function _createSearchBar() {
        const searchBar = document.createElement('input');
        searchBar.type = 'text';
        searchBar.name = 'location';
        searchBar.placeholder = 'Search a Location';
        searchBar.id = domIdList['Search Bar'];
        return searchBar;
    }

    function _createSearchButton() {
        const searchButton = document.createElement('button');
        searchButton.textContent = 'Search';
        searchButton.id = domIdList["Search Button"];
        return searchButton;
    }

    function _createErrorTextArea() {
        const errorText = document.createElement('div');
        errorText.classList.add('search-error-text');
        return errorText;
    }

    function _createSearchContainer() {
        const searchBarBox = document.createElement('div');
        searchBarBox.classList.add('search-bar', 'panel');
        return searchBarBox;
    }

}

function createWeatherDisplay() {

    const weatherDisplayPanel = _createWeatherDisplayPanel();
    const cityName = _createCityName();
    const currentWeather = _createWeatherStatusBox();
    const feelsLikeInfoBox = _createInfoBox('Feels Like Temperature');
    const highTempBox = _createInfoBox('High Temperature');
    const lowTempBox = _createInfoBox('Low Temperature');
    const humidityBox = _createInfoBox('Humidity');

    weatherDisplayPanel.appendChild(cityName);
    weatherDisplayPanel.appendChild(currentWeather);
    weatherDisplayPanel.appendChild(feelsLikeInfoBox);
    weatherDisplayPanel.appendChild(highTempBox);
    weatherDisplayPanel.appendChild(lowTempBox);
    weatherDisplayPanel.appendChild(humidityBox);

    document.body.appendChild(weatherDisplayPanel);


    function _createCityName() {
        const cityName = document.createElement('div');
        cityName.id = domIdList["City Name"];
        return cityName;
    }

    function _createWeatherDisplayPanel() {
        const weatherDisplayPanel = document.createElement('div');
        weatherDisplayPanel.classList.add('weather-display', 'panel');

        return weatherDisplayPanel;
    }

    function _createWeatherStatusBox() {

        const currentWeatherStatusBox = document.createElement('div');
        currentWeatherStatusBox.id = domIdList["Weather Status Container"];

        const currentTemp = document.createElement('div');
        currentTemp.id = domIdList["Current Temperature"];

        const weatherStatus = document.createElement('div');
        weatherStatus.id = domIdList["Weather Status Box"];
        const weatherSymbol = document.createElement('img');
        weatherSymbol.id = domIdList["Weather Icon"];
        weatherSymbol.alt = 'weather icon';
        const weatherDescription = document.createElement('div');
        weatherDescription.id = domIdList["Weather Description"];
        weatherStatus.appendChild(weatherSymbol);
        weatherStatus.appendChild(weatherDescription);

        currentWeatherStatusBox.appendChild(currentTemp);
        currentWeatherStatusBox.appendChild(weatherStatus);

        return currentWeatherStatusBox;
    }

    function _createInfoBox(domId) {

        const infoContainer = document.createElement('div');
        infoContainer.id = domIdList[domId];

        const infoDescription = document.createElement('div');
        infoDescription.textContent = domId.replace(' Temperature', '');

        const infoOutput = document.createElement('div');
        infoOutput.classList.add('temp-value');

        infoContainer.appendChild(infoDescription);
        infoContainer.appendChild(infoOutput);

        return infoContainer;
    }
}

function createConversionButton() {

    const conversionButton = document.createElement('button');
    conversionButton.classList.add('conversion-button');
    conversionButton.id = domIdList["Temperature Unit Conversion Button"];
    conversionButton.textContent = 'C\u00B0/F\u00B0';

    document.body.appendChild(conversionButton);
}

function createHeader() {

    const header = document.createElement('header');
    header.textContent = 'The Weather App';

    document.body.appendChild(header);
}

function clearSearchAndError() {

    document.getElementById(domIdList['Search Bar']).value = '';
    document.querySelector(`.search-error-text`).textContent = '';

}

function convertTemperaturesOnDisplay(weatherUnits) {

    if (weatherUnits.imperial) {
        weatherUnits.imperial = false;
        weatherUnits.metric = true;
        weatherUnits['weather letter'] = 'C';
    } else {
        weatherUnits.imperial = true;
        weatherUnits.metric = false;
        weatherUnits['weather letter'] = 'F';
    }

    swapTemperatureValue(`#${domIdList['Current Temperature']}`, 2, weatherUnits['weather letter']);
    swapTemperatureValue(`#${domIdList['Feels Like Temperature']} .temp-value`, 2, weatherUnits['weather letter']);
    swapTemperatureValue(`#${domIdList['High Temperature']} .temp-value`, 2, weatherUnits['weather letter']);
    swapTemperatureValue(`#${domIdList['Low Temperature']} .temp-value`, 2, weatherUnits['weather letter']);

}

function swapTemperatureValue(domSelector, charsToRemove, convertToUnit) {

    let tempToChange = document.querySelector(domSelector).textContent;
    tempToChange = tempToChange.slice(0, tempToChange.length - charsToRemove);
    document.querySelector(domSelector).textContent = _index_js__WEBPACK_IMPORTED_MODULE_0__.convertTemperature(tempToChange, convertToUnit) + '\u00B0' + convertToUnit;
    
}

function updateWeatherDisplay(weatherData, weatherUnits){

    document.getElementById(domIdList['City Name']).textContent = weatherData.name;

    document.getElementById(domIdList['Current Temperature']).textContent = Math.round(weatherData.main.temp) + '\u00B0' + weatherUnits['weather letter'];

    document.getElementById(domIdList['Weather Description']).textContent = weatherData.weather[0].main;

    let icon = document.getElementById(domIdList['Weather Icon']);
    icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

    document.querySelector(`#${domIdList['Feels Like Temperature']} .temp-value`).textContent = Math.round(weatherData.main.feels_like) + '\u00B0' + weatherUnits['weather letter'];

    document.querySelector(`#${domIdList['High Temperature']} .temp-value`).textContent = Math.round(weatherData.main.temp_max) + '\u00B0' + weatherUnits['weather letter'];

    document.querySelector(`#${domIdList['Low Temperature']} .temp-value`).textContent = Math.round(weatherData.main.temp_min) + '\u00B0' + weatherUnits['weather letter'];

    document.querySelector(`#${domIdList.Humidity} .temp-value`).textContent = `${Math.round(weatherData.main.humidity)}%`;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTemperature": () => (/* binding */ convertTemperature)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _weather_call_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-call.js */ "./src/weather-call.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




//keep track of what units are being displayed
const weatherUnits = {
    imperial: true,
    metric: false,
    'weather letter': 'F',
}

//initial page setup
_display_js__WEBPACK_IMPORTED_MODULE_0__.createHeader();
_display_js__WEBPACK_IMPORTED_MODULE_0__.createSearchBarArea();
_display_js__WEBPACK_IMPORTED_MODULE_0__.createWeatherDisplay();
_display_js__WEBPACK_IMPORTED_MODULE_0__.createConversionButton();

updateWeatherInfo('Los Angeles');

const conversionButton = document.getElementById(_display_js__WEBPACK_IMPORTED_MODULE_0__.domIdList["Temperature Unit Conversion Button"]);
const searchButton = document.getElementById(_display_js__WEBPACK_IMPORTED_MODULE_0__.domIdList["Search Button"]);

conversionButton.addEventListener('click', () => {
    _display_js__WEBPACK_IMPORTED_MODULE_0__.convertTemperaturesOnDisplay(weatherUnits);
});

searchButton.addEventListener('click', searchLocation);

function searchLocation() {

    let searchInput = document.getElementById(_display_js__WEBPACK_IMPORTED_MODULE_0__.domIdList["Search Bar"]).value;

    if (searchInput === '') {
        document.querySelector(`.search-error-text`).textContent = 'Enter a location to search...';
        return;
    }

    updateWeatherInfo(searchInput);
}

async function updateWeatherInfo(location) {

    const weatherData = await _weather_call_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather(location);

    if(weatherData.message === 'city not found'){
        console.log('api call failed');
        document.querySelector('.search-error-text').textContent = 
        'Location should be in format: city name/city name, country code';
        return;
    }
    
    //normalize the units to F by default
    weatherUnits.imperial = true;
    weatherUnits.metric = false;
    weatherUnits['weather letter'] = 'F';

    _display_js__WEBPACK_IMPORTED_MODULE_0__.updateWeatherDisplay(weatherData, weatherUnits);
    _display_js__WEBPACK_IMPORTED_MODULE_0__.clearSearchAndError();

}

function convertTemperature(temperature, convertToThisUnit) {

    const CONVERSION_FACTOR = 1.8;
    const TEMP_OFFSET = 32;

    let result;

    if (convertToThisUnit === 'F') {
        result = Math.round(temperature * CONVERSION_FACTOR) + TEMP_OFFSET;
        return result;
    } else if (convertToThisUnit === 'C') {
        result = Math.round((temperature - TEMP_OFFSET) / CONVERSION_FACTOR);
        return result;
    } else {
        return temperature;
    }
}




/***/ }),

/***/ "./src/weather-call.js":
/*!*****************************!*\
  !*** ./src/weather-call.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentWeather": () => (/* binding */ getCurrentWeather)
/* harmony export */ });
//free api key from openweathermap.org
const API_KEY = 'd78f36805db656f7f4cf2a5ddb1892c7';

async function getCurrentWeather(location, units = 'imperial') {

    let searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    if (units === 'metric') {
        searchUrl += '&units=metric';
    } else {
        searchUrl += '&units=imperial';
    }
    
    const response = await fetch(searchUrl, {mode: 'cors'});
    const json = await response.json();

    return json;

}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItY2FsbC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgNDMpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTMwdmg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypwYW5lbCAgfHwqL1xcclxcbi5wYW5lbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDgwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKnNlYXJjaCBiYXIgfHwqL1xcclxcblxcclxcbi5zZWFyY2gtYmFyIHtcXHJcXG4gICAgaGVpZ2h0OiA4cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXIge1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXI6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHJnYig4OCwgODgsIDg4KVxcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhcjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmUtY29sb3I6IHJnYigyNTUsIDIzNCwgMTY2KTtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgIG91dGxpbmUtd2lkdGg6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNCwgMTU4LCAxNzkpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciBidXR0b246YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtZXJyb3ItdGV4dCB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMTQ1LCAxNDUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKndlYXRoZXIgZGlzcGxheSB8fCovXFxyXFxuXFxyXFxuLndlYXRoZXItZGlzcGxheSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDJmciByZXBlYXQoNCwgMWZyKS8xZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICAgJ2NpdHktbmFtZSBjaXR5LW5hbWUnXFxyXFxuICAgICAgICAnd2VhdGhlci1zdGF0dXMgd2VhdGhlci1zdGF0dXMnXFxyXFxuICAgICAgICAnZmVlbHMtbGlrZSBmZWVscy1saWtlJ1xcclxcbiAgICAgICAgJ2hpZ2ggaGlnaCdcXHJcXG4gICAgICAgICdsb3cgbG93J1xcclxcbiAgICAgICAgJ2h1bWlkaXR5IGh1bWlkaXR5JztcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jY2l0eS1uYW1lIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjaXR5LW5hbWU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG4jd2VhdGhlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogd2VhdGhlci1zdGF0dXM7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg5LCA5MiwgOTQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDAuMDYyNWVtIDAuMDYyNWVtLCByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAwLjEyNWVtIDAuNWVtLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDBweCAwcHggMXB4IGluc2V0O1xcclxcbn1cXHJcXG4jd2VhdGhlci1zdGF0dXMge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC10ZW1wIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNmZWVscy1saWtlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmZWVscy1saWtlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiNmZWVscy1saWtlIGRpdiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsb3cge1xcclxcbiAgICBncmlkLWFyZWE6IGxvdztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jbG93IGRpdiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoaWdoIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoaWdoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiNoaWdoIGRpdiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNodW1pZGl0eSB7XFxyXFxuICAgIGdyaWQtYXJlYTogaHVtaWRpdHk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2h1bWlkaXR5IGRpdiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLXZhbHVlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigzNCwgMzQsIDM0KSAzcHggM3B4IDZweCAwcHggaW5zZXQsIHJnYmEoNjMsIDYzLCA2MywgMC41KSAtM3B4IC0zcHggNnB4IDFweCBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udmVyc2lvbi1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udmVyc2lvbi1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xcclxcbiAgICBjb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0xBQWtMO0FBQ3RMOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDOzs7Ozs7MkJBTXVCO0lBQ3ZCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQiw0SUFBNEk7QUFDaEo7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0dBQWdHO0lBQ2hHLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgNDMpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTMwdmg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypwYW5lbCAgfHwqL1xcclxcbi5wYW5lbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDgwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKnNlYXJjaCBiYXIgfHwqL1xcclxcblxcclxcbi5zZWFyY2gtYmFyIHtcXHJcXG4gICAgaGVpZ2h0OiA4cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXIge1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXI6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHJnYig4OCwgODgsIDg4KVxcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhcjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmUtY29sb3I6IHJnYigyNTUsIDIzNCwgMTY2KTtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgIG91dGxpbmUtd2lkdGg6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNCwgMTU4LCAxNzkpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciBidXR0b246YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtZXJyb3ItdGV4dCB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMTQ1LCAxNDUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKndlYXRoZXIgZGlzcGxheSB8fCovXFxyXFxuXFxyXFxuLndlYXRoZXItZGlzcGxheSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDJmciByZXBlYXQoNCwgMWZyKS8xZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICAgJ2NpdHktbmFtZSBjaXR5LW5hbWUnXFxyXFxuICAgICAgICAnd2VhdGhlci1zdGF0dXMgd2VhdGhlci1zdGF0dXMnXFxyXFxuICAgICAgICAnZmVlbHMtbGlrZSBmZWVscy1saWtlJ1xcclxcbiAgICAgICAgJ2hpZ2ggaGlnaCdcXHJcXG4gICAgICAgICdsb3cgbG93J1xcclxcbiAgICAgICAgJ2h1bWlkaXR5IGh1bWlkaXR5JztcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jY2l0eS1uYW1lIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjaXR5LW5hbWU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG4jd2VhdGhlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogd2VhdGhlci1zdGF0dXM7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg5LCA5MiwgOTQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDAuMDYyNWVtIDAuMDYyNWVtLCByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAwLjEyNWVtIDAuNWVtLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDBweCAwcHggMXB4IGluc2V0O1xcclxcbn1cXHJcXG4jd2VhdGhlci1zdGF0dXMge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC10ZW1wIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNmZWVscy1saWtlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmZWVscy1saWtlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiNmZWVscy1saWtlIGRpdiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsb3cge1xcclxcbiAgICBncmlkLWFyZWE6IGxvdztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jbG93IGRpdiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoaWdoIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoaWdoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiNoaWdoIGRpdiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNodW1pZGl0eSB7XFxyXFxuICAgIGdyaWQtYXJlYTogaHVtaWRpdHk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2h1bWlkaXR5IGRpdiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLXZhbHVlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigzNCwgMzQsIDM0KSAzcHggM3B4IDZweCAwcHggaW5zZXQsIHJnYmEoNjMsIDYzLCA2MywgMC41KSAtM3B4IC0zcHggNnB4IDFweCBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udmVyc2lvbi1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udmVyc2lvbi1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xcclxcbiAgICBjb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vQUJPVVQ6IHZhcmlvdXMgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgdGhlIGRpc3BsYXksIHRvIGJlIHJlZmVyZW5jZWQgZnJvbSB0aGUgaW5kZXggbW9kdWxlXHJcbmltcG9ydCAqIGFzIGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRvbUlkTGlzdCA9IHtcclxuICAgICdTZWFyY2ggQmFyJzogJ3NlYXJjaC1iYXInLFxyXG4gICAgJ0NpdHkgTmFtZSc6ICdjaXR5LW5hbWUnLFxyXG4gICAgJ1dlYXRoZXIgU3RhdHVzIENvbnRhaW5lcic6ICd3ZWF0aGVyJyxcclxuICAgICdDdXJyZW50IFRlbXBlcmF0dXJlJzogJ2N1cnJlbnQtdGVtcCcsXHJcbiAgICAnV2VhdGhlciBTdGF0dXMgQm94JzogJ3dlYXRoZXItc3RhdHVzJyxcclxuICAgICdGZWVscyBMaWtlIFRlbXBlcmF0dXJlJzogJ2ZlZWxzLWxpa2UnLFxyXG4gICAgJ0hpZ2ggVGVtcGVyYXR1cmUnOiAnaGlnaCcsXHJcbiAgICAnTG93IFRlbXBlcmF0dXJlJzogJ2xvdycsXHJcbiAgICAnSHVtaWRpdHknOiAnaHVtaWRpdHknLFxyXG4gICAgJ1dlYXRoZXIgSWNvbic6ICd3ZWF0aGVyLWljb24nLFxyXG4gICAgJ1dlYXRoZXIgRGVzY3JpcHRpb24nOiAnd2VhdGhlci1kZXNjcmlwdGlvbicsXHJcbiAgICAnVGVtcGVyYXR1cmUgVW5pdCBDb252ZXJzaW9uIEJ1dHRvbic6ICdjb252ZXJzaW9uLWJ1dHRvbicsXHJcbiAgICAnU2VhcmNoIEJ1dHRvbic6ICdzZWFyY2gnLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VhcmNoQmFyQXJlYSgpIHtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hCYXJCb3ggPSBfY3JlYXRlU2VhcmNoQ29udGFpbmVyKCk7XHJcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBfY3JlYXRlU2VhcmNoQmFyKCk7XHJcbiAgICBjb25zdCBlcnJvclRleHQgPSBfY3JlYXRlRXJyb3JUZXh0QXJlYSgpO1xyXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gX2NyZWF0ZVNlYXJjaEJ1dHRvbigpO1xyXG5cclxuICAgIHNlYXJjaEJhckJveC5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xyXG4gICAgc2VhcmNoQmFyQm94LmFwcGVuZENoaWxkKGVycm9yVGV4dCk7XHJcbiAgICBzZWFyY2hCYXJCb3guYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlYXJjaEJhckJveCk7XHJcblxyXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVNlYXJjaEJhcigpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHNlYXJjaEJhci50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIHNlYXJjaEJhci5uYW1lID0gJ2xvY2F0aW9uJztcclxuICAgICAgICBzZWFyY2hCYXIucGxhY2Vob2xkZXIgPSAnU2VhcmNoIGEgTG9jYXRpb24nO1xyXG4gICAgICAgIHNlYXJjaEJhci5pZCA9IGRvbUlkTGlzdFsnU2VhcmNoIEJhciddO1xyXG4gICAgICAgIHJldHVybiBzZWFyY2hCYXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVNlYXJjaEJ1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnU2VhcmNoJztcclxuICAgICAgICBzZWFyY2hCdXR0b24uaWQgPSBkb21JZExpc3RbXCJTZWFyY2ggQnV0dG9uXCJdO1xyXG4gICAgICAgIHJldHVybiBzZWFyY2hCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUVycm9yVGV4dEFyZWEoKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXJyb3JUZXh0LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1lcnJvci10ZXh0Jyk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlU2VhcmNoQ29udGFpbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNlYXJjaEJhckJveC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyJywgJ3BhbmVsJyk7XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaEJhckJveDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyRGlzcGxheSgpIHtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyRGlzcGxheVBhbmVsID0gX2NyZWF0ZVdlYXRoZXJEaXNwbGF5UGFuZWwoKTtcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gX2NyZWF0ZUNpdHlOYW1lKCk7XHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IF9jcmVhdGVXZWF0aGVyU3RhdHVzQm94KCk7XHJcbiAgICBjb25zdCBmZWVsc0xpa2VJbmZvQm94ID0gX2NyZWF0ZUluZm9Cb3goJ0ZlZWxzIExpa2UgVGVtcGVyYXR1cmUnKTtcclxuICAgIGNvbnN0IGhpZ2hUZW1wQm94ID0gX2NyZWF0ZUluZm9Cb3goJ0hpZ2ggVGVtcGVyYXR1cmUnKTtcclxuICAgIGNvbnN0IGxvd1RlbXBCb3ggPSBfY3JlYXRlSW5mb0JveCgnTG93IFRlbXBlcmF0dXJlJyk7XHJcbiAgICBjb25zdCBodW1pZGl0eUJveCA9IF9jcmVhdGVJbmZvQm94KCdIdW1pZGl0eScpO1xyXG5cclxuICAgIHdlYXRoZXJEaXNwbGF5UGFuZWwuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xyXG4gICAgd2VhdGhlckRpc3BsYXlQYW5lbC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcik7XHJcbiAgICB3ZWF0aGVyRGlzcGxheVBhbmVsLmFwcGVuZENoaWxkKGZlZWxzTGlrZUluZm9Cb3gpO1xyXG4gICAgd2VhdGhlckRpc3BsYXlQYW5lbC5hcHBlbmRDaGlsZChoaWdoVGVtcEJveCk7XHJcbiAgICB3ZWF0aGVyRGlzcGxheVBhbmVsLmFwcGVuZENoaWxkKGxvd1RlbXBCb3gpO1xyXG4gICAgd2VhdGhlckRpc3BsYXlQYW5lbC5hcHBlbmRDaGlsZChodW1pZGl0eUJveCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3ZWF0aGVyRGlzcGxheVBhbmVsKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUNpdHlOYW1lKCkge1xyXG4gICAgICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2l0eU5hbWUuaWQgPSBkb21JZExpc3RbXCJDaXR5IE5hbWVcIl07XHJcbiAgICAgICAgcmV0dXJuIGNpdHlOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jcmVhdGVXZWF0aGVyRGlzcGxheVBhbmVsKCkge1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEaXNwbGF5UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3ZWF0aGVyRGlzcGxheVBhbmVsLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZGlzcGxheScsICdwYW5lbCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gd2VhdGhlckRpc3BsYXlQYW5lbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlV2VhdGhlclN0YXR1c0JveCgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFdlYXRoZXJTdGF0dXNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjdXJyZW50V2VhdGhlclN0YXR1c0JveC5pZCA9IGRvbUlkTGlzdFtcIldlYXRoZXIgU3RhdHVzIENvbnRhaW5lclwiXTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjdXJyZW50VGVtcC5pZCA9IGRvbUlkTGlzdFtcIkN1cnJlbnQgVGVtcGVyYXR1cmVcIl07XHJcblxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3ZWF0aGVyU3RhdHVzLmlkID0gZG9tSWRMaXN0W1wiV2VhdGhlciBTdGF0dXMgQm94XCJdO1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICB3ZWF0aGVyU3ltYm9sLmlkID0gZG9tSWRMaXN0W1wiV2VhdGhlciBJY29uXCJdO1xyXG4gICAgICAgIHdlYXRoZXJTeW1ib2wuYWx0ID0gJ3dlYXRoZXIgaWNvbic7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLmlkID0gZG9tSWRMaXN0W1wiV2VhdGhlciBEZXNjcmlwdGlvblwiXTtcclxuICAgICAgICB3ZWF0aGVyU3RhdHVzLmFwcGVuZENoaWxkKHdlYXRoZXJTeW1ib2wpO1xyXG4gICAgICAgIHdlYXRoZXJTdGF0dXMuYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgY3VycmVudFdlYXRoZXJTdGF0dXNCb3guYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xyXG4gICAgICAgIGN1cnJlbnRXZWF0aGVyU3RhdHVzQm94LmFwcGVuZENoaWxkKHdlYXRoZXJTdGF0dXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gY3VycmVudFdlYXRoZXJTdGF0dXNCb3g7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUluZm9Cb3goZG9tSWQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGluZm9Db250YWluZXIuaWQgPSBkb21JZExpc3RbZG9tSWRdO1xyXG5cclxuICAgICAgICBjb25zdCBpbmZvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbmZvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkb21JZC5yZXBsYWNlKCcgVGVtcGVyYXR1cmUnLCAnJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm9PdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbmZvT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3RlbXAtdmFsdWUnKTtcclxuXHJcbiAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb091dHB1dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbmZvQ29udGFpbmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2lvbkJ1dHRvbigpIHtcclxuXHJcbiAgICBjb25zdCBjb252ZXJzaW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb252ZXJzaW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbnZlcnNpb24tYnV0dG9uJyk7XHJcbiAgICBjb252ZXJzaW9uQnV0dG9uLmlkID0gZG9tSWRMaXN0W1wiVGVtcGVyYXR1cmUgVW5pdCBDb252ZXJzaW9uIEJ1dHRvblwiXTtcclxuICAgIGNvbnZlcnNpb25CdXR0b24udGV4dENvbnRlbnQgPSAnQ1xcdTAwQjAvRlxcdTAwQjAnO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udmVyc2lvbkJ1dHRvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVGhlIFdlYXRoZXIgQXBwJztcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhclNlYXJjaEFuZEVycm9yKCkge1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkTGlzdFsnU2VhcmNoIEJhciddKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlYXJjaC1lcnJvci10ZXh0YCkudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGVtcGVyYXR1cmVzT25EaXNwbGF5KHdlYXRoZXJVbml0cykge1xyXG5cclxuICAgIGlmICh3ZWF0aGVyVW5pdHMuaW1wZXJpYWwpIHtcclxuICAgICAgICB3ZWF0aGVyVW5pdHMuaW1wZXJpYWwgPSBmYWxzZTtcclxuICAgICAgICB3ZWF0aGVyVW5pdHMubWV0cmljID0gdHJ1ZTtcclxuICAgICAgICB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ10gPSAnQyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlYXRoZXJVbml0cy5pbXBlcmlhbCA9IHRydWU7XHJcbiAgICAgICAgd2VhdGhlclVuaXRzLm1ldHJpYyA9IGZhbHNlO1xyXG4gICAgICAgIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXSA9ICdGJztcclxuICAgIH1cclxuXHJcbiAgICBzd2FwVGVtcGVyYXR1cmVWYWx1ZShgIyR7ZG9tSWRMaXN0WydDdXJyZW50IFRlbXBlcmF0dXJlJ119YCwgMiwgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddKTtcclxuICAgIHN3YXBUZW1wZXJhdHVyZVZhbHVlKGAjJHtkb21JZExpc3RbJ0ZlZWxzIExpa2UgVGVtcGVyYXR1cmUnXX0gLnRlbXAtdmFsdWVgLCAyLCB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ10pO1xyXG4gICAgc3dhcFRlbXBlcmF0dXJlVmFsdWUoYCMke2RvbUlkTGlzdFsnSGlnaCBUZW1wZXJhdHVyZSddfSAudGVtcC12YWx1ZWAsIDIsIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXSk7XHJcbiAgICBzd2FwVGVtcGVyYXR1cmVWYWx1ZShgIyR7ZG9tSWRMaXN0WydMb3cgVGVtcGVyYXR1cmUnXX0gLnRlbXAtdmFsdWVgLCAyLCB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ10pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc3dhcFRlbXBlcmF0dXJlVmFsdWUoZG9tU2VsZWN0b3IsIGNoYXJzVG9SZW1vdmUsIGNvbnZlcnRUb1VuaXQpIHtcclxuXHJcbiAgICBsZXQgdGVtcFRvQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21TZWxlY3RvcikudGV4dENvbnRlbnQ7XHJcbiAgICB0ZW1wVG9DaGFuZ2UgPSB0ZW1wVG9DaGFuZ2Uuc2xpY2UoMCwgdGVtcFRvQ2hhbmdlLmxlbmd0aCAtIGNoYXJzVG9SZW1vdmUpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21TZWxlY3RvcikudGV4dENvbnRlbnQgPSBpbmRleC5jb252ZXJ0VGVtcGVyYXR1cmUodGVtcFRvQ2hhbmdlLCBjb252ZXJ0VG9Vbml0KSArICdcXHUwMEIwJyArIGNvbnZlcnRUb1VuaXQ7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJEaXNwbGF5KHdlYXRoZXJEYXRhLCB3ZWF0aGVyVW5pdHMpe1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkTGlzdFsnQ2l0eSBOYW1lJ10pLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubmFtZTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZExpc3RbJ0N1cnJlbnQgVGVtcGVyYXR1cmUnXSkudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCkgKyAnXFx1MDBCMCcgKyB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ107XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWRMaXN0WydXZWF0aGVyIERlc2NyaXB0aW9uJ10pLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xyXG5cclxuICAgIGxldCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWRMaXN0WydXZWF0aGVyIEljb24nXSk7XHJcbiAgICBpY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkb21JZExpc3RbJ0ZlZWxzIExpa2UgVGVtcGVyYXR1cmUnXX0gLnRlbXAtdmFsdWVgKS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKSArICdcXHUwMEIwJyArIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkb21JZExpc3RbJ0hpZ2ggVGVtcGVyYXR1cmUnXX0gLnRlbXAtdmFsdWVgKS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCkgKyAnXFx1MDBCMCcgKyB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ107XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZG9tSWRMaXN0WydMb3cgVGVtcGVyYXR1cmUnXX0gLnRlbXAtdmFsdWVgKS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbikgKyAnXFx1MDBCMCcgKyB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ107XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZG9tSWRMaXN0Lkh1bWlkaXR5fSAudGVtcC12YWx1ZWApLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5KX0lYDtcclxufSIsImltcG9ydCAqIGFzIGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LmpzJztcclxuaW1wb3J0ICogYXMgd2VhdGhlckNhbGwgZnJvbSAnLi93ZWF0aGVyLWNhbGwuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8va2VlcCB0cmFjayBvZiB3aGF0IHVuaXRzIGFyZSBiZWluZyBkaXNwbGF5ZWRcclxuY29uc3Qgd2VhdGhlclVuaXRzID0ge1xyXG4gICAgaW1wZXJpYWw6IHRydWUsXHJcbiAgICBtZXRyaWM6IGZhbHNlLFxyXG4gICAgJ3dlYXRoZXIgbGV0dGVyJzogJ0YnLFxyXG59XHJcblxyXG4vL2luaXRpYWwgcGFnZSBzZXR1cFxyXG5kaXNwbGF5LmNyZWF0ZUhlYWRlcigpO1xyXG5kaXNwbGF5LmNyZWF0ZVNlYXJjaEJhckFyZWEoKTtcclxuZGlzcGxheS5jcmVhdGVXZWF0aGVyRGlzcGxheSgpO1xyXG5kaXNwbGF5LmNyZWF0ZUNvbnZlcnNpb25CdXR0b24oKTtcclxuXHJcbnVwZGF0ZVdlYXRoZXJJbmZvKCdMb3MgQW5nZWxlcycpO1xyXG5cclxuY29uc3QgY29udmVyc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpc3BsYXkuZG9tSWRMaXN0WydUZW1wZXJhdHVyZSBVbml0IENvbnZlcnNpb24gQnV0dG9uJ10pO1xyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXNwbGF5LmRvbUlkTGlzdFsnU2VhcmNoIEJ1dHRvbiddKTtcclxuXHJcbmNvbnZlcnNpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkaXNwbGF5LmNvbnZlcnRUZW1wZXJhdHVyZXNPbkRpc3BsYXkod2VhdGhlclVuaXRzKTtcclxufSk7XHJcblxyXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hMb2NhdGlvbik7XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hMb2NhdGlvbigpIHtcclxuXHJcbiAgICBsZXQgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXNwbGF5LmRvbUlkTGlzdFsnU2VhcmNoIEJhciddKS52YWx1ZTtcclxuXHJcbiAgICBpZiAoc2VhcmNoSW5wdXQgPT09ICcnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlYXJjaC1lcnJvci10ZXh0YCkudGV4dENvbnRlbnQgPSAnRW50ZXIgYSBsb2NhdGlvbiB0byBzZWFyY2guLi4nO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVXZWF0aGVySW5mbyhzZWFyY2hJbnB1dCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJJbmZvKGxvY2F0aW9uKSB7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyQ2FsbC5nZXRDdXJyZW50V2VhdGhlcihsb2NhdGlvbik7XHJcblxyXG4gICAgaWYod2VhdGhlckRhdGEubWVzc2FnZSA9PT0gJ2NpdHkgbm90IGZvdW5kJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FwaSBjYWxsIGZhaWxlZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZXJyb3ItdGV4dCcpLnRleHRDb250ZW50ID0gXHJcbiAgICAgICAgJ0xvY2F0aW9uIHNob3VsZCBiZSBpbiBmb3JtYXQ6IGNpdHkgbmFtZS9jaXR5IG5hbWUsIGNvdW50cnkgY29kZSc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL25vcm1hbGl6ZSB0aGUgdW5pdHMgdG8gRiBieSBkZWZhdWx0XHJcbiAgICB3ZWF0aGVyVW5pdHMuaW1wZXJpYWwgPSB0cnVlO1xyXG4gICAgd2VhdGhlclVuaXRzLm1ldHJpYyA9IGZhbHNlO1xyXG4gICAgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddID0gJ0YnO1xyXG5cclxuICAgIGRpc3BsYXkudXBkYXRlV2VhdGhlckRpc3BsYXkod2VhdGhlckRhdGEsIHdlYXRoZXJVbml0cyk7XHJcbiAgICBkaXNwbGF5LmNsZWFyU2VhcmNoQW5kRXJyb3IoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGVtcGVyYXR1cmUodGVtcGVyYXR1cmUsIGNvbnZlcnRUb1RoaXNVbml0KSB7XHJcblxyXG4gICAgY29uc3QgQ09OVkVSU0lPTl9GQUNUT1IgPSAxLjg7XHJcbiAgICBjb25zdCBURU1QX09GRlNFVCA9IDMyO1xyXG5cclxuICAgIGxldCByZXN1bHQ7XHJcblxyXG4gICAgaWYgKGNvbnZlcnRUb1RoaXNVbml0ID09PSAnRicpIHtcclxuICAgICAgICByZXN1bHQgPSBNYXRoLnJvdW5kKHRlbXBlcmF0dXJlICogQ09OVkVSU0lPTl9GQUNUT1IpICsgVEVNUF9PRkZTRVQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSBpZiAoY29udmVydFRvVGhpc1VuaXQgPT09ICdDJykge1xyXG4gICAgICAgIHJlc3VsdCA9IE1hdGgucm91bmQoKHRlbXBlcmF0dXJlIC0gVEVNUF9PRkZTRVQpIC8gQ09OVkVSU0lPTl9GQUNUT1IpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0ZW1wZXJhdHVyZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIi8vZnJlZSBhcGkga2V5IGZyb20gb3BlbndlYXRoZXJtYXAub3JnXHJcbmNvbnN0IEFQSV9LRVkgPSAnZDc4ZjM2ODA1ZGI2NTZmN2Y0Y2YyYTVkZGIxODkyYzcnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uLCB1bml0cyA9ICdpbXBlcmlhbCcpIHtcclxuXHJcbiAgICBsZXQgc2VhcmNoVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHtBUElfS0VZfWA7XHJcblxyXG4gICAgaWYgKHVuaXRzID09PSAnbWV0cmljJykge1xyXG4gICAgICAgIHNlYXJjaFVybCArPSAnJnVuaXRzPW1ldHJpYyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlYXJjaFVybCArPSAnJnVuaXRzPWltcGVyaWFsJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzZWFyY2hVcmwsIHttb2RlOiAnY29ycyd9KTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIGpzb247XHJcblxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9