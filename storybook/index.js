import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import {
  getStorybookUI,
  configure,
  addDecorator,
  addParameters,
  makeDecorator,
} from '@storybook/react-native';
import { themes } from '@storybook/theming';
import withThemeProvider from './withThemeProvider';
import withApolloClient from './withApolloClient';
import { LOCAL_IP } from '../src/constants';
import './rn-addons.js';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

// import stories
configure(() => {
  require('./stories');
}, module);

addDecorator(
  // withTests({
  //   results,
  // }),
  withBackgrounds,
  withThemeProvider,
  withApolloClient,
);

addParameters({
  // options: {
  //   showPanel: true,
  //   panelPosition: 'bottom',
  //   isToolshown: true,
  //   name: 'KaneLabsUX',
  //   theme: themes.dark,
  // },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'light', value: '#eeeeee' },
  ],
  // viewport: {},
});

const darkTheme = {
  backgroundColor: 'black',
  headerTextColor: 'white',
  labelColor: 'white',
  borderColor: 'white',
  previewBorderColor: 'gray',
  buttonTextColor: 'white',
  buttonActiveTextColor: 'white',
};

console.log('Starting Storybook on local ip:  ', LOCAL_IP);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({
  // host: `http://${LOCAL_IP}:7007`, // this will be your local IP
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

export default StorybookUIHMRRoot;
