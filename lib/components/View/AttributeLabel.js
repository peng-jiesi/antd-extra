"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DetailView 下的元素
 */
var AttributeLabel = function (_PureComponent) {
  _inherits(AttributeLabel, _PureComponent);

  function AttributeLabel() {
    _classCallCheck(this, AttributeLabel);

    return _possibleConstructorReturn(this, (AttributeLabel.__proto__ || Object.getPrototypeOf(AttributeLabel)).apply(this, arguments));
  }

  _createClass(AttributeLabel, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children,
          label = _props.label,
          size = _props.size;

      var width = 100 / 3 / size;
      return _react2.default.createElement(
        "div",
        { className: "attribute", title: title },
        _react2.default.createElement(
          "span",
          { className: "label", style: { width: width + "%" } },
          label
        ),
        " ",
        children
      );
    }
  }]);

  return AttributeLabel;
}(_react.PureComponent);

AttributeLabel.defaultProps = {
  size: 1
};
AttributeLabel.propTypes = {
  /**
   * label
   */
  label: _propTypes2.default.any.isRequired,

  /**
   * html.title
   */
  title: _propTypes2.default.any,

  /**
   * size 在DetailView下占据几行
   */
  size: _propTypes2.default.number
};
exports.default = AttributeLabel;
//# sourceMappingURL=AttributeLabel.js.map