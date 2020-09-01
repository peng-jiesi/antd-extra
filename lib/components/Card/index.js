"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _index = require("./index.less");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconFont = _antd.Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_858347_wxjl16j413e.js"
});

var CustomCard = function (_React$Component) {
  _inherits(CustomCard, _React$Component);

  function CustomCard() {
    _classCallCheck(this, CustomCard);

    return _possibleConstructorReturn(this, (CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).apply(this, arguments));
  }

  _createClass(CustomCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          logo = _props.logo,
          bgStyle = _props.bgStyle,
          _props$title = _props.title,
          title = _props$title === undefined ? "测试" : _props$title,
          _props$userName = _props.userName,
          userName = _props$userName === undefined ? "— 空置 —" : _props$userName,
          _props$dateTime = _props.dateTime,
          dateTime = _props$dateTime === undefined ? "-" : _props$dateTime,
          dateColor = _props.dateColor,
          stateColor = _props.stateColor,
          superScript = _props.superScript,
          _props$superScriptCol = _props.superScriptColor,
          superScriptColor = _props$superScriptCol === undefined ? { display: "none" } : _props$superScriptCol,
          stateIcon = _props.stateIcon,
          text = _props.text,
          _props$actions = _props.actions,
          actions = _props$actions === undefined ? [] : _props$actions;

      return _react2.default.createElement(
        "div",
        { className: _index2.default.card },
        _react2.default.createElement(
          "div",
          { className: _index2.default.customCard1 },
          _react2.default.createElement(
            "div",
            { className: _index2.default.customLogo, style: bgStyle },
            _react2.default.createElement(IconFont, { className: _index2.default.icon, type: logo, style: bgStyle })
          ),
          _react2.default.createElement(
            "div",
            { className: _index2.default.desc },
            _react2.default.createElement(
              "div",
              { className: _index2.default.superScript },
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement("span", { style: superScriptColor }),
                _react2.default.createElement(
                  "em",
                  null,
                  superScript
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: _index2.default.title },
              title
            ),
            _react2.default.createElement(
              "div",
              null,
              userName
            ),
            _react2.default.createElement(
              "div",
              null,
              "\u79DF\u671F\uFF1A",
              _react2.default.createElement(
                "span",
                { style: dateColor },
                dateTime
              )
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(_antd.Icon, { style: stateColor, type: stateIcon, theme: "filled" }),
              _react2.default.createElement(
                "span",
                { className: _index2.default.state },
                text
              )
            )
          )
        ),
        _react2.default.createElement(
          "ul",
          { className: _index2.default.antCardActions },
          actions.map(function (item) {
            return item;
          })
        )
      );
    }
  }]);

  return CustomCard;
}(_react2.default.Component);

exports.default = CustomCard;
//# sourceMappingURL=index.js.map