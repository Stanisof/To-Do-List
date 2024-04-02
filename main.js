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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAAwC;AAC5C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,0BAA0B;IAC1B,eAAe;IACf,WAAW;IACX,aAAa;IACb,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,WAAW;IACX,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,UAAU;IACV;0BACsB;AAC1B;;;AAGA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;;AAGA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,iDAAiD;AACrD;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,UAAU;IACV,WAAW;AACf;;AAEA;;IAEI,aAAa;AACjB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,qBAAqB;IACrB,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,SAAS;AACb;;AAEA;;;IAGI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;;;IAGI,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["@font-face {\n    font-family: Afacad;\n    src: url(./Afacad-VariableFont_wght.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: Afacad;\n    font-size: 28px;\n    border:none;\n}\n\n#sidebar {\n    background-color: #A0CED9 ;\n    position: fixed;\n    width: 19vw;\n    height: 100vh;\n    padding: 5px;\n    box-shadow: 5px 0px 6px #00000040;\n}\n\n#home {\n    background-color: transparent;\n    font-weight: bold;\n    font-size: 50px;\n    margin: 30px ;\n}\n\nh1 {\n    padding-left: 25px;\n    margin-bottom: 15px;\n}\n\n#projects > div {\n    position: relative;\n    padding: 10px 35px ;\n    margin-bottom: 5px;\n    background-color:#47adc6 ;\n    border-radius: 8px;\n}\n\n#trash {\n    position: absolute;\n    right: 10px;\n    top: 8px;\n    width: 40px;\n    z-index: 2;\n}\n\n#projectDialog {\n    background-color: #47adc6;\n    border-radius: 8px;\n    padding: 4px 5px;\n    width: 18vw;\n    height: 60px;\n    left: 5px;\n    top: 80vh ;\n    /* display: grid;\n    align-items: center; */\n}\n\n\n#projectDialog form {\n    display: flex;\n    align-items: center;\n}\n\n#projectDialog input {\n    background-color: #088faf;\n}\n\n#submitTitle {\n    width: 40px;\n}\n\n\n#projects > div:hover {\n    background-color: #088faf;\n}\n\n#projects > div:active {\n    background-color: #47adc6;\n}\n\nbutton {\n    width: 100px;\n    background-color: transparent;\n}\n\nsvg {\n    fill: #088faf;\n    filter: drop-shadow(1px 3px 5px rgb(0 0 0 / 0.4));\n}\n\n#newProject {\n    position: absolute;\n    right: 20px;\n    bottom: 20px;\n}\n\n#add {\n    z-index: 2;\n    position: fixed;\n    right: 5px;\n    bottom: 0px;\n}\n\n#newProject > svg:hover,\n#add > svg:hover {\n    fill: #47adc6;\n}\n\n#newProject > svg:active,\n#add > svg:active {\n    fill: #088faf;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-auto-rows: 300px;\n    column-gap: 20px;\n    padding: 20px;\n    row-gap: 20px;\n    margin-left: 20vw;\n}\n\n.note {\n    padding: 15px;\n    position: relative;\n    display: grid;\n    grid-template-rows: 45px 2fr;\n    box-shadow: 5px 5px 6px #00000040;\n}\n\n.note > div {\n    display: flex;\n    gap: 20px\n}\n\nh2 {\n    font-size: 32px;\n}\n\n#status {\n    width: 20px;\n}\n\np {\n    font-size: 24px;\n    align-self: start;\n}\n\n#date {\n    align-self: end;\n    font-size: 18px;\n    text-decoration: underline;\n}\n\n#delete {\n    position: absolute;\n    width: 30px;\n    right: 15px;\n    top: 10px;\n}\n\n#delete > svg,\n#trash > svg,\n#submitTitle > svg {\n    fill: rgb(55, 55, 55);\n    filter: none;\n}\n\n#delete > svg:hover,\n#trash > svg:hover,\n#submitTitle > svg:hover {\n    fill: rgba(55, 55, 55, 0.592);\n}\n\n#edit {\n    position: absolute;\n    width: 75px;\n    bottom: 15px;\n    right: 15px;\n}\n\n#edit > svg:hover {\n    fill: #47adc6;\n}\n\n#edit > svg:active {\n    fill: #088faf;\n}\n\n#noteDialog {\n    left: calc(50vw - 250px);\n    top: 150px;\n    width: 500px;\n    height: 500px;\n    background-color: #ADF7B6;\n    padding: 35px;\n}\n\n#noteDialog form {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100%;\n    row-gap: 5px;\n}\n\n#noteDialog label {\n    grid-column: 1;\n    align-self: center;\n}\n\n#description {\n    grid-column: 1 / 4;\n    background-color: #85d18d;\n}\n\nfieldset {\n    grid-column: 1 / 4;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n#noteDialog input {\n    grid-column: 2 / 4;\n    background-color: #85d18d;\n}\n\n#info   {\n    grid-column: 2 / 4;\n    background-color: #088faf;\n    font-weight: bold;\n    color: white;\n    border-radius: 8px;\n    padding: 3px 5px;\n    justify-self: end;\n    width: 200px;\n}\n\n#info:hover {\n    background-color: #47adc6;\n}\n\n[data-priority=\"low\"] {\n    background-color: #ADF7B6;\n}\n\n[data-priority=\"middle\"] {\n    background-color: #FFEE93;\n}\n\n[data-priority=\"high\"] {\n    background-color: #FFC09F;\n}\n\n"],"sourceRoot":""}]);
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
const noteForm = document.getElementById('noteForm');
const projectDialog = document.getElementById('projectDialog');
const projectForm = document.getElementById('projectForm');
const openProjectForm = document.getElementById('newProject');

