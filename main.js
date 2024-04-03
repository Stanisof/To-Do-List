"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Afacad-VariableFont_wght.ttf */ "./src/Afacad-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Afacad;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
    margin: 0;
    padding: 0;
    font-family: Afacad;
    font-size: 28px;
    border:none;
}

#sidebar {
    background-color: #A0CED9 ;
    position: fixed;
    width: 19vw;
    height: 100vh;
    padding: 5px;
    box-shadow: 5px 0px 6px #00000040;
}

#home {
    background-color: transparent;
    font-weight: bold;
    font-size: 50px;
    margin: 30px ;
}

h1 {
    padding-left: 25px;
    margin-bottom: 15px;
}

#projects > .selected {
    background-color: #088faf;
}

#projects > div {
    position: relative;
    padding: 10px 35px ;
    margin-bottom: 5px;
    background-color:#47adc6 ;
    border-radius: 8px;
}

#trash {
    position: absolute;
    right: 10px;
    top: 8px;
    width: 40px;
    z-index: 2;
}

#projectDialog {
    background-color: #47adc6;
    border-radius: 8px;
    padding: 4px 5px;
    width: 18vw;
    height: 60px;
    left: 5px;
    top: 80vh ;
    /* display: grid;
    align-items: center; */
}


#projectDialog form {
    display: flex;
    align-items: center;
}

#projectDialog input {
    background-color: #088faf;
}

#submitTitle {
    width: 40px;
}



#projects > div:hover {
    background-color: #088faf;
}

#projects > div:active {
    background-color: #47adc6;
}


button {
    width: 100px;
    background-color: transparent;
}

svg {
    fill: #088faf;
    filter: drop-shadow(1px 3px 5px rgb(0 0 0 / 0.4));
}

#newProject {
    position: absolute;
    right: 20px;
    bottom: 20px;
}

#add {
    z-index: 2;
    position: fixed;
    right: 5px;
    bottom: 0px;
}

#newProject > svg:hover,
#add > svg:hover {
    fill: #47adc6;
}

#newProject > svg:active,
#add > svg:active {
    fill: #088faf;
}

#content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 300px;
    column-gap: 20px;
    padding: 20px;
    row-gap: 20px;
    margin-left: 20vw;
}

.note {
    padding: 15px;
    position: relative;
    display: grid;
    grid-template-rows: 45px 2fr;
    box-shadow: 5px 5px 6px #00000040;
}

.note > div {
    display: flex;
    gap: 20px
}

h2 {
    font-size: 32px;
}

#status {
    width: 20px;
}

p {
    font-size: 24px;
    align-self: start;
}

#date {
    align-self: end;
    font-size: 18px;
    text-decoration: underline;
}

#delete {
    position: absolute;
    width: 30px;
    right: 15px;
    top: 10px;
}

#delete > svg,
#trash > svg,
#submitTitle > svg {
    fill: rgb(55, 55, 55);
    filter: none;
}

#delete > svg:hover,
#trash > svg:hover,
#submitTitle > svg:hover {
    fill: rgba(55, 55, 55, 0.592);
}

#edit {
    position: absolute;
    width: 75px;
    bottom: 15px;
    right: 15px;
}

#edit > svg:hover {
    fill: #47adc6;
}

#edit > svg:active {
    fill: #088faf;
}

#noteDialog {
    left: calc(50vw - 250px);
    top: 150px;
    width: 500px;
    height: 500px;
    background-color: #ADF7B6;
    padding: 35px;
}

#noteDialog form {
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100%;
    row-gap: 5px;
}

#noteDialog label {
    grid-column: 1;
    align-self: center;
}

#description {
    grid-column: 1 / 4;
    background-color: #85d18d;
}

fieldset {
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

#noteDialog input {
    grid-column: 2 / 4;
    background-color: #85d18d;
}

#info   {
    grid-column: 2 / 4;
    background-color: #088faf;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    padding: 3px 5px;
    justify-self: end;
    width: 200px;
}

#info:hover {
    background-color: #47adc6;
}

[data-priority="low"] {
    background-color: #ADF7B6;
}

[data-priority="middle"] {
    background-color: #FFEE93;
}

