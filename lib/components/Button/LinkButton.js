"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Table中的Button
 * ```html
 * <LinkButton onClick={}>删除</LinkButton>
 * ```
 */
var LinkButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(LinkButton, _PureComponent);

  var _super = _createSuper(LinkButton);

  function LinkButton() {
    (0, _classCallCheck2["default"])(this, LinkButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LinkButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          confirm = _this$props.confirm,
          okText = _this$props.okText,
          cancelText = _this$props.cancelText;
      return /*#__PURE__*/_react["default"].createElement(_antd.Button, (0, _extends2["default"])({
        ghost: true,
        size: "small",
        type: "primary",
        className: "antd-x-link-button"
      }, this.props), this.props.children);
    }
  }]);
  return LinkButton;
}(_react.PureComponent);

exports["default"] = LinkButton;
(0, _defineProperty2["default"])(LinkButton, "defaultProps", {});
(0, _defineProperty2["default"])(LinkButton, "propTypes", {// confirm: PropTypes.any,
  // okText: PropTypes.any,
  // cancelText: PropTypes.any,
});
//# sourceMappingURL=LinkButton.js.map