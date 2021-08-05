import { gql } from '@apollo/client';

export const AUTH_PHONE = gql`
  mutation AuthPhone($input: AuthPhoneInput!) {
    AuthPhone(input: $input)
  }
`;

export const AUTH_PHONE_VERIFY = gql`
  mutation AuthPhoneVerify($input: AuthPhoneVerifyInput!) {
    AuthPhoneVerify(input: $input) {
      token
    }
  }
`;

export const ME = gql`
  {
    Me {
      id
      phone
    }
  }
`;

export const ME_FORA = gql`
  query Me {
    Me {
      token
      handle
      display
      avatarUrl
      bannerUrl
    }
  }
`;

export const TOKEN = gql`
  query Token {
    Me @client {
      token @client
    }
  }
`;

export const AUTH_PHONE_OR_EMAIL = gql`
  mutation AuthPhoneOrEmail($phoneOrEmail: String!) {
    AuthPhoneOrEmail(phoneOrEmail: $phoneOrEmail)
  }
`;

export const AUTH_SIGNUP = gql`
  mutation AuthSignup($input: AuthSignupInput!) {
    AuthSignup(input: $input)
  }
`;

export const AUTH_VERIFY_PHONE = gql`
  mutation AuthVerifyPhone($input: AuthVerifyPhoneInput!) {
    AuthVerifyPhone(input: $input) {
      token
    }
  }
`;
