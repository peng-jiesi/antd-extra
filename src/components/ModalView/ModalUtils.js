import ModalForm from './ModalForm';
import ModalView from './ModalView'

/**
 * 弹窗入口类
 *
 * ```js
 * // 使用时首先在  dva index.js 中绑定,   注意是ModalView
 * ModalView.bindApp(app);
 *
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
 *
 */

export default class ModalUtils {
  static openFormModal(component, title, contentProps = {}, config = {}) {
    ModalView.open(ModalForm, { width: '600px', ...config, title }, { ...contentProps, content: component });
  }

  static openModal(content, config = {}, contentProps = {}) {
    ModalView.open(content, config, contentProps);
  }
}
