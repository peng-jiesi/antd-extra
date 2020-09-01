'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
 */
var TableResponsive = function (_PureComponent) {
  _inherits(TableResponsive, _PureComponent);

  function TableResponsive() {
    _classCallCheck(this, TableResponsive);

    return _possibleConstructorReturn(this, (TableResponsive.__proto__ || Object.getPrototypeOf(TableResponsive)).apply(this, arguments));
  }

  _createClass(TableResponsive, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'antd-x-table-responsive' },
        this.props.children
      );
    }
  }]);

  return TableResponsive;
}(_react.PureComponent);

TableResponsive.defaultProps = {};
TableResponsive.propTypes = {};
exports.default = TableResponsive;
//# sourceMappingURL=TableResponsive.js.map