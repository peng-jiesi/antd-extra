'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      wrapperClassName = _ref.wrapperClassName;
  return _react2.default.createElement(
    'div',
    { style: { margin: '-24px -24px 0' }, className: wrapperClassName },
    children ? _react2.default.createElement(
      'div',
      null,
      children
    ) : null
  );
};
//# sourceMappingURL=PageLayout.js.map