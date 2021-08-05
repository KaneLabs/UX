import { gql } from '@apollo/client';

export const DRAWER = gql`
  query drawer {
    Drawer @client {
      open
      lock
    }
  }
`;
export const TOGGLE_DRAWER = gql`
  mutation toggleDrawer {
    toggleDrawer @client {
      open
    }
  }
`;
export const CLOSE_DRAWER = gql`
  mutation closeDrawer($right: Boolean) {
    closeDrawer(right: $right) @client {
      open
      openRight
    }
  }
`;
export const OPEN_DRAWER = gql`
  mutation openDrawer($right: Boolean) {
    openDrawer(right: $right) @client {
      open
      openRight
    }
  }
`;
