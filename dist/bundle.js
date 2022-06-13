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

    console.log(searchUrl);
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItY2FsbC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgNDMpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTMwdmg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKnBhbmVsICB8fCovXFxyXFxuLnBhbmVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NywgODApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDRweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDhweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDE2cHggOHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAzMnB4IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi8qc2VhcmNoIGJhciB8fCovXFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIge1xcclxcbiAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogdG9wO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhciB7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDg4LCA4OCwgODgpXFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZS1jb2xvcjogcmdiKDI1NSwgMjM0LCAxNjYpO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgb3V0bGluZS13aWR0aDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM0LCAxNTgsIDE3OSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1lcnJvci10ZXh0IHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNDUsIDE0NSk7XFxyXFxufVxcclxcblxcclxcbi8qd2VhdGhlciBkaXNwbGF5IHx8Ki9cXHJcXG5cXHJcXG4ud2VhdGhlci1kaXNwbGF5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMmZyIHJlcGVhdCg0LCAxZnIpLzFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICAnY2l0eS1uYW1lIGNpdHktbmFtZSdcXHJcXG4gICAgICAgICd3ZWF0aGVyLXN0YXR1cyB3ZWF0aGVyLXN0YXR1cydcXHJcXG4gICAgICAgICdmZWVscy1saWtlIGZlZWxzLWxpa2UnXFxyXFxuICAgICAgICAnaGlnaCBoaWdoJ1xcclxcbiAgICAgICAgJ2xvdyBsb3cnXFxyXFxuICAgICAgICAnaHVtaWRpdHkgaHVtaWRpdHknO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNjaXR5LW5hbWUge1xcclxcbiAgICBncmlkLWFyZWE6IGNpdHktbmFtZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcbiN3ZWF0aGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB3ZWF0aGVyLXN0YXR1cztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODksIDkyLCA5NCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMC4wNjI1ZW0gMC4wNjI1ZW0sIHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDAuMTI1ZW0gMC41ZW0sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQ7XFxyXFxufVxcclxcbiN3ZWF0aGVyLXN0YXR1cyB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXRlbXAge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2ZlZWxzLWxpa2Uge1xcclxcbiAgICBncmlkLWFyZWE6IGZlZWxzLWxpa2U7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2ZlZWxzLWxpa2UgZGl2IHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvdyB7XFxyXFxuICAgIGdyaWQtYXJlYTogbG93O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiNsb3cgZGl2IHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZ2gge1xcclxcbiAgICBncmlkLWFyZWE6IGhpZ2g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZ2ggZGl2IHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2h1bWlkaXR5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBodW1pZGl0eTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jaHVtaWRpdHkgZGl2IHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtdmFsdWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDM0LCAzNCwgMzQpIDNweCAzcHggNnB4IDBweCBpbnNldCwgcmdiYSg2MywgNjMsIDYzLCAwLjUpIC0zcHggLTNweCA2cHggMXB4IGluc2V0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNjb252ZXJzaW9uLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XFxyXFxufVxcclxcblxcclxcbiNjb252ZXJzaW9uLWJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0xBQWtMO0FBQ3RMOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDOzs7Ozs7MkJBTXVCO0lBQ3ZCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQiw0SUFBNEk7QUFDaEo7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0dBQWdHO0lBQ2hHLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgNDMpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTMwdmg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKnBhbmVsICB8fCovXFxyXFxuLnBhbmVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NywgODApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDRweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDhweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDE2cHggOHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAzMnB4IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi8qc2VhcmNoIGJhciB8fCovXFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIge1xcclxcbiAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogdG9wO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhciB7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDg4LCA4OCwgODgpXFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZS1jb2xvcjogcmdiKDI1NSwgMjM0LCAxNjYpO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgb3V0bGluZS13aWR0aDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM0LCAxNTgsIDE3OSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1lcnJvci10ZXh0IHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNDUsIDE0NSk7XFxyXFxufVxcclxcblxcclxcbi8qd2VhdGhlciBkaXNwbGF5IHx8Ki9cXHJcXG5cXHJcXG4ud2VhdGhlci1kaXNwbGF5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMmZyIHJlcGVhdCg0LCAxZnIpLzFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICAnY2l0eS1uYW1lIGNpdHktbmFtZSdcXHJcXG4gICAgICAgICd3ZWF0aGVyLXN0YXR1cyB3ZWF0aGVyLXN0YXR1cydcXHJcXG4gICAgICAgICdmZWVscy1saWtlIGZlZWxzLWxpa2UnXFxyXFxuICAgICAgICAnaGlnaCBoaWdoJ1xcclxcbiAgICAgICAgJ2xvdyBsb3cnXFxyXFxuICAgICAgICAnaHVtaWRpdHkgaHVtaWRpdHknO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNjaXR5LW5hbWUge1xcclxcbiAgICBncmlkLWFyZWE6IGNpdHktbmFtZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcbiN3ZWF0aGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB3ZWF0aGVyLXN0YXR1cztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODksIDkyLCA5NCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMC4wNjI1ZW0gMC4wNjI1ZW0sIHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDAuMTI1ZW0gMC41ZW0sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQ7XFxyXFxufVxcclxcbiN3ZWF0aGVyLXN0YXR1cyB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXRlbXAge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2ZlZWxzLWxpa2Uge1xcclxcbiAgICBncmlkLWFyZWE6IGZlZWxzLWxpa2U7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2ZlZWxzLWxpa2UgZGl2IHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvdyB7XFxyXFxuICAgIGdyaWQtYXJlYTogbG93O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiNsb3cgZGl2IHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZ2gge1xcclxcbiAgICBncmlkLWFyZWE6IGhpZ2g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZ2ggZGl2IHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2h1bWlkaXR5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBodW1pZGl0eTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jaHVtaWRpdHkgZGl2IHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtdmFsdWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDM0LCAzNCwgMzQpIDNweCAzcHggNnB4IDBweCBpbnNldCwgcmdiYSg2MywgNjMsIDYzLCAwLjUpIC0zcHggLTNweCA2cHggMXB4IGluc2V0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNjb252ZXJzaW9uLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XFxyXFxufVxcclxcblxcclxcbiNjb252ZXJzaW9uLWJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9BQk9VVDogdmFyaW91cyBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyB0aGUgZGlzcGxheSwgdG8gYmUgcmVmZXJlbmNlZCBmcm9tIHRoZSBpbmRleCBtb2R1bGVcclxuaW1wb3J0ICogYXMgaW5kZXggZnJvbSAnLi9pbmRleC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZG9tSWRMaXN0ID0ge1xyXG4gICAgJ1NlYXJjaCBCYXInOiAnc2VhcmNoLWJhcicsXHJcbiAgICAnQ2l0eSBOYW1lJzogJ2NpdHktbmFtZScsXHJcbiAgICAnV2VhdGhlciBTdGF0dXMgQ29udGFpbmVyJzogJ3dlYXRoZXInLFxyXG4gICAgJ0N1cnJlbnQgVGVtcGVyYXR1cmUnOiAnY3VycmVudC10ZW1wJyxcclxuICAgICdXZWF0aGVyIFN0YXR1cyBCb3gnOiAnd2VhdGhlci1zdGF0dXMnLFxyXG4gICAgJ0ZlZWxzIExpa2UgVGVtcGVyYXR1cmUnOiAnZmVlbHMtbGlrZScsXHJcbiAgICAnSGlnaCBUZW1wZXJhdHVyZSc6ICdoaWdoJyxcclxuICAgICdMb3cgVGVtcGVyYXR1cmUnOiAnbG93JyxcclxuICAgICdIdW1pZGl0eSc6ICdodW1pZGl0eScsXHJcbiAgICAnV2VhdGhlciBJY29uJzogJ3dlYXRoZXItaWNvbicsXHJcbiAgICAnV2VhdGhlciBEZXNjcmlwdGlvbic6ICd3ZWF0aGVyLWRlc2NyaXB0aW9uJyxcclxuICAgICdUZW1wZXJhdHVyZSBVbml0IENvbnZlcnNpb24gQnV0dG9uJzogJ2NvbnZlcnNpb24tYnV0dG9uJyxcclxuICAgICdTZWFyY2ggQnV0dG9uJzogJ3NlYXJjaCcsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWFyY2hCYXJBcmVhKCkge1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaEJhckJveCA9IF9jcmVhdGVTZWFyY2hDb250YWluZXIoKTtcclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IF9jcmVhdGVTZWFyY2hCYXIoKTtcclxuICAgIGNvbnN0IGVycm9yVGV4dCA9IF9jcmVhdGVFcnJvclRleHRBcmVhKCk7XHJcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBfY3JlYXRlU2VhcmNoQnV0dG9uKCk7XHJcblxyXG4gICAgc2VhcmNoQmFyQm94LmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XHJcbiAgICBzZWFyY2hCYXJCb3guYXBwZW5kQ2hpbGQoZXJyb3JUZXh0KTtcclxuICAgIHNlYXJjaEJhckJveC5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyQm94KTtcclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlU2VhcmNoQmFyKCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgc2VhcmNoQmFyLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgc2VhcmNoQmFyLm5hbWUgPSAnbG9jYXRpb24nO1xyXG4gICAgICAgIHNlYXJjaEJhci5wbGFjZWhvbGRlciA9ICdTZWFyY2ggYSBMb2NhdGlvbic7XHJcbiAgICAgICAgc2VhcmNoQmFyLmlkID0gZG9tSWRMaXN0WydTZWFyY2ggQmFyJ107XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaEJhcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlU2VhcmNoQnV0dG9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5pZCA9IGRvbUlkTGlzdFtcIlNlYXJjaCBCdXR0b25cIl07XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaEJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlRXJyb3JUZXh0QXJlYSgpIHtcclxuICAgICAgICBjb25zdCBlcnJvclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlcnJvclRleHQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWVycm9yLXRleHQnKTtcclxuICAgICAgICByZXR1cm4gZXJyb3JUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jcmVhdGVTZWFyY2hDb250YWluZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2VhcmNoQmFyQm94LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXInLCAncGFuZWwnKTtcclxuICAgICAgICByZXR1cm4gc2VhcmNoQmFyQm94O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJEaXNwbGF5KCkge1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXJEaXNwbGF5UGFuZWwgPSBfY3JlYXRlV2VhdGhlckRpc3BsYXlQYW5lbCgpO1xyXG4gICAgY29uc3QgY2l0eU5hbWUgPSBfY3JlYXRlQ2l0eU5hbWUoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gX2NyZWF0ZVdlYXRoZXJTdGF0dXNCb3goKTtcclxuICAgIGNvbnN0IGZlZWxzTGlrZUluZm9Cb3ggPSBfY3JlYXRlSW5mb0JveCgnRmVlbHMgTGlrZSBUZW1wZXJhdHVyZScpO1xyXG4gICAgY29uc3QgaGlnaFRlbXBCb3ggPSBfY3JlYXRlSW5mb0JveCgnSGlnaCBUZW1wZXJhdHVyZScpO1xyXG4gICAgY29uc3QgbG93VGVtcEJveCA9IF9jcmVhdGVJbmZvQm94KCdMb3cgVGVtcGVyYXR1cmUnKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5Qm94ID0gX2NyZWF0ZUluZm9Cb3goJ0h1bWlkaXR5Jyk7XHJcblxyXG4gICAgd2VhdGhlckRpc3BsYXlQYW5lbC5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XHJcbiAgICB3ZWF0aGVyRGlzcGxheVBhbmVsLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyKTtcclxuICAgIHdlYXRoZXJEaXNwbGF5UGFuZWwuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlSW5mb0JveCk7XHJcbiAgICB3ZWF0aGVyRGlzcGxheVBhbmVsLmFwcGVuZENoaWxkKGhpZ2hUZW1wQm94KTtcclxuICAgIHdlYXRoZXJEaXNwbGF5UGFuZWwuYXBwZW5kQ2hpbGQobG93VGVtcEJveCk7XHJcbiAgICB3ZWF0aGVyRGlzcGxheVBhbmVsLmFwcGVuZENoaWxkKGh1bWlkaXR5Qm94KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdlYXRoZXJEaXNwbGF5UGFuZWwpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlQ2l0eU5hbWUoKSB7XHJcbiAgICAgICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjaXR5TmFtZS5pZCA9IGRvbUlkTGlzdFtcIkNpdHkgTmFtZVwiXTtcclxuICAgICAgICByZXR1cm4gY2l0eU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVdlYXRoZXJEaXNwbGF5UGFuZWwoKSB7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlckRpc3BsYXlQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdlYXRoZXJEaXNwbGF5UGFuZWwuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kaXNwbGF5JywgJ3BhbmVsJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGlzcGxheVBhbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jcmVhdGVXZWF0aGVyU3RhdHVzQm94KCkge1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50V2VhdGhlclN0YXR1c0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGN1cnJlbnRXZWF0aGVyU3RhdHVzQm94LmlkID0gZG9tSWRMaXN0W1wiV2VhdGhlciBTdGF0dXMgQ29udGFpbmVyXCJdO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGN1cnJlbnRUZW1wLmlkID0gZG9tSWRMaXN0W1wiQ3VycmVudCBUZW1wZXJhdHVyZVwiXTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdlYXRoZXJTdGF0dXMuaWQgPSBkb21JZExpc3RbXCJXZWF0aGVyIFN0YXR1cyBCb3hcIl07XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHdlYXRoZXJTeW1ib2wuaWQgPSBkb21JZExpc3RbXCJXZWF0aGVyIEljb25cIl07XHJcbiAgICAgICAgd2VhdGhlclN5bWJvbC5hbHQgPSAnd2VhdGhlciBpY29uJztcclxuICAgICAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24uaWQgPSBkb21JZExpc3RbXCJXZWF0aGVyIERlc2NyaXB0aW9uXCJdO1xyXG4gICAgICAgIHdlYXRoZXJTdGF0dXMuYXBwZW5kQ2hpbGQod2VhdGhlclN5bWJvbCk7XHJcbiAgICAgICAgd2VhdGhlclN0YXR1cy5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICBjdXJyZW50V2VhdGhlclN0YXR1c0JveC5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XHJcbiAgICAgICAgY3VycmVudFdlYXRoZXJTdGF0dXNCb3guYXBwZW5kQ2hpbGQod2VhdGhlclN0YXR1cyk7XHJcblxyXG4gICAgICAgIHJldHVybiBjdXJyZW50V2VhdGhlclN0YXR1c0JveDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlSW5mb0JveChkb21JZCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5mb0NvbnRhaW5lci5pZCA9IGRvbUlkTGlzdFtkb21JZF07XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGluZm9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRvbUlkLnJlcGxhY2UoJyBUZW1wZXJhdHVyZScsICcnKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5mb091dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGluZm9PdXRwdXQuY2xhc3NMaXN0LmFkZCgndGVtcC12YWx1ZScpO1xyXG5cclxuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvT3V0cHV0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGluZm9Db250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb252ZXJzaW9uQnV0dG9uKCkge1xyXG5cclxuICAgIGNvbnN0IGNvbnZlcnNpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnZlcnNpb25CdXR0b24uY2xhc3NMaXN0LmFkZCgnY29udmVyc2lvbi1idXR0b24nKTtcclxuICAgIGNvbnZlcnNpb25CdXR0b24uaWQgPSBkb21JZExpc3RbXCJUZW1wZXJhdHVyZSBVbml0IENvbnZlcnNpb24gQnV0dG9uXCJdO1xyXG4gICAgY29udmVyc2lvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdDXFx1MDBCMC9GXFx1MDBCMCc7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb252ZXJzaW9uQnV0dG9uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUaGUgV2VhdGhlciBBcHAnO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU2VhcmNoQW5kRXJyb3IoKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWRMaXN0WydTZWFyY2ggQmFyJ10pLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VhcmNoLWVycm9yLXRleHRgKS50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUZW1wZXJhdHVyZXNPbkRpc3BsYXkod2VhdGhlclVuaXRzKSB7XHJcblxyXG4gICAgaWYgKHdlYXRoZXJVbml0cy5pbXBlcmlhbCkge1xyXG4gICAgICAgIHdlYXRoZXJVbml0cy5pbXBlcmlhbCA9IGZhbHNlO1xyXG4gICAgICAgIHdlYXRoZXJVbml0cy5tZXRyaWMgPSB0cnVlO1xyXG4gICAgICAgIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXSA9ICdDJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VhdGhlclVuaXRzLmltcGVyaWFsID0gdHJ1ZTtcclxuICAgICAgICB3ZWF0aGVyVW5pdHMubWV0cmljID0gZmFsc2U7XHJcbiAgICAgICAgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddID0gJ0YnO1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBUZW1wZXJhdHVyZVZhbHVlKGAjJHtkb21JZExpc3RbJ0N1cnJlbnQgVGVtcGVyYXR1cmUnXX1gLCAyLCB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ10pO1xyXG4gICAgc3dhcFRlbXBlcmF0dXJlVmFsdWUoYCMke2RvbUlkTGlzdFsnRmVlbHMgTGlrZSBUZW1wZXJhdHVyZSddfSAudGVtcC12YWx1ZWAsIDIsIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXSk7XHJcbiAgICBzd2FwVGVtcGVyYXR1cmVWYWx1ZShgIyR7ZG9tSWRMaXN0WydIaWdoIFRlbXBlcmF0dXJlJ119IC50ZW1wLXZhbHVlYCwgMiwgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddKTtcclxuICAgIHN3YXBUZW1wZXJhdHVyZVZhbHVlKGAjJHtkb21JZExpc3RbJ0xvdyBUZW1wZXJhdHVyZSddfSAudGVtcC12YWx1ZWAsIDIsIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2FwVGVtcGVyYXR1cmVWYWx1ZShkb21TZWxlY3RvciwgY2hhcnNUb1JlbW92ZSwgY29udmVydFRvVW5pdCkge1xyXG5cclxuICAgIGxldCB0ZW1wVG9DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRvbVNlbGVjdG9yKS50ZXh0Q29udGVudDtcclxuICAgIHRlbXBUb0NoYW5nZSA9IHRlbXBUb0NoYW5nZS5zbGljZSgwLCB0ZW1wVG9DaGFuZ2UubGVuZ3RoIC0gY2hhcnNUb1JlbW92ZSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRvbVNlbGVjdG9yKS50ZXh0Q29udGVudCA9IGluZGV4LmNvbnZlcnRUZW1wZXJhdHVyZSh0ZW1wVG9DaGFuZ2UsIGNvbnZlcnRUb1VuaXQpICsgJ1xcdTAwQjAnICsgY29udmVydFRvVW5pdDtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2VhdGhlckRpc3BsYXkod2VhdGhlckRhdGEsIHdlYXRoZXJVbml0cyl7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWRMaXN0WydDaXR5IE5hbWUnXSkudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5uYW1lO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkTGlzdFsnQ3VycmVudCBUZW1wZXJhdHVyZSddKS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wKSArICdcXHUwMEIwJyArIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZExpc3RbJ1dlYXRoZXIgRGVzY3JpcHRpb24nXSkudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XHJcblxyXG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZExpc3RbJ1dlYXRoZXIgSWNvbiddKTtcclxuICAgIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufS5wbmdgO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RvbUlkTGlzdFsnRmVlbHMgTGlrZSBUZW1wZXJhdHVyZSddfSAudGVtcC12YWx1ZWApLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UpICsgJ1xcdTAwQjAnICsgd2VhdGhlclVuaXRzWyd3ZWF0aGVyIGxldHRlciddO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RvbUlkTGlzdFsnSGlnaCBUZW1wZXJhdHVyZSddfSAudGVtcC12YWx1ZWApLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4KSArICdcXHUwMEIwJyArIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkb21JZExpc3RbJ0xvdyBUZW1wZXJhdHVyZSddfSAudGVtcC12YWx1ZWApLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluKSArICdcXHUwMEIwJyArIHdlYXRoZXJVbml0c1snd2VhdGhlciBsZXR0ZXInXTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkb21JZExpc3QuSHVtaWRpdHl9IC50ZW1wLXZhbHVlYCkudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHkpfSVgO1xyXG59IiwiaW1wb3J0ICogYXMgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXkuanMnO1xyXG5pbXBvcnQgKiBhcyB3ZWF0aGVyQ2FsbCBmcm9tICcuL3dlYXRoZXItY2FsbC5qcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuLy9rZWVwIHRyYWNrIG9mIHdoYXQgdW5pdHMgYXJlIGJlaW5nIGRpc3BsYXllZFxyXG5jb25zdCB3ZWF0aGVyVW5pdHMgPSB7XHJcbiAgICBpbXBlcmlhbDogdHJ1ZSxcclxuICAgIG1ldHJpYzogZmFsc2UsXHJcbiAgICAnd2VhdGhlciBsZXR0ZXInOiAnRicsXHJcbn1cclxuXHJcbi8vaW5pdGlhbCBwYWdlIHNldHVwXHJcbmRpc3BsYXkuY3JlYXRlSGVhZGVyKCk7XHJcbmRpc3BsYXkuY3JlYXRlU2VhcmNoQmFyQXJlYSgpO1xyXG5kaXNwbGF5LmNyZWF0ZVdlYXRoZXJEaXNwbGF5KCk7XHJcbmRpc3BsYXkuY3JlYXRlQ29udmVyc2lvbkJ1dHRvbigpO1xyXG5cclxudXBkYXRlV2VhdGhlckluZm8oJ0xvcyBBbmdlbGVzJyk7XHJcblxyXG5jb25zdCBjb252ZXJzaW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlzcGxheS5kb21JZExpc3RbJ1RlbXBlcmF0dXJlIFVuaXQgQ29udmVyc2lvbiBCdXR0b24nXSk7XHJcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpc3BsYXkuZG9tSWRMaXN0WydTZWFyY2ggQnV0dG9uJ10pO1xyXG5cclxuY29udmVyc2lvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpc3BsYXkuY29udmVydFRlbXBlcmF0dXJlc09uRGlzcGxheSh3ZWF0aGVyVW5pdHMpO1xyXG59KTtcclxuXHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaExvY2F0aW9uKTtcclxuXHJcbmZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKCkge1xyXG5cclxuICAgIGxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpc3BsYXkuZG9tSWRMaXN0WydTZWFyY2ggQmFyJ10pLnZhbHVlO1xyXG5cclxuICAgIGlmIChzZWFyY2hJbnB1dCA9PT0gJycpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VhcmNoLWVycm9yLXRleHRgKS50ZXh0Q29udGVudCA9ICdFbnRlciBhIGxvY2F0aW9uIHRvIHNlYXJjaC4uLic7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVdlYXRoZXJJbmZvKHNlYXJjaElucHV0KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2VhdGhlckluZm8obG9jYXRpb24pIHtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJDYWxsLmdldEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uKTtcclxuXHJcbiAgICBpZih3ZWF0aGVyRGF0YS5tZXNzYWdlID09PSAnY2l0eSBub3QgZm91bmQnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXBpIGNhbGwgZmFpbGVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1lcnJvci10ZXh0JykudGV4dENvbnRlbnQgPSBcclxuICAgICAgICAnTG9jYXRpb24gc2hvdWxkIGJlIGluIGZvcm1hdDogY2l0eSBuYW1lL2NpdHkgbmFtZSwgY291bnRyeSBjb2RlJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vbm9ybWFsaXplIHRoZSB1bml0cyB0byBGIGJ5IGRlZmF1bHRcclxuICAgIHdlYXRoZXJVbml0cy5pbXBlcmlhbCA9IHRydWU7XHJcbiAgICB3ZWF0aGVyVW5pdHMubWV0cmljID0gZmFsc2U7XHJcbiAgICB3ZWF0aGVyVW5pdHNbJ3dlYXRoZXIgbGV0dGVyJ10gPSAnRic7XHJcblxyXG4gICAgZGlzcGxheS51cGRhdGVXZWF0aGVyRGlzcGxheSh3ZWF0aGVyRGF0YSwgd2VhdGhlclVuaXRzKTtcclxuICAgIGRpc3BsYXkuY2xlYXJTZWFyY2hBbmRFcnJvcigpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZSwgY29udmVydFRvVGhpc1VuaXQpIHtcclxuXHJcbiAgICBjb25zdCBDT05WRVJTSU9OX0ZBQ1RPUiA9IDEuODtcclxuICAgIGNvbnN0IFRFTVBfT0ZGU0VUID0gMzI7XHJcblxyXG4gICAgbGV0IHJlc3VsdDtcclxuXHJcbiAgICBpZiAoY29udmVydFRvVGhpc1VuaXQgPT09ICdGJykge1xyXG4gICAgICAgIHJlc3VsdCA9IE1hdGgucm91bmQodGVtcGVyYXR1cmUgKiBDT05WRVJTSU9OX0ZBQ1RPUikgKyBURU1QX09GRlNFVDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIGlmIChjb252ZXJ0VG9UaGlzVW5pdCA9PT0gJ0MnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gTWF0aC5yb3VuZCgodGVtcGVyYXR1cmUgLSBURU1QX09GRlNFVCkgLyBDT05WRVJTSU9OX0ZBQ1RPUik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBlcmF0dXJlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiLy9mcmVlIGFwaSBrZXkgZnJvbSBvcGVud2VhdGhlcm1hcC5vcmdcclxuY29uc3QgQVBJX0tFWSA9ICdkNzhmMzY4MDVkYjY1NmY3ZjRjZjJhNWRkYjE4OTJjNyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24sIHVuaXRzID0gJ2ltcGVyaWFsJykge1xyXG5cclxuICAgIGxldCBzZWFyY2hVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke0FQSV9LRVl9YDtcclxuXHJcbiAgICBpZiAodW5pdHMgPT09ICdtZXRyaWMnKSB7XHJcbiAgICAgICAgc2VhcmNoVXJsICs9ICcmdW5pdHM9bWV0cmljJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VhcmNoVXJsICs9ICcmdW5pdHM9aW1wZXJpYWwnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNlYXJjaFVybCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2VhcmNoVXJsLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiBqc29uO1xyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==