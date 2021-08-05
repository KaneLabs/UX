import { gql } from '@apollo/client';

export const CREATE_FORUM_CHAT_MESSAGE = gql`
  mutation createForumChatMessage($input: CreateForumChatMessageInput!) {
    CreateForumChatMessage(input: $input) {
      message
      createdAt
    }
  }
`;
