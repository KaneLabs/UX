import { gql } from '@apollo/client';

export const FORUM_TIMELINE = gql`
  query forumTimline($offset: Int!, $limit: Int!) {
    ForumTimeline(offset: $offset, limit: $limit) {
      offset
      posts {
        id
        friendlyUrl
        title
        content {
          text
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
