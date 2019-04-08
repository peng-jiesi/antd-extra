import * as ReactDOM from 'react-dom';
import React, {Component, createElement} from 'react';
import {Modal} from 'antd';
import 'antd/lib/modal/style/css';
import ModalForm from "./ModalForm";


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
 * // modalConfig.place  支持侧边栏模式弹窗, right | left
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
 *
 * ModalUtils 提供弹窗入口类
 *
 * ```js
 * // 使用时首先在  dva index.js 中绑定,   注意是ModalView
 * ModalView.bindApp(app);
 *
 *
 * // 等于原有的ModalView.open
 * ModalUtils.openModal(ModalPage,modalConfig,contentProps)
 *
 *
 * // 用于表单编辑类弹窗, 自带form对象和数据传递
 * ModalUtils.openFormModal(FormComponent, title, contentProps, config)
 * //  FormComponent,  标准的form对象  <Form><FormLayout></FormLayout></Form>
 * //  title,  modal 的title
 * //  contentProps,  传递给FormComponent的属性,  其中主要包括:  data初始数据, 可用props.data访问,   onSubmit提交函数, 可用props.onSubmit访问
 * //  config,  modal 的config,  等同于ModalView的config
 * ```
 *
 * ModalExt.js
 * ```js
 *  <Button  onClick={() => {
 *             ModalView.open4Form(ModalForm, '测试', {
 *               onSubmit: (data, onClose, { initData, form }) => {console.log(data), console.log(onClose);},
 *               data: { test: 'test1', test2: 'test2' }
 *             })
 *           }}
 *  >
 *  Open Form
 *  </Button>
 * ```
 */



export default class ModalView extends Component {
  static app = undefined;

  static bindApp(app) {
    ModalView.app = app;
  }

  static open4Form(component, title, contentProps = {}, config = {}) {
    ModalView.open(ModalForm, { ...config, title }, { ...contentProps, content: component });
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


    const defultConfig = {
      width: '860px',
      title: 'Modal'
    };

    const { place, noHover } = config;

    if (place === 'right' || place === 'left') {
      defultConfig.width = '380px';
    }

    const modelProps = {
      ...defultConfig,
      ...config,
      content: contenInst,
      footer: null,
      visible: true,
      onCancel
    };


    if (place && noHover) {
      modelProps.wrapClassName = modelProps.wrapClassName ? `no-hover ${place} ${modelProps.wrapClassName}` : `no-hover ${place}`
    }

    // const contenInst = <ModelComponent store={ModalView.app._store} modalRef={{ close: onCancel }} />;
    render(modelProps);
    return {
      destroy: onCancel,
      close: onCancel,
    };
  }


  // todo 国际化问题需要处理
  render() {
    const { place } = this.props;
    return (
      <Modal className={`antd-x-content-modal ${place}`} {...this.props} >{this.props.content}</Modal>
    );
  }
}
