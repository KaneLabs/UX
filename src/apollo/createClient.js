// import ws from 'ws';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { from, split } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';
import { getMainDefinition } from 'apollo-utilities';
import { onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client'; // replace HttpLink to allow FileUploads
// import gql from 'graphql-tag';
import { GET_TOKEN } from 'eros-ui/queries';
import { AsyncStorage } from 'react-native';
import resolvers from './resolvers';
import { API_URI, WS_API_URI } from '../constants';

const createErrorLink = () => {
  const errorLink = onError(({
    graphQLErrors, networkError, response, operation, forward,
  }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }) => {
        console.log(message);
      });
    }

    // console.log('response', response);
  });
  return errorLink;
};

const createHttpLink = ({ ssrMode = false }) => {
  const options = {
    ssrMode,
    uri: 'http://172.19.131.127:5000/graphql',
    credentials: 'include', // eg. or credentials: 'omit', etc
    // fetch,
  };
  return createUploadLink(options);
  // const httpLink = new HttpLink();
  //
  // return httpLink;
};

const createWSLink = ({ ssrMode = false }) => new WebSocketLink({
  ssrMode,
  // webSocketImpl: ssrMode ? ws : undefined,
  uri: 'ws://172.19.131.127:5000/graphql',
  options: {
    lazy: true,
    reconnect: true,
    connectionParams: async () => {
      // failsafe for ssr
      try {
        const token = await AsyncStorage.getItem('token');

        return {
          headers: {
            Authorization: token || '',
          },
        };
      } catch (e) {
        console.log('wsLink error', e);
        return {
          headers: {
            Authorization: '',
          },
        };
      }
    },
  },
});

const createNetworkLink = ({ ssrMode = false }) => {
  if (ssrMode) {
    return createHttpLink({ ssrMode });
  }

  try {
    // Create a WebSocket link:
    const wsLink = createWSLink({ ssrMode });
    const httpLink = createHttpLink({ ssrMode });

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    const link = split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink,
      httpLink,
    );

    return link;
  } catch (e) {
    console.log('createNetworkLink error', e);
    throw 'Could not create network link';
  }
};

// async auth header attaches token on all requests except when rendering on server
const createAuthHeader = ({ ssrMode = false }) => {
  const authHeader = setContext(async (_, { headers, cache }) => {
    const { token } = cache.readQuery({ query: GET_TOKEN });
    console.log('token in cache', token);
    if (token) {
      return {
        headers: {
          ...headers,
          Authorization: token,
        },
      };
    }

    return { headers };
  });

  return authHeader;
};

const createCache = ({
  initialState = {},
  ssrMode = false,
  account = null,
  deviceType = 'mobile',
}) => {
  const cache = new InMemoryCache().restore(initialState);
  return cache;
};

const errorLink = createErrorLink();

export const createClient = ({
  initialState = {},
  ssrMode = false,
  account = null,
  deviceType = 'mobile',
}) => {
  try {
    const cache = createCache({
      initialState, ssrMode, account, deviceType,
    });
    const localStateLink = withClientState({ cache, ...resolvers });

    if (account) {
      cache.writeData({
        data: {
          account,
          token: account.token,
          Nav: { docked: true, __typename: 'Nav' },
          Drawer: { open: false, openRight: false, __typename: 'Drawer' },
        },
      });
    } else {
      cache.writeData({
        data: {
          account: null,
          token: null,
          Nav: { docked: true, __typename: 'Nav' },
          Drawer: { open: false, openRight: false, __typename: 'Drawer' },
        },
      });
    }

    const authHeader = createAuthHeader({ ssrMode });
    const networkLink = createNetworkLink({ ssrMode });
    const link = from([errorLink, localStateLink, authHeader, networkLink]);

    const client = new ApolloClient({
      ssrMode,
      cache,
      link,
      resolvers,
    });

    const unsubscribe = client.onResetStore(localStateLink.writeDefaults);

    console.log('client', client);

    return client;
  } catch (e) {
    console.log('createApolloClient error', e);

    throw new Error('Could not connect');
  }
};

export default createClient;
