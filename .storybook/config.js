import React from 'react';
import {
  addDecorator,
  configure,
  setAddon,
  addParameters,
} from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { withA11y } from '@storybook/addon-a11y';
// import results from '../.jest-test-results.json';
import ThemeProvider from 'eros-ui/theme/ThemeProvider';
import { themes } from '@storybook/theming';

// import '@storybook/addon-console';
// import '@storybook/addon-backgrounds';
// import '@storybook/addon-ondevice-knobs/register';
// import '@storybook/addon-ondevice-actions/register';

// Generate required css
const materialIconFont = require('react-native-vector-icons/Fonts/MaterialIcons.ttf');
const materialCommIconFont = require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf');
const iconFontStyles = `@font-face {
  src: url(${materialIconFont}); 
  font-family: MaterialIcons;
}
@font-face {
  src: url(${materialCommIconFont}); 
  font-family: MaterialCommunityIcons;
}`;

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    isToolshown: true,
    name: 'Eros',
    theme: themes.light,
  },
  // backgrounds: [
  //   { name: 'white', value: '#fff', default: true },
  //   { name: 'light', value: '#eeeeee' },
  // ],
  // viewport: {},
});

const withThemeProvider = (story) => <ThemeProvider>{story()}</ThemeProvider>;

addDecorator(
  withTests({
    // results,
  }),
  withA11y,
  withThemeProvider,
);

function loadStories() {
  require('../storybook/stories');
}

configure(loadStories, module);

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}
// Inject stylesheet
document.head.appendChild(style);
// window.STORYBOOK_GA_ID = 'UA-72995758-3';
