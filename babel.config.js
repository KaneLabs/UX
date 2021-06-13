module.exports = {
  presets: [
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    'react-native-web',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'eros-ui': './src',
        },
      },
    ],
  ],
};
