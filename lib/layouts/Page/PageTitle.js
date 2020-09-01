'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 页面标题
 *```html
 *  <PageTitle color={'#000000'} actions={<Button>测试</Button>}>这是一个标题</PageTitle>
 *```
 */
var PageTitle = function (_React$PureComponent) {
  _inherits(PageTitle, _React$PureComponent);

  function PageTitle() {
    _classCallCheck(this, PageTitle);

    return _possibleConstructorReturn(this, (PageTitle.__proto__ || Object.getPrototypeOf(PageTitle)).apply(this, arguments));
  }

  _createClass(PageTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          actions = _props.actions,
          size = _props.size;


      return _react2.default.createElement(
        'h2',
        { className: 'antd-x-page-title ' + size, style: { borderLeftColor: color } },
        children,
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          actions
        )
      );
    }
  }]);

  return PageTitle;
}(_react2.default.PureComponent);

PageTitle.defaultProps = {
  size: ''
};
PageTitle.propTypes = {
  /**
   * 竖条颜色
   */
  color: _propTypes2.default.string,
  /**
   * 操作区域
   */
  actions: _propTypes2.default.any,

  /**
   * 尺寸  可用 small
   */
  size: _propTypes2.default.string
};
exports.default = PageTitle;
;
//# sourceMappingURL=PageTitle.js.map