import { gql } from '@apollo/client';

export const TIMELINE = gql`
  query timeline($handle: String, $offset: Int!, $limit: Int!) {
    Timeline(handle: $handle, offset: $offset, limit: $limit) {
      offset
      posts {
        id
        friendlyUrl
        title
        content {
          type
          text
          uri
        }
        persona {
          display
          handle
          avatarUrl
        }
        likes
        liked
        createdAt
      }
    }
  }
`;