openProjectForm.addEventListener('click', () => projectDialog.showModal())
openNoteForm.addEventListener('click', () => noteDialog.showModal());



class Note {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.status = false;
    }
}

let projects = [];
let homeArray = [];

let homeTitle = "title";
pushToArray(homeArray, homeTitle)

let noteIns = new Note("Task", "Long description of words", "2024-03-21", "middle");
let newTask = new Note("Cleaning", "I have to clean the whole godamn house", "2024-04-10", "low")
let task = new Note("coding", "i have to code a lot and it huerts", "2024-03-30", "high");

pushToArray(homeArray, noteIns);
pushToArray(homeArray, newTask);
pushToArray(homeArray, task);

function pushToArray(array, object) {
    if(!array.includes(object))
    array.push(object)
}

function homeComponent() {
    displayNote(homeArray);
    addNote(homeArray);
}

/* 
function MAYBEIIFE(projectsArray) {
    projectsArray = projects;
    let newProject = [];
    pushToArray(projectsArray, newProject)

//console.log(homeArray)

    displayNote(projects[0]); // auch kaka weil [0]
//console.log(projects)

    openNoteForm.addEventListener('click', () => noteDialog.showModal());
    //das kann glaube ich auch global- wichtig ist wohin submitted wird

    noteForm.addEventListener('submit', (e) => addNote(e, projects[0]))
} */



function addNote(array) {

let newSubmit = noteForm.cloneNode(true);
noteForm.parentNode.replaceChild(newSubmit, noteForm);
noteForm = newSubmit;
    
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

projectForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    e.stopImmediatePropagation(); 
    const fd = new FormData(projectForm);

    addProject(fd.get('title'))
})

