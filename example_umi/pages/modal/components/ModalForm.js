import React, { Fragment } from "react";
import { connect } from "dva";
import { Button, Form, Input } from "antd";

import { FormField, FormLayout, SearchForm } from "../../../../lib";

export default class ModalForm extends React.Component {
  render() {
    console.log("Form", this.props);
    const { data = {}, forwardedRef } = this.props;
    return (
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
          <FormField
            label={"Test Label"}
            name={"test2"}
            initialValue={data.test2}
            required
          >
            <Input />
          </FormField>
        </FormLayout>
      </Form>
    );
  }
}
