import React, { Fragment } from "react";
import { Button, Form, Input } from "antd";
import { ModalOpener, PageTitle, FormField, FormLayout } from "../../index";

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default {
  title: "Modal/ModalOpener",
  component: ModalOpener,
};

export const Basic = () => {
  function ModalPage(props) {
    console.log("props", props);
    return (
      <Fragment>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </Fragment>
    );
  }

  return (
    <ModalOpener content={ModalPage} title="ModalPage">
      <Button>Open Component</Button>
    </ModalOpener>
  );
};

/**
 *测试内容
 */
export const OpenFormPage = () => {
  function ModalFormPage(props) {
    console.log("Form", props);
    const { data = {}, forwardedRef } = props;

    return (
      <Form ref={forwardedRef}>
        <FormLayout cols={2}>
          <FormField
            label={"Test Label"}
            name={"test1"}
            initialValue={data.test}
            required
          >
            <Input />
          </FormField>
          <FormField
            label={"Test Label"}
            name={"test1"}
            initialValue={data.test}
            required
          >
            <Input />
          </FormField>
          <FormField
            label={"Test Label"}
            name={"test2"}
            initialValue={data.test2}
            required
          >
            <Input />
          </FormField>
          <FormField
            label={"Test Label"}
            name={"test2"}
            initialValue={data.test2}
            required
            block
          >
            <Input />
          </FormField>
        </FormLayout>
      </Form>
    );
  }

  return (
    <ModalOpener
      content={ModalFormPage}
      title="Modal with form"
      data={{ test: "test1", test2: "test2" }}
      maskClosable={false}
      onOk={async (data, onClose, { initData, form }) => {
        console.log(data);
        await delay(1000);
        onClose();
      }}
    >
      <Button>Open Form Component</Button>
    </ModalOpener>
  );
};

export const OpenWithAction = () => {
  function ModalPage(props) {
    console.log("props", props);
    return (
      <Fragment>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </Fragment>
    );
  }

  return (
    <ModalOpener
      content={ModalPage}
      title="Page with action"
      data={{ test: "test1", test2: "test2" }}
      onOk={async (e, onClose) => {
        await delay(1000);
        onClose();
        await delay(1000);
        console.log("on ok noForm");
      }}
    >
      <Button>open with action</Button>
    </ModalOpener>
  );
};

export const UseRef = () => {
  const ref = React.createRef();

  const ModalPage = (props) => {
    console.log("props", props);
    return (
      <Fragment>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </Fragment>
    );
  };

  return (
    <>
      <ModalOpener
        content={ModalPage}
        title="Page with action"
        data={{ test: "test1", test2: "test2" }}
        ref={ref}
        onOk={async (e, onClose) => {
          await delay(1000);
          onClose();
          await delay(1000);
          console.log("on ok noForm");
        }}
      >
        <Button>打开弹窗</Button>
      </ModalOpener>
      <Button
        onClick={() => {
          console.log(ref);
        }}
      >
        Log Ref
      </Button>
    </>
  );
};

export const CloseInComponent = () => {
  const ModalPage = (props) => {
    console.log("props", props);
    return (
      <Fragment>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <Button
          block
          onClick={() => {
            props.modalRef.close();
          }}
        >
          关闭弹窗
        </Button>
      </Fragment>
    );
  };

  return (
    <>
      <ModalOpener
        content={ModalPage}
        title="Page"
        data={{ test: "test1", test2: "test2" }}
      >
        <Button>打开弹窗</Button>
      </ModalOpener>
    </>
  );
};
