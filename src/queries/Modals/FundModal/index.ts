import { gql } from '@apollo/client';

// @client for local state

export const FUND_MODAL = gql`
  query fundModal @client {
    fundModal @client {
      open
    }
  }
`;
export const TOGGLE_FUND_MODAL = gql`
  mutation toggleFundModal @client {
    toggleFundModal @client {
      open
    }
  }
`;
export const CLOSE_FUND_MODAL = gql`
  mutation closeFundModal @client {
    closeFundModal @client {
      open
    }
  }
`;
export const OPEN_FUND_MODAL = gql`
  mutation openFundModal @client {
    openFundModal @client {
      open
    }
  }
`;
