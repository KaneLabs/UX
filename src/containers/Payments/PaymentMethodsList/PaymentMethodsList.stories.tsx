import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import PaymentMethodsList from './PaymentMethodsList';

import {
  ApolloProvider,
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

export default storiesOf('UX|Payments|PaymentMethodsList', module)
  .addDecorator(withKnobs)
  .addDecorator(withApolloClient)
  .addParameters({ jest: ['PaymentMethodsList'] })
  .add('PaymentMethodsList', () => <PaymentMethodsList />);
