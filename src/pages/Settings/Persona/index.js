import React from 'react';
import { Container, UpdateAccount } from 'eros-ui/components';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  const onSuccess = (account) => {
    router.push(`/${account.handle}`);
  };

  return (
    <Container style={{ alignItems: 'center' }}>
      <UpdateAccount onSuccess={onSuccess} />
    </Container>
  );
};
