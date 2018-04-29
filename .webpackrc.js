export default {
  entry: 'example/index.js',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
};

