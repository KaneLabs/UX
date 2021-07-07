const path = require('path');
const webpack = require('webpack');
// const babelConfig = require('./babel.config');

// exclude: /node_modules\/(?!(@react-native-community\/art|next-package)\/).*/,
// react-native-neomorph-shadows
module.exports = ({ config, mode }) => {
  console.log(config.module.rules);
  config.module = {
    ...config.module,
    rules: [
      {
        test: /\.(tsx?|mjs|jsx?)$/,
        exclude: /node_modules\/(?!(@react-native-community\/art)\/).*/,
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

  console.log({ resolve: config.resolve });

  config.resolve = {
    ...config.resolve,
    extensions: [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.ts',
      '.tsx',
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
