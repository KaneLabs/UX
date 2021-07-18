console.log('USING BABEL in root');
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'eros-ui': './src',
          'eros-ui-storybook': './storybook',
        },
      },
    ],
  ],
};
