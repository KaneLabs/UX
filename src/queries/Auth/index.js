import gql from 'graphql-tag';

export const ME = gql`
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
  mutation AuthPhoneOrEmail ($phoneOrEmail: String!) {
    AuthPhoneOrEmail (phoneOrEmail: $phoneOrEmail)
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
