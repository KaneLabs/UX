import React from 'react';
import { Button } from '@kanelabs/ux/components';
import { useRouter } from 'next/router';

const EditButton = () => {
  const router = useRouter();
  return (
    <Button text="EDIT" onPress={() => router.push('/settings/persona')} />
  );
};

export default EditButton;
