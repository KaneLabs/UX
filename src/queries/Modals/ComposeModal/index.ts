import { gql } from '@apollo/client';

export const COMPOSE_MODAL = gql`
  query ComposeModal {
    ComposeModal @client {
      open
    }
  }
`;
export const TOGGLE_COMPOSE_MODAL = gql`
  mutation toggleComposeModal {
    toggleComposeModal @client {
      open
    }
  }
`;
export const CLOSE_COMPOSE_MODAL = gql`
  mutation closeComposeModal {
    closeComposeModal @client {
      open
    }
  }
`;
export const OPEN_COMPOSE_MODAL = gql`
  mutation openComposeModal {
    openComposeModal @client {
      open
    }
  }
`;
