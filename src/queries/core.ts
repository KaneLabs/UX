import { gql } from '@apollo/client';

export const MAIN_FEED_SUBSCRIPTION = gql`
  subscription mainFeed($handle: String) {
    mainFeed(handle: $handle) {
      posts {
        id
        text
        amountEarned
        media {
          uri
        }
        creator {
          handle
          avatarUrl
          display
        }
        createdAt
        monetize
      }
    }
  }
`;
// fin

export const TIP_ACCOUNT_POST = gql`
  mutation tipAccountPost($postId: String!) {
    tipAccountPost(postId: $postId) {
      success
    }
  }
`;

export const READ_ACCOUNT_PAYMENT_METHODS = gql`
  query readAccountPaymentMethods {
    readAccountPaymentMethods
  }
`;

export const ACCOUNT_HAS_PAYMENT_SOURCE = gql`
  query accountHasPaymentSource {
    accountHasPaymentSource {
      id
      default
    }
  }
`;

export const CREATE_STRIPE_CARD = gql`
  mutation createStripeCard(
    $number: String!
    $month: Int!
    $year: Int!
    $cvc: String!
  ) {
    createStripeCard(number: $number, month: $month, year: $year, cvc: $cvc) {
      token
    }
  }
`;

export const GET_POST = gql`
  query getPost($id: String!) {
    getPost(id: $id) {
      id
      text
      media {
        uri
      }
      creator {
        handle
        avatarUrl
        display
      }
      createdAt
      monetize
    }
  }
`;

export const GET_SONG = gql`
  {
    getSong {
      id
      uri
      image {
        uri
      }
      artist
      name
    }
  }
`;

export const CHECK_PHONE_AVAILABILITY = gql`
  query checkPhoneAvailability($number: String!, $countryCode: String!) {
    checkPhoneAvailability(number: $number, countryCode: $countryCode)
  }
`;

export const MAIN_FEED = gql`
  query mainFeed($offset: Int!) {
    mainFeed(offset: $offset) {
      offset
      posts {
        id
        text
        media {
          uri
        }
        creator {
          handle
          avatarUrl
          display
        }
        amountEarned
        monetize
        createdAt
      }
    }
  }
`;

export const GET_PRESIGNED_URL = gql`
  mutation getPresignedUrl($type: String!) {
    getPresignedUrl(type: $type) {
      signedUrl
      name
    }
  }
`;

export const POST_TEXT = gql`
  mutation postText($text: String!) {
    postText(text: $text) {
      id
      text
    }
  }
`;

export const POST_IMAGE = gql`
  mutation postImage($text: String!) {
    postImage(text: $text) {
      id
      text
    }
  }
`;

export const POST_VIDEO = gql`
  mutation postVideo($text: String!, $uri: String!) {
    postVideo(text: $text, uri: $uri) {
      id
      text
      createdAt
      media {
        uri
      }
    }
  }
`;

export const READ_ACCOUNT = gql`
  query readAccount($handle: String!) {
    readAccount(handle: $handle) {
      handle
      isMe
    }
  }
`;

export const READ_ACCOUNT_PROFILE = gql`
  query readAccountProfile($handle: String!) {
    readAccountProfile(handle: $handle) {
      handle
      avatarUrl
      isMe
      available
    }
  }
`;

export const READ_ACCOUNT_FEED = gql`
  query readAccountFeed($handle: String!) {
    readAccountFeed(handle: $handle) {
      posts {
        id
        text
        createdAt
        media {
          uri
        }
        creator {
          handle
          avatarUrl
          display
        }
        monetize
      }
    }
  }
`;

export const CREATE_PHONE = gql`
  mutation createPhone($number: String!, $countryCode: String!) {
    createPhone(number: $number, countryCode: $countryCode)
  }
`;

export const SEND_PHONE_VERIFICATION_CODE = gql`
  mutation sendPhoneVerificationCode($number: String!, $countryCode: String!) {
    sendPhoneVerificationCode(number: $number, countryCode: $countryCode)
  }
`;

export const VERIFY_PHONE_SIGNIN = gql`
  query verifyPhoneSignin(
    $number: String!
    $countryCode: String!
    $code: String!
  ) {
    verifyPhoneSignin(number: $number, countryCode: $countryCode, code: $code) {
      token
      handle
    }
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $handle: String!
    $number: String!
    $countryCode: String!
  ) {
    createAccount(handle: $handle, number: $number, countryCode: $countryCode) {
      handle
      display
      avatarUrl
      token
    }
  }
`;

export const MY_SCENES = gql`
  {
    scenes {
      id
      handle
      avatarUrl
    }
  }
`;

export const ACCOUNT_FRIENDS = gql`
  {
    accountFriends {
      accountId
      handle
      displayName
      accountAvatarUrl
    }
  }
`;

export const CREATE_TEXT_POST = gql`
  mutation createTextPost($text: String!) {
    createTextPost(text: $text) {
      postId
    }
  }
`;

export const NETWORK = gql`
  {
    network @client {
      isConnected
    }
  }
`;

export const LOGIN_FORA = gql`
  mutation login($handle: String!, $password: String!) {
    login(handle: $handle, password: $password) {
      accountId
      handle
      displayName
      accountAvatarUrl
      token
    }
  }
`;

export const SIGNUP_FORA = gql`
  mutation signup($handle: String!, $password: String!, $displayName: String!) {
    signup(handle: $handle, password: $password, displayName: $displayName) {
      accountId
      handle
      displayName
      accountAvatarUrl
      token
    }
  }
`;

export const READ_ACCOUNT_POSTS = gql`
  query accountPosts($handle: String!) {
    accountPosts(handle: $handle) {
      postId
      handle
      displayName
      text
      media {
        imageId
        url
        createdAt
      }
    }
  }
`;

export const READ_CONTENT = gql`
  query readContent($handle: String!, $contentUrl: String!) {
    readContent(handle: $handle, contentUrl: $contentUrl) {
      postId
      handle
      displayName
      text
      media {
        imageId
        url
        createdAt
      }
    }
  }
`;

export const SEARCH = gql`
  query searchPosts($searchText: String!) {
    searchPosts(searchText: $searchText) {
      searchText
      postUrl
    }
  }
`;

export const GET_POSTS = gql`
  {
    posts {
      postId
      handle
      displayName
      text
      media {
        imageId
        url
        createdAt
      }
    }
  }
`;

export const CONTENT_UPLOAD = gql`
  mutation createTextPost($text: String!) {
    createTextPost(text: $text) {
      postId
    }
  }
`;

// mobile

export const TRENDING = gql`
  {
    trending {
      tag
    }
  }
`;

export const GET_AD = gql`
  {
    getAd {
      id
      url
    }
  }
`;

export const CLAIM_NAME = gql`
  mutation claimName($handle: String!) {
    claimName(handle: $handle)
  }
`;

export const GET_ALL_POSTS = gql`
  {
    getAllPosts {
      id
      title
    }
  }
`;
