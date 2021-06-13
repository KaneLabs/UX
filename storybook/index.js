import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import {
  getStorybookUI,
  configure,
  addDecorator,
  addParameters,
} from '@storybook/react-native';
import { name as appName } from '../app.json';
import ThemeProvider from 'eros-ui/theme/ThemeProvider';
import { themes } from '@storybook/theming';
import './rn-addons.js';

// import stories
configure(() => {
  require('./stories');
}, module);

const withThemeProvider = (story) => {
  console.log('IS THIS THING ON??');
  return <ThemeProvider>{story()}</ThemeProvider>;
};

addDecorator(
  // withTests({
  //   results,
  // }),
  withThemeProvider,
);

// addParameters({
//   options: {
//     showPanel: true,
//     panelPosition: 'bottom',
//     isToolshown: true,
//     name: 'Eros',
//     theme: themes.dark,
//   },
//   // backgrounds: [
//   //   { name: 'white', value: '#fff', default: true },
//   //   { name: 'light', value: '#eeeeee' },
//   // ],
//   // viewport: {},
// });

const darkTheme = {
  backgroundColor: 'black',
  headerTextColor: 'white',
  labelColor: 'white',
  borderColor: 'white',
  previewBorderColor: 'gray',
  buttonTextColor: 'white',
  buttonActiveTextColor: 'white',
};

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({
  host: 'http://192.168.0.3:7007', // this will be your local IP
  // port: 7007,
  onDeviceUI: true,
  asyncStorage: AsyncStorage,
  theme: themes.light,
});

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

AppRegistry.registerComponent(appName, () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
