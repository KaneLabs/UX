import { gql } from '@apollo/client';

export const FORUM_CHAT = gql`
  subscription forumChat($forumId: String!) {
    ForumChat(forumId: $forumId) {
      message
      createdAt
    }
  }
`;
