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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _PageTitle = _interopRequireDefault(require("../../layouts/Page/PageTitle"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 */
var TableResponsive = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TableResponsive, _PureComponent);

  var _super = _createSuper(TableResponsive);

  function TableResponsive() {
    (0, _classCallCheck2["default"])(this, TableResponsive);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TableResponsive, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "antd-x-table-responsive"
      }, this.props.children);
    }
  }]);
  return TableResponsive;
}(_react.PureComponent);

exports["default"] = TableResponsive;
(0, _defineProperty2["default"])(TableResponsive, "defaultProps", {});
(0, _defineProperty2["default"])(TableResponsive, "propTypes", {});
//# sourceMappingURL=TableResponsive.js.map