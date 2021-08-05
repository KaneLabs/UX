import { gql } from '@apollo/client';

export const DEVICE = gql`
  query Device @client {
    Device @client {
      type
    }
  }
`;
