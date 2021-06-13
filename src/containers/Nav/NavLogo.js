import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ForaLogo } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';

export const NavLogo = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <ForaLogo style={styles.logo} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: { paddingHorizontal: 6 },
  logo: { height: theme.NAV_HEIGHT, width: theme.NAV_HEIGHT },
}));
