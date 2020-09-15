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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _lodash = _interopRequireDefault(require("lodash"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
   <FormLayout compact={true} cols={4}>
     <FormField block label={"Test Label11111111111"} name={"test"} required>
       <Input/>
     </FormField>
     <FormField label={"Test Label22222222222"} name={"test2"} required>
       <Input/>
     </FormField>
     <FormField label={"Test Label22222222222"} name={"test2"} required>
       <Input/>
     </FormField>
   </FormLayout>
 * ```
 */
var FormLayout = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(FormLayout, _React$PureComponent);

  var _super = _createSuper(FormLayout);

  function FormLayout() {
    (0, _classCallCheck2["default"])(this, FormLayout);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FormLayout, [{
    key: "renderChildren",
    value: function renderChildren(inner, key) {
      var cols = this.props.cols;

      if (inner === null) {
        return inner;
      }

      if (inner.props.block) {
        var ele;

        if (inner.props.labelCol) {
          ele = inner;
        } else {
          //todo 强制指定样式, 计算宽度
          var labelSpan = Math.ceil(24 / cols / 3);
          ele = /*#__PURE__*/_react["default"].cloneElement(inner, {
            labelCol: {
              span: labelSpan
            },
            wrapperCol: {
              span: 24 - labelSpan
            }
          });
        }

        return /*#__PURE__*/_react["default"].createElement(_antd.Col, {
          span: 24,
          key: key
        }, ele);
      } else {
        return /*#__PURE__*/_react["default"].createElement(_antd.Col, {
          span: 24 / cols,
          key: key
        }, inner);
      }
    }
  }, {
    key: "warpItems",
    value: function warpItems() {
      var _this = this;

      var children = this.props.children;
      return _react["default"].Children.map(children, function (item, idx) {
        // 如果是nowarp对象,直接吐出
        if (item.props.nowarp === true) {
          return item;
        } // 如果是fragment包装子结点


        if (item.type === Symbol["for"]("react.fragment")) {
          return _react["default"].Children.map(item.props.children, function (inner, idxInner) {
            return _this.renderChildren(inner, "col_".concat(idx, "_").concat(idxInner));
          });
        }

        if (_lodash["default"].isArray(item)) {
          return item.map(function (inner, idxInner) {
            return _this.renderChildren(inner, "col_".concat(idx, "_").concat(idxInner));
          });
        } else {
          return _this.renderChildren(item, "col_".concat(idx));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cols = _this$props.cols,
          children = _this$props.children,
          compact = _this$props.compact,
          gutter = _this$props.gutter;
      var className = compact ? "antd-x-compact-form antd-x-form" : "antd-x-form"; // let items;

      var items = this.warpItems();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
        gutter: gutter
      }, items));
    }
  }]);
  return FormLayout;
}(_react["default"].PureComponent);

exports["default"] = FormLayout;
(0, _defineProperty2["default"])(FormLayout, "defaultProps", {
  cols: 1,
  compact: false,
  gutter: 8
});
FormLayout.propTypes = {
  /**
   * 布局展示几行
   */
  cols: _propTypes["default"].number,

  /**
   * 是否紧缩布局
   */
  compact: _propTypes["default"].bool,

  /**
   * Row  gutter
   */
  gutter: _propTypes["default"].number
};
//# sourceMappingURL=FormLayout.js.map