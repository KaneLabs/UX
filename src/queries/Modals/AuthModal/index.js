import gql from 'graphql-tag';

export const AUTH_MODAL = gql`
  query authModal {
    authModal @client {
      open
    }
  }
`;
export const TOGGLE_AUTH_MODAL = gql`
  mutation toggleAuthModal {
    toggleAuthModal @client {
      open
    }
  }
`;
export const CLOSE_AUTH_MODAL = gql`
  mutation closeAuthModal {
    closeAuthModal @client {
      open
    }
  }
`;
export const OPEN_AUTH_MODAL = gql`
  mutation openAuthModal {
    openAuthModal @client {
      open
    }
  }
`;
