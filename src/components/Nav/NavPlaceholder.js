import React from 'react';
import { View } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';

export const NavPlaceholder = () => {
  const styles = useStyles();
  return <View style={styles.navPlaceholder} />;
};

const useStyles = makeStyles((theme) => ({
  navPlaceholder: { width: '100%', height: theme.NAV_HEIGHT },
}));

export default NavPlaceholder;
