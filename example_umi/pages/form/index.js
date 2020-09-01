import React, { Fragment } from "react";
import { connect } from "dva";
import { Button, Input, Form } from "antd";
import { FormField, FormLayout, SearchForm } from "../../../lib";
@connect()
export default class FormExt extends React.Component {
  onFinish(values) {
    console.log("Success:", values);
  }

  renderItem1() {
    const items = [];
    for (let i = 0; i < 10; i++) {
      const name = `Filed_A_${i}`;
      items.push(
        <FormField label={name} name={name} key={name}>
          <Input />
        </FormField>
      );
    }

    return items;
  }

  renderItem2() {
    const items = [];
    for (let i = 0; i < 5; i++) {
      const name = `Filed_B_${i}`;
      items.push(
        <FormField label={name} name={name} key={name} required>
          <Input />
        </FormField>
      );
    }
    return items;
  }
  render() {
    console.log("Form", this.props);
    const { form } = this.props;

    return (
      <div>
        <Form onFinish={this.onFinish.bind(this)}>
          <FormLayout form={form} cols={2}>
            {this.renderItem1()}
            <FormField label={"Test Labelx"} name={"testx"} required block>
              <Input />
            </FormField>
          </FormLayout>
        </Form>

        <Form onFinish={this.onFinish.bind(this)}>
          <FormLayout form={form} cols={3}>
            <FormField label={"Test Label"} name={"test"} required>
              <Input />
            </FormField>
            {this.renderItem2()}
          </FormLayout>
        </Form>

        <Form onFinish={this.onFinish.bind(this)}>
          <FormLayout form={form}>
            <FormField label={"Test Label"} name={"test"} required>
              <Input />
            </FormField>
            <FormField label={"Test Label2"} name={"test2"} required>
              <Input />
            </FormField>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormLayout>
        </Form>
      </div>
    );
  }
}
