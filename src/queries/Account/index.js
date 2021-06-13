import gql from 'graphql-tag';

export const HANDLE_IS_AVAILABLE = gql`
  query handleIsAvailable($handle: String!) {
    handleIsAvailable(handle: $handle)
  }
`;

export const UPDATE_ACCOUNT = gql`
  mutation updateAccount($input: UpdateAccountInput!) {
    UpdateAccount(input: $input) {
      id
      handle
      display
      avatarUrl
      bannerUrl
    }
  }
`;
export const ACCOUNT = gql`
  query account {
    account @client {
      token
      id
      handle
      display
      avatarUrl
      bannerUrl
    }
  }
`;
export const GET_ACCOUNT = gql`
  query account {
    account @client {
      token
      id
      handle
      display
      avatarUrl
      bannerUrl
    }
  }
`;
export const SET_ACCOUNT = gql`
  mutation setAccount(
    $token: token!
    $id: ID!
    $handle: handle
    $display: display
    $avatarUrl: avatarUrl
    $bannerUrl: bannerUrl
  ) {
    setAccount(
      token: $token
      id: $id
      handle: $handle
      display: $display
      avatarUrl: $avatarUrl
      bannerUrl: $bannerUrl
    ) @client {
      id
      handle
      display
      avatarUrl
      bannerUrl
      token
    }
  }
`;
export const GET_TOKEN = gql`
  query token {
    token @client
  }
`;
export const LOGOUT = gql`
  mutation logout {
    logout @client
  }
`;
