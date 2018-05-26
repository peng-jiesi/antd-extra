export default {
  entry: 'example/index.js',
  disableCSSModules:true,
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
};