[data-priority="high"] {
    background-color: #FFC09F;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAAwC;AAC5C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,0BAA0B;IAC1B,eAAe;IACf,WAAW;IACX,aAAa;IACb,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,WAAW;IACX,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,UAAU;IACV;0BACsB;AAC1B;;;AAGA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;;;AAIA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA;IACI,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,iDAAiD;AACrD;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,UAAU;IACV,WAAW;AACf;;AAEA;;IAEI,aAAa;AACjB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,qBAAqB;IACrB,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,SAAS;AACb;;AAEA;;;IAGI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;;;IAGI,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["@font-face {\n    font-family: Afacad;\n    src: url(./Afacad-VariableFont_wght.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: Afacad;\n    font-size: 28px;\n    border:none;\n}\n\n#sidebar {\n    background-color: #A0CED9 ;\n    position: fixed;\n    width: 19vw;\n    height: 100vh;\n    padding: 5px;\n    box-shadow: 5px 0px 6px #00000040;\n}\n\n#home {\n    background-color: transparent;\n    font-weight: bold;\n    font-size: 50px;\n    margin: 30px ;\n}\n\nh1 {\n    padding-left: 25px;\n    margin-bottom: 15px;\n}\n\n#projects > .selected {\n    background-color: #088faf;\n}\n\n#projects > div {\n    position: relative;\n    padding: 10px 35px ;\n    margin-bottom: 5px;\n    background-color:#47adc6 ;\n    border-radius: 8px;\n}\n\n#trash {\n    position: absolute;\n    right: 10px;\n    top: 8px;\n    width: 40px;\n    z-index: 2;\n}\n\n#projectDialog {\n    background-color: #47adc6;\n    border-radius: 8px;\n    padding: 4px 5px;\n    width: 18vw;\n    height: 60px;\n    left: 5px;\n    top: 80vh ;\n    /* display: grid;\n    align-items: center; */\n}\n\n\n#projectDialog form {\n    display: flex;\n    align-items: center;\n}\n\n#projectDialog input {\n    background-color: #088faf;\n}\n\n#submitTitle {\n    width: 40px;\n}\n\n\n\n#projects > div:hover {\n    background-color: #088faf;\n}\n\n#projects > div:active {\n    background-color: #47adc6;\n}\n\n\nbutton {\n    width: 100px;\n    background-color: transparent;\n}\n\nsvg {\n    fill: #088faf;\n    filter: drop-shadow(1px 3px 5px rgb(0 0 0 / 0.4));\n}\n\n#newProject {\n    position: absolute;\n    right: 20px;\n    bottom: 20px;\n}\n\n#add {\n    z-index: 2;\n    position: fixed;\n    right: 5px;\n    bottom: 0px;\n}\n\n#newProject > svg:hover,\n#add > svg:hover {\n    fill: #47adc6;\n}\n\n#newProject > svg:active,\n#add > svg:active {\n    fill: #088faf;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-auto-rows: 300px;\n    column-gap: 20px;\n    padding: 20px;\n    row-gap: 20px;\n    margin-left: 20vw;\n}\n\n.note {\n    padding: 15px;\n    position: relative;\n    display: grid;\n    grid-template-rows: 45px 2fr;\n    box-shadow: 5px 5px 6px #00000040;\n}\n\n.note > div {\n    display: flex;\n    gap: 20px\n}\n\nh2 {\n    font-size: 32px;\n}\n\n#status {\n    width: 20px;\n}\n\np {\n    font-size: 24px;\n    align-self: start;\n}\n\n#date {\n    align-self: end;\n    font-size: 18px;\n    text-decoration: underline;\n}\n\n#delete {\n    position: absolute;\n    width: 30px;\n    right: 15px;\n    top: 10px;\n}\n\n#delete > svg,\n#trash > svg,\n#submitTitle > svg {\n    fill: rgb(55, 55, 55);\n    filter: none;\n}\n\n#delete > svg:hover,\n#trash > svg:hover,\n#submitTitle > svg:hover {\n    fill: rgba(55, 55, 55, 0.592);\n}\n\n#edit {\n    position: absolute;\n    width: 75px;\n    bottom: 15px;\n    right: 15px;\n}\n\n#edit > svg:hover {\n    fill: #47adc6;\n}\n\n#edit > svg:active {\n    fill: #088faf;\n}\n\n#noteDialog {\n    left: calc(50vw - 250px);\n    top: 150px;\n    width: 500px;\n    height: 500px;\n    background-color: #ADF7B6;\n    padding: 35px;\n}\n\n#noteDialog form {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100%;\n    row-gap: 5px;\n}\n\n#noteDialog label {\n    grid-column: 1;\n    align-self: center;\n}\n\n#description {\n    grid-column: 1 / 4;\n    background-color: #85d18d;\n}\n\nfieldset {\n    grid-column: 1 / 4;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n#noteDialog input {\n    grid-column: 2 / 4;\n    background-color: #85d18d;\n}\n\n#info   {\n    grid-column: 2 / 4;\n    background-color: #088faf;\n    font-weight: bold;\n    color: white;\n    border-radius: 8px;\n    padding: 3px 5px;\n    justify-self: end;\n    width: 200px;\n}\n\n#info:hover {\n    background-color: #47adc6;\n}\n\n[data-priority=\"low\"] {\n    background-color: #ADF7B6;\n}\n\n[data-priority=\"middle\"] {\n    background-color: #FFEE93;\n}\n\n[data-priority=\"high\"] {\n    background-color: #FFC09F;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/createDOM.js":
/*!**************************!*\
  !*** ./src/createDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNote: () => (/* binding */ createNote),
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* import editSVG from './svg/pencil-circle.svg' */

function createSvgX() {
    const svgX = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgX.setAttribute('viewBox', '0 0 24 24');
    const pathX = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathX.setAttribute("d","M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z");
    svgX.appendChild(pathX);

    return svgX
}

function createSvgPencil() {
    const svgPencil = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgPencil.setAttribute('viewBox', '0 0 24 24');
    const pathPencil = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathPencil.setAttribute("d","M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M15.1,7.07C15.24,7.07 15.38,7.12 15.5,7.23L16.77,8.5C17,8.72 17,9.07 16.77,9.28L15.77,10.28L13.72,8.23L14.72,7.23C14.82,7.12 14.96,7.07 15.1,7.07M13.13,8.81L15.19,10.87L9.13,16.93H7.07V14.87L13.13,8.81Z");
    svgPencil.appendChild(pathPencil);

    return svgPencil
}

function createSvgPlus() {
    const svgPlus = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgPlus.setAttribute('viewBox', '0 0 24 24');
    const pathPlus = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathPlus.setAttribute("d","M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M13 16H11V13H8V11H11V8H13V11H16V13H13V16M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z");
    svgPlus.appendChild(pathPlus);

    return svgPlus
}

function createSvgCheck() {
    const svgCheck = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgCheck.setAttribute('viewBox', '0 0 24 24');
    const pathCheck = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathCheck.setAttribute("d","M17,14H19V17H22V19H19V22H17V19H14V17H17V14M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V13.53C20.94,12.58 19.54,12 18,12A6,6 0 0,0 12,18C12,19.09 12.29,20.12 12.8,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z");
    svgCheck.appendChild(pathCheck);

    return svgCheck
}

function createSvgTrash() {
    const svgTrash = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgTrash.setAttribute('viewBox', '0 0 24 24');
    const pathTrash = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathTrash.setAttribute("d","M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
    svgTrash.appendChild(pathTrash);

    return svgTrash
}

//maybe not best practice bc it creates + adds listener + caches for dialog
/* function createNoteButton() {
    const noteButton = document.createElement('button');
    noteButton.setAttribute('id','add');
    noteButton.appendChild(createSvgPlus());

    const noteDialog = document.getElementById('noteDialog');

    return {noteButton, noteDialog}
} */

function createNote() {
    let noteContainer = document.createElement('div');
    noteContainer.className = 'note';

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','delete');
    deleteButton.appendChild(createSvgX());
    //deleteButton.addEventListener('click', () => noteContainer.remove())

    let headArea = document.createElement('div');
    let title = document.createElement('h2');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'status');
    headArea.appendChild(title);
    headArea.appendChild(checkbox);

    let description = document.createElement('p');
    description.setAttribute('id','des');
    let duedate = document.createElement('p');
    duedate.setAttribute('id','date')

    const editButton = document.createElement('button');
    editButton.setAttribute('id', 'edit');
    editButton.appendChild(createSvgPencil());



    noteContainer.appendChild(deleteButton);
    noteContainer.appendChild(headArea);
    noteContainer.appendChild(description);
    noteContainer.appendChild(duedate);
    noteContainer.appendChild(editButton);

    return noteContainer
}

