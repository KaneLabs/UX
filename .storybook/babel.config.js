console.log('USING BABEL in .storybook');
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-web',
    [
      'module-resolver',
      {
        root: ['../src'],
        alias: {
          '@kanelabs/ux': '../src',
          '@kanelabs/ux-storybook': '../storybook',
        },
      },
    ],
  ],
};
