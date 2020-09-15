"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DescriptionsCollapse;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

function CollapseToggle(_ref) {
  var _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded,
      _onClick = _ref.onClick;
  var label = expanded ? /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_icons.CaretUpOutlined, null), " \u6536\u8D77") : /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_icons.CaretDownOutlined, null), " \u66F4\u591A");
  return /*#__PURE__*/_react["default"].createElement(_antd.Divider, {
    className: "antd-x-description-collapse",
    onClick: function onClick() {
      _onClick(!expanded);
    }
  }, label);
}
/**
 * 扩展信息展示组件Descriptions,   替代Descriptions使用,  增加缩放展示功能
 */


function DescriptionsCollapse(_ref2) {
  var children = _ref2.children,
      min = _ref2.min;

  var count = _react["default"].Children.count(children);

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpand = _React$useState2[1];

  var showItems = children;

  if (count > min && !expanded) {
    showItems = children.slice(0, min);
  }

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_antd.Descriptions, {
    bordered: true,
    size: "small"
  }, showItems), /*#__PURE__*/_react["default"].createElement(CollapseToggle, {
    expanded: expanded,
    onClick: setExpand
  }));
}

DescriptionsCollapse.propTypes = {
  /**
   * 最少展示的内容数量
   */
  min: _propTypes["default"].number,

  /**
   * 一行展示几个
   */
  column: _propTypes["default"].number
};
DescriptionsCollapse.defaultProps = {
  min: 6,
  column: 3
};
//# sourceMappingURL=DescriptionsCollapse.js.map