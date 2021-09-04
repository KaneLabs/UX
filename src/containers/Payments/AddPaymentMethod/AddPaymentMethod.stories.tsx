import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import AddPaymentMethod from './AddPaymentMethod';

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

export default storiesOf('UX|Payments|AddPaymentMethod', module)
  .addDecorator(withKnobs)
  .addDecorator(withApolloClient)
  .addParameters({ jest: ['AddPaymentMethod'] })
  .add('AddPaymentMethod', () => <AddPaymentMethod />);
