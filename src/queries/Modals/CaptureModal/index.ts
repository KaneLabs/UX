import { gql } from '@apollo/client';

export const CAPTURE_MODAL = gql`
  query captureModal @client {
    captureModal @client {
      open
    }
  }
`;
export const TOGGLE_CAPTURE_MODAL = gql`
  mutation toggleCaptureModal @client {
    toggleCaptureModal @client {
      open
    }
  }
`;
export const CLOSE_CAPTURE_MODAL = gql`
  mutation closeCaptureModal @client {
    closeCaptureModal @client {
      open
    }
  }
`;
export const OPEN_CAPTURE_MODAL = gql`
  mutation openCaptureModal @client {
    openCaptureModal @client {
      open
    }
  }
`;
