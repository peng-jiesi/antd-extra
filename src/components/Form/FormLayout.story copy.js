import React, { Fragment } from "react";
import { Button, Input, Form } from "antd";
import { FormLayout, FormField } from "../../index";

export default {
  title: "Form/FormLayout",
  component: FormLayout,
  subcomponents: { FormField },
};

export const Basic = () => {
  return (
    <Form
      onFinish={(data) => {
        console.log(data);
      }}
    >
      <FormLayout>
        <FormField label={"Test Label"} name={"test"} required>
          <Input />
        </FormField>
        <FormField label={"Test Label2"} name={"test2"} required>
          <Input />
        </FormField>
        <Button type="primary" htmlType="submit" style={{ float: "right" }}>
          Submit
        </Button>
      </FormLayout>
    </Form>
  );
};