function createProject() {
    let projectContainer = document.createElement('div');
    let projectTitle = document.createElement('p');
    const trashButton = document.createElement('button');
    trashButton.appendChild(createSvgTrash());
    trashButton.setAttribute('id', 'trash');
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(trashButton);

    return projectContainer
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDOM */ "./src/createDOM.js");



const home = document.getElementById('home');
const content = document.getElementById('content');
const projectBar = document.getElementById('projects')
const openNoteForm = document.getElementById('add');
const noteDialog = document.getElementById('noteDialog');
let noteForm = document.getElementById('noteForm');
const projectDialog = document.getElementById('projectDialog');
const projectForm = document.getElementById('projectForm');
const openProjectForm = document.getElementById('newProject');

let mainArray = [];
let homeArray = [];
let homeTitle = "Home";
pushToArray(homeArray, homeTitle);



class Note {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.status = false;
    }
}

let noteIns = new Note("Task", "Long description of words", "2024-03-21", "middle");
let newTask = new Note("Cleaning", "I have to clean the whole godamn house", "2024-04-10", "low")
let task = new Note("coding", "i have to code a lot and it huerts", "2024-03-30", "high");

pushToArray(homeArray, noteIns);
pushToArray(homeArray, newTask);
pushToArray(homeArray, task);


openProjectForm.addEventListener('click', () => projectDialog.showModal())
openNoteForm.addEventListener('click', () => noteDialog.showModal());

function pushToArray(array, object) {
    if(!array.includes(object))
    array.push(object)
}

function homeComponent() {
    removeAllContent();
    addNote(homeArray)
    displayNote(homeArray);
console.log(homeArray);
console.log(mainArray);
}

projectForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    e.stopImmediatePropagation(); 
    const fd = new FormData(projectForm);

    addProject(fd.get('title'));
})

function addProject(title) {
    let newProject = []
    let projectTitle = `${title}`;
    newProject.push(projectTitle);

    pushToArray(mainArray, newProject);// fügt das neue Projekt in das mainArray hinzu
    displayProjectDOM(mainArray); // zeigt die Projekte in der sidebar an
    addNote(newProject); //ist der Listener für Submit form
    removeAllContent(); // entfernt erst die Notizen von anderem Projekt
    displayNote(newProject); // zeigt die Notizen im content Bereich an

console.log(mainArray)

    projectDialog.close();
    projectForm.reset();
}

function addNote(array) {

let newNoteForm = noteForm.cloneNode(true);
noteForm.parentNode.replaceChild(newNoteForm,noteForm);
noteForm = newNoteForm;
    

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const fd = new FormData(noteForm);

        let note = new Note(fd.get('task'), fd.get('description'), fd.get('duedate'), fd.get('priority'));
                
        pushToArray(array, note);
        displayNote(array);
        noteDialog.close();
        noteForm.reset();
    console.log(array)
    })
}


function cacheProjectElement() {
    let projectContainer = document.querySelector('#projects > div:last-child');
    let projectTitle = document.querySelector('#projects > div:last-child p');
    let trashProject = document.querySelector('#projects > div:last-child #trash');

    return {projectContainer, projectTitle, trashProject}
}

function displayProjectDOM(array) {
    let allProjects = document.querySelectorAll('#projects p');

    for (let i = 0; i < array.length; i++) {
        let isCreated = Array.from(allProjects).some((instance) => instance.textContent == array[i][0]);

        if(!isCreated) {
            projectBar.appendChild((0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.createProject)());
            cacheProjectElement().projectTitle.textContent = array[i][0];

            let subArray = array[i]

            cacheProjectElement().projectContainer.addEventListener('click', (e) => {
                removeAllContent();
                addNote(subArray);
                displayNote(subArray);
                
                let allElements = document.querySelectorAll('#projects > div');
                allElements.forEach((item)=> item.classList.remove('selected'));
                e.currentTarget.classList.add('selected');
            })

            cacheProjectElement().trashProject.addEventListener('click',(e)=> {
                removeFromArray(mainArray, subArray);
                removeFromDOM(e);
            })
        }
    }
}


function cacheNoteElements() {
    let noteContainer = document.querySelector('.note:last-child');
    let title = document.querySelector('.note:last-child h2');
    let description = document.querySelector('.note:last-child #des');
    let duedate = document.querySelector('.note:last-child #date');
    let deleteButton = document.querySelector('.note:last-child #delete');
    let editButton = document.querySelector('.note:last-child #edit');

    return {noteContainer, title, description, duedate, deleteButton, editButton};
}

function displayNote(array) {
    let allNotes = document.querySelectorAll('.note h2');
    
    for (let i = 1; i < array.length; i++) {
    
        let isCreated = Array.from(allNotes).some((instance) => instance.textContent == array[i].title)
        
        if(!isCreated) {
            
            array[i].index = i; // könnte auch beim pushen hinzugefügt werden

            content.appendChild((0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.createNote)());
            cacheNoteElements().title.textContent = array[i].title;
            cacheNoteElements().description.textContent = array[i].description;
            cacheNoteElements().duedate.textContent = array[i].duedate;
            cacheNoteElements().noteContainer.setAttribute('data-priority', array[i].priority) 
            

           let passArray = array;
           let passObject = array[i]

            cacheNoteElements().deleteButton.addEventListener('click', (e) => {
                removeFromArray(passArray, passObject);
                removeFromDOM(e);
                
            })

            cacheNoteElements().editButton.addEventListener('click', (e) => {
                editNote(array[i]);
                removeFromArray(passArray, passObject);
                removeFromDOM(e);
            })
        }
    }
}


