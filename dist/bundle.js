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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 14px;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(43, 43, 43);\r\n    margin: 0;\r\n    width: 100vw;\r\n    min-height: 130vh;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: top;\r\n    align-items: center;\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n    margin: 5px 0 0 0;\r\n    color: rgb(168, 168, 168);\r\n    font-size: 2rem;\r\n    font-family: 'Lobster', cursive;\r\n}\r\nimg {\r\n    width: 2.5rem;\r\n}\r\n\r\nbutton {\r\n    color: black;\r\n}\r\n\r\n/*panel  ||*/\r\n.panel {\r\n    background-color: rgb(77, 77, 80);\r\n    border-radius: .5rem;\r\n    color: white;\r\n    margin: 10px;\r\n    width: 80%;\r\n    max-width: 450px;\r\n    padding: 1rem;\r\n    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\r\n}\r\n\r\n/*search bar ||*/\r\n\r\n.search-bar {\r\n    height: 8rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: top;\r\n    align-items: center;\r\n\r\n}\r\n\r\n#search-bar {\r\n    font: inherit;\r\n    color: aliceblue;\r\n    margin: 10px 0;\r\n    height: 2rem;\r\n    width: 100%;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n    background-color: rgb(131, 131, 131);\r\n}\r\n\r\n#search-bar::placeholder {\r\n    color: rgb(88, 88, 88)\r\n}\r\n\r\n#search-bar:focus {\r\n    outline-color: rgb(255, 234, 166);\r\n    outline-style: solid;\r\n    outline-width: 3px;\r\n}\r\n\r\n.search-bar button {\r\n    width: 100px;\r\n    border-radius: 3px;\r\n    border-style: none;\r\n    height: 30px;\r\n    font-family: inherit;\r\n    background-color: rgb(134, 158, 179);\r\n}\r\n\r\n.search-bar button:active {\r\n    color: aliceblue;\r\n    background-color: rgb(194, 194, 194);\r\n}\r\n\r\n.search-bar button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.search-error-text {\r\n    height: 2rem;\r\n    width: 100%;\r\n    text-align: left;\r\n    font-size: .8rem;\r\n    font-family: inherit;\r\n    color: rgb(255, 145, 145);\r\n}\r\n\r\n/*weather display ||*/\r\n\r\n.weather-display {\r\n    font-size: 1.25rem;\r\n    display: grid;\r\n    grid-template: 1fr 2fr repeat(4, 1fr)/1fr 1fr;\r\n    grid-template-areas:\r\n        'city-name city-name'\r\n        'weather-status weather-status'\r\n        'feels-like feels-like'\r\n        'high high'\r\n        'low low'\r\n        'humidity humidity';\r\n    gap: 10px;\r\n\r\n}\r\n\r\n#city-name {\r\n    grid-area: city-name;\r\n    align-self: center;\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    font-style: italic;\r\n    text-decoration: underline;\r\n}\r\n#weather {\r\n    grid-area: weather-status;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n    background-color: rgb(89, 92, 94);\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\r\n}\r\n#weather-status {\r\n    justify-self: center;\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgb(131, 131, 131);\r\n    height: 5rem;\r\n    width: 70%;\r\n    border-radius: 4px;\r\n}\r\n\r\n#current-temp {\r\n    justify-self: center;\r\n    align-self: center;\r\n    font-size: 3rem;\r\n    font-weight: 900;\r\n    padding-left: 1rem;\r\n}\r\n\r\n#feels-like {\r\n    grid-area: feels-like;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#feels-like div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#low {\r\n    grid-area: low;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#low div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#high {\r\n    grid-area: high;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#high div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#humidity {\r\n    grid-area: humidity;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#humidity div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n.temp-value {\r\n    background-color: rgb(59, 59, 59);\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    line-height: 2.5;\r\n    box-shadow: rgb(34, 34, 34) 3px 3px 6px 0px inset, rgba(63, 63, 63, 0.5) -3px -3px 6px 1px inset;\r\n    border-radius: 5px;\r\n}\r\n\r\n#conversion-button {\r\n    width: 100px;\r\n    border-radius: 3px;\r\n    border-style: none;\r\n    padding: .5rem 0;\r\n    font-family: inherit;\r\n    background-color: rgb(190, 190, 190);\r\n}\r\n\r\n#conversion-button:active {\r\n    background-color: rgb(78, 78, 78);\r\n    color: rgb(161, 161, 161);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,SAAS;IACT,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;IACzB,eAAe;IACf,+BAA+B;AACnC;AACA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA,YAAY;AACZ;IACI,iCAAiC;IACjC,oBAAoB;IACpB,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,kLAAkL;AACtL;;AAEA,gBAAgB;;AAEhB;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI;AACJ;;AAEA;IACI,iCAAiC;IACjC,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA,qBAAqB;;AAErB;IACI,kBAAkB;IAClB,aAAa;IACb,6CAA6C;IAC7C;;;;;;2BAMuB;IACvB,SAAS;;AAEb;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;AAC9B;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,2BAA2B;IAC3B,iCAAiC;IACjC,kBAAkB;IAClB,4IAA4I;AAChJ;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,YAAY;IACZ,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,gGAAgG;IAChG,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,oBAAoB;IACpB,oCAAoC;AACxC;;AAEA;IACI,iCAAiC;IACjC,yBAAyB;AAC7B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\n\r\n:root {\r\n    font-size: 14px;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(43, 43, 43);\r\n    margin: 0;\r\n    width: 100vw;\r\n    min-height: 130vh;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: top;\r\n    align-items: center;\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n    margin: 5px 0 0 0;\r\n    color: rgb(168, 168, 168);\r\n    font-size: 2rem;\r\n    font-family: 'Lobster', cursive;\r\n}\r\nimg {\r\n    width: 2.5rem;\r\n}\r\n\r\nbutton {\r\n    color: black;\r\n}\r\n\r\n/*panel  ||*/\r\n.panel {\r\n    background-color: rgb(77, 77, 80);\r\n    border-radius: .5rem;\r\n    color: white;\r\n    margin: 10px;\r\n    width: 80%;\r\n    max-width: 450px;\r\n    padding: 1rem;\r\n    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\r\n}\r\n\r\n/*search bar ||*/\r\n\r\n.search-bar {\r\n    height: 8rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: top;\r\n    align-items: center;\r\n\r\n}\r\n\r\n#search-bar {\r\n    font: inherit;\r\n    color: aliceblue;\r\n    margin: 10px 0;\r\n    height: 2rem;\r\n    width: 100%;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n    background-color: rgb(131, 131, 131);\r\n}\r\n\r\n#search-bar::placeholder {\r\n    color: rgb(88, 88, 88)\r\n}\r\n\r\n#search-bar:focus {\r\n    outline-color: rgb(255, 234, 166);\r\n    outline-style: solid;\r\n    outline-width: 3px;\r\n}\r\n\r\n.search-bar button {\r\n    width: 100px;\r\n    border-radius: 3px;\r\n    border-style: none;\r\n    height: 30px;\r\n    font-family: inherit;\r\n    background-color: rgb(134, 158, 179);\r\n}\r\n\r\n.search-bar button:active {\r\n    color: aliceblue;\r\n    background-color: rgb(194, 194, 194);\r\n}\r\n\r\n.search-bar button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.search-error-text {\r\n    height: 2rem;\r\n    width: 100%;\r\n    text-align: left;\r\n    font-size: .8rem;\r\n    font-family: inherit;\r\n    color: rgb(255, 145, 145);\r\n}\r\n\r\n/*weather display ||*/\r\n\r\n.weather-display {\r\n    font-size: 1.25rem;\r\n    display: grid;\r\n    grid-template: 1fr 2fr repeat(4, 1fr)/1fr 1fr;\r\n    grid-template-areas:\r\n        'city-name city-name'\r\n        'weather-status weather-status'\r\n        'feels-like feels-like'\r\n        'high high'\r\n        'low low'\r\n        'humidity humidity';\r\n    gap: 10px;\r\n\r\n}\r\n\r\n#city-name {\r\n    grid-area: city-name;\r\n    align-self: center;\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    font-style: italic;\r\n    text-decoration: underline;\r\n}\r\n#weather {\r\n    grid-area: weather-status;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n    background-color: rgb(89, 92, 94);\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\r\n}\r\n#weather-status {\r\n    justify-self: center;\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgb(131, 131, 131);\r\n    height: 5rem;\r\n    width: 70%;\r\n    border-radius: 4px;\r\n}\r\n\r\n#current-temp {\r\n    justify-self: center;\r\n    align-self: center;\r\n    font-size: 3rem;\r\n    font-weight: 900;\r\n    padding-left: 1rem;\r\n}\r\n\r\n#feels-like {\r\n    grid-area: feels-like;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#feels-like div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#low {\r\n    grid-area: low;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#low div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#high {\r\n    grid-area: high;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#high div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#humidity {\r\n    grid-area: humidity;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 1fr;\r\n}\r\n\r\n#humidity div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n.temp-value {\r\n    background-color: rgb(59, 59, 59);\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    line-height: 2.5;\r\n    box-shadow: rgb(34, 34, 34) 3px 3px 6px 0px inset, rgba(63, 63, 63, 0.5) -3px -3px 6px 1px inset;\r\n    border-radius: 5px;\r\n}\r\n\r\n#conversion-button {\r\n    width: 100px;\r\n    border-radius: 3px;\r\n    border-style: none;\r\n    padding: .5rem 0;\r\n    font-family: inherit;\r\n    background-color: rgb(190, 190, 190);\r\n}\r\n\r\n#conversion-button:active {\r\n    background-color: rgb(78, 78, 78);\r\n    color: rgb(161, 161, 161);\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0dBQStHLElBQUksa0JBQWtCO0FBQ3JJLHFIQUFxSDtBQUNySDtBQUNBLGlEQUFpRCx3QkFBd0IsS0FBSyxjQUFjLDBDQUEwQyxrQkFBa0IscUJBQXFCLDBCQUEwQiwwQ0FBMEMsc0JBQXNCLCtCQUErQiw2QkFBNkIsNEJBQTRCLEtBQUssZ0JBQWdCLDJCQUEyQiwwQkFBMEIsa0NBQWtDLHdCQUF3Qix3Q0FBd0MsS0FBSyxTQUFTLHNCQUFzQixLQUFLLGdCQUFnQixxQkFBcUIsS0FBSyxpQ0FBaUMsMENBQTBDLDZCQUE2QixxQkFBcUIscUJBQXFCLG1CQUFtQix5QkFBeUIsc0JBQXNCLDJMQUEyTCxLQUFLLDhDQUE4QyxxQkFBcUIsc0JBQXNCLCtCQUErQiw2QkFBNkIsNEJBQTRCLFNBQVMscUJBQXFCLHNCQUFzQix5QkFBeUIsdUJBQXVCLHFCQUFxQixvQkFBb0IsMkJBQTJCLDJCQUEyQiw2Q0FBNkMsS0FBSyxrQ0FBa0MsbUNBQW1DLDJCQUEyQiwwQ0FBMEMsNkJBQTZCLDJCQUEyQixLQUFLLDRCQUE0QixxQkFBcUIsMkJBQTJCLDJCQUEyQixxQkFBcUIsNkJBQTZCLDZDQUE2QyxLQUFLLG1DQUFtQyx5QkFBeUIsNkNBQTZDLEtBQUssa0NBQWtDLHdCQUF3QixLQUFLLDRCQUE0QixxQkFBcUIsb0JBQW9CLHlCQUF5Qix5QkFBeUIsNkJBQTZCLGtDQUFrQyxLQUFLLHdEQUF3RCwyQkFBMkIsc0JBQXNCLHNEQUFzRCx1TkFBdU4sa0JBQWtCLFNBQVMsb0JBQW9CLDZCQUE2QiwyQkFBMkIsd0JBQXdCLHlCQUF5QiwyQkFBMkIsbUNBQW1DLEtBQUssY0FBYyxrQ0FBa0Msc0JBQXNCLG9DQUFvQywwQ0FBMEMsMkJBQTJCLHFKQUFxSixLQUFLLHFCQUFxQiw2QkFBNkIsMkJBQTJCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLDZDQUE2QyxxQkFBcUIsbUJBQW1CLDJCQUEyQixLQUFLLHVCQUF1Qiw2QkFBNkIsMkJBQTJCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLEtBQUsscUJBQXFCLDhCQUE4QixzQkFBc0Isb0NBQW9DLEtBQUsseUJBQXlCLDZCQUE2QiwyQkFBMkIsS0FBSyxjQUFjLHVCQUF1QixzQkFBc0Isc0JBQXNCLG9DQUFvQyxLQUFLLGtCQUFrQiw2QkFBNkIsMkJBQTJCLEtBQUssZUFBZSx3QkFBd0Isc0JBQXNCLHNCQUFzQixvQ0FBb0MsS0FBSyxtQkFBbUIsNkJBQTZCLDJCQUEyQixLQUFLLG1CQUFtQiw0QkFBNEIsc0JBQXNCLHNCQUFzQixvQ0FBb0MsS0FBSyx1QkFBdUIsNkJBQTZCLDJCQUEyQixLQUFLLHFCQUFxQiwwQ0FBMEMscUJBQXFCLG9CQUFvQiwyQkFBMkIseUJBQXlCLHlHQUF5RywyQkFBMkIsS0FBSyw0QkFBNEIscUJBQXFCLDJCQUEyQiwyQkFBMkIseUJBQXlCLDZCQUE2Qiw2Q0FBNkMsS0FBSyxtQ0FBbUMsMENBQTBDLGtDQUFrQyxLQUFLLE9BQU8sZ0ZBQWdGLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxnR0FBZ0csSUFBSSxtQkFBbUIsaUZBQWlGLGVBQWUsd0JBQXdCLEtBQUssY0FBYywwQ0FBMEMsa0JBQWtCLHFCQUFxQiwwQkFBMEIsMENBQTBDLHNCQUFzQiwrQkFBK0IsNkJBQTZCLDRCQUE0QixLQUFLLGdCQUFnQiwyQkFBMkIsMEJBQTBCLGtDQUFrQyx3QkFBd0Isd0NBQXdDLEtBQUssU0FBUyxzQkFBc0IsS0FBSyxnQkFBZ0IscUJBQXFCLEtBQUssaUNBQWlDLDBDQUEwQyw2QkFBNkIscUJBQXFCLHFCQUFxQixtQkFBbUIseUJBQXlCLHNCQUFzQiwyTEFBMkwsS0FBSyw4Q0FBOEMscUJBQXFCLHNCQUFzQiwrQkFBK0IsNkJBQTZCLDRCQUE0QixTQUFTLHFCQUFxQixzQkFBc0IseUJBQXlCLHVCQUF1QixxQkFBcUIsb0JBQW9CLDJCQUEyQiwyQkFBMkIsNkNBQTZDLEtBQUssa0NBQWtDLG1DQUFtQywyQkFBMkIsMENBQTBDLDZCQUE2QiwyQkFBMkIsS0FBSyw0QkFBNEIscUJBQXFCLDJCQUEyQiwyQkFBMkIscUJBQXFCLDZCQUE2Qiw2Q0FBNkMsS0FBSyxtQ0FBbUMseUJBQXlCLDZDQUE2QyxLQUFLLGtDQUFrQyx3QkFBd0IsS0FBSyw0QkFBNEIscUJBQXFCLG9CQUFvQix5QkFBeUIseUJBQXlCLDZCQUE2QixrQ0FBa0MsS0FBSyx3REFBd0QsMkJBQTJCLHNCQUFzQixzREFBc0QsdU5BQXVOLGtCQUFrQixTQUFTLG9CQUFvQiw2QkFBNkIsMkJBQTJCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLG1DQUFtQyxLQUFLLGNBQWMsa0NBQWtDLHNCQUFzQixvQ0FBb0MsMENBQTBDLDJCQUEyQixxSkFBcUosS0FBSyxxQkFBcUIsNkJBQTZCLDJCQUEyQixzQkFBc0IsK0JBQStCLDRCQUE0Qiw2Q0FBNkMscUJBQXFCLG1CQUFtQiwyQkFBMkIsS0FBSyx1QkFBdUIsNkJBQTZCLDJCQUEyQix3QkFBd0IseUJBQXlCLDJCQUEyQixLQUFLLHFCQUFxQiw4QkFBOEIsc0JBQXNCLG9DQUFvQyxLQUFLLHlCQUF5Qiw2QkFBNkIsMkJBQTJCLEtBQUssY0FBYyx1QkFBdUIsc0JBQXNCLHNCQUFzQixvQ0FBb0MsS0FBSyxrQkFBa0IsNkJBQTZCLDJCQUEyQixLQUFLLGVBQWUsd0JBQXdCLHNCQUFzQixzQkFBc0Isb0NBQW9DLEtBQUssbUJBQW1CLDZCQUE2QiwyQkFBMkIsS0FBSyxtQkFBbUIsNEJBQTRCLHNCQUFzQixzQkFBc0Isb0NBQW9DLEtBQUssdUJBQXVCLDZCQUE2QiwyQkFBMkIsS0FBSyxxQkFBcUIsMENBQTBDLHFCQUFxQixvQkFBb0IsMkJBQTJCLHlCQUF5Qix5R0FBeUcsMkJBQTJCLEtBQUssNEJBQTRCLHFCQUFxQiwyQkFBMkIsMkJBQTJCLHlCQUF5Qiw2QkFBNkIsNkNBQTZDLEtBQUssbUNBQW1DLDBDQUEwQyxrQ0FBa0MsS0FBSyxtQkFBbUI7QUFDcDFYO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNvQztBQUNwQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlDQUFpQztBQUM5RCw2QkFBNkIscUNBQXFDO0FBQ2xFLDZCQUE2QiwrQkFBK0I7QUFDNUQsNkJBQTZCLDhCQUE4QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCx5REFBd0I7QUFDOUU7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDRCQUE0QjtBQUMvRTtBQUNBLCtCQUErQixxQ0FBcUM7QUFDcEU7QUFDQSwrQkFBK0IsK0JBQStCO0FBQzlEO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBLCtCQUErQixvQkFBb0IsK0JBQStCLHNDQUFzQztBQUN4SDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTXdDO0FBQ1M7QUFDNUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQW9CO0FBQ3BCLDREQUEyQjtBQUMzQiw2REFBNEI7QUFDNUIsK0RBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx3RkFBdUQ7QUFDeEcsNkNBQTZDLG1FQUFrQztBQUMvRTtBQUNBO0FBQ0EsSUFBSSxxRUFBb0M7QUFDeEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0VBQStCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0RBQTZCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBNEI7QUFDaEMsSUFBSSw0REFBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHlFQUF5RSxTQUFTLFNBQVMsUUFBUTtBQUNuRztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci1jYWxsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMzB2aDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDVweCAwIDAgMDtcXHJcXG4gICAgY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5pbWcge1xcclxcbiAgICB3aWR0aDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qcGFuZWwgIHx8Ki9cXHJcXG4ucGFuZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDc3LCA4MCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggNHB4IDJweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggOHB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMTZweCA4cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDMycHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLypzZWFyY2ggYmFyIHx8Ki9cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciB7XFxyXFxuICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyIHtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoODgsIDg4LCA4OClcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXI6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2IoMjU1LCAyMzQsIDE2Nik7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgICBvdXRsaW5lLXdpZHRoOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDE1OCwgMTc5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWVycm9yLXRleHQge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDE0NSwgMTQ1KTtcXHJcXG59XFxyXFxuXFxyXFxuLyp3ZWF0aGVyIGRpc3BsYXkgfHwqL1xcclxcblxcclxcbi53ZWF0aGVyLWRpc3BsYXkge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAyZnIgcmVwZWF0KDQsIDFmcikvMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgICdjaXR5LW5hbWUgY2l0eS1uYW1lJ1xcclxcbiAgICAgICAgJ3dlYXRoZXItc3RhdHVzIHdlYXRoZXItc3RhdHVzJ1xcclxcbiAgICAgICAgJ2ZlZWxzLWxpa2UgZmVlbHMtbGlrZSdcXHJcXG4gICAgICAgICdoaWdoIGhpZ2gnXFxyXFxuICAgICAgICAnbG93IGxvdydcXHJcXG4gICAgICAgICdodW1pZGl0eSBodW1pZGl0eSc7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2NpdHktbmFtZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2l0eS1uYW1lO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuI3dlYXRoZXIge1xcclxcbiAgICBncmlkLWFyZWE6IHdlYXRoZXItc3RhdHVzO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgOTIsIDk0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAwLjA2MjVlbSAwLjA2MjVlbSwgcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMC4xMjVlbSAwLjVlbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDBweCAwcHggMHB4IDFweCBpbnNldDtcXHJcXG59XFxyXFxuI3dlYXRoZXItc3RhdHVzIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdGVtcCB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZmVlbHMtbGlrZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZmVlbHMtbGlrZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jZmVlbHMtbGlrZSBkaXYge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbG93IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBsb3c7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvdyBkaXYge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlnaCB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGlnaDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlnaCBkaXYge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaHVtaWRpdHkge1xcclxcbiAgICBncmlkLWFyZWE6IGh1bWlkaXR5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiNodW1pZGl0eSBkaXYge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC12YWx1ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgNTksIDU5KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogMi41O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMzQsIDM0LCAzNCkgM3B4IDNweCA2cHggMHB4IGluc2V0LCByZ2JhKDYzLCA2MywgNjMsIDAuNSkgLTNweCAtM3B4IDZweCAxcHggaW5zZXQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnZlcnNpb24tYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5MCwgMTkwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnZlcnNpb24tYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcXHJcXG4gICAgY29sb3I6IHJnYigxNjEsIDE2MSwgMTYxKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLFlBQVk7QUFDWjtJQUNJLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrTEFBa0w7QUFDdEw7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFFQSxxQkFBcUI7O0FBRXJCO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0M7Ozs7OzsyQkFNdUI7SUFDdkIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLDRJQUE0STtBQUNoSjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnR0FBZ0c7SUFDaEcsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMzB2aDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDVweCAwIDAgMDtcXHJcXG4gICAgY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5pbWcge1xcclxcbiAgICB3aWR0aDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qcGFuZWwgIHx8Ki9cXHJcXG4ucGFuZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDc3LCA4MCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggNHB4IDJweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggOHB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMTZweCA4cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDMycHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLypzZWFyY2ggYmFyIHx8Ki9cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciB7XFxyXFxuICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyIHtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoODgsIDg4LCA4OClcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXI6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2IoMjU1LCAyMzQsIDE2Nik7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgICBvdXRsaW5lLXdpZHRoOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDE1OCwgMTc5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWVycm9yLXRleHQge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDE0NSwgMTQ1KTtcXHJcXG59XFxyXFxuXFxyXFxuLyp3ZWF0aGVyIGRpc3BsYXkgfHwqL1xcclxcblxcclxcbi53ZWF0aGVyLWRpc3BsYXkge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAyZnIgcmVwZWF0KDQsIDFmcikvMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgICdjaXR5LW5hbWUgY2l0eS1uYW1lJ1xcclxcbiAgICAgICAgJ3dlYXRoZXItc3RhdHVzIHdlYXRoZXItc3RhdHVzJ1xcclxcbiAgICAgICAgJ2ZlZWxzLWxpa2UgZmVlbHMtbGlrZSdcXHJcXG4gICAgICAgICdoaWdoIGhpZ2gnXFxyXFxuICAgICAgICAnbG93IGxvdydcXHJcXG4gICAgICAgICdodW1pZGl0eSBodW1pZGl0eSc7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2NpdHktbmFtZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2l0eS1uYW1lO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuI3dlYXRoZXIge1xcclxcbiAgICBncmlkLWFyZWE6IHdlYXRoZXItc3RhdHVzO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgOTIsIDk0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAwLjA2MjVlbSAwLjA2MjVlbSwgcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMC4xMjVlbSAwLjVlbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDBweCAwcHggMHB4IDFweCBpbnNldDtcXHJcXG59XFxyXFxuI3dlYXRoZXItc3RhdHVzIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdGVtcCB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZmVlbHMtbGlrZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZmVlbHMtbGlrZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jZmVlbHMtbGlrZSBkaXYge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbG93IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBsb3c7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvdyBkaXYge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlnaCB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGlnaDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlnaCBkaXYge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaHVtaWRpdHkge1xcclxcbiAgICBncmlkLWFyZWE6IGh1bWlkaXR5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiNodW1pZGl0eSBkaXYge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC12YWx1ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgNTksIDU5KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogMi41O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMzQsIDM0LCAzNCkgM3B4IDNweCA2cHggMHB4IGluc2V0LCByZ2JhKDYzLCA2MywgNjMsIDAuNSkgLTNweCAtM3B4IDZweCAxcHggaW5zZXQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnZlcnNpb24tYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5MCwgMTkwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnZlcnNpb24tYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcXHJcXG4gICAgY29sb3I6IHJnYigxNjEsIDE2MSwgMTYxKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0FCT1VUOiB2YXJpb3VzIGZ1bmN0aW9ucyBmb3IgbWFuaXB1bGF0aW5nIHRoZSBkaXNwbGF5LCB0byBiZSByZWZlcmVuY2VkIGZyb20gdGhlIGluZGV4IG1vZHVsZVxyXG5pbXBvcnQgKiBhcyBpbmRleCBmcm9tICcuL2luZGV4LmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkb21JZExpc3QgPSB7XHJcbiAgICAnU2VhcmNoIEJhcic6ICdzZWFyY2gtYmFyJyxcclxuICAgICdDaXR5IE5hbWUnOiAnY2l0eS1uYW1lJyxcclxuICAgICdXZWF0aGVyIFN0YXR1cyBDb250YWluZXInOiAnd2VhdGhlcicsXHJcbiAgICAnQ3VycmVudCBUZW1wZXJhdHVyZSc6ICdjdXJyZW50LXRlbXAnLFxyXG4gICAgJ1dlYXRoZXIgU3RhdHVzIEJveCc6ICd3ZWF0aGVyLXN0YXR1cycsXHJcbiAgICAnRmVlbHMgTGlrZSBUZW1wZXJhdHVyZSc6ICdmZWVscy1saWtlJyxcclxuICAgICdIaWdoIFRlbXBlcmF0dXJlJzogJ2hpZ2gnLFxyXG4gICAgJ0xvdyBUZW1wZXJhdHVyZSc6ICdsb3cnLFxyXG4gICAgJ0h1bWlkaXR5JzogJ2h1bWlkaXR5JyxcclxuICAgICdXZWF0aGVyIEljb24nOiAnd2VhdGhlci1pY29uJyxcclxuICAgICdXZWF0aGVyIERlc2NyaXB0aW9uJzogJ3dlYXRoZXItZGVzY3JpcHRpb24nLFxyXG4gICAgJ1RlbXBlcmF0dXJlIFVuaXQgQ29udmVyc2lvbiBCdXR0b24nOiAnY29udmVyc2lvbi1idXR0b24nLFxyXG4gICAgJ1NlYXJjaCBCdXR0b24nOiAnc2VhcmNoJyxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlYXJjaEJhckFyZWEoKSB7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoQmFyQm94ID0gX2NyZWF0ZVNlYXJjaENvbnRhaW5lcigpO1xyXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gX2NyZWF0ZVNlYXJjaEJhcigpO1xyXG4gICAgY29uc3QgZXJyb3JUZXh0ID0gX2NyZWF0ZUVycm9yVGV4dEFyZWEoKTtcclxuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IF9jcmVhdGVTZWFyY2hCdXR0b24oKTtcclxuXHJcbiAgICBzZWFyY2hCYXJCb3guYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcclxuICAgIHNlYXJjaEJhckJveC5hcHBlbmRDaGlsZChlcnJvclRleHQpO1xyXG4gICAgc2VhcmNoQmFyQm94LmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWFyY2hCYXJCb3gpO1xyXG5cclxuICAgIGZ1bmN0aW9uIF9jcmVhdGVTZWFyY2hCYXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBzZWFyY2hCYXIudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICBzZWFyY2hCYXIubmFtZSA9ICdsb2NhdGlvbic7XHJcbiAgICAgICAgc2VhcmNoQmFyLnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBhIExvY2F0aW9uJztcclxuICAgICAgICBzZWFyY2hCYXIuaWQgPSBkb21JZExpc3RbJ1NlYXJjaCBCYXInXTtcclxuICAgICAgICByZXR1cm4gc2VhcmNoQmFyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jcmVhdGVTZWFyY2hCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gJ1NlYXJjaCc7XHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLmlkID0gZG9tSWRMaXN0W1wiU2VhcmNoIEJ1dHRvblwiXTtcclxuICAgICAgICByZXR1cm4gc2VhcmNoQnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jcmVhdGVFcnJvclRleHRBcmVhKCkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVycm9yVGV4dC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtZXJyb3ItdGV4dCcpO1xyXG4gICAgICAgIHJldHVybiBlcnJvclRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVNlYXJjaENvbnRhaW5lcigpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hCYXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzZWFyY2hCYXJCb3guY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhcicsICdwYW5lbCcpO1xyXG4gICAgICAgIHJldHVybiBzZWFyY2hCYXJCb3g7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2VhdGhlckRpc3BsYXkoKSB7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckRpc3BsYXlQYW5lbCA9IF9jcmVhdGVXZWF0aGVyRGlzcGxheVBhbmVsKCk7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9IF9jcmVhdGVDaXR5TmFtZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBfY3JlYXRlV2VhdGhlclN0YXR1c0JveCgpO1xyXG4gICAgY29uc3QgZmVlbHNMaWtlSW5mb0JveCA9IF9jcmVhdGVJbmZvQm94KCdGZWVscyBMaWtlIFRlbXBlcmF0dXJlJyk7XHJcbiAgICBjb25zdCBoaWdoVGVtcEJveCA9IF9jcmVhdGVJbmZvQm94KCdIaWdoIFRlbXBlcmF0dXJlJyk7XHJcbiAgICBjb25zdCBsb3dUZW1wQm94ID0gX2NyZWF0ZUluZm9Cb3goJ0xvdyBUZW1wZXJhdHVyZScpO1xyXG4gICAgY29uc3QgaHVtaWRpdHlCb3ggPSBfY3JlYXRlSW5mb0JveCgnSHVtaWRpdHknKTtcclxuXHJcbiAgICB3ZWF0aGVyRGlzcGxheVBhbmVsLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcclxuICAgIHdlYXRoZXJEaXNwbGF5UGFuZWwuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXIpO1xyXG4gICAgd2VhdGhlckRpc3BsYXlQYW5lbC5hcHBlbmRDaGlsZChmZWVsc0xpa2VJbmZvQm94KTtcclxuICAgIHdlYXRoZXJEaXNwbGF5UGFuZWwuYXBwZW5kQ2hpbGQoaGlnaFRlbXBCb3gpO1xyXG4gICAgd2VhdGhlckRpc3BsYXlQYW5lbC5hcHBlbmRDaGlsZChsb3dUZW1wQm94KTtcclxuICAgIHdlYXRoZXJEaXNwbGF5UGFuZWwuYXBwZW5kQ2hpbGQoaHVtaWRpdHlCb3gpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2VhdGhlckRpc3BsYXlQYW5lbCk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIF9jcmVhdGVDaXR5TmFtZSgpIHtcclxuICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNpdHlOYW1lLmlkID0gZG9tSWRMaXN0W1wiQ2l0eSBOYW1lXCJdO1xyXG4gICAgICAgIHJldHVybiBjaXR5TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlV2VhdGhlckRpc3BsYXlQYW5lbCgpIHtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyRGlzcGxheVBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd2VhdGhlckRpc3BsYXlQYW5lbC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWRpc3BsYXknLCAncGFuZWwnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEaXNwbGF5UGFuZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVdlYXRoZXJTdGF0dXNCb3goKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyU3RhdHVzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY3VycmVudFdlYXRoZXJTdGF0dXNCb3guaWQgPSBkb21JZExpc3RbXCJXZWF0aGVyIFN0YXR1cyBDb250YWluZXJcIl07XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY3VycmVudFRlbXAuaWQgPSBkb21JZExpc3RbXCJDdXJyZW50IFRlbXBlcmF0dXJlXCJdO1xyXG5cclxuICAgICAgICBjb25zdCB3ZWF0aGVyU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd2VhdGhlclN0YXR1cy5pZCA9IGRvbUlkTGlzdFtcIldlYXRoZXIgU3RhdHVzIEJveFwiXTtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgd2VhdGhlclN5bWJvbC5pZCA9IGRvbUlkTGlzdFtcIldlYXRoZXIgSWNvblwiXTtcclxuICAgICAgICB3ZWF0aGVyU3ltYm9sLmFsdCA9ICd3ZWF0aGVyIGljb24nO1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5pZCA9IGRvbUlkTGlzdFtcIldlYXRoZXIgRGVzY3JpcHRpb25cIl07XHJcbiAgICAgICAgd2VhdGhlclN0YXR1cy5hcHBlbmRDaGlsZCh3ZWF0aGVyU3ltYm9sKTtcclxuICAgICAgICB3ZWF0aGVyU3RhdHVzLmFwcGVuZENoaWxkKHdlYXRoZXJEZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgIGN1cnJlbnRXZWF0aGVyU3RhdHVzQm94LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcclxuICAgICAgICBjdXJyZW50V2VhdGhlclN0YXR1c0JveC5hcHBlbmRDaGlsZCh3ZWF0aGVyU3RhdHVzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyU3RhdHVzQm94O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jcmVhdGVJbmZvQm94KGRvbUlkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbmZvQ29udGFpbmVyLmlkID0gZG9tSWRMaXN0W2RvbUlkXTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5mb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5mb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZG9tSWQucmVwbGFjZSgnIFRlbXBlcmF0dXJlJywgJycpO1xyXG5cclxuICAgICAgICBjb25zdCBpbmZvT3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5mb091dHB1dC5jbGFzc0xpc3QuYWRkKCd0ZW1wLXZhbHVlJyk7XHJcblxyXG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9PdXRwdXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5mb0NvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnZlcnNpb25CdXR0b24oKSB7XHJcblxyXG4gICAgY29uc3QgY29udmVyc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29udmVyc2lvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb252ZXJzaW9uLWJ1dHRvbicpO1xyXG4gICAgY29udmVyc2lvbkJ1dHRvbi5pZCA9IGRvbUlkTGlzdFtcIlRlbXBlcmF0dXJlIFVuaXQgQ29udmVyc2lvbiBCdXR0b25cIl07XHJcbiAgICBjb252ZXJzaW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ0NcXHUwMEIwL0ZcXHUwMEIwJztcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnZlcnNpb25CdXR0b24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RoZSBXZWF0aGVyIEFwcCc7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZWFyY2hBbmRFcnJvcigpIHtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZExpc3RbJ1NlYXJjaCBCYXInXSkudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWFyY2gtZXJyb3ItdGV4dGApLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRlbXBlcmF0dXJlc09uRGlzcGxheSh3ZWF0aGVyVW5pdHMpIHtcclxuXHJcbiAgICBpZiAod2VhdGhlclVuaXRzLmltcGVyaWFsKSB7XHJcbiAgICAgICAgd2VhdGhlclVuaXRzLmltcGVyaWFsID0gZmFsc2U7XHJcbiAgICAgICAgd2VhdGhlclVuaXRzLm1ldHJpYyA9IHRydWU7XHJcbiAgICAgICAgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddID0gJ0MnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3ZWF0aGVyVW5pdHMuaW1wZXJpYWwgPSB0cnVlO1xyXG4gICAgICAgIHdlYXRoZXJVbml0cy5tZXRyaWMgPSBmYWxzZTtcclxuICAgICAgICB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ10gPSAnRic7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcFRlbXBlcmF0dXJlVmFsdWUoYCMke2RvbUlkTGlzdFsnQ3VycmVudCBUZW1wZXJhdHVyZSddfWAsIDIsIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXSk7XHJcbiAgICBzd2FwVGVtcGVyYXR1cmVWYWx1ZShgIyR7ZG9tSWRMaXN0WydGZWVscyBMaWtlIFRlbXBlcmF0dXJlJ119IC50ZW1wLXZhbHVlYCwgMiwgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddKTtcclxuICAgIHN3YXBUZW1wZXJhdHVyZVZhbHVlKGAjJHtkb21JZExpc3RbJ0hpZ2ggVGVtcGVyYXR1cmUnXX0gLnRlbXAtdmFsdWVgLCAyLCB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ10pO1xyXG4gICAgc3dhcFRlbXBlcmF0dXJlVmFsdWUoYCMke2RvbUlkTGlzdFsnTG93IFRlbXBlcmF0dXJlJ119IC50ZW1wLXZhbHVlYCwgMiwgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3YXBUZW1wZXJhdHVyZVZhbHVlKGRvbVNlbGVjdG9yLCBjaGFyc1RvUmVtb3ZlLCBjb252ZXJ0VG9Vbml0KSB7XHJcblxyXG4gICAgbGV0IHRlbXBUb0NoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tU2VsZWN0b3IpLnRleHRDb250ZW50O1xyXG4gICAgdGVtcFRvQ2hhbmdlID0gdGVtcFRvQ2hhbmdlLnNsaWNlKDAsIHRlbXBUb0NoYW5nZS5sZW5ndGggLSBjaGFyc1RvUmVtb3ZlKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tU2VsZWN0b3IpLnRleHRDb250ZW50ID0gaW5kZXguY29udmVydFRlbXBlcmF0dXJlKHRlbXBUb0NoYW5nZSwgY29udmVydFRvVW5pdCkgKyAnXFx1MDBCMCcgKyBjb252ZXJ0VG9Vbml0O1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyRGlzcGxheSh3ZWF0aGVyRGF0YSwgd2VhdGhlclVuaXRzKXtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZExpc3RbJ0NpdHkgTmFtZSddKS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLm5hbWU7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWRMaXN0WydDdXJyZW50IFRlbXBlcmF0dXJlJ10pLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApICsgJ1xcdTAwQjAnICsgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkTGlzdFsnV2VhdGhlciBEZXNjcmlwdGlvbiddKS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcclxuXHJcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkTGlzdFsnV2VhdGhlciBJY29uJ10pO1xyXG4gICAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZG9tSWRMaXN0WydGZWVscyBMaWtlIFRlbXBlcmF0dXJlJ119IC50ZW1wLXZhbHVlYCkudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSkgKyAnXFx1MDBCMCcgKyB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ107XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZG9tSWRMaXN0WydIaWdoIFRlbXBlcmF0dXJlJ119IC50ZW1wLXZhbHVlYCkudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXgpICsgJ1xcdTAwQjAnICsgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RvbUlkTGlzdFsnTG93IFRlbXBlcmF0dXJlJ119IC50ZW1wLXZhbHVlYCkudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4pICsgJ1xcdTAwQjAnICsgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RvbUlkTGlzdC5IdW1pZGl0eX0gLnRlbXAtdmFsdWVgKS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi5odW1pZGl0eSl9JWA7XHJcbn0iLCJpbXBvcnQgKiBhcyBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS5qcyc7XHJcbmltcG9ydCAqIGFzIHdlYXRoZXJDYWxsIGZyb20gJy4vd2VhdGhlci1jYWxsLmpzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG4vL2tlZXAgdHJhY2sgb2Ygd2hhdCB1bml0cyBhcmUgYmVpbmcgZGlzcGxheWVkXHJcbmNvbnN0IHdlYXRoZXJVbml0cyA9IHtcclxuICAgIGltcGVyaWFsOiB0cnVlLFxyXG4gICAgbWV0cmljOiBmYWxzZSxcclxuICAgICd3ZWF0aGVyIGxldHRlcic6ICdGJyxcclxufVxyXG5cclxuLy9pbml0aWFsIHBhZ2Ugc2V0dXBcclxuZGlzcGxheS5jcmVhdGVIZWFkZXIoKTtcclxuZGlzcGxheS5jcmVhdGVTZWFyY2hCYXJBcmVhKCk7XHJcbmRpc3BsYXkuY3JlYXRlV2VhdGhlckRpc3BsYXkoKTtcclxuZGlzcGxheS5jcmVhdGVDb252ZXJzaW9uQnV0dG9uKCk7XHJcblxyXG51cGRhdGVXZWF0aGVySW5mbygnTG9zIEFuZ2VsZXMnKTtcclxuXHJcbmNvbnN0IGNvbnZlcnNpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXNwbGF5LmRvbUlkTGlzdFsnVGVtcGVyYXR1cmUgVW5pdCBDb252ZXJzaW9uIEJ1dHRvbiddKTtcclxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlzcGxheS5kb21JZExpc3RbJ1NlYXJjaCBCdXR0b24nXSk7XHJcblxyXG5jb252ZXJzaW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGlzcGxheS5jb252ZXJ0VGVtcGVyYXR1cmVzT25EaXNwbGF5KHdlYXRoZXJVbml0cyk7XHJcbn0pO1xyXG5cclxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoTG9jYXRpb24pO1xyXG5cclxuZnVuY3Rpb24gc2VhcmNoTG9jYXRpb24oKSB7XHJcblxyXG4gICAgbGV0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlzcGxheS5kb21JZExpc3RbJ1NlYXJjaCBCYXInXSkudmFsdWU7XHJcblxyXG4gICAgaWYgKHNlYXJjaElucHV0ID09PSAnJykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWFyY2gtZXJyb3ItdGV4dGApLnRleHRDb250ZW50ID0gJ0VudGVyIGEgbG9jYXRpb24gdG8gc2VhcmNoLi4uJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlV2VhdGhlckluZm8oc2VhcmNoSW5wdXQpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVXZWF0aGVySW5mbyhsb2NhdGlvbikge1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckNhbGwuZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24pO1xyXG5cclxuICAgIGlmKHdlYXRoZXJEYXRhLm1lc3NhZ2UgPT09ICdjaXR5IG5vdCBmb3VuZCcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcGkgY2FsbCBmYWlsZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWVycm9yLXRleHQnKS50ZXh0Q29udGVudCA9IFxyXG4gICAgICAgICdMb2NhdGlvbiBzaG91bGQgYmUgaW4gZm9ybWF0OiBjaXR5IG5hbWUvY2l0eSBuYW1lLCBjb3VudHJ5IGNvZGUnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9ub3JtYWxpemUgdGhlIHVuaXRzIHRvIEYgYnkgZGVmYXVsdFxyXG4gICAgd2VhdGhlclVuaXRzLmltcGVyaWFsID0gdHJ1ZTtcclxuICAgIHdlYXRoZXJVbml0cy5tZXRyaWMgPSBmYWxzZTtcclxuICAgIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXSA9ICdGJztcclxuXHJcbiAgICBkaXNwbGF5LnVwZGF0ZVdlYXRoZXJEaXNwbGF5KHdlYXRoZXJEYXRhLCB3ZWF0aGVyVW5pdHMpO1xyXG4gICAgZGlzcGxheS5jbGVhclNlYXJjaEFuZEVycm9yKCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlLCBjb252ZXJ0VG9UaGlzVW5pdCkge1xyXG5cclxuICAgIGNvbnN0IENPTlZFUlNJT05fRkFDVE9SID0gMS44O1xyXG4gICAgY29uc3QgVEVNUF9PRkZTRVQgPSAzMjtcclxuXHJcbiAgICBsZXQgcmVzdWx0O1xyXG5cclxuICAgIGlmIChjb252ZXJ0VG9UaGlzVW5pdCA9PT0gJ0YnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZSAqIENPTlZFUlNJT05fRkFDVE9SKSArIFRFTVBfT0ZGU0VUO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnZlcnRUb1RoaXNVbml0ID09PSAnQycpIHtcclxuICAgICAgICByZXN1bHQgPSBNYXRoLnJvdW5kKCh0ZW1wZXJhdHVyZSAtIFRFTVBfT0ZGU0VUKSAvIENPTlZFUlNJT05fRkFDVE9SKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGVtcGVyYXR1cmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIvL2ZyZWUgYXBpIGtleSBmcm9tIG9wZW53ZWF0aGVybWFwLm9yZ1xyXG5jb25zdCBBUElfS0VZID0gJ2Q3OGYzNjgwNWRiNjU2ZjdmNGNmMmE1ZGRiMTg5MmM3JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihsb2NhdGlvbiwgdW5pdHMgPSAnaW1wZXJpYWwnKSB7XHJcblxyXG4gICAgbGV0IHNlYXJjaFVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPSR7QVBJX0tFWX1gO1xyXG5cclxuICAgIGlmICh1bml0cyA9PT0gJ21ldHJpYycpIHtcclxuICAgICAgICBzZWFyY2hVcmwgKz0gJyZ1bml0cz1tZXRyaWMnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZWFyY2hVcmwgKz0gJyZ1bml0cz1pbXBlcmlhbCc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2VhcmNoVXJsLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiBqc29uO1xyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==