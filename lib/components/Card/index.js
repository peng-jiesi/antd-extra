"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _index = _interopRequireDefault(require("./index.less"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var IconFont = _antd.Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_858347_wxjl16j413e.js"
});

var CustomCard = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(CustomCard, _React$Component);

  var _super = _createSuper(CustomCard);

  function CustomCard() {
    (0, _classCallCheck2["default"])(this, CustomCard);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(CustomCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          logo = _this$props.logo,
          bgStyle = _this$props.bgStyle,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? "测试" : _this$props$title,
          _this$props$userName = _this$props.userName,
          userName = _this$props$userName === void 0 ? "— 空置 —" : _this$props$userName,
          _this$props$dateTime = _this$props.dateTime,
          dateTime = _this$props$dateTime === void 0 ? "-" : _this$props$dateTime,
          dateColor = _this$props.dateColor,
          stateColor = _this$props.stateColor,
          superScript = _this$props.superScript,
          _this$props$superScri = _this$props.superScriptColor,
          superScriptColor = _this$props$superScri === void 0 ? {
        display: "none"
      } : _this$props$superScri,
          stateIcon = _this$props.stateIcon,
          text = _this$props.text,
          _this$props$actions = _this$props.actions,
          actions = _this$props$actions === void 0 ? [] : _this$props$actions;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].card
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].customCard1
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].customLogo,
        style: bgStyle
      }, /*#__PURE__*/_react["default"].createElement(IconFont, {
        className: _index["default"].icon,
        type: logo,
        style: bgStyle
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].desc
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].superScript
      }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("span", {
        style: superScriptColor
      }), /*#__PURE__*/_react["default"].createElement("em", null, superScript))), /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].title
      }, title), /*#__PURE__*/_react["default"].createElement("div", null, userName), /*#__PURE__*/_react["default"].createElement("div", null, "\u79DF\u671F\uFF1A", /*#__PURE__*/_react["default"].createElement("span", {
        style: dateColor
      }, dateTime)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
        style: stateColor,
        type: stateIcon,
        theme: "filled"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: _index["default"].state
      }, text)))), /*#__PURE__*/_react["default"].createElement("ul", {
        className: _index["default"].antCardActions
      }, actions.map(function (item) {
        return item;
      })));
    }
  }]);
  return CustomCard;
}(_react["default"].Component);

var _default = CustomCard;
exports["default"] = _default;
//# sourceMappingURL=index.js.map