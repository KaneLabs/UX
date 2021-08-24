import React from 'react';
import {
  addDecorator,
  configure,
  setAddon,
  addParameters,
} from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { backgroundColor as lightBackground } from 'eros-ui/theme/light';
import { backgroundColor as darkBackground } from 'eros-ui/theme/dark';
// import createApolloClient from 'eros-ui/apollo/createClient';
// import { ApolloClient } from 'apollo-client';
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { themes } from '@storybook/theming';
import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';
import withThemeProvider from './withThemeProvider';
// import { MockedProvider } from '@apollo/client/testing';

import './addons';
import results from '../coverage/coverage-final.json';

// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// import { useDarkMode } from 'storybook-dark-mode';
// import { addDecorator } from '@storybook/react';

// get channel to listen to event emitter
const channel = addons.getChannel();

const darkTheme = create({
  base: 'dark',
  brandTitle: 'fora',
});

const lightTheme = create({
  base: 'light',
  brandTitle: 'fora',
});

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
  },
  backgrounds: [
    { name: 'light', value: lightBackground, default: true },
    { name: 'dark', value: darkBackground },
  ],
  viewport: {},
  // apolloClient: {
  //   MockedProvider,
  //   // any props you want to pass to MockedProvider on every story
  // },
});



addDecorator(
  withTests({
    results,
  }),
  withKnobs,
  // withA11y,
);
addDecorator(withThemeProvider);



// const withApolloClient = (Component) => {
//   const client = new ApolloClient({
//     uri: 'http://localhost:4000/graphql',
//     cache: new InMemoryCache()
//   });
//   return (
//     <ApolloProvider client={client}>
//       {Component}
//     </ApolloProvider>
//   )
// };

// addDecorator(withApolloClient({ cache: createApolloClient({} )}))

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
