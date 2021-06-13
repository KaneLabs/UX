const path = require('path');
console.log('HELLO');
module.exports = {
  entry: {
    index: './src/index.js',
    'animations': './src/animations',
    'apollo': './src/apollo',
    // 'assets': './src/assets',
    'components': './src/components',
    'constants': './src/constants',
    'containers': './src/containers',
    'fns': './src/fns',
    'layouts': './src/layouts',
    // 'pages': './src/pages',
    'queries': './src/queries',
    'state': './src/state',
    'theme': './src/theme',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'eros-ui',
    libraryTarget: 'commonjs',
    globalObject: 'this',
  },

  devtool: 'source-map', // add source mapping
  // devtool: 'eval-cheap-module-source-map', // faster but less robust source mapping

  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-native': 'react-native',
    'react-native-web': 'react-native-web',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[folder]/[name].[ext]',
              publicPath: '/assets',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    alias: {
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
      ui: path.resolve(__dirname, './src'),
      'eros-ui': path.resolve(__dirname, './src'),
    },
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
