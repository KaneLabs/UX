const path = require('path');
const webpack = require('webpack');

// exclude: /node_modules\/(?!(@react-native-community\/art|next-package)\/).*/,
// react-native-neomorph-shadows
module.exports = ({ config, mode }) => {
  config.module = {
    ...config.module,
    rules: [
      {
        test: /\.(m|j)s$/,
        exclude: /node_modules\/(?!(@react-native-community\/art|react-native\/Libraries\/StyleSheet)\/).*/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  };

  config.resolve = {
    ...config.resolve,
    extensions: [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ],
    alias: {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
      'react-native-svg': 'react-native-svg-web',
      // '@react-native-community/art': 'react-art',
      '@storybook/react-native': '@storybook/react',
    },
  };
  return config;
};
