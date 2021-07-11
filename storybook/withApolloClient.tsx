import { makeDecorator } from '@storybook/addons';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../src/apollo/createClient';

const withThemeProvider = makeDecorator({
  name: 'withApolloClient',
  parameterName: 'options',
  wrapper: (storyFn, context, { parameters }) => {
    // Do something with `parameters`, which are set via { something: ... }

    // Note you may alter the story output if you like.
    // Although generally that's not advised.
    return (
      <ApolloProvider client={createApolloClient({})}>
        {storyFn(context)}
      </ApolloProvider>
    );
  },
});

export default withThemeProvider;
