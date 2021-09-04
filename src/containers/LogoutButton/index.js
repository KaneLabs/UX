import React from 'react';
import { AsyncStorage } from 'react-native';
import { Button } from '@kanelabs/ux/components';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '@kanelabs/ux/queries';

export const LogoutButton = () => {
  const [logout] = useMutation(LOGOUT);

  const onLogout = async () => {
    await logout();
    // return client.resetStore();
  };

  return (
    <Button
      testID="LogoutButton"
      onPress={onLogout}
      text="LOGOUT"
      style={{ paddingHorizontal: 20 }}
    />
  );
};

export default LogoutButton;
