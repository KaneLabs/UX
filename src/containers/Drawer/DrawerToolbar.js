import React from 'react';
import { IconButton, View, NavLogo } from '@kanelabs/ux/components';
import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_COMPOSE_MODAL,
} from '@kanelabs/ux/queries';
import { useMutation } from '@apollo/client';
import { makeStyles } from '@kanelabs/ux/theme';
import { useDrawer } from '@kanelabs/ux/state';
import DrawerToggleButton from '../DrawerToggleButton';
import ThemeToggleButton from '../ThemeToggleButton';

const useStyles = makeStyles((theme) => ({
  toolbarVertical: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 10,
    paddingHorizontal: theme.unit,
  },
  open: {
    backgroundColor: theme.canvas2,
    ...theme.shadow(8),
    width: theme.TOOLBAR_WIDTH_OPEN,
    borderRightWidth: theme.borderWidth,
    borderColor: theme.borderColor,
  },
  closed: {
    backgroundColor: 'rgba(0,0,0,0)',
    ...theme.shadow(0),
    width: theme.TOOLBAR_WIDTH_CLOSED,
    alignItems: 'center',
  },
  main: { flex: 1 },
  bottom: { paddingVertical: theme.unit * 2 },
  drawerLogo: { marginBottom: theme.unit },
}));

export const DrawerToolbar = () => {
  const styles = useStyles();
  const { open } = useDrawer();
  const [openDrawer] = useMutation(OPEN_DRAWER);
  const [closeDrawer] = useMutation(CLOSE_DRAWER);
  const [toggleCompose] = useMutation(TOGGLE_COMPOSE_MODAL);

  return (
    <View
      testID="DrawerToolbarLeft"
      onMouseEnter={openDrawer}
      onMouseLeave={closeDrawer}
      style={[styles.toolbarVertical, open ? styles.open : styles.closed]}>
      <View style={styles.main}>
        <View style={styles.drawerLogo}>
          <NavLogo />
        </View>
        <IconButton
          fab
          testID="DrawerCreateButton"
          name="ios-create-outline"
          onPress={toggleCompose}
        />
      </View>

      <View style={styles.bottom}>
        <ThemeToggleButton />
        <DrawerToggleButton />
      </View>
    </View>
  );
};

export default DrawerToolbar;