function addProject(title) {
    let newProject = []
    let projectTitle = `${title}`;
    newProject.push(projectTitle);

    pushToArray(projects, newProject);
    displayProjectDOM(projects);
    addNote(newProject);
console.log(projects)
    projectDialog.close();
    projectForm.reset();
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
        let isCreated = Array.from(allProjects).some((instance) => instance == array[i]);

        if(!isCreated) {
            projectBar.appendChild((0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.createProject)());
            cacheProjectElement().projectTitle.textContent = array[i][0];

            cacheProjectElement().projectContainer.addEventListener('click', () => {
                let allNotes = content.querySelectorAll('.note');
                allNotes.forEach((node) => node.remove());
                displayNote(array[i]);
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
    let allNotes = document.querySelectorAll('.note h2')
    
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
      //noteContainer.remove(); --> Ist im DOM Build enthalten
}

function removeFromDOM(e) {
    let button = e.currentTarget;
    let parent = button.parentNode;
    parent.remove();
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

console.log(projects)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUlBQWlEO0FBQzdGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssT0FBTyxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxh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O0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDLGdDQUFnQyxzREFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQWZhY2FkLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IEFmYWNhZDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IEFmYWNhZDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgYm9yZGVyOm5vbmU7XG59XG5cbiNzaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBDRUQ5IDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDE5dnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA2cHggIzAwMDAwMDQwO1xufVxuXG4jaG9tZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbjogMzBweCA7XG59XG5cbmgxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuI3Byb2plY3RzID4gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweCAzNXB4IDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDdhZGM2IDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiN0cmFzaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogOHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHotaW5kZXg6IDI7XG59XG5cbiNwcm9qZWN0RGlhbG9nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdhZGM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHdpZHRoOiAxOHZ3O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiA4MHZoIDtcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG59XG5cblxuI3Byb2plY3REaWFsb2cgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcHJvamVjdERpYWxvZyBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4OGZhZjtcbn1cblxuI3N1Ym1pdFRpdGxlIHtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuXG4jcHJvamVjdHMgPiBkaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODhmYWY7XG59XG5cbiNwcm9qZWN0cyA+IGRpdjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2FkYzY7XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5zdmcge1xuICAgIGZpbGw6ICMwODhmYWY7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggM3B4IDVweCByZ2IoMCAwIDAgLyAwLjQpKTtcbn1cblxuI25ld1Byb2plY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICBib3R0b206IDIwcHg7XG59XG5cbiNhZGQge1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiAwcHg7XG59XG5cbiNuZXdQcm9qZWN0ID4gc3ZnOmhvdmVyLFxuI2FkZCA+IHN2Zzpob3ZlciB7XG4gICAgZmlsbDogIzQ3YWRjNjtcbn1cblxuI25ld1Byb2plY3QgPiBzdmc6YWN0aXZlLFxuI2FkZCA+IHN2ZzphY3RpdmUge1xuICAgIGZpbGw6ICMwODhmYWY7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICBncmlkLWF1dG8tcm93czogMzAwcHg7XG4gICAgY29sdW1uLWdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHJvdy1nYXA6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XG59XG5cbi5ub3RlIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCAyZnI7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA2cHggIzAwMDAwMDQwO1xufVxuXG4ubm90ZSA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHhcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuI3N0YXR1cyB7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbn1cblxuI2RhdGUge1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbiNkZWxldGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzBweDtcbiAgICByaWdodDogMTVweDtcbiAgICB0b3A6IDEwcHg7XG59XG5cbiNkZWxldGUgPiBzdmcsXG4jdHJhc2ggPiBzdmcsXG4jc3VibWl0VGl0bGUgPiBzdmcge1xuICAgIGZpbGw6IHJnYig1NSwgNTUsIDU1KTtcbiAgICBmaWx0ZXI6IG5vbmU7XG59XG5cbiNkZWxldGUgPiBzdmc6aG92ZXIsXG4jdHJhc2ggPiBzdmc6aG92ZXIsXG4jc3VibWl0VGl0bGUgPiBzdmc6aG92ZXIge1xuICAgIGZpbGw6IHJnYmEoNTUsIDU1LCA1NSwgMC41OTIpO1xufVxuXG4jZWRpdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGJvdHRvbTogMTVweDtcbiAgICByaWdodDogMTVweDtcbn1cblxuI2VkaXQgPiBzdmc6aG92ZXIge1xuICAgIGZpbGw6ICM0N2FkYzY7XG59XG5cbiNlZGl0ID4gc3ZnOmFjdGl2ZSB7XG4gICAgZmlsbDogIzA4OGZhZjtcbn1cblxuI25vdGVEaWFsb2cge1xuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDI1MHB4KTtcbiAgICB0b3A6IDE1MHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREY3QjY7XG4gICAgcGFkZGluZzogMzVweDtcbn1cblxuI25vdGVEaWFsb2cgZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHJvdy1nYXA6IDVweDtcbn1cblxuI25vdGVEaWFsb2cgbGFiZWwge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuI2Rlc2NyaXB0aW9uIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1ZDE4ZDtcbn1cblxuZmllbGRzZXQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG59XG5cbiNub3RlRGlhbG9nIGlucHV0IHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1ZDE4ZDtcbn1cblxuI2luZm8gICB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODhmYWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuI2luZm86aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2FkYzY7XG59XG5cbltkYXRhLXByaW9yaXR5PVwibG93XCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURGN0I2O1xufVxuXG5bZGF0YS1wcmlvcml0eT1cIm1pZGRsZVwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRUU5Mztcbn1cblxuW2RhdGEtcHJpb3JpdHk9XCJoaWdoXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDlGO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQXdDO0FBQzVDOztBQUVBO0lBQ0ksU0FBUztJ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QTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IEFmYWNhZDtcXG4gICAgc3JjOiB1cmwoLi9BZmFjYWQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFmYWNhZDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBib3JkZXI6bm9uZTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBDRUQ5IDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTl2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDZweCAjMDAwMDAwNDA7XFxufVxcblxcbiNob21lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIG1hcmdpbjogMzBweCA7XFxufVxcblxcbmgxIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMgPiBkaXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMzVweCA7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDdhZGM2IDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jdHJhc2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbiNwcm9qZWN0RGlhbG9nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YWRjNjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xcbiAgICB3aWR0aDogMTh2dztcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIHRvcDogODB2aCA7XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcblxcbiNwcm9qZWN0RGlhbG9nIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdERpYWxvZyBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODhmYWY7XFxufVxcblxcbiNzdWJtaXRUaXRsZSB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG5cXG4jcHJvamVjdHMgPiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg4ZmFmO1xcbn1cXG5cXG4jcHJvamVjdHMgPiBkaXY6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YWRjNjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuc3ZnIHtcXG4gICAgZmlsbDogIzA4OGZhZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggM3B4IDVweCByZ2IoMCAwIDAgLyAwLjQpKTtcXG59XFxuXFxuI25ld1Byb2plY3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBib3R0b206IDIwcHg7XFxufVxcblxcbiNhZGQge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGJvdHRvbTogMHB4O1xcbn1cXG5cXG4jbmV3UHJvamVjdCA+IHN2Zzpob3ZlcixcXG4jYWRkID4gc3ZnOmhvdmVyIHtcXG4gICAgZmlsbDogIzQ3YWRjNjtcXG59XFxuXFxuI25ld1Byb2plY3QgPiBzdmc6YWN0aXZlLFxcbiNhZGQgPiBzdmc6YWN0aXZlIHtcXG4gICAgZmlsbDogIzA4OGZhZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAzMDBweDtcXG4gICAgY29sdW1uLWdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcm93LWdhcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XFxufVxcblxcbi5ub3RlIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggMmZyO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDZweCAjMDAwMDAwNDA7XFxufVxcblxcbi5ub3RlID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4jc3RhdHVzIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4jZGF0ZSB7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2RlbGV0ZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICB0b3A6IDEwcHg7XFxufVxcblxcbiNkZWxldGUgPiBzdmcsXFxuI3RyYXNoID4gc3ZnLFxcbiNzdWJtaXRUaXRsZSA+IHN2ZyB7XFxuICAgIGZpbGw6IHJnYig1NSwgNTUsIDU1KTtcXG4gICAgZmlsdGVyOiBub25lO1xcbn1cXG5cXG4jZGVsZXRlID4gc3ZnOmhvdmVyLFxcbiN0cmFzaCA+IHN2Zzpob3ZlcixcXG4jc3VibWl0VGl0bGUgPiBzdmc6aG92ZXIge1xcbiAgICBmaWxsOiByZ2JhKDU1LCA1NSwgNTUsIDAuNTkyKTtcXG59XFxuXFxuI2VkaXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBib3R0b206IDE1cHg7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4jZWRpdCA+IHN2Zzpob3ZlciB7XFxuICAgIGZpbGw6ICM0N2FkYzY7XFxufVxcblxcbiNlZGl0ID4gc3ZnOmFjdGl2ZSB7XFxuICAgIGZpbGw6ICMwODhmYWY7XFxufVxcblxcbiNub3RlRGlhbG9nIHtcXG4gICAgbGVmdDogY2FsYyg1MHZ3IC0gMjUwcHgpO1xcbiAgICB0b3A6IDE1MHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREY3QjY7XFxuICAgIHBhZGRpbmc6IDM1cHg7XFxufVxcblxcbiNub3RlRGlhbG9nIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4jbm90ZURpYWxvZyBsYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1ZDE4ZDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxufVxcblxcbiNub3RlRGlhbG9nIGlucHV0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVkMThkO1xcbn1cXG5cXG4jaW5mbyAgIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg4ZmFmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbiNpbmZvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YWRjNjtcXG59XFxuXFxuW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FERjdCNjtcXG59XFxuXFxuW2RhdGEtcHJpb3JpdHk9XFxcIm1pZGRsZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRUU5MztcXG59XFxuXFxuW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMwOUY7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogaW1wb3J0IGVkaXRTVkcgZnJvbSAnLi9zdmcvcGVuY2lsLWNpcmNsZS5zdmcnICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z1goKSB7XG4gICAgY29uc3Qgc3ZnWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgc3ZnWC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgY29uc3QgcGF0aFggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncGF0aCcpO1xuICAgIHBhdGhYLnNldEF0dHJpYnV0ZShcImRcIixcIk0xMiwyQzE3LjUzLDIgMjIsNi40NyAyMiwxMkMyMiwxNy41MyAxNy41MywyMiAxMiwyMkM2LjQ3LDIyIDIsMTcuNTMgMiwxMkMyLDYuNDcgNi40NywyIDEyLDJNMTUuNTksN0wxMiwxMC41OUw4LjQxLDdMNyw4LjQxTDEwLjU5LDEyTDcsMTUuNTlMOC40MSwxN0wxMiwxMy40MUwxNS41OSwxN0wxNywxNS41OUwxMy40MSwxMkwxNyw4LjQxTDE1LjU5LDdaXCIpO1xuICAgIHN2Z1guYXBwZW5kQ2hpbGQocGF0aFgpO1xuXG4gICAgcmV0dXJuIHN2Z1hcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnUGVuY2lsKCkge1xuICAgIGNvbnN0IHN2Z1BlbmNpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgc3ZnUGVuY2lsLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICBjb25zdCBwYXRoUGVuY2lsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcbiAgICBwYXRoUGVuY2lsLnNldEF0dHJpYnV0ZShcImRcIixcIk0xMiwyQzYuNDcsMiAyLDYuNDcgMiwxMkMyLDE3LjUzIDYuNDcsMjIgMTIsMjJDMTcuNTMsMjIgMjIsMTcuNTMgMjIsMTJDMjIsNi40NyAxNy41MywyIDEyLDJNMTUuMSw3LjA3QzE1LjI0LDcuMDcgMTUuMzgsNy4xMiAxNS41LDcuMjNMMTYuNzcsOC41QzE3LDguNzIgMTcsOS4wNyAxNi43Nyw5LjI4TDE1Ljc3LDEwLjI4TDEzLjcyLDguMjNMMTQuNzIsNy4yM0MxNC44Miw3LjEyIDE0Ljk2LDcuMDcgMTUuMSw3LjA3TTEzLjEzLDguODFMMTUuMTksMTAuODdMOS4xMywxNi45M0g3LjA3VjE0Ljg3TDEzLjEzLDguODFaXCIpO1xuICAgIHN2Z1BlbmNpbC5hcHBlbmRDaGlsZChwYXRoUGVuY2lsKTtcblxuICAgIHJldHVybiBzdmdQZW5jaWxcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnUGx1cygpIHtcbiAgICBjb25zdCBzdmdQbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmdQbHVzLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICBjb25zdCBwYXRoUGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdwYXRoJyk7XG4gICAgcGF0aFBsdXMuc2V0QXR0cmlidXRlKFwiZFwiLFwiTTE4LjUgMkg1LjVDMy42IDIgMiAzLjYgMiA1LjVWMTguNUMyIDIwLjQgMy42IDIyIDUuNSAyMkgxNkwyMiAxNlY1LjVDMjIgMy42IDIwLjQgMiAxOC41IDJNMTMgMTZIMTFWMTNIOFYxMUgxMVY4SDEzVjExSDE2VjEzSDEzVjE2TTE1IDIwVjE4LjVDMTUgMTYuNiAxNi42IDE1IDE4LjUgMTVIMjBMMTUgMjBaXCIpO1xuICAgIHN2Z1BsdXMuYXBwZW5kQ2hpbGQocGF0aFBsdXMpO1xuXG4gICAgcmV0dXJuIHN2Z1BsdXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnQ2hlY2soKSB7XG4gICAgY29uc3Qgc3ZnQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Z0NoZWNrLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICBjb25zdCBwYXRoQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncGF0aCcpO1xuICAgIHBhdGhDaGVjay5zZXRBdHRyaWJ1dGUoXCJkXCIsXCJNMTcsMTRIMTlWMTdIMjJWMTlIMTlWMjJIMTdWMTlIMTRWMTdIMTdWMTRNMTAsMkgxNEEyLDIgMCAwLDEgMTYsNFY2SDIwQTIsMiAwIDAsMSAyMiw4VjEzLjUzQzIwLjk0LDEyLjU4IDE5LjU0LDEyIDE4LDEyQTYsNiAwIDAsMCAxMiwxOEMxMiwxOS4wOSAxMi4yOSwyMC4xMiAxMi44LDIxSDRDMi44OSwyMSAyLDIwLjEgMiwxOVY4QzIsNi44OSAyLjg5LDYgNCw2SDhWNEM4LDIuODkgOC44OSwyIDEwLDJNMTQsNlY0SDEwVjZIMTRaXCIpO1xuICAgIHN2Z0NoZWNrLmFwcGVuZENoaWxkKHBhdGhDaGVjayk7XG5cbiAgICByZXR1cm4gc3ZnQ2hlY2tcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnVHJhc2goKSB7XG4gICAgY29uc3Qgc3ZnVHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Z1RyYXNoLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICBjb25zdCBwYXRoVHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncGF0aCcpO1xuICAgIHBhdGhUcmFzaC5zZXRBdHRyaWJ1dGUoXCJkXCIsXCJNMTksNEgxNS41TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOVpcIik7XG4gICAgc3ZnVHJhc2guYXBwZW5kQ2hpbGQocGF0aFRyYXNoKTtcblxuICAgIHJldHVybiBzdmdUcmFzaFxufVxuXG4vL21heWJlIG5vdCBiZXN0IHByYWN0aWNlIGJjIGl0IGNyZWF0ZXMgKyBhZGRzIGxpc3RlbmVyICsgY2FjaGVzIGZvciBkaWFsb2dcbi8qIGZ1bmN0aW9uIGNyZWF0ZU5vdGVCdXR0b24oKSB7XG4gICAgY29uc3Qgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5vdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ2FkZCcpO1xuICAgIG5vdGVCdXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlU3ZnUGx1cygpKTtcblxuICAgIGNvbnN0IG5vdGVEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZURpYWxvZycpO1xuXG4gICAgcmV0dXJuIHtub3RlQnV0dG9uLCBub3RlRGlhbG9nfVxufSAqL1xuXG5mdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xuICAgIGxldCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbm90ZSc7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ2RlbGV0ZScpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVTdmdYKCkpO1xuICAgIC8vZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbm90ZUNvbnRhaW5lci5yZW1vdmUoKSlcblxuICAgIGxldCBoZWFkQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXR1cycpO1xuICAgIGhlYWRBcmVhLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkQXJlYS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ2RlcycpO1xuICAgIGxldCBkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGR1ZWRhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ2RhdGUnKVxuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0Jyk7XG4gICAgZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVTdmdQZW5jaWwoKSk7XG5cblxuXG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZEFyZWEpO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlZGF0ZSk7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIHJldHVybiBub3RlQ29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRyYXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdHJhc2hCdXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlU3ZnVHJhc2goKSk7XG4gICAgdHJhc2hCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICd0cmFzaCcpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyXG59XG5cblxuZXhwb3J0IHtjcmVhdGVOb3RlLCBjcmVhdGVQcm9qZWN0fSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlTm90ZSAsIGNyZWF0ZVByb2plY3R9IGZyb20gJy4vY3JlYXRlRE9NJztcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IHByb2plY3RCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuY29uc3Qgb3Blbk5vdGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuY29uc3Qgbm90ZURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlRGlhbG9nJyk7XG5jb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlRm9ybScpO1xuY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGlhbG9nJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Rm9ybScpO1xuY29uc3Qgb3BlblByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcblxub3BlblByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKSlcbm9wZW5Ob3RlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5vdGVEaWFsb2cuc2hvd01vZGFsKCkpO1xuXG5cblxuY2xhc3MgTm90ZSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVkYXRlID0gZHVlZGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICAgIH1cbn1cblxubGV0IHByb2plY3RzID0gW107XG5sZXQgaG9tZUFycmF5ID0gW107XG5cbmxldCBob21lVGl0bGUgPSBcInRpdGxlXCI7XG5wdXNoVG9BcnJheShob21lQXJyYXksIGhvbWVUaXRsZSlcblxubGV0IG5vdGVJbnMgPSBuZXcgTm90ZShcIlRhc2tcIiwgXCJMb25nIGRlc2NyaXB0aW9uIG9mIHdvcmRzXCIsIFwiMjAyNC0wMy0yMVwiLCBcIm1pZGRsZVwiKTtcbmxldCBuZXdUYXNrID0gbmV3IE5vdGUoXCJDbGVhbmluZ1wiLCBcIkkgaGF2ZSB0byBjbGVhbiB0aGUgd2hvbGUgZ29kYW1uIGhvdXNlXCIsIFwiMjAyNC0wNC0xMFwiLCBcImxvd1wiKVxubGV0IHRhc2sgPSBuZXcgTm90ZShcImNvZGluZ1wiLCBcImkgaGF2ZSB0byBjb2RlIGEgbG90IGFuZCBpdCBodWVydHNcIiwgXCIyMDI0LTAzLTMwXCIsIFwiaGlnaFwiKTtcblxucHVzaFRvQXJyYXkoaG9tZUFycmF5LCBub3RlSW5zKTtcbnB1c2hUb0FycmF5KGhvbWVBcnJheSwgbmV3VGFzayk7XG5wdXNoVG9BcnJheShob21lQXJyYXksIHRhc2spO1xuXG5mdW5jdGlvbiBwdXNoVG9BcnJheShhcnJheSwgb2JqZWN0KSB7XG4gICAgaWYoIWFycmF5LmluY2x1ZGVzKG9iamVjdCkpXG4gICAgYXJyYXkucHVzaChvYmplY3QpXG59XG5cbmZ1bmN0aW9uIGhvbWVDb21wb25lbnQoKSB7XG4gICAgZGlzcGxheU5vdGUoaG9tZUFycmF5KTtcbiAgICBhZGROb3RlKGhvbWVBcnJheSk7XG59XG5cbi8qIFxuZnVuY3Rpb24gTUFZQkVJSUZFKHByb2plY3RzQXJyYXkpIHtcbiAgICBwcm9qZWN0c0FycmF5ID0gcHJvamVjdHM7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBbXTtcbiAgICBwdXNoVG9BcnJheShwcm9qZWN0c0FycmF5LCBuZXdQcm9qZWN0KVxuXG4vL2NvbnNvbGUubG9nKGhvbWVBcnJheSlcblxuICAgIGRpc3BsYXlOb3RlKHByb2plY3RzWzBdKTsgLy8gYXVjaCBrYWthIHdlaWwgWzBdXG4vL2NvbnNvbGUubG9nKHByb2plY3RzKVxuXG4gICAgb3Blbk5vdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbm90ZURpYWxvZy5zaG93TW9kYWwoKSk7XG4gICAgLy9kYXMga2FubiBnbGF1YmUgaWNoIGF1Y2ggZ2xvYmFsLSB3aWNodGlnIGlzdCB3b2hpbiBzdWJtaXR0ZWQgd2lyZFxuXG4gICAgbm90ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGFkZE5vdGUoZSwgcHJvamVjdHNbMF0pKVxufSAqL1xuXG5cblxuZnVuY3Rpb24gYWRkTm90ZShhcnJheSkge1xuXG5sZXQgbmV3U3VibWl0ID0gbm90ZUZvcm0uY2xvbmVOb2RlKHRydWUpO1xubm90ZUZvcm0ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U3VibWl0LCBub3RlRm9ybSk7XG5ub3RlRm9ybSA9IG5ld1N1Ym1pdDtcbiAgICBcbiAgICBub3RlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKG5vdGVGb3JtKTtcblxuICAgICAgICBsZXQgbm90ZSA9IG5ldyBOb3RlKGZkLmdldCgndGFzaycpLCBmZC5nZXQoJ2Rlc2NyaXB0aW9uJyksIGZkLmdldCgnZHVlZGF0ZScpLCBmZC5nZXQoJ3ByaW9yaXR5JykpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBwdXNoVG9BcnJheShhcnJheSwgbm90ZSk7XG4gICAgICAgIGRpc3BsYXlOb3RlKGFycmF5KTtcbiAgICAgICAgbm90ZURpYWxvZy5jbG9zZSgpO1xuICAgICAgICBub3RlRm9ybS5yZXNldCgpO1xuICAgIGNvbnNvbGUubG9nKGFycmF5KVxuICAgIH0pXG59XG5cbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTsgXG4gICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvamVjdEZvcm0pO1xuXG4gICAgYWRkUHJvamVjdChmZC5nZXQoJ3RpdGxlJykpXG59KVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBbXVxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBgJHt0aXRsZX1gO1xuICAgIG5ld1Byb2plY3QucHVzaChwcm9qZWN0VGl0bGUpO1xuXG4gICAgcHVzaFRvQXJyYXkocHJvamVjdHMsIG5ld1Byb2plY3QpO1xuICAgIGRpc3BsYXlQcm9qZWN0RE9NKHByb2plY3RzKTtcbiAgICBhZGROb3RlKG5ld1Byb2plY3QpO1xuY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xuICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNhY2hlUHJvamVjdEVsZW1lbnQoKSB7XG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMgPiBkaXY6bGFzdC1jaGlsZCcpO1xuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMgPiBkaXY6bGFzdC1jaGlsZCBwJyk7XG4gICAgbGV0IHRyYXNoUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cyA+IGRpdjpsYXN0LWNoaWxkICN0cmFzaCcpO1xuXG4gICAgcmV0dXJuIHtwcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0VGl0bGUsIHRyYXNoUHJvamVjdH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RET00oYXJyYXkpIHtcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHMgcCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaXNDcmVhdGVkID0gQXJyYXkuZnJvbShhbGxQcm9qZWN0cykuc29tZSgoaW5zdGFuY2UpID0+IGluc3RhbmNlID09IGFycmF5W2ldKTtcblxuICAgICAgICBpZighaXNDcmVhdGVkKSB7XG4gICAgICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QoKSk7XG4gICAgICAgICAgICBjYWNoZVByb2plY3RFbGVtZW50KCkucHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYXJyYXlbaV1bMF07XG5cbiAgICAgICAgICAgIGNhY2hlUHJvamVjdEVsZW1lbnQoKS5wcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhbGxOb3RlcyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGUnKTtcbiAgICAgICAgICAgICAgICBhbGxOb3Rlcy5mb3JFYWNoKChub2RlKSA9PiBub2RlLnJlbW92ZSgpKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Tm90ZShhcnJheVtpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGNhY2hlTm90ZUVsZW1lbnRzKCkge1xuICAgIGxldCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGU6bGFzdC1jaGlsZCcpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlOmxhc3QtY2hpbGQgaDInKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZTpsYXN0LWNoaWxkICNkZXMnKTtcbiAgICBsZXQgZHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlOmxhc3QtY2hpbGQgI2RhdGUnKTtcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGU6bGFzdC1jaGlsZCAjZGVsZXRlJyk7XG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZTpsYXN0LWNoaWxkICNlZGl0Jyk7XG5cbiAgICByZXR1cm4ge25vdGVDb250YWluZXIsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgZGVsZXRlQnV0dG9uLCBlZGl0QnV0dG9ufTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5vdGUoYXJyYXkpIHtcbiAgICBsZXQgYWxsTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90ZSBoMicpXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgICAgICBsZXQgaXNDcmVhdGVkID0gQXJyYXkuZnJvbShhbGxOb3Rlcykuc29tZSgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnRleHRDb250ZW50ID09IGFycmF5W2ldLnRpdGxlKVxuICAgICAgICBcbiAgICAgICAgaWYoIWlzQ3JlYXRlZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhcnJheVtpXS5pbmRleCA9IGk7IC8vIGvDtm5udGUgYXVjaCBiZWltIHB1c2hlbiBoaW56dWdlZsO8Z3Qgd2VyZGVuXG5cbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZSgpKTtcbiAgICAgICAgICAgIGNhY2hlTm90ZUVsZW1lbnRzKCkudGl0bGUudGV4dENvbnRlbnQgPSBhcnJheVtpXS50aXRsZTtcbiAgICAgICAgICAgIGNhY2hlTm90ZUVsZW1lbnRzKCkuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBhcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNhY2hlTm90ZUVsZW1lbnRzKCkuZHVlZGF0ZS50ZXh0Q29udGVudCA9IGFycmF5W2ldLmR1ZWRhdGU7XG4gICAgICAgICAgICBjYWNoZU5vdGVFbGVtZW50cygpLm5vdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5JywgYXJyYXlbaV0ucHJpb3JpdHkpIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgbGV0IHBhc3NBcnJheSA9IGFycmF5O1xuICAgICAgICAgICBsZXQgcGFzc09iamVjdCA9IGFycmF5W2ldXG5cbiAgICAgICAgICAgIGNhY2hlTm90ZUVsZW1lbnRzKCkuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkocGFzc0FycmF5LCBwYXNzT2JqZWN0KTtcbiAgICAgICAgICAgICAgICByZW1vdmVGcm9tRE9NKGUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY2FjaGVOb3RlRWxlbWVudHMoKS5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0Tm90ZShhcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHBhc3NBcnJheSwgcGFzc09iamVjdCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRnJvbURPTShlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUFycmF5KGFycmF5LCBvYmplY3QpIHtcblxuICAgICAgYXJyYXkuc3BsaWNlKG9iamVjdC5pbmRleCwxKTtcbiAgXG4gICAgICBhcnJheS5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgaWYoaXRlbS5pbmRleCA+IG9iamVjdC5pbmRleCkgXG4gICAgICAgIGl0ZW0uaW5kZXggLT0gMTtcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAvL25vdGVDb250YWluZXIucmVtb3ZlKCk7IC0tPiBJc3QgaW0gRE9NIEJ1aWxkIGVudGhhbHRlblxufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tRE9NKGUpIHtcbiAgICBsZXQgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGxldCBwYXJlbnQgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICBwYXJlbnQucmVtb3ZlKCk7XG59XG5cblxuZnVuY3Rpb24gZWRpdE5vdGUob2JqZWN0KSB7XG5cbiAgICBsZXQgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKTtcbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlZGF0ZScpO1xuICAgIGxldCBsb3dJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3cnKTtcbiAgICBsZXQgbWlkZGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkZGxlJyk7XG4gICAgbGV0IGhpZ2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWdoJyk7XG5cbiAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9iamVjdC50aXRsZSk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IG9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9iamVjdC5kdWVkYXRlKTtcbiAgICBzd2l0Y2gob2JqZWN0LnByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UoJ2xvdycpOiBsb3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UoJ21pZGRsZScpOiBtaWRkbGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UoJ2hpZ2gnKTogaGlnaElucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgbm90ZURpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuXG5cblxuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBob21lQ29tcG9uZW50KCkpO1xuXG5cbmhvbWVDb21wb25lbnQoKTtcblxuY29uc29sZS5sb2cocHJvamVjdHMpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9