import React, { Fragment } from "react";
import { Input, Form } from "antd";
import { FormField, SearchForm } from "../../index";

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default {
  title: "Form/SearchForm",
  component: SearchForm,
};

export const Basic = () => {
  const renderItem = (length) => {
    const items = [];
    for (let i = 0; i < length; i++) {
      const name = `Filed_A_${i}`;
      items.push(
        <FormField label={name} name={name} key={name}>
          <Input />
        </FormField>
      );
    }

    return items;
  };

  return (
    <SearchForm
      onSearch={(data) => {
        console.log(data);
      }}
    >
      {renderItem(6)}
    </SearchForm>
  );
};

export const WithMin = () => {
  const renderItem = (length) => {
    const items = [];
    for (let i = 0; i < length; i++) {
      const name = `Filed_A_${i}`;
      items.push(
        <FormField label={name} name={name} key={name}>
          <Input />
        </FormField>
      );
    }

    return items;
  };

  return (
    <SearchForm
      min={2}
      onSearch={(data) => {
        console.log(data);
      }}
    >
      {renderItem(7)}
    </SearchForm>
  );
};
