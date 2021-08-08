import { gql } from '@apollo/client';

export const TIMELINE = gql`
  query Timeline($handle: String, $offset: Int!, $limit: Int!) {
    Timeline(handle: $handle, offset: $offset, limit: $limit) {
      offset
      posts {
        id
        friendlyUrl
        title
        author {
          id
          display
          handle
          description
          avatarUrl
        }
        createdAt
      }
    }
  }
`;
// content {
//   type
//   text
//   uri
// }
// likes
// liked