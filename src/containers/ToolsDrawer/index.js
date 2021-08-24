import React from 'react';
import { IconButton, View, NavLogo } from 'eros-ui/components';
import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_COMPOSE_MODAL,
  DRAWER,
} from 'eros-ui/queries';
import { useMutation, useQuery } from '@apollo/client';
import { makeStyles } from 'eros-ui/theme';
import { useDrawer, useAccount } from 'eros-ui/state';
import { DrawerLockButton } from 'eros-ui/components';
import DrawerToggleButton from '../DrawerToggleButton';
import ThemeToggleButton from '../ThemeToggleButton';

const useStyles = makeStyles((theme) => ({
  toolbarVertical: {
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 10,
    paddingHorizontal: theme.unit,
    overflowX: 'hidden',
  },
  open: {
    backgroundColor: theme.canvas2Opaque,
    backdropFilter: 'blur(12px)',
    ...theme.shadow(8),
    height: '100%',
    width: theme.TOOLBAR_WIDTH_OPEN,
    borderRightWidth: theme.borderWidth,
    borderColor: theme.borderColor,
  },
  closed: {
    backgroundColor: 'rgba(0,0,0,0)',
    ...theme.shadow(0),
    height: '100%',
    width: theme.TOOLBAR_WIDTH_CLOSED,
    alignItems: 'center',
  },
  main: { paddingVertical: theme.unit, flex: 1 },
  bottom: { paddingVertical: theme.unit * 2 },
  drawerLogo: {},
  composeButton: {},
}));

export const ToolsDrawer = () => {
  const account = useAccount();
  const styles = useStyles();
  const {
    data: {
      Drawer: { open, lock },
    },
    client,
  } = useQuery(DRAWER);
  console.log({ open, lock });

  const setDrawerOpen = (open) => {
    if (lock) return null;
    client.writeQuery({
      query: DRAWER,
      data: {
        Drawer: {
          open,
          lock,
          __typename: 'Drawer',
        },
      },
    });
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const toggleLock = () => {
    client.writeQuery({
      query: DRAWER,
      data: {
        Drawer: {
          open,
          lock: !lock,
          __typename: 'Drawer',
        },
      },
    });
  };

  const [toggleCompose] = useMutation(TOGGLE_COMPOSE_MODAL);
  const hasAccount = account && account.handle;

  // if (!hasAccount) return null;

  return (
    <View
      testID="ToolsDrawer"
      onMouseEnter={openDrawer}
      onMouseLeave={closeDrawer}
      style={[styles.toolbarVertical, open ? styles.open : styles.closed]}>
      <View style={styles.drawerLogo}>
        <NavLogo />
      </View>

      <View style={styles.main}>
        <IconButton
          style={styles.composeButton}
          fab
          testID="DrawerCreateButton"
          name="ios-create-outline"
          onPress={toggleCompose}
        />
      </View>

      <View style={styles.bottom}>
        <ThemeToggleButton />
        <DrawerLockButton lock={lock} onPress={toggleLock} />
      </View>
    </View>
  );
};

export default ToolsDrawer;
