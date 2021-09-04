import * as React from 'react';
// import { View } from 'react-native';
import {
  Container,
  TextField,
  Title,
  OutlinedButton,
} from '@kanelabs/ux/components';
import { AUTH_SIGNUP } from '@kanelabs/ux/queries';
import { useMutation } from '@apollo/client';

const AuthSignup = ({ onSuccess }) => {
  const [inviteCode, setInviteCode] = React.useState('');
  const [phoneOrEmail, setPhoneOrEmail] = React.useState('');
  const [signup, { data, error, loading }] = useMutation(AUTH_SIGNUP, {
    onCompleted({ AuthSignup }) {
      if (AuthSignup && onSuccess) {
        onSuccess(AuthSignup);
      }
    },
  });

  const submit = async () => {
    const input = { inviteCode, phoneOrEmail };
    console.log(input);
    const response = await signup({ variables: { input } });
    console.log(response);
  };

  return (
    <Container>
      <Title type="h2" text="Enter your invite code." />
      <TextField onChangeText={setInviteCode} value={inviteCode} />
      <TextField onChangeText={setPhoneOrEmail} value={phoneOrEmail} />
      <OutlinedButton onPress={submit} />
    </Container>
  );
};

export default AuthSignup;
