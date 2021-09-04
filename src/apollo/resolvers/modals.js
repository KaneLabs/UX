import {
  COMPOSE_MODAL,
  TIP_MODAL,
  DRAWER,
  AUTH_MODAL,
} from '@kanelabs/ux/queries';

const modals = {
  defaults: {
    ComposeModal: {
      open: false,
      __typename: 'ComposeModal',
    },
    TipModal: {
      open: false,
      __typename: 'TipModal',
    },
    AuthModal: {
      open: false,
      __typename: 'AuthModal',
    },
  },
  resolvers: {
    // Query: {
    //   // ComposeModal: (_, args, { cache }) => {
    //   //   const { ComposeModal } = cache.readQuery({ query: COMPOSE_MODAL });
    //   //   return ComposeModal;
    //   // },
    //   // TipModal: (_, args, { cache }) => {
    //   //   const { TipModal } = cache.readQuery({ query: TIP_MODAL });
    //   //   return TipModal;
    //   // },
    //   // AuthModal: (_, args, { cache }) => {
    //   //   const { AuthModal } = cache.readQuery({ query: AUTH_MODAL });
    //   //   return AuthModal;
    //   // },
    // },
    Mutation: {
      openTipModal: (_, args, { cache }) => {
        cache.writeData({
          data: {
            TipModal: { open: true, __typename: 'TipModal' },
          },
        });
        return { open: true, __typename: 'TipModal' };
      },
      closeTipModal: (_, args, { cache }) => {
        cache.writeData({
          data: {
            TipModal: { open: false, __typename: 'TipModal' },
          },
        });
        return { open: false, __typename: 'TipModal' };
      },
      toggleAuthModal: (_, args, { cache }) => {
        const { AuthModal } = cache.readQuery({ query: DRAWER });
        const next = { ...AuthModal, open: !AuthModal.open };
        cache.writeData({ data: { AuthModal: next } });
        return next;
      },
      toggleComposeModal: (_, args, { cache }) => {
        const { ComposeModal } = cache.readQuery({ query: COMPOSE_MODAL });

        cache.writeData({
          data: {
            ComposeModal: {
              open: !ComposeModal.open,
              __typename: 'ComposeModal',
            },
          },
        });

        return { open: !ComposeModal.open, __typename: 'ComposeModal' };
      },
      closeComposeModal: (_, args, { cache }) => {
        cache.writeData({
          data: {
            ComposeModal: { open: false, __typename: 'ComposeModal' },
          },
        });
        return { open: false, __typename: 'ComposeModal' };
      },
    },
  },
};

export default modals;
