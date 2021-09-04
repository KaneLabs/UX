import * as React from 'react';
// import { StyleSheet } from 'react-native';
// import { useQuery, useMutation } from '@apollo/client';
import { PhoneAuth, Container } from '@kanelabs/ux/components';
// import { SET_HANDLE, SET_ACCOUNT } from '@kanelabs/ux/queries';
// import { NAV_HEIGHT } from '@kanelabs/ux/theme';
import { useRouter } from 'next/router';

const AvailablePersonaPage = ({ handle }) => {
  const router = useRouter();
  const onSuccess = () => router.push('/');

  return (
    <Container center>
      <PhoneAuth handle={handle} onSuccess={onSuccess} />
    </Container>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     marginTop: NAV_HEIGHT,
//     paddingVertical: 20,
//     alignItems: 'center',
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
// });

export default AvailablePersonaPage;
