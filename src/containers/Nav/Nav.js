import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  AccountButton,
  Button,
  NavLogo,
  IconButton,
  Title,
  shadow,
} from 'eros-ui/components';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useNav, useAccount } from 'eros-ui/state';
import { makeStyles } from 'eros-ui/theme';

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

const Nav = ({ children, mobile, openDrawer }) => {
  const nav = useNav();
  const account = useAccount();
  const styles = useStyles();

  const loggedIn = account && account.handle;
  return (
    <View
      style={[
        styles.core,
        nav && nav.docked ? styles.docked : styles.undocked,
        mobile ? styles.mobile : styles.desktop,
      ]}>
      <NavLogo />

      {account && account.handle ? (
        <AccountButton size={32} />
      ) : (
        <Button
          style={{ width: 48 }}
          testID="NavJoinLink"
          text="JOIN"
          primary
        />
      )}
    </View>
  );
};

// const NavMobileBack = ({ nav, account, router, mobile }) => {
//   const styles = useStyles();
//   return (
//     <View
//       style={[
//         styles.core,
//         nav && nav.docked ? styles.docked : styles.undocked,
//         mobile ? styles.mobile : styles.desktop,
//       ]}>
//       <IconButton onPress={router.back} name="ios-arrow-round-back" size={32} padding={8} />

//       {<Title type={6} numberOfLines={1} text={router.asPath.slice(1)} />}

//       {account && account.handle ? (
//         <AccountButton size={32} />
//       ) : (
//         <Button style={{ width: 48 }} testID="NavJoinLink" text={'JOIN'} primary />
//       )}
//     </View>
//   );
// };

// const useStyles = makeStyles(theme => ({
//   core: {
//     position: 'absolute',
//     zIndex: 20,
//     height: NAV_HEIGHT,
//     top: 0,
//     left: 0,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderColor,
//     ...shadow(16),
//   },
//   mobile: {
//     paddingHorizontal: unit,
//   },
//   desktop: {
//     paddingHorizontal: unit,
//   },
//   docked: {
//     backgroundColor: canvas2Opaque,
//     borderBottomWidth: 0,
//   },
//   undocked: {
//     backgroundColor: canvas2Opaque,
//     borderBottomWidth: borderWidth,
//   },
// }));

export default Nav;
