import modelExtend from 'dva-model-extend';
import isObject from 'lodash/isObject';
// Todo 处理withQuery参数, 还是保留冗余
export default function BasicModel(loadEffect, modal) {
  if (!isObject(modal) || !modal.namespace) {
    throw new Error('Modal must be an object with namespace');
  }
  const basic = {
    state: {
      pager: {
        current: 1,
        pageSize: 10,
      },
      query: {},
    },
    effects: {
      * loadData(action, { select, put }) {
        const query = yield select(state => state[modal.namespace].query);
        const pager = yield select(state => state[modal.namespace].pager);
        yield put({ type: loadEffect, query, pager });
      },

      * changePager({ pager }, { put }) {
        yield put({ type: 'onChangePager', pager });
        yield put({ type: 'loadData' });
      },

      * search({ query = {} }, { put, select }) {
        const pageSize = yield select(state => state[modal.namespace].pager.pageSize);
        yield put({ type: 'onLoadData', payload: { query, pager: { current: 1, pageSize } } });
        yield put({ type: 'loadData' });
      },

      * refresh(action, { put }) {
        yield put({ type: 'loadData' });
      },

      * closeModal(action, { put }) {
        yield put({
          type: 'onLoadData',
          payload: {
            modalName: '',
          },
        });
      },
    },
    reducers: {
      onChangePager(state, { pager }) {
        return { ...state, pager };
      },
      onLoadData(state, action) {
        return { ...state, ...action.payload };
      },
    },
  };

  return modelExtend(basic, modal);
}
