import React, { Fragment } from "react";
import { Button, Modal, Empty, Form, Input } from "antd";
import _pick from "lodash/pick";
import _isFunction from "lodash/isFunction";
import PropTypes from "prop-types";

import "antd/lib/modal/style/css";

function ModalOpener(props, ref) {
  // 展示状态
  const [visible, setVisible] = React.useState(false);

  // 内部引用
  const contentRef = React.useRef();

  const {
    // 自动以对象
    content,
    customProps,
    data,

    // modal相关
    title,
    width,
    destroyOnClose,

    // 事件
    onCancel,
    onOk,
    onOpen,
  } = props;

  // cancelText	取消按钮文字	string | ReactNode	取消
  // okText	确认按钮文字	string | ReactNode	确定

  const ContentComponent = content;
  const getFormInst = () => {
    if (contentRef.current) {
      return contentRef.current;
    }
    return undefined;
  };

  const cancelHandler = async (e) => {
    if (_isFunction(onCancel)) {
      await onCancel(e);
    }
    setVisible(false);
  };

  const okHandler = async (e) => {
    if (!_isFunction(onOk)) {
      return;
    }

    const formInst = getFormInst();

    if (formInst) {
      // 有form对象
      formInst
        .validateFields()
        .then(async (values) => {
          await onOk(values, cancelHandler, {
            initData: data,
            form: formInst,
            e,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // 没有form对象
      await onOk(e, cancelHandler);
      cancelHandler();
    }
  };

  React.useImperativeHandle(ref, () => {
    const formInst = getFormInst();
    return {
      form: formInst,
      close: cancelHandler,
    };
  });

  const modalProps = _pick(props, [
    "afterClose",
    "bodyStyle",
    "closable",
    "centered",
    "closeIcon",
    "confirmLoading",
    "keyboard",
    "mask",
    "maskClosable",
    "maskStyle",
    "style",
    "wrapClassName",
    "zIndex",
    "cancelText",
    "cancelButtonProps",
    "okButtonProps",
    "okType",
    "okText",
    "centered",
  ]);

  // 没有关联任何函数时, 页脚不显示
  if (!onOk) {
    modalProps.footer = false;
  }

  // 如果关联form,默认 maskClosable为false
  // const formInst = getFormInst();
  // console.log("formInst", formInst);

  // if (formInst) {
  //   modalProps.maskClosable = false;
  // }

  const contentProps = {
    ...customProps,
    modalRef: { close: cancelHandler },
    data,
  };

  return (
    <Fragment>
      <span
        onClick={async () => {
          if (_isFunction(onOpen)) {
            await onOpen();
          }
          setVisible(true);
        }}
      >
        {props.children}
      </span>

      <Modal
        className={`antd-x-content-modal`}
        title={title}
        visible={visible}
        width={width}
        destroyOnClose={destroyOnClose}
        onOk={okHandler}
        onCancel={cancelHandler}
        {...modalProps}
      >
        <ContentComponent forwardedRef={contentRef} {...contentProps} />
      </Modal>
    </Fragment>
  );
}

/**
 * 弹窗按钮包装
 *```html
        <ModalOpener
          content={ModalPage}
          title="ModalPage"
          custProps={{
            a: 1,
            b: 2,
          }}
        >
          <Button>Open Component</Button>
        </ModalOpener>
 *```
 * content:   弹窗内的组件,   ReactComponent
 * custProps:   传入  content实例的props
 * onOk:  提交事件,   如果不关联form 为 (event)=>{},  关联form为  (data,modalCloseFun, {initData,form, e })
 * onOpen:  打开弹窗前调用 ()=>{}
 * onCancel: 取消事件,   (event)=>{}
 * 
 * 与Form组件联动
 * 如下列例子中,  ModalForm 为带Form的组件
 *```html
        <ModalOpener
          content={ModalForm}
          title="ModalPage"
          custProps={{
            a: 1,
            b: 2,
          }}
        >
          <Button>Open Component</Button>
        </ModalOpener>
 *```
 *需要在ModalForm中, 通过ref={props.forwardedRef} 关联Form组件, 组件将自动校验form, 直接传递form值到回调onOk
 *如下,  
 *```html
      <Form ref={forwardedRef}>
        <FormLayout>
          <FormField
            label={"Test Label"}
            name={"test1"}
            initialValue={data.test}
            required
          >
            <Input />
          </FormField>
        </FormLayout>
      </Form>
 *```
 */

/**
 * 封装弹窗组件, 将Modal和具体业务Component分离, 简化开发工作
 *
 * 在props中可以直接使用其他modal的属性
 *
 * 需要在ModalForm中, 通过ref={props.forwardedRef} 关联Form组件, 组件将自动校验form, 直接传递form值到回调onOk
 *
 */
const OpenerComponent = React.forwardRef(ModalOpener);
OpenerComponent.propTypes = {
  /**
   * Modal中要展示的组件类
   */
  content: PropTypes.elementType,

  /**
   * 传递给content组件的Props
   */
  customProps: PropTypes.object,

  /**
   * 传递给content组件的Props.data
   */
  data: PropTypes.object,

  // modal相关

  /**
   * 弹窗标题,   PS:  其他modal属性,也可以直接使用
   */
  title: PropTypes.string,

  /**
   * 弹窗宽度
   */
  width: PropTypes.any,

  /**
   * 关闭时是否销毁组件
   */
  destroyOnClose: PropTypes.bool,

  /**
   * 	点击蒙层是否允许关闭,  如果关联form, 建议使用false
   */
  maskClosable: PropTypes.bool,
  // 事件

  /**
   *  取消事件,   (event)=>{}
   */
  onCancel: PropTypes.func,

  /**
   * 提交事件,   如果不关联form 为 (event)=>{},  关联form为  (data,modalCloseFun, {initData,form, e })
   */
  onOk: PropTypes.func,

  /**
   * 打开事件, 在打开窗口之前执行   ()=>{}
   */
  onOpen: PropTypes.func,
};

OpenerComponent.defaultProps = {
  title: "Modal",
  width: "780px",
  destroyOnClose: true,
};

export default OpenerComponent;
