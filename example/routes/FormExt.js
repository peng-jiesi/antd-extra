import React, {Fragment} from 'react';
import {connect} from 'dva';
import {Form, Input} from 'antd';
import {FormField, FormLayout, SearchForm} from "../../src";

@Form.create()
@connect()
export default class FormExt extends React.Component {

  renderItem1() {
    const items = [];
    for (let i = 0; i < 10; i++) {
      const name = `Filed_A_${i}`;
      items.push(
        <FormField
          label={name}
          name={name}
          key={name}
        >
          <Input/>
        </FormField>,
      );
    }

    return items;
  }

  renderItem2() {
    const items = [];
    for (let i = 0; i < 5; i++) {
      const name = `Filed_B_${i}`;
      items.push(
        <FormField
          label={name}
          name={name}
          key={name}
          required
        >
          <Input/>
        </FormField>,
      );
    }
    return items;
  }

  render() {
    const { form } = this.props;

    return (
      <div>
        <SearchForm min={3} form={form} onSearch={(data) => {console.log(data);}}>
          {this.renderItem1()}
        </SearchForm>

        <Form>
          <FormLayout form={form} cols={2} compact>
            {this.renderItem2()}
          </FormLayout>
        </Form>

        <Form>
          <FormLayout form={form} cols={3}>
            <FormField
              label={"Test Label"}
              name={"test"}
              required
            >
              <Input/>
            </FormField>
            {this.renderItem2()}
          </FormLayout>
        </Form>

        <Form>
          <FormLayout form={form}>
            <FormField
              label={"Test Label"}
              name={"test"}
              required
            >
              <Input/>
            </FormField>
            <FormField
              label={"Test Label2"}
              name={"test2"}
              required
            >
              <Input/>
            </FormField>
          </FormLayout>
        </Form>

        <Form>
          <FormLayout form={form} compact={true} cols={4}>
            <Fragment>
              <FormField
                label={"Test Label1111111111111"}
                name={"test"}
                required
              >
                <Input/>
              </FormField>
              <FormField
                label={"Test Label21111111111111"}
                name={"test2"}
                required
              >
                <Input/>
              </FormField>

            </Fragment>
          </FormLayout>
        </Form>
      </div>
    )
  }
}
