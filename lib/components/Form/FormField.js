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

var _omit2 = _interopRequireDefault(require("lodash/omit"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DefaultModelFormLayout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
/**
 * 包装form.getFieldDecorator  和 From.Item
 */

var FormField = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FormField, _Component);

  var _super = _createSuper(FormField);

  function FormField() {
    (0, _classCallCheck2["default"])(this, FormField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FormField, [{
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props = this.props,
          action = _this$props.action,
          children = _this$props.children; // 如果没有action直接返回

      if (!action) {
        return children;
      } // 有action 做一层包装


      return /*#__PURE__*/_react["default"].createElement(_antd.Row, {
        gutter: 4
      }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        span: 20
      }, children), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        span: 4
      }, action));
    }
  }, {
    key: "filloutRules",
    value: function filloutRules() {
      var _this$props2 = this.props,
          required = _this$props2.required,
          rules = _this$props2.rules,
          _this$props2$label = _this$props2.label,
          label = _this$props2$label === void 0 ? "" : _this$props2$label;
      var itemRules = rules || [];

      if (required) {
        itemRules.unshift({
          required: true,
          message: "".concat(label, "\u5FC5\u987B\u586B\u5199")
        });
      }

      return itemRules;
    }
  }, {
    key: "render",
    value: function render() {
      var omitProps = (0, _omit2["default"])(this.props, ["rules", "action", "block"]);
      var rules = this.filloutRules();

      var props = _objectSpread(_objectSpread(_objectSpread({}, DefaultModelFormLayout), omitProps), {}, {
        rules: rules
      });

      return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, props, this.renderChildren());
    }
  }]);
  return FormField;
}(_react.Component);

exports["default"] = FormField;
(0, _defineProperty2["default"])(FormField, "defaultProps", {});
FormField.propTypes = {
  /**
   * 是否必填, 默认提示为 ${label}必须填写
   */
  required: _propTypes["default"].any,

  /**
   *  Form.Item  label
   */
  label: _propTypes["default"].any,

  /**
   * Form.Item  help
   */
  help: _propTypes["default"].any,

  /**
   * Form.Item  rules
   */
  rules: _propTypes["default"].array,

  /**
   * getFieldDecorator, options.valuePropName
   */
  valuePropName: _propTypes["default"].any,

  /**
   * 在Form.Item 对象布局后提供一个action区
   */
  action: _propTypes["default"].element,

  /**
   * 是否占整行,  必须在FormLayout下面才有用,  建议在FormLayout.cols = 2  4 的时候使用,  3 会有偏移
   */
  block: _propTypes["default"].bool
};
//# sourceMappingURL=FormField.js.map