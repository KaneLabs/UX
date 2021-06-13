import gql from 'graphql-tag';

export const DEVICE = gql`
  query Device @client {
    Device @client {
      type
    }
  }
`;
