'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BasicModel;

var _dvaModelExtend = require('dva-model-extend');

var _dvaModelExtend2 = _interopRequireDefault(_dvaModelExtend);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Todo 处理withQuery参数, 还是保留冗余
function BasicModel(loadEffect, modal) {
  if (!(0, _isObject2.default)(modal) || !modal.namespace) {
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
      loadData: /*#__PURE__*/regeneratorRuntime.mark(function loadData(action, _ref) {
        var select = _ref.select,
            put = _ref.put;
        var query, pager;
        return regeneratorRuntime.wrap(function loadData$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return select(function (state) {
                  return state[modal.namespace].query;
                });

              case 2:
                query = _context.sent;
                _context.next = 5;
                return select(function (state) {
                  return state[modal.namespace].pager;
                });

              case 5:
                pager = _context.sent;
                _context.next = 8;
                return put({ type: loadEffect, query: query, pager: pager });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, loadData, this);
      }),
      changePager: /*#__PURE__*/regeneratorRuntime.mark(function changePager(_ref2, _ref3) {
        var pager = _ref2.pager;
        var put = _ref3.put;
        return regeneratorRuntime.wrap(function changePager$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return put({ type: 'onChangePager', pager: pager });

              case 2:
                _context2.next = 4;
                return put({ type: 'loadData' });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, changePager, this);
      }),
      search: /*#__PURE__*/regeneratorRuntime.mark(function search(_ref4, _ref5) {
        var _ref4$query = _ref4.query,
            query = _ref4$query === undefined ? {} : _ref4$query;
        var put = _ref5.put,
            select = _ref5.select;
        var pageSize;
        return regeneratorRuntime.wrap(function search$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return select(function (state) {
                  return state[modal.namespace].pager.pageSize;
                });

              case 2:
                pageSize = _context3.sent;
                _context3.next = 5;
                return put({ type: 'onLoadData', payload: { query: query, pager: { current: 1, pageSize: pageSize } } });

              case 5:
                _context3.next = 7;
                return put({ type: 'loadData' });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, search, this);
      }),
      refresh: /*#__PURE__*/regeneratorRuntime.mark(function refresh(action, _ref6) {
        var put = _ref6.put;
        return regeneratorRuntime.wrap(function refresh$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return put({ type: 'loadData' });

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, refresh, this);
      }),
      closeModal: /*#__PURE__*/regeneratorRuntime.mark(function closeModal(action, _ref7) {
        var put = _ref7.put;
        return regeneratorRuntime.wrap(function closeModal$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return put({
                  type: 'onLoadData',
                  payload: {
                    modalName: ''
                  }
                });

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, closeModal, this);
      })
    },
    reducers: {
      onChangePager: function onChangePager(state, _ref8) {
        var pager = _ref8.pager;

        return _extends({}, state, { pager: pager });
      },
      onLoadData: function onLoadData(state, action) {
        return _extends({}, state, action.payload);
      }
    }
  };

  return (0, _dvaModelExtend2.default)(basic, modal);
}
//# sourceMappingURL=BasicModel.js.map