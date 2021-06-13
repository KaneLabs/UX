import gql from 'graphql-tag';

export const SOCIAL_DRAWER = gql`
  query SocialDrawer {
    SocialDrawer @client {
      open
      lock
    }
  }
`;

export const CLOSE_SOCIAL_DRAWER = gql`
  mutation closeSocialDrawer {
    closeSocialDrawer @client {
      open
    }
  }
`;
export const OPEN_SOCIAL_DRAWER = gql`
  mutation openSocialDrawer {
    openSocialDrawer @client {
      open
    }
  }
`;
