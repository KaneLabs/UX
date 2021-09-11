import { gql } from '@apollo/client';

export const STRIPE_CARDS = gql`
  {
    StripeCards {
      id
      brand
      expMonth
      expYear
      funding
      last4
      default
    }
  }
`;

export const CREATE_STRIPE_CARD_TOKEN = gql`
        mutation CreateStripeCardToken($input: CreateStripeCardTokenInput!) {
            CreateStripeCardToken(input: $input)
        }
`;