webpackJsonp([13],{

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1550)
/* template */
var __vue_template__ = __webpack_require__(1551)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/system/tutorials/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9fe9182e", Component.options)
  } else {
    hotAPI.reload("data-v-9fe9182e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1091)
  __webpack_require__(1093)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1095)
/* template */
var __vue_template__ = __webpack_require__(1097)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/select/VueSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b645229c", Component.options)
  } else {
    hotAPI.reload("data-v-b645229c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1092);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("670c1054", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b645229c\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css", function() {
     var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b645229c\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{-webkit-animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation:a 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__spinner:after{-webkit-animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation:a 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px;vertical-align:top\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@-webkit-keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}\n@keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}", "", {"version":3,"sources":["/Users/adi/code/ensov2/node_modules/vue-multiselect/dist/vue-multiselect.min.css"],"names":[],"mappings":"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","file":"vue-multiselect.min.css","sourcesContent":["fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite}.multiselect__spinner:after{animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{opacity:.6}.multiselect--active{z-index:1}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:6px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled{background:#ededed;pointer-events:none}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{cursor:text;pointer-events:none}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@keyframes a{0%{transform:rotate(0)}to{transform:rotate(2turn)}}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1094);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("746290b2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b645229c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./VueSelect.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b645229c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./VueSelect.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.vue-select .multiselect {\n  min-height: 36px;\n  max-height: 36px;\n}\ndiv.vue-select .multiselect__tags {\n  min-height: 36px;\n  max-height: 36px;\n  padding: 4px 40px 0 4px;\n  border-radius: 3px;\n}\ndiv.vue-select .multiselect__tags:hover {\n    border-color: #b5b5b5;\n}\n.multiselect.has-error .multiselect__tags {\n  border: 1px solid #e50800;\n}\ndiv.vue-select .multiselect__tag {\n  border-radius: 3px;\n  margin-bottom: 4px;\n}\ndiv.vue-select .multiselect__tag-icon {\n  border-radius: 3px;\n  line-height: 24px;\n}\ndiv.vue-select input[type=text].multiselect__input {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin-bottom: 4px;\n  margin-top: 2px;\n  border-bottom: none;\n}\ndiv.vue-select .multiselect__content-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\ndiv.vue-select .multiselect__option,\ndiv.vue-select .multiselect__option:after {\n  line-height: 16px;\n  padding: 10px;\n  min-height: 36px;\n}\ndiv.vue-select .multiselect__select {\n  width: 34px;\n  height: 34px;\n}\ndiv.vue-select .multiselect__select:before {\n  top: 70%;\n}\ndiv.vue-select .multiselect__spinner {\n  height: 34px;\n  width: 34px;\n}\nspan.multiselect__tag {\n  padding: 5px 26px 5px 10px;\n}\n.multiselect, .multiselect__input, .multiselect__single {\n  font-size: 16px;\n}\n.multiselect__clear {\n  position: absolute;\n  top: 7px;\n  right: 30px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1;\n}\n.multiselect__clear:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.multiselect__clear:after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.multiselect__clear:after, .multiselect__clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/select/VueSelect.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;EACjB,iBAAiB;CAAE;AAErB;EACE,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,mBAAmB;CAAE;AACrB;IACE,sBAAsB;CAAE;AAE5B;EACE,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,yBAAiB;UAAjB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;CAAE;AAExB;EACE,+BAA+B;EAC/B,gCAAgC;CAAE;AAEpC;;EAEE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;CAAE;AAErB;EACE,YAAY;EACZ,aAAa;CAAE;AAEjB;EACE,SAAS;CAAE;AAEb;EACE,aAAa;EACb,YAAY;CAAE;AAEhB;EACE,2BAA2B;CAAE;AAE/B;EACE,gBAAgB;CAAE;AAEpB;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,WAAW;CAAE;AAEf;EACE,iCAAyB;UAAzB,yBAAyB;CAAE;AAE7B;EACE,kCAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,YAAY;CAAE","file":"VueSelect.vue","sourcesContent":[".vue-select .multiselect {\n  min-height: 36px;\n  max-height: 36px; }\n\ndiv.vue-select .multiselect__tags {\n  min-height: 36px;\n  max-height: 36px;\n  padding: 4px 40px 0 4px;\n  border-radius: 3px; }\n  div.vue-select .multiselect__tags:hover {\n    border-color: #b5b5b5; }\n\n.multiselect.has-error .multiselect__tags {\n  border: 1px solid #e50800; }\n\ndiv.vue-select .multiselect__tag {\n  border-radius: 3px;\n  margin-bottom: 4px; }\n\ndiv.vue-select .multiselect__tag-icon {\n  border-radius: 3px;\n  line-height: 24px; }\n\ndiv.vue-select input[type=text].multiselect__input {\n  box-shadow: none;\n  margin-bottom: 4px;\n  margin-top: 2px;\n  border-bottom: none; }\n\ndiv.vue-select .multiselect__content-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\ndiv.vue-select .multiselect__option,\ndiv.vue-select .multiselect__option:after {\n  line-height: 16px;\n  padding: 10px;\n  min-height: 36px; }\n\ndiv.vue-select .multiselect__select {\n  width: 34px;\n  height: 34px; }\n\ndiv.vue-select .multiselect__select:before {\n  top: 70%; }\n\ndiv.vue-select .multiselect__spinner {\n  height: 34px;\n  width: 34px; }\n\nspan.multiselect__tag {\n  padding: 5px 26px 5px 10px; }\n\n.multiselect, .multiselect__input, .multiselect__single {\n  font-size: 16px; }\n\n.multiselect__clear {\n  position: absolute;\n  top: 7px;\n  right: 30px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1; }\n\n.multiselect__clear:before {\n  transform: rotate(45deg); }\n\n.multiselect__clear:after {\n  transform: rotate(-45deg); }\n\n.multiselect__clear:after, .multiselect__clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect__ = __webpack_require__(1096);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_multiselect__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Multiselect: __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default.a },

    props: {
        value: {
            default: null
        },
        source: {
            type: String,
            default: null
        },
        options: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        keyMap: {
            type: String,
            default: 'number'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        taggable: {
            type: Boolean,
            default: false
        },
        hasError: {
            type: Boolean,
            default: false
        },
        params: {
            type: Object,
            default: null
        },
        pivotParams: {
            type: Object,
            default: null
        },
        customParams: {
            type: Object,
            default: null
        },
        placeholder: {
            type: String,
            default: 'Please choose'
        },
        labels: {
            type: Object,
            default: function _default() {
                return {
                    selected: 'Selected',
                    select: 'Press enter to select',
                    deselect: 'Press enter to deselect',
                    noResult: 'No Elements Found'
                };
            }
        }
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('locale', ['__']), {
        isServerSide: function isServerSide() {
            return this.source !== null;
        },
        hasSelection: function hasSelection() {
            return this.multiple && this.value.length || !this.multiple && this.value !== null;
        },
        optionKeys: function optionKeys() {
            return this.keyMap === 'number' ? Object.keys(this.optionList).map(Number) : Object.keys(this.optionList);
        }
    }),

    filters: {
        highlight: function highlight(option, query) {
            if (!option) {
                return option;
            }

            query.split(' ').filter(function (word) {
                return word.length;
            }).forEach(function (word) {
                option = option.replace(new RegExp('(' + word + ')', 'gi'), '<b>$1</b>');
            });

            return option;
        }
    },

    watch: {
        options: {
            handler: function handler() {
                this.optionList = this.options;
            },

            deep: true
        },
        params: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        },
        pivotParams: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        },
        customParams: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        }
    },

    created: function created() {
        this.getOptions = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["debounce"])(this.getOptions, 500);
    },
    data: function data() {
        return {
            optionList: this.options,
            loading: false,
            query: ''
        };
    },


    methods: {
        getOptions: function getOptions() {
            var _this = this;

            if (!this.isServerSide) {
                return;
            }

            this.loading = true;

            axios.get(route(this.source, [], null), {
                params: this.getParams()
            }).then(function (response) {
                _this.processOptions(response);
                _this.loading = false;
            }).catch(function (error) {
                _this.loading = true;
                _this.handleError(error);
            });
        },
        getParams: function getParams() {
            return {
                params: this.params,
                pivotParams: this.pivotParams,
                customParams: this.customParams,
                query: this.query,
                value: this.value
            };
        },
        processOptions: function processOptions(response) {
            this.optionList = response.data;

            if (!this.query && !this.valueIsMatched()) {
                this.clear();
            }
        },
        valueIsMatched: function valueIsMatched() {
            var self = this;

            if (!this.multiple) {
                return this.optionKeys.filter(function (option) {
                    return option === self.value;
                }).length > 0;
            }

            return this.optionKeys.filter(function (option) {
                return self.value.filter(function (val) {
                    return val === option;
                }).length > 0;
            }).length > 0;
        },
        customLabel: function customLabel(option) {
            return this.optionList[option];
        },
        update: function update() {
            var _this2 = this;

            this.$nextTick(function () {
                _this2.$emit('input', _this2.value);
            });
        },
        clear: function clear() {
            this.$emit('input', this.multiple ? [] : null);
        }
    },

    mounted: function mounted() {
        if (this.isServerSide) {
            this.getOptions();
        }
    }
});

/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMultiselect=t():e.VueMultiselect=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e){return 0!==e&&(!(!Array.isArray(e)||0!==e.length)||!e)}function o(e,t){return void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false"),-1!==e.toString().toLowerCase().indexOf(t.trim())}function l(e,t,i,n){return e.filter(function(e){return o(n(e,i),t)})}function r(e){return e.filter(function(e){return!e.$isLabel})}function a(e,t){return function(i){return i.reduce(function(i,n){return n[e]&&n[e].length?(i.push({$groupLabel:n[t],$isLabel:!0}),i.concat(n[e])):i},[])}}function u(e,t,i,s,o){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=l(r[i],e,t,o);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=i(2),p=function(e){return e&&e.__esModule?e:{default:e}}(h),d=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce(function(e,t){return t(e)},e)}};t.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(e,t){return s(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var e=this.search||"",t=e.toLowerCase().trim(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,t,this.label):l(i,t,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys:function(){var e=this;return this.trackBy?this.internalValue.map(function(t){return t[e.trackBy]}):this.internalValue},optionKeys:function(){var e=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(t){return e.customLabel(t,e.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(e,t){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(e){this.internalValue=this.getInternalValue(e)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(e){return null===e||void 0===e?[]:this.multiple?(0,p.default)(e):(0,p.default)([e])},filterAndFlat:function(e,t,i){return d(u(t,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(e)},flatAndStrip:function(e){return d(a(this.groupValues,this.groupLabel),r)(e)},updateSearch:function(e){this.search=e},isExistingOption:function(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected:function(e){var t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isNotSelected:function(e){return!this.isSelected(e)},getOptionLabel:function(e){if(s(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;var t=this.customLabel(e,this.label);return s(t)?"":t},select:function(e,t){if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isLabel||e.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e))return void("Tab"!==t&&this.removeElement(e));this.multiple?this.internalValue.push(e):this.internalValue=[e],this.$emit("select",(0,p.default)(e),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===e?"undefined":c(e))?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);this.internalValue.splice(i,1),this.$emit("input",this.getValue(),this.id),this.$emit("remove",(0,p.default)(e),this.id),this.closeOnSelect&&t&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var e=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return e.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},addPointerElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",t=e.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],t),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(e){this.pointer=e,this.pointerDirty=!0}}}},function(e,t,i){"use strict";function n(e){if(Array.isArray(e))return e.map(n);if(e&&"object"===(void 0===e?"undefined":s(e))){for(var t={},i=Object.keys(e),o=0,l=i.length;o<l;o++){var r=i[o];t[r]=n(e[r])}return t}return e}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n},function(e,t,i){"use strict";function n(e){i(6)}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i.n(s),l=i(8),r=i(7),a=n,u=r(o.a,l.a,!1,a,null,null);t.default=u.exports},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.deepClone=t.pointerMixin=t.multiselectMixin=t.Multiselect=void 0;var s=i(3),o=n(s),l=i(0),r=n(l),a=i(1),u=n(a),c=i(2),h=n(c);t.default=o.default,t.Multiselect=o.default,t.multiselectMixin=r.default,t.pointerMixin=u.default,t.deepClone=h.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=n(s),l=i(1),r=n(l);t.default={name:"vue-multiselect",mixins:[o.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(e){return"and "+e+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{width:"0",position:"absolute"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(e,t){},function(e,t){e.exports=function(e,t,i,n,s,o){var l,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(l=e,r=e.default);var u="function"==typeof r?r.options:r;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var h=u.functional,p=h?u.render:u.beforeCreate;h?(u._injectStyles=c,u.render=function(e,t){return c.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:l,exports:r,options:u}}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"multiselect",class:{"multiselect--active":e.isOpen,"multiselect--disabled":e.disabled,"multiselect--above":e.isAbove},attrs:{tabindex:e.searchable?-1:e.tabindex},on:{focus:function(t){e.activate()},blur:function(t){!e.searchable&&e.deactivate()},keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerForward()):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerBackward()):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)||!e._k(t.keyCode,"tab",9,t.key)?(t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null}],keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()}}},[e._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}}})],{toggle:e.toggle}),e._v(" "),e._t("clear",null,{search:e.search}),e._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[e._l(e.visibleValue,function(t){return[e._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:e._s(e.getOptionLabel(t))}}),e._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key))return null;i.preventDefault(),e.removeElement(t)},mousedown:function(i){i.preventDefault(),e.removeElement(t)}}})])],{option:t,search:e.search,remove:e.removeElement})]})],2),e._v(" "),e.internalValue&&e.internalValue.length>e.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:e._s(e.limitText(e.internalValue.length-e.limit))}})]:e._e(),e._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[e._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),e._v(" "),e.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:e.inputStyle,attrs:{name:e.name,id:e.id,type:"text",autocomplete:"off",placeholder:e.placeholder,disabled:e.disabled,tabindex:e.tabindex},domProps:{value:e.isOpen?e.search:e.currentOptionLabel},on:{input:function(t){e.updateSearch(t.target.value)},focus:function(t){t.preventDefault(),e.activate()},blur:function(t){t.preventDefault(),e.deactivate()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key))return null;t.preventDefault(),e.pointerForward()},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key))return null;t.preventDefault(),e.pointerBackward()},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)?(t.preventDefault(),t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null},function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46],t.key))return null;t.stopPropagation(),e.removeLastElement()}]}}):e._e(),e._v(" "),e.searchable?e._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:e._s(e.currentOptionLabel)},on:{mousedown:function(t){t.preventDefault(),e.toggle(t)}}})],2),e._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:e.optimizedHeight+"px"},on:{focus:e.activate,mousedown:function(e){e.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:e.contentStyle},[e._t("beforeList"),e._v(" "),e.multiple&&e.max===e.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[e._t("maxElements",[e._v("Maximum of "+e._s(e.max)+" options selected. First remove a selected option to select another.")])],2)]):e._e(),e._v(" "),!e.max||e.internalValue.length<e.max?e._l(e.filteredOptions,function(t,n){return i("li",{key:n,staticClass:"multiselect__element"},[t&&(t.$isLabel||t.$isDisabled)?e._e():i("span",{staticClass:"multiselect__option",class:e.optionHighlight(n,t),attrs:{"data-select":t&&t.isTag?e.tagPlaceholder:e.selectLabelText,"data-selected":e.selectedLabelText,"data-deselect":e.deselectLabelText},on:{click:function(i){i.stopPropagation(),e.select(t)},mouseenter:function(t){if(t.target!==t.currentTarget)return null;e.pointerSet(n)}}},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2),e._v(" "),t&&(t.$isLabel||t.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:e.optionHighlight(n,t)},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2):e._e()])}):e._e(),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.showNoResults&&0===e.filteredOptions.length&&e.search&&!e.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[e._t("noResult",[e._v("No elements found. Consider changing the search query.")])],2)]),e._v(" "),e._t("afterList")],2)])])],2)},s=[],o={render:n,staticRenderFns:s};t.a=o}])});

/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vue-select" },
    [
      _c(
        "multiselect",
        {
          class: { "has-error": _vm.hasError },
          attrs: {
            value: _vm.value,
            searchable: "",
            "allow-empty": "",
            disabled: _vm.disabled,
            "internal-search": !_vm.isServerSide,
            multiple: _vm.multiple,
            taggable: _vm.taggable,
            "clear-on-select": !_vm.multiple,
            "close-on-select": !_vm.multiple,
            "select-label": _vm.__(_vm.labels.select),
            "deselect-label": _vm.__(_vm.labels.deselect),
            "selected-label": _vm.__(_vm.labels.selected),
            placeholder: _vm.__(_vm.labels.placeholder),
            loading: _vm.loading,
            "options-limit": 100,
            options: _vm.optionKeys,
            "custom-label": _vm.customLabel
          },
          on: {
            "search-change": function($event) {
              _vm.query = $event
              _vm.getOptions()
            },
            tag: function($event) {
              _vm.$emit("tag", $event)
            },
            input: function($event) {
              _vm.$emit("input", $event)
            }
          },
          scopedSlots: _vm._u([
            {
              key: "option",
              fn: function(props) {
                return [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.$options.filters.highlight(
                          _vm.optionList[props.option],
                          _vm.query
                        )
                      )
                    }
                  })
                ]
              }
            },
            {
              key: "clear",
              fn: function(props) {
                return !_vm.disabled
                  ? [
                      _vm.hasSelection
                        ? _c("div", {
                            staticClass: "multiselect__clear",
                            on: {
                              mousedown: function($event) {
                                $event.preventDefault()
                                $event.stopPropagation()
                                _vm.clear()
                              }
                            }
                          })
                        : _vm._e()
                    ]
                  : undefined
              }
            }
          ])
        },
        [
          _c("span", { attrs: { slot: "noResult" }, slot: "noResult" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.__(_vm.labels.noResult)) +
                "\n        "
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b645229c", module.exports)
  }
}

/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1099)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1101)
/* template */
var __vue_template__ = __webpack_require__(1124)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b52e927", Component.options)
  } else {
    hotAPI.reload("data-v-1b52e927", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1100);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("ae969662", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b52e927\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueForm.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b52e927\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nform.vue-form {\n    margin-bottom: 0;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/VueForm.vue"],"names":[],"mappings":";AAqPA;IACA,iBAAA;CACA","file":"VueForm.vue","sourcesContent":["<template>\n\n    <div>\n        <h5 class=\"title is-5\"\n            v-if=\"data.icon || data.title\">\n            <span class=\"icon\"\n                v-if=\"data.icon\">\n                <i :class=\"data.icon\"></i>\n            </span>\n            <span\n                v-if=\"data.title\">\n                {{ data.title }}\n            </span>\n            <hr>\n        </h5>\n        <form @submit.prevent=\"submit()\"\n            class=\"vue-form\">\n            <div class=\"columns is-multiline\">\n                <div v-for=\"field in data.fields\"\n                    class=\"column\"\n                    :key=\"field.name\"\n                    :class=\"columnSize\"\n                    v-if=\"!field.meta.hidden\">\n                    <div class=\"field\">\n                        <label class=\"label\">\n                            {{ __(field.label) }}\n                            <p v-if=\"errors.has(field.name)\"\n                                class=\"help is-danger is-pulled-right\">\n                                {{ errors.get(field.name) }}\n                            </p>\n                        </label>\n                        <span v-if=\"field.meta.custom\">\n                            <slot :name=\"field.name\"\n                                :field=\"field\"\n                                :errors=\"errors\">\n                            </slot>\n                        </span>\n                        <span v-else>\n                            <vue-form-input v-if=\"field.meta.type === 'input'\"\n                                :field=\"field\"\n                                @update=\"errors.clear(field.name)\"\n                                :has-error=\"errors.has(field.name)\">\n                            </vue-form-input>\n                            <vue-select v-if=\"field.meta.type === 'select'\"\n                                :has-error=\"errors.has(field.name)\"\n                                @input=\"errors.clear(field.name);\"\n                                v-model=\"field.value\"\n                                :options=\"field.meta.options\"\n                                :key-map=\"field.meta.keyMap\"\n                                :source=\"field.meta.source\"\n                                :multiple=\"field.meta.multiple\"\n                                :disabled=\"field.meta.disabled\">\n                            </vue-select>\n                            <datepicker v-if=\"field.meta.type === 'datepicker'\"\n                                @input=\"errors.clear(field.name)\"\n                                v-model=\"field.value\"\n                                :format=\"field.meta.format\"\n                                :time=\"field.meta.time\"\n                                :disabled=\"field.meta.disabled\">\n                            </datepicker>\n                            <datepicker v-if=\"field.meta.type === 'timepicker'\"\n                                @input=\"errors.clear(field.name)\"\n                                v-model=\"field.value\"\n                                :format=\"field.meta.format\"\n                                time-only\n                                :disabled=\"field.meta.disabled\">\n                            </datepicker>\n                            <div class=\"control has-icons-right\"\n                                v-if=\"field.meta.type === 'textarea'\">\n                                <textarea @input=\"errors.clear(field.name)\"\n                                    class=\"textarea\"\n                                    :class=\"{ 'is-danger': errors.has(field.name) }\"\n                                    v-model=\"field.value\"\n                                    :rows=\"field.meta.rows\"\n                                    :disabled=\"field.meta.disabled\">\n                                </textarea>\n                                <span class=\"icon is-small is-right has-text-danger\"\n                                    v-if=\"errors.has(field.name)\">\n                                    <i class=\"fa fa-warning\"></i>\n                                </span>\n                            </div>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <button class=\"button\"\n                v-if=\"data.actions.destroy\"\n                :disabled=\"data.actions.destroy.forbidden\"\n                :class=\"data.actions.destroy.button.class\"\n                @click.prevent=\"showModal = true\">\n                <span>{{ __(data.actions.destroy.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.destroy.button.icon\"></i>\n                </span>\n            </button>\n            <button class=\"button\"\n                :class=\"data.actions.create.button.class\"\n                @click.prevent=\"create()\"\n                v-if=\"data.actions.create\"\n                :disabled=\"data.actions.create.forbidden\">\n                <span>{{ __(data.actions.create.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.create.button.icon\"></i>\n                </span>\n            </button>\n            <button type=\"submit\"\n                class=\"button is-pulled-right\"\n                :class=\"[data.actions.store.button.class, { 'is-loading': loading }]\"\n                v-if=\"data.actions.store\"\n                :disabled=\"data.actions.store.forbidden\">\n                <span>{{ __(data.actions.store.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.store.button.icon\"></i>\n                </span>\n            </button>\n            <button type=\"submit\"\n                class=\"button is-pulled-right\"\n                :class=\"[data.actions.update.button.class, { 'is-loading': loading }]\"\n                v-if=\"data.actions.update\"\n                :disabled=\"data.actions.update.forbidden\">\n                <span>{{ __(data.actions.update.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.update.button.icon\"></i>\n                </span>\n            </button>\n            <div class=\"is-clearfix\"></div>\n        </form>\n        <modal v-if=\"data.actions.destroy\"\n            :show=\"showModal\"\n            :__=\"__\"\n            :message=\"data.actions.destroy.button.message\"\n            @cancel-action=\"showModal = false\"\n            @commit-action=\"destroy()\">\n        </modal>\n    </div>\n\n</template>\n\n<script>\n\nimport { mapGetters } from 'vuex';\nimport Errors from '../../../classes/enso/Errors.js';\nimport Modal from './Modal.vue';\nimport VueSelect from '../select/VueSelect.vue';\nimport Datepicker from '../bulma/Datepicker.vue';\nimport VueFormInput from './VueFormInput.vue';\n\nexport default {\n    components: {\n        Modal, VueSelect, Datepicker, VueFormInput,\n    },\n\n    props: {\n        data: {\n            type: Object,\n            required: true,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n    },\n\n    data() {\n        return {\n            loading: false,\n            showModal: false,\n            errors: new Errors(),\n        };\n    },\n\n    computed: {\n        ...mapGetters('locale', ['__']),\n        columnSize() {\n            return `is-${parseInt(12 / this.data.columns, 10)}`;\n        },\n        path() {\n            return this.data.method === 'post'\n                ? this.data.actions.store.path\n                : this.data.actions.update.path;\n        },\n    },\n\n    methods: {\n        create() {\n            this.$emit('create');\n            this.$router.push({ name: this.data.actions.create.route });\n        },\n        submit() {\n            this.loading = true;\n\n            axios[this.data.method](this.path, this.formData()).then(({ data }) => {\n                this.loading = false;\n                toastr.success(data.message);\n                this.$emit('submit');\n\n                if (data.redirect) {\n                    this.$router.push({\n                        name: data.redirect,\n                        params: { id: data.id },\n                    });\n                }\n            }).catch((error) => {\n                const { status, data } = error.response;\n                this.loading = false;\n\n                if (status === 422) {\n                    this.errors.set(data.errors);\n\n                    return;\n                }\n\n                this.handleError(error);\n            });\n        },\n        formData() {\n            return this.data.fields.reduce((object, field) => {\n                object[field.name] = field.value;\n                return object;\n            }, { _params: this.params });\n        },\n        destroy() {\n            this.showModal = false;\n            this.loading = true;\n\n            axios.delete(this.data.actions.destroy.path).then(({ data }) => {\n                this.loading = false;\n                toastr.success(data.message);\n                this.$emit('destroy');\n\n                if (data.redirect) {\n                    this.$router.push({ name: data.redirect });\n                }\n            }).catch((error) => {\n                this.loading = false;\n                this.handleError(error);\n            });\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    form.vue-form {\n        margin-bottom: 0;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_enso_Errors_js__ = __webpack_require__(1102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_VueSelect_vue__ = __webpack_require__(1090);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_VueSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__select_VueSelect_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bulma_Datepicker_vue__ = __webpack_require__(1108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bulma_Datepicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__bulma_Datepicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Modal: __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default.a, VueSelect: __WEBPACK_IMPORTED_MODULE_3__select_VueSelect_vue___default.a, Datepicker: __WEBPACK_IMPORTED_MODULE_4__bulma_Datepicker_vue___default.a, VueFormInput: __WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue___default.a
    },

    props: {
        data: {
            type: Object,
            required: true
        },
        params: {
            type: Object,
            default: null
        }
    },

    data: function data() {
        return {
            loading: false,
            showModal: false,
            errors: new __WEBPACK_IMPORTED_MODULE_1__classes_enso_Errors_js__["a" /* default */]()
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__']), {
        columnSize: function columnSize() {
            return 'is-' + parseInt(12 / this.data.columns, 10);
        },
        path: function path() {
            return this.data.method === 'post' ? this.data.actions.store.path : this.data.actions.update.path;
        }
    }),

    methods: {
        create: function create() {
            this.$emit('create');
            this.$router.push({ name: this.data.actions.create.route });
        },
        submit: function submit() {
            var _this = this;

            this.loading = true;

            axios[this.data.method](this.path, this.formData()).then(function (_ref) {
                var data = _ref.data;

                _this.loading = false;
                toastr.success(data.message);
                _this.$emit('submit');

                if (data.redirect) {
                    _this.$router.push({
                        name: data.redirect,
                        params: { id: data.id }
                    });
                }
            }).catch(function (error) {
                var _error$response = error.response,
                    status = _error$response.status,
                    data = _error$response.data;

                _this.loading = false;

                if (status === 422) {
                    _this.errors.set(data.errors);

                    return;
                }

                _this.handleError(error);
            });
        },
        formData: function formData() {
            return this.data.fields.reduce(function (object, field) {
                object[field.name] = field.value;
                return object;
            }, { _params: this.params });
        },
        destroy: function destroy() {
            var _this2 = this;

            this.showModal = false;
            this.loading = true;

            axios.delete(this.data.actions.destroy.path).then(function (_ref2) {
                var data = _ref2.data;

                _this2.loading = false;
                toastr.success(data.message);
                _this2.$emit('destroy');

                if (data.redirect) {
                    _this2.$router.push({ name: data.redirect });
                }
            }).catch(function (error) {
                _this2.loading = false;
                _this2.handleError(error);
            });
        }
    }
});

/***/ }),

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: 'any',
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }, {
        key: 'has',
        value: function has(field) {
            return Object.keys(this.errors).includes(field);
        }
    }, {
        key: 'get',
        value: function get(field) {
            return this.has(field) ? this.errors[field][0] : null;
        }
    }, {
        key: 'set',
        value: function set(errors) {
            this.errors = errors;
        }
    }, {
        key: 'clear',
        value: function clear(field) {
            if (this.has(field)) {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.delete(this.errors, field);
            }
        }
    }, {
        key: 'empty',
        value: function empty() {
            var _this = this;

            Object.keys(this.errors).forEach(function (field) {
                return _this.clear(field);
            });
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1104)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1106)
/* template */
var __vue_template__ = __webpack_require__(1107)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ddb382a", Component.options)
  } else {
    hotAPI.reload("data-v-7ddb382a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("580eee24", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ddb382a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ddb382a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.modal.is-active {\n    z-index: 1100;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/Modal.vue"],"names":[],"mappings":";AA8DA;IACA,cAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n\n    <transition enter-active-class=\"animated fadeIn\"\n        leave-active-class=\"animated fadeOut\">\n        <div class=\"modal\"\n            :class=\"{ 'is-active': show }\"\n            v-if=\"show\">\n            <div class=\"modal-background\"></div>\n            <div class=\"table-modal modal-content\">\n                <div class=\"box\">\n                    <slot name=\"content\">\n                        <h5 class=\"subtitle is-5\">\n                            {{ __(message || \"Are you sure ?\") }}\n                        </h5>\n                    </slot>\n                    <hr>\n                    <div class=\"level\">\n                        <div class=\"level-left\"></div>\n                        <div class=\"level-right\">\n                            <div class=\"level-item\">\n                                <slot name=\"controls\">\n                                    <button class=\"button is-success\"\n                                          @click=\"$emit('cancel-action')\">\n                                          {{ __(\"Cancel\") }}\n                                      </button>\n                                      <button class=\"button is-danger has-margin-left-small\"\n                                        @click=\"$emit('commit-action')\">\n                                        {{ __(\"Yes\") }}\n                                    </button>\n                                </slot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </transition>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        show: {\n            type: Boolean,\n            required: true,\n        },\n        message: {\n            type: String,\n            default: null,\n        },\n        __: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .modal.is-active {\n        z-index: 1100;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        show: {
            type: Boolean,
            required: true
        },
        message: {
            type: String,
            default: null
        },
        __: {
            type: Function,
            required: true
        }
    }
});

/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "animated fadeIn",
        "leave-active-class": "animated fadeOut"
      }
    },
    [
      _vm.show
        ? _c(
            "div",
            { staticClass: "modal", class: { "is-active": _vm.show } },
            [
              _c("div", { staticClass: "modal-background" }),
              _vm._v(" "),
              _c("div", { staticClass: "table-modal modal-content" }, [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._t("content", [
                      _c("h5", { staticClass: "subtitle is-5" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.__(_vm.message || "Are you sure ?")) +
                            "\n                    "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "level" }, [
                      _c("div", { staticClass: "level-left" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "level-right" }, [
                        _c(
                          "div",
                          { staticClass: "level-item" },
                          [
                            _vm._t("controls", [
                              _c(
                                "button",
                                {
                                  staticClass: "button is-success",
                                  on: {
                                    click: function($event) {
                                      _vm.$emit("cancel-action")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                      " +
                                      _vm._s(_vm.__("Cancel")) +
                                      "\n                                  "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "button is-danger has-margin-left-small",
                                  on: {
                                    click: function($event) {
                                      _vm.$emit("commit-action")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.__("Yes")) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ])
                          ],
                          2
                        )
                      ])
                    ])
                  ],
                  2
                )
              ])
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ddb382a", module.exports)
  }
}

/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1109)
  __webpack_require__(1111)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1113)
/* template */
var __vue_template__ = __webpack_require__(1115)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/bulma/Datepicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03ce2c3e", Component.options)
  } else {
    hotAPI.reload("data-v-03ce2c3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("08744a70", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../css-loader/index.js?sourceMap!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03ce2c3e\",\"scoped\":false,\"hasInlineConfig\":true}!./material_green.css", function() {
     var newContent = require("!!../../../css-loader/index.js?sourceMap!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03ce2c3e\",\"scoped\":false,\"hasInlineConfig\":true}!./material_green.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.flatpickr-calendar {\n  background: transparent;\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  text-align: center;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  visibility: visible;\n  overflow: visible;\n  max-height: 640px;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.hasWeeks {\n  width: auto;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  border: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #1bbc9b;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #1bbc9b;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: #1bbc9b;\n  color: #fff;\n  fill: #fff;\n  height: 28px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.flatpickr-prev-month,\n.flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  line-height: 16px;\n  height: 28px;\n  padding: 10px calc(3.57% - 1.5px);\n  z-index: 3;\n}\n.flatpickr-prev-month i,\n.flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-next-month.flatpickr-prev-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  left: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-next-month.flatpickr-next-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  right: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month:hover,\n.flatpickr-next-month:hover {\n  color: #bbb;\n}\n.flatpickr-prev-month:hover svg,\n.flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-prev-month svg,\n.flatpickr-next-month svg {\n  width: 14px;\n}\n.flatpickr-prev-month svg path,\n.flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(72,72,72,0.05);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 33%;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(255,255,255,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 6.16px 0 0 0;\n  line-height: 1;\n  height: 28px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month.slideLeft {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideLeftNew {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRight {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRightNew {\n  -webkit-transform: translate3d(0, 0, 0px);\n          transform: translate3d(0, 0, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: #fff;\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: default;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: initial;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(255,255,255,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-weekdays {\n  background: #1bbc9b;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: #1bbc9b;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 307.875px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n  border-right: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft,\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideRight {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideRightNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #484848;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.flatpickr-day.today {\n  border-color: #bbb;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #bbb;\n  background: #bbb;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #1bbc9b;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #1bbc9b;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange,\n.flatpickr-day.startRange.startRange + .endRange,\n.flatpickr-day.endRange.startRange + .endRange {\n  -webkit-box-shadow: -10px 0 0 #1bbc9b;\n          box-shadow: -10px 0 0 #1bbc9b;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n          box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover {\n  pointer-events: none;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(72,72,72,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n          box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  display: inline-block;\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day {\n  display: block;\n  width: 100%;\n  max-width: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  border-radius: 0 0 5px 5px;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #484848;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #484848;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  cursor: pointer;\n  color: #484848;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  display: inline-block;\n  float: left;\n  line-height: inherit;\n  color: #484848;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #ececec;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes fpFadeInDown {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@-webkit-keyframes fpSlideLeft {\nfrom {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n}\n}\n@keyframes fpSlideLeft {\nfrom {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideLeftNew {\nfrom {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\n}\n@keyframes fpSlideLeftNew {\nfrom {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideRight {\nfrom {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\n}\n@keyframes fpSlideRight {\nfrom {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideRightNew {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\n}\n@keyframes fpSlideRightNew {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\n}\n@-webkit-keyframes fpFadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes fpFadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@-webkit-keyframes fpFadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fpFadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/node_modules/flatpickr/dist/themes/material_green.css"],"names":[],"mappings":"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D;;EAEE,iBAAiB;CAClB;AACD;EACE,WAAW;EACX,UAAU;CACX;AACD;;EAEE,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,0BAA0B;KACvB,uBAAuB;MACtB,sBAAsB;UAClB,kBAAkB;EAC1B,2BAA2B;MACvB,4BAA4B;UACxB,mBAAmB;CAC5B;AACD;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;;EAEE,oBAAoB;CACrB;AACD;EACE,gBAAgB;CACjB;AACD;AACE;IACE,WAAW;IACX,4CAA4C;YACpC,oCAAoC;CAC7C;AACD;IACE,WAAW;IACX,wCAAwC;YAChC,gCAAgC;CACzC;CACF;AACD;AACE;IACE,WAAW;IACX,4CAA4C;YACpC,oCAAoC;CAC7C;AACD;IACE,WAAW;IACX,wCAAwC;YAChC,gCAAgC;CACzC;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,gDAAgD;YACxC,wCAAwC;CACjD;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,gDAAgD;YACxC,wCAAwC;CACjD;CACF;AACD;AACE;IACE,+CAA+C;YACvC,uCAAuC;CAChD;AACD;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;CACF;AACD;AACE;IACE,+CAA+C;YACvC,uCAAuC;CAChD;AACD;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;CACF;AACD;AACE;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;AACD;IACE,+CAA+C;YACvC,uCAAuC;CAChD;CACF;AACD;AACE;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;AACD;IACE,+CAA+C;YACvC,uCAAuC;CAChD;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF","file":"material_green.css","sourcesContent":[".flatpickr-calendar {\n  background: transparent;\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  text-align: center;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  visibility: visible;\n  overflow: visible;\n  max-height: 640px;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.hasWeeks {\n  width: auto;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  border: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #1bbc9b;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #1bbc9b;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: #1bbc9b;\n  color: #fff;\n  fill: #fff;\n  height: 28px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.flatpickr-prev-month,\n.flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  line-height: 16px;\n  height: 28px;\n  padding: 10px calc(3.57% - 1.5px);\n  z-index: 3;\n}\n.flatpickr-prev-month i,\n.flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-next-month.flatpickr-prev-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  left: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-next-month.flatpickr-next-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  right: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month:hover,\n.flatpickr-next-month:hover {\n  color: #bbb;\n}\n.flatpickr-prev-month:hover svg,\n.flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-prev-month svg,\n.flatpickr-next-month svg {\n  width: 14px;\n}\n.flatpickr-prev-month svg path,\n.flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(72,72,72,0.05);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 33%;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(255,255,255,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 6.16px 0 0 0;\n  line-height: 1;\n  height: 28px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month.slideLeft {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideLeftNew {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRight {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRightNew {\n  -webkit-transform: translate3d(0, 0, 0px);\n          transform: translate3d(0, 0, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: #fff;\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: default;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: initial;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(255,255,255,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-weekdays {\n  background: #1bbc9b;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: #1bbc9b;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 307.875px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n  border-right: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft,\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideRight {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideRightNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #484848;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.flatpickr-day.today {\n  border-color: #bbb;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #bbb;\n  background: #bbb;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #1bbc9b;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #1bbc9b;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange,\n.flatpickr-day.startRange.startRange + .endRange,\n.flatpickr-day.endRange.startRange + .endRange {\n  -webkit-box-shadow: -10px 0 0 #1bbc9b;\n          box-shadow: -10px 0 0 #1bbc9b;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n          box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover {\n  pointer-events: none;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(72,72,72,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n          box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  display: inline-block;\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day {\n  display: block;\n  width: 100%;\n  max-width: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  border-radius: 0 0 5px 5px;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #484848;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #484848;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  cursor: pointer;\n  color: #484848;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  display: inline-block;\n  float: left;\n  line-height: inherit;\n  color: #484848;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #ececec;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fpSlideLeft {\n  from {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n  }\n}\n@keyframes fpSlideLeft {\n  from {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideLeftNew {\n  from {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n}\n@keyframes fpSlideLeftNew {\n  from {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n}\n@keyframes fpSlideRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideRightNew {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n}\n@keyframes fpSlideRightNew {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n}\n@-webkit-keyframes fpFadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fpFadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("d6d7b942", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03ce2c3e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Datepicker.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03ce2c3e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Datepicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\na.input-button {\n    cursor: pointer;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/bulma/resources/assets/js/components/enso/bulma/Datepicker.vue"],"names":[],"mappings":";AAkHA;IACA,gBAAA;CACA","file":"Datepicker.vue","sourcesContent":["<template>\n\n    <div class=\"flatpickr\">\n        <div class=\"control has-icons-right\">\n            <input type=\"text\"\n                :placeholder=\"placeholder\"\n                :id=\"'date-input-' + _uid\"\n                :name=\"name\"\n                :value=\"value\"\n                class=\"input control\"\n                :disabled=\"disabled\">\n            <span class=\"icon is-small is-right\">\n                <i class=\"fa fa-clock-o\"\n                    v-if=\"timeOnly\">\n                </i>\n                <i class=\"fa fa-calendar\" v-else></i>\n            </span>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport Flatpickr from 'flatpickr';\n\n// const FlatpickrL10ns = {\n//     ro: require('flatpickr/dist/l10n/ro.js').ro,\n// };\n// Flatpickr.localize(FlatpickrL10ns[Store.user.preferences.global.lang]); //fixme\n\nexport default {\n    props: {\n        value: {\n            required: true,\n            default: null,\n            validate(value) {\n                    return value === null || typeof value === 'string'\n                        || value instanceof Date || value instanceof Array;\n                },\n        },\n        name: {\n            type: String,\n            default: null,\n        },\n        time: {\n            type: Boolean,\n            default: false,\n        },\n        timeOnly: {\n            type: Boolean,\n            default: false,\n        },\n        placeholder: {\n            type: String,\n            default: 'Select Date', // fixme\n        },\n        disabled: {\n            type: Boolean,\n            default: false,\n        },\n        format: {\n            type: String,\n            default: 'd-m-Y',\n        },\n        inputClass: {\n            type: String,\n            default: 'form-control',\n        },\n    },\n\n    data() {\n        return {\n            picker: null,\n        };\n    },\n\n    computed: {\n        config(self = this) {\n            return {\n                weekNumbers: false,\n                defaultDate: this.value,\n                dateFormat: this.format,\n                allowInput: false,\n                clickOpens: true,\n                noCalendar: this.timeOnly,\n                enableTime: this.time || this.timeOnly,\n                onChange(selectedDates, dateStr) {\n                    self.$emit('input', dateStr);\n                },\n            };\n        },\n    },\n\n    watch: {\n        value(newValue) {\n            this.picker.setDate(newValue);\n        },\n    },\n\n    mounted() {\n        this.picker = new Flatpickr(this.$el.querySelector('input'), this.config);\n    },\n\n    beforeDestroy() {\n        this.picker.destroy();\n    },\n};\n\n</script>\n\n<style src=\"flatpickr/dist/themes/material_green.css\"></style>\n\n<style>\n\n    a.input-button {\n        cursor: pointer;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flatpickr__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// const FlatpickrL10ns = {
//     ro: require('flatpickr/dist/l10n/ro.js').ro,
// };
// Flatpickr.localize(FlatpickrL10ns[Store.user.preferences.global.lang]); //fixme

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        value: {
            required: true,
            default: null,
            validate: function validate(value) {
                return value === null || typeof value === 'string' || value instanceof Date || value instanceof Array;
            }
        },
        name: {
            type: String,
            default: null
        },
        time: {
            type: Boolean,
            default: false
        },
        timeOnly: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: 'Select Date' // fixme
        },
        disabled: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'd-m-Y'
        },
        inputClass: {
            type: String,
            default: 'form-control'
        }
    },

    data: function data() {
        return {
            picker: null
        };
    },


    computed: {
        config: function config() {
            var self = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

            return {
                weekNumbers: false,
                defaultDate: this.value,
                dateFormat: this.format,
                allowInput: false,
                clickOpens: true,
                noCalendar: this.timeOnly,
                enableTime: this.time || this.timeOnly,
                onChange: function onChange(selectedDates, dateStr) {
                    self.$emit('input', dateStr);
                }
            };
        }
    },

    watch: {
        value: function value(newValue) {
            this.picker.setDate(newValue);
        }
    },

    mounted: function mounted() {
        this.picker = new __WEBPACK_IMPORTED_MODULE_0_flatpickr___default.a(this.$el.querySelector('input'), this.config);
    },
    beforeDestroy: function beforeDestroy() {
        this.picker.destroy();
    }
});

/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v3.1.4, @license MIT */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.flatpickr = factory());
}(this, (function () { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */



var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function compareDates(date1, date2, timeless) {
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
var getWeek = function (givenDate) {
    var onejan = new Date(givenDate.getFullYear(), 0, 1);
    return Math.ceil(((givenDate.getTime() - onejan.getTime()) / 86400000 +
        onejan.getDay() +
        1) /
        7);
};
var duration = {
    DAY: 86400000,
};

var defaults = {
    _disable: [],
    _enable: [],
    allowInput: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: window && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enable: [],
    enableSeconds: false,
    enableTime: false,
    getWeek: getWeek,
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};

var english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
};

var pad = function (number) { return ("0" + number).slice(-2); };
var int = function (bool) { return (bool === true ? 1 : 0); };
function debounce(func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    return function () {
        var context = this, args = arguments;
        timeout !== null && clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);
    };
}
var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
};
function mouseDelta(e) {
    var delta = e.wheelDelta || -e.deltaY;
    return delta >= 0 ? 1 : -1;
}

function toggleClass(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    numInput.type = "text";
    numInput.pattern = "\\d*";
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}

var do_nothing = function () { return undefined; };
var revFormat = {
    D: do_nothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    H: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * int(/pm/i.test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
    W: function (dateObj, weekNum) {
        var weekNumber = parseInt(weekNum);
        return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    },
    Y: function (dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) { return new Date(ISODate); },
    d: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    i: function (dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: do_nothing,
    m: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    w: do_nothing,
    y: function (dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
var tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "(am|AM|Am|aM|pm|PM|Pm|pM)",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
var formats = {
    Z: function (date) { return date.toISOString(); },
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return pad(formats.h(date, locale, options));
    },
    H: function (date) { return pad(date.getHours()); },
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: function (date) { return (date.getHours() > 11 ? "PM" : "AM"); },
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function (date) { return pad(date.getSeconds()); },
    U: function (date) { return date.getTime() / 1000; },
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: function (date) { return date.getFullYear(); },
    d: function (date) { return pad(date.getDate()); },
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    i: function (date) { return pad(date.getMinutes()); },
    j: function (date) { return date.getDate(); },
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function (date) { return pad(date.getMonth() + 1); },
    n: function (date) { return date.getMonth() + 1; },
    s: function (date) { return date.getSeconds(); },
    w: function (date) { return date.getDay(); },
    y: function (date) { return String(date.getFullYear()).substring(2); },
};

function FlatpickrInstance(element, instanceConfig) {
    var self = {};
    self.parseDate = parseDate;
    self.formatDate = formatDate;
    self._animationLoop = [];
    self._handlers = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function (month, yr) {
                if (month === void 0) { month = self.currentMonth; }
                if (yr === void 0) { yr = self.currentYear; }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar
                    ? self.latestSelectedDateObj || self.config.minDate
                    : undefined);
            }
            updateValue(false);
        }
        self.showTimeInput =
            self.selectedDates.length > 0 || self.config.noCalendar;
        if (self.weekWrapper !== undefined && self.daysContainer !== undefined) {
            self.calendarContainer.style.width =
                self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
        }
        if (!self.isMobile)
            positionCalendar();
        triggerEvent("onReady");
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function updateTime(e) {
        if (self.config.noCalendar && !self.selectedDates.length) {
            self.setDate(new Date().setHours(self.config.defaultHour, self.config.defaultMinute, self.config.defaultSeconds), false);
            setHoursFromInputs();
            updateValue();
        }
        timeWrapper(e);
        if (self.selectedDates.length === 0)
            return;
        if (!self.minDateHasTime ||
            e.type !== "input" ||
            e.target.value.length >= 2) {
            setHoursFromInputs();
            updateValue();
        }
        else {
            setTimeout(function () {
                setHoursFromInputs();
                updateValue();
            }, 1000);
        }
    }
    function ampm2military(hour, amPM) {
        return hour % 12 + 12 * int(amPM === "PM");
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined)
            hours = ampm2military(hours, self.amPM.textContent);
        if (self.config.minDate &&
            self.minDateHasTime &&
            self.latestSelectedDateObj &&
            compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {
            hours = Math.max(hours, self.config.minDate.getHours());
            if (hours === self.config.minDate.getHours())
                minutes = Math.max(minutes, self.config.minDate.getMinutes());
        }
        if (self.config.maxDate &&
            self.maxDateHasTime &&
            self.latestSelectedDateObj &&
            compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
            hours = Math.min(hours, self.config.maxDate.getHours());
            if (hours === self.config.maxDate.getHours())
                minutes = Math.min(minutes, self.config.maxDate.getMinutes());
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date)
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = pad(!self.config.time_24hr
            ? (12 + hours) % 12 + 12 * int(hours % 12 === 0)
            : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = hours >= 12 ? "PM" : "AM";
        if (self.secondElement !== undefined)
            self.secondElement.value = pad(seconds);
    }
    function onYearInput(event) {
        var year = parseInt(event.target.value) + (event.delta || 0);
        if (year.toString().length === 4 || event.key === "Enter") {
            self.currentYearElement.blur();
            if (!/[^\d]/.test(year.toString()))
                changeYear(year);
        }
    }
    function bind(element, event, handler) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler); });
        element.addEventListener(event, handler);
        self._handlers.push({ element: element, event: event, handler: handler });
    }
    function onClick(handler) {
        return function (evt) { return evt.which === 1 && handler(evt); };
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, 300);
        if (self.config.mode === "range" && self.daysContainer)
            bind(self.daysContainer, "mouseover", function (e) {
                return onMouseOver(e.target);
            });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.static)
            bind(self._input, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document.body, "touchstart", documentClick);
        bind(window.document.body, "mousedown", onClick(documentClick));
        bind(self._input, "blur", documentClick);
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "mousedown", onClick(self.open));
        }
        if (self.daysContainer !== undefined) {
            self.monthNav.addEventListener("wheel", function (e) { return e.preventDefault(); });
            bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
            bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "mousedown", onClick(selectDate));
            if (self.config.animate) {
                bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
                bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
            }
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            var selText = function (e) {
                return e.target.select();
            };
            bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
            bind(self.timeContainer, "mousedown", onClick(timeIncrement));
            bind(self.timeContainer, ["wheel", "increment"], self._debouncedChange);
            bind(self.timeContainer, "input", triggerChange);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
            if (self.amPM !== undefined) {
                bind(self.amPM, "mousedown", onClick(function (e) {
                    updateTime(e);
                    triggerChange();
                }));
            }
        }
    }
    function processPostDayAnimation() {
        self._animationLoop.forEach(function (f) { return f(); });
        self._animationLoop = [];
    }
    function animateDays(e) {
        if (self.daysContainer && self.daysContainer.childNodes.length > 1) {
            switch (e.animationName) {
                case "fpSlideLeft":
                    self.daysContainer.lastChild &&
                        self.daysContainer.lastChild.classList.remove("slideLeftNew");
                    self.daysContainer.removeChild(self.daysContainer
                        .firstChild);
                    self.days = self.daysContainer.firstChild;
                    processPostDayAnimation();
                    break;
                case "fpSlideRight":
                    self.daysContainer.firstChild &&
                        self.daysContainer.firstChild.classList.remove("slideRightNew");
                    self.daysContainer.removeChild(self.daysContainer
                        .lastChild);
                    self.days = self.daysContainer.firstChild;
                    processPostDayAnimation();
                    break;
                default:
                    break;
            }
        }
    }
    function animateMonths(e) {
        switch (e.animationName) {
            case "fpSlideLeftNew":
            case "fpSlideRightNew":
                self.navigationCurrentMonth.classList.remove("slideLeftNew");
                self.navigationCurrentMonth.classList.remove("slideRightNew");
                var nav = self.navigationCurrentMonth;
                while (nav.nextSibling &&
                    /curr/.test(nav.nextSibling.className))
                    self.monthNav.removeChild(nav.nextSibling);
                while (nav.previousSibling &&
                    /curr/.test(nav.previousSibling.className))
                    self.monthNav.removeChild(nav.previousSibling);
                self.oldCurMonth = undefined;
                break;
        }
    }
    function jumpToDate(jumpDate) {
        var jumpTo = jumpDate !== undefined
            ? parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            console.error(e.stack);
            console.warn("Invalid date supplied: " + jumpTo);
        }
        self.redraw();
    }
    function timeIncrement(e) {
        if (~e.target.className.indexOf("arrow"))
            incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && e.target;
        var input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = createElement("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = createElement("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = createElement("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline && !customAppend && self.element.parentNode) {
                self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
            }
            if (self.config.static) {
                var wrapper = createElement("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (compareDates(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                        compareDates(date, self.selectedDates[0]) === 0);
                    toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                        compareDates(date, self.selectedDates[1]) === 0);
                }
            }
        }
        else {
            dayElement.classList.add("disabled");
            if (self.selectedDates[0] &&
                self.minRangeDate &&
                date > self.minRangeDate &&
                date < self.selectedDates[0])
                self.minRangeDate = date;
            else if (self.selectedDates[0] &&
                self.maxRangeDate &&
                date < self.maxRangeDate &&
                date > self.selectedDates[0])
                self.maxRangeDate = date;
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
            if (self.selectedDates.length === 1 &&
                self.minRangeDate !== undefined &&
                self.maxRangeDate !== undefined &&
                (date < self.minRangeDate || date > self.maxRangeDate))
                dayElement.classList.add("notAllowed");
        }
        if (self.weekNumbers &&
            className !== "prevMonthDay" &&
            dayNumber % 7 === 1) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" +
                self.config.getWeek(date) +
                "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDay(currentIndex, offset) {
        var newIndex = currentIndex + offset || 0, targetNode = (currentIndex !== undefined
            ? self.days.childNodes[newIndex]
            : self.selectedDateElem ||
                self.todayDateElem ||
                self.days.childNodes[0]);
        var focus = function () {
            targetNode = targetNode || self.days.childNodes[newIndex];
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        };
        if (targetNode === undefined && offset !== 0) {
            if (offset > 0) {
                self.changeMonth(1, true, undefined, true);
                newIndex = newIndex % 42;
            }
            else if (offset < 0) {
                self.changeMonth(-1, true, undefined, true);
                newIndex += 42;
            }
            return afterDayAnim(focus);
        }
        focus();
    }
    function afterDayAnim(fn) {
        self.config.animate === true ? self._animationLoop.push(fn) : fn();
    }
    function buildDays(delta) {
        if (self.daysContainer === undefined) {
            return;
        }
        var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() -
            self.l10n.firstDayOfWeek +
            7) %
            7, isRangeMode = self.config.mode === "range";
        var prevMonthDays = self.utils.getDaysInMonth((self.currentMonth - 1 + 12) % 12);
        var daysInMonth = self.utils.getDaysInMonth(), days = window.document.createDocumentFragment();
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        if (self.weekNumbers && self.weekNumbers.firstChild)
            self.weekNumbers.textContent = "";
        if (isRangeMode) {
            self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
            self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
        }
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
            days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
            self._hidePrevMonthArrow =
                self._hidePrevMonthArrow ||
                    (!!self.minRangeDate &&
                        self.minRangeDate > days.childNodes[0].dateObj);
            self._hideNextMonthArrow =
                self._hideNextMonthArrow ||
                    (!!self.maxRangeDate &&
                        self.maxRangeDate <
                            new Date(self.currentYear, self.currentMonth + 1, 1));
        }
        else
            updateNavigationCurrentMonth();
        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        if (!self.config.animate || delta === undefined)
            clearNode(self.daysContainer);
        else {
            while (self.daysContainer.childNodes.length > 1)
                self.daysContainer.removeChild(self.daysContainer.firstChild);
        }
        if (delta && delta >= 0)
            self.daysContainer.appendChild(dayContainer);
        else
            self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);
        self.days = self.daysContainer.childNodes[0];
    }
    function buildMonthNav() {
        var monthNavFragment = window.document.createDocumentFragment();
        self.monthNav = createElement("div", "flatpickr-month");
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.currentMonthElement = createElement("span", "cur-month");
        self.currentMonthElement.title = self.l10n.scrollTitle;
        var yearInput = createNumberInput("cur-year");
        self.currentYearElement = yearInput.childNodes[0];
        self.currentYearElement.title = self.l10n.scrollTitle;
        if (self.config.minDate)
            self.currentYearElement.min = self.config.minDate
                .getFullYear()
                .toString();
        if (self.config.maxDate) {
            self.currentYearElement.max = self.config.maxDate
                .getFullYear()
                .toString();
            self.currentYearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
        self.navigationCurrentMonth.appendChild(self.currentMonthElement);
        self.navigationCurrentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(self.prevMonthNav);
        monthNavFragment.appendChild(self.navigationCurrentMonth);
        monthNavFragment.appendChild(self.nextMonthNav);
        self.monthNav.appendChild(monthNavFragment);
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function () { return self.__hidePrevMonthArrow; },
            set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool)
                    self.prevMonthNav.style.display = bool ? "none" : "block";
                self.__hidePrevMonthArrow = bool;
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function () { return self.__hideNextMonthArrow; },
            set: function (bool) {
                if (self.__hideNextMonthArrow !== bool)
                    self.nextMonthNav.style.display = bool ? "none" : "block";
                self.__hideNextMonthArrow = bool;
            },
        });
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour");
        self.hourElement = hourInput.childNodes[0];
        var minuteInput = createNumberInput("flatpickr-minute");
        self.minuteElement = minuteInput.childNodes[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? self.config.defaultHour
                : military2ampm(self.config.defaultHour));
        self.minuteElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : self.config.defaultMinute);
        self.hourElement.step = self.config.hourIncrement.toString();
        self.minuteElement.step = self.config.minuteIncrement.toString();
        self.hourElement.min = self.config.time_24hr ? "0" : "1";
        self.hourElement.max = self.config.time_24hr ? "23" : "12";
        self.minuteElement.min = "0";
        self.minuteElement.max = "59";
        self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = createNumberInput("flatpickr-second");
            self.secondElement = secondInput.childNodes[0];
            self.secondElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : self.config.defaultSeconds);
            self.secondElement.step = self.minuteElement.step;
            self.secondElement.min = self.minuteElement.min;
            self.secondElement.max = self.minuteElement.max;
            self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = createElement("div", "flatpickr-weekdays");
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = self.l10n.weekdays.shorthand.slice();
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
        }
        self.weekdayContainer.innerHTML = "\n    <span class=flatpickr-weekday>\n      " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n    </span>\n    ";
        return self.weekdayContainer;
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers,
        };
    }
    function changeMonth(value, is_offset, animate, from_keyboard) {
        if (is_offset === void 0) { is_offset = true; }
        if (animate === void 0) { animate = self.config.animate; }
        if (from_keyboard === void 0) { from_keyboard = false; }
        var delta = is_offset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow) ||
            (delta > 0 && self._hideNextMonthArrow))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
        }
        buildDays(animate ? delta : undefined);
        if (!animate) {
            triggerEvent("onMonthChange");
            return updateNavigationCurrentMonth();
        }
        var nav = self.navigationCurrentMonth;
        if (delta < 0) {
            while (nav.nextSibling &&
                /curr/.test(nav.nextSibling.className))
                self.monthNav.removeChild(nav.nextSibling);
        }
        else if (delta > 0) {
            while (nav.previousSibling &&
                /curr/.test(nav.previousSibling.className))
                self.monthNav.removeChild(nav.previousSibling);
        }
        self.oldCurMonth = self.navigationCurrentMonth;
        self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);
        var daysContainer = self.daysContainer;
        if (daysContainer.firstChild && daysContainer.lastChild) {
            if (delta > 0) {
                daysContainer.firstChild.classList.add("slideLeft");
                daysContainer.lastChild.classList.add("slideLeftNew");
                self.oldCurMonth.classList.add("slideLeft");
                self.navigationCurrentMonth.classList.add("slideLeftNew");
            }
            else if (delta < 0) {
                daysContainer.firstChild.classList.add("slideRightNew");
                daysContainer.lastChild.classList.add("slideRight");
                self.oldCurMonth.classList.add("slideRight");
                self.navigationCurrentMonth.classList.add("slideRightNew");
            }
        }
        self.currentMonthElement = self.navigationCurrentMonth
            .firstChild;
        self.currentYearElement = self.navigationCurrentMonth.lastChild
            .childNodes[0];
        updateNavigationCurrentMonth();
        if (self.oldCurMonth.firstChild)
            self.oldCurMonth.firstChild.textContent = monthToStr(self.currentMonth - delta, self.config.shorthandCurrentMonth, self.l10n);
        triggerEvent("onMonthChange");
        if (from_keyboard &&
            document.activeElement &&
            document.activeElement.$i) {
            var index_1 = document.activeElement.$i;
            afterDayAnim(function () {
                focusOnDay(index_1, 0);
            });
        }
    }
    function clear(triggerChangeEvent) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        self.input.value = "";
        if (self.altInput)
            self.altInput.value = "";
        if (self.mobileInput)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        self.showTimeInput = false;
        self.redraw();
        if (triggerChangeEvent === true)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            self.calendarContainer.classList.remove("open");
            self._input.classList.remove("active");
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--;) {
            var h = self._handlers[i];
            h.element.removeEventListener(h.event, h.handler);
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode)
            self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
            self.input.value = "";
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach(function (k) {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem))
            return true;
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var isCalendarElement = isCalendarElem(e.target);
            var isInput = e.target === self.input ||
                e.target === self.altInput ||
                self.element.contains(e.target) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            var lostFocus = e.type === "blur"
                ? isInput &&
                    e.relatedTarget &&
                    !isCalendarElem(e.relatedTarget)
                : !isInput && !isCalendarElement;
            if (lostFocus &&
                self.config.ignoredFocusElements.indexOf(e.target) === -1) {
                self.close();
                if (self.config.mode === "range" && self.selectedDates.length === 1) {
                    self.clear(false);
                    self.redraw();
                }
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.currentYearElement.min &&
                newYear < parseInt(self.currentYearElement.min)) ||
            (self.currentYearElement.max &&
                newYear > parseInt(self.currentYearElement.max)))
            return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
        }
    }
    function isEnabled(date, timeless) {
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable.length && !self.config.disable.length)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string" && dateToCheck !== undefined) {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function onKeyDown(e) {
        var isInput = e.target === self._input;
        var calendarElem = isCalendarElem(e.target);
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.key === "Enter" && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, e.target === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                return e.target.blur();
            }
            else
                self.open();
        }
        else if (calendarElem || allowKeydown || allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(e.target);
            switch (e.key) {
                case "Enter":
                    if (isTimeObj)
                        updateValue();
                    else
                        selectDate(e);
                    break;
                case "Escape":
                    e.preventDefault();
                    self.close();
                    break;
                case "Backspace":
                case "Delete":
                    if (isInput && !self.config.allowInput)
                        self.clear();
                    break;
                case "ArrowLeft":
                case "ArrowRight":
                    if (!isTimeObj) {
                        e.preventDefault();
                        if (self.daysContainer) {
                            var delta_1 = e.key === "ArrowRight" ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(e.target.$i, delta_1);
                            else
                                changeMonth(delta_1, true, undefined, true);
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    e.preventDefault();
                    var delta = e.key === "ArrowDown" ? 1 : -1;
                    if (self.daysContainer && e.target.$i !== undefined) {
                        if (e.ctrlKey) {
                            changeYear(self.currentYear - delta);
                            focusOnDay(e.target.$i, 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(e.target.$i, delta * 7);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case "Tab":
                    if (e.target === self.hourElement) {
                        e.preventDefault();
                        self.minuteElement.select();
                    }
                    else if (e.target === self.minuteElement &&
                        (self.secondElement || self.amPM)) {
                        e.preventDefault();
                        if (self.secondElement !== undefined)
                            self.secondElement.focus();
                        else if (self.amPM !== undefined)
                            self.amPM.focus();
                    }
                    else if (e.target === self.secondElement && self.amPM) {
                        e.preventDefault();
                        self.amPM.focus();
                    }
                    break;
                case "a":
                    if (self.amPM !== undefined && e.target === self.amPM) {
                        self.amPM.textContent = "AM";
                        setHoursFromInputs();
                        updateValue();
                    }
                    break;
                case "p":
                    if (self.amPM !== undefined && e.target === self.amPM) {
                        self.amPM.textContent = "PM";
                        setHoursFromInputs();
                        updateValue();
                    }
                    break;
                default:
                    break;
            }
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 ||
            !elem.classList.contains("flatpickr-day") ||
            self.minRangeDate === undefined ||
            self.maxRangeDate === undefined)
            return;
        var hoverDate = elem.dateObj, initialDate = self.parseDate(self.selectedDates[0], undefined, true), rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()), containsDisabled = false;
        for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
            if (!isEnabled(new Date(t))) {
                containsDisabled = true;
                break;
            }
        }
        var _loop_1 = function (timestamp, i) {
            var outOfRange = timestamp < self.minRangeDate.getTime() ||
                timestamp > self.maxRangeDate.getTime(), dayElem = self.days.childNodes[i];
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return "continue";
            }
            else if (containsDisabled && !outOfRange)
                return "continue";
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
            });
            var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate), maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);
            elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");
            if (initialDate < hoverDate && timestamp === initialDate.getTime())
                dayElem.classList.add("startRange");
            else if (initialDate > hoverDate && timestamp === initialDate.getTime())
                dayElem.classList.add("endRange");
            if (timestamp >= minRangeDate && timestamp <= maxRangeDate)
                dayElem.classList.add("inRange");
        };
        for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += duration.DAY) {
            _loop_1(timestamp, i);
        }
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) { positionElement = self._input; }
        if (self.isMobile) {
            if (e) {
                e.preventDefault();
                e.target && e.target.blur();
            }
            setTimeout(function () {
                self.mobileInput !== undefined && self.mobileInput.click();
            }, 0);
            triggerEvent("onOpen");
            return;
        }
        if (self.isOpen || self._input.disabled || self.config.inline)
            return;
        self.isOpen = true;
        self.calendarContainer.classList.add("open");
        positionCalendar(positionElement);
        self._input.classList.add("active");
        triggerEvent("onOpen");
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date));
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        var hooks = [
            "onChange",
            "onClose",
            "onDayCreate",
            "onDestroy",
            "onKeyDown",
            "onMonthChange",
            "onOpen",
            "onParseConfig",
            "onReady",
            "onValueUpdate",
            "onYearChange",
        ];
        self.config = __assign({}, flatpickr.defaultConfig);
        var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
        var formats$$1 = {};
        Object.defineProperty(self.config, "enable", {
            get: function () { return self.config._enable || []; },
            set: function (dates) {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: function () { return self.config._disable || []; },
            set: function (dates) {
                self.config._disable = parseDateRules(dates);
            },
        });
        if (!userConfig.dateFormat && userConfig.enableTime) {
            formats$$1.dateFormat = userConfig.noCalendar
                ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                : flatpickr.defaultConfig.dateFormat +
                    " H:i" +
                    (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
            formats$$1.altFormat = userConfig.noCalendar
                ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                : flatpickr.defaultConfig.altFormat +
                    (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function () { return self.config._minDate; },
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function () { return self.config._maxDate; },
            set: minMaxDateSetter("max"),
        });
        Object.assign(self.config, formats$$1, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        for (var i = hooks.length; i--;) {
            if (self.config[hooks[i]] !== undefined) {
                self.config[hooks[i]] = arrayify(self.config[hooks[i]] || []).map(bindToInstance);
            }
        }
        for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};
            for (var key in pluginConf) {
                if (~hooks.indexOf(key)) {
                    self.config[key] = arrayify(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable.length &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        triggerEvent("onParseConfig");
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            console.warn("flatpickr: invalid locale " + self.config.locale);
        self.l10n = __assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined);
    }
    function positionCalendar(positionElement) {
        if (positionElement === void 0) { positionElement = self._positionElement; }
        if (self.calendarContainer === undefined)
            return;
        var calendarHeight = self.calendarContainer.offsetHeight, calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPos === "above" ||
            (configPos !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        var top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        var left = window.pageXOffset + inputBounds.left;
        var right = window.document.body.offsetWidth - inputBounds.right;
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        }
        else {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        }
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildWeekdays();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function (day) {
            return day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("disabled") &&
                !day.classList.contains("notAllowed");
        };
        var t = findParent(e.target, isSelectable);
        if (t === undefined)
            return;
        var target = t;
        var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2)
                self.clear();
            self.selectedDates.push(selectedDate);
            if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear)
                triggerEvent("onYearChange");
            triggerEvent("onMonthChange");
        }
        buildDays();
        if (self.config.minDate &&
            self.minDateHasTime &&
            self.config.enableTime &&
            compareDates(selectedDate, self.config.minDate) === 0)
            setHoursFromDate(self.config.minDate);
        updateValue();
        if (self.config.enableTime)
            setTimeout(function () { return (self.showTimeInput = true); }, 50);
        if (self.config.mode === "range") {
            if (self.selectedDates.length === 1) {
                onMouseOver(target);
                self._hidePrevMonthArrow =
                    self._hidePrevMonthArrow ||
                        (self.minRangeDate !== undefined &&
                            self.minRangeDate >
                                self.days.childNodes[0].dateObj);
                self._hideNextMonthArrow =
                    self._hideNextMonthArrow ||
                        (self.maxRangeDate !== undefined &&
                            self.maxRangeDate <
                                new Date(self.currentYear, self.currentMonth + 1, 1));
            }
            else
                updateNavigationCurrentMonth();
        }
        triggerEvent("onChange");
        if (!shouldChangeMonth)
            focusOnDay(target.$i, 0);
        else
            afterDayAnim(function () { return self.selectedDateElem && self.selectedDateElem.focus(); });
        if (self.hourElement !== undefined)
            setTimeout(function () { return self.hourElement !== undefined && self.hourElement.select(); }, 451);
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range)
                self.close();
        }
    }
    function set(option, value) {
        if (option !== null && typeof option === "object")
            Object.assign(self.config, option);
        else
            self.config[option] = value;
        self.redraw();
        jumpToDate();
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map(function (d) { return self.parseDate(d, format); });
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split("; ")
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                default:
                    break;
            }
        }
        self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
        self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) { triggerChange = false; }
        if (format === void 0) { format = undefined; }
        if (date !== 0 && !date)
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.showTimeInput = self.selectedDates.length > 0;
        self.latestSelectedDateObj = self.selectedDates[0];
        self.redraw();
        jumpToDate();
        setHoursFromDate();
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .map(function (rule) {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = new Date();
        var preloadedDate = self.config.defaultDate || self.input.value;
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        var initialDate = self.selectedDates.length
            ? self.selectedDates[0]
            : self.config.minDate &&
                self.config.minDate.getTime() > self.now.getTime()
                ? self.config.minDate
                : self.config.maxDate &&
                    self.config.maxDate.getTime() < self.now.getTime()
                    ? self.config.maxDate
                    : self.now;
        self.currentYear = initialDate.getFullYear();
        self.currentMonth = initialDate.getMonth();
        if (self.selectedDates.length)
            self.latestSelectedDateObj = self.selectedDates[0];
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
        Object.defineProperty(self, "showTimeInput", {
            get: function () { return self._showTimeInput; },
            set: function (bool) {
                self._showTimeInput = bool;
                if (self.calendarContainer)
                    toggleClass(self.calendarContainer, "showTimeInput", bool);
                positionCalendar();
            },
        });
    }
    function formatDate(dateObj, frmt) {
        if (self.config !== undefined && self.config.formatDate !== undefined)
            return self.config.formatDate(dateObj, frmt);
        return frmt
            .split("")
            .map(function (c, i, arr) {
            return formats[c] && arr[i - 1] !== "\\"
                ? formats[c](dateObj, self.l10n, self.config)
                : c !== "\\" ? c : "";
        })
            .join("");
    }
    function parseDate(date, givenFormat, timeless) {
        if (date !== 0 && !date)
            return undefined;
        var parsedDate;
        var date_orig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (self.config || flatpickr.defaultConfig).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr))
                parsedDate = new Date(date);
            else if (self.config && self.config.parseDate)
                parsedDate = self.config.parseDate(date, format);
            else {
                parsedDate =
                    !self.config || !self.config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                var matched = void 0, ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (tokenRegex[token] && !escaped) {
                        regexStr += tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                    ops.forEach(function (_a) {
                        var fn = _a.fn, val = _a.val;
                        return (parsedDate =
                            fn(parsedDate, val, self.l10n) || parsedDate);
                    });
                }
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date)) {
            console.warn("flatpickr: invalid date " + date_orig);
            console.info(self.element);
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    }
    function setupInputs() {
        self.input = self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
        if (!self.input) {
            console.warn("Error: invalid input element specified", self.input);
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.type = "text";
            self.input.type = "hidden";
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime
            ? self.config.noCalendar ? "time" : "datetime-local"
            : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.step = self.input.getAttribute("step") || "any";
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date" ? "Y-m-d" : "H:i:S";
        if (self.selectedDates.length) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        self.mobileInput.addEventListener("change", function (e) {
            self.setDate(e.target.value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle() {
        if (self.isOpen)
            return self.close();
        self.open();
    }
    function triggerEvent(event, data) {
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            if (compareDates(self.selectedDates[i], date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return (compareDates(date, self.selectedDates[0]) >= 0 &&
            compareDates(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.currentMonthElement.textContent =
            monthToStr(self.currentMonth, self.config.shorthandCurrentMonth, self.l10n) + " ";
        self.currentYearElement.value = self.currentYear.toString();
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        if (!self.selectedDates.length)
            return self.clear(triggerChange);
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        var joinChar = self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator;
        self.input.value = self.selectedDates
            .map(function (dObj) { return self.formatDate(dObj, self.config.dateFormat); })
            .join(joinChar);
        if (self.altInput !== undefined) {
            self.altInput.value = self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, self.config.altFormat); })
                .join(joinChar);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavScroll(e) {
        e.preventDefault();
        var isYear = self.currentYearElement.parentNode &&
            self.currentYearElement.parentNode.contains(e.target);
        if (e.target === self.currentMonthElement || isYear) {
            var delta = mouseDelta(e);
            if (isYear) {
                changeYear(self.currentYear + delta);
                e.target.value = self.currentYear.toString();
            }
            else
                self.changeMonth(delta, true, false);
        }
    }
    function onMonthNavClick(e) {
        var isPrevMonth = self.prevMonthNav.contains(e.target);
        var isNextMonth = self.nextMonthNav.contains(e.target);
        if (isPrevMonth || isNextMonth)
            changeMonth(isPrevMonth ? -1 : 1);
        else if (e.target === self.currentYearElement) {
            e.preventDefault();
            self.currentYearElement.select();
        }
        else if (e.target.className === "arrowUp")
            self.changeYear(self.currentYear + 1);
        else if (e.target.className === "arrowDown")
            self.changeYear(self.currentYear - 1);
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", input = e.target;
        if (self.amPM !== undefined && e.target === self.amPM)
            self.amPM.textContent =
                self.l10n.amPM[self.amPM.textContent === "AM" ? 1 : 0];
        var min = Number(input.min), max = Number(input.max), step = Number(input.step), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown
                ? e.which === 38 ? 1 : -1
                : Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        int(!isHourElem) +
                        (int(isHourElem) && int(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step))
                self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";
            input.value = pad(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice.call(nodeList);
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.warn(e, e.stack);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr;
flatpickr = function (selector, config) {
    if (selector instanceof NodeList)
        return _flatpickr(selector, config);
    else if (typeof selector === "string")
        return _flatpickr(window.document.querySelectorAll(selector), config);
    return _flatpickr([selector], config);
};
window.flatpickr = flatpickr;
flatpickr.defaultConfig = defaults;
flatpickr.l10ns = {
    en: __assign({}, english),
    default: __assign({}, english),
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = __assign({}, flatpickr.l10ns.default, l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
};
if (typeof jQuery !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
var flatpickr$1 = flatpickr;

return flatpickr$1;

})));


/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flatpickr" }, [
    _c("div", { staticClass: "control has-icons-right" }, [
      _c("input", {
        staticClass: "input control",
        attrs: {
          type: "text",
          placeholder: _vm.placeholder,
          id: "date-input-" + _vm._uid,
          name: _vm.name,
          disabled: _vm.disabled
        },
        domProps: { value: _vm.value }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "icon is-small is-right" }, [
        _vm.timeOnly
          ? _c("i", { staticClass: "fa fa-clock-o" })
          : _c("i", { staticClass: "fa fa-calendar" })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-03ce2c3e", module.exports)
  }
}

/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1117)
/* template */
var __vue_template__ = __webpack_require__(1123)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueFormInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdcc7fda", Component.options)
  } else {
    hotAPI.reload("data-v-fdcc7fda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue__ = __webpack_require__(1118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VueSwitch: __WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue___default.a },

    props: {
        field: {
            type: Object,
            required: true
        },
        hasError: {
            type: Boolean,
            default: false
        }
    }
});

/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1119)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1121)
/* template */
var __vue_template__ = __webpack_require__(1122)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueSwitch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7defd652", Component.options)
  } else {
    hotAPI.reload("data-v-7defd652", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("43e441d2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7defd652\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueSwitch.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7defd652\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueSwitch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.field .vue-switch {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.vue-switch {\n  --height: 1rem;\n  position: relative;\n  border-radius: var(--height);\n  width: calc(1.625 * var(--height));\n  height: var(--height);\n  background-color: #dbdbdb;\n  border: 1px solid #dbdbdb;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.vue-switch input {\n    opacity: 0;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%;\n}\n.vue-switch:before, .vue-switch:after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: calc(var(--height) - 2px);\n    border-radius: var(--height);\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n}\n.vue-switch:before {\n    width: calc(1.625 * var(--height) - 2px);\n    background-color: #dbdbdb;\n}\n.vue-switch:after {\n    width: calc(var(--height) - 2px);\n    background-color: #fff;\n    -webkit-box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n            box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n}\n.vue-switch.checked {\n    border-color: #4a4a4a;\n    background-color: #4a4a4a;\n}\n.vue-switch.checked:before {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n}\n.vue-switch.checked:after {\n      -webkit-transform: translateX(calc(0.625 * var(--height)));\n              transform: translateX(calc(0.625 * var(--height)));\n}\n.vue-switch.is-white.checked {\n    border-color: white;\n    background-color: white;\n}\n.vue-switch.is-white.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed;\n}\n.vue-switch.is-black.checked {\n    border-color: #0a0a0a;\n    background-color: #0a0a0a;\n}\n.vue-switch.is-black.checked.disabled {\n      border-color: #4a4a4a;\n      background-color: #4a4a4a;\n      cursor: not-allowed;\n}\n.vue-switch.is-light.checked {\n    border-color: whitesmoke;\n    background-color: whitesmoke;\n}\n.vue-switch.is-light.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed;\n}\n.vue-switch.is-dark.checked {\n    border-color: #363636;\n    background-color: #363636;\n}\n.vue-switch.is-dark.checked.disabled {\n      border-color: #757575;\n      background-color: #757575;\n      cursor: not-allowed;\n}\n.vue-switch.is-primary.checked {\n    border-color: #00d1b2;\n    background-color: #00d1b2;\n}\n.vue-switch.is-primary.checked.disabled {\n      border-color: #52ffe5;\n      background-color: #52ffe5;\n      cursor: not-allowed;\n}\n.vue-switch.is-link.checked {\n    border-color: #3273dc;\n    background-color: #3273dc;\n}\n.vue-switch.is-link.checked.disabled {\n      border-color: #9fbeef;\n      background-color: #9fbeef;\n      cursor: not-allowed;\n}\n.vue-switch.is-info.checked {\n    border-color: #209cee;\n    background-color: #209cee;\n}\n.vue-switch.is-info.checked.disabled {\n      border-color: #97d1f7;\n      background-color: #97d1f7;\n      cursor: not-allowed;\n}\n.vue-switch.is-success.checked {\n    border-color: #23d160;\n    background-color: #23d160;\n}\n.vue-switch.is-success.checked.disabled {\n      border-color: #89ebab;\n      background-color: #89ebab;\n      cursor: not-allowed;\n}\n.vue-switch.is-warning.checked {\n    border-color: #ffdd57;\n    background-color: #ffdd57;\n}\n.vue-switch.is-warning.checked.disabled {\n      border-color: #fff7d6;\n      background-color: #fff7d6;\n      cursor: not-allowed;\n}\n.vue-switch.is-danger.checked {\n    border-color: #ff3860;\n    background-color: #ff3860;\n}\n.vue-switch.is-danger.checked.disabled {\n      border-color: #ffb8c6;\n      background-color: #ffb8c6;\n      cursor: not-allowed;\n}\n.vue-switch.is-small {\n    --height: 0.75rem;\n}\n.vue-switch.is-medium {\n    --height: 1.25rem;\n}\n.vue-switch.is-large {\n    --height: 1.5rem;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/VueSwitch.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,mBAAmB;CAAE;AAEvB;EACE,eAAe;EACf,mBAAmB;EACnB,6BAA6B;EAC7B,mCAAmC;EACnC,sBAAsB;EACtB,0BAA0B;EAC1B,0BAA0B;EAC1B,gBAAgB;EAChB,4BAAqB;EAArB,4BAAqB;EAArB,qBAAqB;EACrB,uBAAuB;EACvB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CAAE;AAC1B;IACE,WAAW;IACX,4BAAqB;IAArB,4BAAqB;IAArB,qBAAqB;IACrB,YAAY;IACZ,aAAa;CAAE;AACjB;IACE,aAAa;IACb,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,kCAAkC;IAClC,6BAA6B;IAC7B,0BAAkB;IAAlB,kBAAkB;CAAE;AACtB;IACE,yCAAyC;IACzC,0BAA0B;CAAE;AAC9B;IACE,iCAAiC;IACjC,uBAAuB;IACvB,oDAA4C;YAA5C,4CAA4C;CAAE;AAChD;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,4BAAoB;cAApB,oBAAoB;CAAE;AACxB;MACE,2DAAmD;cAAnD,mDAAmD;CAAE;AACzD;IACE,oBAAoB;IACpB,wBAAwB;CAAE;AAC1B;MACE,oBAAoB;MACpB,wBAAwB;MACxB,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,yBAAyB;IACzB,6BAA6B;CAAE;AAC/B;MACE,oBAAoB;MACpB,wBAAwB;MACxB,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,kBAAkB;CAAE;AACtB;IACE,kBAAkB;CAAE;AACtB;IACE,iBAAiB;CAAE","file":"VueSwitch.vue","sourcesContent":[".field .vue-switch {\n  margin-top: 6px;\n  margin-bottom: 6px; }\n\n.vue-switch {\n  --height: 1rem;\n  position: relative;\n  border-radius: var(--height);\n  width: calc(1.625 * var(--height));\n  height: var(--height);\n  background-color: #dbdbdb;\n  border: 1px solid #dbdbdb;\n  cursor: pointer;\n  display: inline-flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center; }\n  .vue-switch input {\n    opacity: 0;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n  .vue-switch:before, .vue-switch:after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: calc(var(--height) - 2px);\n    border-radius: var(--height);\n    transition: 0.25s; }\n  .vue-switch:before {\n    width: calc(1.625 * var(--height) - 2px);\n    background-color: #dbdbdb; }\n  .vue-switch:after {\n    width: calc(var(--height) - 2px);\n    background-color: #fff;\n    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1); }\n  .vue-switch.checked {\n    border-color: #4a4a4a;\n    background-color: #4a4a4a; }\n    .vue-switch.checked:before {\n      transform: scale(0); }\n    .vue-switch.checked:after {\n      transform: translateX(calc(0.625 * var(--height))); }\n  .vue-switch.is-white.checked {\n    border-color: white;\n    background-color: white; }\n    .vue-switch.is-white.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed; }\n  .vue-switch.is-black.checked {\n    border-color: #0a0a0a;\n    background-color: #0a0a0a; }\n    .vue-switch.is-black.checked.disabled {\n      border-color: #4a4a4a;\n      background-color: #4a4a4a;\n      cursor: not-allowed; }\n  .vue-switch.is-light.checked {\n    border-color: whitesmoke;\n    background-color: whitesmoke; }\n    .vue-switch.is-light.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed; }\n  .vue-switch.is-dark.checked {\n    border-color: #363636;\n    background-color: #363636; }\n    .vue-switch.is-dark.checked.disabled {\n      border-color: #757575;\n      background-color: #757575;\n      cursor: not-allowed; }\n  .vue-switch.is-primary.checked {\n    border-color: #00d1b2;\n    background-color: #00d1b2; }\n    .vue-switch.is-primary.checked.disabled {\n      border-color: #52ffe5;\n      background-color: #52ffe5;\n      cursor: not-allowed; }\n  .vue-switch.is-link.checked {\n    border-color: #3273dc;\n    background-color: #3273dc; }\n    .vue-switch.is-link.checked.disabled {\n      border-color: #9fbeef;\n      background-color: #9fbeef;\n      cursor: not-allowed; }\n  .vue-switch.is-info.checked {\n    border-color: #209cee;\n    background-color: #209cee; }\n    .vue-switch.is-info.checked.disabled {\n      border-color: #97d1f7;\n      background-color: #97d1f7;\n      cursor: not-allowed; }\n  .vue-switch.is-success.checked {\n    border-color: #23d160;\n    background-color: #23d160; }\n    .vue-switch.is-success.checked.disabled {\n      border-color: #89ebab;\n      background-color: #89ebab;\n      cursor: not-allowed; }\n  .vue-switch.is-warning.checked {\n    border-color: #ffdd57;\n    background-color: #ffdd57; }\n    .vue-switch.is-warning.checked.disabled {\n      border-color: #fff7d6;\n      background-color: #fff7d6;\n      cursor: not-allowed; }\n  .vue-switch.is-danger.checked {\n    border-color: #ff3860;\n    background-color: #ff3860; }\n    .vue-switch.is-danger.checked.disabled {\n      border-color: #ffb8c6;\n      background-color: #ffb8c6;\n      cursor: not-allowed; }\n  .vue-switch.is-small {\n    --height: 0.75rem; }\n  .vue-switch.is-medium {\n    --height: 1.25rem; }\n  .vue-switch.is-large {\n    --height: 1.5rem; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var sizes = ['is-small', 'is-medium', 'is-large'];
var types = ['is-primary', 'is-warning', 'is-danger', 'is-success', 'is-info'];

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VueSwitch',

    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: null,
            validator: function validator(value) {
                return types.includes(value);
            }
        },
        size: {
            type: String,
            default: null,
            validator: function validator(value) {
                return sizes.includes(value);
            }
        },
        value: {
            type: Boolean,
            required: true
        }
    },

    watch: {
        value: function value(_value) {
            this.checked = _value;
        }
    },

    data: function data() {
        return {
            checked: this.value
        };
    }
});

/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "vue-switch",
      class: [
        _vm.size,
        _vm.type,
        { checked: _vm.value, disabled: _vm.disabled }
      ]
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.checked,
            expression: "checked"
          }
        ],
        staticClass: "checkbox",
        attrs: {
          type: "checkbox",
          disabled: _vm.disabled,
          required: _vm.required
        },
        domProps: {
          checked: _vm.value,
          checked: Array.isArray(_vm.checked)
            ? _vm._i(_vm.checked, null) > -1
            : _vm.checked
        },
        on: {
          change: [
            function($event) {
              var $$a = _vm.checked,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && (_vm.checked = $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                }
              } else {
                _vm.checked = $$c
              }
            },
            function($event) {
              _vm.$emit("input", _vm.checked)
            }
          ]
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7defd652", module.exports)
  }
}

/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _vm.field.meta.content === "text"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "text",
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("i", { staticClass: "fa fa-warning" })]
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "email"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "email",
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("i", { staticClass: "fa fa-warning" })]
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "number"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "number",
                step: _vm.field.meta.step,
                min: _vm.field.meta.min,
                max: _vm.field.meta.max,
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("i", { staticClass: "fa fa-warning" })]
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "checkbox"
      ? _c(
          "span",
          [
            _c("vue-switch", {
              attrs: {
                size: "is-large",
                type: "is-success",
                disabled: _vm.field.meta.disabled || _vm.field.meta.readonly
              },
              on: {
                click: function($event) {
                  _vm.$emit("update")
                }
              },
              model: {
                value: _vm.field.value,
                callback: function($$v) {
                  _vm.$set(_vm.field, "value", $$v)
                },
                expression: "field.value"
              }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fdcc7fda", module.exports)
  }
}

/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.data.icon || _vm.data.title
        ? _c("h5", { staticClass: "title is-5" }, [
            _vm.data.icon
              ? _c("span", { staticClass: "icon" }, [
                  _c("i", { class: _vm.data.icon })
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.data.title
              ? _c("span", [
                  _vm._v(
                    "\n            " + _vm._s(_vm.data.title) + "\n        "
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("hr")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "vue-form",
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.submit()
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "columns is-multiline" },
            _vm._l(_vm.data.fields, function(field) {
              return !field.meta.hidden
                ? _c(
                    "div",
                    {
                      key: field.name,
                      staticClass: "column",
                      class: _vm.columnSize
                    },
                    [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.__(field.label)) +
                              "\n                        "
                          ),
                          _vm.errors.has(field.name)
                            ? _c(
                                "p",
                                {
                                  staticClass: "help is-danger is-pulled-right"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.errors.get(field.name)) +
                                      "\n                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        field.meta.custom
                          ? _c(
                              "span",
                              [
                                _vm._t(field.name, null, {
                                  field: field,
                                  errors: _vm.errors
                                })
                              ],
                              2
                            )
                          : _c(
                              "span",
                              [
                                field.meta.type === "input"
                                  ? _c("vue-form-input", {
                                      attrs: {
                                        field: field,
                                        "has-error": _vm.errors.has(field.name)
                                      },
                                      on: {
                                        update: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "select"
                                  ? _c("vue-select", {
                                      attrs: {
                                        "has-error": _vm.errors.has(field.name),
                                        options: field.meta.options,
                                        "key-map": field.meta.keyMap,
                                        source: field.meta.source,
                                        multiple: field.meta.multiple,
                                        disabled: field.meta.disabled
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "datepicker"
                                  ? _c("datepicker", {
                                      attrs: {
                                        format: field.meta.format,
                                        time: field.meta.time,
                                        disabled: field.meta.disabled
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "timepicker"
                                  ? _c("datepicker", {
                                      attrs: {
                                        format: field.meta.format,
                                        "time-only": "",
                                        disabled: field.meta.disabled
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "textarea"
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "control has-icons-right"
                                      },
                                      [
                                        _c("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: field.value,
                                              expression: "field.value"
                                            }
                                          ],
                                          staticClass: "textarea",
                                          class: {
                                            "is-danger": _vm.errors.has(
                                              field.name
                                            )
                                          },
                                          attrs: {
                                            rows: field.meta.rows,
                                            disabled: field.meta.disabled
                                          },
                                          domProps: { value: field.value },
                                          on: {
                                            input: [
                                              function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  field,
                                                  "value",
                                                  $event.target.value
                                                )
                                              },
                                              function($event) {
                                                _vm.errors.clear(field.name)
                                              }
                                            ]
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.has(field.name)
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "icon is-small is-right has-text-danger"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-warning"
                                                })
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                      ])
                    ]
                  )
                : _vm._e()
            })
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.data.actions.destroy
            ? _c(
                "button",
                {
                  staticClass: "button",
                  class: _vm.data.actions.destroy.button.class,
                  attrs: { disabled: _vm.data.actions.destroy.forbidden },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.showModal = true
                    }
                  }
                },
                [
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm.__(_vm.data.actions.destroy.button.label))
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.destroy.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.create
            ? _c(
                "button",
                {
                  staticClass: "button",
                  class: _vm.data.actions.create.button.class,
                  attrs: { disabled: _vm.data.actions.create.forbidden },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.create()
                    }
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.create.button.label)))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.create.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.store
            ? _c(
                "button",
                {
                  staticClass: "button is-pulled-right",
                  class: [
                    _vm.data.actions.store.button.class,
                    { "is-loading": _vm.loading }
                  ],
                  attrs: {
                    type: "submit",
                    disabled: _vm.data.actions.store.forbidden
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.store.button.label)))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.store.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.update
            ? _c(
                "button",
                {
                  staticClass: "button is-pulled-right",
                  class: [
                    _vm.data.actions.update.button.class,
                    { "is-loading": _vm.loading }
                  ],
                  attrs: {
                    type: "submit",
                    disabled: _vm.data.actions.update.forbidden
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.update.button.label)))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.update.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "is-clearfix" })
        ]
      ),
      _vm._v(" "),
      _vm.data.actions.destroy
        ? _c("modal", {
            attrs: {
              show: _vm.showModal,
              __: _vm.__,
              message: _vm.data.actions.destroy.button.message
            },
            on: {
              "cancel-action": function($event) {
                _vm.showModal = false
              },
              "commit-action": function($event) {
                _vm.destroy()
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b52e927", module.exports)
  }
}

/***/ }),

/***/ 1550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue__ = __webpack_require__(1098);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VueForm: __WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue___default.a },

    data: function data() {
        return {
            initialised: false,
            form: {}
        };
    },
    created: function created() {
        var _this = this;

        axios.get(route(this.$route.name, null, false)).then(function (response) {
            _this.form = response.data.form;
            _this.initialised = true;
        }).catch(function (error) {
            return _this.handleError(error);
        });
    }
});

/***/ }),

/***/ 1551:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns is-centered" }, [
    _c(
      "div",
      { staticClass: "column is-three-quarters" },
      [
        _vm.initialised
          ? _c("vue-form", {
              staticClass: "box animated fadeIn",
              attrs: { data: _vm.form }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9fe9182e", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS90dXRvcmlhbHMvQ3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9zZWxlY3QvVnVlU2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3M/NDQ1MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vc2VsZWN0L1Z1ZVNlbGVjdC52dWU/ZDE1NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9zZWxlY3QvVnVlU2VsZWN0LnZ1ZT8zNWU4Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9zZWxlY3QvVnVlU2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9zZWxlY3QvVnVlU2VsZWN0LnZ1ZT81OGQ1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlPzc3NTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWU/NzRlNCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL2Vuc28vRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWU/MjE5ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWU/Y2E2ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZT9kMDg2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0RhdGVwaWNrZXIudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzP2NhNTIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvRGF0ZXBpY2tlci52dWU/YTY1MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9EYXRlcGlja2VyLnZ1ZT8wZGEyIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9EYXRlcGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0RhdGVwaWNrZXIudnVlP2IxNTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWU/YzQxMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlP2NmNGMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZT85MTc0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm1JbnB1dC52dWU/MTRjMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZT81ZDBmIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS90dXRvcmlhbHMvQ3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS90dXRvcmlhbHMvQ3JlYXRlLnZ1ZT84NGE4Il0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmaWVsZCIsImluY2x1ZGVzIiwiaGFzIiwiVnVlIiwiZGVsZXRlIiwiZm9yRWFjaCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5TTtBQUN6TSwwQkFBeU07QUFDek07QUFDQTtBQUNBO0FBQ0EsNkNBQWlWO0FBQ2pWO0FBQ0EsK0NBQXNMO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM3Q0E7O0FBRUE7QUFDQSxzQ0FBNkw7QUFDN0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUEwRyxrRkFBa0Y7QUFDNUwsbUhBQW1ILGtGQUFrRjtBQUNyTTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FB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SyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLE9BQU8sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxVQUFVLFVBQVUsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sZ0JBQWdCLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLEtBQUssc0JBQXNCLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxhQUFhLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLGlDQUFpQztBQUM5RCwyQkFBMkIsZ0NBQWdDO0FBQzNEO0FBQ0EsK0JBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQSwwQ0FBMEMsNkJBQTZCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQyxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLDhCQUE4QixrQ0FBa0MsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRCxpQ0FBaUMsK0JBQStCO0FBQ2hFLHVDQUF1Qyx1QkFBdUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywyQkFBMkI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxLQUFLO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsa0JBQWtCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0I7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0JBQXNCO0FBQ3BELDZCQUE2Qiw2Q0FBNkM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWEE7O0FBRUE7a0JBR0E7OzBCQUNBOzt5QkFFQTtrQkFFQTtBQUhBO0FBS0E7O0FBQ0E7O2lGQUNBO3VDQUNBO2dDQUNBOztxQ0FDQTs7QUFDQTtBQWZBLEc7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUNBQXFDO0FBQ3pEO0FBQ0E7QUFDQSxPQUFPLDBDQUEwQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DcmVhdGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi05ZmU5MTgyZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NyZWF0ZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vdHV0b3JpYWxzL0NyZWF0ZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOWZlOTE4MmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi05ZmU5MTgyZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vdHV0b3JpYWxzL0NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDEwODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjY0NTIyOWNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXZ1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCIpXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iNjQ1MjI5Y1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9WdWVTZWxlY3QudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVTZWxlY3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iNjQ1MjI5Y1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZVNlbGVjdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3NlbGVjdC9WdWVTZWxlY3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWI2NDUyMjljXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYjY0NTIyOWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3NlbGVjdC9WdWVTZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjkiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWI2NDUyMjljXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjY3MGMxMDU0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iNjQ1MjI5Y1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi92dWUtbXVsdGlzZWxlY3QubWluLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjY0NTIyOWNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYjY0NTIyOWNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmZpZWxkc2V0W2Rpc2FibGVkXSAubXVsdGlzZWxlY3R7cG9pbnRlci1ldmVudHM6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3RfX3NwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MXB4O3RvcDoxcHg7d2lkdGg6NDhweDtoZWlnaHQ6MzVweDtiYWNrZ3JvdW5kOiNmZmY7ZGlzcGxheTpibG9ja1xcbn1cXG4ubXVsdGlzZWxlY3RfX3NwaW5uZXI6YWZ0ZXIsLm11bHRpc2VsZWN0X19zcGlubmVyOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlxcXCJcXFwiO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luOi04cHggMCAwIC04cHg7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOiM0MWI4ODMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoycHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIDFweCB0cmFuc3BhcmVudDtib3gtc2hhZG93OjAgMCAwIDFweCB0cmFuc3BhcmVudFxcbn1cXG4ubXVsdGlzZWxlY3RfX3NwaW5uZXI6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uOmEgMi40cyBjdWJpYy1iZXppZXIoLjQxLC4yNiwuMiwuNjIpO2FuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC40MSwuMjYsLjIsLjYyKTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZVxcbn1cXG4ubXVsdGlzZWxlY3RfX3NwaW5uZXI6YWZ0ZXJ7LXdlYmtpdC1hbmltYXRpb246YSAyLjRzIGN1YmljLWJlemllciguNTEsLjA5LC4yMSwuOCk7YW5pbWF0aW9uOmEgMi40cyBjdWJpYy1iZXppZXIoLjUxLC4wOSwuMjEsLjgpOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlXFxufVxcbi5tdWx0aXNlbGVjdF9fbG9hZGluZy1lbnRlci1hY3RpdmUsLm11bHRpc2VsZWN0X19sb2FkaW5nLWxlYXZlLWFjdGl2ZXstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBlYXNlLWluLW91dDtvcGFjaXR5OjFcXG59XFxuLm11bHRpc2VsZWN0X19sb2FkaW5nLWVudGVyLC5tdWx0aXNlbGVjdF9fbG9hZGluZy1sZWF2ZS1hY3RpdmV7b3BhY2l0eTowXFxufVxcbi5tdWx0aXNlbGVjdCwubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fc2luZ2xle2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7LW1zLXRvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvblxcbn1cXG4ubXVsdGlzZWxlY3R7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6NDBweDt0ZXh0LWFsaWduOmxlZnQ7Y29sb3I6IzM1NDk1ZVxcbn1cXG4ubXVsdGlzZWxlY3QgKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3hcXG59XFxuLm11bHRpc2VsZWN0OmZvY3Vze291dGxpbmU6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3QtLWRpc2FibGVke29wYWNpdHk6LjZcXG59XFxuLm11bHRpc2VsZWN0LS1hY3RpdmV7ei1pbmRleDoxXFxufVxcbi5tdWx0aXNlbGVjdC0tYWN0aXZlOm5vdCgubXVsdGlzZWxlY3QtLWFib3ZlKSAubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0LS1hY3RpdmU6bm90KC5tdWx0aXNlbGVjdC0tYWJvdmUpIC5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0LS1hY3RpdmU6bm90KC5tdWx0aXNlbGVjdC0tYWJvdmUpIC5tdWx0aXNlbGVjdF9fdGFnc3tib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MFxcbn1cXG4ubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX3NlbGVjdHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZylcXG59XFxuLm11bHRpc2VsZWN0LS1hYm92ZS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3QtLWFib3ZlLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3QtLWFib3ZlLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X190YWdze2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowXFxufVxcbi5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0X19zaW5nbGV7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWluLWhlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjIwcHg7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6MCAwIDAgNXB4O3dpZHRoOjEwMCU7LXdlYmtpdC10cmFuc2l0aW9uOmJvcmRlciAuMXMgZWFzZTt0cmFuc2l0aW9uOmJvcmRlciAuMXMgZWFzZTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLWJvdHRvbTo4cHg7dmVydGljYWwtYWxpZ246dG9wXFxufVxcbi5tdWx0aXNlbGVjdF9fdGFnfi5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0X190YWd+Lm11bHRpc2VsZWN0X19zaW5nbGV7d2lkdGg6YXV0b1xcbn1cXG4ubXVsdGlzZWxlY3RfX2lucHV0OmhvdmVyLC5tdWx0aXNlbGVjdF9fc2luZ2xlOmhvdmVye2JvcmRlci1jb2xvcjojY2ZjZmNmXFxufVxcbi5tdWx0aXNlbGVjdF9faW5wdXQ6Zm9jdXMsLm11bHRpc2VsZWN0X19zaW5nbGU6Zm9jdXN7Ym9yZGVyLWNvbG9yOiNhOGE4YTg7b3V0bGluZTpub25lXFxufVxcbi5tdWx0aXNlbGVjdF9fc2luZ2xle3BhZGRpbmctbGVmdDo2cHg7bWFyZ2luLWJvdHRvbTo4cHhcXG59XFxuLm11bHRpc2VsZWN0X190YWdzLXdyYXB7ZGlzcGxheTppbmxpbmVcXG59XFxuLm11bHRpc2VsZWN0X190YWdze21pbi1oZWlnaHQ6NDBweDtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6OHB4IDQwcHggMCA4cHg7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOjFweCBzb2xpZCAjZThlOGU4O2JhY2tncm91bmQ6I2ZmZlxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZ3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjRweCAyNnB4IDRweCAxMHB4O2JvcmRlci1yYWRpdXM6NXB4O21hcmdpbi1yaWdodDoxMHB4O2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MTtiYWNrZ3JvdW5kOiM0MWI4ODM7bWFyZ2luLWJvdHRvbTo1cHg7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjttYXgtd2lkdGg6MTAwJTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzXFxufVxcbi5tdWx0aXNlbGVjdF9fdGFnLWljb257Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLWxlZnQ6N3B4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc3R5bGU6bm9ybWFsO3dpZHRoOjIycHg7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MjJweDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlO2JvcmRlci1yYWRpdXM6NXB4XFxufVxcbi5tdWx0aXNlbGVjdF9fdGFnLWljb246YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEQ3XFxcIjtjb2xvcjojMjY2ZDRkO2ZvbnQtc2l6ZToxNHB4XFxufVxcbi5tdWx0aXNlbGVjdF9fdGFnLWljb246Zm9jdXMsLm11bHRpc2VsZWN0X190YWctaWNvbjpob3ZlcntiYWNrZ3JvdW5kOiMzNjlhNmVcXG59XFxuLm11bHRpc2VsZWN0X190YWctaWNvbjpmb2N1czphZnRlciwubXVsdGlzZWxlY3RfX3RhZy1pY29uOmhvdmVyOmFmdGVye2NvbG9yOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0X19jdXJyZW50e21pbi1oZWlnaHQ6NDBweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzo4cHggMTJweCAwO3BhZGRpbmctcmlnaHQ6MzBweDt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOjFweCBzb2xpZCAjZThlOGU4XFxufVxcbi5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3RfX3NlbGVjdHtsaW5lLWhlaWdodDoxNnB4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO3RleHQtZGVjb3JhdGlvbjpub25lO2N1cnNvcjpwb2ludGVyXFxufVxcbi5tdWx0aXNlbGVjdF9fc2VsZWN0e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjQwcHg7aGVpZ2h0OjM4cHg7cmlnaHQ6MXB4O3RvcDoxcHg7cGFkZGluZzo0cHggOHB4O3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZTt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZVxcbn1cXG4ubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmV7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6MDt0b3A6NjUlO2NvbG9yOiM5OTk7bWFyZ2luLXRvcDo0cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo1cHggNXB4IDA7Ym9yZGVyLWNvbG9yOiM5OTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7Y29udGVudDpcXFwiXFxcIlxcbn1cXG4ubXVsdGlzZWxlY3RfX3BsYWNlaG9sZGVye2NvbG9yOiNhZGFkYWQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWJvdHRvbToxMHB4O3BhZGRpbmctdG9wOjJweFxcbn1cXG4ubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX3BsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlcntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxMDAlO21heC1oZWlnaHQ6MjQwcHg7b3ZlcmZsb3c6YXV0bztib3JkZXI6MXB4IHNvbGlkICNlOGU4ZTg7Ym9yZGVyLXRvcDpub25lO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDt6LWluZGV4OjE7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2hcXG59XFxuLm11bHRpc2VsZWN0X19jb250ZW50e2xpc3Qtc3R5bGU6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjA7bWFyZ2luOjA7bWluLXdpZHRoOjEwMCU7dmVydGljYWwtYWxpZ246dG9wXFxufVxcbi5tdWx0aXNlbGVjdC0tYWJvdmUgLm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXJ7Ym90dG9tOjEwMCU7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b206bm9uZTtib3JkZXItdG9wOjFweCBzb2xpZCAjZThlOGU4XFxufVxcbi5tdWx0aXNlbGVjdF9fY29udGVudDo6d2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmVcXG59XFxuLm11bHRpc2VsZWN0X19lbGVtZW50e2Rpc3BsYXk6YmxvY2tcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb257ZGlzcGxheTpibG9jaztwYWRkaW5nOjEycHg7bWluLWhlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjE2cHg7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06bm9uZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVye3RvcDowO3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7bGluZS1oZWlnaHQ6NDBweDtwYWRkaW5nLXJpZ2h0OjEycHg7cGFkZGluZy1sZWZ0OjIwcHhcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiM0MWI4ODM7b3V0bGluZTpub25lO2NvbG9yOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodDphZnRlcntjb250ZW50OmF0dHIoZGF0YS1zZWxlY3QpO2JhY2tncm91bmQ6IzQxYjg4Mztjb2xvcjojZmZmXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZHtiYWNrZ3JvdW5kOiNmM2YzZjM7Y29sb3I6IzM1NDk1ZTtmb250LXdlaWdodDo3MDBcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkOmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLXNlbGVjdGVkKTtjb2xvcjpzaWx2ZXJcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiNmZjZhNmE7Y29sb3I6I2ZmZlxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWQubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0OmFmdGVye2JhY2tncm91bmQ6I2ZmNmE2YTtjb250ZW50OmF0dHIoZGF0YS1kZXNlbGVjdCk7Y29sb3I6I2ZmZlxcbn1cXG4ubXVsdGlzZWxlY3QtLWRpc2FibGVke2JhY2tncm91bmQ6I2VkZWRlZDtwb2ludGVyLWV2ZW50czpub25lXFxufVxcbi5tdWx0aXNlbGVjdC0tZGlzYWJsZWQgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tZGlzYWJsZWQgLm11bHRpc2VsZWN0X19zZWxlY3QsLm11bHRpc2VsZWN0X19vcHRpb24tLWRpc2FibGVke2JhY2tncm91bmQ6I2VkZWRlZDtjb2xvcjojYTZhNmE2XFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZHtjdXJzb3I6dGV4dDtwb2ludGVyLWV2ZW50czpub25lXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojZGVkZWRlIWltcG9ydGFudFxcbn1cXG4ubXVsdGlzZWxlY3QtZW50ZXItYWN0aXZlLC5tdWx0aXNlbGVjdC1sZWF2ZS1hY3RpdmV7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMTVzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlXFxufVxcbi5tdWx0aXNlbGVjdC1lbnRlciwubXVsdGlzZWxlY3QtbGVhdmUtYWN0aXZle29wYWNpdHk6MFxcbn1cXG4ubXVsdGlzZWxlY3RfX3N0cm9uZ3ttYXJnaW4tYm90dG9tOjhweDtsaW5lLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcFxcbn1cXG5bZGlyPXJ0bF0gLm11bHRpc2VsZWN0e3RleHQtYWxpZ246cmlnaHRcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fc2VsZWN0e3JpZ2h0OmF1dG87bGVmdDoxcHhcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fdGFnc3twYWRkaW5nOjhweCA4cHggMCA0MHB4XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX2NvbnRlbnR7dGV4dC1hbGlnbjpyaWdodFxcbn1cXG5bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19vcHRpb246YWZ0ZXJ7cmlnaHQ6YXV0bztsZWZ0OjBcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fY2xlYXJ7cmlnaHQ6YXV0bztsZWZ0OjEycHhcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fc3Bpbm5lcntyaWdodDphdXRvO2xlZnQ6MXB4XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhe1xcbjAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApXFxufVxcbnRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgydHVybik7dHJhbnNmb3JtOnJvdGF0ZSgydHVybilcXG59XFxufVxcbkBrZXlmcmFtZXMgYXtcXG4wJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKVxcbn1cXG50b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMnR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pXFxufVxcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBLGdDQUFnQyxtQkFBbUI7Q0FBQztBQUFBLHNCQUFzQixrQkFBa0IsVUFBVSxRQUFRLFdBQVcsWUFBWSxnQkFBZ0IsYUFBYTtDQUFDO0FBQUEseURBQXlELGtCQUFrQixXQUFXLFFBQVEsU0FBUyxxQkFBcUIsV0FBVyxZQUFZLG1CQUFtQiw2Q0FBNkMsbUJBQW1CLGlCQUFpQix5Q0FBQSxnQ0FBZ0M7Q0FBQztBQUFBLDZCQUE2QixzREFBQSw4Q0FBOEMsMkNBQUEsa0NBQWtDO0NBQUM7QUFBQSw0QkFBNEIsc0RBQUEsOENBQThDLDJDQUFBLGtDQUFrQztDQUFDO0FBQUEsc0VBQXNFLDJDQUFBLG1DQUFtQyxTQUFTO0NBQUM7QUFBQSwrREFBK0QsU0FBUztDQUFDO0FBQUEsc0RBQXNELG9CQUFvQixlQUFlLDhCQUE4Qix5QkFBeUI7Q0FBQztBQUFBLGFBQWEsK0JBQUEsdUJBQXVCLGNBQWMsa0JBQWtCLFdBQVcsZ0JBQWdCLGdCQUFnQixhQUFhO0NBQUM7QUFBQSxlQUFlLDhCQUFBLHFCQUFxQjtDQUFDO0FBQUEsbUJBQW1CLFlBQVk7Q0FBQztBQUFBLHVCQUF1QixVQUFVO0NBQUM7QUFBQSxxQkFBcUIsU0FBUztDQUFDO0FBQUEsdU1BQXVNLDRC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QUFBQSx1QkFBdUIsZ0JBQWdCO0NBQUM7QUFBQSwrQkFBK0IsV0FBVyxRQUFRO0NBQUM7QUFBQSw2QkFBNkIsc0JBQXNCO0NBQUM7QUFBQSxnQ0FBZ0MsZ0JBQWdCO0NBQUM7QUFBQSxxQ0FBcUMsV0FBVyxNQUFNO0NBQUM7QUFBQSw4QkFBOEIsV0FBVyxTQUFTO0NBQUM7QUFBQSxnQ0FBZ0MsV0FBVyxRQUFRO0NBQUM7QUFBQTtBQUFhLEdBQUcsNEJBQUEsbUJBQW1CO0NBQUM7QUFBQSxHQUFHLGdDQUFBLHVCQUF1QjtDQUFDO0NBQUM7QUFBaEU7QUFBYSxHQUFHLDRCQUFBLG1CQUFtQjtDQUFDO0FBQUEsR0FBRyxnQ0FBQSx1QkFBdUI7Q0FBQztDQUFDXCIsXCJmaWxlXCI6XCJ2dWUtbXVsdGlzZWxlY3QubWluLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJmaWVsZHNldFtkaXNhYmxlZF0gLm11bHRpc2VsZWN0e3BvaW50ZXItZXZlbnRzOm5vbmV9Lm11bHRpc2VsZWN0X19zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjFweDt0b3A6MXB4O3dpZHRoOjQ4cHg7aGVpZ2h0OjM1cHg7YmFja2dyb3VuZDojZmZmO2Rpc3BsYXk6YmxvY2t9Lm11bHRpc2VsZWN0X19zcGlubmVyOmFmdGVyLC5tdWx0aXNlbGVjdF9fc3Bpbm5lcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcXFwiXFxcIjt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbjotOHB4IDAgMCAtOHB4O3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjojNDFiODgzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MnB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHRyYW5zcGFyZW50fS5tdWx0aXNlbGVjdF9fc3Bpbm5lcjpiZWZvcmV7YW5pbWF0aW9uOmEgMi40cyBjdWJpYy1iZXppZXIoLjQxLC4yNiwuMiwuNjIpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9Lm11bHRpc2VsZWN0X19zcGlubmVyOmFmdGVye2FuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC41MSwuMDksLjIxLC44KTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlfS5tdWx0aXNlbGVjdF9fbG9hZGluZy1lbnRlci1hY3RpdmUsLm11bHRpc2VsZWN0X19sb2FkaW5nLWxlYXZlLWFjdGl2ZXt0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O29wYWNpdHk6MX0ubXVsdGlzZWxlY3RfX2xvYWRpbmctZW50ZXIsLm11bHRpc2VsZWN0X19sb2FkaW5nLWxlYXZlLWFjdGl2ZXtvcGFjaXR5OjB9Lm11bHRpc2VsZWN0LC5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0X19zaW5nbGV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTRweDstbXMtdG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9ufS5tdWx0aXNlbGVjdHtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQwcHg7dGV4dC1hbGlnbjpsZWZ0O2NvbG9yOiMzNTQ5NWV9Lm11bHRpc2VsZWN0ICp7Ym94LXNpemluZzpib3JkZXItYm94fS5tdWx0aXNlbGVjdDpmb2N1c3tvdXRsaW5lOm5vbmV9Lm11bHRpc2VsZWN0LS1kaXNhYmxlZHtvcGFjaXR5Oi42fS5tdWx0aXNlbGVjdC0tYWN0aXZle3otaW5kZXg6MX0ubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tYWN0aXZlOm5vdCgubXVsdGlzZWxlY3QtLWFib3ZlKSAubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdC0tYWN0aXZlOm5vdCgubXVsdGlzZWxlY3QtLWFib3ZlKSAubXVsdGlzZWxlY3RfX3RhZ3N7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9Lm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19zZWxlY3R7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0LS1hYm92ZS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0LS1hYm92ZS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fdGFnc3tib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0ubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fc2luZ2xle3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi1oZWlnaHQ6MjBweDtsaW5lLWhlaWdodDoyMHB4O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6I2ZmZjtwYWRkaW5nOjAgMCAwIDVweDt3aWR0aDoxMDAlO3RyYW5zaXRpb246Ym9yZGVyIC4xcyBlYXNlO2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tYm90dG9tOjhweDt2ZXJ0aWNhbC1hbGlnbjp0b3B9Lm11bHRpc2VsZWN0X190YWd+Lm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3RfX3RhZ34ubXVsdGlzZWxlY3RfX3NpbmdsZXt3aWR0aDphdXRvfS5tdWx0aXNlbGVjdF9faW5wdXQ6aG92ZXIsLm11bHRpc2VsZWN0X19zaW5nbGU6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNjZmNmY2Z9Lm11bHRpc2VsZWN0X19pbnB1dDpmb2N1cywubXVsdGlzZWxlY3RfX3NpbmdsZTpmb2N1c3tib3JkZXItY29sb3I6I2E4YThhODtvdXRsaW5lOm5vbmV9Lm11bHRpc2VsZWN0X19zaW5nbGV7cGFkZGluZy1sZWZ0OjZweDttYXJnaW4tYm90dG9tOjhweH0ubXVsdGlzZWxlY3RfX3RhZ3Mtd3JhcHtkaXNwbGF5OmlubGluZX0ubXVsdGlzZWxlY3RfX3RhZ3N7bWluLWhlaWdodDo0MHB4O2Rpc3BsYXk6YmxvY2s7cGFkZGluZzo4cHggNDBweCAwIDhweDtib3JkZXItcmFkaXVzOjVweDtib3JkZXI6MXB4IHNvbGlkICNlOGU4ZTg7YmFja2dyb3VuZDojZmZmfS5tdWx0aXNlbGVjdF9fdGFne3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6NHB4IDI2cHggNHB4IDEwcHg7Ym9yZGVyLXJhZGl1czo1cHg7bWFyZ2luLXJpZ2h0OjEwcHg7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoxO2JhY2tncm91bmQ6IzQxYjg4MzttYXJnaW4tYm90dG9tOjVweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO21heC13aWR0aDoxMDAlO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9Lm11bHRpc2VsZWN0X190YWctaWNvbntjdXJzb3I6cG9pbnRlcjttYXJnaW4tbGVmdDo3cHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWw7d2lkdGg6MjJweDt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoyMnB4O3RyYW5zaXRpb246YWxsIC4ycyBlYXNlO2JvcmRlci1yYWRpdXM6NXB4fS5tdWx0aXNlbGVjdF9fdGFnLWljb246YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEQ3XFxcIjtjb2xvcjojMjY2ZDRkO2ZvbnQtc2l6ZToxNHB4fS5tdWx0aXNlbGVjdF9fdGFnLWljb246Zm9jdXMsLm11bHRpc2VsZWN0X190YWctaWNvbjpob3ZlcntiYWNrZ3JvdW5kOiMzNjlhNmV9Lm11bHRpc2VsZWN0X190YWctaWNvbjpmb2N1czphZnRlciwubXVsdGlzZWxlY3RfX3RhZy1pY29uOmhvdmVyOmFmdGVye2NvbG9yOiNmZmZ9Lm11bHRpc2VsZWN0X19jdXJyZW50e21pbi1oZWlnaHQ6NDBweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzo4cHggMTJweCAwO3BhZGRpbmctcmlnaHQ6MzBweDt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOjFweCBzb2xpZCAjZThlOGU4fS5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3RfX3NlbGVjdHtsaW5lLWhlaWdodDoxNnB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO3RleHQtZGVjb3JhdGlvbjpub25lO2N1cnNvcjpwb2ludGVyfS5tdWx0aXNlbGVjdF9fc2VsZWN0e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjQwcHg7aGVpZ2h0OjM4cHg7cmlnaHQ6MXB4O3RvcDoxcHg7cGFkZGluZzo0cHggOHB4O3RleHQtYWxpZ246Y2VudGVyO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlfS5tdWx0aXNlbGVjdF9fc2VsZWN0OmJlZm9yZXtwb3NpdGlvbjpyZWxhdGl2ZTtyaWdodDowO3RvcDo2NSU7Y29sb3I6Izk5OTttYXJnaW4tdG9wOjRweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjVweCA1cHggMDtib3JkZXItY29sb3I6Izk5OSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtjb250ZW50OlxcXCJcXFwifS5tdWx0aXNlbGVjdF9fcGxhY2Vob2xkZXJ7Y29sb3I6I2FkYWRhZDtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tYm90dG9tOjEwcHg7cGFkZGluZy10b3A6MnB4fS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fcGxhY2Vob2xkZXJ7ZGlzcGxheTpub25lfS5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVye3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZDojZmZmO3dpZHRoOjEwMCU7bWF4LWhlaWdodDoyNDBweDtvdmVyZmxvdzphdXRvO2JvcmRlcjoxcHggc29saWQgI2U4ZThlODtib3JkZXItdG9wOm5vbmU7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NXB4O3otaW5kZXg6MTstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0ubXVsdGlzZWxlY3RfX2NvbnRlbnR7bGlzdC1zdHlsZTpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MDttYXJnaW46MDttaW4td2lkdGg6MTAwJTt2ZXJ0aWNhbC1hbGlnbjp0b3B9Lm11bHRpc2VsZWN0LS1hYm92ZSAubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlcntib3R0b206MTAwJTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjVweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1cHg7Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6MXB4IHNvbGlkICNlOGU4ZTh9Lm11bHRpc2VsZWN0X19jb250ZW50Ojp3ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0ubXVsdGlzZWxlY3RfX2VsZW1lbnR7ZGlzcGxheTpibG9ja30ubXVsdGlzZWxlY3RfX29wdGlvbntkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTJweDttaW4taGVpZ2h0OjQwcHg7bGluZS1oZWlnaHQ6MTZweDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LXRyYW5zZm9ybTpub25lO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXB9Lm11bHRpc2VsZWN0X19vcHRpb246YWZ0ZXJ7dG9wOjA7cmlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtsaW5lLWhlaWdodDo0MHB4O3BhZGRpbmctcmlnaHQ6MTJweDtwYWRkaW5nLWxlZnQ6MjBweH0ubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0e2JhY2tncm91bmQ6IzQxYjg4MztvdXRsaW5lOm5vbmU7Y29sb3I6I2ZmZn0ubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0OmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLXNlbGVjdCk7YmFja2dyb3VuZDojNDFiODgzO2NvbG9yOiNmZmZ9Lm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVke2JhY2tncm91bmQ6I2YzZjNmMztjb2xvcjojMzU0OTVlO2ZvbnQtd2VpZ2h0OjcwMH0ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWQ6YWZ0ZXJ7Y29udGVudDphdHRyKGRhdGEtc2VsZWN0ZWQpO2NvbG9yOnNpbHZlcn0ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWQubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0e2JhY2tncm91bmQ6I2ZmNmE2YTtjb2xvcjojZmZmfS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHQ6YWZ0ZXJ7YmFja2dyb3VuZDojZmY2YTZhO2NvbnRlbnQ6YXR0cihkYXRhLWRlc2VsZWN0KTtjb2xvcjojZmZmfS5tdWx0aXNlbGVjdC0tZGlzYWJsZWR7YmFja2dyb3VuZDojZWRlZGVkO3BvaW50ZXItZXZlbnRzOm5vbmV9Lm11bHRpc2VsZWN0LS1kaXNhYmxlZCAubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0LS1kaXNhYmxlZCAubXVsdGlzZWxlY3RfX3NlbGVjdCwubXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWR7YmFja2dyb3VuZDojZWRlZGVkO2NvbG9yOiNhNmE2YTZ9Lm11bHRpc2VsZWN0X19vcHRpb24tLWRpc2FibGVke2N1cnNvcjp0ZXh0O3BvaW50ZXItZXZlbnRzOm5vbmV9Lm11bHRpc2VsZWN0X19vcHRpb24tLWRpc2FibGVkLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiNkZWRlZGUhaW1wb3J0YW50fS5tdWx0aXNlbGVjdC1lbnRlci1hY3RpdmUsLm11bHRpc2VsZWN0LWxlYXZlLWFjdGl2ZXt0cmFuc2l0aW9uOmFsbCAuMTVzIGVhc2V9Lm11bHRpc2VsZWN0LWVudGVyLC5tdWx0aXNlbGVjdC1sZWF2ZS1hY3RpdmV7b3BhY2l0eTowfS5tdWx0aXNlbGVjdF9fc3Ryb25ne21hcmdpbi1ib3R0b206OHB4O2xpbmUtaGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wfVtkaXI9cnRsXSAubXVsdGlzZWxlY3R7dGV4dC1hbGlnbjpyaWdodH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19zZWxlY3R7cmlnaHQ6YXV0bztsZWZ0OjFweH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X190YWdze3BhZGRpbmc6OHB4IDhweCAwIDQwcHh9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fY29udGVudHt0ZXh0LWFsaWduOnJpZ2h0fVtkaXI9cnRsXSAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlcntyaWdodDphdXRvO2xlZnQ6MH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19jbGVhcntyaWdodDphdXRvO2xlZnQ6MTJweH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19zcGlubmVye3JpZ2h0OmF1dG87bGVmdDoxcHh9QGtleWZyYW1lcyBhezAle3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97dHJhbnNmb3JtOnJvdGF0ZSgydHVybil9fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1iNjQ1MjI5Y1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWI2NDUyMjljXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL1Z1ZVNlbGVjdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjc0NjI5MGIyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWI2NDUyMjljXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL1Z1ZVNlbGVjdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjY0NTIyOWNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vVnVlU2VsZWN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1iNjQ1MjI5Y1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9zZWxlY3QvVnVlU2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdCB7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgbWF4LWhlaWdodDogMzZweDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWdzIHtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBtYXgtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogNHB4IDQwcHggMCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnczpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogI2I1YjViNTtcXG59XFxuLm11bHRpc2VsZWN0Lmhhcy1lcnJvciAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1MDgwMDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWcge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZy1pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCBpbnB1dFt0eXBlPXRleHRdLm11bHRpc2VsZWN0X19pbnB1dCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlciB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbixcXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlciB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdCB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zZWxlY3Q6YmVmb3JlIHtcXG4gIHRvcDogNzAlO1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NwaW5uZXIge1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgd2lkdGg6IDM0cHg7XFxufVxcbnNwYW4ubXVsdGlzZWxlY3RfX3RhZyB7XFxuICBwYWRkaW5nOiA1cHggMjZweCA1cHggMTBweDtcXG59XFxuLm11bHRpc2VsZWN0LCAubXVsdGlzZWxlY3RfX2lucHV0LCAubXVsdGlzZWxlY3RfX3NpbmdsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tdWx0aXNlbGVjdF9fY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMzBweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciwgLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcbiAgdG9wOiAzcHg7XFxuICByaWdodDogMTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vc2VsZWN0L1Z1ZVNlbGVjdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUFFO0FBRXJCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsbUJBQW1CO0NBQUU7QUFDckI7SUFDRSxzQkFBc0I7Q0FBRTtBQUU1QjtFQUNFLDBCQUEwQjtDQUFFO0FBRTlCO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUFFO0FBRXZCO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUFFO0FBRXRCO0VBQ0UseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUFFO0FBRXhCO0VBQ0UsK0JBQStCO0VBQy9CLGdDQUFnQztDQUFFO0FBRXBDOztFQUVFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0NBQUU7QUFFckI7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUFFO0FBRWpCO0VBQ0UsU0FBUztDQUFFO0FBRWI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtDQUFFO0FBRWhCO0VBQ0UsMkJBQTJCO0NBQUU7QUFFL0I7RUFDRSxnQkFBZ0I7Q0FBRTtBQUVwQjtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0NBQUU7QUFFZjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7Q0FBRTtBQUU3QjtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7Q0FBRTtBQUU5QjtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxZQUFZO0NBQUVcIixcImZpbGVcIjpcIlZ1ZVNlbGVjdC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0IHtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBtYXgtaGVpZ2h0OiAzNnB4OyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWdzIHtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBtYXgtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogNHB4IDQwcHggMCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnczpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogI2I1YjViNTsgfVxcblxcbi5tdWx0aXNlbGVjdC5oYXMtZXJyb3IgLm11bHRpc2VsZWN0X190YWdzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNTA4MDA7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZy1pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4OyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgaW5wdXRbdHlwZT10ZXh0XS5tdWx0aXNlbGVjdF9faW5wdXQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlciB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4OyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19vcHRpb24sXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19vcHRpb246YWZ0ZXIge1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWluLWhlaWdodDogMzZweDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fc2VsZWN0IHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4OyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zZWxlY3Q6YmVmb3JlIHtcXG4gIHRvcDogNzAlOyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zcGlubmVyIHtcXG4gIGhlaWdodDogMzRweDtcXG4gIHdpZHRoOiAzNHB4OyB9XFxuXFxuc3Bhbi5tdWx0aXNlbGVjdF9fdGFnIHtcXG4gIHBhZGRpbmc6IDVweCAyNnB4IDVweCAxMHB4OyB9XFxuXFxuLm11bHRpc2VsZWN0LCAubXVsdGlzZWxlY3RfX2lucHV0LCAubXVsdGlzZWxlY3RfX3NpbmdsZSB7XFxuICBmb250LXNpemU6IDE2cHg7IH1cXG5cXG4ubXVsdGlzZWxlY3RfX2NsZWFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3B4O1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICB3aWR0aDogMjJweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTsgfVxcblxcbi5tdWx0aXNlbGVjdF9fY2xlYXI6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi5tdWx0aXNlbGVjdF9fY2xlYXI6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbi5tdWx0aXNlbGVjdF9fY2xlYXI6YWZ0ZXIsIC5tdWx0aXNlbGVjdF9fY2xlYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZDogI2FhYTtcXG4gIHRvcDogM3B4O1xcbiAgcmlnaHQ6IDEwcHg7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYjY0NTIyOWNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vc2VsZWN0L1Z1ZVNlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJ2dWUtc2VsZWN0XCI+XG4gICAgICAgIDxtdWx0aXNlbGVjdCA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtZXJyb3InOiBoYXNFcnJvciB9XCJcbiAgICAgICAgICAgIHNlYXJjaGFibGVcbiAgICAgICAgICAgIGFsbG93LWVtcHR5XG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICA6aW50ZXJuYWwtc2VhcmNoPVwiIWlzU2VydmVyU2lkZVwiXG4gICAgICAgICAgICA6bXVsdGlwbGU9XCJtdWx0aXBsZVwiXG4gICAgICAgICAgICA6dGFnZ2FibGU9XCJ0YWdnYWJsZVwiXG4gICAgICAgICAgICA6Y2xlYXItb24tc2VsZWN0PVwiIW11bHRpcGxlXCJcbiAgICAgICAgICAgIDpjbG9zZS1vbi1zZWxlY3Q9XCIhbXVsdGlwbGVcIlxuICAgICAgICAgICAgOnNlbGVjdC1sYWJlbD1cIl9fKGxhYmVscy5zZWxlY3QpXCJcbiAgICAgICAgICAgIDpkZXNlbGVjdC1sYWJlbD1cIl9fKGxhYmVscy5kZXNlbGVjdClcIlxuICAgICAgICAgICAgOnNlbGVjdGVkLWxhYmVsPVwiX18obGFiZWxzLnNlbGVjdGVkKVwiXG4gICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJfXyhsYWJlbHMucGxhY2Vob2xkZXIpXCJcbiAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICA6b3B0aW9ucy1saW1pdD1cIjEwMFwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cIm9wdGlvbktleXNcIlxuICAgICAgICAgICAgOmN1c3RvbS1sYWJlbD1cImN1c3RvbUxhYmVsXCJcbiAgICAgICAgICAgIEBzZWFyY2gtY2hhbmdlPVwicXVlcnk9JGV2ZW50O2dldE9wdGlvbnMoKVwiXG4gICAgICAgICAgICBAdGFnPVwiJGVtaXQoJ3RhZycsICRldmVudClcIlxuICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50KVwiPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cIm5vUmVzdWx0XCI+XG4gICAgICAgICAgICAgICAge3sgX18obGFiZWxzLm5vUmVzdWx0KSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJvcHRpb25cIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XCIkb3B0aW9ucy5maWx0ZXJzLmhpZ2hsaWdodChvcHRpb25MaXN0W3Byb3BzLm9wdGlvbl0sIHF1ZXJ5KVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImNsZWFyXCIgc2xvdC1zY29wZT1cInByb3BzXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11bHRpc2VsZWN0X19jbGVhclwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJoYXNTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICBAbW91c2Vkb3duLnByZXZlbnQuc3RvcD1cImNsZWFyKClcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvbXVsdGlzZWxlY3Q+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBNdWx0aXNlbGVjdCBmcm9tICd2dWUtbXVsdGlzZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBNdWx0aXNlbGVjdCB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBrZXlNYXA6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtdWx0aXBsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB0YWdnYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBoYXNFcnJvcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHBpdm90UGFyYW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21QYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnUGxlYXNlIGNob29zZScsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogJ1NlbGVjdGVkJyxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6ICdQcmVzcyBlbnRlciB0byBzZWxlY3QnLFxuICAgICAgICAgICAgICAgIGRlc2VsZWN0OiAnUHJlc3MgZW50ZXIgdG8gZGVzZWxlY3QnLFxuICAgICAgICAgICAgICAgIG5vUmVzdWx0OiAnTm8gRWxlbWVudHMgRm91bmQnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgICAgIGlzU2VydmVyU2lkZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZSAhPT0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLm11bHRpcGxlICYmIHRoaXMudmFsdWUubGVuZ3RoKSB8fCAoIXRoaXMubXVsdGlwbGUgJiYgdGhpcy52YWx1ZSAhPT0gbnVsbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbktleXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rZXlNYXAgPT09ICdudW1iZXInXG4gICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbkxpc3QpLm1hcChOdW1iZXIpXG4gICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbkxpc3QpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIGhpZ2hsaWdodChvcHRpb24sIHF1ZXJ5KSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHF1ZXJ5LnNwbGl0KCcgJykuZmlsdGVyKHdvcmQgPT4gd29yZC5sZW5ndGgpLmZvckVhY2goKHdvcmQpID0+IHtcbiAgICAgICAgICAgICAgICBvcHRpb24gPSBvcHRpb24ucmVwbGFjZShuZXcgUmVnRXhwKGAoJHt3b3JkfSlgLCAnZ2knKSwgJzxiPiQxPC9iPicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwaXZvdFBhcmFtczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21QYXJhbXM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRPcHRpb25zID0gZGVib3VuY2UodGhpcy5nZXRPcHRpb25zLCA1MDApO1xuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3B0aW9uTGlzdDogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NlcnZlclNpZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChyb3V0ZSh0aGlzLnNvdXJjZSwgW10sIG51bGwpLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLmdldFBhcmFtcygpLFxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NPcHRpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgICAgIHBpdm90UGFyYW1zOiB0aGlzLnBpdm90UGFyYW1zLFxuICAgICAgICAgICAgICAgIGN1c3RvbVBhcmFtczogdGhpcy5jdXN0b21QYXJhbXMsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzT3B0aW9ucyhyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5ICYmICF0aGlzLnZhbHVlSXNNYXRjaGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlSXNNYXRjaGVkKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbktleXMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24gPT09IHNlbGYudmFsdWUpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbktleXMuZmlsdGVyKG9wdGlvbiA9PlxuICAgICAgICAgICAgICAgIHNlbGYudmFsdWUuZmlsdGVyKHZhbCA9PiB2YWwgPT09IG9wdGlvbikubGVuZ3RoID4gMCkubGVuZ3RoID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9tTGFiZWwob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25MaXN0W29wdGlvbl07XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLm11bHRpcGxlID8gW10gOiBudWxsKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNyYz1cInZ1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCI+PC9zdHlsZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbiAgICAudnVlLXNlbGVjdCAubXVsdGlzZWxlY3Qge1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFncyB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCA0MHB4IDAgNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjYjViNWI1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm11bHRpc2VsZWN0Lmhhcy1lcnJvciAubXVsdGlzZWxlY3RfX3RhZ3Mge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTUwODAwO1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWctaWNvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgaW5wdXRbdHlwZT10ZXh0XS5tdWx0aXNlbGVjdF9faW5wdXQge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbixcbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlciB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmUge1xuICAgICAgICB0b3A6IDcwJTtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NwaW5uZXIge1xuICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgIHdpZHRoOiAzNHB4O1xuICAgIH1cblxuICAgIHNwYW4ubXVsdGlzZWxlY3RfX3RhZyB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAyNnB4IDVweCAxMHB4O1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdCwgLm11bHRpc2VsZWN0X19pbnB1dCwgLm11bHRpc2VsZWN0X19zaW5nbGUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLm11bHRpc2VsZWN0X19jbGVhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdF9fY2xlYXI6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdF9fY2xlYXI6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdF9fY2xlYXI6YWZ0ZXIsIC5tdWx0aXNlbGVjdF9fY2xlYXI6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3NlbGVjdC9WdWVTZWxlY3QudnVlIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5WdWVNdWx0aXNlbGVjdD10KCk6ZS5WdWVNdWx0aXNlbGVjdD10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChuKXtpZihpW25dKXJldHVybiBpW25dLmV4cG9ydHM7dmFyIHM9aVtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChzLmV4cG9ydHMscyxzLmV4cG9ydHMsdCkscy5sPSEwLHMuZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5pPWZ1bmN0aW9uKGUpe3JldHVybiBlfSx0LmQ9ZnVuY3Rpb24oZSxpLG4pe3QubyhlLGkpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6bn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIGk9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChpLFwiYVwiLGkpLGl9LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiL1wiLHQodC5zPTQpfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LGkpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWZ1bmN0aW9uIHMoZSl7cmV0dXJuIDAhPT1lJiYoISghQXJyYXkuaXNBcnJheShlKXx8MCE9PWUubGVuZ3RoKXx8IWUpfWZ1bmN0aW9uIG8oZSx0KXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJ1bmRlZmluZWRcIiksbnVsbD09PWUmJihlPVwibnVsbFwiKSwhMT09PWUmJihlPVwiZmFsc2VcIiksLTEhPT1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHQudHJpbSgpKX1mdW5jdGlvbiBsKGUsdCxpLG4pe3JldHVybiBlLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gbyhuKGUsaSksdCl9KX1mdW5jdGlvbiByKGUpe3JldHVybiBlLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4hZS4kaXNMYWJlbH0pfWZ1bmN0aW9uIGEoZSx0KXtyZXR1cm4gZnVuY3Rpb24oaSl7cmV0dXJuIGkucmVkdWNlKGZ1bmN0aW9uKGksbil7cmV0dXJuIG5bZV0mJm5bZV0ubGVuZ3RoPyhpLnB1c2goeyRncm91cExhYmVsOm5bdF0sJGlzTGFiZWw6ITB9KSxpLmNvbmNhdChuW2VdKSk6aX0sW10pfX1mdW5jdGlvbiB1KGUsdCxpLHMsbyl7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiByLm1hcChmdW5jdGlvbihyKXt2YXIgYTtpZighcltpXSlyZXR1cm4gY29uc29sZS53YXJuKFwiT3B0aW9ucyBwYXNzZWQgdG8gdnVlLW11bHRpc2VsZWN0IGRvIG5vdCBjb250YWluIGdyb3VwcywgZGVzcGl0ZSB0aGUgY29uZmlnLlwiKSxbXTt2YXIgdT1sKHJbaV0sZSx0LG8pO3JldHVybiB1Lmxlbmd0aD8oYT17fSxuKGEscyxyW3NdKSxuKGEsaSx1KSxhKTpbXX0pfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxoPWkoMikscD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19KGgpLGQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PUFycmF5KGUpLGk9MDtpPGU7aSsrKXRbaV09YXJndW1lbnRzW2ldO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdChlKX0sZSl9fTt0LmRlZmF1bHQ9e2RhdGE6ZnVuY3Rpb24oKXtyZXR1cm57c2VhcmNoOlwiXCIsaXNPcGVuOiExLHByZWZmZXJlZE9wZW5EaXJlY3Rpb246XCJiZWxvd1wiLG9wdGltaXplZEhlaWdodDp0aGlzLm1heEhlaWdodCxpbnRlcm5hbFZhbHVlOnRoaXMudmFsdWV8fDA9PT10aGlzLnZhbHVlPygwLHAuZGVmYXVsdCkoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKT90aGlzLnZhbHVlOlt0aGlzLnZhbHVlXSk6W119fSxwcm9wczp7aW50ZXJuYWxTZWFyY2g6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxvcHRpb25zOnt0eXBlOkFycmF5LHJlcXVpcmVkOiEwfSxtdWx0aXBsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LHZhbHVlOnt0eXBlOm51bGwsZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybltdfX0sdHJhY2tCeTp7dHlwZTpTdHJpbmd9LGxhYmVsOnt0eXBlOlN0cmluZ30sc2VhcmNoYWJsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGNsZWFyT25TZWxlY3Q6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxoaWRlU2VsZWN0ZWQ6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxwbGFjZWhvbGRlcjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlNlbGVjdCBvcHRpb25cIn0sYWxsb3dFbXB0eTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LHJlc2V0QWZ0ZXI6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxjbG9zZU9uU2VsZWN0Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sY3VzdG9tTGFiZWw6e3R5cGU6RnVuY3Rpb24sZGVmYXVsdDpmdW5jdGlvbihlLHQpe3JldHVybiBzKGUpP1wiXCI6dD9lW3RdOmV9fSx0YWdnYWJsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LHRhZ1BsYWNlaG9sZGVyOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiUHJlc3MgZW50ZXIgdG8gY3JlYXRlIGEgdGFnXCJ9LHRhZ1Bvc2l0aW9uOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwidG9wXCJ9LG1heDp7dHlwZTpbTnVtYmVyLEJvb2xlYW5dLGRlZmF1bHQ6ITF9LGlkOntkZWZhdWx0Om51bGx9LG9wdGlvbnNMaW1pdDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoxZTN9LGdyb3VwVmFsdWVzOnt0eXBlOlN0cmluZ30sZ3JvdXBMYWJlbDp7dHlwZTpTdHJpbmd9LGJsb2NrS2V5czp7dHlwZTpBcnJheSxkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJuW119fSxwcmVzZXJ2ZVNlYXJjaDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9fSxtb3VudGVkOmZ1bmN0aW9uKCl7dGhpcy5tdWx0aXBsZXx8dGhpcy5jbGVhck9uU2VsZWN0fHxjb25zb2xlLndhcm4oXCJbVnVlLU11bHRpc2VsZWN0IHdhcm5dOiBDbGVhck9uU2VsZWN0IGFuZCBNdWx0aXBsZSBwcm9wcyBjYW7igJl0IGJlIGJvdGggc2V0IHRvIGZhbHNlLlwiKSwhdGhpcy5tdWx0aXBsZSYmdGhpcy5tYXgmJmNvbnNvbGUud2FybihcIltWdWUtTXVsdGlzZWxlY3Qgd2Fybl06IE1heCBwcm9wIHNob3VsZCBub3QgYmUgdXNlZCB3aGVuIHByb3AgTXVsdGlwbGUgZXF1YWxzIGZhbHNlLlwiKX0sY29tcHV0ZWQ6e2ZpbHRlcmVkT3B0aW9uczpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc2VhcmNofHxcIlwiLHQ9ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSxpPXRoaXMub3B0aW9ucy5jb25jYXQoKTtyZXR1cm4gaT10aGlzLmludGVybmFsU2VhcmNoP3RoaXMuZ3JvdXBWYWx1ZXM/dGhpcy5maWx0ZXJBbmRGbGF0KGksdCx0aGlzLmxhYmVsKTpsKGksdCx0aGlzLmxhYmVsLHRoaXMuY3VzdG9tTGFiZWwpOnRoaXMuZ3JvdXBWYWx1ZXM/YSh0aGlzLmdyb3VwVmFsdWVzLHRoaXMuZ3JvdXBMYWJlbCkoaSk6aSxpPXRoaXMuaGlkZVNlbGVjdGVkP2kuZmlsdGVyKHRoaXMuaXNOb3RTZWxlY3RlZCk6aSx0aGlzLnRhZ2dhYmxlJiZ0Lmxlbmd0aCYmIXRoaXMuaXNFeGlzdGluZ09wdGlvbih0KSYmKFwiYm90dG9tXCI9PT10aGlzLnRhZ1Bvc2l0aW9uP2kucHVzaCh7aXNUYWc6ITAsbGFiZWw6ZX0pOmkudW5zaGlmdCh7aXNUYWc6ITAsbGFiZWw6ZX0pKSxpLnNsaWNlKDAsdGhpcy5vcHRpb25zTGltaXQpfSx2YWx1ZUtleXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0aGlzLnRyYWNrQnk/dGhpcy5pbnRlcm5hbFZhbHVlLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdFtlLnRyYWNrQnldfSk6dGhpcy5pbnRlcm5hbFZhbHVlfSxvcHRpb25LZXlzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4odGhpcy5ncm91cFZhbHVlcz90aGlzLmZsYXRBbmRTdHJpcCh0aGlzLm9wdGlvbnMpOnRoaXMub3B0aW9ucykubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBlLmN1c3RvbUxhYmVsKHQsZS5sYWJlbCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpfSl9LGN1cnJlbnRPcHRpb25MYWJlbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm11bHRpcGxlP3RoaXMuc2VhcmNoYWJsZT9cIlwiOnRoaXMucGxhY2Vob2xkZXI6dGhpcy5pbnRlcm5hbFZhbHVlLmxlbmd0aD90aGlzLmdldE9wdGlvbkxhYmVsKHRoaXMuaW50ZXJuYWxWYWx1ZVswXSk6dGhpcy5zZWFyY2hhYmxlP1wiXCI6dGhpcy5wbGFjZWhvbGRlcn19LHdhdGNoOntpbnRlcm5hbFZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5yZXNldEFmdGVyJiZ0aGlzLmludGVybmFsVmFsdWUubGVuZ3RoJiYodGhpcy5zZWFyY2g9XCJcIix0aGlzLmludGVybmFsVmFsdWU9W10pfSxzZWFyY2g6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwic2VhcmNoLWNoYW5nZVwiLHRoaXMuc2VhcmNoLHRoaXMuaWQpfSx2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmludGVybmFsVmFsdWU9dGhpcy5nZXRJbnRlcm5hbFZhbHVlKGUpfX0sbWV0aG9kczp7Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tdWx0aXBsZT8oMCxwLmRlZmF1bHQpKHRoaXMuaW50ZXJuYWxWYWx1ZSk6MD09PXRoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGg/bnVsbDooMCxwLmRlZmF1bHQpKHRoaXMuaW50ZXJuYWxWYWx1ZVswXSl9LGdldEludGVybmFsVmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lfHx2b2lkIDA9PT1lP1tdOnRoaXMubXVsdGlwbGU/KDAscC5kZWZhdWx0KShlKTooMCxwLmRlZmF1bHQpKFtlXSl9LGZpbHRlckFuZEZsYXQ6ZnVuY3Rpb24oZSx0LGkpe3JldHVybiBkKHUodCxpLHRoaXMuZ3JvdXBWYWx1ZXMsdGhpcy5ncm91cExhYmVsLHRoaXMuY3VzdG9tTGFiZWwpLGEodGhpcy5ncm91cFZhbHVlcyx0aGlzLmdyb3VwTGFiZWwpKShlKX0sZmxhdEFuZFN0cmlwOmZ1bmN0aW9uKGUpe3JldHVybiBkKGEodGhpcy5ncm91cFZhbHVlcyx0aGlzLmdyb3VwTGFiZWwpLHIpKGUpfSx1cGRhdGVTZWFyY2g6ZnVuY3Rpb24oZSl7dGhpcy5zZWFyY2g9ZX0saXNFeGlzdGluZ09wdGlvbjpmdW5jdGlvbihlKXtyZXR1cm4hIXRoaXMub3B0aW9ucyYmdGhpcy5vcHRpb25LZXlzLmluZGV4T2YoZSk+LTF9LGlzU2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy50cmFja0J5P2VbdGhpcy50cmFja0J5XTplO3JldHVybiB0aGlzLnZhbHVlS2V5cy5pbmRleE9mKHQpPi0xfSxpc05vdFNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiF0aGlzLmlzU2VsZWN0ZWQoZSl9LGdldE9wdGlvbkxhYmVsOmZ1bmN0aW9uKGUpe2lmKHMoZSkpcmV0dXJuXCJcIjtpZihlLmlzVGFnKXJldHVybiBlLmxhYmVsO2lmKGUuJGlzTGFiZWwpcmV0dXJuIGUuJGdyb3VwTGFiZWw7dmFyIHQ9dGhpcy5jdXN0b21MYWJlbChlLHRoaXMubGFiZWwpO3JldHVybiBzKHQpP1wiXCI6dH0sc2VsZWN0OmZ1bmN0aW9uKGUsdCl7aWYoISgtMSE9PXRoaXMuYmxvY2tLZXlzLmluZGV4T2YodCl8fHRoaXMuZGlzYWJsZWR8fGUuJGlzTGFiZWx8fGUuJGlzRGlzYWJsZWQpJiYoIXRoaXMubWF4fHwhdGhpcy5tdWx0aXBsZXx8dGhpcy5pbnRlcm5hbFZhbHVlLmxlbmd0aCE9PXRoaXMubWF4KSYmKFwiVGFiXCIhPT10fHx0aGlzLnBvaW50ZXJEaXJ0eSkpe2lmKGUuaXNUYWcpdGhpcy4kZW1pdChcInRhZ1wiLGUubGFiZWwsdGhpcy5pZCksdGhpcy5zZWFyY2g9XCJcIix0aGlzLmNsb3NlT25TZWxlY3QmJiF0aGlzLm11bHRpcGxlJiZ0aGlzLmRlYWN0aXZhdGUoKTtlbHNle2lmKHRoaXMuaXNTZWxlY3RlZChlKSlyZXR1cm4gdm9pZChcIlRhYlwiIT09dCYmdGhpcy5yZW1vdmVFbGVtZW50KGUpKTt0aGlzLm11bHRpcGxlP3RoaXMuaW50ZXJuYWxWYWx1ZS5wdXNoKGUpOnRoaXMuaW50ZXJuYWxWYWx1ZT1bZV0sdGhpcy4kZW1pdChcInNlbGVjdFwiLCgwLHAuZGVmYXVsdCkoZSksdGhpcy5pZCksdGhpcy4kZW1pdChcImlucHV0XCIsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuaWQpLHRoaXMuY2xlYXJPblNlbGVjdCYmKHRoaXMuc2VhcmNoPVwiXCIpfXRoaXMuY2xvc2VPblNlbGVjdCYmdGhpcy5kZWFjdGl2YXRlKCl9fSxyZW1vdmVFbGVtZW50OmZ1bmN0aW9uKGUpe3ZhciB0PSEoYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0pfHxhcmd1bWVudHNbMV07aWYoIXRoaXMuZGlzYWJsZWQpe2lmKCF0aGlzLmFsbG93RW1wdHkmJnRoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGg8PTEpcmV0dXJuIHZvaWQgdGhpcy5kZWFjdGl2YXRlKCk7dmFyIGk9XCJvYmplY3RcIj09PSh2b2lkIDA9PT1lP1widW5kZWZpbmVkXCI6YyhlKSk/dGhpcy52YWx1ZUtleXMuaW5kZXhPZihlW3RoaXMudHJhY2tCeV0pOnRoaXMudmFsdWVLZXlzLmluZGV4T2YoZSk7dGhpcy5pbnRlcm5hbFZhbHVlLnNwbGljZShpLDEpLHRoaXMuJGVtaXQoXCJpbnB1dFwiLHRoaXMuZ2V0VmFsdWUoKSx0aGlzLmlkKSx0aGlzLiRlbWl0KFwicmVtb3ZlXCIsKDAscC5kZWZhdWx0KShlKSx0aGlzLmlkKSx0aGlzLmNsb3NlT25TZWxlY3QmJnQmJnRoaXMuZGVhY3RpdmF0ZSgpfX0scmVtb3ZlTGFzdEVsZW1lbnQ6ZnVuY3Rpb24oKXstMT09PXRoaXMuYmxvY2tLZXlzLmluZGV4T2YoXCJEZWxldGVcIikmJjA9PT10aGlzLnNlYXJjaC5sZW5ndGgmJkFycmF5LmlzQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKSYmdGhpcy5yZW1vdmVFbGVtZW50KHRoaXMuaW50ZXJuYWxWYWx1ZVt0aGlzLmludGVybmFsVmFsdWUubGVuZ3RoLTFdLCExKX0sYWN0aXZhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuaXNPcGVufHx0aGlzLmRpc2FibGVkfHwodGhpcy5hZGp1c3RQb3NpdGlvbigpLHRoaXMuZ3JvdXBWYWx1ZXMmJjA9PT10aGlzLnBvaW50ZXImJnRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCYmKHRoaXMucG9pbnRlcj0xKSx0aGlzLmlzT3Blbj0hMCx0aGlzLnNlYXJjaGFibGU/KHRoaXMucHJlc2VydmVTZWFyY2h8fCh0aGlzLnNlYXJjaD1cIlwiKSx0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpe3JldHVybiBlLiRyZWZzLnNlYXJjaC5mb2N1cygpfSkpOnRoaXMuJGVsLmZvY3VzKCksdGhpcy4kZW1pdChcIm9wZW5cIix0aGlzLmlkKSl9LGRlYWN0aXZhdGU6ZnVuY3Rpb24oKXt0aGlzLmlzT3BlbiYmKHRoaXMuaXNPcGVuPSExLHRoaXMuc2VhcmNoYWJsZT90aGlzLiRyZWZzLnNlYXJjaC5ibHVyKCk6dGhpcy4kZWwuYmx1cigpLHRoaXMucHJlc2VydmVTZWFyY2h8fCh0aGlzLnNlYXJjaD1cIlwiKSx0aGlzLiRlbWl0KFwiY2xvc2VcIix0aGlzLmdldFZhbHVlKCksdGhpcy5pZCkpfSx0b2dnbGU6ZnVuY3Rpb24oKXt0aGlzLmlzT3Blbj90aGlzLmRlYWN0aXZhdGUoKTp0aGlzLmFjdGl2YXRlKCl9LGFkanVzdFBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7dmFyIGU9dGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLHQ9d2luZG93LmlubmVySGVpZ2h0LXRoaXMuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTt0PnRoaXMubWF4SGVpZ2h0fHx0PmV8fFwiYmVsb3dcIj09PXRoaXMub3BlbkRpcmVjdGlvbnx8XCJib3R0b21cIj09PXRoaXMub3BlbkRpcmVjdGlvbj8odGhpcy5wcmVmZmVyZWRPcGVuRGlyZWN0aW9uPVwiYmVsb3dcIix0aGlzLm9wdGltaXplZEhlaWdodD1NYXRoLm1pbih0LTQwLHRoaXMubWF4SGVpZ2h0KSk6KHRoaXMucHJlZmZlcmVkT3BlbkRpcmVjdGlvbj1cImFib3ZlXCIsdGhpcy5vcHRpbWl6ZWRIZWlnaHQ9TWF0aC5taW4oZS00MCx0aGlzLm1heEhlaWdodCkpfX19fX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVmYXVsdD17ZGF0YTpmdW5jdGlvbigpe3JldHVybntwb2ludGVyOjAscG9pbnRlckRpcnR5OiExfX0scHJvcHM6e3Nob3dQb2ludGVyOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sb3B0aW9uSGVpZ2h0Ont0eXBlOk51bWJlcixkZWZhdWx0OjQwfX0sY29tcHV0ZWQ6e3BvaW50ZXJQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBvaW50ZXIqdGhpcy5vcHRpb25IZWlnaHR9LHZpc2libGVFbGVtZW50czpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGltaXplZEhlaWdodC90aGlzLm9wdGlvbkhlaWdodH19LHdhdGNoOntmaWx0ZXJlZE9wdGlvbnM6ZnVuY3Rpb24oKXt0aGlzLnBvaW50ZXJBZGp1c3QoKX0saXNPcGVuOmZ1bmN0aW9uKCl7dGhpcy5wb2ludGVyRGlydHk9ITF9fSxtZXRob2RzOntvcHRpb25IaWdobGlnaHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm57XCJtdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHRcIjplPT09dGhpcy5wb2ludGVyJiZ0aGlzLnNob3dQb2ludGVyLFwibXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWRcIjp0aGlzLmlzU2VsZWN0ZWQodCl9fSxhZGRQb2ludGVyRWxlbWVudDpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcIkVudGVyXCIsdD1lLmtleTt0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGg+MCYmdGhpcy5zZWxlY3QodGhpcy5maWx0ZXJlZE9wdGlvbnNbdGhpcy5wb2ludGVyXSx0KSx0aGlzLnBvaW50ZXJSZXNldCgpfSxwb2ludGVyRm9yd2FyZDpmdW5jdGlvbigpe3RoaXMucG9pbnRlcjx0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgtMSYmKHRoaXMucG9pbnRlcisrLHRoaXMuJHJlZnMubGlzdC5zY3JvbGxUb3A8PXRoaXMucG9pbnRlclBvc2l0aW9uLSh0aGlzLnZpc2libGVFbGVtZW50cy0xKSp0aGlzLm9wdGlvbkhlaWdodCYmKHRoaXMuJHJlZnMubGlzdC5zY3JvbGxUb3A9dGhpcy5wb2ludGVyUG9zaXRpb24tKHRoaXMudmlzaWJsZUVsZW1lbnRzLTEpKnRoaXMub3B0aW9uSGVpZ2h0KSx0aGlzLmZpbHRlcmVkT3B0aW9uc1t0aGlzLnBvaW50ZXJdLiRpc0xhYmVsJiZ0aGlzLnBvaW50ZXJGb3J3YXJkKCkpLHRoaXMucG9pbnRlckRpcnR5PSEwfSxwb2ludGVyQmFja3dhcmQ6ZnVuY3Rpb24oKXt0aGlzLnBvaW50ZXI+MD8odGhpcy5wb2ludGVyLS0sdGhpcy4kcmVmcy5saXN0LnNjcm9sbFRvcD49dGhpcy5wb2ludGVyUG9zaXRpb24mJih0aGlzLiRyZWZzLmxpc3Quc2Nyb2xsVG9wPXRoaXMucG9pbnRlclBvc2l0aW9uKSx0aGlzLmZpbHRlcmVkT3B0aW9uc1t0aGlzLnBvaW50ZXJdLiRpc0xhYmVsJiZ0aGlzLnBvaW50ZXJCYWNrd2FyZCgpKTp0aGlzLmZpbHRlcmVkT3B0aW9uc1swXS4kaXNMYWJlbCYmdGhpcy5wb2ludGVyRm9yd2FyZCgpLHRoaXMucG9pbnRlckRpcnR5PSEwfSxwb2ludGVyUmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLmNsb3NlT25TZWxlY3QmJih0aGlzLnBvaW50ZXI9MCx0aGlzLiRyZWZzLmxpc3QmJih0aGlzLiRyZWZzLmxpc3Quc2Nyb2xsVG9wPTApKX0scG9pbnRlckFkanVzdDpmdW5jdGlvbigpe3RoaXMucG9pbnRlcj49dGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoLTEmJih0aGlzLnBvaW50ZXI9dGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoP3RoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aC0xOjApfSxwb2ludGVyU2V0OmZ1bmN0aW9uKGUpe3RoaXMucG9pbnRlcj1lLHRoaXMucG9pbnRlckRpcnR5PSEwfX19fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlLm1hcChuKTtpZihlJiZcIm9iamVjdFwiPT09KHZvaWQgMD09PWU/XCJ1bmRlZmluZWRcIjpzKGUpKSl7Zm9yKHZhciB0PXt9LGk9T2JqZWN0LmtleXMoZSksbz0wLGw9aS5sZW5ndGg7bzxsO28rKyl7dmFyIHI9aVtvXTt0W3JdPW4oZVtyXSl9cmV0dXJuIHR9cmV0dXJuIGV9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX07dC5kZWZhdWx0PW59LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe2koNil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9aSg1KSxvPWkubihzKSxsPWkoOCkscj1pKDcpLGE9bix1PXIoby5hLGwuYSwhMSxhLG51bGwsbnVsbCk7dC5kZWZhdWx0PXUuZXhwb3J0c30sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVlcENsb25lPXQucG9pbnRlck1peGluPXQubXVsdGlzZWxlY3RNaXhpbj10Lk11bHRpc2VsZWN0PXZvaWQgMDt2YXIgcz1pKDMpLG89bihzKSxsPWkoMCkscj1uKGwpLGE9aSgxKSx1PW4oYSksYz1pKDIpLGg9bihjKTt0LmRlZmF1bHQ9by5kZWZhdWx0LHQuTXVsdGlzZWxlY3Q9by5kZWZhdWx0LHQubXVsdGlzZWxlY3RNaXhpbj1yLmRlZmF1bHQsdC5wb2ludGVyTWl4aW49dS5kZWZhdWx0LHQuZGVlcENsb25lPWguZGVmYXVsdH0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPWkoMCksbz1uKHMpLGw9aSgxKSxyPW4obCk7dC5kZWZhdWx0PXtuYW1lOlwidnVlLW11bHRpc2VsZWN0XCIsbWl4aW5zOltvLmRlZmF1bHQsci5kZWZhdWx0XSxwcm9wczp7bmFtZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSxzZWxlY3RMYWJlbDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlByZXNzIGVudGVyIHRvIHNlbGVjdFwifSxzZWxlY3RlZExhYmVsOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiU2VsZWN0ZWRcIn0sZGVzZWxlY3RMYWJlbDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlByZXNzIGVudGVyIHRvIHJlbW92ZVwifSxzaG93TGFiZWxzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sbGltaXQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6OTk5OTl9LG1heEhlaWdodDp7dHlwZTpOdW1iZXIsZGVmYXVsdDozMDB9LGxpbWl0VGV4dDp7dHlwZTpGdW5jdGlvbixkZWZhdWx0OmZ1bmN0aW9uKGUpe3JldHVyblwiYW5kIFwiK2UrXCIgbW9yZVwifX0sbG9hZGluZzp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGRpc2FibGVkOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sb3BlbkRpcmVjdGlvbjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSxzaG93Tm9SZXN1bHRzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sdGFiaW5kZXg6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MH19LGNvbXB1dGVkOnt2aXNpYmxlVmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tdWx0aXBsZT90aGlzLmludGVybmFsVmFsdWUuc2xpY2UoMCx0aGlzLmxpbWl0KTpbXX0sZGVzZWxlY3RMYWJlbFRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zaG93TGFiZWxzP3RoaXMuZGVzZWxlY3RMYWJlbDpcIlwifSxzZWxlY3RMYWJlbFRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zaG93TGFiZWxzP3RoaXMuc2VsZWN0TGFiZWw6XCJcIn0sc2VsZWN0ZWRMYWJlbFRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zaG93TGFiZWxzP3RoaXMuc2VsZWN0ZWRMYWJlbDpcIlwifSxpbnB1dFN0eWxlOmZ1bmN0aW9uKCl7aWYodGhpcy5tdWx0aXBsZSYmdGhpcy52YWx1ZSYmdGhpcy52YWx1ZS5sZW5ndGgpcmV0dXJuIHRoaXMuaXNPcGVuP3t3aWR0aDpcImF1dG9cIn06e3dpZHRoOlwiMFwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19LGNvbnRlbnRTdHlsZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMubGVuZ3RoP3tkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9OntkaXNwbGF5OlwiYmxvY2tcIn19LGlzQWJvdmU6ZnVuY3Rpb24oKXtyZXR1cm5cImFib3ZlXCI9PT10aGlzLm9wZW5EaXJlY3Rpb258fFwidG9wXCI9PT10aGlzLm9wZW5EaXJlY3Rpb258fFwiYmVsb3dcIiE9PXRoaXMub3BlbkRpcmVjdGlvbiYmXCJib3R0b21cIiE9PXRoaXMub3BlbkRpcmVjdGlvbiYmXCJhYm92ZVwiPT09dGhpcy5wcmVmZmVyZWRPcGVuRGlyZWN0aW9ufX19fSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LGksbixzLG8pe3ZhciBsLHI9ZT1lfHx7fSxhPXR5cGVvZiBlLmRlZmF1bHQ7XCJvYmplY3RcIiE9PWEmJlwiZnVuY3Rpb25cIiE9PWF8fChsPWUscj1lLmRlZmF1bHQpO3ZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHI/ci5vcHRpb25zOnI7dCYmKHUucmVuZGVyPXQucmVuZGVyLHUuc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zLHUuX2NvbXBpbGVkPSEwKSxpJiYodS5mdW5jdGlvbmFsPSEwKSxzJiYodS5fc2NvcGVJZD1zKTt2YXIgYztpZihvPyhjPWZ1bmN0aW9uKGUpe2U9ZXx8dGhpcy4kdm5vZGUmJnRoaXMuJHZub2RlLnNzckNvbnRleHR8fHRoaXMucGFyZW50JiZ0aGlzLnBhcmVudC4kdm5vZGUmJnRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0LGV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9ffHwoZT1fX1ZVRV9TU1JfQ09OVEVYVF9fKSxuJiZuLmNhbGwodGhpcyxlKSxlJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cyYmZS5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG8pfSx1Ll9zc3JSZWdpc3Rlcj1jKTpuJiYoYz1uKSxjKXt2YXIgaD11LmZ1bmN0aW9uYWwscD1oP3UucmVuZGVyOnUuYmVmb3JlQ3JlYXRlO2g/KHUuX2luamVjdFN0eWxlcz1jLHUucmVuZGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGMuY2FsbCh0KSxwKGUsdCl9KTp1LmJlZm9yZUNyZWF0ZT1wP1tdLmNvbmNhdChwLGMpOltjXX1yZXR1cm57ZXNNb2R1bGU6bCxleHBvcnRzOnIsb3B0aW9uczp1fX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LGk9ZS5fc2VsZi5fY3x8dDtyZXR1cm4gaShcImRpdlwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0XCIsY2xhc3M6e1wibXVsdGlzZWxlY3QtLWFjdGl2ZVwiOmUuaXNPcGVuLFwibXVsdGlzZWxlY3QtLWRpc2FibGVkXCI6ZS5kaXNhYmxlZCxcIm11bHRpc2VsZWN0LS1hYm92ZVwiOmUuaXNBYm92ZX0sYXR0cnM6e3RhYmluZGV4OmUuc2VhcmNoYWJsZT8tMTplLnRhYmluZGV4fSxvbjp7Zm9jdXM6ZnVuY3Rpb24odCl7ZS5hY3RpdmF0ZSgpfSxibHVyOmZ1bmN0aW9uKHQpeyFlLnNlYXJjaGFibGUmJmUuZGVhY3RpdmF0ZSgpfSxrZXlkb3duOltmdW5jdGlvbih0KXtyZXR1cm5cImJ1dHRvblwiaW4gdHx8IWUuX2sodC5rZXlDb2RlLFwiZG93blwiLDQwLHQua2V5KT90LnRhcmdldCE9PXQuY3VycmVudFRhcmdldD9udWxsOih0LnByZXZlbnREZWZhdWx0KCksdm9pZCBlLnBvaW50ZXJGb3J3YXJkKCkpOm51bGx9LGZ1bmN0aW9uKHQpe3JldHVyblwiYnV0dG9uXCJpbiB0fHwhZS5fayh0LmtleUNvZGUsXCJ1cFwiLDM4LHQua2V5KT90LnRhcmdldCE9PXQuY3VycmVudFRhcmdldD9udWxsOih0LnByZXZlbnREZWZhdWx0KCksdm9pZCBlLnBvaW50ZXJCYWNrd2FyZCgpKTpudWxsfSxmdW5jdGlvbih0KXtyZXR1cm5cImJ1dHRvblwiaW4gdHx8IWUuX2sodC5rZXlDb2RlLFwiZW50ZXJcIiwxMyx0LmtleSl8fCFlLl9rKHQua2V5Q29kZSxcInRhYlwiLDksdC5rZXkpPyh0LnN0b3BQcm9wYWdhdGlvbigpLHQudGFyZ2V0IT09dC5jdXJyZW50VGFyZ2V0P251bGw6dm9pZCBlLmFkZFBvaW50ZXJFbGVtZW50KHQpKTpudWxsfV0sa2V5dXA6ZnVuY3Rpb24odCl7aWYoIShcImJ1dHRvblwiaW4gdCkmJmUuX2sodC5rZXlDb2RlLFwiZXNjXCIsMjcsdC5rZXkpKXJldHVybiBudWxsO2UuZGVhY3RpdmF0ZSgpfX19LFtlLl90KFwiY2FyZXRcIixbaShcImRpdlwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19zZWxlY3RcIixvbjp7bW91c2Vkb3duOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLGUudG9nZ2xlKCl9fX0pXSx7dG9nZ2xlOmUudG9nZ2xlfSksZS5fdihcIiBcIiksZS5fdChcImNsZWFyXCIsbnVsbCx7c2VhcmNoOmUuc2VhcmNofSksZS5fdihcIiBcIiksaShcImRpdlwiLHtyZWY6XCJ0YWdzXCIsc3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fdGFnc1wifSxbaShcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZS52aXNpYmxlVmFsdWUubGVuZ3RoPjAsZXhwcmVzc2lvbjpcInZpc2libGVWYWx1ZS5sZW5ndGggPiAwXCJ9XSxzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X190YWdzLXdyYXBcIn0sW2UuX2woZS52aXNpYmxlVmFsdWUsZnVuY3Rpb24odCl7cmV0dXJuW2UuX3QoXCJ0YWdcIixbaShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fdGFnXCJ9LFtpKFwic3BhblwiLHtkb21Qcm9wczp7dGV4dENvbnRlbnQ6ZS5fcyhlLmdldE9wdGlvbkxhYmVsKHQpKX19KSxlLl92KFwiIFwiKSxpKFwiaVwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X190YWctaWNvblwiLGF0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsdGFiaW5kZXg6XCIxXCJ9LG9uOntrZXlkb3duOmZ1bmN0aW9uKGkpe2lmKCEoXCJidXR0b25cImluIGkpJiZlLl9rKGkua2V5Q29kZSxcImVudGVyXCIsMTMsaS5rZXkpKXJldHVybiBudWxsO2kucHJldmVudERlZmF1bHQoKSxlLnJlbW92ZUVsZW1lbnQodCl9LG1vdXNlZG93bjpmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksZS5yZW1vdmVFbGVtZW50KHQpfX19KV0pXSx7b3B0aW9uOnQsc2VhcmNoOmUuc2VhcmNoLHJlbW92ZTplLnJlbW92ZUVsZW1lbnR9KV19KV0sMiksZS5fdihcIiBcIiksZS5pbnRlcm5hbFZhbHVlJiZlLmludGVybmFsVmFsdWUubGVuZ3RoPmUubGltaXQ/W2koXCJzdHJvbmdcIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fc3Ryb25nXCIsZG9tUHJvcHM6e3RleHRDb250ZW50OmUuX3MoZS5saW1pdFRleHQoZS5pbnRlcm5hbFZhbHVlLmxlbmd0aC1lLmxpbWl0KSl9fSldOmUuX2UoKSxlLl92KFwiIFwiKSxpKFwidHJhbnNpdGlvblwiLHthdHRyczp7bmFtZTpcIm11bHRpc2VsZWN0X19sb2FkaW5nXCJ9fSxbZS5fdChcImxvYWRpbmdcIixbaShcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZS5sb2FkaW5nLGV4cHJlc3Npb246XCJsb2FkaW5nXCJ9XSxzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19zcGlubmVyXCJ9KV0pXSwyKSxlLl92KFwiIFwiKSxlLnNlYXJjaGFibGU/aShcImlucHV0XCIse3JlZjpcInNlYXJjaFwiLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX2lucHV0XCIsc3R5bGU6ZS5pbnB1dFN0eWxlLGF0dHJzOntuYW1lOmUubmFtZSxpZDplLmlkLHR5cGU6XCJ0ZXh0XCIsYXV0b2NvbXBsZXRlOlwib2ZmXCIscGxhY2Vob2xkZXI6ZS5wbGFjZWhvbGRlcixkaXNhYmxlZDplLmRpc2FibGVkLHRhYmluZGV4OmUudGFiaW5kZXh9LGRvbVByb3BzOnt2YWx1ZTplLmlzT3Blbj9lLnNlYXJjaDplLmN1cnJlbnRPcHRpb25MYWJlbH0sb246e2lucHV0OmZ1bmN0aW9uKHQpe2UudXBkYXRlU2VhcmNoKHQudGFyZ2V0LnZhbHVlKX0sZm9jdXM6ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLGUuYWN0aXZhdGUoKX0sYmx1cjpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZS5kZWFjdGl2YXRlKCl9LGtleXVwOmZ1bmN0aW9uKHQpe2lmKCEoXCJidXR0b25cImluIHQpJiZlLl9rKHQua2V5Q29kZSxcImVzY1wiLDI3LHQua2V5KSlyZXR1cm4gbnVsbDtlLmRlYWN0aXZhdGUoKX0sa2V5ZG93bjpbZnVuY3Rpb24odCl7aWYoIShcImJ1dHRvblwiaW4gdCkmJmUuX2sodC5rZXlDb2RlLFwiZG93blwiLDQwLHQua2V5KSlyZXR1cm4gbnVsbDt0LnByZXZlbnREZWZhdWx0KCksZS5wb2ludGVyRm9yd2FyZCgpfSxmdW5jdGlvbih0KXtpZighKFwiYnV0dG9uXCJpbiB0KSYmZS5fayh0LmtleUNvZGUsXCJ1cFwiLDM4LHQua2V5KSlyZXR1cm4gbnVsbDt0LnByZXZlbnREZWZhdWx0KCksZS5wb2ludGVyQmFja3dhcmQoKX0sZnVuY3Rpb24odCl7cmV0dXJuXCJidXR0b25cImluIHR8fCFlLl9rKHQua2V5Q29kZSxcImVudGVyXCIsMTMsdC5rZXkpPyh0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSx0LnRhcmdldCE9PXQuY3VycmVudFRhcmdldD9udWxsOnZvaWQgZS5hZGRQb2ludGVyRWxlbWVudCh0KSk6bnVsbH0sZnVuY3Rpb24odCl7aWYoIShcImJ1dHRvblwiaW4gdCkmJmUuX2sodC5rZXlDb2RlLFwiZGVsZXRlXCIsWzgsNDZdLHQua2V5KSlyZXR1cm4gbnVsbDt0LnN0b3BQcm9wYWdhdGlvbigpLGUucmVtb3ZlTGFzdEVsZW1lbnQoKX1dfX0pOmUuX2UoKSxlLl92KFwiIFwiKSxlLnNlYXJjaGFibGU/ZS5fZSgpOmkoXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3NpbmdsZVwiLGRvbVByb3BzOnt0ZXh0Q29udGVudDplLl9zKGUuY3VycmVudE9wdGlvbkxhYmVsKX0sb246e21vdXNlZG93bjpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZS50b2dnbGUodCl9fX0pXSwyKSxlLl92KFwiIFwiKSxpKFwidHJhbnNpdGlvblwiLHthdHRyczp7bmFtZTpcIm11bHRpc2VsZWN0XCJ9fSxbaShcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZS5pc09wZW4sZXhwcmVzc2lvbjpcImlzT3BlblwifV0scmVmOlwibGlzdFwiLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlclwiLHN0eWxlOnttYXhIZWlnaHQ6ZS5vcHRpbWl6ZWRIZWlnaHQrXCJweFwifSxvbjp7Zm9jdXM6ZS5hY3RpdmF0ZSxtb3VzZWRvd246ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpfX19LFtpKFwidWxcIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fY29udGVudFwiLHN0eWxlOmUuY29udGVudFN0eWxlfSxbZS5fdChcImJlZm9yZUxpc3RcIiksZS5fdihcIiBcIiksZS5tdWx0aXBsZSYmZS5tYXg9PT1lLmludGVybmFsVmFsdWUubGVuZ3RoP2koXCJsaVwiLFtpKFwic3BhblwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19vcHRpb25cIn0sW2UuX3QoXCJtYXhFbGVtZW50c1wiLFtlLl92KFwiTWF4aW11bSBvZiBcIitlLl9zKGUubWF4KStcIiBvcHRpb25zIHNlbGVjdGVkLiBGaXJzdCByZW1vdmUgYSBzZWxlY3RlZCBvcHRpb24gdG8gc2VsZWN0IGFub3RoZXIuXCIpXSldLDIpXSk6ZS5fZSgpLGUuX3YoXCIgXCIpLCFlLm1heHx8ZS5pbnRlcm5hbFZhbHVlLmxlbmd0aDxlLm1heD9lLl9sKGUuZmlsdGVyZWRPcHRpb25zLGZ1bmN0aW9uKHQsbil7cmV0dXJuIGkoXCJsaVwiLHtrZXk6bixzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19lbGVtZW50XCJ9LFt0JiYodC4kaXNMYWJlbHx8dC4kaXNEaXNhYmxlZCk/ZS5fZSgpOmkoXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX29wdGlvblwiLGNsYXNzOmUub3B0aW9uSGlnaGxpZ2h0KG4sdCksYXR0cnM6e1wiZGF0YS1zZWxlY3RcIjp0JiZ0LmlzVGFnP2UudGFnUGxhY2Vob2xkZXI6ZS5zZWxlY3RMYWJlbFRleHQsXCJkYXRhLXNlbGVjdGVkXCI6ZS5zZWxlY3RlZExhYmVsVGV4dCxcImRhdGEtZGVzZWxlY3RcIjplLmRlc2VsZWN0TGFiZWxUZXh0fSxvbjp7Y2xpY2s6ZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSxlLnNlbGVjdCh0KX0sbW91c2VlbnRlcjpmdW5jdGlvbih0KXtpZih0LnRhcmdldCE9PXQuY3VycmVudFRhcmdldClyZXR1cm4gbnVsbDtlLnBvaW50ZXJTZXQobil9fX0sW2UuX3QoXCJvcHRpb25cIixbaShcInNwYW5cIixbZS5fdihlLl9zKGUuZ2V0T3B0aW9uTGFiZWwodCkpKV0pXSx7b3B0aW9uOnQsc2VhcmNoOmUuc2VhcmNofSldLDIpLGUuX3YoXCIgXCIpLHQmJih0LiRpc0xhYmVsfHx0LiRpc0Rpc2FibGVkKT9pKFwic3BhblwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19vcHRpb24gbXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWRcIixjbGFzczplLm9wdGlvbkhpZ2hsaWdodChuLHQpfSxbZS5fdChcIm9wdGlvblwiLFtpKFwic3BhblwiLFtlLl92KGUuX3MoZS5nZXRPcHRpb25MYWJlbCh0KSkpXSldLHtvcHRpb246dCxzZWFyY2g6ZS5zZWFyY2h9KV0sMik6ZS5fZSgpXSl9KTplLl9lKCksZS5fdihcIiBcIiksaShcImxpXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplLnNob3dOb1Jlc3VsdHMmJjA9PT1lLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgmJmUuc2VhcmNoJiYhZS5sb2FkaW5nLGV4cHJlc3Npb246XCJzaG93Tm9SZXN1bHRzICYmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwICYmIHNlYXJjaCAmJiAhbG9hZGluZylcIn1dfSxbaShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fb3B0aW9uXCJ9LFtlLl90KFwibm9SZXN1bHRcIixbZS5fdihcIk5vIGVsZW1lbnRzIGZvdW5kLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgc2VhcmNoIHF1ZXJ5LlwiKV0pXSwyKV0pLGUuX3YoXCIgXCIpLGUuX3QoXCJhZnRlckxpc3RcIildLDIpXSldKV0sMil9LHM9W10sbz17cmVuZGVyOm4sc3RhdGljUmVuZGVyRm5zOnN9O3QuYT1vfV0pfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI5IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidnVlLXNlbGVjdFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwibXVsdGlzZWxlY3RcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiB7IFwiaGFzLWVycm9yXCI6IF92bS5oYXNFcnJvciB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLFxuICAgICAgICAgICAgc2VhcmNoYWJsZTogXCJcIixcbiAgICAgICAgICAgIFwiYWxsb3ctZW1wdHlcIjogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWQsXG4gICAgICAgICAgICBcImludGVybmFsLXNlYXJjaFwiOiAhX3ZtLmlzU2VydmVyU2lkZSxcbiAgICAgICAgICAgIG11bHRpcGxlOiBfdm0ubXVsdGlwbGUsXG4gICAgICAgICAgICB0YWdnYWJsZTogX3ZtLnRhZ2dhYmxlLFxuICAgICAgICAgICAgXCJjbGVhci1vbi1zZWxlY3RcIjogIV92bS5tdWx0aXBsZSxcbiAgICAgICAgICAgIFwiY2xvc2Utb24tc2VsZWN0XCI6ICFfdm0ubXVsdGlwbGUsXG4gICAgICAgICAgICBcInNlbGVjdC1sYWJlbFwiOiBfdm0uX18oX3ZtLmxhYmVscy5zZWxlY3QpLFxuICAgICAgICAgICAgXCJkZXNlbGVjdC1sYWJlbFwiOiBfdm0uX18oX3ZtLmxhYmVscy5kZXNlbGVjdCksXG4gICAgICAgICAgICBcInNlbGVjdGVkLWxhYmVsXCI6IF92bS5fXyhfdm0ubGFiZWxzLnNlbGVjdGVkKSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uX18oX3ZtLmxhYmVscy5wbGFjZWhvbGRlciksXG4gICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgIFwib3B0aW9ucy1saW1pdFwiOiAxMDAsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0ub3B0aW9uS2V5cyxcbiAgICAgICAgICAgIFwiY3VzdG9tLWxhYmVsXCI6IF92bS5jdXN0b21MYWJlbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwic2VhcmNoLWNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLnF1ZXJ5ID0gJGV2ZW50XG4gICAgICAgICAgICAgIF92bS5nZXRPcHRpb25zKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWc6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJ0YWdcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiaW5wdXRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJG9wdGlvbnMuZmlsdGVycy5oaWdobGlnaHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcHRpb25MaXN0W3Byb3BzLm9wdGlvbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5xdWVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJjbGVhclwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIV92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmhhc1NlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXVsdGlzZWxlY3RfX2NsZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xlYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcIm5vUmVzdWx0XCIgfSwgc2xvdDogXCJub1Jlc3VsdFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhfdm0ubGFiZWxzLm5vUmVzdWx0KSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1iNjQ1MjI5Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYjY0NTIyOWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9zZWxlY3QvVnVlU2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI5IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFiNTJlOTI3XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVlRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFiNTJlOTI3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWI1MmU5MjdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFiNTJlOTI3XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZUZvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhZTk2OTY2MlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xYjUyZTkyN1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDEwOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZm9ybS52dWUtZm9ybSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxUEE7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJWdWVGb3JtLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxkaXY+XFxuICAgICAgICA8aDUgY2xhc3M9XFxcInRpdGxlIGlzLTVcXFwiXFxuICAgICAgICAgICAgdi1pZj1cXFwiZGF0YS5pY29uIHx8IGRhdGEudGl0bGVcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLmljb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XFxcImRhdGEuaWNvblxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhblxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLnRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAge3sgZGF0YS50aXRsZSB9fVxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8aHI+XFxuICAgICAgICA8L2g1PlxcbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJzdWJtaXQoKVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwidnVlLWZvcm1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbnMgaXMtbXVsdGlsaW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiZmllbGQgaW4gZGF0YS5maWVsZHNcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29sdW1uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGQubmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiY29sdW1uU2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcIiFmaWVsZC5tZXRhLmhpZGRlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKGZpZWxkLmxhYmVsKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAgaXMtZGFuZ2VyIGlzLXB1bGxlZC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvcnMuZ2V0KGZpZWxkLm5hbWUpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImZpZWxkLm1ldGEuY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XFxcImZpZWxkLm5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XFxcImZpZWxkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9ycz1cXFwiZXJyb3JzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtZm9ybS1pbnB1dCB2LWlmPVxcXCJmaWVsZC5tZXRhLnR5cGUgPT09ICdpbnB1dCdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XFxcImZpZWxkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZT1cXFwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cXFwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnVlLWZvcm0taW5wdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtc2VsZWN0IHYtaWY9XFxcImZpZWxkLm1ldGEudHlwZSA9PT0gJ3NlbGVjdCdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVxcXCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSk7XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZmllbGQudmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwiZmllbGQubWV0YS5vcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleS1tYXA9XFxcImZpZWxkLm1ldGEua2V5TWFwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNvdXJjZT1cXFwiZmllbGQubWV0YS5zb3VyY2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XFxcImZpZWxkLm1ldGEubXVsdGlwbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImZpZWxkLm1ldGEuZGlzYWJsZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRlcGlja2VyIHYtaWY9XFxcImZpZWxkLm1ldGEudHlwZSA9PT0gJ2RhdGVwaWNrZXInXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmaWVsZC52YWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmb3JtYXQ9XFxcImZpZWxkLm1ldGEuZm9ybWF0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpbWU9XFxcImZpZWxkLm1ldGEudGltZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZmllbGQubWV0YS5kaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0ZXBpY2tlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgdi1pZj1cXFwiZmllbGQubWV0YS50eXBlID09PSAndGltZXBpY2tlcidcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XFxcImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZpZWxkLnZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZvcm1hdD1cXFwiZmllbGQubWV0YS5mb3JtYXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lLW9ubHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZmllbGQubWV0YS5kaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0ZXBpY2tlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJmaWVsZC5tZXRhLnR5cGUgPT09ICd0ZXh0YXJlYSdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIEBpbnB1dD1cXFwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0YXJlYVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoZmllbGQubmFtZSkgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmaWVsZC52YWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cm93cz1cXFwiZmllbGQubWV0YS5yb3dzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZmllbGQubWV0YS5kaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImVycm9ycy5oYXMoZmllbGQubmFtZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS13YXJuaW5nXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveVxcXCJcXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveS5mb3JiaWRkZW5cXFwiXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmNsYXNzXFxcIlxcbiAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cXFwic2hvd01vZGFsID0gdHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cXFwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvblxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJkYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5jbGFzc1xcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XFxcImNyZWF0ZSgpXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLmFjdGlvbnMuY3JlYXRlXFxcIlxcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImRhdGEuYWN0aW9ucy5jcmVhdGUuZm9yYmlkZGVuXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24ubGFiZWwpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XFxcImRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5jbGFzcywgeyAnaXMtbG9hZGluZyc6IGxvYWRpbmcgfV1cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImRhdGEuYWN0aW9ucy5zdG9yZVxcXCJcXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJkYXRhLmFjdGlvbnMuc3RvcmUuZm9yYmlkZGVuXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cXFwiZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5pY29uXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ1dHRvbiBpcy1wdWxsZWQtcmlnaHRcXFwiXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiW2RhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmNsYXNzLCB7ICdpcy1sb2FkaW5nJzogbG9hZGluZyB9XVxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiZGF0YS5hY3Rpb25zLnVwZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJkYXRhLmFjdGlvbnMudXBkYXRlLmZvcmJpZGRlblxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJkYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5pY29uXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpcy1jbGVhcmZpeFxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgICAgICA8bW9kYWwgdi1pZj1cXFwiZGF0YS5hY3Rpb25zLmRlc3Ryb3lcXFwiXFxuICAgICAgICAgICAgOnNob3c9XFxcInNob3dNb2RhbFxcXCJcXG4gICAgICAgICAgICA6X189XFxcIl9fXFxcIlxcbiAgICAgICAgICAgIDptZXNzYWdlPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24ubWVzc2FnZVxcXCJcXG4gICAgICAgICAgICBAY2FuY2VsLWFjdGlvbj1cXFwic2hvd01vZGFsID0gZmFsc2VcXFwiXFxuICAgICAgICAgICAgQGNvbW1pdC1hY3Rpb249XFxcImRlc3Ryb3koKVxcXCI+XFxuICAgICAgICA8L21vZGFsPlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xcbmltcG9ydCBFcnJvcnMgZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9lbnNvL0Vycm9ycy5qcyc7XFxuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwudnVlJztcXG5pbXBvcnQgVnVlU2VsZWN0IGZyb20gJy4uL3NlbGVjdC9WdWVTZWxlY3QudnVlJztcXG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuLi9idWxtYS9EYXRlcGlja2VyLnZ1ZSc7XFxuaW1wb3J0IFZ1ZUZvcm1JbnB1dCBmcm9tICcuL1Z1ZUZvcm1JbnB1dC52dWUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgY29tcG9uZW50czoge1xcbiAgICAgICAgTW9kYWwsIFZ1ZVNlbGVjdCwgRGF0ZXBpY2tlciwgVnVlRm9ybUlucHV0LFxcbiAgICB9LFxcblxcbiAgICBwcm9wczoge1xcbiAgICAgICAgZGF0YToge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXFxuICAgICAgICAgICAgZXJyb3JzOiBuZXcgRXJyb3JzKCksXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgLi4ubWFwR2V0dGVycygnbG9jYWxlJywgWydfXyddKSxcXG4gICAgICAgIGNvbHVtblNpemUoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIGBpcy0ke3BhcnNlSW50KDEyIC8gdGhpcy5kYXRhLmNvbHVtbnMsIDEwKX1gO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHBhdGgoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5tZXRob2QgPT09ICdwb3N0J1xcbiAgICAgICAgICAgICAgICA/IHRoaXMuZGF0YS5hY3Rpb25zLnN0b3JlLnBhdGhcXG4gICAgICAgICAgICAgICAgOiB0aGlzLmRhdGEuYWN0aW9ucy51cGRhdGUucGF0aDtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGNyZWF0ZSgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjcmVhdGUnKTtcXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IHRoaXMuZGF0YS5hY3Rpb25zLmNyZWF0ZS5yb3V0ZSB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzdWJtaXQoKSB7XFxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcXG5cXG4gICAgICAgICAgICBheGlvc1t0aGlzLmRhdGEubWV0aG9kXSh0aGlzLnBhdGgsIHRoaXMuZm9ybURhdGEoKSkudGhlbigoeyBkYXRhIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3N1Ym1pdCcpO1xcblxcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZWRpcmVjdCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEucmVkaXJlY3QsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBkYXRhLmlkIH0sXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcblxcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA0MjIpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnNldChkYXRhLmVycm9ycyk7XFxuXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZm9ybURhdGEoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maWVsZHMucmVkdWNlKChvYmplY3QsIGZpZWxkKSA9PiB7XFxuICAgICAgICAgICAgICAgIG9iamVjdFtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xcbiAgICAgICAgICAgIH0sIHsgX3BhcmFtczogdGhpcy5wYXJhbXMgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZGVzdHJveSgpIHtcXG4gICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XFxuXFxuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKHRoaXMuZGF0YS5hY3Rpb25zLmRlc3Ryb3kucGF0aCkudGhlbigoeyBkYXRhIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Rlc3Ryb3knKTtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3QpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogZGF0YS5yZWRpcmVjdCB9KTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICBmb3JtLnZ1ZS1mb3JtIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xYjUyZTkyN1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2PlxuICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZSBpcy01XCJcbiAgICAgICAgICAgIHYtaWY9XCJkYXRhLmljb24gfHwgZGF0YS50aXRsZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5pY29uXCI+XG4gICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZGF0YS5pY29uXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS50aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGEudGl0bGUgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgPC9oNT5cbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0KClcIlxuICAgICAgICAgICAgY2xhc3M9XCJ2dWUtZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImZpZWxkIGluIGRhdGEuZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImNvbHVtblNpemVcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWZpZWxkLm1ldGEuaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhmaWVsZC5sYWJlbCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscCBpcy1kYW5nZXIgaXMtcHVsbGVkLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9ycy5nZXQoZmllbGQubmFtZSkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImZpZWxkLm1ldGEuY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtZm9ybS1pbnB1dCB2LWlmPVwiZmllbGQubWV0YS50eXBlID09PSAnaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlPVwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImVycm9ycy5oYXMoZmllbGQubmFtZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1mb3JtLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtc2VsZWN0IHYtaWY9XCJmaWVsZC5tZXRhLnR5cGUgPT09ICdzZWxlY3QnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImVycm9ycy5oYXMoZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSk7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJmaWVsZC5tZXRhLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5LW1hcD1cImZpZWxkLm1ldGEua2V5TWFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNvdXJjZT1cImZpZWxkLm1ldGEuc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm11bHRpcGxlPVwiZmllbGQubWV0YS5tdWx0aXBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgdi1pZj1cImZpZWxkLm1ldGEudHlwZSA9PT0gJ2RhdGVwaWNrZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZvcm1hdD1cImZpZWxkLm1ldGEuZm9ybWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpbWU9XCJmaWVsZC5tZXRhLnRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kYXRlcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRlcGlja2VyIHYtaWY9XCJmaWVsZC5tZXRhLnR5cGUgPT09ICd0aW1lcGlja2VyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmb3JtYXQ9XCJmaWVsZC5tZXRhLmZvcm1hdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUtb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kYXRlcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmaWVsZC5tZXRhLnR5cGUgPT09ICd0ZXh0YXJlYSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIEBpbnB1dD1cImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoZmllbGQubmFtZSkgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJvd3M9XCJmaWVsZC5tZXRhLnJvd3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXdhcm5pbmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmFjdGlvbnMuZGVzdHJveVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuZm9yYmlkZGVuXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24uY2xhc3NcIlxuICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwic2hvd01vZGFsID0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24uY2xhc3NcIlxuICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwiY3JlYXRlKClcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmFjdGlvbnMuY3JlYXRlXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkYXRhLmFjdGlvbnMuY3JlYXRlLmZvcmJpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gaXMtcHVsbGVkLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5jbGFzcywgeyAnaXMtbG9hZGluZyc6IGxvYWRpbmcgfV1cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmFjdGlvbnMuc3RvcmVcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRhdGEuYWN0aW9ucy5zdG9yZS5mb3JiaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBpcy1wdWxsZWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIltkYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5jbGFzcywgeyAnaXMtbG9hZGluZyc6IGxvYWRpbmcgfV1cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmFjdGlvbnMudXBkYXRlXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkYXRhLmFjdGlvbnMudXBkYXRlLmZvcmJpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpcy1jbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxtb2RhbCB2LWlmPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3lcIlxuICAgICAgICAgICAgOnNob3c9XCJzaG93TW9kYWxcIlxuICAgICAgICAgICAgOl9fPVwiX19cIlxuICAgICAgICAgICAgOm1lc3NhZ2U9XCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24ubWVzc2FnZVwiXG4gICAgICAgICAgICBAY2FuY2VsLWFjdGlvbj1cInNob3dNb2RhbCA9IGZhbHNlXCJcbiAgICAgICAgICAgIEBjb21taXQtYWN0aW9uPVwiZGVzdHJveSgpXCI+XG4gICAgICAgIDwvbW9kYWw+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBFcnJvcnMgZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9lbnNvL0Vycm9ycy5qcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbC52dWUnO1xuaW1wb3J0IFZ1ZVNlbGVjdCBmcm9tICcuLi9zZWxlY3QvVnVlU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuLi9idWxtYS9EYXRlcGlja2VyLnZ1ZSc7XG5pbXBvcnQgVnVlRm9ybUlucHV0IGZyb20gJy4vVnVlRm9ybUlucHV0LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE1vZGFsLCBWdWVTZWxlY3QsIERhdGVwaWNrZXIsIFZ1ZUZvcm1JbnB1dCxcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yczogbmV3IEVycm9ycygpLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCBbJ19fJ10pLFxuICAgICAgICBjb2x1bW5TaXplKCkge1xuICAgICAgICAgICAgcmV0dXJuIGBpcy0ke3BhcnNlSW50KDEyIC8gdGhpcy5kYXRhLmNvbHVtbnMsIDEwKX1gO1xuICAgICAgICB9LFxuICAgICAgICBwYXRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5tZXRob2QgPT09ICdwb3N0J1xuICAgICAgICAgICAgICAgID8gdGhpcy5kYXRhLmFjdGlvbnMuc3RvcmUucGF0aFxuICAgICAgICAgICAgICAgIDogdGhpcy5kYXRhLmFjdGlvbnMudXBkYXRlLnBhdGg7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY3JlYXRlKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY3JlYXRlJyk7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IHRoaXMuZGF0YS5hY3Rpb25zLmNyZWF0ZS5yb3V0ZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3NbdGhpcy5kYXRhLm1ldGhvZF0odGhpcy5wYXRoLCB0aGlzLmZvcm1EYXRhKCkpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEucmVkaXJlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IGRhdGEuaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGVycm9yLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnNldChkYXRhLmVycm9ycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1EYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maWVsZHMucmVkdWNlKChvYmplY3QsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgIH0sIHsgX3BhcmFtczogdGhpcy5wYXJhbXMgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKHRoaXMuZGF0YS5hY3Rpb25zLmRlc3Ryb3kucGF0aCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogZGF0YS5yZWRpcmVjdCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgZm9ybS52dWUtZm9ybSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuXG5jbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmluY2x1ZGVzKGZpZWxkKTtcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKGZpZWxkKSA/IHRoaXMuZXJyb3JzW2ZpZWxkXVswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgc2V0KGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBpZiAodGhpcy5oYXMoZmllbGQpKSB7XG4gICAgICAgICAgICBWdWUuZGVsZXRlKHRoaXMuZXJyb3JzLCBmaWVsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbXB0eSgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmZvckVhY2goZmllbGQgPT4gdGhpcy5jbGVhcihmaWVsZCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL2Vuc28vRXJyb3JzLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZGRiMzgyYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdkZGIzODJhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1ODBlZWUyNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdkZGIzODJhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgIHotaW5kZXg6IDExMDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOERBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJNb2RhbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XFxcImFuaW1hdGVkIGZhZGVJblxcXCJcXG4gICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYW5pbWF0ZWQgZmFkZU91dFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbFxcXCJcXG4gICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWFjdGl2ZSc6IHNob3cgfVxcXCJcXG4gICAgICAgICAgICB2LWlmPVxcXCJzaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1tb2RhbCBtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwic3VidGl0bGUgaXMtNVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKG1lc3NhZ2UgfHwgXFxcIkFyZSB5b3Ugc3VyZSA/XFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLWxlZnRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJjb250cm9sc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLXN1Y2Nlc3NcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnY2FuY2VsLWFjdGlvbicpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcXFwiQ2FuY2VsXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2NvbW1pdC1hY3Rpb24nKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFxcXCJZZXNcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3RyYW5zaXRpb24+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHNob3c6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1lc3NhZ2U6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICBfXzoge1xcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgICAgICB6LWluZGV4OiAxMTAwO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2RkYjM4MmFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVPdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IHNob3cgfVwiXG4gICAgICAgICAgICB2LWlmPVwic2hvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1tb2RhbCBtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwic3VidGl0bGUgaXMtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKG1lc3NhZ2UgfHwgXCJBcmUgeW91IHN1cmUgP1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjYW5jZWwtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFwiQ2FuY2VsXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjb21taXQtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcIlllc1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIF9fOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLm1vZGFsLmlzLWFjdGl2ZSB7XG4gICAgICAgIHotaW5kZXg6IDExMDA7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlSW5cIixcbiAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlT3V0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbFwiLCBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0uc2hvdyB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2dyb3VuZFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLW1vZGFsIG1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJjb250ZW50XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhfdm0ubWVzc2FnZSB8fCBcIkFyZSB5b3Ugc3VyZSA/XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1sZWZ0XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJjb250cm9sc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY2FuY2VsLWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJDYW5jZWxcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjb21taXQtYWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJZZXNcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2RkYjM4MmFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdkZGIzODJhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wM2NlMmMzZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzc1wiKVxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDNjZTJjM2VcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0xIS4vRGF0ZXBpY2tlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0RhdGVwaWNrZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wM2NlMmMzZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0RhdGVwaWNrZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9EYXRlcGlja2VyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wM2NlMmMzZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAzY2UyYzNlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDNjZTJjM2VcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vbWF0ZXJpYWxfZ3JlZW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjA4NzQ0YTcwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wM2NlMmMzZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi9tYXRlcmlhbF9ncmVlbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAzY2UyYzNlXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL21hdGVyaWFsX2dyZWVuLmNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wM2NlMmMzZVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZsYXRwaWNrci1jYWxlbmRhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDEzcHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTNweCByZ2JhKDAsMCwwLDAuMDgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW4sXFxuLmZsYXRwaWNrci1jYWxlbmRhci5pbmxpbmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIG1heC1oZWlnaHQ6IDY0MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgei1pbmRleDogOTk5OTk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZS5vcGVuIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluRG93biAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygxMDAlICsgMnB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zdGF0aWMub3BlbiB7XFxuICB6LWluZGV4OiA5OTk7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5oYXNXZWVrcyB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzV2Vla3MgLmRheUNvbnRhaW5lcixcXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNUaW1lIC5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzV2Vla3MgLmRheUNvbnRhaW5lciB7XFxuICBib3JkZXItbGVmdDogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zaG93VGltZUlucHV0Lmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItaW5uZXJDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zaG93VGltZUlucHV0Lmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5ub0NhbGVuZGFyLmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBsZWZ0OiAyMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnJpZ2h0TW9zdDpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5yaWdodE1vc3Q6YWZ0ZXIge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAyMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZSB7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIG1hcmdpbjogMCAtNXB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgbWFyZ2luOiAwIC00cHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIge1xcbiAgYm90dG9tOiAxMDAlO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XFxuICB0b3A6IDEwMCU7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlIHtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5mbGF0cGlja3Itd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItbW9udGgge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmaWxsOiAjZmZmO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcGFkZGluZzogMTBweCBjYWxjKDMuNTclIC0gMS41cHgpO1xcbiAgei1pbmRleDogMztcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIGksXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLXByZXYtbW9udGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoLmZsYXRwaWNrci1wcmV2LW1vbnRoIHtcXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG4gIGxlZnQ6IDA7XFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbn1cXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1uZXh0LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCB7XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxuICByaWdodDogMDtcXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxufVxcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4uZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXIsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXIgc3ZnLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciBzdmcge1xcbiAgZmlsbDogI2Y2NDc0NztcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZyxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGggc3ZnIHtcXG4gIHdpZHRoOiAxNHB4O1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGggc3ZnIHBhdGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHN2ZyBwYXRoIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjFzO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjFzO1xcbiAgZmlsbDogaW5oZXJpdDtcXG59XFxuLm51bUlucHV0V3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQsXFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLm51bUlucHV0V3JhcHBlciBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBwYWRkaW5nOiAwIDRweCAwIDJweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgbGluZS1oZWlnaHQ6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMDUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMzJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXAge1xcbiAgdG9wOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC42KTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93biB7XFxuICB0b3A6IDUwJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjYpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHBhdGgge1xcbiAgZmlsbDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcbi5udW1JbnB1dFdyYXBwZXI6aG92ZXIgc3BhbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGgge1xcbiAgZm9udC1zaXplOiAxMzUlO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNzUlO1xcbiAgbGVmdDogMTIuNSU7XFxuICBwYWRkaW5nOiA2LjE2cHggMCAwIDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGhlaWdodDogMjhweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlTGVmdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGguc2xpZGVSaWdodCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlUmlnaHROZXcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAwLjVjaDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogNmNoO1xcbiAgd2lkdGg6IDdjaFxcXFwwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAwIDAgMCAwLjVjaDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXI6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyW2Rpc2FibGVkXSxcXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLXdlZWtkYXlzIHtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjhweDtcXG59XFxuc3Bhbi5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDkwJTtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU0KTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmRheUNvbnRhaW5lcixcXG4uZmxhdHBpY2tyLXdlZWtzIHtcXG4gIHBhZGRpbmc6IDFweCAwIDAgMDtcXG59XFxuLmZsYXRwaWNrci1kYXlzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1kYXlzOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5kYXlDb250YWluZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDMwNy44NzVweDtcXG4gIG1pbi13aWR0aDogMzA3Ljg3NXB4O1xcbiAgbWF4LXdpZHRoOiAzMDcuODc1cHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnQsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0TmV3IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZVJpZ2h0TmV3IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWRheSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHdpZHRoOiAxNC4yODU3MTQzJTtcXG4gIC13ZWJraXQtZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XFxuICAgICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE0LjI4NTcxNDMlO1xcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxNC4yODU3MTQzJTtcXG4gIG1heC13aWR0aDogMzlweDtcXG4gIGhlaWdodDogMzlweDtcXG4gIGxpbmUtaGVpZ2h0OiAzOXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXk6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5OmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTJlMmUyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS50b2RheSB7XFxuICBib3JkZXItY29sb3I6ICNiYmI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnRvZGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnRvZGF5OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI2JiYjtcXG4gIGJhY2tncm91bmQ6ICNiYmI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQ6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5uZXh0TW9udGhEYXkge1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5zdGFydFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5zdGFydFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuZW5kUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSArIC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMHB4IDAgMCAjMWJiYzliO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtMTBweCAwIDAgIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZS5lbmRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5pblJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC01cHggMCAwICNlMmUyZTIsIDVweCAwIDAgI2UyZTJlMjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTVweCAwIDAgI2UyZTJlMiwgNXB4IDAgMCAjZTJlMmUyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZCxcXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZDpob3ZlciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQsXFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQ6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQubmV4dE1vbnRoRGF5IHtcXG4gIGNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMyk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5mbGF0cGlja3ItZGF5LndlZWsuc2VsZWN0ZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAwIDAgIzFiYmM5YiwgNXB4IDAgMCAjMWJiYzliO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtNXB4IDAgMCAjMWJiYzliLCA1cHggMCAwICMxYmJjOWI7XFxufVxcbi5yYW5nZU1vZGUgLmZsYXRwaWNrci1kYXkge1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla3Mge1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgLmZsYXRwaWNrci13ZWVrZGF5IHtcXG4gIGZsb2F0OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciBzcGFuLmZsYXRwaWNrci1kYXkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogbm9uZTtcXG59XFxuLmZsYXRwaWNrci1pbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLXJDb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmZsYXRwaWNrci10aW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG59XFxuLmZsYXRwaWNrci10aW1lOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0ODQ4NDg7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICM0ODQ4NDg7XFxufVxcbi5mbGF0cGlja3ItdGltZS5oYXNTZWNvbmRzIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDI2JTtcXG59XFxuLmZsYXRwaWNrci10aW1lLnRpbWUyNGhyIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDQ5JTtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLWhvdXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3ItbWludXRlLFxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3Itc2Vjb25kIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci10aW1lLXNlcGFyYXRvcixcXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbSB7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAyJTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiAxOCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpob3ZlcixcXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xcbn1cXG4uZmxhdHBpY2tyLWlucHV0W3JlYWRvbmx5XSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcEZhZGVJbkRvd24ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVJbkRvd24ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwU2xpZGVMZWZ0IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlTGVmdCB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlTGVmdE5ldyB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwU2xpZGVMZWZ0TmV3IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlUmlnaHQge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZVJpZ2h0IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZVJpZ2h0TmV3IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlUmlnaHROZXcge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlT3V0IHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVPdXQge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlSW4ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZUluIHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdCQUF3QjtVQUNoQixnQkFBZ0I7RUFDeEIsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLCtCQUErQjtVQUN2Qix1QkFBdUI7RUFDL0IsK0JBQStCO01BQzNCLDJCQUEyQjtFQUMvQixnREFBZ0Q7VUFDeEMsd0NBQXdDO0NBQ2pEO0FBQ0Q7O0VBRUUsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIs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akQ7Q0FDRjtBQUNEO0FBQ0U7SUFDRSw4Q0FBOEM7WUFDdEMsc0NBQXNDO0NBQy9DO0FBQ0Q7SUFDRSxnREFBZ0Q7WUFDeEMsd0NBQXdDO0NBQ2pEO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsK0NBQStDO1lBQ3ZDLHVDQUF1QztDQUNoRDtBQUNEO0lBQ0UsOENBQThDO1lBQ3RDLHNDQUFzQztDQUMvQztDQUNGO0FBQ0Q7QUFDRTtJQUNFLCtDQUErQztZQUN2Qyx1Q0FBdUM7Q0FDaEQ7QUFDRDtJQUNFLDhDQUE4QztZQUN0QyxzQ0FBc0M7Q0FDL0M7Q0FDRjtBQUNEO0FBQ0U7SUFDRSwwQ0FBMEM7WUFDbEMsa0NBQWtDO0NBQzNDO0FBQ0Q7SUFDRSwrQ0FBK0M7WUFDdkMsdUNBQXVDO0NBQ2hEO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsMENBQTBDO1lBQ2xDLGtDQUFrQztDQUMzQztBQUNEO0lBQ0UsK0NBQStDO1lBQ3ZDLHVDQUF1QztDQUNoRDtDQUNGO0FBQ0Q7QUFDRTtJQUNFLDhDQUE4QztZQUN0QyxzQ0FBc0M7Q0FDL0M7QUFDRDtJQUNFLDBDQUEwQztZQUNsQyxrQ0FBa0M7Q0FDM0M7Q0FDRjtBQUNEO0FBQ0U7SUFDRSw4Q0FBOEM7WUFDdEMsc0NBQXNDO0NBQy9DO0FBQ0Q7SUFDRSwwQ0FBMEM7WUFDbEMsa0NBQWtDO0NBQzNDO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsV0FBVztDQUNaO0FBQ0Q7SUFDRSxXQUFXO0NBQ1o7Q0FDRjtBQUNEO0FBQ0U7SUFDRSxXQUFXO0NBQ1o7QUFDRDtJQUNFLFdBQVc7Q0FDWjtDQUNGO0FBQ0Q7QUFDRTtJQUNFLFdBQVc7Q0FDWjtBQUNEO0lBQ0UsV0FBVztDQUNaO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsV0FBVztDQUNaO0FBQ0Q7SUFDRSxXQUFXO0NBQ1o7Q0FDRlwiLFwiZmlsZVwiOlwibWF0ZXJpYWxfZ3JlZW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mbGF0cGlja3ItY2FsZW5kYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzA3Ljg3NXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEzcHggcmdiYSgwLDAsMCwwLjA4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5lIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBtYXgtaGVpZ2h0OiA2NDBweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDk5OTk5O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUub3BlbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW5Eb3duIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmlubGluZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnN0YXRpYyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoMTAwJSArIDJweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljLm9wZW4ge1xcbiAgei1pbmRleDogOTk5O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaGFzV2Vla3Mge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXIsXFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzVGltZSAuZGF5Q29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnNob3dUaW1lSW5wdXQuaGFzVGltZSAuZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIubm9DYWxlbmRhci5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBjb250ZW50OiAnJztcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgbGVmdDogMjJweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5yaWdodE1vc3Q6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmFmdGVyIHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogMjJweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUge1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBtYXJnaW46IDAgLTVweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG4gIG1hcmdpbjogMCAtNHB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcXG4gIGJvdHRvbTogMTAwJTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xcbiAgdG9wOiAxMDAlO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZSB7XFxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZmxhdHBpY2tyLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLW1vbnRoIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZmlsbDogI2ZmZjtcXG4gIGhlaWdodDogMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGgge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHBhZGRpbmc6IDEwcHggY2FsYygzLjU3JSAtIDEuNXB4KTtcXG4gIHotaW5kZXg6IDM7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBpLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1wcmV2LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItcHJldi1tb250aCB7XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxuICBsZWZ0OiAwO1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG59XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgge1xcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbiAgcmlnaHQ6IDA7XFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbn1cXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciB7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyIHN2ZyxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGg6aG92ZXIgc3ZnIHtcXG4gIGZpbGw6ICNmNjQ3NDc7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBzdmcsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHN2ZyB7XFxuICB3aWR0aDogMTRweDtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZyBwYXRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBzdmcgcGF0aCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4xcztcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4xcztcXG4gIGZpbGw6IGluaGVyaXQ7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0LFxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgcGFkZGluZzogMCA0cHggMCAycHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGxpbmUtaGVpZ2h0OiA1MCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjA1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMyU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwIHtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuNik7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd24ge1xcbiAgdG9wOiA1MCU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC42KTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHN2ZyB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHN2ZyBwYXRoIHtcXG4gIGZpbGw6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG59XFxuLm51bUlucHV0V3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHNwYW4ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHtcXG4gIGZvbnQtc2l6ZTogMTM1JTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGxlZnQ6IDEyLjUlO1xcbiAgcGFkZGluZzogNi4xNnB4IDAgMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZUxlZnQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZUxlZnROZXcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlUmlnaHQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZVJpZ2h0TmV3IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGgge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41Y2g7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGg6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDZjaDtcXG4gIHdpZHRoOiA3Y2hcXFxcMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMCAwIDAgMC41Y2g7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5pdGlhbDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcltkaXNhYmxlZF0sXFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyW2Rpc2FibGVkXTpob3ZlciB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmZsYXRwaWNrci13ZWVrZGF5cyB7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI4cHg7XFxufVxcbnNwYW4uZmxhdHBpY2tyLXdlZWtkYXkge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5kYXlDb250YWluZXIsXFxuLmZsYXRwaWNrci13ZWVrcyB7XFxuICBwYWRkaW5nOiAxcHggMCAwIDA7XFxufVxcbi5mbGF0cGlja3ItZGF5cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMzA3Ljg3NXB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItZGF5czpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZGF5Q29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICBtaW4td2lkdGg6IDMwNy44NzVweDtcXG4gIG1heC13aWR0aDogMzA3Ljg3NXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0LFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnROZXcge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZVJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVSaWdodE5ldyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1kYXkge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzQ4NDg0ODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB3aWR0aDogMTQuMjg1NzE0MyU7XFxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDE0LjI4NTcxNDMlO1xcbiAgICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNC4yODU3MTQzJTtcXG4gICAgICAgICAgZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XFxuICBtYXgtd2lkdGg6IDM5cHg7XFxuICBoZWlnaHQ6IDM5cHg7XFxuICBsaW5lLWhlaWdodDogMzlweDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXk6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5OmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcXG4gIGJvcmRlci1jb2xvcjogI2UyZTJlMjtcXG59XFxuLmZsYXRwaWNrci1kYXkudG9kYXkge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xcbn1cXG4uZmxhdHBpY2tyLWRheS50b2RheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS50b2RheTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNiYmI7XFxuICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZDpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UubmV4dE1vbnRoRGF5IHtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLmVuZFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlICsgLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2Uge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTBweCAwIDAgIzFiYmM5YjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTEwcHggMCAwICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDAgMCAjZTJlMmUyLCA1cHggMCAwICNlMmUyZTI7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCAwICNlMmUyZTIsIDVweCAwIDAgI2UyZTJlMjtcXG59XFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQsXFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQ6aG92ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkLFxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZCxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLm5leHRNb250aERheSB7XFxuICBjb2xvcjogcmdiYSg3Miw3Miw3MiwwLjMpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uZmxhdHBpY2tyLWRheS53ZWVrLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC01cHggMCAwICMxYmJjOWIsIDVweCAwIDAgIzFiYmM5YjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTVweCAwIDAgIzFiYmM5YiwgNXB4IDAgMCAjMWJiYzliO1xcbn1cXG4ucmFuZ2VNb2RlIC5mbGF0cGlja3ItZGF5IHtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciAuZmxhdHBpY2tyLXdlZWtzIHtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBmbG9hdDogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgc3Bhbi5mbGF0cGlja3ItZGF5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IG5vbmU7XFxufVxcbi5mbGF0cGlja3ItaW5uZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1yQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5mbGF0cGlja3ItdGltZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdXRsaW5lOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxufVxcbi5mbGF0cGlja3ItdGltZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUuaGFzU2Vjb25kcyAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHdpZHRoOiAyNiU7XFxufVxcbi5mbGF0cGlja3ItdGltZS50aW1lMjRociAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHdpZHRoOiA0OSU7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzQ4NDg0ODtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1ob3VyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLW1pbnV0ZSxcXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLXNlY29uZCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItdGltZS1zZXBhcmF0b3IsXFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMiU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtIHtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogMTglO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06aG92ZXIsXFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcXG59XFxuLmZsYXRwaWNrci1pbnB1dFtyZWFkb25seV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVJbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZUxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZUxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlTGVmdE5ldyB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZUxlZnROZXcge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZVJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZVJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlUmlnaHROZXcge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZVJpZ2h0TmV3IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDNjZTJjM2VcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzc1xuLy8gbW9kdWxlIGlkID0gMTExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wM2NlMmMzZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9EYXRlcGlja2VyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZDZkN2I5NDJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDNjZTJjM2VcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vRGF0ZXBpY2tlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDNjZTJjM2VcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vRGF0ZXBpY2tlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDNjZTJjM2VcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0RhdGVwaWNrZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmEuaW5wdXQtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9EYXRlcGlja2VyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBa0hBO0lBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiRGF0ZXBpY2tlci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmbGF0cGlja3JcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XFxcInBsYWNlaG9sZGVyXFxcIlxcbiAgICAgICAgICAgICAgICA6aWQ9XFxcIidkYXRlLWlucHV0LScgKyBfdWlkXFxcIlxcbiAgICAgICAgICAgICAgICA6bmFtZT1cXFwibmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgOnZhbHVlPVxcXCJ2YWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0IGNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNsb2NrLW9cXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJ0aW1lT25seVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvaT5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyXFxcIiB2LWVsc2U+PC9pPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IEZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xcblxcbi8vIGNvbnN0IEZsYXRwaWNrckwxMG5zID0ge1xcbi8vICAgICBybzogcmVxdWlyZSgnZmxhdHBpY2tyL2Rpc3QvbDEwbi9yby5qcycpLnJvLFxcbi8vIH07XFxuLy8gRmxhdHBpY2tyLmxvY2FsaXplKEZsYXRwaWNrckwxMG5zW1N0b3JlLnVzZXIucHJlZmVyZW5jZXMuZ2xvYmFsLmxhbmddKTsgLy9maXhtZVxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHZhbHVlOiB7XFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgICAgICB2YWxpZGF0ZSh2YWx1ZSkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBuYW1lOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICAgICAgdGltZToge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgdGltZU9ubHk6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdTZWxlY3QgRGF0ZScsIC8vIGZpeG1lXFxuICAgICAgICB9LFxcbiAgICAgICAgZGlzYWJsZWQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZvcm1hdDoge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiAnZC1tLVknLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGlucHV0Q2xhc3M6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Zvcm0tY29udHJvbCcsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBwaWNrZXI6IG51bGwsXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgY29uZmlnKHNlbGYgPSB0aGlzKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgd2Vla051bWJlcnM6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy52YWx1ZSxcXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogdGhpcy5mb3JtYXQsXFxuICAgICAgICAgICAgICAgIGFsbG93SW5wdXQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBjbGlja09wZW5zOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBub0NhbGVuZGFyOiB0aGlzLnRpbWVPbmx5LFxcbiAgICAgICAgICAgICAgICBlbmFibGVUaW1lOiB0aGlzLnRpbWUgfHwgdGhpcy50aW1lT25seSxcXG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoc2VsZWN0ZWREYXRlcywgZGF0ZVN0cikge1xcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdCgnaW5wdXQnLCBkYXRlU3RyKTtcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIHZhbHVlKG5ld1ZhbHVlKSB7XFxuICAgICAgICAgICAgdGhpcy5waWNrZXIuc2V0RGF0ZShuZXdWYWx1ZSk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtb3VudGVkKCkge1xcbiAgICAgICAgdGhpcy5waWNrZXIgPSBuZXcgRmxhdHBpY2tyKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JyksIHRoaXMuY29uZmlnKTtcXG4gICAgfSxcXG5cXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcXG4gICAgICAgIHRoaXMucGlja2VyLmRlc3Ryb3koKTtcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzcmM9XFxcImZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3NcXFwiPjwvc3R5bGU+XFxuXFxuPHN0eWxlPlxcblxcbiAgICBhLmlucHV0LWJ1dHRvbiB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wM2NlMmMzZVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvRGF0ZXBpY2tlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxhdHBpY2tyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1yaWdodFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgOmlkPVwiJ2RhdGUtaW5wdXQtJyArIF91aWRcIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQgY29udHJvbFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0aW1lT25seVwiPlxuICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCIgdi1lbHNlPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBGbGF0cGlja3IgZnJvbSAnZmxhdHBpY2tyJztcblxuLy8gY29uc3QgRmxhdHBpY2tyTDEwbnMgPSB7XG4vLyAgICAgcm86IHJlcXVpcmUoJ2ZsYXRwaWNrci9kaXN0L2wxMG4vcm8uanMnKS5ybyxcbi8vIH07XG4vLyBGbGF0cGlja3IubG9jYWxpemUoRmxhdHBpY2tyTDEwbnNbU3RvcmUudXNlci5wcmVmZXJlbmNlcy5nbG9iYWwubGFuZ10pOyAvL2ZpeG1lXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdmFsaWRhdGUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGltZU9ubHk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdTZWxlY3QgRGF0ZScsIC8vIGZpeG1lXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2QtbS1ZJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Zvcm0tY29udHJvbCcsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwaWNrZXI6IG51bGwsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNvbmZpZyhzZWxmID0gdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3ZWVrTnVtYmVyczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdERhdGU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgYWxsb3dJbnB1dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2xpY2tPcGVuczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBub0NhbGVuZGFyOiB0aGlzLnRpbWVPbmx5LFxuICAgICAgICAgICAgICAgIGVuYWJsZVRpbWU6IHRoaXMudGltZSB8fCB0aGlzLnRpbWVPbmx5LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdCgnaW5wdXQnLCBkYXRlU3RyKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucGlja2VyLnNldERhdGUobmV3VmFsdWUpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLnBpY2tlciA9IG5ldyBGbGF0cGlja3IodGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKSwgdGhpcy5jb25maWcpO1xuICAgIH0sXG5cbiAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBpY2tlci5kZXN0cm95KCk7XG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc3JjPVwiZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzc1wiPjwvc3R5bGU+XG5cbjxzdHlsZT5cblxuICAgIGEuaW5wdXQtYnV0dG9uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9EYXRlcGlja2VyLnZ1ZSIsIi8qIGZsYXRwaWNrciB2My4xLjQsIEBsaWNlbnNlIE1JVCAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLmZsYXRwaWNrciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcblxyXG5cclxudmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcblxuZnVuY3Rpb24gY29tcGFyZURhdGVzKGRhdGUxLCBkYXRlMiwgdGltZWxlc3MpIHtcclxuICAgIGlmICh0aW1lbGVzcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKGRhdGUxLmdldFRpbWUoKSkuc2V0SG91cnMoMCwgMCwgMCwgMCkgLVxyXG4gICAgICAgICAgICBuZXcgRGF0ZShkYXRlMi5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRlMS5nZXRUaW1lKCkgLSBkYXRlMi5nZXRUaW1lKCk7XHJcbn1cclxudmFyIG1vbnRoVG9TdHIgPSBmdW5jdGlvbiAobW9udGhOdW1iZXIsIHNob3J0aGFuZCwgbG9jYWxlKSB7IHJldHVybiBsb2NhbGUubW9udGhzW3Nob3J0aGFuZCA/IFwic2hvcnRoYW5kXCIgOiBcImxvbmdoYW5kXCJdW21vbnRoTnVtYmVyXTsgfTtcclxudmFyIGdldFdlZWsgPSBmdW5jdGlvbiAoZ2l2ZW5EYXRlKSB7XHJcbiAgICB2YXIgb25lamFuID0gbmV3IERhdGUoZ2l2ZW5EYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbCgoKGdpdmVuRGF0ZS5nZXRUaW1lKCkgLSBvbmVqYW4uZ2V0VGltZSgpKSAvIDg2NDAwMDAwICtcclxuICAgICAgICBvbmVqYW4uZ2V0RGF5KCkgK1xyXG4gICAgICAgIDEpIC9cclxuICAgICAgICA3KTtcclxufTtcclxudmFyIGR1cmF0aW9uID0ge1xyXG4gICAgREFZOiA4NjQwMDAwMCxcclxufTtcblxudmFyIGRlZmF1bHRzID0ge1xyXG4gICAgX2Rpc2FibGU6IFtdLFxyXG4gICAgX2VuYWJsZTogW10sXHJcbiAgICBhbGxvd0lucHV0OiBmYWxzZSxcclxuICAgIGFsdEZvcm1hdDogXCJGIGosIFlcIixcclxuICAgIGFsdElucHV0OiBmYWxzZSxcclxuICAgIGFsdElucHV0Q2xhc3M6IFwiZm9ybS1jb250cm9sIGlucHV0XCIsXHJcbiAgICBhbmltYXRlOiB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgPT09IC0xLFxyXG4gICAgYXJpYURhdGVGb3JtYXQ6IFwiRiBqLCBZXCIsXHJcbiAgICBjbGlja09wZW5zOiB0cnVlLFxyXG4gICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcclxuICAgIGNvbmp1bmN0aW9uOiBcIiwgXCIsXHJcbiAgICBkYXRlRm9ybWF0OiBcIlktbS1kXCIsXHJcbiAgICBkZWZhdWx0SG91cjogMTIsXHJcbiAgICBkZWZhdWx0TWludXRlOiAwLFxyXG4gICAgZGVmYXVsdFNlY29uZHM6IDAsXHJcbiAgICBkaXNhYmxlOiBbXSxcclxuICAgIGRpc2FibGVNb2JpbGU6IGZhbHNlLFxyXG4gICAgZW5hYmxlOiBbXSxcclxuICAgIGVuYWJsZVNlY29uZHM6IGZhbHNlLFxyXG4gICAgZW5hYmxlVGltZTogZmFsc2UsXHJcbiAgICBnZXRXZWVrOiBnZXRXZWVrLFxyXG4gICAgaG91ckluY3JlbWVudDogMSxcclxuICAgIGlnbm9yZWRGb2N1c0VsZW1lbnRzOiBbXSxcclxuICAgIGlubGluZTogZmFsc2UsXHJcbiAgICBsb2NhbGU6IFwiZGVmYXVsdFwiLFxyXG4gICAgbWludXRlSW5jcmVtZW50OiA1LFxyXG4gICAgbW9kZTogXCJzaW5nbGVcIixcclxuICAgIG5leHRBcnJvdzogXCI8c3ZnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDE3IDE3Jz48Zz48L2c+PHBhdGggZD0nTTEzLjIwNyA4LjQ3MmwtNy44NTQgNy44NTQtMC43MDctMC43MDcgNy4xNDYtNy4xNDYtNy4xNDYtNy4xNDggMC43MDctMC43MDcgNy44NTQgNy44NTR6JyAvPjwvc3ZnPlwiLFxyXG4gICAgbm9DYWxlbmRhcjogZmFsc2UsXHJcbiAgICBvbkNoYW5nZTogW10sXHJcbiAgICBvbkNsb3NlOiBbXSxcclxuICAgIG9uRGF5Q3JlYXRlOiBbXSxcclxuICAgIG9uRGVzdHJveTogW10sXHJcbiAgICBvbktleURvd246IFtdLFxyXG4gICAgb25Nb250aENoYW5nZTogW10sXHJcbiAgICBvbk9wZW46IFtdLFxyXG4gICAgb25QYXJzZUNvbmZpZzogW10sXHJcbiAgICBvblJlYWR5OiBbXSxcclxuICAgIG9uVmFsdWVVcGRhdGU6IFtdLFxyXG4gICAgb25ZZWFyQ2hhbmdlOiBbXSxcclxuICAgIHBsdWdpbnM6IFtdLFxyXG4gICAgcG9zaXRpb246IFwiYXV0b1wiLFxyXG4gICAgcG9zaXRpb25FbGVtZW50OiB1bmRlZmluZWQsXHJcbiAgICBwcmV2QXJyb3c6IFwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J001LjIwNyA4LjQ3MWw3LjE0NiA3LjE0Ny0wLjcwNyAwLjcwNy03Ljg1My03Ljg1NCA3Ljg1NC03Ljg1MyAwLjcwNyAwLjcwNy03LjE0NyA3LjE0NnonIC8+PC9zdmc+XCIsXHJcbiAgICBzaG9ydGhhbmRDdXJyZW50TW9udGg6IGZhbHNlLFxyXG4gICAgc3RhdGljOiBmYWxzZSxcclxuICAgIHRpbWVfMjRocjogZmFsc2UsXHJcbiAgICB3ZWVrTnVtYmVyczogZmFsc2UsXHJcbiAgICB3cmFwOiBmYWxzZSxcclxufTtcblxudmFyIGVuZ2xpc2ggPSB7XHJcbiAgICB3ZWVrZGF5czoge1xyXG4gICAgICAgIHNob3J0aGFuZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxyXG4gICAgICAgIGxvbmdoYW5kOiBbXHJcbiAgICAgICAgICAgIFwiU3VuZGF5XCIsXHJcbiAgICAgICAgICAgIFwiTW9uZGF5XCIsXHJcbiAgICAgICAgICAgIFwiVHVlc2RheVwiLFxyXG4gICAgICAgICAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgICAgICAgICBcIlRodXJzZGF5XCIsXHJcbiAgICAgICAgICAgIFwiRnJpZGF5XCIsXHJcbiAgICAgICAgICAgIFwiU2F0dXJkYXlcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIG1vbnRoczoge1xyXG4gICAgICAgIHNob3J0aGFuZDogW1xyXG4gICAgICAgICAgICBcIkphblwiLFxyXG4gICAgICAgICAgICBcIkZlYlwiLFxyXG4gICAgICAgICAgICBcIk1hclwiLFxyXG4gICAgICAgICAgICBcIkFwclwiLFxyXG4gICAgICAgICAgICBcIk1heVwiLFxyXG4gICAgICAgICAgICBcIkp1blwiLFxyXG4gICAgICAgICAgICBcIkp1bFwiLFxyXG4gICAgICAgICAgICBcIkF1Z1wiLFxyXG4gICAgICAgICAgICBcIlNlcFwiLFxyXG4gICAgICAgICAgICBcIk9jdFwiLFxyXG4gICAgICAgICAgICBcIk5vdlwiLFxyXG4gICAgICAgICAgICBcIkRlY1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbG9uZ2hhbmQ6IFtcclxuICAgICAgICAgICAgXCJKYW51YXJ5XCIsXHJcbiAgICAgICAgICAgIFwiRmVicnVhcnlcIixcclxuICAgICAgICAgICAgXCJNYXJjaFwiLFxyXG4gICAgICAgICAgICBcIkFwcmlsXCIsXHJcbiAgICAgICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgICAgIFwiSnVuZVwiLFxyXG4gICAgICAgICAgICBcIkp1bHlcIixcclxuICAgICAgICAgICAgXCJBdWd1c3RcIixcclxuICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIixcclxuICAgICAgICAgICAgXCJPY3RvYmVyXCIsXHJcbiAgICAgICAgICAgIFwiTm92ZW1iZXJcIixcclxuICAgICAgICAgICAgXCJEZWNlbWJlclwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgZGF5c0luTW9udGg6IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcclxuICAgIGZpcnN0RGF5T2ZXZWVrOiAwLFxyXG4gICAgb3JkaW5hbDogZnVuY3Rpb24gKG50aCkge1xyXG4gICAgICAgIHZhciBzID0gbnRoICUgMTAwO1xyXG4gICAgICAgIGlmIChzID4gMyAmJiBzIDwgMjEpXHJcbiAgICAgICAgICAgIHJldHVybiBcInRoXCI7XHJcbiAgICAgICAgc3dpdGNoIChzICUgMTApIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RcIjtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibmRcIjtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicmRcIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInRoXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJhbmdlU2VwYXJhdG9yOiBcIiB0byBcIixcclxuICAgIHdlZWtBYmJyZXZpYXRpb246IFwiV2tcIixcclxuICAgIHNjcm9sbFRpdGxlOiBcIlNjcm9sbCB0byBpbmNyZW1lbnRcIixcclxuICAgIHRvZ2dsZVRpdGxlOiBcIkNsaWNrIHRvIHRvZ2dsZVwiLFxyXG4gICAgYW1QTTogW1wiQU1cIiwgXCJQTVwiXSxcclxufTtcblxudmFyIHBhZCA9IGZ1bmN0aW9uIChudW1iZXIpIHsgcmV0dXJuIChcIjBcIiArIG51bWJlcikuc2xpY2UoLTIpOyB9O1xyXG52YXIgaW50ID0gZnVuY3Rpb24gKGJvb2wpIHsgcmV0dXJuIChib29sID09PSB0cnVlID8gMSA6IDApOyB9O1xyXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcclxuICAgIGlmIChpbW1lZGlhdGUgPT09IHZvaWQgMCkgeyBpbW1lZGlhdGUgPSBmYWxzZTsgfVxyXG4gICAgdmFyIHRpbWVvdXQ7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICB0aW1lb3V0ICE9PSBudWxsICYmIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSlcclxuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgfSwgd2FpdCk7XHJcbiAgICAgICAgaWYgKGltbWVkaWF0ZSAmJiAhdGltZW91dClcclxuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgIH07XHJcbn1cclxudmFyIGFycmF5aWZ5ID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gb2JqIDogW29ial07XHJcbn07XHJcbmZ1bmN0aW9uIG1vdXNlRGVsdGEoZSkge1xyXG4gICAgdmFyIGRlbHRhID0gZS53aGVlbERlbHRhIHx8IC1lLmRlbHRhWTtcclxuICAgIHJldHVybiBkZWx0YSA+PSAwID8gMSA6IC0xO1xyXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSwgYm9vbCkge1xyXG4gICAgaWYgKGJvb2wgPT09IHRydWUpXHJcbiAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgY29udGVudCkge1xyXG4gICAgdmFyIGUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XHJcbiAgICBjb250ZW50ID0gY29udGVudCB8fCBcIlwiO1xyXG4gICAgZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICBpZiAoY29udGVudCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgcmV0dXJuIGU7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJOb2RlKG5vZGUpIHtcclxuICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmRQYXJlbnQobm9kZSwgY29uZGl0aW9uKSB7XHJcbiAgICBpZiAoY29uZGl0aW9uKG5vZGUpKVxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKVxyXG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50KG5vZGUucGFyZW50Tm9kZSwgY29uZGl0aW9uKTtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTnVtYmVySW5wdXQoaW5wdXRDbGFzc05hbWUpIHtcclxuICAgIHZhciB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm51bUlucHV0V3JhcHBlclwiKSwgbnVtSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJudW1JbnB1dCBcIiArIGlucHV0Q2xhc3NOYW1lKSwgYXJyb3dVcCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiYXJyb3dVcFwiKSwgYXJyb3dEb3duID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJhcnJvd0Rvd25cIik7XHJcbiAgICBudW1JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBudW1JbnB1dC5wYXR0ZXJuID0gXCJcXFxcZCpcIjtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobnVtSW5wdXQpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvd1VwKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJyb3dEb3duKTtcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59XG5cbnZhciBkb19ub3RoaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9O1xyXG52YXIgcmV2Rm9ybWF0ID0ge1xyXG4gICAgRDogZG9fbm90aGluZyxcclxuICAgIEY6IGZ1bmN0aW9uIChkYXRlT2JqLCBtb250aE5hbWUsIGxvY2FsZSkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5sb25naGFuZC5pbmRleE9mKG1vbnRoTmFtZSkpO1xyXG4gICAgfSxcclxuICAgIEc6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcclxuICAgIH0sXHJcbiAgICBIOiBmdW5jdGlvbiAoZGF0ZU9iaiwgaG91cikge1xyXG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XHJcbiAgICB9LFxyXG4gICAgSjogZnVuY3Rpb24gKGRhdGVPYmosIGRheSkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xyXG4gICAgfSxcclxuICAgIEs6IGZ1bmN0aW9uIChkYXRlT2JqLCBhbVBNKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhkYXRlT2JqLmdldEhvdXJzKCkgJSAxMiArIDEyICogaW50KC9wbS9pLnRlc3QoYW1QTSkpKTtcclxuICAgIH0sXHJcbiAgICBNOiBmdW5jdGlvbiAoZGF0ZU9iaiwgc2hvcnRNb250aCwgbG9jYWxlKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChsb2NhbGUubW9udGhzLnNob3J0aGFuZC5pbmRleE9mKHNob3J0TW9udGgpKTtcclxuICAgIH0sXHJcbiAgICBTOiBmdW5jdGlvbiAoZGF0ZU9iaiwgc2Vjb25kcykge1xyXG4gICAgICAgIGRhdGVPYmouc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHNlY29uZHMpKTtcclxuICAgIH0sXHJcbiAgICBVOiBmdW5jdGlvbiAoXywgdW5peFNlY29uZHMpIHsgcmV0dXJuIG5ldyBEYXRlKHBhcnNlRmxvYXQodW5peFNlY29uZHMpICogMTAwMCk7IH0sXHJcbiAgICBXOiBmdW5jdGlvbiAoZGF0ZU9iaiwgd2Vla051bSkge1xyXG4gICAgICAgIHZhciB3ZWVrTnVtYmVyID0gcGFyc2VJbnQod2Vla051bSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVPYmouZ2V0RnVsbFllYXIoKSwgMCwgMiArICh3ZWVrTnVtYmVyIC0gMSkgKiA3LCAwLCAwLCAwLCAwKTtcclxuICAgIH0sXHJcbiAgICBZOiBmdW5jdGlvbiAoZGF0ZU9iaiwgeWVhcikge1xyXG4gICAgICAgIGRhdGVPYmouc2V0RnVsbFllYXIocGFyc2VGbG9hdCh5ZWFyKSk7XHJcbiAgICB9LFxyXG4gICAgWjogZnVuY3Rpb24gKF8sIElTT0RhdGUpIHsgcmV0dXJuIG5ldyBEYXRlKElTT0RhdGUpOyB9LFxyXG4gICAgZDogZnVuY3Rpb24gKGRhdGVPYmosIGRheSkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xyXG4gICAgfSxcclxuICAgIGg6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcclxuICAgIH0sXHJcbiAgICBpOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbWludXRlcykge1xyXG4gICAgICAgIGRhdGVPYmouc2V0TWludXRlcyhwYXJzZUZsb2F0KG1pbnV0ZXMpKTtcclxuICAgIH0sXHJcbiAgICBqOiBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5KSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XHJcbiAgICB9LFxyXG4gICAgbDogZG9fbm90aGluZyxcclxuICAgIG06IGZ1bmN0aW9uIChkYXRlT2JqLCBtb250aCkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgocGFyc2VGbG9hdChtb250aCkgLSAxKTtcclxuICAgIH0sXHJcbiAgICBuOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGgpIHtcclxuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XHJcbiAgICB9LFxyXG4gICAgczogZnVuY3Rpb24gKGRhdGVPYmosIHNlY29uZHMpIHtcclxuICAgICAgICBkYXRlT2JqLnNldFNlY29uZHMocGFyc2VGbG9hdChzZWNvbmRzKSk7XHJcbiAgICB9LFxyXG4gICAgdzogZG9fbm90aGluZyxcclxuICAgIHk6IGZ1bmN0aW9uIChkYXRlT2JqLCB5ZWFyKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRGdWxsWWVhcigyMDAwICsgcGFyc2VGbG9hdCh5ZWFyKSk7XHJcbiAgICB9LFxyXG59O1xyXG52YXIgdG9rZW5SZWdleCA9IHtcclxuICAgIEQ6IFwiKFxcXFx3KylcIixcclxuICAgIEY6IFwiKFxcXFx3KylcIixcclxuICAgIEc6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBIOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgSjogXCIoXFxcXGRcXFxcZHxcXFxcZClcXFxcdytcIixcclxuICAgIEs6IFwiKGFtfEFNfEFtfGFNfHBtfFBNfFBtfHBNKVwiLFxyXG4gICAgTTogXCIoXFxcXHcrKVwiLFxyXG4gICAgUzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIFU6IFwiKC4rKVwiLFxyXG4gICAgVzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIFk6IFwiKFxcXFxkezR9KVwiLFxyXG4gICAgWjogXCIoLispXCIsXHJcbiAgICBkOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgaDogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIGk6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBqOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgbDogXCIoXFxcXHcrKVwiLFxyXG4gICAgbTogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIG46IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBzOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgdzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIHk6IFwiKFxcXFxkezJ9KVwiLFxyXG59O1xyXG52YXIgZm9ybWF0cyA9IHtcclxuICAgIFo6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7IH0sXHJcbiAgICBEOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5cy5zaG9ydGhhbmRbZm9ybWF0cy53KGRhdGUsIGxvY2FsZSwgb3B0aW9ucyldO1xyXG4gICAgfSxcclxuICAgIEY6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbW9udGhUb1N0cihmb3JtYXRzLm4oZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSAtIDEsIGZhbHNlLCBsb2NhbGUpO1xyXG4gICAgfSxcclxuICAgIEc6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcGFkKGZvcm1hdHMuaChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpKTtcclxuICAgIH0sXHJcbiAgICBIOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSk7IH0sXHJcbiAgICBKOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5vcmRpbmFsICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBkYXRlLmdldERhdGUoKSArIGxvY2FsZS5vcmRpbmFsKGRhdGUuZ2V0RGF0ZSgpKVxyXG4gICAgICAgICAgICA6IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIEs6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiAoZGF0ZS5nZXRIb3VycygpID4gMTEgPyBcIlBNXCIgOiBcIkFNXCIpOyB9LFxyXG4gICAgTTogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiBtb250aFRvU3RyKGRhdGUuZ2V0TW9udGgoKSwgdHJ1ZSwgbG9jYWxlKTtcclxuICAgIH0sXHJcbiAgICBTOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0U2Vjb25kcygpKTsgfSxcclxuICAgIFU6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldFRpbWUoKSAvIDEwMDA7IH0sXHJcbiAgICBXOiBmdW5jdGlvbiAoZGF0ZSwgXywgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zLmdldFdlZWsoZGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgWTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTsgfSxcclxuICAgIGQ6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpOyB9LFxyXG4gICAgaDogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIChkYXRlLmdldEhvdXJzKCkgJSAxMiA/IGRhdGUuZ2V0SG91cnMoKSAlIDEyIDogMTIpOyB9LFxyXG4gICAgaTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSk7IH0sXHJcbiAgICBqOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXREYXRlKCk7IH0sXHJcbiAgICBsOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5cy5sb25naGFuZFtkYXRlLmdldERheSgpXTtcclxuICAgIH0sXHJcbiAgICBtOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpOyB9LFxyXG4gICAgbjogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDE7IH0sXHJcbiAgICBzOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRTZWNvbmRzKCk7IH0sXHJcbiAgICB3OiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXREYXkoKTsgfSxcclxuICAgIHk6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKS5zdWJzdHJpbmcoMik7IH0sXHJcbn07XG5cbmZ1bmN0aW9uIEZsYXRwaWNrckluc3RhbmNlKGVsZW1lbnQsIGluc3RhbmNlQ29uZmlnKSB7XHJcbiAgICB2YXIgc2VsZiA9IHt9O1xyXG4gICAgc2VsZi5wYXJzZURhdGUgPSBwYXJzZURhdGU7XHJcbiAgICBzZWxmLmZvcm1hdERhdGUgPSBmb3JtYXREYXRlO1xyXG4gICAgc2VsZi5fYW5pbWF0aW9uTG9vcCA9IFtdO1xyXG4gICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcclxuICAgIHNlbGYuX2JpbmQgPSBiaW5kO1xyXG4gICAgc2VsZi5fc2V0SG91cnNGcm9tRGF0ZSA9IHNldEhvdXJzRnJvbURhdGU7XHJcbiAgICBzZWxmLmNoYW5nZU1vbnRoID0gY2hhbmdlTW9udGg7XHJcbiAgICBzZWxmLmNoYW5nZVllYXIgPSBjaGFuZ2VZZWFyO1xyXG4gICAgc2VsZi5jbGVhciA9IGNsZWFyO1xyXG4gICAgc2VsZi5jbG9zZSA9IGNsb3NlO1xyXG4gICAgc2VsZi5fY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XHJcbiAgICBzZWxmLmRlc3Ryb3kgPSBkZXN0cm95O1xyXG4gICAgc2VsZi5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XHJcbiAgICBzZWxmLmp1bXBUb0RhdGUgPSBqdW1wVG9EYXRlO1xyXG4gICAgc2VsZi5vcGVuID0gb3BlbjtcclxuICAgIHNlbGYucmVkcmF3ID0gcmVkcmF3O1xyXG4gICAgc2VsZi5zZXQgPSBzZXQ7XHJcbiAgICBzZWxmLnNldERhdGUgPSBzZXREYXRlO1xyXG4gICAgc2VsZi50b2dnbGUgPSB0b2dnbGU7XHJcbiAgICBmdW5jdGlvbiBzZXR1cEhlbHBlckZ1bmN0aW9ucygpIHtcclxuICAgICAgICBzZWxmLnV0aWxzID0ge1xyXG4gICAgICAgICAgICBnZXREYXlzSW5Nb250aDogZnVuY3Rpb24gKG1vbnRoLCB5cikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSB2b2lkIDApIHsgbW9udGggPSBzZWxmLmN1cnJlbnRNb250aDsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHlyID09PSB2b2lkIDApIHsgeXIgPSBzZWxmLmN1cnJlbnRZZWFyOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGggPT09IDEgJiYgKCh5ciAlIDQgPT09IDAgJiYgeXIgJSAxMDAgIT09IDApIHx8IHlyICUgNDAwID09PSAwKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5sMTBuLmRheXNJbk1vbnRoW21vbnRoXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBzZWxmLmVsZW1lbnQgPSBzZWxmLmlucHV0ID0gZWxlbWVudDtcclxuICAgICAgICBzZWxmLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHBhcnNlQ29uZmlnKCk7XHJcbiAgICAgICAgc2V0dXBMb2NhbGUoKTtcclxuICAgICAgICBzZXR1cElucHV0cygpO1xyXG4gICAgICAgIHNldHVwRGF0ZXMoKTtcclxuICAgICAgICBzZXR1cEhlbHBlckZ1bmN0aW9ucygpO1xyXG4gICAgICAgIGlmICghc2VsZi5pc01vYmlsZSlcclxuICAgICAgICAgICAgYnVpbGQoKTtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggfHwgc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShzZWxmLmNvbmZpZy5ub0NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiB8fCBzZWxmLmNvbmZpZy5taW5EYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5zaG93VGltZUlucHV0ID1cclxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDAgfHwgc2VsZi5jb25maWcubm9DYWxlbmRhcjtcclxuICAgICAgICBpZiAoc2VsZi53ZWVrV3JhcHBlciAhPT0gdW5kZWZpbmVkICYmIHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLm9mZnNldFdpZHRoICsgc2VsZi53ZWVrV3JhcHBlci5vZmZzZXRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlKVxyXG4gICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKCk7XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25SZWFkeVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJpbmRUb0luc3RhbmNlKGZuKSB7XHJcbiAgICAgICAgcmV0dXJuIGZuLmJpbmQoc2VsZik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lKGUpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciAmJiAhc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxmLnNldERhdGUobmV3IERhdGUoKS5zZXRIb3VycyhzZWxmLmNvbmZpZy5kZWZhdWx0SG91ciwgc2VsZi5jb25maWcuZGVmYXVsdE1pbnV0ZSwgc2VsZi5jb25maWcuZGVmYXVsdFNlY29uZHMpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG4gICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aW1lV3JhcHBlcihlKTtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghc2VsZi5taW5EYXRlSGFzVGltZSB8fFxyXG4gICAgICAgICAgICBlLnR5cGUgIT09IFwiaW5wdXRcIiB8fFxyXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZS5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhbXBtMm1pbGl0YXJ5KGhvdXIsIGFtUE0pIHtcclxuICAgICAgICByZXR1cm4gaG91ciAlIDEyICsgMTIgKiBpbnQoYW1QTSA9PT0gXCJQTVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1pbGl0YXJ5MmFtcG0oaG91cikge1xyXG4gICAgICAgIHN3aXRjaCAoaG91ciAlIDI0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxMjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3VyICUgMTI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0SG91cnNGcm9tSW5wdXRzKCkge1xyXG4gICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ID09PSB1bmRlZmluZWQgfHwgc2VsZi5taW51dGVFbGVtZW50ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgaG91cnMgPSAocGFyc2VJbnQoc2VsZi5ob3VyRWxlbWVudC52YWx1ZS5zbGljZSgtMiksIDEwKSB8fCAwKSAlIDI0LCBtaW51dGVzID0gKHBhcnNlSW50KHNlbGYubWludXRlRWxlbWVudC52YWx1ZSwgMTApIHx8IDApICUgNjAsIHNlY29uZHMgPSBzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IChwYXJzZUludChzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwXHJcbiAgICAgICAgICAgIDogMDtcclxuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGhvdXJzID0gYW1wbTJtaWxpdGFyeShob3Vycywgc2VsZi5hbVBNLnRleHRDb250ZW50KTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICBzZWxmLm1pbkRhdGVIYXNUaW1lICYmXHJcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICYmXHJcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWluRGF0ZSkgPT09IDApIHtcclxuICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1heChob3Vycywgc2VsZi5jb25maWcubWluRGF0ZS5nZXRIb3VycygpKTtcclxuICAgICAgICAgICAgaWYgKGhvdXJzID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkpXHJcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5tYXgobWludXRlcywgc2VsZi5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxyXG4gICAgICAgICAgICBzZWxmLm1heERhdGVIYXNUaW1lICYmXHJcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICYmXHJcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWF4RGF0ZSkgPT09IDApIHtcclxuICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1pbihob3Vycywgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpKTtcclxuICAgICAgICAgICAgaWYgKGhvdXJzID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkpXHJcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5taW4obWludXRlcywgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IGRhdGVPYmogfHwgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmo7XHJcbiAgICAgICAgaWYgKGRhdGUpXHJcbiAgICAgICAgICAgIHNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XHJcbiAgICAgICAgaWYgKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouc2V0SG91cnMoaG91cnMgJSAyNCwgbWludXRlcywgc2Vjb25kcyB8fCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzZWxmLmhvdXJFbGVtZW50IHx8ICFzZWxmLm1pbnV0ZUVsZW1lbnQgfHwgc2VsZi5pc01vYmlsZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoIXNlbGYuY29uZmlnLnRpbWVfMjRoclxyXG4gICAgICAgICAgICA/ICgxMiArIGhvdXJzKSAlIDEyICsgMTIgKiBpbnQoaG91cnMgJSAxMiA9PT0gMClcclxuICAgICAgICAgICAgOiBob3Vycyk7XHJcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnZhbHVlID0gcGFkKG1pbnV0ZXMpO1xyXG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gaG91cnMgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XHJcbiAgICAgICAgaWYgKHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUgPSBwYWQoc2Vjb25kcyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblllYXJJbnB1dChldmVudCkge1xyXG4gICAgICAgIHZhciB5ZWFyID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSArIChldmVudC5kZWx0YSB8fCAwKTtcclxuICAgICAgICBpZiAoeWVhci50b1N0cmluZygpLmxlbmd0aCA9PT0gNCB8fCBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgICAgICAgIGlmICghL1teXFxkXS8udGVzdCh5ZWFyLnRvU3RyaW5nKCkpKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlWWVhcih5ZWFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBiaW5kKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIHJldHVybiBldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChldikgeyByZXR1cm4gYmluZChlbGVtZW50LCBldiwgaGFuZGxlcik7IH0pO1xyXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiBiaW5kKGVsLCBldmVudCwgaGFuZGxlcik7IH0pO1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XHJcbiAgICAgICAgc2VsZi5faGFuZGxlcnMucHVzaCh7IGVsZW1lbnQ6IGVsZW1lbnQsIGV2ZW50OiBldmVudCwgaGFuZGxlcjogaGFuZGxlciB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2soaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBldnQud2hpY2ggPT09IDEgJiYgaGFuZGxlcihldnQpOyB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckNoYW5nZSgpIHtcclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLndyYXApIHtcclxuICAgICAgICAgICAgW1wib3BlblwiLCBcImNsb3NlXCIsIFwidG9nZ2xlXCIsIFwiY2xlYXJcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtXCIgKyBldnQgKyBcIl1cIiksIGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5kKGVsLCBcImNsaWNrXCIsIHNlbGZbZXZ0XSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHNldHVwTW9iaWxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRlYm91bmNlZFJlc2l6ZSA9IGRlYm91bmNlKG9uUmVzaXplLCA1MCk7XHJcbiAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlID0gZGVib3VuY2UodHJpZ2dlckNoYW5nZSwgMzAwKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmIHNlbGYuZGF5c0NvbnRhaW5lcilcclxuICAgICAgICAgICAgYmluZChzZWxmLmRheXNDb250YWluZXIsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb25Nb3VzZU92ZXIoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudC5ib2R5LCBcImtleWRvd25cIiwgb25LZXlEb3duKTtcclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYylcclxuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5pbmxpbmUgJiYgIXNlbGYuY29uZmlnLnN0YXRpYylcclxuICAgICAgICAgICAgYmluZCh3aW5kb3csIFwicmVzaXplXCIsIGRlYm91bmNlZFJlc2l6ZSk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQuYm9keSwgXCJ0b3VjaHN0YXJ0XCIsIGRvY3VtZW50Q2xpY2spO1xyXG4gICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LmJvZHksIFwibW91c2Vkb3duXCIsIG9uQ2xpY2soZG9jdW1lbnRDbGljaykpO1xyXG4gICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiYmx1clwiLCBkb2N1bWVudENsaWNrKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xpY2tPcGVucyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImZvY3VzXCIsIHNlbGYub3Blbik7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwibW91c2Vkb3duXCIsIG9uQ2xpY2soc2VsZi5vcGVuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZWxmLm1vbnRoTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpOyB9KTtcclxuICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBcIndoZWVsXCIsIGRlYm91bmNlKG9uTW9udGhOYXZTY3JvbGwsIDEwKSk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aE5hdiwgXCJtb3VzZWRvd25cIiwgb25DbGljayhvbk1vbnRoTmF2Q2xpY2spKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBbXCJrZXl1cFwiLCBcImluY3JlbWVudFwiXSwgb25ZZWFySW5wdXQpO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJtb3VzZWRvd25cIiwgb25DbGljayhzZWxlY3REYXRlKSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgW1wid2Via2l0QW5pbWF0aW9uRW5kXCIsIFwiYW5pbWF0aW9uZW5kXCJdLCBhbmltYXRlRGF5cyk7XHJcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYubW9udGhOYXYsIFtcIndlYmtpdEFuaW1hdGlvbkVuZFwiLCBcImFuaW1hdGlvbmVuZFwiXSwgYW5pbWF0ZU1vbnRocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYudGltZUNvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsVGV4dCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS50YXJnZXQuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBbXCJ3aGVlbFwiLCBcImlucHV0XCIsIFwiaW5jcmVtZW50XCJdLCB1cGRhdGVUaW1lKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwibW91c2Vkb3duXCIsIG9uQ2xpY2sodGltZUluY3JlbWVudCkpO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgW1wid2hlZWxcIiwgXCJpbmNyZW1lbnRcIl0sIHNlbGYuX2RlYm91bmNlZENoYW5nZSk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBcImlucHV0XCIsIHRyaWdnZXJDaGFuZ2UpO1xyXG4gICAgICAgICAgICBiaW5kKFtzZWxmLmhvdXJFbGVtZW50LCBzZWxmLm1pbnV0ZUVsZW1lbnRdLCBbXCJmb2N1c1wiLCBcImNsaWNrXCJdLCBzZWxUZXh0KTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgYmluZChzZWxmLnNlY29uZEVsZW1lbnQsIFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5zZWNvbmRFbGVtZW50ICYmIHNlbGYuc2Vjb25kRWxlbWVudC5zZWxlY3QoKTsgfSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYmluZChzZWxmLmFtUE0sIFwibW91c2Vkb3duXCIsIG9uQ2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NQb3N0RGF5QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHNlbGYuX2FuaW1hdGlvbkxvb3AuZm9yRWFjaChmdW5jdGlvbiAoZikgeyByZXR1cm4gZigpOyB9KTtcclxuICAgICAgICBzZWxmLl9hbmltYXRpb25Mb29wID0gW107XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhbmltYXRlRGF5cyhlKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAmJiBzZWxmLmRheXNDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5hbmltYXRpb25OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZnBTbGlkZUxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIubGFzdENoaWxkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlTGVmdE5ld1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc2VsZi5kYXlzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXMgPSBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUG9zdERheUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImZwU2xpZGVSaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZVJpZ2h0TmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzZWxmLmRheXNDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzID0gc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1Bvc3REYXlBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhbmltYXRlTW9udGhzKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUuYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZnBTbGlkZUxlZnROZXdcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZwU2xpZGVSaWdodE5ld1wiOlxyXG4gICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZUxlZnROZXdcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlUmlnaHROZXdcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmF2ID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5hdi5uZXh0U2libGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIC9jdXJyLy50ZXN0KG5hdi5uZXh0U2libGluZy5jbGFzc05hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9udGhOYXYucmVtb3ZlQ2hpbGQobmF2Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuYXYucHJldmlvdXNTaWJsaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgL2N1cnIvLnRlc3QobmF2LnByZXZpb3VzU2libGluZy5jbGFzc05hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9udGhOYXYucmVtb3ZlQ2hpbGQobmF2LnByZXZpb3VzU2libGluZyk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9sZEN1ck1vbnRoID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24ganVtcFRvRGF0ZShqdW1wRGF0ZSkge1xyXG4gICAgICAgIHZhciBqdW1wVG8gPSBqdW1wRGF0ZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gcGFyc2VEYXRlKGp1bXBEYXRlKVxyXG4gICAgICAgICAgICA6IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIHx8XHJcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZSAmJiBzZWxmLmNvbmZpZy5taW5EYXRlID4gc2VsZi5ub3dcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1pbkRhdGVcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1heERhdGUgJiYgc2VsZi5jb25maWcubWF4RGF0ZSA8IHNlbGYubm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYubm93KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoanVtcFRvICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBqdW1wVG8uZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0ganVtcFRvLmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLnN0YWNrKTtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiSW52YWxpZCBkYXRlIHN1cHBsaWVkOiBcIiArIGp1bXBUbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYucmVkcmF3KCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0aW1lSW5jcmVtZW50KGUpIHtcclxuICAgICAgICBpZiAofmUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKFwiYXJyb3dcIikpXHJcbiAgICAgICAgICAgIGluY3JlbWVudE51bUlucHV0KGUsIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFycm93VXBcIikgPyAxIDogLTEpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50TnVtSW5wdXQoZSwgZGVsdGEsIGlucHV0RWxlbSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlICYmIGUudGFyZ2V0O1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGlucHV0RWxlbSB8fFxyXG4gICAgICAgICAgICAodGFyZ2V0ICYmIHRhcmdldC5wYXJlbnROb2RlICYmIHRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHZhciBldmVudCA9IGNyZWF0ZUV2ZW50KFwiaW5jcmVtZW50XCIpO1xyXG4gICAgICAgIGV2ZW50LmRlbHRhID0gZGVsdGE7XHJcbiAgICAgICAgaW5wdXQgJiYgaW5wdXQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZCgpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWNhbGVuZGFyXCIpO1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIudGFiSW5kZXggPSAtMTtcclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRNb250aE5hdigpKTtcclxuICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItaW5uZXJDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gYnVpbGRXZWVrcygpLCB3ZWVrV3JhcHBlciA9IF9hLndlZWtXcmFwcGVyLCB3ZWVrTnVtYmVycyA9IF9hLndlZWtOdW1iZXJzO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrV3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzID0gd2Vla051bWJlcnM7XHJcbiAgICAgICAgICAgICAgICBzZWxmLndlZWtXcmFwcGVyID0gd2Vla1dyYXBwZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1yQ29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBzZWxmLnJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRXZWVrZGF5cygpKTtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmRheXNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItZGF5c1wiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1aWxkRGF5cygpO1xyXG4gICAgICAgICAgICBzZWxmLnJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5kYXlzQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLnJDb250YWluZXIpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmlubmVyQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRUaW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJhbmdlTW9kZVwiLCBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpO1xyXG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYW5pbWF0ZVwiLCBzZWxmLmNvbmZpZy5hbmltYXRlKTtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICAgICAgICB2YXIgY3VzdG9tQXBwZW5kID0gc2VsZi5jb25maWcuYXBwZW5kVG8gIT09IHVuZGVmaW5lZCAmJiBzZWxmLmNvbmZpZy5hcHBlbmRUby5ub2RlVHlwZTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lIHx8IHNlbGYuY29uZmlnLnN0YXRpYykge1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuaW5saW5lID8gXCJpbmxpbmVcIiA6IFwic3RhdGljXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lICYmICFjdXN0b21BcHBlbmQgJiYgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBzZWxmLl9pbnB1dC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdyYXBwZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5lbGVtZW50LnBhcmVudE5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dClcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuYWx0SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiAhc2VsZi5jb25maWcuaW5saW5lKVxyXG4gICAgICAgICAgICAoc2VsZi5jb25maWcuYXBwZW5kVG8gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hcHBlbmRUb1xyXG4gICAgICAgICAgICAgICAgOiB3aW5kb3cuZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEYXkoY2xhc3NOYW1lLCBkYXRlLCBkYXlOdW1iZXIsIGkpIHtcclxuICAgICAgICB2YXIgZGF0ZUlzRW5hYmxlZCA9IGlzRW5hYmxlZChkYXRlLCB0cnVlKSwgZGF5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWRheSBcIiArIGNsYXNzTmFtZSwgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZGF5RWxlbWVudC5kYXRlT2JqID0gZGF0ZTtcclxuICAgICAgICBkYXlFbGVtZW50LiRpID0gaTtcclxuICAgICAgICBkYXlFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5mb3JtYXREYXRlKGRhdGUsIHNlbGYuY29uZmlnLmFyaWFEYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgaWYgKGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLm5vdykgPT09IDApIHtcclxuICAgICAgICAgICAgc2VsZi50b2RheURhdGVFbGVtID0gZGF5RWxlbWVudDtcclxuICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRlSXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGRheUVsZW1lbnQudGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgaWYgKGlzRGF0ZVNlbGVjdGVkKGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSA9IGRheUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJzdGFydFJhbmdlXCIsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdKSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJlbmRSYW5nZVwiLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSkgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlc1swXSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgJiZcclxuICAgICAgICAgICAgICAgIGRhdGUgPiBzZWxmLm1pblJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZSA8IHNlbGYuc2VsZWN0ZWREYXRlc1swXSlcclxuICAgICAgICAgICAgICAgIHNlbGYubWluUmFuZ2VEYXRlID0gZGF0ZTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5zZWxlY3RlZERhdGVzWzBdICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZSA8IHNlbGYubWF4UmFuZ2VEYXRlICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlID4gc2VsZi5zZWxlY3RlZERhdGVzWzBdKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5tYXhSYW5nZURhdGUgPSBkYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0RhdGVJblJhbmdlKGRhdGUpICYmICFpc0RhdGVTZWxlY3RlZChkYXRlKSlcclxuICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAoZGF0ZSA8IHNlbGYubWluUmFuZ2VEYXRlIHx8IGRhdGUgPiBzZWxmLm1heFJhbmdlRGF0ZSkpXHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJub3RBbGxvd2VkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi53ZWVrTnVtYmVycyAmJlxyXG4gICAgICAgICAgICBjbGFzc05hbWUgIT09IFwicHJldk1vbnRoRGF5XCIgJiZcclxuICAgICAgICAgICAgZGF5TnVtYmVyICUgNyA9PT0gMSkge1xyXG4gICAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxzcGFuIGNsYXNzPSdkaXNhYmxlZCBmbGF0cGlja3ItZGF5Jz5cIiArXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5nZXRXZWVrKGRhdGUpICtcclxuICAgICAgICAgICAgICAgIFwiPC9zcGFuPlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25EYXlDcmVhdGVcIiwgZGF5RWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGRheUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb2N1c09uRGF5KGN1cnJlbnRJbmRleCwgb2Zmc2V0KSB7XHJcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gY3VycmVudEluZGV4ICsgb2Zmc2V0IHx8IDAsIHRhcmdldE5vZGUgPSAoY3VycmVudEluZGV4ICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBzZWxmLmRheXMuY2hpbGROb2Rlc1tuZXdJbmRleF1cclxuICAgICAgICAgICAgOiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gfHxcclxuICAgICAgICAgICAgICAgIHNlbGYudG9kYXlEYXRlRWxlbSB8fFxyXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgIHZhciBmb2N1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGUgfHwgc2VsZi5kYXlzLmNoaWxkTm9kZXNbbmV3SW5kZXhdO1xyXG4gICAgICAgICAgICB0YXJnZXROb2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcih0YXJnZXROb2RlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0YXJnZXROb2RlID09PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKDEsIHRydWUsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICUgNDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VNb250aCgtMSwgdHJ1ZSwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG5ld0luZGV4ICs9IDQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhZnRlckRheUFuaW0oZm9jdXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb2N1cygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWZ0ZXJEYXlBbmltKGZuKSB7XHJcbiAgICAgICAgc2VsZi5jb25maWcuYW5pbWF0ZSA9PT0gdHJ1ZSA/IHNlbGYuX2FuaW1hdGlvbkxvb3AucHVzaChmbikgOiBmbigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYnVpbGREYXlzKGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZpcnN0T2ZNb250aCA9IChuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgMSkuZ2V0RGF5KCkgLVxyXG4gICAgICAgICAgICBzZWxmLmwxMG4uZmlyc3REYXlPZldlZWsgK1xyXG4gICAgICAgICAgICA3KSAlXHJcbiAgICAgICAgICAgIDcsIGlzUmFuZ2VNb2RlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiO1xyXG4gICAgICAgIHZhciBwcmV2TW9udGhEYXlzID0gc2VsZi51dGlscy5nZXREYXlzSW5Nb250aCgoc2VsZi5jdXJyZW50TW9udGggLSAxICsgMTIpICUgMTIpO1xyXG4gICAgICAgIHZhciBkYXlzSW5Nb250aCA9IHNlbGYudXRpbHMuZ2V0RGF5c0luTW9udGgoKSwgZGF5cyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdmFyIGRheU51bWJlciA9IHByZXZNb250aERheXMgKyAxIC0gZmlyc3RPZk1vbnRoLCBkYXlJbmRleCA9IDA7XHJcbiAgICAgICAgaWYgKHNlbGYud2Vla051bWJlcnMgJiYgc2VsZi53ZWVrTnVtYmVycy5maXJzdENoaWxkKVxyXG4gICAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBpZiAoaXNSYW5nZU1vZGUpIHtcclxuICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCAtIDEsIGRheU51bWJlcik7XHJcbiAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggKyAxLCAoNDIgLSBmaXJzdE9mTW9udGgpICUgZGF5c0luTW9udGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKDsgZGF5TnVtYmVyIDw9IHByZXZNb250aERheXM7IGRheU51bWJlcisrLCBkYXlJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwicHJldk1vbnRoRGF5XCIsIG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoIC0gMSwgZGF5TnVtYmVyKSwgZGF5TnVtYmVyLCBkYXlJbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGRheU51bWJlciA9IDE7IGRheU51bWJlciA8PSBkYXlzSW5Nb250aDsgZGF5TnVtYmVyKyssIGRheUluZGV4KyspIHtcclxuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJcIiwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIGRheU51bWJlciksIGRheU51bWJlciwgZGF5SW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgZGF5TnVtID0gZGF5c0luTW9udGggKyAxOyBkYXlOdW0gPD0gNDIgLSBmaXJzdE9mTW9udGg7IGRheU51bSsrLCBkYXlJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwibmV4dE1vbnRoRGF5XCIsIG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoICsgMSwgZGF5TnVtICUgZGF5c0luTW9udGgpLCBkYXlOdW0sIGRheUluZGV4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1JhbmdlTW9kZSAmJiBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxICYmIGRheXMuY2hpbGROb2Rlc1swXSkge1xyXG4gICAgICAgICAgICBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPVxyXG4gICAgICAgICAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCEhc2VsZi5taW5SYW5nZURhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgPiBkYXlzLmNoaWxkTm9kZXNbMF0uZGF0ZU9iaik7XHJcbiAgICAgICAgICAgIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgfHxcclxuICAgICAgICAgICAgICAgICAgICAoISFzZWxmLm1heFJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCArIDEsIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcbiAgICAgICAgdmFyIGRheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkYXlDb250YWluZXJcIik7XHJcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheXMpO1xyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcuYW5pbWF0ZSB8fCBkZWx0YSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjbGVhck5vZGUoc2VsZi5kYXlzQ29udGFpbmVyKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2hpbGUgKHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGVsdGEgJiYgZGVsdGEgPj0gMClcclxuICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheUNvbnRhaW5lcik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKGRheUNvbnRhaW5lciwgc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHNlbGYuZGF5cyA9IHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZE5vZGVzWzBdO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYnVpbGRNb250aE5hdigpIHtcclxuICAgICAgICB2YXIgbW9udGhOYXZGcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgc2VsZi5tb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItbW9udGhcIik7XHJcbiAgICAgICAgc2VsZi5wcmV2TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1wcmV2LW1vbnRoXCIpO1xyXG4gICAgICAgIHNlbGYucHJldk1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLnByZXZBcnJvdztcclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImN1ci1tb250aFwiKTtcclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQudGl0bGUgPSBzZWxmLmwxMG4uc2Nyb2xsVGl0bGU7XHJcbiAgICAgICAgdmFyIHllYXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiY3VyLXllYXJcIik7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQgPSB5ZWFySW5wdXQuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC50aXRsZSA9IHNlbGYubDEwbi5zY3JvbGxUaXRsZTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSlcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWluID0gc2VsZi5jb25maWcubWluRGF0ZVxyXG4gICAgICAgICAgICAgICAgLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1heCA9IHNlbGYuY29uZmlnLm1heERhdGVcclxuICAgICAgICAgICAgICAgIC5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQuZGlzYWJsZWQgPVxyXG4gICAgICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYubmV4dE1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItbmV4dC1tb250aFwiKTtcclxuICAgICAgICBzZWxmLm5leHRNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5uZXh0QXJyb3c7XHJcbiAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItY3VycmVudC1tb250aFwiKTtcclxuICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguYXBwZW5kQ2hpbGQoc2VsZi5jdXJyZW50TW9udGhFbGVtZW50KTtcclxuICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguYXBwZW5kQ2hpbGQoeWVhcklucHV0KTtcclxuICAgICAgICBtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYucHJldk1vbnRoTmF2KTtcclxuICAgICAgICBtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aCk7XHJcbiAgICAgICAgbW9udGhOYXZGcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLm5leHRNb250aE5hdik7XHJcbiAgICAgICAgc2VsZi5tb250aE5hdi5hcHBlbmRDaGlsZChtb250aE5hdkZyYWdtZW50KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJfaGlkZVByZXZNb250aEFycm93XCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLl9faGlkZVByZXZNb250aEFycm93OyB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdyAhPT0gYm9vbClcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByZXZNb250aE5hdi5zdHlsZS5kaXNwbGF5ID0gYm9vbCA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdyA9IGJvb2w7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIFwiX2hpZGVOZXh0TW9udGhBcnJvd1wiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdzsgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoYm9vbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX19oaWRlTmV4dE1vbnRoQXJyb3cgIT09IGJvb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYuc3R5bGUuZGlzcGxheSA9IGJvb2wgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIHNlbGYuX19oaWRlTmV4dE1vbnRoQXJyb3cgPSBib29sO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICByZXR1cm4gc2VsZi5tb250aE5hdjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJ1aWxkVGltZSgpIHtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNUaW1lXCIpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKVxyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJub0NhbGVuZGFyXCIpO1xyXG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItdGltZVwiKTtcclxuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIudGFiSW5kZXggPSAtMTtcclxuICAgICAgICB2YXIgc2VwYXJhdG9yID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpO1xyXG4gICAgICAgIHZhciBob3VySW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1ob3VyXCIpO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQgPSBob3VySW5wdXQuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB2YXIgbWludXRlSW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1taW51dGVcIik7XHJcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50ID0gbWludXRlSW5wdXQuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnRhYkluZGV4ID0gc2VsZi5taW51dGVFbGVtZW50LnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxyXG4gICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldEhvdXJzKClcclxuICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy50aW1lXzI0aHJcclxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuZGVmYXVsdEhvdXJcclxuICAgICAgICAgICAgICAgIDogbWlsaXRhcnkyYW1wbShzZWxmLmNvbmZpZy5kZWZhdWx0SG91cikpO1xyXG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxyXG4gICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldE1pbnV0ZXMoKVxyXG4gICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRNaW51dGUpO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQuc3RlcCA9IHNlbGYuY29uZmlnLmhvdXJJbmNyZW1lbnQudG9TdHJpbmcoKTtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc3RlcCA9IHNlbGYuY29uZmlnLm1pbnV0ZUluY3JlbWVudC50b1N0cmluZygpO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQubWluID0gc2VsZi5jb25maWcudGltZV8yNGhyID8gXCIwXCIgOiBcIjFcIjtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50Lm1heCA9IHNlbGYuY29uZmlnLnRpbWVfMjRociA/IFwiMjNcIiA6IFwiMTJcIjtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQubWluID0gXCIwXCI7XHJcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50Lm1heCA9IFwiNTlcIjtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnRpdGxlID0gc2VsZi5taW51dGVFbGVtZW50LnRpdGxlID0gc2VsZi5sMTBuLnNjcm9sbFRpdGxlO1xyXG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob3VySW5wdXQpO1xyXG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xyXG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW51dGVJbnB1dCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLnRpbWVfMjRocilcclxuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lMjRoclwiKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcykge1xyXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1NlY29uZHNcIik7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLXNlY29uZFwiKTtcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50ID0gc2Vjb25kSW5wdXQuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXHJcbiAgICAgICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldFNlY29uZHMoKVxyXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kZWZhdWx0U2Vjb25kcyk7XHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5zdGVwID0gc2VsZi5taW51dGVFbGVtZW50LnN0ZXA7XHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5taW4gPSBzZWxmLm1pbnV0ZUVsZW1lbnQubWluO1xyXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQubWF4ID0gc2VsZi5taW51dGVFbGVtZW50Lm1heDtcclxuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yXCIsIFwiOlwiKSk7XHJcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcudGltZV8yNGhyKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYW1QTSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWFtLXBtXCIsIHNlbGYubDEwbi5hbVBNW2ludCgoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcclxuICAgICAgICAgICAgICAgID8gc2VsZi5ob3VyRWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kZWZhdWx0SG91cikgPiAxMSldKTtcclxuICAgICAgICAgICAgc2VsZi5hbVBNLnRpdGxlID0gc2VsZi5sMTBuLnRvZ2dsZVRpdGxlO1xyXG4gICAgICAgICAgICBzZWxmLmFtUE0udGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuYW1QTSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxmLnRpbWVDb250YWluZXI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZFdlZWtkYXlzKCkge1xyXG4gICAgICAgIGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKVxyXG4gICAgICAgICAgICBzZWxmLndlZWtkYXlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtkYXlzXCIpO1xyXG4gICAgICAgIHZhciBmaXJzdERheU9mV2VlayA9IHNlbGYubDEwbi5maXJzdERheU9mV2VlaztcclxuICAgICAgICB2YXIgd2Vla2RheXMgPSBzZWxmLmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kLnNsaWNlKCk7XHJcbiAgICAgICAgaWYgKGZpcnN0RGF5T2ZXZWVrID4gMCAmJiBmaXJzdERheU9mV2VlayA8IHdlZWtkYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB3ZWVrZGF5cyA9IHdlZWtkYXlzLnNwbGljZShmaXJzdERheU9mV2Vlaywgd2Vla2RheXMubGVuZ3RoKS5jb25jYXQod2Vla2RheXMuc3BsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlxcbiAgICA8c3BhbiBjbGFzcz1mbGF0cGlja3Itd2Vla2RheT5cXG4gICAgICBcIiArIHdlZWtkYXlzLmpvaW4oXCI8L3NwYW4+PHNwYW4gY2xhc3M9ZmxhdHBpY2tyLXdlZWtkYXk+XCIpICsgXCJcXG4gICAgPC9zcGFuPlxcbiAgICBcIjtcclxuICAgICAgICByZXR1cm4gc2VsZi53ZWVrZGF5Q29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYnVpbGRXZWVrcygpIHtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNXZWVrc1wiKTtcclxuICAgICAgICB2YXIgd2Vla1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWt3cmFwcGVyXCIpO1xyXG4gICAgICAgIHdlZWtXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXdlZWtkYXlcIiwgc2VsZi5sMTBuLndlZWtBYmJyZXZpYXRpb24pKTtcclxuICAgICAgICB2YXIgd2Vla051bWJlcnMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtzXCIpO1xyXG4gICAgICAgIHdlZWtXcmFwcGVyLmFwcGVuZENoaWxkKHdlZWtOdW1iZXJzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3ZWVrV3JhcHBlcjogd2Vla1dyYXBwZXIsXHJcbiAgICAgICAgICAgIHdlZWtOdW1iZXJzOiB3ZWVrTnVtYmVycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hhbmdlTW9udGgodmFsdWUsIGlzX29mZnNldCwgYW5pbWF0ZSwgZnJvbV9rZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChpc19vZmZzZXQgPT09IHZvaWQgMCkgeyBpc19vZmZzZXQgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGFuaW1hdGUgPT09IHZvaWQgMCkgeyBhbmltYXRlID0gc2VsZi5jb25maWcuYW5pbWF0ZTsgfVxyXG4gICAgICAgIGlmIChmcm9tX2tleWJvYXJkID09PSB2b2lkIDApIHsgZnJvbV9rZXlib2FyZCA9IGZhbHNlOyB9XHJcbiAgICAgICAgdmFyIGRlbHRhID0gaXNfb2Zmc2V0ID8gdmFsdWUgOiB2YWx1ZSAtIHNlbGYuY3VycmVudE1vbnRoO1xyXG4gICAgICAgIGlmICgoZGVsdGEgPCAwICYmIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdykgfHxcclxuICAgICAgICAgICAgKGRlbHRhID4gMCAmJiBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGggKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHNlbGYuY3VycmVudE1vbnRoIDwgMCB8fCBzZWxmLmN1cnJlbnRNb250aCA+IDExKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgKz0gc2VsZi5jdXJyZW50TW9udGggPiAxMSA/IDEgOiAtMTtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSAoc2VsZi5jdXJyZW50TW9udGggKyAxMikgJSAxMjtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZERheXMoYW5pbWF0ZSA/IGRlbHRhIDogdW5kZWZpbmVkKTtcclxuICAgICAgICBpZiAoIWFuaW1hdGUpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5hdiA9IHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aDtcclxuICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChuYXYubmV4dFNpYmxpbmcgJiZcclxuICAgICAgICAgICAgICAgIC9jdXJyLy50ZXN0KG5hdi5uZXh0U2libGluZy5jbGFzc05hbWUpKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5tb250aE5hdi5yZW1vdmVDaGlsZChuYXYubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgICAgd2hpbGUgKG5hdi5wcmV2aW91c1NpYmxpbmcgJiZcclxuICAgICAgICAgICAgICAgIC9jdXJyLy50ZXN0KG5hdi5wcmV2aW91c1NpYmxpbmcuY2xhc3NOYW1lKSlcclxuICAgICAgICAgICAgICAgIHNlbGYubW9udGhOYXYucmVtb3ZlQ2hpbGQobmF2LnByZXZpb3VzU2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYub2xkQ3VyTW9udGggPSBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGg7XHJcbiAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoID0gc2VsZi5tb250aE5hdi5pbnNlcnRCZWZvcmUoc2VsZi5vbGRDdXJNb250aC5jbG9uZU5vZGUodHJ1ZSksIGRlbHRhID4gMCA/IHNlbGYub2xkQ3VyTW9udGgubmV4dFNpYmxpbmcgOiBzZWxmLm9sZEN1ck1vbnRoKTtcclxuICAgICAgICB2YXIgZGF5c0NvbnRhaW5lciA9IHNlbGYuZGF5c0NvbnRhaW5lcjtcclxuICAgICAgICBpZiAoZGF5c0NvbnRhaW5lci5maXJzdENoaWxkICYmIGRheXNDb250YWluZXIubGFzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRheXNDb250YWluZXIuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNsaWRlTGVmdE5ld1wiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYub2xkQ3VyTW9udGguY2xhc3NMaXN0LmFkZChcInNsaWRlTGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0TmV3XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0TmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9sZEN1ck1vbnRoLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0TmV3XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoRWxlbWVudCA9IHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aFxyXG4gICAgICAgICAgICAuZmlyc3RDaGlsZDtcclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudCA9IHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5sYXN0Q2hpbGRcclxuICAgICAgICAgICAgLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xyXG4gICAgICAgIGlmIChzZWxmLm9sZEN1ck1vbnRoLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgICAgIHNlbGYub2xkQ3VyTW9udGguZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IG1vbnRoVG9TdHIoc2VsZi5jdXJyZW50TW9udGggLSBkZWx0YSwgc2VsZi5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLCBzZWxmLmwxMG4pO1xyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XHJcbiAgICAgICAgaWYgKGZyb21fa2V5Ym9hcmQgJiZcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LiRpKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleF8xID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudC4kaTtcclxuICAgICAgICAgICAgYWZ0ZXJEYXlBbmltKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoaW5kZXhfMSwgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlOyB9XHJcbiAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQpXHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0KVxyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbXTtcclxuICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHVuZGVmaW5lZDtcclxuICAgICAgICBzZWxmLnNob3dUaW1lSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQgPT09IHRydWUpXHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgICAgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgICAgICAgc2VsZi5faW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DbG9zZVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uRGVzdHJveVwiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gc2VsZi5faGFuZGxlcnMubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgIHZhciBoID0gc2VsZi5faGFuZGxlcnNbaV07XHJcbiAgICAgICAgICAgIGguZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGguZXZlbnQsIGguaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuX2hhbmRsZXJzID0gW107XHJcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLm1vYmlsZUlucHV0KTtcclxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciAmJiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUpXHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcclxuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCkge1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmFsdElucHV0KTtcclxuICAgICAgICAgICAgZGVsZXRlIHNlbGYuYWx0SW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmlucHV0KSB7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IHNlbGYuaW5wdXQuX3R5cGU7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImZsYXRwaWNrci1pbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJfc2hvd1RpbWVJbnB1dFwiLFxyXG4gICAgICAgICAgICBcImxhdGVzdFNlbGVjdGVkRGF0ZU9ialwiLFxyXG4gICAgICAgICAgICBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIixcclxuICAgICAgICAgICAgXCJfaGlkZVByZXZNb250aEFycm93XCIsXHJcbiAgICAgICAgICAgIFwiX19oaWRlTmV4dE1vbnRoQXJyb3dcIixcclxuICAgICAgICAgICAgXCJfX2hpZGVQcmV2TW9udGhBcnJvd1wiLFxyXG4gICAgICAgICAgICBcImlzTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwiaXNPcGVuXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0ZWREYXRlRWxlbVwiLFxyXG4gICAgICAgICAgICBcIm1pbkRhdGVIYXNUaW1lXCIsXHJcbiAgICAgICAgICAgIFwibWF4RGF0ZUhhc1RpbWVcIixcclxuICAgICAgICAgICAgXCJkYXlzXCIsXHJcbiAgICAgICAgICAgIFwiZGF5c0NvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcIl9pbnB1dFwiLFxyXG4gICAgICAgICAgICBcIl9wb3NpdGlvbkVsZW1lbnRcIixcclxuICAgICAgICAgICAgXCJpbm5lckNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcInJDb250YWluZXJcIixcclxuICAgICAgICAgICAgXCJtb250aE5hdlwiLFxyXG4gICAgICAgICAgICBcInRvZGF5RGF0ZUVsZW1cIixcclxuICAgICAgICAgICAgXCJjYWxlbmRhckNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcIndlZWtkYXlDb250YWluZXJcIixcclxuICAgICAgICAgICAgXCJwcmV2TW9udGhOYXZcIixcclxuICAgICAgICAgICAgXCJuZXh0TW9udGhOYXZcIixcclxuICAgICAgICAgICAgXCJjdXJyZW50TW9udGhFbGVtZW50XCIsXHJcbiAgICAgICAgICAgIFwiY3VycmVudFllYXJFbGVtZW50XCIsXHJcbiAgICAgICAgICAgIFwibmF2aWdhdGlvbkN1cnJlbnRNb250aFwiLFxyXG4gICAgICAgICAgICBcInNlbGVjdGVkRGF0ZUVsZW1cIixcclxuICAgICAgICAgICAgXCJjb25maWdcIixcclxuICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24gKGspIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzQ2FsZW5kYXJFbGVtKGVsZW0pIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuYXBwZW5kVG8gJiYgc2VsZi5jb25maWcuYXBwZW5kVG8uY29udGFpbnMoZWxlbSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGVsZW0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZG9jdW1lbnRDbGljayhlKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgdmFyIGlzQ2FsZW5kYXJFbGVtZW50ID0gaXNDYWxlbmRhckVsZW0oZS50YXJnZXQpO1xyXG4gICAgICAgICAgICB2YXIgaXNJbnB1dCA9IGUudGFyZ2V0ID09PSBzZWxmLmlucHV0IHx8XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dCB8fFxyXG4gICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSB8fFxyXG4gICAgICAgICAgICAgICAgKGUucGF0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGUucGF0aC5pbmRleE9mICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKH5lLnBhdGguaW5kZXhPZihzZWxmLmlucHV0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB+ZS5wYXRoLmluZGV4T2Yoc2VsZi5hbHRJbnB1dCkpKTtcclxuICAgICAgICAgICAgdmFyIGxvc3RGb2N1cyA9IGUudHlwZSA9PT0gXCJibHVyXCJcclxuICAgICAgICAgICAgICAgID8gaXNJbnB1dCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGUucmVsYXRlZFRhcmdldCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFpc0NhbGVuZGFyRWxlbShlLnJlbGF0ZWRUYXJnZXQpXHJcbiAgICAgICAgICAgICAgICA6ICFpc0lucHV0ICYmICFpc0NhbGVuZGFyRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGxvc3RGb2N1cyAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuaWdub3JlZEZvY3VzRWxlbWVudHMuaW5kZXhPZihlLnRhcmdldCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hhbmdlWWVhcihuZXdZZWFyKSB7XHJcbiAgICAgICAgaWYgKCFuZXdZZWFyIHx8XHJcbiAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5taW4gJiZcclxuICAgICAgICAgICAgICAgIG5ld1llYXIgPCBwYXJzZUludChzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5taW4pKSB8fFxyXG4gICAgICAgICAgICAoc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWF4ICYmXHJcbiAgICAgICAgICAgICAgICBuZXdZZWFyID4gcGFyc2VJbnQoc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWF4KSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgbmV3WWVhck51bSA9IG5ld1llYXIsIGlzTmV3WWVhciA9IHNlbGYuY3VycmVudFllYXIgIT09IG5ld1llYXJOdW07XHJcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IG5ld1llYXJOdW0gfHwgc2VsZi5jdXJyZW50WWVhcjtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkpIHtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBNYXRoLm1pbihzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCksIHNlbGYuY3VycmVudE1vbnRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpIHtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBNYXRoLm1heChzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKCksIHNlbGYuY3VycmVudE1vbnRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTmV3WWVhcikge1xyXG4gICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGRhdGUsIHRpbWVsZXNzKSB7XHJcbiAgICAgICAgaWYgKHRpbWVsZXNzID09PSB2b2lkIDApIHsgdGltZWxlc3MgPSB0cnVlOyB9XHJcbiAgICAgICAgdmFyIGRhdGVUb0NoZWNrID0gc2VsZi5wYXJzZURhdGUoZGF0ZSwgdW5kZWZpbmVkLCB0aW1lbGVzcyk7XHJcbiAgICAgICAgaWYgKChzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgIGRhdGVUb0NoZWNrICYmXHJcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlVG9DaGVjaywgc2VsZi5jb25maWcubWluRGF0ZSwgdGltZWxlc3MgIT09IHVuZGVmaW5lZCA/IHRpbWVsZXNzIDogIXNlbGYubWluRGF0ZUhhc1RpbWUpIDwgMCkgfHxcclxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcclxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICYmXHJcbiAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZVRvQ2hlY2ssIHNlbGYuY29uZmlnLm1heERhdGUsIHRpbWVsZXNzICE9PSB1bmRlZmluZWQgPyB0aW1lbGVzcyA6ICFzZWxmLm1heERhdGVIYXNUaW1lKSA+IDApKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoICYmICFzZWxmLmNvbmZpZy5kaXNhYmxlLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKGRhdGVUb0NoZWNrID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgYm9vbCA9IHNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggPiAwLCBhcnJheSA9IGJvb2wgPyBzZWxmLmNvbmZpZy5lbmFibGUgOiBzZWxmLmNvbmZpZy5kaXNhYmxlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBkID0gdm9pZCAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZCA9IGFycmF5W2ldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgZChkYXRlVG9DaGVjaykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZCBpbnN0YW5jZW9mIERhdGUgJiZcclxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIGQuZ2V0VGltZSgpID09PSBkYXRlVG9DaGVjay5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGQgPT09IFwic3RyaW5nXCIgJiYgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHNlbGYucGFyc2VEYXRlKGQsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkICYmIHBhcnNlZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gYm9vbFxyXG4gICAgICAgICAgICAgICAgICAgIDogIWJvb2w7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGQgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIGQuZnJvbSAmJlxyXG4gICAgICAgICAgICAgICAgZC50byAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2suZ2V0VGltZSgpID49IGQuZnJvbS5nZXRUaW1lKCkgJiZcclxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrLmdldFRpbWUoKSA8PSBkLnRvLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gIWJvb2w7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xyXG4gICAgICAgIHZhciBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuX2lucHV0O1xyXG4gICAgICAgIHZhciBjYWxlbmRhckVsZW0gPSBpc0NhbGVuZGFyRWxlbShlLnRhcmdldCk7XHJcbiAgICAgICAgdmFyIGFsbG93SW5wdXQgPSBzZWxmLmNvbmZpZy5hbGxvd0lucHV0O1xyXG4gICAgICAgIHZhciBhbGxvd0tleWRvd24gPSBzZWxmLmlzT3BlbiAmJiAoIWFsbG93SW5wdXQgfHwgIWlzSW5wdXQpO1xyXG4gICAgICAgIHZhciBhbGxvd0lubGluZUtleWRvd24gPSBzZWxmLmNvbmZpZy5pbmxpbmUgJiYgaXNJbnB1dCAmJiAhYWxsb3dJbnB1dDtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBpc0lucHV0KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd0lucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldERhdGUoc2VsZi5faW5wdXQudmFsdWUsIHRydWUsIGUudGFyZ2V0ID09PSBzZWxmLmFsdElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hbHRGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZWxmLm9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2FsZW5kYXJFbGVtIHx8IGFsbG93S2V5ZG93biB8fCBhbGxvd0lubGluZUtleWRvd24pIHtcclxuICAgICAgICAgICAgdmFyIGlzVGltZU9iaiA9ICEhc2VsZi50aW1lQ29udGFpbmVyICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRW50ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaW1lT2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0RGF0ZShlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0lucHV0ICYmICFzZWxmLmNvbmZpZy5hbGxvd0lucHV0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUaW1lT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzEgPSBlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIgPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUuY3RybEtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGUudGFyZ2V0LiRpLCBkZWx0YV8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb250aChkZWx0YV8xLCB0cnVlLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuaG91ckVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IGUua2V5ID09PSBcIkFycm93RG93blwiID8gMSA6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgJiYgZS50YXJnZXQuJGkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgLSBkZWx0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGUudGFyZ2V0LiRpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNUaW1lT2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheShlLnRhcmdldC4kaSwgZGVsdGEgKiA3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZU9iaiAmJiBzZWxmLmhvdXJFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9kZWJvdW5jZWRDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiVGFiXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBzZWxmLmhvdXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldCA9PT0gc2VsZi5taW51dGVFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxmLnNlY29uZEVsZW1lbnQgfHwgc2VsZi5hbVBNKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldCA9PT0gc2VsZi5zZWNvbmRFbGVtZW50ICYmIHNlbGYuYW1QTSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gXCJBTVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCAmJiBlLnRhcmdldCA9PT0gc2VsZi5hbVBNKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IFwiUE1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbktleURvd25cIiwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU92ZXIoZWxlbSkge1xyXG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICE9PSAxIHx8XHJcbiAgICAgICAgICAgICFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgfHxcclxuICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGhvdmVyRGF0ZSA9IGVsZW0uZGF0ZU9iaiwgaW5pdGlhbERhdGUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHVuZGVmaW5lZCwgdHJ1ZSksIHJhbmdlU3RhcnREYXRlID0gTWF0aC5taW4oaG92ZXJEYXRlLmdldFRpbWUoKSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSksIHJhbmdlRW5kRGF0ZSA9IE1hdGgubWF4KGhvdmVyRGF0ZS5nZXRUaW1lKCksIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpLCBjb250YWluc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgdCA9IHJhbmdlU3RhcnREYXRlOyB0IDwgcmFuZ2VFbmREYXRlOyB0ICs9IGR1cmF0aW9uLkRBWSkge1xyXG4gICAgICAgICAgICBpZiAoIWlzRW5hYmxlZChuZXcgRGF0ZSh0KSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAodGltZXN0YW1wLCBpKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRPZlJhbmdlID0gdGltZXN0YW1wIDwgc2VsZi5taW5SYW5nZURhdGUuZ2V0VGltZSgpIHx8XHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXAgPiBzZWxmLm1heFJhbmdlRGF0ZS5nZXRUaW1lKCksIGRheUVsZW0gPSBzZWxmLmRheXMuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgICAgaWYgKG91dE9mUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcIm5vdEFsbG93ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBbXCJpblJhbmdlXCIsIFwic3RhcnRSYW5nZVwiLCBcImVuZFJhbmdlXCJdLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29udGFpbnNEaXNhYmxlZCAmJiAhb3V0T2ZSYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XHJcbiAgICAgICAgICAgIFtcInN0YXJ0UmFuZ2VcIiwgXCJpblJhbmdlXCIsIFwiZW5kUmFuZ2VcIiwgXCJub3RBbGxvd2VkXCJdLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBtaW5SYW5nZURhdGUgPSBNYXRoLm1heChzZWxmLm1pblJhbmdlRGF0ZS5nZXRUaW1lKCksIHJhbmdlU3RhcnREYXRlKSwgbWF4UmFuZ2VEYXRlID0gTWF0aC5taW4oc2VsZi5tYXhSYW5nZURhdGUuZ2V0VGltZSgpLCByYW5nZUVuZERhdGUpO1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoaG92ZXJEYXRlIDwgc2VsZi5zZWxlY3RlZERhdGVzWzBdID8gXCJzdGFydFJhbmdlXCIgOiBcImVuZFJhbmdlXCIpO1xyXG4gICAgICAgICAgICBpZiAoaW5pdGlhbERhdGUgPCBob3ZlckRhdGUgJiYgdGltZXN0YW1wID09PSBpbml0aWFsRGF0ZS5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJzdGFydFJhbmdlXCIpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChpbml0aWFsRGF0ZSA+IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcImVuZFJhbmdlXCIpO1xyXG4gICAgICAgICAgICBpZiAodGltZXN0YW1wID49IG1pblJhbmdlRGF0ZSAmJiB0aW1lc3RhbXAgPD0gbWF4UmFuZ2VEYXRlKVxyXG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIHRpbWVzdGFtcCA9IHNlbGYuZGF5cy5jaGlsZE5vZGVzWzBdLmRhdGVPYmouZ2V0VGltZSgpLCBpID0gMDsgaSA8IDQyOyBpKyssIHRpbWVzdGFtcCArPSBkdXJhdGlvbi5EQVkpIHtcclxuICAgICAgICAgICAgX2xvb3BfMSh0aW1lc3RhbXAsIGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplKCkge1xyXG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuc3RhdGljICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpXHJcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9wZW4oZSwgcG9zaXRpb25FbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uRWxlbWVudCA9PT0gdm9pZCAwKSB7IHBvc2l0aW9uRWxlbWVudCA9IHNlbGYuX2lucHV0OyB9XHJcbiAgICAgICAgaWYgKHNlbGYuaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0ICYmIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLm1vYmlsZUlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk9wZW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuIHx8IHNlbGYuX2lucHV0LmRpc2FibGVkIHx8IHNlbGYuY29uZmlnLmlubGluZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNlbGYuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIocG9zaXRpb25FbGVtZW50KTtcclxuICAgICAgICBzZWxmLl9pbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uT3BlblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1pbk1heERhdGVTZXR0ZXIodHlwZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0ZU9iaiA9IChzZWxmLmNvbmZpZ1tcIl9cIiArIHR5cGUgKyBcIkRhdGVcIl0gPSBzZWxmLnBhcnNlRGF0ZShkYXRlKSk7XHJcbiAgICAgICAgICAgIHZhciBpbnZlcnNlRGF0ZU9iaiA9IHNlbGYuY29uZmlnW1wiX1wiICsgKHR5cGUgPT09IFwibWluXCIgPyBcIm1heFwiIDogXCJtaW5cIikgKyBcIkRhdGVcIl07XHJcbiAgICAgICAgICAgIGlmIChkYXRlT2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGZbdHlwZSA9PT0gXCJtaW5cIiA/IFwibWluRGF0ZUhhc1RpbWVcIiA6IFwibWF4RGF0ZUhhc1RpbWVcIl0gPVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0SG91cnMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRNaW51dGVzKCkgPiAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0U2Vjb25kcygpID4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBzZWxmLnNlbGVjdGVkRGF0ZXMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBpc0VuYWJsZWQoZCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICYmIHR5cGUgPT09IFwibWluXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShkYXRlT2JqKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgcmVkcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9iaiAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50W3R5cGVdID0gZGF0ZU9iai5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQuZGlzYWJsZWQgPVxyXG4gICAgICAgICAgICAgICAgICAgICEhaW52ZXJzZURhdGVPYmogJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iaiAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VEYXRlT2JqLmdldEZ1bGxZZWFyKCkgPT09IGRhdGVPYmouZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZUNvbmZpZygpIHtcclxuICAgICAgICB2YXIgYm9vbE9wdHMgPSBbXHJcbiAgICAgICAgICAgIFwid3JhcFwiLFxyXG4gICAgICAgICAgICBcIndlZWtOdW1iZXJzXCIsXHJcbiAgICAgICAgICAgIFwiYWxsb3dJbnB1dFwiLFxyXG4gICAgICAgICAgICBcImNsaWNrT3BlbnNcIixcclxuICAgICAgICAgICAgXCJ0aW1lXzI0aHJcIixcclxuICAgICAgICAgICAgXCJlbmFibGVUaW1lXCIsXHJcbiAgICAgICAgICAgIFwibm9DYWxlbmRhclwiLFxyXG4gICAgICAgICAgICBcImFsdElucHV0XCIsXHJcbiAgICAgICAgICAgIFwic2hvcnRoYW5kQ3VycmVudE1vbnRoXCIsXHJcbiAgICAgICAgICAgIFwiaW5saW5lXCIsXHJcbiAgICAgICAgICAgIFwic3RhdGljXCIsXHJcbiAgICAgICAgICAgIFwiZW5hYmxlU2Vjb25kc1wiLFxyXG4gICAgICAgICAgICBcImRpc2FibGVNb2JpbGVcIixcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBob29rcyA9IFtcclxuICAgICAgICAgICAgXCJvbkNoYW5nZVwiLFxyXG4gICAgICAgICAgICBcIm9uQ2xvc2VcIixcclxuICAgICAgICAgICAgXCJvbkRheUNyZWF0ZVwiLFxyXG4gICAgICAgICAgICBcIm9uRGVzdHJveVwiLFxyXG4gICAgICAgICAgICBcIm9uS2V5RG93blwiLFxyXG4gICAgICAgICAgICBcIm9uTW9udGhDaGFuZ2VcIixcclxuICAgICAgICAgICAgXCJvbk9wZW5cIixcclxuICAgICAgICAgICAgXCJvblBhcnNlQ29uZmlnXCIsXHJcbiAgICAgICAgICAgIFwib25SZWFkeVwiLFxyXG4gICAgICAgICAgICBcIm9uVmFsdWVVcGRhdGVcIixcclxuICAgICAgICAgICAgXCJvblllYXJDaGFuZ2VcIixcclxuICAgICAgICBdO1xyXG4gICAgICAgIHNlbGYuY29uZmlnID0gX19hc3NpZ24oe30sIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKTtcclxuICAgICAgICB2YXIgdXNlckNvbmZpZyA9IF9fYXNzaWduKHt9LCBpbnN0YW5jZUNvbmZpZywgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbGVtZW50LmRhdGFzZXQgfHwge30pKSk7XHJcbiAgICAgICAgdmFyIGZvcm1hdHMkJDEgPSB7fTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwiZW5hYmxlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fZW5hYmxlIHx8IFtdOyB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuX2VuYWJsZSA9IHBhcnNlRGF0ZVJ1bGVzKGRhdGVzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwiZGlzYWJsZVwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX2Rpc2FibGUgfHwgW107IH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5fZGlzYWJsZSA9IHBhcnNlRGF0ZVJ1bGVzKGRhdGVzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXVzZXJDb25maWcuZGF0ZUZvcm1hdCAmJiB1c2VyQ29uZmlnLmVuYWJsZVRpbWUpIHtcclxuICAgICAgICAgICAgZm9ybWF0cyQkMS5kYXRlRm9ybWF0ID0gdXNlckNvbmZpZy5ub0NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICA/IFwiSDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIilcclxuICAgICAgICAgICAgICAgIDogZmxhdHBpY2tyLmRlZmF1bHRDb25maWcuZGF0ZUZvcm1hdCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgSDppXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXJDb25maWcuYWx0SW5wdXQgJiYgdXNlckNvbmZpZy5lbmFibGVUaW1lICYmICF1c2VyQ29uZmlnLmFsdEZvcm1hdCkge1xyXG4gICAgICAgICAgICBmb3JtYXRzJCQxLmFsdEZvcm1hdCA9IHVzZXJDb25maWcubm9DYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgPyBcImg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlMgS1wiIDogXCIgS1wiKVxyXG4gICAgICAgICAgICAgICAgOiBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5hbHRGb3JtYXQgK1xyXG4gICAgICAgICAgICAgICAgICAgIChcIiBoOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKSArIFwiIEtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtaW5EYXRlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fbWluRGF0ZTsgfSxcclxuICAgICAgICAgICAgc2V0OiBtaW5NYXhEYXRlU2V0dGVyKFwibWluXCIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtYXhEYXRlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fbWF4RGF0ZTsgfSxcclxuICAgICAgICAgICAgc2V0OiBtaW5NYXhEYXRlU2V0dGVyKFwibWF4XCIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIGZvcm1hdHMkJDEsIHVzZXJDb25maWcpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9vbE9wdHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBob29rcy5sZW5ndGg7IGktLTspIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnW2hvb2tzW2ldXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tob29rc1tpXV0gPSBhcnJheWlmeShzZWxmLmNvbmZpZ1tob29rc1tpXV0gfHwgW10pLm1hcChiaW5kVG9JbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmNvbmZpZy5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwbHVnaW5Db25mID0gc2VsZi5jb25maWcucGx1Z2luc1tpXShzZWxmKSB8fCB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHBsdWdpbkNvbmYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh+aG9va3MuaW5kZXhPZihrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdba2V5XSA9IGFycmF5aWZ5KHBsdWdpbkNvbmZba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChiaW5kVG9JbnN0YW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChzZWxmLmNvbmZpZ1trZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1c2VyQ29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdba2V5XSA9IHBsdWdpbkNvbmZba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLmlzTW9iaWxlID1cclxuICAgICAgICAgICAgIXNlbGYuY29uZmlnLmRpc2FibGVNb2JpbGUgJiZcclxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5pbmxpbmUgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiZcclxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5kaXNhYmxlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy53ZWVrTnVtYmVycyAmJlxyXG4gICAgICAgICAgICAgICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uUGFyc2VDb25maWdcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXR1cExvY2FsZSgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuY29uZmlnLmxvY2FsZSAhPT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV0gPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImZsYXRwaWNrcjogaW52YWxpZCBsb2NhbGUgXCIgKyBzZWxmLmNvbmZpZy5sb2NhbGUpO1xyXG4gICAgICAgIHNlbGYubDEwbiA9IF9fYXNzaWduKHt9LCBmbGF0cGlja3IubDEwbnMuZGVmYXVsdCwgdHlwZW9mIHNlbGYuY29uZmlnLmxvY2FsZSA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLmxvY2FsZVxyXG4gICAgICAgICAgICA6IHNlbGYuY29uZmlnLmxvY2FsZSAhPT0gXCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgID8gZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV1cclxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ2FsZW5kYXIocG9zaXRpb25FbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uRWxlbWVudCA9PT0gdm9pZCAwKSB7IHBvc2l0aW9uRWxlbWVudCA9IHNlbGYuX3Bvc2l0aW9uRWxlbWVudDsgfVxyXG4gICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgY2FsZW5kYXJIZWlnaHQgPSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLm9mZnNldEhlaWdodCwgY2FsZW5kYXJXaWR0aCA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIub2Zmc2V0V2lkdGgsIGNvbmZpZ1BvcyA9IHNlbGYuY29uZmlnLnBvc2l0aW9uLCBpbnB1dEJvdW5kcyA9IHBvc2l0aW9uRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgZGlzdGFuY2VGcm9tQm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0IC0gaW5wdXRCb3VuZHMuYm90dG9tLCBzaG93T25Ub3AgPSBjb25maWdQb3MgPT09IFwiYWJvdmVcIiB8fFxyXG4gICAgICAgICAgICAoY29uZmlnUG9zICE9PSBcImJlbG93XCIgJiZcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlRnJvbUJvdHRvbSA8IGNhbGVuZGFySGVpZ2h0ICYmXHJcbiAgICAgICAgICAgICAgICBpbnB1dEJvdW5kcy50b3AgPiBjYWxlbmRhckhlaWdodCk7XHJcbiAgICAgICAgdmFyIHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCArXHJcbiAgICAgICAgICAgIGlucHV0Qm91bmRzLnRvcCArXHJcbiAgICAgICAgICAgICghc2hvd09uVG9wID8gcG9zaXRpb25FbGVtZW50Lm9mZnNldEhlaWdodCArIDIgOiAtY2FsZW5kYXJIZWlnaHQgLSAyKTtcclxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93VG9wXCIsICFzaG93T25Ub3ApO1xyXG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dCb3R0b21cIiwgc2hvd09uVG9wKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGxlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgKyBpbnB1dEJvdW5kcy5sZWZ0O1xyXG4gICAgICAgIHZhciByaWdodCA9IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIC0gaW5wdXRCb3VuZHMucmlnaHQ7XHJcbiAgICAgICAgdmFyIHJpZ2h0TW9zdCA9IGxlZnQgKyBjYWxlbmRhcldpZHRoID4gd2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyaWdodE1vc3RcIiwgcmlnaHRNb3N0KTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XHJcbiAgICAgICAgaWYgKCFyaWdodE1vc3QpIHtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSByaWdodCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgfHwgc2VsZi5pc01vYmlsZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGJ1aWxkV2Vla2RheXMoKTtcclxuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcbiAgICAgICAgYnVpbGREYXlzKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZWxlY3REYXRlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB2YXIgaXNTZWxlY3RhYmxlID0gZnVuY3Rpb24gKGRheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF5LmNsYXNzTGlzdCAmJlxyXG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgJiZcclxuICAgICAgICAgICAgICAgICFkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikgJiZcclxuICAgICAgICAgICAgICAgICFkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90QWxsb3dlZFwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB0ID0gZmluZFBhcmVudChlLnRhcmdldCwgaXNTZWxlY3RhYmxlKTtcclxuICAgICAgICBpZiAodCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHQ7XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkRGF0ZSA9IChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IG5ldyBEYXRlKHRhcmdldC5kYXRlT2JqLmdldFRpbWUoKSkpO1xyXG4gICAgICAgIHZhciBzaG91bGRDaGFuZ2VNb250aCA9IHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpICE9PSBzZWxmLmN1cnJlbnRNb250aCAmJlxyXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCI7XHJcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVFbGVtID0gdGFyZ2V0O1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiKVxyXG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbc2VsZWN0ZWREYXRlXTtcclxuICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcIm11bHRpcGxlXCIpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBpc0RhdGVTZWxlY3RlZChzZWxlY3RlZERhdGUpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleClcclxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zcGxpY2UocGFyc2VJbnQoc2VsZWN0ZWRJbmRleCksIDEpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMucHVzaChzZWxlY3RlZERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChjb21wYXJlRGF0ZXMoc2VsZWN0ZWREYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHRydWUpICE9PSAwKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICBpZiAoc2hvdWxkQ2hhbmdlTW9udGgpIHtcclxuICAgICAgICAgICAgdmFyIGlzTmV3WWVhciA9IHNlbGYuY3VycmVudFllYXIgIT09IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIGlmIChpc05ld1llYXIpXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkRGF5cygpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgIHNlbGYubWluRGF0ZUhhc1RpbWUgJiZcclxuICAgICAgICAgICAgc2VsZi5jb25maWcuZW5hYmxlVGltZSAmJlxyXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoc2VsZWN0ZWREYXRlLCBzZWxmLmNvbmZpZy5taW5EYXRlKSA9PT0gMClcclxuICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIChzZWxmLnNob3dUaW1lSW5wdXQgPSB0cnVlKTsgfSwgNTApO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZi5taW5SYW5nZURhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5cy5jaGlsZE5vZGVzWzBdLmRhdGVPYmopO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93ID1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGYubWF4UmFuZ2VEYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCArIDEsIDEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xyXG4gICAgICAgIGlmICghc2hvdWxkQ2hhbmdlTW9udGgpXHJcbiAgICAgICAgICAgIGZvY3VzT25EYXkodGFyZ2V0LiRpLCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGFmdGVyRGF5QW5pbShmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gJiYgc2VsZi5zZWxlY3RlZERhdGVFbGVtLmZvY3VzKCk7IH0pO1xyXG4gICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIHNlbGYuaG91ckVsZW1lbnQuc2VsZWN0KCk7IH0sIDQ1MSk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNsb3NlT25TZWxlY3QpIHtcclxuICAgICAgICAgICAgdmFyIHNpbmdsZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiYgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XHJcbiAgICAgICAgICAgIGlmIChzaW5nbGUgfHwgcmFuZ2UpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0KG9wdGlvbiwgdmFsdWUpIHtcclxuICAgICAgICBpZiAob3B0aW9uICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb24gPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIG9wdGlvbik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZWxmLmNvbmZpZ1tvcHRpb25dID0gdmFsdWU7XHJcbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcclxuICAgICAgICBqdW1wVG9EYXRlKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRTZWxlY3RlZERhdGUoaW5wdXREYXRlLCBmb3JtYXQpIHtcclxuICAgICAgICB2YXIgZGF0ZXMgPSBbXTtcclxuICAgICAgICBpZiAoaW5wdXREYXRlIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gc2VsZi5wYXJzZURhdGUoZCwgZm9ybWF0KTsgfSk7XHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXREYXRlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgaW5wdXREYXRlID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICBkYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBpbnB1dERhdGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzZWxmLmNvbmZpZy5tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2luZ2xlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXMgPSBbc2VsZi5wYXJzZURhdGUoaW5wdXREYXRlLCBmb3JtYXQpXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIjsgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHNlbGYucGFyc2VEYXRlKGRhdGUsIGZvcm1hdCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJhbmdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KHNlbGYubDEwbi5yYW5nZVNlcGFyYXRvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IGRhdGVzLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCBpbnN0YW5jZW9mIERhdGUgJiYgaXNFbmFibGVkKGQsIGZhbHNlKTsgfSk7XHJcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCk7IH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0RGF0ZShkYXRlLCB0cmlnZ2VyQ2hhbmdlLCBmb3JtYXQpIHtcclxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSA9PT0gdm9pZCAwKSB7IHRyaWdnZXJDaGFuZ2UgPSBmYWxzZTsgfVxyXG4gICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSB1bmRlZmluZWQ7IH1cclxuICAgICAgICBpZiAoZGF0ZSAhPT0gMCAmJiAhZGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2xlYXIodHJpZ2dlckNoYW5nZSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWREYXRlKGRhdGUsIGZvcm1hdCk7XHJcbiAgICAgICAgc2VsZi5zaG93VGltZUlucHV0ID0gc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF07XHJcbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcclxuICAgICAgICBqdW1wVG9EYXRlKCk7XHJcbiAgICAgICAgc2V0SG91cnNGcm9tRGF0ZSgpO1xyXG4gICAgICAgIHVwZGF0ZVZhbHVlKHRyaWdnZXJDaGFuZ2UpO1xyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlKVxyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZVJ1bGVzKGFycikge1xyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBydWxlID09PSBcIm51bWJlclwiIHx8XHJcbiAgICAgICAgICAgICAgICBydWxlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFyc2VEYXRlKHJ1bGUsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocnVsZSAmJlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHJ1bGUgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICAgIHJ1bGUuZnJvbSAmJlxyXG4gICAgICAgICAgICAgICAgcnVsZS50bylcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogc2VsZi5wYXJzZURhdGUocnVsZS5mcm9tLCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBzZWxmLnBhcnNlRGF0ZShydWxlLnRvLCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXR1cERhdGVzKCkge1xyXG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xyXG4gICAgICAgIHNlbGYubm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgcHJlbG9hZGVkRGF0ZSA9IHNlbGYuY29uZmlnLmRlZmF1bHREYXRlIHx8IHNlbGYuaW5wdXQudmFsdWU7XHJcbiAgICAgICAgaWYgKHByZWxvYWRlZERhdGUpXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRGF0ZShwcmVsb2FkZWREYXRlLCBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcclxuICAgICAgICB2YXIgaW5pdGlhbERhdGUgPSBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgID8gc2VsZi5zZWxlY3RlZERhdGVzWzBdXHJcbiAgICAgICAgICAgIDogc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRUaW1lKCkgPiBzZWxmLm5vdy5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluRGF0ZVxyXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRUaW1lKCkgPCBzZWxmLm5vdy5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1heERhdGVcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYubm93O1xyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBpbml0aWFsRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gaW5pdGlhbERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aClcclxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF07XHJcbiAgICAgICAgc2VsZi5taW5EYXRlSGFzVGltZSA9XHJcbiAgICAgICAgICAgICEhc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldFNlY29uZHMoKSA+IDApO1xyXG4gICAgICAgIHNlbGYubWF4RGF0ZUhhc1RpbWUgPVxyXG4gICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1heERhdGUgJiZcclxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkgPiAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCkgPiAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRTZWNvbmRzKCkgPiAwKTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJzaG93VGltZUlucHV0XCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLl9zaG93VGltZUlucHV0OyB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9zaG93VGltZUlucHV0ID0gYm9vbDtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwic2hvd1RpbWVJbnB1dFwiLCBib29sKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZU9iaiwgZnJtdCkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIHNlbGYuY29uZmlnLmZvcm1hdERhdGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29uZmlnLmZvcm1hdERhdGUoZGF0ZU9iaiwgZnJtdCk7XHJcbiAgICAgICAgcmV0dXJuIGZybXRcclxuICAgICAgICAgICAgLnNwbGl0KFwiXCIpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMsIGksIGFycikge1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0c1tjXSAmJiBhcnJbaSAtIDFdICE9PSBcIlxcXFxcIlxyXG4gICAgICAgICAgICAgICAgPyBmb3JtYXRzW2NdKGRhdGVPYmosIHNlbGYubDEwbiwgc2VsZi5jb25maWcpXHJcbiAgICAgICAgICAgICAgICA6IGMgIT09IFwiXFxcXFwiID8gYyA6IFwiXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZURhdGUoZGF0ZSwgZ2l2ZW5Gb3JtYXQsIHRpbWVsZXNzKSB7XHJcbiAgICAgICAgaWYgKGRhdGUgIT09IDAgJiYgIWRhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIHBhcnNlZERhdGU7XHJcbiAgICAgICAgdmFyIGRhdGVfb3JpZyA9IGRhdGU7XHJcbiAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKVxyXG4gICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRlICE9PSBcInN0cmluZ1wiICYmXHJcbiAgICAgICAgICAgIGRhdGUudG9GaXhlZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGdpdmVuRm9ybWF0IHx8IChzZWxmLmNvbmZpZyB8fCBmbGF0cGlja3IuZGVmYXVsdENvbmZpZykuZGF0ZUZvcm1hdDtcclxuICAgICAgICAgICAgdmFyIGRhdGVzdHIgPSBTdHJpbmcoZGF0ZSkudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZXN0ciA9PT0gXCJ0b2RheVwiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVsZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgvWiQvLnRlc3QoZGF0ZXN0cikgfHxcclxuICAgICAgICAgICAgICAgIC9HTVQkLy50ZXN0KGRhdGVzdHIpKVxyXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZyAmJiBzZWxmLmNvbmZpZy5wYXJzZURhdGUpXHJcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gc2VsZi5jb25maWcucGFyc2VEYXRlKGRhdGUsIGZvcm1hdCk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnIHx8ICFzZWxmLmNvbmZpZy5ub0NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxLCAwLCAwLCAwLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZWQgPSB2b2lkIDAsIG9wcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG1hdGNoSW5kZXggPSAwLCByZWdleFN0ciA9IFwiXCI7IGkgPCBmb3JtYXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBmb3JtYXRbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQmFja1NsYXNoID0gdG9rZW4gPT09IFwiXFxcXFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkID0gZm9ybWF0W2kgLSAxXSA9PT0gXCJcXFxcXCIgfHwgaXNCYWNrU2xhc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuUmVnZXhbdG9rZW5dICYmICFlc2NhcGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4U3RyICs9IHRva2VuUmVnZXhbdG9rZW5dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBuZXcgUmVnRXhwKHJlZ2V4U3RyKS5leGVjKGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgKG1hdGNoZWQgPSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BzW3Rva2VuICE9PSBcIllcIiA/IFwicHVzaFwiIDogXCJ1bnNoaWZ0XCJdKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogcmV2Rm9ybWF0W3Rva2VuXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWw6IG1hdGNoWysrbWF0Y2hJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNCYWNrU2xhc2gpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4U3RyICs9IFwiLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBfYS5mbiwgdmFsID0gX2EudmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlZERhdGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4ocGFyc2VkRGF0ZSwgdmFsLCBzZWxmLmwxMG4pIHx8IHBhcnNlZERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG1hdGNoZWQgPyBwYXJzZWREYXRlIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKHBhcnNlZERhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJmbGF0cGlja3I6IGludmFsaWQgZGF0ZSBcIiArIGRhdGVfb3JpZyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhzZWxmLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZWxlc3MgPT09IHRydWUpXHJcbiAgICAgICAgICAgIHBhcnNlZERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZERhdGU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXR1cElucHV0cygpIHtcclxuICAgICAgICBzZWxmLmlucHV0ID0gc2VsZi5jb25maWcud3JhcFxyXG4gICAgICAgICAgICA/IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWlucHV0XVwiKVxyXG4gICAgICAgICAgICA6IGVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKCFzZWxmLmlucHV0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkVycm9yOiBpbnZhbGlkIGlucHV0IGVsZW1lbnQgc3BlY2lmaWVkXCIsIHNlbGYuaW5wdXQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuaW5wdXQuX3R5cGUgPSBzZWxmLmlucHV0LnR5cGU7XHJcbiAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgc2VsZi5pbnB1dC5jbGFzc0xpc3QuYWRkKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xyXG4gICAgICAgIHNlbGYuX2lucHV0ID0gc2VsZi5pbnB1dDtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoc2VsZi5pbnB1dC5ub2RlTmFtZSwgc2VsZi5pbnB1dC5jbGFzc05hbWUgKyBcIiBcIiArIHNlbGYuY29uZmlnLmFsdElucHV0Q2xhc3MpO1xyXG4gICAgICAgICAgICBzZWxmLl9pbnB1dCA9IHNlbGYuYWx0SW5wdXQ7XHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGxhY2Vob2xkZXIgPSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LmRpc2FibGVkID0gc2VsZi5pbnB1dC5kaXNhYmxlZDtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5yZXF1aXJlZCA9IHNlbGYuaW5wdXQucmVxdWlyZWQ7XHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiBzZWxmLmlucHV0LnBhcmVudE5vZGUpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuYWx0SW5wdXQsIHNlbGYuaW5wdXQubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpXHJcbiAgICAgICAgICAgIHNlbGYuX2lucHV0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwicmVhZG9ubHlcIik7XHJcbiAgICAgICAgc2VsZi5fcG9zaXRpb25FbGVtZW50ID0gc2VsZi5jb25maWcucG9zaXRpb25FbGVtZW50IHx8IHNlbGYuX2lucHV0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0dXBNb2JpbGUoKSB7XHJcbiAgICAgICAgdmFyIGlucHV0VHlwZSA9IHNlbGYuY29uZmlnLmVuYWJsZVRpbWVcclxuICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID8gXCJ0aW1lXCIgOiBcImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgOiBcImRhdGVcIjtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHNlbGYuaW5wdXQuY2xhc3NOYW1lICsgXCIgZmxhdHBpY2tyLW1vYmlsZVwiKTtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnN0ZXAgPSBzZWxmLmlucHV0LmdldEF0dHJpYnV0ZShcInN0ZXBcIikgfHwgXCJhbnlcIjtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnRhYkluZGV4ID0gMTtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XHJcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5kaXNhYmxlZCA9IHNlbGYuaW5wdXQuZGlzYWJsZWQ7XHJcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5wbGFjZWhvbGRlciA9IHNlbGYuaW5wdXQucGxhY2Vob2xkZXI7XHJcbiAgICAgICAgc2VsZi5tb2JpbGVGb3JtYXRTdHIgPVxyXG4gICAgICAgICAgICBpbnB1dFR5cGUgPT09IFwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgPyBcIlktbS1kXFxcXFRIOmk6U1wiXHJcbiAgICAgICAgICAgICAgICA6IGlucHV0VHlwZSA9PT0gXCJkYXRlXCIgPyBcIlktbS1kXCIgOiBcIkg6aTpTXCI7XHJcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5kZWZhdWx0VmFsdWUgPSBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSlcclxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5taW4gPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5jb25maWcubWluRGF0ZSwgXCJZLW0tZFwiKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSlcclxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5tYXggPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5jb25maWcubWF4RGF0ZSwgXCJZLW0tZFwiKTtcclxuICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGlmIChzZWxmLmFsdElucHV0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuaW5wdXQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5tb2JpbGVJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChfYSkgeyB9XHJcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShlLnRhcmdldC52YWx1ZSwgZmFsc2UsIHNlbGYubW9iaWxlRm9ybWF0U3RyKTtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2xvc2VcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jbG9zZSgpO1xyXG4gICAgICAgIHNlbGYub3BlbigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckV2ZW50KGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGhvb2tzID0gc2VsZi5jb25maWdbZXZlbnRdO1xyXG4gICAgICAgIGlmIChob29rcyAhPT0gdW5kZWZpbmVkICYmIGhvb2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGhvb2tzW2ldICYmIGkgPCBob29rcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIGhvb2tzW2ldKHNlbGYuc2VsZWN0ZWREYXRlcywgc2VsZi5pbnB1dC52YWx1ZSwgc2VsZiwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudCA9PT0gXCJvbkNoYW5nZVwiKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudChcImlucHV0XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XHJcbiAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xyXG4gICAgICAgIGUuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNEYXRlU2VsZWN0ZWQoZGF0ZSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wYXJlRGF0ZXMoc2VsZi5zZWxlY3RlZERhdGVzW2ldLCBkYXRlKSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNEYXRlSW5SYW5nZShkYXRlKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiB8fCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIDwgMilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAoY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSkgPj0gMCAmJlxyXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdKSA8PSAwKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgfHwgc2VsZi5pc01vYmlsZSB8fCAhc2VsZi5tb250aE5hdilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoRWxlbWVudC50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIG1vbnRoVG9TdHIoc2VsZi5jdXJyZW50TW9udGgsIHNlbGYuY29uZmlnLnNob3J0aGFuZEN1cnJlbnRNb250aCwgc2VsZi5sMTBuKSArIFwiIFwiO1xyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnZhbHVlID0gc2VsZi5jdXJyZW50WWVhci50b1N0cmluZygpO1xyXG4gICAgICAgIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jdXJyZW50TW9udGggPD0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmN1cnJlbnRZZWFyIDwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPVxyXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY3VycmVudE1vbnRoICsgMSA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jdXJyZW50WWVhciA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZSh0cmlnZ2VyQ2hhbmdlKSB7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmICghc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2xlYXIodHJpZ2dlckNoYW5nZSk7XHJcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLm1vYmlsZUZvcm1hdFN0cikge1xyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID1cclxuICAgICAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgam9pbkNoYXIgPSBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCJcclxuICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5jb25qdW5jdGlvblxyXG4gICAgICAgICAgICA6IHNlbGYubDEwbi5yYW5nZVNlcGFyYXRvcjtcclxuICAgICAgICBzZWxmLmlucHV0LnZhbHVlID0gc2VsZi5zZWxlY3RlZERhdGVzXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGRPYmopIHsgcmV0dXJuIHNlbGYuZm9ybWF0RGF0ZShkT2JqLCBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTsgfSlcclxuICAgICAgICAgICAgLmpvaW4oam9pbkNoYXIpO1xyXG4gICAgICAgIGlmIChzZWxmLmFsdElucHV0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC52YWx1ZSA9IHNlbGYuc2VsZWN0ZWREYXRlc1xyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZE9iaikgeyByZXR1cm4gc2VsZi5mb3JtYXREYXRlKGRPYmosIHNlbGYuY29uZmlnLmFsdEZvcm1hdCk7IH0pXHJcbiAgICAgICAgICAgICAgICAuam9pbihqb2luQ2hhcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlICE9PSBmYWxzZSlcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25WYWx1ZVVwZGF0ZVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW9udGhOYXZTY3JvbGwoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaXNZZWFyID0gc2VsZi5jdXJyZW50WWVhckVsZW1lbnQucGFyZW50Tm9kZSAmJlxyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5wYXJlbnROb2RlLmNvbnRhaW5zKGUudGFyZ2V0KTtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHNlbGYuY3VycmVudE1vbnRoRWxlbWVudCB8fCBpc1llYXIpIHtcclxuICAgICAgICAgICAgdmFyIGRlbHRhID0gbW91c2VEZWx0YShlKTtcclxuICAgICAgICAgICAgaWYgKGlzWWVhcikge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyICsgZGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBzZWxmLmN1cnJlbnRZZWFyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VNb250aChkZWx0YSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW9udGhOYXZDbGljayhlKSB7XHJcbiAgICAgICAgdmFyIGlzUHJldk1vbnRoID0gc2VsZi5wcmV2TW9udGhOYXYuY29udGFpbnMoZS50YXJnZXQpO1xyXG4gICAgICAgIHZhciBpc05leHRNb250aCA9IHNlbGYubmV4dE1vbnRoTmF2LmNvbnRhaW5zKGUudGFyZ2V0KTtcclxuICAgICAgICBpZiAoaXNQcmV2TW9udGggfHwgaXNOZXh0TW9udGgpXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbnRoKGlzUHJldk1vbnRoID8gLTEgOiAxKTtcclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldCA9PT0gc2VsZi5jdXJyZW50WWVhckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFycm93VXBcIilcclxuICAgICAgICAgICAgc2VsZi5jaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgKyAxKTtcclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYXJyb3dEb3duXCIpXHJcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyIC0gMSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0aW1lV3JhcHBlcihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBpc0tleURvd24gPSBlLnR5cGUgPT09IFwia2V5ZG93blwiLCBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCAmJiBlLnRhcmdldCA9PT0gc2VsZi5hbVBNKVxyXG4gICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICAgICAgc2VsZi5sMTBuLmFtUE1bc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBcIkFNXCIgPyAxIDogMF07XHJcbiAgICAgICAgdmFyIG1pbiA9IE51bWJlcihpbnB1dC5taW4pLCBtYXggPSBOdW1iZXIoaW5wdXQubWF4KSwgc3RlcCA9IE51bWJlcihpbnB1dC5zdGVwKSwgY3VyVmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApLCBkZWx0YSA9IGUuZGVsdGEgfHxcclxuICAgICAgICAgICAgKGlzS2V5RG93blxyXG4gICAgICAgICAgICAgICAgPyBlLndoaWNoID09PSAzOCA/IDEgOiAtMVxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZS53aGVlbERlbHRhIHx8IC1lLmRlbHRhWSkpIHx8IDApO1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGN1clZhbHVlICsgc3RlcCAqIGRlbHRhO1xyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5wdXQudmFsdWUubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHZhciBpc0hvdXJFbGVtID0gaW5wdXQgPT09IHNlbGYuaG91ckVsZW1lbnQsIGlzTWludXRlRWxlbSA9IGlucHV0ID09PSBzZWxmLm1pbnV0ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IG1pbikge1xyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIG1heCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50KCFpc0hvdXJFbGVtKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnQoaXNIb3VyRWxlbSkgJiYgaW50KCFzZWxmLmFtUE0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc01pbnV0ZUVsZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQodW5kZWZpbmVkLCAtMSwgc2VsZi5ob3VyRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV3VmFsdWUgPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCA/IG5ld1ZhbHVlIC0gbWF4IC0gaW50KCFzZWxmLmFtUE0pIDogbWluO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTWludXRlRWxlbSlcclxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dCh1bmRlZmluZWQsIDEsIHNlbGYuaG91ckVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmFtUE0gJiZcclxuICAgICAgICAgICAgICAgIGlzSG91ckVsZW0gJiZcclxuICAgICAgICAgICAgICAgIChzdGVwID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgPyBuZXdWYWx1ZSArIGN1clZhbHVlID09PSAyM1xyXG4gICAgICAgICAgICAgICAgICAgIDogTWF0aC5hYnMobmV3VmFsdWUgLSBjdXJWYWx1ZSkgPiBzdGVwKSlcclxuICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYuYW1QTS50ZXh0Q29udGVudCA9PT0gXCJQTVwiID8gXCJBTVwiIDogXCJQTVwiO1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHBhZChuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdCgpO1xyXG4gICAgcmV0dXJuIHNlbGY7XHJcbn1cclxuZnVuY3Rpb24gX2ZsYXRwaWNrcihub2RlTGlzdCwgY29uZmlnKSB7XHJcbiAgICB2YXIgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XHJcbiAgICB2YXIgaW5zdGFuY2VzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLW9taXRcIikgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKG5vZGUuX2ZsYXRwaWNrciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLl9mbGF0cGlja3IuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5fZmxhdHBpY2tyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrciA9IEZsYXRwaWNrckluc3RhbmNlKG5vZGUsIGNvbmZpZyB8fCB7fSk7XHJcbiAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKG5vZGUuX2ZsYXRwaWNrcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLCBlLnN0YWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5zdGFuY2VzLmxlbmd0aCA9PT0gMSA/IGluc3RhbmNlc1swXSA6IGluc3RhbmNlcztcclxufVxyXG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuZmxhdHBpY2tyID0gTm9kZUxpc3QucHJvdG90eXBlLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xyXG4gICAgfTtcclxuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IoW3RoaXNdLCBjb25maWcpO1xyXG4gICAgfTtcclxufVxyXG52YXIgZmxhdHBpY2tyO1xyXG5mbGF0cGlja3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbmZpZykge1xyXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3Ioc2VsZWN0b3IsIGNvbmZpZyk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3Iod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCBjb25maWcpO1xyXG4gICAgcmV0dXJuIF9mbGF0cGlja3IoW3NlbGVjdG9yXSwgY29uZmlnKTtcclxufTtcclxud2luZG93LmZsYXRwaWNrciA9IGZsYXRwaWNrcjtcclxuZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSBkZWZhdWx0cztcclxuZmxhdHBpY2tyLmwxMG5zID0ge1xyXG4gICAgZW46IF9fYXNzaWduKHt9LCBlbmdsaXNoKSxcclxuICAgIGRlZmF1bHQ6IF9fYXNzaWduKHt9LCBlbmdsaXNoKSxcclxufTtcclxuZmxhdHBpY2tyLmxvY2FsaXplID0gZnVuY3Rpb24gKGwxMG4pIHtcclxuICAgIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0ID0gX19hc3NpZ24oe30sIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0LCBsMTBuKTtcclxufTtcclxuZmxhdHBpY2tyLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSBfX2Fzc2lnbih7fSwgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcsIGNvbmZpZyk7XHJcbn07XHJcbmlmICh0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBqUXVlcnkuZm4uZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9O1xyXG59XHJcbkRhdGUucHJvdG90eXBlLmZwX2luY3IgPSBmdW5jdGlvbiAoZGF5cykge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSArICh0eXBlb2YgZGF5cyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KGRheXMsIDEwKSA6IGRheXMpKTtcclxufTtcclxudmFyIGZsYXRwaWNrciQxID0gZmxhdHBpY2tyO1xuXG5yZXR1cm4gZmxhdHBpY2tyJDE7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9mbGF0cGlja3IuanNcbi8vIG1vZHVsZSBpZCA9IDExMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxhdHBpY2tyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgY29udHJvbFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ucGxhY2Vob2xkZXIsXG4gICAgICAgICAgaWQ6IFwiZGF0ZS1pbnB1dC1cIiArIF92bS5fdWlkLFxuICAgICAgICAgIG5hbWU6IF92bS5uYW1lLFxuICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCIgfSwgW1xuICAgICAgICBfdm0udGltZU9ubHlcbiAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWNsb2NrLW9cIiB9KVxuICAgICAgICAgIDogX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FsZW5kYXJcIiB9KVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wM2NlMmMzZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDNjZTJjM2VcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVGb3JtSW5wdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1mZGNjN2ZkYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZUZvcm1JbnB1dC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mZGNjN2ZkYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWZkY2M3ZmRhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPHNwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1pY29ucy1yaWdodCc6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgdi1pZj1cImZpZWxkLm1ldGEuY29udGVudCA9PT0gJ3RleHQnXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtZGFuZ2VyJzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwiZmllbGQubWV0YS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgQGtleWRvd249XCIkZW1pdCgndXBkYXRlJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJoYXNFcnJvclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtd2FybmluZ1wiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1pY29ucy1yaWdodCc6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgdi1pZj1cImZpZWxkLm1ldGEuY29udGVudCA9PT0gJ2VtYWlsJ1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cImZpZWxkLm1ldGEucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIEBrZXlkb3duPVwiJGVtaXQoJ3VwZGF0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImhhc0Vycm9yXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS13YXJuaW5nXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWljb25zLXJpZ2h0JzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICB2LWlmPVwiZmllbGQubWV0YS5jb250ZW50ID09PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cImZpZWxkLm1ldGEucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIEBrZXlkb3duPVwiJGVtaXQoJ3VwZGF0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIDpzdGVwPVwiZmllbGQubWV0YS5zdGVwXCJcbiAgICAgICAgICAgICAgICA6bWluPVwiZmllbGQubWV0YS5taW5cIlxuICAgICAgICAgICAgICAgIDptYXg9XCJmaWVsZC5tZXRhLm1heFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImhhc0Vycm9yXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS13YXJuaW5nXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gdi1pZj1cImZpZWxkLm1ldGEuY29udGVudCA9PT0gJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgPHZ1ZS1zd2l0Y2ggdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICBzaXplPVwiaXMtbGFyZ2VcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJpcy1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkIHx8IGZpZWxkLm1ldGEucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCd1cGRhdGUnKVwiPlxuICAgICAgICAgICAgPC92dWUtc3dpdGNoPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgVnVlU3dpdGNoIGZyb20gJy4vVnVlU3dpdGNoLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IFZ1ZVN3aXRjaCB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBoYXNFcnJvcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGVmZDY1MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGVmZDY1MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZVN3aXRjaC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2RlZmQ2NTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZGVmZDY1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGVmZDY1MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0M2U0NDFkMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGVmZDY1MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdkZWZkNjUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVN3aXRjaC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2RlZmQ2NTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZmllbGQgLnZ1ZS1zd2l0Y2gge1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4udnVlLXN3aXRjaCB7XFxuICAtLWhlaWdodDogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnZ1ZS1zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi52dWUtc3dpdGNoOmJlZm9yZSwgLnZ1ZS1zd2l0Y2g6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4yNXM7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG4udnVlLXN3aXRjaDpiZWZvcmUge1xcbiAgICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbn1cXG4udnVlLXN3aXRjaDphZnRlciB7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTcsIDE3LCAxNywgMC4xKTtcXG59XFxuLnZ1ZS1zd2l0Y2guY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzRhNGE0YTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXG59XFxuLnZ1ZS1zd2l0Y2guY2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbi52dWUtc3dpdGNoLmNoZWNrZWQ6YWZ0ZXIge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMC42MjUgKiB2YXIoLS1oZWlnaHQpKSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygwLjYyNSAqIHZhcigtLWhlaWdodCkpKTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtd2hpdGUuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4udnVlLXN3aXRjaC5pcy13aGl0ZS5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWJsYWNrLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMwYTBhMGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XFxufVxcbi52dWUtc3dpdGNoLmlzLWJsYWNrLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzRhNGE0YTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWxpZ2h0LmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcbi52dWUtc3dpdGNoLmlzLWxpZ2h0LmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtZGFyay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzYzNjM2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG4udnVlLXN3aXRjaC5pcy1kYXJrLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzc1NzU3NTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLXByaW1hcnkuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwZDFiMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFiMjtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtcHJpbWFyeS5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM1MmZmZTU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyZmZlNTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1saW5rLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMzMjczZGM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjczZGM7XFxufVxcbi52dWUtc3dpdGNoLmlzLWxpbmsuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjOWZiZWVmO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmJlZWY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtaW5mby5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjA5Y2VlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5Y2VlO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1pbmZvLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzk3ZDFmNztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkMWY3O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLXN1Y2Nlc3MuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzIzZDE2MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDE2MDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtc3VjY2Vzcy5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM4OWViYWI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ZWJhYjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy13YXJuaW5nLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmRkNTc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRkNTc7XFxufVxcbi52dWUtc3dpdGNoLmlzLXdhcm5pbmcuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmN2Q2O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZDY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtZGFuZ2VyLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZjM4NjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM4NjA7XFxufVxcbi52dWUtc3dpdGNoLmlzLWRhbmdlci5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICNmZmI4YzY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjhjNjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1zbWFsbCB7XFxuICAgIC0taGVpZ2h0OiAwLjc1cmVtO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1tZWRpdW0ge1xcbiAgICAtLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtbGFyZ2Uge1xcbiAgICAtLWhlaWdodDogMS41cmVtO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FBRTtBQUV2QjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsNEJBQXFCO0VBQXJCLDRCQUFxQjtFQUFyQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0NBQUU7QUFDMUI7SUFDRSxXQUFXO0lBQ1gsNEJBQXFCO0lBQXJCLDRCQUFxQjtJQUFyQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7Q0FBRTtBQUNqQjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7SUFDUixrQ0FBa0M7SUFDbEMsNkJBQTZCO0lBQzdCLDBCQUFrQjtJQUFsQixrQkFBa0I7Q0FBRTtBQUN0QjtJQUNFLHlDQUF5QztJQUN6QywwQkFBMEI7Q0FBRTtBQUM5QjtJQUNFLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsb0RBQTRDO1lBQTVDLDRDQUE0QztDQUFFO0FBQ2hEO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0UsNEJBQW9CO2NBQXBCLG9CQUFvQjtDQUFFO0FBQ3hCO01BQ0UsMkRBQW1EO2NBQW5ELG1EQUFtRDtDQUFFO0FBQ3pEO0lBQ0Usb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUFFO0FBQzFCO01BQ0Usb0JBQW9CO01BQ3BCLHdCQUF3QjtNQUN4QixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0NBQUU7QUFDL0I7TUFDRSxvQkFBb0I7TUFDcEIsd0JBQXdCO01BQ3hCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLGtCQUFrQjtDQUFFO0FBQ3RCO0lBQ0Usa0JBQWtCO0NBQUU7QUFDdEI7SUFDRSxpQkFBaUI7Q0FBRVwiLFwiZmlsZVwiOlwiVnVlU3dpdGNoLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZmllbGQgLnZ1ZS1zd2l0Y2gge1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4OyB9XFxuXFxuLnZ1ZS1zd2l0Y2gge1xcbiAgLS1oZWlnaHQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpKTtcXG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAudnVlLXN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAudnVlLXN3aXRjaDpiZWZvcmUsIC52dWUtc3dpdGNoOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1czsgfVxcbiAgLnZ1ZS1zd2l0Y2g6YmVmb3JlIHtcXG4gICAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjsgfVxcbiAgLnZ1ZS1zd2l0Y2g6YWZ0ZXIge1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTcsIDE3LCAxNywgMC4xKTsgfVxcbiAgLnZ1ZS1zd2l0Y2guY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzRhNGE0YTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTsgfVxcbiAgICAudnVlLXN3aXRjaC5jaGVja2VkOmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgICAudnVlLXN3aXRjaC5jaGVja2VkOmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygwLjYyNSAqIHZhcigtLWhlaWdodCkpKTsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtd2hpdGUuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLXdoaXRlLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtYmxhY2suY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzBhMGEwYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGEwYTsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1ibGFjay5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM0YTRhNGE7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1saWdodC5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWxpZ2h0LmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtZGFyay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzYzNjM2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2OyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWRhcmsuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNzU3NTc1O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtcHJpbWFyeS5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBkMWIyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkMWIyOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLXByaW1hcnkuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNTJmZmU1O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MmZmZTU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtbGluay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzI3M2RjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3M2RjOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWxpbmsuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjOWZiZWVmO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmJlZWY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtaW5mby5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjA5Y2VlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5Y2VlOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWluZm8uY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjOTdkMWY3O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5N2QxZjc7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtc3VjY2Vzcy5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjNkMTYwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMTYwOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLXN1Y2Nlc3MuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjODllYmFiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWViYWI7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtd2FybmluZy5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZkZDU3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZDU3OyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLXdhcm5pbmcuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmN2Q2O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZDY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtZGFuZ2VyLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZjM4NjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM4NjA7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtZGFuZ2VyLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmYjhjNjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiOGM2O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLXNtYWxsIHtcXG4gICAgLS1oZWlnaHQ6IDAuNzVyZW07IH1cXG4gIC52dWUtc3dpdGNoLmlzLW1lZGl1bSB7XFxuICAgIC0taGVpZ2h0OiAxLjI1cmVtOyB9XFxuICAudnVlLXN3aXRjaC5pcy1sYXJnZSB7XFxuICAgIC0taGVpZ2h0OiAxLjVyZW07IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2RlZmQ2NTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDxsYWJlbCBjbGFzcz1cInZ1ZS1zd2l0Y2hcIiA6Y2xhc3M9XCJbc2l6ZSwgdHlwZSwgeyAnY2hlY2tlZCc6IHZhbHVlLCAnZGlzYWJsZWQnOiBkaXNhYmxlZCB9XVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImNoZWNrZWRcIlxuICAgICAgICAgICAgQGNoYW5nZT1cIiRlbWl0KCdpbnB1dCcsIGNoZWNrZWQpXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgIDpjaGVja2VkPVwidmFsdWVcIj5cbiAgICA8L2xhYmVsPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5jb25zdCBzaXplcyA9IFsnaXMtc21hbGwnLCAnaXMtbWVkaXVtJywgJ2lzLWxhcmdlJ107XG5jb25zdCB0eXBlcyA9IFsnaXMtcHJpbWFyeScsICdpcy13YXJuaW5nJywgJ2lzLWRhbmdlcicsICdpcy1zdWNjZXNzJywgJ2lzLWluZm8nXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdWdWVTd2l0Y2gnLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogdmFsdWUgPT4gdHlwZXMuaW5jbHVkZXModmFsdWUpLFxuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB2YWx1ZSA9PiBzaXplcy5pbmNsdWRlcyh2YWx1ZSksXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IHRoaXMudmFsdWUsXG4gICAgICAgIH07XG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblxuQGltcG9ydCAnfmJ1bG1hL3Nhc3MvdXRpbGl0aWVzL2luaXRpYWwtdmFyaWFibGVzJztcbkBpbXBvcnQgJ35idWxtYS9zYXNzL3V0aWxpdGllcy9kZXJpdmVkLXZhcmlhYmxlcy5zYXNzJztcblxuLmZpZWxkIHtcbiAgICAudnVlLXN3aXRjaCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cbn1cblxuLnZ1ZS1zd2l0Y2gge1xuICAgIC0taGVpZ2h0OiAkc2l6ZS1ub3JtYWw7XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xuICAgIHdpZHRoOiBjYWxjKDEuNjI1ICogdmFyKC0taGVpZ2h0KSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkgLSAycHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1saWdodGVyO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTcsIDE3LCAxNywgMC4xKTtcbiAgICB9XG5cbiAgICAmLmNoZWNrZWQge1xuICAgICAgICBib3JkZXItY29sb3I6ICR0ZXh0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dDtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDAuNjI1ICogdmFyKC0taGVpZ2h0KSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRwYWlyIGluICRjb2xvcnMge1xuICAgICAgICAkY29sb3I6IG50aCgkcGFpciwgMSk7XG4gICAgICAgICYuaXMtI3skbmFtZX0ge1xuICAgICAgICAgICAgJi5jaGVja2VkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgMjUlKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3IsIDI1JSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1zbWFsbCB7XG4gICAgICAgIC0taGVpZ2h0OiAkc2l6ZS1zbWFsbDtcbiAgICB9XG4gICAgJi5pcy1tZWRpdW0ge1xuICAgICAgICAtLWhlaWdodDogJHNpemUtbWVkaXVtO1xuICAgIH1cbiAgICAmLmlzLWxhcmdlIHtcbiAgICAgICAgLS1oZWlnaHQ6ICRzaXplLWxhcmdlO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImxhYmVsXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidnVlLXN3aXRjaFwiLFxuICAgICAgY2xhc3M6IFtcbiAgICAgICAgX3ZtLnNpemUsXG4gICAgICAgIF92bS50eXBlLFxuICAgICAgICB7IGNoZWNrZWQ6IF92bS52YWx1ZSwgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCB9XG4gICAgICBdXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja2VkLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja2VkXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94XCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWQsXG4gICAgICAgICAgcmVxdWlyZWQ6IF92bS5yZXF1aXJlZFxuICAgICAgICB9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIGNoZWNrZWQ6IF92bS52YWx1ZSxcbiAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5jaGVja2VkKVxuICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmNoZWNrZWQsIG51bGwpID4gLTFcbiAgICAgICAgICAgIDogX3ZtLmNoZWNrZWRcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uY2hlY2tlZCA9ICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAoX3ZtLmNoZWNrZWQgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3ZtLmNoZWNrZWQgPSAkJGNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJpbnB1dFwiLCBfdm0uY2hlY2tlZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTdkZWZkNjUyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03ZGVmZDY1MlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic3BhblwiLCBbXG4gICAgX3ZtLmZpZWxkLm1ldGEuY29udGVudCA9PT0gXCJ0ZXh0XCJcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcImhhcy1pY29ucy1yaWdodFwiOiBfdm0uaGFzRXJyb3IgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtZGFuZ2VyXCI6IF92bS5oYXNFcnJvciB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0uZmllbGQubWV0YS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmZpZWxkLm1ldGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZC52YWx1ZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidXBkYXRlXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGQsIFwidmFsdWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5oYXNFcnJvclxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS13YXJuaW5nXCIgfSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmZpZWxkLm1ldGEuY29udGVudCA9PT0gXCJlbWFpbFwiXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJoYXMtaWNvbnMtcmlnaHRcIjogX3ZtLmhhc0Vycm9yIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWRhbmdlclwiOiBfdm0uaGFzRXJyb3IgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLmZpZWxkLm1ldGEucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJ1cGRhdGVcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWVsZCwgXCJ2YWx1ZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmhhc0Vycm9yXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXdhcm5pbmdcIiB9KV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQubWV0YS5jb250ZW50ID09PSBcIm51bWJlclwiXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJoYXMtaWNvbnMtcmlnaHRcIjogX3ZtLmhhc0Vycm9yIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWRhbmdlclwiOiBfdm0uaGFzRXJyb3IgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLmZpZWxkLm1ldGEucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBzdGVwOiBfdm0uZmllbGQubWV0YS5zdGVwLFxuICAgICAgICAgICAgICAgIG1pbjogX3ZtLmZpZWxkLm1ldGEubWluLFxuICAgICAgICAgICAgICAgIG1heDogX3ZtLmZpZWxkLm1ldGEubWF4LFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJ1cGRhdGVcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWVsZCwgXCJ2YWx1ZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmhhc0Vycm9yXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXdhcm5pbmdcIiB9KV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQubWV0YS5jb250ZW50ID09PSBcImNoZWNrYm94XCJcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ2dWUtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzaXplOiBcImlzLWxhcmdlXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpcy1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5maWVsZC5tZXRhLmRpc2FibGVkIHx8IF92bS5maWVsZC5tZXRhLnJlYWRvbmx5XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidXBkYXRlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWZkY2M3ZmRhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mZGNjN2ZkYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm1JbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLmRhdGEuaWNvbiB8fCBfdm0uZGF0YS50aXRsZVxuICAgICAgICA/IF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLmRhdGEuaWNvblxuICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmRhdGEuaWNvbiB9KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmRhdGEudGl0bGVcbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5kYXRhLnRpdGxlKSArIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoclwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVlLWZvcm1cIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZVwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmRhdGEuZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICByZXR1cm4gIWZpZWxkLm1ldGEuaGlkZGVuXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmNvbHVtblNpemVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oZmllbGQubGFiZWwpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuaGFzKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWxwIGlzLWRhbmdlciBpcy1wdWxsZWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9ycy5nZXQoZmllbGQubmFtZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEuY3VzdG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KGZpZWxkLm5hbWUsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBfdm0uZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhLnR5cGUgPT09IFwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2dWUtZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YS50eXBlID09PSBcInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInZ1ZS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZpZWxkLm1ldGEub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtleS1tYXBcIjogZmllbGQubWV0YS5rZXlNYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBmaWVsZC5tZXRhLnNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmllbGQubWV0YS5tdWx0aXBsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGZpZWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEudHlwZSA9PT0gXCJkYXRlcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGF0ZXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmaWVsZC5tZXRhLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBmaWVsZC5tZXRhLnRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZpZWxkLm1ldGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChmaWVsZCwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhLnR5cGUgPT09IFwidGltZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRhdGVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZmllbGQubWV0YS5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lLW9ubHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGZpZWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWRhbmdlclwiOiBfdm0uZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBmaWVsZC5tZXRhLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmaWVsZC5tZXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5oYXMoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3lcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5kYXRhLmFjdGlvbnMuZGVzdHJveS5mb3JiaWRkZW4gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93TW9kYWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKF92bS5kYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24ubGFiZWwpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5pY29uIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5kYXRhLmFjdGlvbnMuY3JlYXRlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5kYXRhLmFjdGlvbnMuY3JlYXRlLmZvcmJpZGRlbiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmNyZWF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9fKF92bS5kYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5sYWJlbCkpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5kYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5pY29uIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5kYXRhLmFjdGlvbnMuc3RvcmVcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHVsbGVkLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5jbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgeyBcImlzLWxvYWRpbmdcIjogX3ZtLmxvYWRpbmcgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGF0YS5hY3Rpb25zLnN0b3JlLmZvcmJpZGRlblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oX3ZtLmRhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24ubGFiZWwpKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IGNsYXNzOiBfdm0uZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5pY29uIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5kYXRhLmFjdGlvbnMudXBkYXRlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgICB7IFwiaXMtbG9hZGluZ1wiOiBfdm0ubG9hZGluZyB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kYXRhLmFjdGlvbnMudXBkYXRlLmZvcmJpZGRlblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oX3ZtLmRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmxhYmVsKSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmljb24gfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpcy1jbGVhcmZpeFwiIH0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95XG4gICAgICAgID8gX2MoXCJtb2RhbFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzaG93OiBfdm0uc2hvd01vZGFsLFxuICAgICAgICAgICAgICBfXzogX3ZtLl9fLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLm1lc3NhZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcImNhbmNlbC1hY3Rpb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3dNb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY29tbWl0LWFjdGlvblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZGVzdHJveSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWI1MmU5MjdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFiNTJlOTI3XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1jZW50ZXJlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLXRocmVlLXF1YXJ0ZXJzXCI+XG4gICAgICAgICAgICA8dnVlLWZvcm0gOmRhdGE9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJveCBhbmltYXRlZCBmYWRlSW5cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJpbml0aWFsaXNlZFwiPlxuICAgICAgICAgICAgPC92dWUtZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBWdWVGb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IFZ1ZUZvcm0gfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0aWFsaXNlZDogZmFsc2UsXG4gICAgICAgICAgICBmb3JtOiB7fSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KHJvdXRlKHRoaXMuJHJvdXRlLm5hbWUsIG51bGwsIGZhbHNlKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IHJlc3BvbnNlLmRhdGEuZm9ybTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3R1dG9yaWFscy9DcmVhdGUudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtY2VudGVyZWRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtdGhyZWUtcXVhcnRlcnNcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uaW5pdGlhbGlzZWRcbiAgICAgICAgICA/IF9jKFwidnVlLWZvcm1cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib3ggYW5pbWF0ZWQgZmFkZUluXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IF92bS5mb3JtIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTlmZTkxODJlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05ZmU5MTgyZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3R1dG9yaWFscy9DcmVhdGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiXSwic291cmNlUm9vdCI6IiJ9