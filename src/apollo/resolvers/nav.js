import { NAV } from 'eros-ui/queries';

export default {
  defaults: {
    Nav: {
      docked: true,
      __typename: 'Nav',
    },
  },
  resolvers: {
    Query: {
      Nav: async (_, phone, { cache }) => {
        const { Nav } = cache.readData({ query: NAV });
        return Nav;
      },
    },
    Mutation: {
      setNavDocked: async (_, { docked }, { cache }) => {
        const nextNav = { docked, __typename: 'Nav' };
        cache.writeData({ data: { Nav: nextNav } });
        return nextNav;
      },
    },
  },
};
