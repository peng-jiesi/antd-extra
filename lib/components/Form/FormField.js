"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _omit2 = require("lodash/omit");

var _omit3 = _interopRequireDefault(_omit2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/require-default-props */
/**
 * FormField
 * Created by pengj on 2018-4-29.
 */


var DefaultModelFormLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

/**
 * 包装form.getFieldDecorator  和 From.Item
 */

var FormField = function (_Component) {
  _inherits(FormField, _Component);

  function FormField() {
    _classCallCheck(this, FormField);

    return _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).apply(this, arguments));
  }

  _createClass(FormField, [{
    key: "renderChildren",
    value: function renderChildren() {
      var _props = this.props,
          action = _props.action,
          children = _props.children;

      // 如果没有action直接返回

      if (!action) {
        return children;
      }

      // 有action 做一层包装
      return _react2.default.createElement(
        _antd.Row,
        { gutter: 4 },
        _react2.default.createElement(
          _antd.Col,
          { span: 20 },
          children
        ),
        _react2.default.createElement(
          _antd.Col,
          { span: 4 },
          action
        )
      );
    }
  }, {
    key: "filloutRules",
    value: function filloutRules() {
      var _props2 = this.props,
          required = _props2.required,
          rules = _props2.rules,
          _props2$label = _props2.label,
          label = _props2$label === undefined ? "" : _props2$label;

      var itemRules = rules || [];
      if (required) {
        itemRules.unshift({ required: true, message: label + "\u5FC5\u987B\u586B\u5199" });
      }
      return itemRules;
    }
  }, {
    key: "render",
    value: function render() {
      var omitProps = (0, _omit3.default)(this.props, ["rules", "action", "block"]);
      var rules = this.filloutRules();
      var props = _extends({}, DefaultModelFormLayout, omitProps, {
        rules: rules
      });

      return _react2.default.createElement(
        _antd.Form.Item,
        props,
        this.renderChildren()
      );
    }
  }]);

  return FormField;
}(_react.Component);

FormField.defaultProps = {};
FormField.propTypes = {
  /**
   * 是否必填, 默认提示为 ${label}必须填写
   */
  required: _propTypes2.default.any,
  /**
   *  Form.Item  label
   */
  label: _propTypes2.default.any,
  /**
   * Form.Item  help
   */
  help: _propTypes2.default.any,

  /**
   * Form.Item  rules
   */
  rules: _propTypes2.default.array,
  /**
   * getFieldDecorator, options.valuePropName
   */
  valuePropName: _propTypes2.default.any,

  /**
   * 在Form.Item 对象布局后提供一个action区
   */
  action: _propTypes2.default.element,

  /**
   * 是否占整行,  必须在FormLayout下面才有用,  建议在FormLayout.cols = 2  4 的时候使用,  3 会有偏移
   */
  block: _propTypes2.default.bool
};
exports.default = FormField;
//# sourceMappingURL=FormField.js.map