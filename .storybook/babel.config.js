console.log('USING BABEL in .storybook');
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    'react-native-web',
    ['module-resolver',
            {
              root: ['../src'],
              alias: {
                'eros-ui': '../src',
                'eros-ui-storybook': '../storybook'
              },
            },
    ],
  ],
};
