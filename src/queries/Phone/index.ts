import { gql } from '@apollo/client';

export const PHONE = gql`
  query phone {
    Phone @client {
      id
    }
  }
`;

export const SET_PHONE = gql`
  mutation setPhone($input: SetPhoneInput!) {
    SetPhone(input: $input) {
      id
    }
  }
`;

export const VERIFY_PHONE = gql`
  mutation verifyPhone($input: VerifyPhoneInput!) {
    VerifyPhone(input: $input) {
      id
      handle
      display
      avatarUrl
      bannerUrl
      token
    }
  }
`;
