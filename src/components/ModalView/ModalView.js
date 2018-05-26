import * as ReactDOM from 'react-dom';
import {Modal} from 'antd';
import React, {Component, createElement} from 'react';

const defultConfig = {
  width: '860px',
  title: 'Modal'
}

export default class ModalView extends Component {
  static app = undefined;

  static bindApp(app) {
    ModalView.app = app;
  }

  static open(content, config = {}) {
    if (!ModalView.app) {
      throw new Error('Please ModalView.bindApp(app); in dva index.js');
    }

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

    const contenInst = createElement(content, { store: ModalView.app._store, modalRef: { close: onCancel } })
    // const contenInst = <ModelComponent store={ModalView.app._store} modalRef={{ close: onCancel }} />;
    render({ ...defultConfig, ...config, content: contenInst, footer: null, visible: true, onCancel });
    return {
      destroy: onCancel,
      close: onCancel,
    };
  }


  render() {
    return (
      <Modal className="antd-x-content-modal" {...this.props} >{this.props.content}</Modal>
    );
  }
}
