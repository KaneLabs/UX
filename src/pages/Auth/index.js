import * as React from 'react';
// import { View } from 'react-native';
import { useRouter } from 'next/router';
import { Container, PhoneAuth } from 'eros-ui/components';

const AuthPage = () => {
  const router = useRouter();
  const onSuccess = (account) => {
    router.push('/');
  };

  return (
    <Container center>
      <PhoneAuth onSuccess={onSuccess} />
    </Container>
  );
};

export default AuthPage;
