import React, { Fragment } from "react";
import { connect } from "dva";
import { Button, Input, Form } from "antd";
import { FormField, SearchForm } from "../../../lib";
@connect()
export default class SearchFormPage extends React.Component {
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

    // const [form] = Form.useForm();

    return (
      <div>
        <SearchForm
          min={2}
          onSearch={(data) => {
            console.log(data);
          }}
        >
          <FormField label={"Test Label"} name={"test"} required>
            <Input />
          </FormField>
        </SearchForm>

        <SearchForm
          cols={4}
          min={2}
          onSearch={(data) => {
            console.log(data);
          }}
        >
          {this.renderItem1()}
        </SearchForm>

        <SearchForm
          cols={4}
          min={2}
          actions={<Button>测试</Button>}
          onSearch={(data) => {
            console.log(data);
          }}
        >
          {this.renderItem1()}
        </SearchForm>
      </div>
    );
  }
}
