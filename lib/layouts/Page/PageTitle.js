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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * 标准页头格式,  用于分隔不同信息段
 */
var PageTitle = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(PageTitle, _React$Component);

  var _super = _createSuper(PageTitle);

  function PageTitle() {
    (0, _classCallCheck2["default"])(this, PageTitle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PageTitle, [{
    key: "renderActions",
    value: function renderActions() {
      var _this$props = this.props,
          actions = _this$props.actions,
          actionMax = _this$props.actionMax;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "actions"
      }, actions);
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      var _this$props2 = this.props,
          status = _this$props2.status,
          statusColor = _this$props2.statusColor;

      if (!status) {
        return null;
      } else {
        return /*#__PURE__*/_react["default"].createElement(_antd.Tag, {
          color: statusColor,
          className: "status"
        }, status);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          color = _this$props3.color,
          actions = _this$props3.actions,
          size = _this$props3.size;
      return /*#__PURE__*/_react["default"].createElement("h2", {
        className: "antd-x-page-title ".concat(size),
        style: {
          borderLeftColor: color
        }
      }, children, this.renderStatus(), this.renderActions());
    }
  }]);
  return PageTitle;
}(_react["default"].Component);

exports["default"] = PageTitle;
PageTitle.defaultProps = {
  actionMax: 3,
  color: "#1890ff",
  statusColor: "#87d068"
};
PageTitle.propTypes = {
  /**
   * 竖条颜色
   */
  color: _propTypes["default"].string,

  /**
   * 操作区域
   */
  actions: _propTypes["default"].any,

  /**
   * 默认页头数量
   */
  actionMax: _propTypes["default"].number,

  /**
   * 尺寸  可用 small
   */
  size: _propTypes["default"].string,

  /**
   * 标题后面的状态信息
   */
  status: _propTypes["default"].string,

  /**
   * 如果有状态信息, 状态标签的颜色,  推荐颜色: 红色#ff4d4f, 橙色#fa8c16, 绿色#52c41a, 蓝色#1890ff
   * 其他颜色可以从https://ant.design/docs/spec/colors-cn中寻找, 建议用-6色板
   */
  statusColor: _propTypes["default"].string
};
//# sourceMappingURL=PageTitle.js.map