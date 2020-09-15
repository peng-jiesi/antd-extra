"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BasicModel;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _dvaModelExtend = _interopRequireDefault(require("dva-model-extend"));

var _isObject = _interopRequireDefault(require("lodash/isObject"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Todo 处理withQuery参数, 还是保留冗余
function BasicModel(loadEffect, modal) {
  if (!(0, _isObject["default"])(modal) || !modal.namespace) {
    throw new Error('Modal must be an object with namespace');
  }

  var basic = {
    state: {
      pager: {
        current: 1,
        pageSize: 10
      },
      query: {}
    },
    effects: {
      loadData: /*#__PURE__*/_regenerator["default"].mark(function loadData(action, _ref) {
        var select, put, query, pager;
        return _regenerator["default"].wrap(function loadData$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                select = _ref.select, put = _ref.put;
                _context.next = 3;
                return select(function (state) {
                  return state[modal.namespace].query;
                });

              case 3:
                query = _context.sent;
                _context.next = 6;
                return select(function (state) {
                  return state[modal.namespace].pager;
                });

              case 6:
                pager = _context.sent;
                _context.next = 9;
                return put({
                  type: loadEffect,
                  query: query,
                  pager: pager
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, loadData);
      }),
      changePager: /*#__PURE__*/_regenerator["default"].mark(function changePager(_ref2, _ref3) {
        var pager, put;
        return _regenerator["default"].wrap(function changePager$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pager = _ref2.pager;
                put = _ref3.put;
                _context2.next = 4;
                return put({
                  type: 'onChangePager',
                  pager: pager
                });

              case 4:
                _context2.next = 6;
                return put({
                  type: 'loadData'
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, changePager);
      }),
      search: /*#__PURE__*/_regenerator["default"].mark(function search(_ref4, _ref5) {
        var _ref4$query, query, put, select, pageSize;

        return _regenerator["default"].wrap(function search$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref4$query = _ref4.query, query = _ref4$query === void 0 ? {} : _ref4$query;
                put = _ref5.put, select = _ref5.select;
                _context3.next = 4;
                return select(function (state) {
                  return state[modal.namespace].pager.pageSize;
                });

              case 4:
                pageSize = _context3.sent;
                _context3.next = 7;
                return put({
                  type: 'onLoadData',
                  payload: {
                    query: query,
                    pager: {
                      current: 1,
                      pageSize: pageSize
                    }
                  }
                });

              case 7:
                _context3.next = 9;
                return put({
                  type: 'loadData'
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, search);
      }),
      refresh: /*#__PURE__*/_regenerator["default"].mark(function refresh(action, _ref6) {
        var put;
        return _regenerator["default"].wrap(function refresh$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                put = _ref6.put;
                _context4.next = 3;
                return put({
                  type: 'loadData'
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, refresh);
      }),
      closeModal: /*#__PURE__*/_regenerator["default"].mark(function closeModal(action, _ref7) {
        var put;
        return _regenerator["default"].wrap(function closeModal$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                put = _ref7.put;
                _context5.next = 3;
                return put({
                  type: 'onLoadData',
                  payload: {
                    modalName: ''
                  }
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, closeModal);
      })
    },
    reducers: {
      onChangePager: function onChangePager(state, _ref8) {
        var pager = _ref8.pager;
        return _objectSpread(_objectSpread({}, state), {}, {
          pager: pager
        });
      },
      onLoadData: function onLoadData(state, action) {
        return _objectSpread(_objectSpread({}, state), action.payload);
      }
    }
  };
  return (0, _dvaModelExtend["default"])(basic, modal);
}
//# sourceMappingURL=BasicModel.js.map