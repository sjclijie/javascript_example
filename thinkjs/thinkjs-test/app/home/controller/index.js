'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);

//var Base = require("./base.js");

//module.exports = think.controller(Base, {
//
//});
var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}_default.prototype.


  __before = function __before() {
    console.log("before");};_default.prototype.


  __after = function __after() {
    console.log("after");};_default.prototype.


  __call = function __call() {
    console.log("call");};_default.prototype.


  init = function init(http) {
    console.log("init");
    _Base.prototype.init.call(this, http);};



  /**
   * index action
   * @return {Promise} []
   */_default.prototype.
  indexAction = function indexAction(self) {var 

    gets, 

    isAjax, 

    tempalte, 







    home, 
    data;return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:gets = parseInt(self.get("page_id"), 10);isAjax = self.isAjax();context$2$0.next = 4;return _regeneratorRuntime.awrap(self.fetch("index.html"));case 4:tempalte = context$2$0.sent;console.log(tempalte); //self.download("index.html");
          console.log("is ajax: " + isAjax);home = this.model("home");context$2$0.next = 10;return _regeneratorRuntime.awrap(home.select());case 10:data = context$2$0.sent;return context$2$0.abrupt('return', 






          this.display("index.html"));case 12:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default']; //this.fail("GET_DATA_ERROR");
//this.json(data);
//this.error("Params Error.");
//this.success( data );
//auto render template file index_index.html