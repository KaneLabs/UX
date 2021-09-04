import { AsyncStorage, Platform } from 'react-native';
import { ACCOUNT, SET_ACCOUNT, DRAWER } from '@kanelabs/ux/queries';
import { saveToken, removeToken } from '@kanelabs/ux/fns';

export default {
  //  OVERRIDES DATA PASSED FROM SSR
  // defaults: {
  //   Me: null,
  // },
  resolvers: {
    Mutation: {
      setAccount: async (_, { token, ...account }, { cache }) => {
        await saveToken(token);
        const accountData = { ...account, token, __typename: 'Account' };
        const Drawer = { open: true, __typename: 'Drawer' };
        cache.writeData({ data: { token, account: accountData, Drawer } });
        return accountData;
      },
      logout: async (_, args, { cache, ...rest }) => {
        await removeToken();
        const Drawer = { open: false, __typename: 'Drawer' };
        cache.writeData({ data: { token: null, account: null, Drawer } });
        return null;
      },
    },
  },
};
//
// const accountDefault = {
//   id: 0,
//   handle: null,
//   display: null,
//   token: null,
//   avatarUrl: null,
//   __typename: 'Account'
// }
//
// const removeNullsImmutable = obj => {
//   return Object.entries(obj).reduce((acc, [key, value]) => {
//     if (value === null || value === undefined) {
//       return acc;
//     }
//
//     return { ...acc, [key]: value }
//   }, {})
// }
