import { SOCIAL_DRAWER } from '@kanelabs/ux/queries';

const modals = {
  defaults: {
    SocialDrawer: {
      open: false,
      lock: false,
      __typename: 'SocialDrawer',
    },
  },
  // resolvers: {
  //   // Query: {
  //   //   SocialDrawer: (_, args, { cache }) => {
  //   //     const { SocialDrawer } = cache.readQuery({ query: SOCIAL_DRAWER });
  //   //     return SocialDrawer;
  //   //   },
  //   // },
  //   // Mutation: {
  //   //   openSocialDrawer: (_, args, { cache }) => {
  //   //     const next = {
  //   //       open: true,
  //   //       __typename: 'SocialDrawer',
  //   //     };
  //   //     cache.writeData({ data: { SocialDrawer: next } });
  //   //     return next;
  //   //   },
  //   //   closeSocialDrawer: (_, args, { cache }) => {
  //   //     const next = {
  //   //       open: false,
  //   //       __typename: 'SocialDrawer',
  //   //     };
  //   //     cache.writeData({ data: { SocialDrawer: next } });
  //   //     return next;
  //   //   },
  //   // },
  // },
};

export default modals;
