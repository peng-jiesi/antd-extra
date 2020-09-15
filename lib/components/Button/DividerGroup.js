"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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
var DividerGroup = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(DividerGroup, _PureComponent);

  var _super = _createSuper(DividerGroup);

  function DividerGroup() {
    (0, _classCallCheck2["default"])(this, DividerGroup);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DividerGroup, [{
    key: "renderChildren",
    value: function renderChildren() {
      var children = this.props.children;
      var items = [];

      _react["default"].Children.map(children, function (item, idx) {
        items.push(item);
        items.push( /*#__PURE__*/_react["default"].createElement(_antd.Divider, {
          type: "vertical"
        }));
      }); // 去掉最后一个Divider


      items.pop();
      return items;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      var childrenCount = _react["default"].Children.count(children);

      if (childrenCount > 1) {
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, this.renderChildren());
      } else {
        return children;
      }
    }
  }]);
  return DividerGroup;
}(_react.PureComponent);

exports["default"] = DividerGroup;
(0, _defineProperty2["default"])(DividerGroup, "defaultProps", {});
(0, _defineProperty2["default"])(DividerGroup, "propTypes", {// confirm: PropTypes.any,
  // okText: PropTypes.any,
  // cancelText: PropTypes.any,
});
//# sourceMappingURL=DividerGroup.js.map