import React from 'react';
import { useRouter } from 'next/router';
import Compose from '@kanelabs/ux/containers/Compose/Compose';

export default () => {
  const router = useRouter();
  const onSuccess = (post) => {
    router.back();
  };
  return <Compose onSuccess={onSuccess} />;
};
