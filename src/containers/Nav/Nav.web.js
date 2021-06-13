import React from 'react';
import { View } from 'react-native';
import {
  SearchInput,
  IconButton,
  Title,
  shadow,
  AccountLinkButton,
  JoinLinkButton,
} from 'eros-ui/components';

import { useRouter } from 'next/router';
import { useNav, useAccount } from 'eros-ui/state';
import { makeStyles } from 'eros-ui/theme';
import AccountMenuButton from '../AccountMenuButton';

const hideOnPaths = ['/join'];

const useStyles = makeStyles((theme) => ({
  core: {
    position: 'absolute',
    zIndex: 5,
    // width: '100%',
    height: theme.NAV_HEIGHT,
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    ...shadow(4),
  },
  mobile: {
    paddingHorizontal: theme.unit,
  },
  desktop: {
    paddingHorizontal: theme.unit,
  },
  docked: {
    backgroundColor: theme.canvas2Opaque,
    backdropFilter: 'blur(12px)',
    borderBottomWidth: theme.borderWidth,
    borderColor: theme.borderColor,
  },
  undocked: {
    backgroundColor: theme.canvas2Opaque,
    backdropFilter: 'blur(12px)',
    borderBottomWidth: theme.borderWidth,
    borderColor: theme.borderColor,
  },
  flat: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderBottomWidth: 0,
  },
}));

const Nav = (props) => {
  const { mobile } = props;
  const styles = useStyles();
  const nav = useNav();
  const account = useAccount();
  const router = useRouter();

  const loggedIn = account && account.handle;

  if (hideOnPaths.includes(router.asPath)) {
    return null;
  }

  if (mobile && router.asPath !== '/') {
    return <NavMobileBack nav={nav} account={account} router={router} />;
  }

  const showSearch = loggedIn && router.asPath === '/';

  // const isFlat = nav && nav.docked && router.asPath === '/' && !loggedIn;

  return (
    <View
      style={[
        styles.core,
        nav && nav.docked ? styles.docked : styles.undocked,
        mobile ? styles.mobile : styles.desktop,
        // isFlat && styles.flat,
      ]}
    >
      <View style={{ flex: 1, alignItems: 'center' }}>{showSearch && <SearchInput />}</View>
      <AccountMenuButton />
    </View>
  );
};

const NavMobileBack = ({
  nav, account, router, mobile,
}) => {
  const styles = useStyles();

  return (
    <View
      style={[
        styles.core,
        nav && nav.docked ? styles.docked : styles.undocked,
        mobile ? styles.mobile : styles.desktop,
      ]}
    >
      <IconButton onPress={router.back} name="ios-arrow-round-back" size={32} padding={8} />

      <Title type={6} numberOfLines={1} text={router.asPath.slice(1)} />

      {account && account.handle ? (
        <AccountLinkButton handle={account.handle} />
      ) : (
        <JoinLinkButton />
      )}
    </View>
  );
};

export default Nav;
