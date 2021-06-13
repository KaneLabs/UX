import gql from 'graphql-tag';
// @client for local state
export const NAV = gql`
  query Nav {
    Nav @client {
      docked
    }
  }
`;

export const SET_NAV_DOCKED = gql`
  mutation setNavDocked($docked: Boolean!) {
    setNavDocked(docked: $docked) @client {
      docked
    }
  }
`;
// export const TOGGLE_DRAWER = gql`
//   mutation toggleNav {
//     toggleNav @client {
//       open
//     }
//   }
// `;
// export const CLOSE_DRAWER = gql`
//   mutation closeNav {
//     CloseNav @client {
//       open
//     }
//   }
// `;
// export const OPEN_DRAWER = gql`
//   mutation openNav {
//     OpenNav @client {
//       open
//     }
//   }
// `;
