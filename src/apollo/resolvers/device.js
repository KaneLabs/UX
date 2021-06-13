export default {
  resolvers: {
    Query: {
      Device: async (_, nextDevice, { cache }) => {
        const { data } = cache.readData({ query: 'DEVICE' });
        return data.Device;
      },
    },
    Mutation: {
      Device: async (_, nextDevice, { cache }) => {
        cache.writeData({ data: { ...nextDevice, __typename: 'Device' } });
      },
    },
  },
};
