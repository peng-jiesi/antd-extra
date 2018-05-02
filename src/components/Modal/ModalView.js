import * as ReactDOM from 'react-dom';
import { Modal } from 'antd';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import styles from './index.less';
import store from '../../../index';

const IS_REACT_16 = !!ReactDOM.createPortal;

export default class ModalView extends Component {
  static open(content, config = {}) {
    console.log(content, config);
    const div = document.createElement('div');
    document.body.appendChild(div);

    function onCancel(...args) {
      destroy(...args);
      // if (IS_REACT_16) {
      //   render({ ...config, onCancel, visible: false, afterClose: destroy.bind(this, ...args) });
      // } else {
      //   destroy(...args);
      // }
    }


    function destroy(...args) {
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult && div.parentNode) {
        div.parentNode.removeChild(div);
      }
      const triggerCancel = args && args.length &&
        args.some(param => param && param.triggerCancel);
      if (config.onCancel && triggerCancel) {
        config.onCancel(...args);
      }
    }

    function render(props) {
      ReactDOM.render(<ModalView {...props} />, div);
    }

    const title = config.title || 'Modal';
    const { onOk } = config;

    render({ ...config, title, content, footer:null, visible: true, onCancel, onOk });
    return {
      destroy: onCancel,
      close: onCancel,
    };
  }

  getChildContext() {
    return {
      store,
    };
  }

  render() {
    return (
      <Modal className='antd-x-content-modal' {...this.props} >{this.props.content}</Modal>
    );
  }
}

ModalView.childContextTypes = {
  store: PropTypes.any,
};
