import React, {Fragment} from 'react';
import {connect} from 'dva';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Input } from 'antd';
import {FormField, FormLayout, SearchForm} from "../../src";

@Form.create()
export default class FormExt extends React.Component {
  render() {
    const { form, data = {} } = this.props;

    return (
      <Form>
        <FormLayout form={form}>
          <FormField
            label={"Test Label"}
            name={"test"}
            initialValue={data.test}
            required
          >
            <Input/>
          </FormField>
          <FormField
            label={"Test Label"}
            name={"test"}
            initialValue={data.test}
            required
          >
            <Input/>
          </FormField>
          <FormField
            label={"Test Label"}
            name={"test"}
            initialValue={data.test}
            required
          >
            <Input/>
          </FormField>
          <FormField
            label={"Test Label"}
            name={"test"}
            initialValue={data.test}
            required
          >
            <Input/>
          </FormField>
          <FormField
            label={"Test Label"}
            name={"test"}
            initialValue={data.test}
            required
          >
            <Input/>
          </FormField>
          <FormField
            label={"Test Label"}
            name={"test"}
            initialValue={data.test}
            required
          >
            <Input/>
          </FormField>
          <FormField
            label={"Test Label"}
            name={"test"}
            initialValue={data.test}
            required
          >
            <Input/>
          </FormField>
          <FormField
            label={"Test Label"}
            name={"test"}
            initialValue={data.test}
            required
          >
            <Input/>
          </FormField>

          <FormField
            label={"Test Label2"}
            name={"test2"}
            initialValue={data.test2}
            required
          >
            <Input/>
          </FormField>
        </FormLayout>
      </Form>
    )
  }
}

