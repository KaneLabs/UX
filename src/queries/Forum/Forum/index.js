import gql from 'graphql-tag';

export const FORUM = gql`
  query forum($url: String!) {
    Forum(url: $url) {
      id
      title
      bannerUrl
      createdAt
    }
  }
`;

export const CREATE_FORUM = gql`
  mutation createForum($input: CreateForumInput!) {
    CreateForum(input: $input) {
      id
      title
      createdAt
    }
  }
`;
