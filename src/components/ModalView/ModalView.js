import * as ReactDOM from 'react-dom';
import React, {Component, createElement} from 'react';
import {Modal, Drawer} from 'antd';
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
 * // modalConfig.placement  支持侧边栏模式弹窗, right | left,   启用该模式默认使用 Drawer
 * // modalConfig.type      支持 Modal 和 Drawer
 * // modalConfig.noStore  设定为true时, 可以不做bindApp
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
 * //  config.onFooter, 支持 onFooter =  true   则不渲染Footer
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

  // static open4Form(component, title, contentProps = {}, config = {}) {
  //   ModalView.open(ModalForm, { ...config, title }, { ...contentProps, content: component });
  // }

  static open(content, config = {}, contentProps = {}) {
    const { noStore = false } = config;
    if (!noStore && !ModalView.app) {
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
      // const triggerCancel = args && args.length &&
      //   args.some(param => param && param.triggerCancel);
      if (config.onCancel) {
        config.onCancel(...args);
      }
    }

    function render(props) {
      ReactDOM.render(<ModalView {...props} />, div);
    }

    const instProps = {
      ...contentProps,
      modalRef: { close: onCancel }
    };
    if (!noStore) {
      instProps.store = ModalView.app._store
    }

    const contentInst = createElement(content, instProps);

    const defultConfig = {
      width: '860px',
      title: 'Modal'
    };

    const { placement, noHover, type='Modal' } = config;

    let realType = type;

    // 当指定placement时, 默认使用Drawer
    if(placement){
      realType = 'Drawer'
    }

    if(realType === 'Drawer') {
      defultConfig.width = '380px';
    }

    const modelProps = {
      ...defultConfig,
      ...config,
      content: contentInst,
      footer: null,
      visible: true,
      type: realType,
      onCancel
    };


    // if (place && noHover) {
    //   modelProps.wrapClassName = modelProps.wrapClassName ? `no-hover ${modelProps.wrapClassName}` : `no-hover`
    // }

    // const contenInst = <ModelComponent store={ModalView.app._store} modalRef={{ close: onCancel }} />;
    render(modelProps);
    return {
      destroy: onCancel,
      close: onCancel,
    };
  }


  // todo 国际化问题需要处理
  render() {
    const { type } = this.props;
    console.log(this.props);
    if(type ==='Drawer'){
      return (<Drawer className={`antd-x-content-modal`} {...this.props} onClose={this.props.onCancel} >{this.props.content}</Drawer>);
    }else{
      return (<Modal className={`antd-x-content-modal`} {...this.props} >{this.props.content}</Modal>);
    }
  }
}
