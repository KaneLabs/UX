import React from 'react';

import { View } from 'react-native';
import { gql } from '@apollo/client';

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

  return (
    <View>
      <TextField value={phone} onChangeText={setPhone} />
      <Button text="SUBMIT" onPress={submit} />
    </View>
  );
};

export default AuthPhone;
