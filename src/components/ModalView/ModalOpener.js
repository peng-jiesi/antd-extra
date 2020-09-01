import React, { Fragment } from "react";
import { Button, Modal, Empty, Form, Input } from "antd";
import _pick from "lodash/pick";
import _isFunction from "lodash/isFunction";

import "antd/lib/modal/style/css";

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
    title = "Modal",
    width = "600px",
    destroyOnClose = true,

    // 事件
    onCancel,
    onOk,
    onOpen,
  } = props;

  const contentProps = {
    ...customProps,
    data,
  };

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

  // cancelText	取消按钮文字	string | ReactNode	取消
  // okText	确认按钮文字	string | ReactNode	确定

  const ContentComponent = props.content;
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

export default React.forwardRef(ModalOpener);
