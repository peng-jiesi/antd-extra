import React, { Fragment } from "react";
import { Button, Space, Descriptions } from "antd";
import { DescriptionsCollapse, PageTitle } from "../../index";

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default {
  title: "Layout/DescriptionsCollapse",
  component: DescriptionsCollapse,
};

export const Basic = () => {
  return (
    <DescriptionsCollapse>
      <Descriptions.Item label="Label1">Info1</Descriptions.Item>
      <Descriptions.Item label="Label2">Info2</Descriptions.Item>
      <Descriptions.Item label="Label3">Info3 </Descriptions.Item>
      <Descriptions.Item label="Label4">Info4</Descriptions.Item>
      <Descriptions.Item label="Label5">Info5 </Descriptions.Item>
      <Descriptions.Item label="Label6">Info6</Descriptions.Item>
      <Descriptions.Item label="Label7">Info7</Descriptions.Item>
      <Descriptions.Item label="Label8">Info8 </Descriptions.Item>
      <Descriptions.Item label="Label9">Info9</Descriptions.Item>
      <Descriptions.Item label="Label Long">
        Info Long Long Long Long Long Long Long Long Long Long Long Long Long
        Long Long Long
      </Descriptions.Item>
    </DescriptionsCollapse>
  );
};

export const CustomMin = () => {
  return (
    <DescriptionsCollapse min={3}>
      <Descriptions.Item label="Label1">Info1</Descriptions.Item>
      <Descriptions.Item label="Label2">Info2</Descriptions.Item>
      <Descriptions.Item label="Label3">Info3 </Descriptions.Item>
      <Descriptions.Item label="Label4">Info4</Descriptions.Item>
      <Descriptions.Item label="Label5" span={3}>
        Info5
      </Descriptions.Item>
      <Descriptions.Item label="Label Long">
        Info Long Long Long Long Long Long Long Long Long Long Long Long Long
        Long Long Long
      </Descriptions.Item>
    </DescriptionsCollapse>
  );
};

export const WithPageTitle = () => {
  const actions = (
    <Fragment>
      <Button>测试</Button> <Space /> <Button>测试2</Button>
    </Fragment>
  );

  return (
    <Fragment>
      <PageTitle actions={actions}>这是描述信息的标题</PageTitle>
      <DescriptionsCollapse min={3}>
        <Descriptions.Item label="Label1">Info1</Descriptions.Item>
        <Descriptions.Item label="Label2">Info2</Descriptions.Item>
        <Descriptions.Item label="Label3">Info3 </Descriptions.Item>
        <Descriptions.Item label="Label4">Info4</Descriptions.Item>
        <Descriptions.Item label="Label5" span={3}>
          Info5
        </Descriptions.Item>
        <Descriptions.Item label="Label Long">
          Info Long Long Long Long Long Long Long Long Long Long Long Long Long
          Long Long Long
        </Descriptions.Item>
      </DescriptionsCollapse>
    </Fragment>
  );
};
