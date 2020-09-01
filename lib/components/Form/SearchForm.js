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

var _isFunction = require("lodash/isFunction");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isArray = require("lodash/isArray");

var _isArray2 = _interopRequireDefault(_isArray);

var _icons = require("@ant-design/icons");

var _FormLayout = require("./FormLayout");

var _FormLayout2 = _interopRequireDefault(_FormLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * SearchForm
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by pengj on 2018-4-29.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * 自动布局查询表单,  可以通过min调整, 提供高级搜索能力
 *
 * ```
 * <SearchForm cols={4} min={2} actions={ <Button>测试</Button> } form={form} onSearch={(data) => {console.log(data);}}>
 *   {this.renderItem1()}
 * </SearchForm>
 * ```
 */
var SearchForm = function (_React$PureComponent) {
  _inherits(SearchForm, _React$PureComponent);

  function SearchForm(props, context) {
    _classCallCheck(this, SearchForm);

    var _this = _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call(this, props, context));

    _this.formRef = _react2.default.createRef();

    // if (!this.form) {
    //   console.warn("props.form must be return from  Form.useForm");
    // }

    _this.state = {
      expand: false
    };
    return _this;
  }

  _createClass(SearchForm, [{
    key: "invokeSearch",
    value: function invokeSearch(action) {
      var onSearch = this.props.onSearch;


      if (!(0, _isFunction2.default)(onSearch)) {
        console.warn("onSearch must be function");
      } else {
        onSearch(this.formRef.current.getFieldsValue(), { action: action });
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

      if ((0, _isFunction2.default)(onReset)) {
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

      this.setState({ expand: nextExpand });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var expand = this.state.expand;
      var children = this.props.children;

      if (!(0, _isArray2.default)(children)) {
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
      var _props = this.props,
          children = _props.children,
          extendText = _props.extendText,
          min = _props.min,
          expandText = _props.expandText,
          collapseText = _props.collapseText;


      var text = expand ? collapseText : extendText || expandText;

      if (children.length > min) {
        var icon = expand ? _react2.default.createElement(_icons.UpSquareOutlined, null) : _react2.default.createElement(_icons.DownSquareOutlined, null);

        return _react2.default.createElement(
          "a",
          {
            style: { marginRight: 12, fontSize: 12 },
            onClick: this.toggle.bind(this)
          },
          text,
          " ",
          icon
        );
      }
    }
  }, {
    key: "render",
    value: function render() {
      var expand = this.state.expand;
      var _props2 = this.props,
          queryText = _props2.queryText,
          resetText = _props2.resetText,
          cols = _props2.cols,
          compact = _props2.compact,
          gutter = _props2.gutter,
          actions = _props2.actions,
          style = _props2.style;


      return _react2.default.createElement(
        _antd.Form,
        { className: "antd-x-search-form", style: style, ref: this.formRef },
        _react2.default.createElement(
          _FormLayout2.default,
          { cols: cols, compact: compact, gutter: gutter },
          this.renderItems(),
          _react2.default.createElement(
            _antd.Col,
            { className: "actions", nowarp: true },
            this.renderExtend(expand),
            _react2.default.createElement(
              _antd.Button,
              {
                type: "primary",
                icon: _react2.default.createElement(_icons.SearchOutlined, null),
                onClick: this.handleSearch.bind(this)
              },
              queryText
            ),
            _react2.default.createElement(
              _antd.Button,
              {
                icon: _react2.default.createElement(_icons.ReloadOutlined, null),
                onClick: this.handleReset.bind(this)
              },
              resetText
            ),
            actions
          )
        )
      );
    }
  }]);

  return SearchForm;
}(_react2.default.PureComponent);

SearchForm.defaultProps = {
  min: 999,
  queryText: "查询",
  resetText: "清除",
  expandText: "更多条件",
  collapseText: "简化条件",
  compact: true,
  cols: 3
};
SearchForm.propTypes = {
  /**
   * 查询函数   (values,event:{action}) => {}, event.action 触发动作 查询(SEARCH)或者重置(RESET)
   */
  onSearch: _propTypes2.default.func.isRequired,

  /**
   * 点击重置后触发,  会在onSearch之前执行,    重置会触发一次onSearch(空值)
   */
  onReset: _propTypes2.default.func,

  /**
   * 精简模式下展示多少条件
   */
  min: _propTypes2.default.number,

  /**
   * 查询按钮文字
   */
  queryText: _propTypes2.default.string,

  /**
   * 重置按钮文字
   */
  resetText: _propTypes2.default.string,

  /**
   * 展开按钮文字
   */
  expandText: _propTypes2.default.string,

  /**
   * 收缩按钮文字
   */
  collapseText: _propTypes2.default.string,

  /**
   * 布局展示几行  FormLayout cols
   */
  cols: _propTypes2.default.number,

  /**
   * 是否紧缩布局   FormLayout compact
   */
  compact: _propTypes2.default.bool,

  /**
   * FormLayout gutter
   */
  gutter: _propTypes2.default.number,

  /**
   * 放置在查询按钮后的 扩展按钮
   */
  actions: _propTypes2.default.any,

  /**
   * style
   */
  style: _propTypes2.default.any
};
exports.default = SearchForm;
//# sourceMappingURL=SearchForm.js.map