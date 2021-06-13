import gql from 'graphql-tag';

export const PERSONA = gql`
  query persona($handle: String!) {
    Persona(handle: $handle) {
      handle
      display
      avatarUrl
      bannerUrl
      heroUrl
      isMe
      available
      followers
    }
    Following(handle: $handle)
  }
`;

export const FOLLOWING = gql`
  query following($handle: String!) {
    Following(handle: $handle)
  }
`;

export const FOLLOW = gql`
  mutation follow($handle: String!) {
    Follow(handle: $handle)
  }
`;

export const UNFOLLOW = gql`
  mutation unfollow($handle: String!) {
    Unfollow(handle: $handle)
  }
`;

export const UPDATE_PERSONA_AVATAR = gql`
  mutation updatePersonaAvatar($image: Upload!) {
    UpdatePersonaAvatar(image: $image)
  }
`;

export const UPDATE_PERSONA_BANNER = gql`
  mutation updatePersonaBanner($image: Upload!) {
    UpdatePersonaBanner(image: $image)
  }
`;
