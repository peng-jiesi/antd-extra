"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require("antd");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FormLayout
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by pengj on 2018-4-29.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * 表单局部组件, 用于提供多行布局表单
 *
 * 直接放入FormField
 *```html
 * <FormLayout compact={true} cols={4}>
 *   <FormField
 *   label={"Test Label1111111111111"}
 *   name={"test"}
 *   required
 *   >
 *      <Input/>
 *   </FormField>
 * </FormLayout>
 * ```
 *
 * 放入Fragment包裹的元素, 会被展开
 *```html
 * <FormLayout compact={true} cols={4}>
 *    <Fragment></Fragment>
 * </FormLayout>
 * ```
 *
 * 下级元素存在block属性时, 会展开为单行, 建议用cols=2 | 4 的时候使用
 *```html
 * <FormLayout compact={true} cols={4}>
 *   <FormField block label={"Test Label11111111111"} name={"test"} required>
 *     <Input/>
 *   </FormField>
 *   <FormField label={"Test Label22222222222"} name={"test2"} required>
 *     <Input/>
 *   </FormField>
 *   <FormField label={"Test Label22222222222"} name={"test2"} required>
 *     <Input/>
 *   </FormField>
 * </FormLayout>
 * ```
 */
var FormLayout = function (_React$PureComponent) {
  _inherits(FormLayout, _React$PureComponent);

  function FormLayout() {
    _classCallCheck(this, FormLayout);

    return _possibleConstructorReturn(this, (FormLayout.__proto__ || Object.getPrototypeOf(FormLayout)).apply(this, arguments));
  }

  _createClass(FormLayout, [{
    key: "renderChildren",
    value: function renderChildren(inner, key) {
      var cols = this.props.cols;


      if (inner === null) {
        return inner;
      }

      if (inner.props.block) {
        var ele = void 0;
        if (inner.props.labelCol) {
          ele = inner;
        } else {
          //todo 强制指定样式, 计算宽度
          var labelSpan = Math.ceil(24 / cols / 3);
          ele = _react2.default.cloneElement(inner, {
            labelCol: { span: labelSpan },
            wrapperCol: { span: 24 - labelSpan }
          });
        }
        return _react2.default.createElement(
          _antd.Col,
          { span: 24, key: key },
          ele
        );
      } else {
        return _react2.default.createElement(
          _antd.Col,
          { span: 24 / cols, key: key },
          inner
        );
      }
    }
  }, {
    key: "warpItems",
    value: function warpItems() {
      var _this2 = this;

      var children = this.props.children;


      return _react2.default.Children.map(children, function (item, idx) {
        // 如果是nowarp对象,直接吐出
        if (item.props.nowarp === true) {
          return item;
        }

        // 如果是fragment包装子结点
        if (item.type === Symbol.for("react.fragment")) {
          return _react2.default.Children.map(item.props.children, function (inner, idxInner) {
            return _this2.renderChildren(inner, "col_" + idx + "_" + idxInner);
          });
        }

        if (_lodash2.default.isArray(item)) {
          return item.map(function (inner, idxInner) {
            return _this2.renderChildren(inner, "col_" + idx + "_" + idxInner);
          });
        } else {
          return _this2.renderChildren(item, "col_" + idx);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          cols = _props.cols,
          children = _props.children,
          compact = _props.compact,
          gutter = _props.gutter;

      var className = compact ? "antd-x-compact-form antd-x-form" : "antd-x-form";
      var items = void 0;
      if (cols === 1) {
        items = children;
      } else {
        items = this.warpItems();
      }

      return _react2.default.createElement(
        "div",
        { className: className },
        _react2.default.createElement(
          _antd.Row,
          { gutter: gutter },
          items
        )
      );
    }
  }]);

  return FormLayout;
}(_react2.default.PureComponent);

FormLayout.defaultProps = {
  cols: 1,
  compact: false,
  gutter: 8
};
FormLayout.propTypes = {
  /**
   * 布局展示几行
   */
  cols: _propTypes2.default.number,

  /**
   * 是否紧缩布局
   */
  compact: _propTypes2.default.bool,

  /**
   * Row  gutter
   */
  gutter: _propTypes2.default.number
};
exports.default = FormLayout;
//# sourceMappingURL=FormLayout.js.map