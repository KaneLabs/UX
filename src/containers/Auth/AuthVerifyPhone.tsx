import * as React from 'react';
// import { View } from 'react-native';
// import { useRouter } from 'next/router';
import {
  Container,
  TextField,
  OutlinedButton,
  Typography,
} from 'eros-ui/components';
import { ME, AUTH_VERIFY_PHONE } from 'eros-ui/queries';
import { useMutation } from '@apollo/client';

const AuthVerifyPhone = ({ onSuccess }) => {
  const [phone, setPhone] = React.useState('');
  const [verificationCode, setVerificationCode] = React.useState('');
  const [verifyPhone, { data, error, loading }] = useMutation(
    AUTH_VERIFY_PHONE,
    {
      async update(cache, { data: { AuthVerifyPhone: NextMe } }) {
        const { Me } = cache.readQuery({ query: ME });
        cache.writeQuery({
          query: ME,
          data: {
            Me: {
              ...Me,
              ...NextMe,
            },
          },
        });
        if (window) {
          document.cookie = `token=${NextMe.token}`;
        }
        const { Me: NewMe } = cache.readQuery({ query: ME });
        console.log({ NewMe });
        onSuccess(NewMe);
      },
    },
  );

  const submit = async () => {
    const input = { verificationCode, phone };
    console.log(input);
    const response = await verifyPhone({ variables: { input } });
    console.log(response);
  };

  return (
    <Container>
      <Typography type="h2" text="Enter your verification code." />
      {error && error.message && (
        <Typography
          type="subtitle1"
          testID="AuthVerifyPhoneError"
          text={error.message}
          gutter
        />
      )}
      <TextField value={verificationCode} onChangeText={setVerificationCode} />
      <TextField value={phone} onChangeText={setPhone} />
      <OutlinedButton onPress={submit} />
    </Container>
  );
};

export default AuthVerifyPhone;
