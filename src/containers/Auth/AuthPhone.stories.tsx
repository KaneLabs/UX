import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
// import { withDocs } from '@storybook/addon-docs';

import AuthPhone from './AuthPhone';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useApolloClient,
} from '@apollo/client';
import { storiesOf } from '@kanelabs/ux-storybook/helpers/storiesOf';
import createApolloClient from '@kanelabs/ux/apollo/createClient';

const withApolloClient = (story, context) => {
  return (
    <ApolloProvider client={createApolloClient({})}>
      {story(context)}
    </ApolloProvider>
  );
};

export default storiesOf('UX|Auth|AuthPhone', module)
  .addDecorator(withKnobs)
  .addDecorator(withApolloClient)
  .addParameters({ jest: ['AuthPhone'] })
  .add('AuthPhone', () => <AuthPhone />);
