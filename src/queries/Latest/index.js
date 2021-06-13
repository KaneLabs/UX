import gql from 'graphql-tag';

export const LATEST = gql`
  query latest($offset: Int, $limit: Int) {
    Latest(offset: $offset, limit: $limit) {
      offset
      posts {
        id
        friendlyUrl
        title
        content {
          text
        }
        createdAt
        persona {
          handle
          avatarUrl
          display
        }
      }
    }
  }
`;
