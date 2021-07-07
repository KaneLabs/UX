import React from 'react';

import { View } from 'react-native';
import gql from 'graphql-tag';

import { useMutation } from '@apollo/client';
import Button from 'eros-ui/components/Buttons/Button';
import TextField from 'eros-ui/components/TextField';

// Make sure that both the query and the component are exported

export const AUTH_PHONE = gql`
  mutation AuthPhone($input: AuthPhoneInput!) {
    AuthPhone(input: $input)
  }
`;

const AuthPhone = () => {
  const [phone, setPhone] = React.useState('');
  const [authenticatePhone, state] = useMutation(AUTH_PHONE, {
    // variables: { input: { phone } },
    onCompleted(Response) {
      console.log('onCompleted phone Response', Response);
    //   client.writeQuery({ query: PHONE, data: { Phone: { ...phone } } });
    },
  });

  console.log({ state });

  const submit = () => {
    authenticatePhone({ variables: { phone } });
  };

  // const client = useMutation();
  // console.log({client});
  // const { loading, error, data } = useQuery(GET_DOG_QUERY, { variables: { name: 'Fido' } });
  return (
    <View>
      <TextField value={phone} onChangeText={setPhone} />
      <Button text="SUBMIT" onPress={submit} />
    </View>
  );
};

export default AuthPhone;
