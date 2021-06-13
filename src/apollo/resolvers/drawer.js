import { DRAWER } from 'eros-ui/queries';

const modals = {
  defaults: {
    Drawer: {
      open: false,
      lock: false,
      __typename: 'Drawer',
    },
  },
  // resolvers: {
  //   // Query: {
  //   //   Drawer: (_, args, { cache }) => {
  //   //     const { Drawer } = cache.readQuery({ query: DRAWER });
  //   //     return Drawer;
  //   //   },
  //   // },
  //   Mutation: {
  //     openDrawer: (_, { left = true, right = false }, { cache }) => {
  //       const { Drawer } = cache.readQuery({ query: DRAWER });
  //       console.log('openDrawer', Drawer)
  //       if (right) {
  //         const next = { open: Drawer.open, openRight: true, __typename: 'Drawer' };
  //         cache.writeQuery({ query: DRAWER, data: { Drawer: next } });
  //         return Drawer;
  //       } else if (left) {
  //         const next = { open: true, openRight: Drawer.openRight, __typename: 'Drawer' };
  //         cache.writeQuery({ query: DRAWER, data: { Drawer: next } });
  //         return Drawer;
  //       }
  //     },
  //     closeDrawer: (_, { left = true, right = false }, { cache }) => {
  //       const { Drawer } = cache.readQuery({ query: DRAWER });
  //       console.log('closeDrawer', Drawer)
  //       if (right) {
  //         const next = { open: Drawer.open, openRight: false, __typename: 'Drawer' };
  //         cache.writeQuery({ query: DRAWER, data: { Drawer: next } });
  //         return Drawer;
  //       } else if (left) {
  //         const next = { open: false, openRight: Drawer.openRight, __typename: 'Drawer' };
  //         cache.writeQuery({ query: DRAWER, data: { Drawer: next } });
  //         return Drawer;
  //       }
  //     },
  //   },
  // },
};

export default modals;
