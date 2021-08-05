import { gql } from '@apollo/client';

export const FORUM_MEMBERS = gql`
  query forumMembers($forumId: String!) {
    ForumMembers(forumId: $forumId) {
      id
      handle
      display
      avatarUrl
    }
  }
`;
