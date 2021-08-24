import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
// import { withDocs } from '@storybook/addon-docs';
import { Alert } from 'react-native';

import AuthPhoneVerify from './AuthPhoneVerify';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useApolloClient,
} from '@apollo/client';
import { storiesOf } from 'eros-ui-storybook/helpers/storiesOf';
import createApolloClient from 'eros-ui/apollo/createClient';

const withApolloClient = (story, context) => {
  return (
    <ApolloProvider client={createApolloClient({})}>
      {story(context)}
    </ApolloProvider>
  );
};

export default storiesOf('UX|Auth|AuthPhoneVerify', module)
  .addDecorator(withKnobs)
  .addDecorator(withApolloClient)
  .addParameters({ jest: ['AuthPhoneVerify'] })
  .add('AuthPhoneVerify', () => <AuthPhoneVerify onSuccess={() => Alert.alert('Success')} />);
