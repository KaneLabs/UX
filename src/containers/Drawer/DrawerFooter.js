import React from 'react';
import { View } from 'react-native';
import LogoutButton from '../LogoutButton';

export const DrawerFooter = () => (
  <View style={styles.footer}>
    <LogoutButton />
  </View>
);

const styles = {
  footer: { width: '100%', alignItems: 'center' },
};

export default DrawerFooter;
