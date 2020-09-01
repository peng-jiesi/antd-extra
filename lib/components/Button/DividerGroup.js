'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Table中的Button
 * ```html
 * <LinkButton onClick={}>删除</LinkButton>
 * ```
 */
var DividerGroup = function (_PureComponent) {
  _inherits(DividerGroup, _PureComponent);

  function DividerGroup() {
    _classCallCheck(this, DividerGroup);

    return _possibleConstructorReturn(this, (DividerGroup.__proto__ || Object.getPrototypeOf(DividerGroup)).apply(this, arguments));
  }

  _createClass(DividerGroup, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var children = this.props.children;

      var items = [];
      _react2.default.Children.map(children, function (item, idx) {
        items.push(item);
        items.push(_react2.default.createElement(_antd.Divider, { type: 'vertical' }));
      });

      // 去掉最后一个Divider
      items.pop();
      return items;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var childrenCount = _react2.default.Children.count(children);
      if (childrenCount > 1) {
        return _react2.default.createElement(
          _react.Fragment,
          null,
          this.renderChildren()
        );
      } else {
        return children;
      }
    }
  }]);

  return DividerGroup;
}(_react.PureComponent);

DividerGroup.defaultProps = {};
DividerGroup.propTypes = {
  // confirm: PropTypes.any,
  // okText: PropTypes.any,
  // cancelText: PropTypes.any,
};
exports.default = DividerGroup;
//# sourceMappingURL=DividerGroup.js.map