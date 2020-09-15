import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Descriptions, Divider } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

function CollapseToggle({ expanded = false, onClick }) {
  const label = expanded ? (
    <span>
      <CaretUpOutlined /> 收起
    </span>
  ) : (
    <span>
      <CaretDownOutlined /> 更多
    </span>
  );
  return (
    <Divider
      className="antd-x-description-collapse"
      onClick={() => {
        onClick(!expanded);
      }}
    >
      {label}
    </Divider>
  );
}

/**
 * 扩展信息展示组件Descriptions,   替代Descriptions使用,  增加缩放展示功能
 */
export default function DescriptionsCollapse({ children, min }) {
  const count = React.Children.count(children);
  const [expanded, setExpand] = React.useState(false);

  let showItems = children;

  if (count > min && !expanded) {
    showItems = children.slice(0, min);
  }

  return (
    <Fragment>
      <Descriptions bordered size="small">
        {showItems}
      </Descriptions>
      <CollapseToggle expanded={expanded} onClick={setExpand} />
    </Fragment>
  );
}

DescriptionsCollapse.propTypes = {
  /**
   * 最少展示的内容数量
   */
  min: PropTypes.number,

  /**
   * 一行展示几个
   */
  column: PropTypes.number,
};

DescriptionsCollapse.defaultProps = {
  min: 6,
  column: 3,
};
