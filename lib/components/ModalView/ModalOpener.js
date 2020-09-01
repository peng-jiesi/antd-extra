"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _pick2 = require("lodash/pick");

var _pick3 = _interopRequireDefault(_pick2);

var _isFunction2 = require("lodash/isFunction");

var _isFunction3 = _interopRequireDefault(_isFunction2);

require("antd/lib/modal/style/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

function ModalOpener(props, ref) {
  var _this = this;

  // 展示状态
  var _React$useState = _react2.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  // 内部引用


  var contentRef = _react2.default.useRef();

  var content = props.content,
      customProps = props.customProps,
      data = props.data,
      _props$title = props.title,
      title = _props$title === undefined ? "Modal" : _props$title,
      _props$width = props.width,
      width = _props$width === undefined ? "600px" : _props$width,
      _props$destroyOnClose = props.destroyOnClose,
      destroyOnClose = _props$destroyOnClose === undefined ? true : _props$destroyOnClose,
      onCancel = props.onCancel,
      onOk = props.onOk,
      onOpen = props.onOpen;


  var contentProps = _extends({}, customProps, {
    data: data
  });

  var modalProps = (0, _pick3.default)(props, ["afterClose", "bodyStyle", "closable", "centered", "closeIcon", "confirmLoading", "keyboard", "mask", "maskClosable", "maskStyle", "style", "wrapClassName", "zIndex", "cancelText", "cancelButtonProps", "okButtonProps", "okType", "okText", "centered"]);

  // 没有关联任何函数时, 页脚不显示
  if (!onOk) {
    modalProps.footer = false;
  }

  // cancelText	取消按钮文字	string | ReactNode	取消
  // okText	确认按钮文字	string | ReactNode	确定

  var ContentComponent = props.content;
  var getFormInst = function getFormInst() {
    if (contentRef.current) {
      return contentRef.current;
    }
    return undefined;
  };

  var cancelHandler = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(0, _isFunction3.default)(onCancel)) {
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
      }, _callee, _this);
    }));

    return function cancelHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var okHandler = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var formInst;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if ((0, _isFunction3.default)(onOk)) {
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
              formInst.validateFields().then(function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(values) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
                  }, _callee2, _this);
                }));

                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()).catch(function (err) {
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
      }, _callee3, _this);
    }));

    return function okHandler(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  _react2.default.useImperativeHandle(ref, function () {
    var formInst = getFormInst();
    return {
      form: formInst,
      close: cancelHandler
    };
  });

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      "span",
      {
        onClick: _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(0, _isFunction3.default)(onOpen)) {
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
          }, _callee4, _this);
        }))
      },
      props.children
    ),
    _react2.default.createElement(
      _antd.Modal,
      _extends({
        className: "antd-x-content-modal",
        title: title,
        visible: visible,
        width: width,
        destroyOnClose: destroyOnClose,
        onOk: okHandler,
        onCancel: cancelHandler
      }, modalProps),
      _react2.default.createElement(ContentComponent, _extends({ forwardedRef: contentRef }, contentProps))
    )
  );
}

exports.default = _react2.default.forwardRef(ModalOpener);
//# sourceMappingURL=ModalOpener.js.map