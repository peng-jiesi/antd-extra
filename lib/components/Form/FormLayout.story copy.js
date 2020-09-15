"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _index = require("../../index");

var _default = {
  title: "Form/FormLayout",
  component: _index.FormLayout,
  subcomponents: {
    FormField: _index.FormField
  }
};
exports["default"] = _default;

var Basic = function Basic() {
  return /*#__PURE__*/_react["default"].createElement(_antd.Form, {
    onFinish: function onFinish(data) {
      console.log(data);
    }
  }, /*#__PURE__*/_react["default"].createElement(_index.FormLayout, null, /*#__PURE__*/_react["default"].createElement(_index.FormField, {
    label: "Test Label",
    name: "test",
    required: true
  }, /*#__PURE__*/_react["default"].createElement(_antd.Input, null)), /*#__PURE__*/_react["default"].createElement(_index.FormField, {
    label: "Test Label2",
    name: "test2",
    required: true
  }, /*#__PURE__*/_react["default"].createElement(_antd.Input, null)), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    style: {
      "float": "right"
    }
  }, "Submit")));
};

exports.Basic = Basic;
//# sourceMappingURL=FormLayout.story copy.js.map