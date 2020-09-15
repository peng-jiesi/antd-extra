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

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _icons = require("@ant-design/icons");

var _FormLayout = _interopRequireDefault(require("./FormLayout"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * 自动布局查询表单,  可以通过min调整, 提供高级搜索能力
 *
 */
var SearchForm = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(SearchForm, _React$PureComponent);

  var _super = _createSuper(SearchForm);

  function SearchForm(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, SearchForm);
    _this = _super.call(this, props, context);
    _this.formRef = /*#__PURE__*/_react["default"].createRef(); // if (!this.form) {
    //   console.warn("props.form must be return from  Form.useForm");
    // }

    _this.state = {
      expand: false
    };
    return _this;
  }

  (0, _createClass2["default"])(SearchForm, [{
    key: "invokeSearch",
    value: function invokeSearch(action) {
      var onSearch = this.props.onSearch;

      if (!(0, _isFunction["default"])(onSearch)) {
        console.warn("onSearch must be function");
      } else {
        onSearch(this.formRef.current.getFieldsValue(), {
          action: action
        });
      }
    }
  }, {
    key: "handleSearch",
    value: function handleSearch() {
      this.invokeSearch("SEARCH");
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.formRef.current.resetFields();
      var onReset = this.props.onReset;

      if ((0, _isFunction["default"])(onReset)) {
        onReset();
      }

      this.invokeSearch("RESET");
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var expand = this.state.expand;
      var nextExpand = !expand;

      if (!nextExpand) {
        this.formRef.current.resetFields();
      }

      this.setState({
        expand: nextExpand
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var expand = this.state.expand;
      var children = this.props.children;

      if (!(0, _isArray["default"])(children)) {
        children = [children];
      }

      var showItem = [];

      if (expand) {
        showItem = children;
      } else {
        showItem = children.slice(0, this.props.min);
      }

      return showItem;
    }
  }, {
    key: "renderExtend",
    value: function renderExtend(expand) {
      var _this$props = this.props,
          children = _this$props.children,
          extendText = _this$props.extendText,
          min = _this$props.min,
          expandText = _this$props.expandText,
          collapseText = _this$props.collapseText;
      var text = expand ? collapseText : extendText || expandText;

      if (children.length > min) {
        var icon = expand ? /*#__PURE__*/_react["default"].createElement(_icons.UpSquareOutlined, null) : /*#__PURE__*/_react["default"].createElement(_icons.DownSquareOutlined, null);
        return /*#__PURE__*/_react["default"].createElement("a", {
          className: "expand",
          onClick: this.toggle.bind(this)
        }, text, " ", icon);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var expand = this.state.expand;
      var _this$props2 = this.props,
          queryText = _this$props2.queryText,
          resetText = _this$props2.resetText,
          cols = _this$props2.cols,
          compact = _this$props2.compact,
          gutter = _this$props2.gutter,
          actions = _this$props2.actions,
          style = _this$props2.style;
      return /*#__PURE__*/_react["default"].createElement(_antd.Form, {
        className: "antd-x-search-form",
        style: style,
        ref: this.formRef
      }, /*#__PURE__*/_react["default"].createElement(_FormLayout["default"], {
        cols: cols,
        compact: compact,
        gutter: gutter
      }, this.renderItems(), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        className: "actions",
        nowarp: true
      }, this.renderExtend(expand), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        type: "primary",
        icon: /*#__PURE__*/_react["default"].createElement(_icons.SearchOutlined, null),
        onClick: this.handleSearch.bind(this)
      }, queryText), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        icon: /*#__PURE__*/_react["default"].createElement(_icons.ReloadOutlined, null),
        onClick: this.handleReset.bind(this)
      }, resetText), actions)));
    }
  }]);
  return SearchForm;
}(_react["default"].PureComponent);

exports["default"] = SearchForm;
(0, _defineProperty2["default"])(SearchForm, "defaultProps", {
  min: 999,
  queryText: "查询",
  resetText: "清除",
  expandText: "更多条件",
  collapseText: "简化条件",
  compact: true,
  cols: 3
});
SearchForm.propTypes = {
  /**
   * 查询函数   (values,event:{action}) => {}, event.action 触发动作 查询(SEARCH)或者重置(RESET)
   */
  onSearch: _propTypes["default"].func.isRequired,

  /**
   * 点击重置后触发,  会在onSearch之前执行,    重置会触发一次onSearch(空值)
   */
  onReset: _propTypes["default"].func,

  /**
   * 精简模式下展示多少条件
   */
  min: _propTypes["default"].number,

  /**
   * 查询按钮文字
   */
  queryText: _propTypes["default"].string,

  /**
   * 重置按钮文字
   */
  resetText: _propTypes["default"].string,

  /**
   * 展开按钮文字
   */
  expandText: _propTypes["default"].string,

  /**
   * 收缩按钮文字
   */
  collapseText: _propTypes["default"].string,

  /**
   * 布局展示几行  FormLayout cols
   */
  cols: _propTypes["default"].number,

  /**
   * 是否紧缩布局   FormLayout compact
   */
  compact: _propTypes["default"].bool,

  /**
   * FormLayout gutter
   */
  gutter: _propTypes["default"].number,

  /**
   * 放置在查询按钮后的 扩展按钮
   */
  actions: _propTypes["default"].any,

  /**
   * style
   */
  style: _propTypes["default"].any
};
//# sourceMappingURL=SearchForm.js.map