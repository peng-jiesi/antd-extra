'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _PageTitle = require('../../layouts/Page/PageTitle');

var _PageTitle2 = _interopRequireDefault(_PageTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 信息展示视图, 通过key value模式展示, 提供布局能力
 *
 * ```html
 * <DetailView title={'详情展示'}>
 *   <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
 *   <Fragment>
 *     <AttributeLabel label={'测试'} size={2}>xxxxxxxxxxxxxxxx</AttributeLabel>
 *     <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
 *     <AttributeLabel label={'测试'} size={4}>123123123123</AttributeLabel>
 *   </Fragment>
 * </DetailView>
 * ```
 */
var DetailView = function (_PureComponent) {
  _inherits(DetailView, _PureComponent);

  function DetailView(props) {
    _classCallCheck(this, DetailView);

    var _this = _possibleConstructorReturn(this, (DetailView.__proto__ || Object.getPrototypeOf(DetailView)).call(this, props));

    _this.keyIdx = 1;
    return _this;
  }

  _createClass(DetailView, [{
    key: 'renderCol',
    value: function renderCol(ele) {
      var cols = this.props.cols;

      var eleColSpan = (0, _get3.default)(ele, 'props.size', 1);
      var colSpan = 24 / cols * eleColSpan;
      return _react2.default.createElement(
        _antd.Col,
        { span: colSpan, key: 'col_' + this.keyIdx++ },
        ele
      );
    }
  }, {
    key: 'warpLayout',
    value: function warpLayout() {
      var _this2 = this;

      var _props = this.props,
          _props$children = _props.children,
          children = _props$children === undefined ? [] : _props$children,
          gutter = _props.gutter;

      var colEles = _react2.default.Children.map(children, function (ele) {
        if (ele.type === Symbol.for('react.fragment')) {
          return _react2.default.Children.map(ele.props.children, function (inner) {
            return _this2.renderCol(inner);
          });
        } else {
          return _this2.renderCol(ele);
        }
      });
      return _react2.default.createElement(
        _antd.Row,
        { gutter: 0, className: 'content' },
        colEles
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          color = _props2.color,
          actions = _props2.actions,
          titleSize = _props2.titleSize,
          bgColor = _props2.bgColor;

      var header = title ? _react2.default.createElement(
        _PageTitle2.default,
        _extends({ color: color, actions: actions }, { size: titleSize }),
        title
      ) : null;
      var style = { backgroundColor: bgColor };

      return _react2.default.createElement(
        'div',
        { className: 'antd-x-detail-view', style: style },
        header,
        this.warpLayout()
      );
    }
  }]);

  return DetailView;
}(_react.PureComponent);

DetailView.defaultProps = {
  cols: 4,
  gutter: 8
};
DetailView.propTypes = {
  /**
   * 详情标题, 如果没有不展示头
   */
  title: _propTypes2.default.any,

  /**
   * 布局行数
   */
  cols: _propTypes2.default.number,

  /**
   * 背景色
   */
  bgColor: _propTypes2.default.string,

  /**
   * Row gutter 见:PageTitle  gutter
   */
  gutter: _propTypes2.default.number,

  /**
   * 标题头的颜色 见:PageTitle color
   */
  color: _propTypes2.default.string,

  /**
   * 标题操作 见:PageTitle actions
   */
  actions: _propTypes2.default.any,

  /**
   * 标题大小, 见: PageTitle size
   */
  titleSize: _propTypes2.default.string
};
exports.default = DetailView;
//# sourceMappingURL=DetailView.js.map