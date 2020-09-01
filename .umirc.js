const path = require("path");
const publicPaths = {
  daily: "http://10.45.29.3:9500/test-umi/daily/", //此处需要更改为实际项目名
  test: "/cdn/test-umi/",
  demo: "/cdn/test-umi/",
  local: "http://localhost:8000/",
};
const publicPath = publicPaths[process.env.PATH_MODE];
const IS_PROD = ["production", "prod", "test"].includes(process.env.NODE_ENV);

// ref: https://umijs.org/config/
export default {
  plugins: ["umi-plugin-dva"],
  dva: { skipModelValidate: true },
  routes: [
    {
      path: "/",
      component: "../layouts/index",
      routes: [{ path: "/main", component: "../pages/main/index" }],
    },
  ],
  history: { type: "hash" },
  extraBabelPlugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
    IS_PROD ? "transform-remove-console" : "",
  ],
  define: {
    PATH_MODE: process.env.PATH_MODE,
  },
  publicPath,
};
