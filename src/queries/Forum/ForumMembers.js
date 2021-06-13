import gql from 'graphql-tag';

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
