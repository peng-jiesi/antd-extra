import React from "react";
import { Button } from "antd";
import { PageTitle } from "../../index";

export default {
  title: "Layout/PageTitle",
  component: PageTitle,
};

export const Basic = () => <PageTitle>一个测试标题</PageTitle>;
export const WithActions = () => (
  <PageTitle
    actions={
      <Button
        onClick={() => {
          console.log("测试");
        }}
      >
        测试
      </Button>
    }
  >
    带动作的标题
  </PageTitle>
);

export const WithStatus = () => (
  <PageTitle status="停产中" statusColor="#ff4d4f">
    带状态的标题
  </PageTitle>
);