function removeFromArray(array, object) {

      array.splice(object.index,1);
  
      array.forEach((item)=> {
        if(item.index > object.index) 
        item.index -= 1;
      })
console.log(array);
}

function removeFromDOM(e) {
    let button = e.currentTarget;
    let parent = button.parentNode;
    parent.remove();
}

function removeAllContent() {
    let allElements = content.querySelectorAll('.note');
    allElements.forEach((node) => node.remove());
}


function editNote(object) {

    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('duedate');
    let lowInput = document.getElementById('low');
    let middleInput = document.getElementById('middle');
    let highInput = document.getElementById('high');

    taskInput.setAttribute('value', object.title);
    descriptionInput.value = object.description;
    dateInput.setAttribute('value', object.duedate);
    switch(object.priority) {
        case('low'): lowInput.setAttribute('checked', '')
            break
        case('middle'): middleInput.setAttribute('checked', '')
            break
        case('high'): highInput.setAttribute('checked', '');
            break
    }

    noteDialog.showModal();
}

home.addEventListener('click', ()=> homeComponent());
homeComponent();

/***/ }),

/***/ "./src/Afacad-VariableFont_wght.ttf":
/*!******************************************!*\
  !*** ./src/Afacad-VariableFont_wght.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e7141d6af3f14a97ab4.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUlBQWlEO0FBQzdGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssT0FBTyxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FB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OztBQUVBO0FBQ0EsbUNBQW1DLHlEQUFhO0FBQ2hEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDLGdDQUFnQyxzREFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9BZmFjYWQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogQWZhY2FkO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogQWZhY2FkO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBib3JkZXI6bm9uZTtcbn1cblxuI3NpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMENFRDkgO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTl2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDZweCAjMDAwMDAwNDA7XG59XG5cbiNob21lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luOiAzMHB4IDtcbn1cblxuaDEge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4jcHJvamVjdHMgPiAuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODhmYWY7XG59XG5cbiNwcm9qZWN0cyA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEwcHggMzVweCA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzQ3YWRjNiA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4jdHJhc2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDhweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4jcHJvamVjdERpYWxvZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YWRjNjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogNHB4IDVweDtcbiAgICB3aWR0aDogMTh2dztcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogODB2aCA7XG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xufVxuXG5cbiNwcm9qZWN0RGlhbG9nIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3Byb2plY3REaWFsb2cgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODhmYWY7XG59XG5cbiNzdWJtaXRUaXRsZSB7XG4gICAgd2lkdGg6IDQwcHg7XG59XG5cblxuXG4jcHJvamVjdHMgPiBkaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODhmYWY7XG59XG5cbiNwcm9qZWN0cyA+IGRpdjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2FkYzY7XG59XG5cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnN2ZyB7XG4gICAgZmlsbDogIzA4OGZhZjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAzcHggNXB4IHJnYigwIDAgMCAvIDAuNCkpO1xufVxuXG4jbmV3UHJvamVjdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbn1cblxuI2FkZCB7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3R0b206IDBweDtcbn1cblxuI25ld1Byb2plY3QgPiBzdmc6aG92ZXIsXG4jYWRkID4gc3ZnOmhvdmVyIHtcbiAgICBmaWxsOiAjNDdhZGM2O1xufVxuXG4jbmV3UHJvamVjdCA+IHN2ZzphY3RpdmUsXG4jYWRkID4gc3ZnOmFjdGl2ZSB7XG4gICAgZmlsbDogIzA4OGZhZjtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdyaWQtYXV0by1yb3dzOiAzMDBweDtcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcm93LWdhcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjB2dztcbn1cblxuLm5vdGUge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDJmcjtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDZweCAjMDAwMDAwNDA7XG59XG5cbi5ub3RlID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweFxufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4jc3RhdHVzIHtcbiAgICB3aWR0aDogMjBweDtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG4jZGF0ZSB7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuI2RlbGV0ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRvcDogMTBweDtcbn1cblxuI2RlbGV0ZSA+IHN2ZyxcbiN0cmFzaCA+IHN2ZyxcbiNzdWJtaXRUaXRsZSA+IHN2ZyB7XG4gICAgZmlsbDogcmdiKDU1LCA1NSwgNTUpO1xuICAgIGZpbHRlcjogbm9uZTtcbn1cblxuI2RlbGV0ZSA+IHN2Zzpob3ZlcixcbiN0cmFzaCA+IHN2Zzpob3ZlcixcbiNzdWJtaXRUaXRsZSA+IHN2Zzpob3ZlciB7XG4gICAgZmlsbDogcmdiYSg1NSwgNTUsIDU1LCAwLjU5Mik7XG59XG5cbiNlZGl0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xufVxuXG4jZWRpdCA+IHN2Zzpob3ZlciB7XG4gICAgZmlsbDogIzQ3YWRjNjtcbn1cblxuI2VkaXQgPiBzdmc6YWN0aXZlIHtcbiAgICBmaWxsOiAjMDg4ZmFmO1xufVxuXG4jbm90ZURpYWxvZyB7XG4gICAgbGVmdDogY2FsYyg1MHZ3IC0gMjUwcHgpO1xuICAgIHRvcDogMTUwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FERjdCNjtcbiAgICBwYWRkaW5nOiAzNXB4O1xufVxuXG4jbm90ZURpYWxvZyBmb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcm93LWdhcDogNXB4O1xufVxuXG4jbm90ZURpYWxvZyBsYWJlbCB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jZGVzY3JpcHRpb24ge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVkMThkO1xufVxuXG5maWVsZHNldCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbn1cblxuI25vdGVEaWFsb2cgaW5wdXQge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVkMThkO1xufVxuXG4jaW5mbyAgIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4OGZhZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4jaW5mbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YWRjNjtcbn1cblxuW2RhdGEtcHJpb3JpdHk9XCJsb3dcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREY3QjY7XG59XG5cbltkYXRhLXByaW9yaXR5PVwibWlkZGxlXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFRTkzO1xufVxuXG5bZGF0YS1wcmlvcml0eT1cImhpZ2hcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMwOUY7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWOzBCQUNzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7O0FBSUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTs7O0lBR0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBZmFjYWQ7XFxuICAgIHNyYzogdXJsKC4vQWZhY2FkLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBZmFjYWQ7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYm9yZGVyOm5vbmU7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EwQ0VEOSA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDE5dnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA2cHggIzAwMDAwMDQwO1xcbn1cXG5cXG4jaG9tZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBtYXJnaW46IDMwcHggO1xcbn1cXG5cXG5oMSB7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuI3Byb2plY3RzID4gLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4OGZhZjtcXG59XFxuXFxuI3Byb2plY3RzID4gZGl2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDM1cHggO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ3YWRjNiA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3RyYXNoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jcHJvamVjdERpYWxvZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2FkYzY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNHB4IDVweDtcXG4gICAgd2lkdGg6IDE4dnc7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB0b3A6IDgwdmggO1xcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5cXG4jcHJvamVjdERpYWxvZyBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3REaWFsb2cgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg4ZmFmO1xcbn1cXG5cXG4jc3VibWl0VGl0bGUge1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuXFxuXFxuXFxuI3Byb2plY3RzID4gZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4OGZhZjtcXG59XFxuXFxuI3Byb2plY3RzID4gZGl2OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2FkYzY7XFxufVxcblxcblxcbmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbnN2ZyB7XFxuICAgIGZpbGw6ICMwODhmYWY7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDNweCA1cHggcmdiKDAgMCAwIC8gMC40KSk7XFxufVxcblxcbiNuZXdQcm9qZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMjBweDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jYWRkIHtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogNXB4O1xcbiAgICBib3R0b206IDBweDtcXG59XFxuXFxuI25ld1Byb2plY3QgPiBzdmc6aG92ZXIsXFxuI2FkZCA+IHN2Zzpob3ZlciB7XFxuICAgIGZpbGw6ICM0N2FkYzY7XFxufVxcblxcbiNuZXdQcm9qZWN0ID4gc3ZnOmFjdGl2ZSxcXG4jYWRkID4gc3ZnOmFjdGl2ZSB7XFxuICAgIGZpbGw6ICMwODhmYWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBncmlkLWF1dG8tcm93czogMzAwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xcbn1cXG5cXG4ubm90ZSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDJmcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA2cHggIzAwMDAwMDQwO1xcbn1cXG5cXG4ubm90ZSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweFxcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuI3N0YXR1cyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuI2RhdGUge1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNkZWxldGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICByaWdodDogMTVweDtcXG4gICAgdG9wOiAxMHB4O1xcbn1cXG5cXG4jZGVsZXRlID4gc3ZnLFxcbiN0cmFzaCA+IHN2ZyxcXG4jc3VibWl0VGl0bGUgPiBzdmcge1xcbiAgICBmaWxsOiByZ2IoNTUsIDU1LCA1NSk7XFxuICAgIGZpbHRlcjogbm9uZTtcXG59XFxuXFxuI2RlbGV0ZSA+IHN2Zzpob3ZlcixcXG4jdHJhc2ggPiBzdmc6aG92ZXIsXFxuI3N1Ym1pdFRpdGxlID4gc3ZnOmhvdmVyIHtcXG4gICAgZmlsbDogcmdiYSg1NSwgNTUsIDU1LCAwLjU5Mik7XFxufVxcblxcbiNlZGl0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgYm90dG9tOiAxNXB4O1xcbiAgICByaWdodDogMTVweDtcXG59XFxuXFxuI2VkaXQgPiBzdmc6aG92ZXIge1xcbiAgICBmaWxsOiAjNDdhZGM2O1xcbn1cXG5cXG4jZWRpdCA+IHN2ZzphY3RpdmUge1xcbiAgICBmaWxsOiAjMDg4ZmFmO1xcbn1cXG5cXG4jbm90ZURpYWxvZyB7XFxuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDI1MHB4KTtcXG4gICAgdG9wOiAxNTBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURGN0I2O1xcbiAgICBwYWRkaW5nOiAzNXB4O1xcbn1cXG5cXG4jbm90ZURpYWxvZyBmb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHJvdy1nYXA6IDVweDtcXG59XFxuXFxuI25vdGVEaWFsb2cgbGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NWQxOGQ7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4jbm90ZURpYWxvZyBpbnB1dCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1ZDE4ZDtcXG59XFxuXFxuI2luZm8gICB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4OGZhZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4jaW5mbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2FkYzY7XFxufVxcblxcbltkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREY3QjY7XFxufVxcblxcbltkYXRhLXByaW9yaXR5PVxcXCJtaWRkbGVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkVFOTM7XFxufVxcblxcbltkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDlGO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGltcG9ydCBlZGl0U1ZHIGZyb20gJy4vc3ZnL3BlbmNpbC1jaXJjbGUuc3ZnJyAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdmdYKCkge1xuICAgIGNvbnN0IHN2Z1ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Z1guc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgIGNvbnN0IHBhdGhYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcbiAgICBwYXRoWC5zZXRBdHRyaWJ1dGUoXCJkXCIsXCJNMTIsMkMxNy41MywyIDIyLDYuNDcgMjIsMTJDMjIsMTcuNTMgMTcuNTMsMjIgMTIsMjJDNi40NywyMiAyLDE3LjUzIDIsMTJDMiw2LjQ3IDYuNDcsMiAxMiwyTTE1LjU5LDdMMTIsMTAuNTlMOC40MSw3TDcsOC40MUwxMC41OSwxMkw3LDE1LjU5TDguNDEsMTdMMTIsMTMuNDFMMTUuNTksMTdMMTcsMTUuNTlMMTMuNDEsMTJMMTcsOC40MUwxNS41OSw3WlwiKTtcbiAgICBzdmdYLmFwcGVuZENoaWxkKHBhdGhYKTtcblxuICAgIHJldHVybiBzdmdYXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z1BlbmNpbCgpIHtcbiAgICBjb25zdCBzdmdQZW5jaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Z1BlbmNpbC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgY29uc3QgcGF0aFBlbmNpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdwYXRoJyk7XG4gICAgcGF0aFBlbmNpbC5zZXRBdHRyaWJ1dGUoXCJkXCIsXCJNMTIsMkM2LjQ3LDIgMiw2LjQ3IDIsMTJDMiwxNy41MyA2LjQ3LDIyIDEyLDIyQzE3LjUzLDIyIDIyLDE3LjUzIDIyLDEyQzIyLDYuNDcgMTcuNTMsMiAxMiwyTTE1LjEsNy4wN0MxNS4yNCw3LjA3IDE1LjM4LDcuMTIgMTUuNSw3LjIzTDE2Ljc3LDguNUMxNyw4LjcyIDE3LDkuMDcgMTYuNzcsOS4yOEwxNS43NywxMC4yOEwxMy43Miw4LjIzTDE0LjcyLDcuMjNDMTQuODIsNy4xMiAxNC45Niw3LjA3IDE1LjEsNy4wN00xMy4xMyw4LjgxTDE1LjE5LDEwLjg3TDkuMTMsMTYuOTNINy4wN1YxNC44N0wxMy4xMyw4LjgxWlwiKTtcbiAgICBzdmdQZW5jaWwuYXBwZW5kQ2hpbGQocGF0aFBlbmNpbCk7XG5cbiAgICByZXR1cm4gc3ZnUGVuY2lsXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z1BsdXMoKSB7XG4gICAgY29uc3Qgc3ZnUGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgc3ZnUGx1cy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgY29uc3QgcGF0aFBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncGF0aCcpO1xuICAgIHBhdGhQbHVzLnNldEF0dHJpYnV0ZShcImRcIixcIk0xOC41IDJINS41QzMuNiAyIDIgMy42IDIgNS41VjE4LjVDMiAyMC40IDMuNiAyMiA1LjUgMjJIMTZMMjIgMTZWNS41QzIyIDMuNiAyMC40IDIgMTguNSAyTTEzIDE2SDExVjEzSDhWMTFIMTFWOEgxM1YxMUgxNlYxM0gxM1YxNk0xNSAyMFYxOC41QzE1IDE2LjYgMTYuNiAxNSAxOC41IDE1SDIwTDE1IDIwWlwiKTtcbiAgICBzdmdQbHVzLmFwcGVuZENoaWxkKHBhdGhQbHVzKTtcblxuICAgIHJldHVybiBzdmdQbHVzXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z0NoZWNrKCkge1xuICAgIGNvbnN0IHN2Z0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmdDaGVjay5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgY29uc3QgcGF0aENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcbiAgICBwYXRoQ2hlY2suc2V0QXR0cmlidXRlKFwiZFwiLFwiTTE3LDE0SDE5VjE3SDIyVjE5SDE5VjIySDE3VjE5SDE0VjE3SDE3VjE0TTEwLDJIMTRBMiwyIDAgMCwxIDE2LDRWNkgyMEEyLDIgMCAwLDEgMjIsOFYxMy41M0MyMC45NCwxMi41OCAxOS41NCwxMiAxOCwxMkE2LDYgMCAwLDAgMTIsMThDMTIsMTkuMDkgMTIuMjksMjAuMTIgMTIuOCwyMUg0QzIuODksMjEgMiwyMC4xIDIsMTlWOEMyLDYuODkgMi44OSw2IDQsNkg4VjRDOCwyLjg5IDguODksMiAxMCwyTTE0LDZWNEgxMFY2SDE0WlwiKTtcbiAgICBzdmdDaGVjay5hcHBlbmRDaGlsZChwYXRoQ2hlY2spO1xuXG4gICAgcmV0dXJuIHN2Z0NoZWNrXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z1RyYXNoKCkge1xuICAgIGNvbnN0IHN2Z1RyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmdUcmFzaC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgY29uc3QgcGF0aFRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcbiAgICBwYXRoVHJhc2guc2V0QXR0cmlidXRlKFwiZFwiLFwiTTE5LDRIMTUuNUwxNC41LDNIOS41TDguNSw0SDVWNkgxOU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlaXCIpO1xuICAgIHN2Z1RyYXNoLmFwcGVuZENoaWxkKHBhdGhUcmFzaCk7XG5cbiAgICByZXR1cm4gc3ZnVHJhc2hcbn1cblxuLy9tYXliZSBub3QgYmVzdCBwcmFjdGljZSBiYyBpdCBjcmVhdGVzICsgYWRkcyBsaXN0ZW5lciArIGNhY2hlcyBmb3IgZGlhbG9nXG4vKiBmdW5jdGlvbiBjcmVhdGVOb3RlQnV0dG9uKCkge1xuICAgIGNvbnN0IG5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBub3RlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdhZGQnKTtcbiAgICBub3RlQnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVN2Z1BsdXMoKSk7XG5cbiAgICBjb25zdCBub3RlRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVEaWFsb2cnKTtcblxuICAgIHJldHVybiB7bm90ZUJ1dHRvbiwgbm90ZURpYWxvZ31cbn0gKi9cblxuZnVuY3Rpb24gY3JlYXRlTm90ZSgpIHtcbiAgICBsZXQgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGVDb250YWluZXIuY2xhc3NOYW1lID0gJ25vdGUnO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdkZWxldGUnKTtcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlU3ZnWCgpKTtcbiAgICAvL2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5vdGVDb250YWluZXIucmVtb3ZlKCkpXG5cbiAgICBsZXQgaGVhZEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMnKTtcbiAgICBoZWFkQXJlYS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZEFyZWEuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCdkZXMnKTtcbiAgICBsZXQgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkdWVkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdkYXRlJylcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdCcpO1xuICAgIGVkaXRCdXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlU3ZnUGVuY2lsKCkpO1xuXG5cblxuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRBcmVhKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZWRhdGUpO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICByZXR1cm4gbm90ZUNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRyYXNoQnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZVN2Z1RyYXNoKCkpO1xuICAgIHRyYXNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndHJhc2gnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmFzaEJ1dHRvbik7XG5cbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lclxufVxuXG5cbmV4cG9ydCB7Y3JlYXRlTm90ZSwgY3JlYXRlUHJvamVjdH0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZU5vdGUgLCBjcmVhdGVQcm9qZWN0fSBmcm9tICcuL2NyZWF0ZURPTSc7XG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBwcm9qZWN0QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcbmNvbnN0IG9wZW5Ob3RlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcbmNvbnN0IG5vdGVEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZURpYWxvZycpO1xubGV0IG5vdGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVGb3JtJyk7XG5jb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REaWFsb2cnKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RGb3JtJyk7XG5jb25zdCBvcGVuUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuXG5sZXQgbWFpbkFycmF5ID0gW107XG5sZXQgaG9tZUFycmF5ID0gW107XG5sZXQgaG9tZVRpdGxlID0gXCJIb21lXCI7XG5wdXNoVG9BcnJheShob21lQXJyYXksIGhvbWVUaXRsZSk7XG5cblxuXG5jbGFzcyBOb3RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gICAgfVxufVxuXG5sZXQgbm90ZUlucyA9IG5ldyBOb3RlKFwiVGFza1wiLCBcIkxvbmcgZGVzY3JpcHRpb24gb2Ygd29yZHNcIiwgXCIyMDI0LTAzLTIxXCIsIFwibWlkZGxlXCIpO1xubGV0IG5ld1Rhc2sgPSBuZXcgTm90ZShcIkNsZWFuaW5nXCIsIFwiSSBoYXZlIHRvIGNsZWFuIHRoZSB3aG9sZSBnb2RhbW4gaG91c2VcIiwgXCIyMDI0LTA0LTEwXCIsIFwibG93XCIpXG5sZXQgdGFzayA9IG5ldyBOb3RlKFwiY29kaW5nXCIsIFwiaSBoYXZlIHRvIGNvZGUgYSBsb3QgYW5kIGl0IGh1ZXJ0c1wiLCBcIjIwMjQtMDMtMzBcIiwgXCJoaWdoXCIpO1xuXG5wdXNoVG9BcnJheShob21lQXJyYXksIG5vdGVJbnMpO1xucHVzaFRvQXJyYXkoaG9tZUFycmF5LCBuZXdUYXNrKTtcbnB1c2hUb0FycmF5KGhvbWVBcnJheSwgdGFzayk7XG5cblxub3BlblByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKSlcbm9wZW5Ob3RlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5vdGVEaWFsb2cuc2hvd01vZGFsKCkpO1xuXG5mdW5jdGlvbiBwdXNoVG9BcnJheShhcnJheSwgb2JqZWN0KSB7XG4gICAgaWYoIWFycmF5LmluY2x1ZGVzKG9iamVjdCkpXG4gICAgYXJyYXkucHVzaChvYmplY3QpXG59XG5cbmZ1bmN0aW9uIGhvbWVDb21wb25lbnQoKSB7XG4gICAgcmVtb3ZlQWxsQ29udGVudCgpO1xuICAgIGFkZE5vdGUoaG9tZUFycmF5KVxuICAgIGRpc3BsYXlOb3RlKGhvbWVBcnJheSk7XG5jb25zb2xlLmxvZyhob21lQXJyYXkpO1xuY29uc29sZS5sb2cobWFpbkFycmF5KTtcbn1cblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpOyBcbiAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qZWN0Rm9ybSk7XG5cbiAgICBhZGRQcm9qZWN0KGZkLmdldCgndGl0bGUnKSk7XG59KVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBbXVxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBgJHt0aXRsZX1gO1xuICAgIG5ld1Byb2plY3QucHVzaChwcm9qZWN0VGl0bGUpO1xuXG4gICAgcHVzaFRvQXJyYXkobWFpbkFycmF5LCBuZXdQcm9qZWN0KTsvLyBmw7xndCBkYXMgbmV1ZSBQcm9qZWt0IGluIGRhcyBtYWluQXJyYXkgaGluenVcbiAgICBkaXNwbGF5UHJvamVjdERPTShtYWluQXJyYXkpOyAvLyB6ZWlndCBkaWUgUHJvamVrdGUgaW4gZGVyIHNpZGViYXIgYW5cbiAgICBhZGROb3RlKG5ld1Byb2plY3QpOyAvL2lzdCBkZXIgTGlzdGVuZXIgZsO8ciBTdWJtaXQgZm9ybVxuICAgIHJlbW92ZUFsbENvbnRlbnQoKTsgLy8gZW50ZmVybnQgZXJzdCBkaWUgTm90aXplbiB2b24gYW5kZXJlbSBQcm9qZWt0XG4gICAgZGlzcGxheU5vdGUobmV3UHJvamVjdCk7IC8vIHplaWd0IGRpZSBOb3RpemVuIGltIGNvbnRlbnQgQmVyZWljaCBhblxuXG5jb25zb2xlLmxvZyhtYWluQXJyYXkpXG5cbiAgICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gYWRkTm90ZShhcnJheSkge1xuXG5sZXQgbmV3Tm90ZUZvcm0gPSBub3RlRm9ybS5jbG9uZU5vZGUodHJ1ZSk7XG5ub3RlRm9ybS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb3RlRm9ybSxub3RlRm9ybSk7XG5ub3RlRm9ybSA9IG5ld05vdGVGb3JtO1xuICAgIFxuXG4gICAgbm90ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShub3RlRm9ybSk7XG5cbiAgICAgICAgbGV0IG5vdGUgPSBuZXcgTm90ZShmZC5nZXQoJ3Rhc2snKSwgZmQuZ2V0KCdkZXNjcmlwdGlvbicpLCBmZC5nZXQoJ2R1ZWRhdGUnKSwgZmQuZ2V0KCdwcmlvcml0eScpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgcHVzaFRvQXJyYXkoYXJyYXksIG5vdGUpO1xuICAgICAgICBkaXNwbGF5Tm90ZShhcnJheSk7XG4gICAgICAgIG5vdGVEaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgbm90ZUZvcm0ucmVzZXQoKTtcbiAgICBjb25zb2xlLmxvZyhhcnJheSlcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGNhY2hlUHJvamVjdEVsZW1lbnQoKSB7XG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMgPiBkaXY6bGFzdC1jaGlsZCcpO1xuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMgPiBkaXY6bGFzdC1jaGlsZCBwJyk7XG4gICAgbGV0IHRyYXNoUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cyA+IGRpdjpsYXN0LWNoaWxkICN0cmFzaCcpO1xuXG4gICAgcmV0dXJuIHtwcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0VGl0bGUsIHRyYXNoUHJvamVjdH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RET00oYXJyYXkpIHtcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHMgcCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaXNDcmVhdGVkID0gQXJyYXkuZnJvbShhbGxQcm9qZWN0cykuc29tZSgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnRleHRDb250ZW50ID09IGFycmF5W2ldWzBdKTtcblxuICAgICAgICBpZighaXNDcmVhdGVkKSB7XG4gICAgICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QoKSk7XG4gICAgICAgICAgICBjYWNoZVByb2plY3RFbGVtZW50KCkucHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYXJyYXlbaV1bMF07XG5cbiAgICAgICAgICAgIGxldCBzdWJBcnJheSA9IGFycmF5W2ldXG5cbiAgICAgICAgICAgIGNhY2hlUHJvamVjdEVsZW1lbnQoKS5wcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgYWRkTm90ZShzdWJBcnJheSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5vdGUoc3ViQXJyYXkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0cyA+IGRpdicpO1xuICAgICAgICAgICAgICAgIGFsbEVsZW1lbnRzLmZvckVhY2goKGl0ZW0pPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNhY2hlUHJvamVjdEVsZW1lbnQoKS50cmFzaFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkobWFpbkFycmF5LCBzdWJBcnJheSk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRnJvbURPTShlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gY2FjaGVOb3RlRWxlbWVudHMoKSB7XG4gICAgbGV0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZTpsYXN0LWNoaWxkJyk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGU6bGFzdC1jaGlsZCBoMicpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlOmxhc3QtY2hpbGQgI2RlcycpO1xuICAgIGxldCBkdWVkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGU6bGFzdC1jaGlsZCAjZGF0ZScpO1xuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZTpsYXN0LWNoaWxkICNkZWxldGUnKTtcbiAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlOmxhc3QtY2hpbGQgI2VkaXQnKTtcblxuICAgIHJldHVybiB7bm90ZUNvbnRhaW5lciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBkZWxldGVCdXR0b24sIGVkaXRCdXR0b259O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Tm90ZShhcnJheSkge1xuICAgIGxldCBhbGxOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RlIGgyJyk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgICAgICBsZXQgaXNDcmVhdGVkID0gQXJyYXkuZnJvbShhbGxOb3Rlcykuc29tZSgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnRleHRDb250ZW50ID09IGFycmF5W2ldLnRpdGxlKVxuICAgICAgICBcbiAgICAgICAgaWYoIWlzQ3JlYXRlZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhcnJheVtpXS5pbmRleCA9IGk7IC8vIGvDtm5udGUgYXVjaCBiZWltIHB1c2hlbiBoaW56dWdlZsO8Z3Qgd2VyZGVuXG5cbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZSgpKTtcbiAgICAgICAgICAgIGNhY2hlTm90ZUVsZW1lbnRzKCkudGl0bGUudGV4dENvbnRlbnQgPSBhcnJheVtpXS50aXRsZTtcbiAgICAgICAgICAgIGNhY2hlTm90ZUVsZW1lbnRzKCkuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBhcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNhY2hlTm90ZUVsZW1lbnRzKCkuZHVlZGF0ZS50ZXh0Q29udGVudCA9IGFycmF5W2ldLmR1ZWRhdGU7XG4gICAgICAgICAgICBjYWNoZU5vdGVFbGVtZW50cygpLm5vdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5JywgYXJyYXlbaV0ucHJpb3JpdHkpIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgbGV0IHBhc3NBcnJheSA9IGFycmF5O1xuICAgICAgICAgICBsZXQgcGFzc09iamVjdCA9IGFycmF5W2ldXG5cbiAgICAgICAgICAgIGNhY2hlTm90ZUVsZW1lbnRzKCkuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkocGFzc0FycmF5LCBwYXNzT2JqZWN0KTtcbiAgICAgICAgICAgICAgICByZW1vdmVGcm9tRE9NKGUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY2FjaGVOb3RlRWxlbWVudHMoKS5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0Tm90ZShhcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHBhc3NBcnJheSwgcGFzc09iamVjdCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRnJvbURPTShlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUFycmF5KGFycmF5LCBvYmplY3QpIHtcblxuICAgICAgYXJyYXkuc3BsaWNlKG9iamVjdC5pbmRleCwxKTtcbiAgXG4gICAgICBhcnJheS5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgaWYoaXRlbS5pbmRleCA+IG9iamVjdC5pbmRleCkgXG4gICAgICAgIGl0ZW0uaW5kZXggLT0gMTtcbiAgICAgIH0pXG5jb25zb2xlLmxvZyhhcnJheSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21ET00oZSkge1xuICAgIGxldCBidXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgbGV0IHBhcmVudCA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgIHBhcmVudC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ29udGVudCgpIHtcbiAgICBsZXQgYWxsRWxlbWVudHMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RlJyk7XG4gICAgYWxsRWxlbWVudHMuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5yZW1vdmUoKSk7XG59XG5cblxuZnVuY3Rpb24gZWRpdE5vdGUob2JqZWN0KSB7XG5cbiAgICBsZXQgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKTtcbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlZGF0ZScpO1xuICAgIGxldCBsb3dJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3cnKTtcbiAgICBsZXQgbWlkZGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkZGxlJyk7XG4gICAgbGV0IGhpZ2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWdoJyk7XG5cbiAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9iamVjdC50aXRsZSk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IG9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9iamVjdC5kdWVkYXRlKTtcbiAgICBzd2l0Y2gob2JqZWN0LnByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UoJ2xvdycpOiBsb3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UoJ21pZGRsZScpOiBtaWRkbGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UoJ2hpZ2gnKTogaGlnaElucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgbm90ZURpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gaG9tZUNvbXBvbmVudCgpKTtcbmhvbWVDb21wb25lbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=