import { gql } from '@apollo/client';

export const TIP_MODAL = gql`
  query TipModal {
    TipModal @client {
      open
    }
  }
`;
export const CLOSE_TIP_MODAL = gql`
  mutation closeTipModal {
    closeTipModal @client {
      open
    }
  }
`;
export const OPEN_TIP_MODAL = gql`
  mutation openTipModal {
    openTipModal @client {
      open
    }
  }
`;
