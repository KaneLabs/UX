import React from 'react';
import { IconButton, View, DrawerLockButton } from 'eros-ui/components';
import { SOCIAL_DRAWER } from 'eros-ui/queries';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { makeStyles } from 'eros-ui/theme';
import { useAccount } from 'eros-ui/state';
import AccountButton from '../Account/AccountButton';

const useStyles = makeStyles((theme) => ({
  toolbarVertical: {
    position: 'fixed',
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 10,
    height: '100%',
    paddingHorizontal: theme.unit,
    borderColor: theme.borderColor,
    overflowX: 'hidden',
  },
  open: {
    backgroundColor: theme.canvas2Opaque,
    backdropFilter: 'blur(12px)',
    ...theme.shadow(8),
    width: theme.TOOLBAR_WIDTH_OPEN,
    borderLeftWidth: theme.borderWidth,
  },
  closed: {
    backgroundColor: 'rgba(0,0,0,0)',
    ...theme.shadow(0),
    width: theme.TOOLBAR_WIDTH_CLOSED,
    alignItems: 'center',
    borderLeftWidth: 0,
  },
  main: { flex: 1, paddingVertical: theme.unit / 2 },
  bottom: { paddingVertical: theme.unit * 2 },
  // drawerLogo: { marginBottom: theme.unit },
  iconSize: theme.iconSize,
}));

const SocialDrawer = () => {
  const account = useAccount();
  const styles = useStyles();

  const { data: { SocialDrawer: { open, lock } }, client } = useQuery(SOCIAL_DRAWER);

  console.log({ open, lock });
  // const [openDrawer] = useMutation(OPEN_SOCIAL_DRAWER);
  // const [closeDrawer] = useMutation(CLOSE_SOCIAL_DRAWER);

  const setDrawerOpen = (open) => {
    if (lock) return null;
    client.writeQuery({
      query: SOCIAL_DRAWER,
      data: {
        SocialDrawer: {
          open,
          lock,
          __typename: 'SocialDrawer',
        },
      },
    });
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const toggleLock = () => {
    client.writeQuery({
      query: SOCIAL_DRAWER,
      data: {
        SocialDrawer: {
          open,
          lock: !lock,
          __typename: 'SocialDrawer',
        },
      },
    });
  };

  const hasAccount = account && account.id;
  // if (!hasAccount) return null;

  return (
    <View
      testID="SocialDrawer"
      onMouseEnter={openDrawer}
      onMouseLeave={closeDrawer}
      style={[styles.toolbarVertical, open ? styles.open : styles.closed]}
    >
      <View style={{ height: 56, width: '100%', justifyContent: 'center' }}>
        <AccountButton />
      </View>

      <View style={styles.main}>
        <IconButton testID="ContactsButton" name="ios-contacts-outline" />
      </View>

      <View style={styles.bottom}>
        <DrawerLockButton lock={lock} onPress={toggleLock} />
      </View>
    </View>
  );
};

export default SocialDrawer;
