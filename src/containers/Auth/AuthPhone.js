import React from 'react';

import { View } from 'react-native';
import gql from 'graphql-tag';

import { useApolloClient } from '@apollo/client';

// Make sure that both the query and the component are exported

export const GET_DOG_QUERY = gql`
  query GetDog($name: String) {
    dog(name: $name) {
      id
      name
      breed
    }
  }
`;

const AuthPhone = () => {
    const client = useApolloClient();
    console.log({client});
    // const { loading, error, data } = useQuery(GET_DOG_QUERY, { variables: { name: 'Fido' } });
  return <View />;
};

export default AuthPhone;
