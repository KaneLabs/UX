import { gql } from '@apollo/client';

export const CREATE_PRESIGNED_URL = gql`
  mutation createPresignedUrl($input: CreatePresignedUrlInput!) {
    CreatePresignedUrl(input: $input) {
      id
      presignedUrl
      url
      createdAt
    }
  }
`;
