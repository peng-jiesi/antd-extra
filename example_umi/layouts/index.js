import { getDvaApp } from "umi";

import styles from "./index.css";
// import { ModalView } from "../../lib";

function BasicLayout(props) {
  // ModalView.bindApp(getDvaApp());

  return <div className={styles.normal}>{props.children}</div>;
}

export default BasicLayout;
