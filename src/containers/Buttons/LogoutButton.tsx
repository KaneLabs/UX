import * as React from 'react';
import { useNavigation } from '@react-navigation/core';
import { useQuery } from '@apollo/client';
import { AsyncStorage } from 'react-native';
import { DrawerActions } from '@react-navigation/routers';
import { ME } from 'eros-ui/queries';
import Button from 'eros-ui/components/Button';
import { makeStyles, Theme } from 'eros-ui/theme';

const LogoutButton = () => {
  const navigation = useNavigation();
  const { client, data, error, loading } = useQuery(ME);
  const isLoggedIn = data?.Me?.id;
  const styles = useStyles();

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    client.writeQuery({ query: ME, data: { Me: null } });
    client.resetStore();
    navigation.navigate('MainStack');
  };

  if (isLoggedIn) {
    return (
      <Button fontStyle={styles.button} onPress={logout} text={'LOGOUT'} />
    );
  }

  return null;
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: theme.textColor.secondary,
  },
}));

export default LogoutButton;
