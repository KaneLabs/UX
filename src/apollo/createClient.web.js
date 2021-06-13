// import ws from 'ws';

import { split, ApolloLink, from } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';

import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';
import { getMainDefinition } from 'apollo-utilities';
import { onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client'; // replace HttpLink to allow FileUploads
// import gql from 'graphql-tag';
import { ME, TOKEN, GET_TOKEN } from 'eros-ui/queries';
import { AsyncStorage } from 'react-native';
import { parseCookie } from 'eros-ui/fns';
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
    uri: `${API_URI}`,
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
  uri: `${WS_API_URI}`,
  options: {
    lazy: true,
    reconnect: true,
    connectionParams: async () => {
      // failsafe for ssr
      try {
        const token = await AsyncStorage.getItem('token');

        return {
          headers: {
            Authorization: token || null,
          },
        };
      } catch (e) {
        console.log('wsLink error', e);
        return {
          headers: {
            Authorization: null,
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
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const context = operation.getContext();
    console.log('Me context in createAuthHeader', context);

    const apolloToken = context?.cache?.data?.data?.['Me:0']?.token || null;
    const cookieToken = (() => {
      try {
        const cookies = parseCookie(document.cookie);

        console.log('cookies', cookies);
        return cookies?.token ?? null;
      } catch (error) {
        console.error('authMiddleware error');
        return null;
      }
    })();
    console.log('apolloToken', apolloToken);

    // console.log('windowToken', windowToken)

    // const query = cache.readQuery({ query: ME, networkPolicy: 'cache' });
    operation.setContext(({ headers }) => ({
      headers: {
        Authorization: apolloToken || cookieToken || null, // however you get your token
        ...headers,
      },
    }));

    return forward(operation);
  });

  // const authHeader = setContext(async (_, { headers, cache }) => {
  //   const { data } = cache.readQuery({ query: GET_TOKEN, networkPolicy: 'cache' });
  //   console.log('GET_TOKEN data in cache', data);
  //   if (token) {
  //     return {
  //       headers: {
  //         ...headers,
  //         Authorization: token,
  //       },
  //     };
  //   }
  // });

  return authMiddleware;
};

const createCache = ({
  initialState = {},
  ssrMode = false,
  account = null,
}) => {
  const cache = new InMemoryCache();
  if (!ssrMode) {
    cache.restore(initialState);
    return cache;
  }

  // very important adds users account into state before filling data
  // you can not set defaults in resolvers for any of this data or the client side will override it
  // if (account) {
  //   console.log('account in createCache', account)
  //   cache.writeQuery({
  //     query: ME,
  //     data: {
  //       me: {
  //         ...account,
  //       }
  //     },
  //   });
  // } else {
  //   cache.writeQuery({
  //     query: ME,
  //     data: {
  //       me: {
  //         token: null,
  //       }
  //     },
  //   });
  // }
  return cache;
};

const errorLink = createErrorLink();

export const createClient = ({
  initialState = {},
  ssrMode = false,
  account = null,
  deviceType = 'mobile',
  token = null,
}) => {
  try {
    const cache = createCache({
      initialState, ssrMode, account, deviceType,
    });
    const localStateLink = withClientState({ cache, ...resolvers });
    const authHeader = createAuthHeader({ ssrMode });
    const networkLink = createNetworkLink({ ssrMode });
    const link = from([errorLink, localStateLink, authHeader, networkLink]);

    const client = new ApolloClient({
      ssrMode,
      cache,
      link,
      resolvers,
    });

    console.log('account, token', account, token);

    if (ssrMode && account) {
      // console.log('account in createClient', account);
      // client.writeQuery({
      //   query: ME,
      //   variables: {},
      //   data: {
      //     Me: {
      //       ...account,
      //     }
      //   },
      //   context: { saveOffline: true }
      // });

      // const query = client.readQuery({ query: ME });
      // console.log('client.readQuery({ query: ME })', query)
    } else if (ssrMode) {
      console.log('ssrMode without account', account);
      // const meQueryWithVariable = client.query({ query: ME });
      // console.log('meQueryWithVariable', meQueryWithVariable);
      client.writeQuery({
        query: ME,
        // variables: {},
        data: {
          Me: null,
        },
      });
      // const query = client.readQuery({ query: ME });
      // console.log('client.readQuery({ query: ME })', query);
      // const tokenQuery = client.readQuery({ query: TOKEN, fetchPolicy: 'cache' });
      // console.log('client.readQuery({ query: TOKEN })', tokenQuery);
    }
    // else {
    //   const query = client.readQuery({ query: ME });
    //   console.log('client.readQuery({ query: ME })', query);
    //   const tokenQuery = client.readQuery({ query: TOKEN, fetchPolicy: 'cache' });
    //   console.log('client.readQuery({ query: TOKEN })', tokenQuery);
    // }

    const unsubscribe = client.onResetStore(localStateLink.writeDefaults);

    return client;
  } catch (e) {
    console.log('createApolloClient error', e);

    throw new Error('Could not connect');
  }
};

export default createClient;
