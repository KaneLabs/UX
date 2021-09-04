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
          '@kanelabs/ux': './src',
          '@kanelabs/ux-storybook': './storybook',
        },
      },
    ],
  ],
};
