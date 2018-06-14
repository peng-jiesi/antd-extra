import * as ReactDOM from 'react-dom';
import {LocaleProvider, Modal} from 'antd';
import React, {Component, createElement} from 'react';
import ModalPage from "../../../example/routes/ModalPage";
import {connect} from "dva/index";

const defultConfig = {
  width: '860px',
  title: 'Modal'
}


/**
 * 提供全局弹窗, 弹窗内Component可以直接使用connect
 *
 * ```js
 * // 使用时首先在  dva index.js 中绑定
 * ModalView.bindApp(app);
 *
 *
 * // 在model 或者 Component中直接打开弹窗, 弹窗内容为Component实例
 * // modalConfig 见 antd Modal
 * // contentProps  可以直接传递给Component
 * ModalView.open(ModalPage,modalConfig,contentProps)
 *
 *
 *
 * // ModalPage中可以通过 props.modalRef.close() 关闭弹窗
 * ```
 *
 * ModalPage.js
 * ```js
 *  * @connect()
 * export default class ModalPage extends React.Component {
 *
 *   render() {
 *     return (
 *       <Fragment>
 *         <DetailView title={'详情展示'}>
 *           <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
 *         </DetailView>
 *
 *         <ModalFooter>
 *           <Button
 *             onClick={() => {
 *               this.props.modalRef.close();
 *             }}
 *           >
 *             Close
 *           </Button>
 *         </ModalFooter>
 *       </Fragment>
 *     )
 *   }
 * }
 * ```
 */



export default class ModalView extends Component {
  static app = undefined;

  static bindApp(app) {
    ModalView.app = app;
  }

  static open(content, config = {}, contentProps = {}) {
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

    const contenInst = createElement(content, {
      ...contentProps,
      store: ModalView.app._store,
      modalRef: { close: onCancel }
    })
    // const contenInst = <ModelComponent store={ModalView.app._store} modalRef={{ close: onCancel }} />;
    render({ ...defultConfig, ...config, content: contenInst, footer: null, visible: true, onCancel });
    return {
      destroy: onCancel,
      close: onCancel,
    };
  }


  // todo 国际化问题需要处理
  render() {
    return (
      <Modal className="antd-x-content-modal" {...this.props} >{this.props.content}</Modal>
    );
  }
}
