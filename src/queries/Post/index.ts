import { gql } from '@apollo/client';

export const POST = gql`
  query post($id: ID, $friendlyUrl: String) {
    Post(id: $id, friendlyUrl: $friendlyUrl) {
      id
      friendlyUrl
      title
      content {
        type
        text
        uri
      }
      persona {
        handle
        avatarUrl
        display
      }
      likes
      liked
      createdAt
    }
  }
`;

// maybe avoid CapitalCase in future?
export const CREATE_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    CreatePost(input: $input) {
      content {
        text
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: String!, $unlike: Boolean) {
    LikePost(postId: $postId, unlike: $unlike)
  }
`;

// subscriptions
export const NEW_POST = gql`
  subscription newPost($handle: String) {
    newPost(handle: $handle) {
      id
      createdAt
      friendlyUrl
      title
      content {
        text
      }
      persona {
        handle
        avatarUrl
        display
      }
    }
  }
`;
