import React from "react";
import PropTypes from "prop-types";

import { Tag } from "antd";

/**
 * 标准页头格式,  用于分隔不同信息段
 */
export default class PageTitle extends React.Component {
  renderActions() {
    const { actions, actionMax } = this.props;

    return <div className="actions">{actions}</div>;
  }

  renderStatus() {
    const { status, statusColor } = this.props;

    if (!status) {
      return null;
    } else {
      return (
        <Tag color={statusColor} className="status">
          {status}
        </Tag>
      );
    }
  }

  render() {
    const { children, color, actions, size } = this.props;
    return (
      <h2
        className={`antd-x-page-title ${size}`}
        style={{ borderLeftColor: color }}
      >
        {children}
        {this.renderStatus()}
        {this.renderActions()}
      </h2>
    );
  }
}

PageTitle.defaultProps = {
  actionMax: 3,
  color: "#1890ff",
  statusColor: "#87d068",
};

PageTitle.propTypes = {
  /**
   * 竖条颜色
   */
  color: PropTypes.string,
  /**
   * 操作区域
   */
  actions: PropTypes.any,

  /**
   * 默认页头数量
   */
  actionMax: PropTypes.number,

  /**
   * 尺寸  可用 small
   */
  size: PropTypes.string,

  /**
   * 标题后面的状态信息
   */
  status: PropTypes.string,

  /**
   * 如果有状态信息, 状态标签的颜色,  推荐颜色: 红色#ff4d4f, 橙色#fa8c16, 绿色#52c41a, 蓝色#1890ff
   * 其他颜色可以从https://ant.design/docs/spec/colors-cn中寻找, 建议用-6色板
   */
  statusColor: PropTypes.string,
};
