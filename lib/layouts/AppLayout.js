"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _default = function _default(_ref) {
  var children = _ref.children,
      wrapperClassName = _ref.wrapperClassName;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "100vh",
      backgroundColor: "#FFFFFF",
      overflow: "auto",
      padding: "18px 12px"
    },
    className: "app-layout ".concat(wrapperClassName)
  }, children ? children : null);
};

exports["default"] = _default;
//# sourceMappingURL=AppLayout.js.map