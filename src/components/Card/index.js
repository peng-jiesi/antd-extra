import React from "react";
import { Icon } from "antd";
import styles from "./index.less";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_858347_wxjl16j413e.js",
});

class CustomCard extends React.Component {
  render() {
    const {
      logo,
      bgStyle,
      title = "测试",
      userName = "— 空置 —",
      dateTime = "-",
      dateColor,
      stateColor,
      superScript,
      superScriptColor = { display: "none" },
      stateIcon,
      text,
      actions = [],
    } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.customCard1}>
          <div className={styles.customLogo} style={bgStyle}>
            <IconFont className={styles.icon} type={logo} style={bgStyle} />
          </div>

          <div className={styles.desc}>
            <div className={styles.superScript}>
              <p>
                <span style={superScriptColor} />
                <em>{superScript}</em>
              </p>
            </div>
            <div className={styles.title}>{title}</div>
            <div>{userName}</div>
            <div>
              租期：<span style={dateColor}>{dateTime}</span>
            </div>
            <div>
              <Icon style={stateColor} type={stateIcon} theme="filled" />
              <span className={styles.state}>{text}</span>
            </div>
          </div>
        </div>
        <ul className={styles.antCardActions}>
          {actions.map((item) => {
            return item;
          })}
        </ul>
      </div>
    );
  }
}

export default CustomCard;
