"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("antd/lib/modal/style/css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ModalOpener(props, ref) {
  // 展示状态
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1]; // 内部引用


  var contentRef = _react["default"].useRef();

  var content = props.content,
      customProps = props.customProps,
      data = props.data,
      title = props.title,
      width = props.width,
      destroyOnClose = props.destroyOnClose,
      onCancel = props.onCancel,
      onOk = props.onOk,
      onOpen = props.onOpen; // cancelText	取消按钮文字	string | ReactNode	取消
  // okText	确认按钮文字	string | ReactNode	确定

  var ContentComponent = content;

  var getFormInst = function getFormInst() {
    if (contentRef.current) {
      return contentRef.current;
    }

    return undefined;
  };

  var cancelHandler = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(0, _isFunction2["default"])(onCancel)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return onCancel(e);

            case 3:
              setVisible(false);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function cancelHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var okHandler = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(e) {
      var formInst;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if ((0, _isFunction2["default"])(onOk)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              formInst = getFormInst();

              if (!formInst) {
                _context3.next = 7;
                break;
              }

              // 有form对象
              formInst.validateFields().then( /*#__PURE__*/function () {
                var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(values) {
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return onOk(values, cancelHandler, {
                            initData: data,
                            form: formInst,
                            e: e
                          });

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }())["catch"](function (err) {
                console.error(err);
              });
              _context3.next = 10;
              break;

            case 7:
              _context3.next = 9;
              return onOk(e, cancelHandler);

            case 9:
              cancelHandler();

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function okHandler(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  _react["default"].useImperativeHandle(ref, function () {
    var formInst = getFormInst();
    return {
      form: formInst,
      close: cancelHandler
    };
  });

  var modalProps = (0, _pick2["default"])(props, ["afterClose", "bodyStyle", "closable", "centered", "closeIcon", "confirmLoading", "keyboard", "mask", "maskClosable", "maskStyle", "style", "wrapClassName", "zIndex", "cancelText", "cancelButtonProps", "okButtonProps", "okType", "okText", "centered"]); // 没有关联任何函数时, 页脚不显示

  if (!onOk) {
    modalProps.footer = false;
  } // 如果关联form,默认 maskClosable为false
  // const formInst = getFormInst();
  // console.log("formInst", formInst);
  // if (formInst) {
  //   modalProps.maskClosable = false;
  // }


  var contentProps = _objectSpread(_objectSpread({}, customProps), {}, {
    modalRef: {
      close: cancelHandler
    },
    data: data
  });

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    onClick: /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(0, _isFunction2["default"])(onOpen)) {
                _context4.next = 3;
                break;
              }

              _context4.next = 3;
              return onOpen();

            case 3:
              setVisible(true);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))
  }, props.children), /*#__PURE__*/_react["default"].createElement(_antd.Modal, (0, _extends2["default"])({
    className: "antd-x-content-modal",
    title: title,
    visible: visible,
    width: width,
    destroyOnClose: destroyOnClose,
    onOk: okHandler,
    onCancel: cancelHandler
  }, modalProps), /*#__PURE__*/_react["default"].createElement(ContentComponent, (0, _extends2["default"])({
    forwardedRef: contentRef
  }, contentProps))));
}
/**
 * 弹窗按钮包装
 *```html
        <ModalOpener
          content={ModalPage}
          title="ModalPage"
          custProps={{
            a: 1,
            b: 2,
          }}
        >
          <Button>Open Component</Button>
        </ModalOpener>
 *```
 * content:   弹窗内的组件,   ReactComponent
 * custProps:   传入  content实例的props
 * onOk:  提交事件,   如果不关联form 为 (event)=>{},  关联form为  (data,modalCloseFun, {initData,form, e })
 * onOpen:  打开弹窗前调用 ()=>{}
 * onCancel: 取消事件,   (event)=>{}
 * 
 * 与Form组件联动
 * 如下列例子中,  ModalForm 为带Form的组件
 *```html
        <ModalOpener
          content={ModalForm}
          title="ModalPage"
          custProps={{
            a: 1,
            b: 2,
          }}
        >
          <Button>Open Component</Button>
        </ModalOpener>
 *```
 *需要在ModalForm中, 通过ref={props.forwardedRef} 关联Form组件, 组件将自动校验form, 直接传递form值到回调onOk
 *如下,  
 *```html
      <Form ref={forwardedRef}>
        <FormLayout>
          <FormField
            label={"Test Label"}
            name={"test1"}
            initialValue={data.test}
            required
          >
            <Input />
          </FormField>
        </FormLayout>
      </Form>
 *```
 */

/**
 * 封装弹窗组件, 将Modal和具体业务Component分离, 简化开发工作
 *
 * 在props中可以直接使用其他modal的属性
 *
 * 需要在ModalForm中, 通过ref={props.forwardedRef} 关联Form组件, 组件将自动校验form, 直接传递form值到回调onOk
 *
 */


var OpenerComponent = /*#__PURE__*/_react["default"].forwardRef(ModalOpener);

OpenerComponent.propTypes = {
  /**
   * Modal中要展示的组件类
   */
  content: _propTypes["default"].elementType,

  /**
   * 传递给content组件的Props
   */
  customProps: _propTypes["default"].object,

  /**
   * 传递给content组件的Props.data
   */
  data: _propTypes["default"].object,
  // modal相关

  /**
   * 弹窗标题,   PS:  其他modal属性,也可以直接使用
   */
  title: _propTypes["default"].string,

  /**
   * 弹窗宽度
   */
  width: _propTypes["default"].any,

  /**
   * 关闭时是否销毁组件
   */
  destroyOnClose: _propTypes["default"].bool,

  /**
   * 	点击蒙层是否允许关闭,  如果关联form, 建议使用false
   */
  maskClosable: _propTypes["default"].bool,
  // 事件

  /**
   *  取消事件,   (event)=>{}
   */
  onCancel: _propTypes["default"].func,

  /**
   * 提交事件,   如果不关联form 为 (event)=>{},  关联form为  (data,modalCloseFun, {initData,form, e })
   */
  onOk: _propTypes["default"].func,

  /**
   * 打开事件, 在打开窗口之前执行   ()=>{}
   */
  onOpen: _propTypes["default"].func
};
OpenerComponent.defaultProps = {
  title: "Modal",
  width: "780px",
  destroyOnClose: true
};
var _default = OpenerComponent;
exports["default"] = _default;
//# sourceMappingURL=ModalOpener.js.map