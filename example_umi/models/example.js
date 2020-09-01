export default {
  namespace: "example",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      console.log("payload", payload);
    },

    *randomData({}, { put }) {
      //

      setTimeout(() => {
        put({ type: "xxx", payload: {} });
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
