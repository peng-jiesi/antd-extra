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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * adsasdas
 */
var MultiText = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MultiText, _Component);

  var _super = _createSuper(MultiText);

  function MultiText() {
    (0, _classCallCheck2["default"])(this, MultiText);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MultiText, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, "123123123123");
    }
  }]);
  return MultiText;
}(_react.Component);

exports["default"] = MultiText;
MultiText.propTypes = {
  /**
   * String representing the value of this component.
   * Should be a JSON encoded array of each element
   */
  value: _propTypes["default"].string,

  /**
   * The label for the data that this component represents
   */
  label: _propTypes["default"].string,

  /**
   * Fired when the data of this component changes.
   * Will be given one argument which is a string
   */
  onChange: _propTypes["default"].func
};
MultiText.defaultProps = {
  label: null
};
console.log(MultiText);
//# sourceMappingURL=Test.js.map