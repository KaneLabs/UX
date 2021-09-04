import * as React from 'react';
import { View } from 'react-native';
import { Container, Typography } from '@kanelabs/ux/components';
import { makeStyles, useTheme } from '@kanelabs/ux/theme';
import Latest from '@kanelabs/ux/containers/Latest';
import MasonryList from '@kanelabs/ux/containers/MasonryList';
import PictureInPicture from '@kanelabs/ux/containers/PictureInPicture';

import { useDimensions, useDrawer, useSocialDrawer } from '@kanelabs/ux/state';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.appBackgroundColor,
  },
  leftOpen: {
    paddingLeft: theme.TOOLBAR_WIDTH_OPEN,
  },
  leftClosed: {
    paddingLeft: theme.TOOLBAR_WIDTH_CLOSED,
  },
  rightOpen: {
    paddingRight: theme.TOOLBAR_WIDTH_OPEN,
  },
  rightClosed: {
    paddingRight: theme.TOOLBAR_WIDTH_CLOSED,
  },
}));

const MainDesktop = (props) => {
  const { open: leftOpen, lock: leftLock } = useDrawer();
  const { open: rightOpen, lock: rightLock } = useSocialDrawer();
  const styles = useStyles();
  // const { width: deviceWidth, mobile } = useDimensions();
  // console.log('drawerIsOpen', drawerIsOpen);
  // const {
  //   NAV_HEIGHT,
  //   TOOLBAR_WIDTH_OPEN,
  //   TOOLBAR_WIDTH_CLOSED,
  // } = useTheme();

  // const style = [
  //   styles.container,
  //   leftOpen && leftLock ? styles.leftOpen : styles.leftClosed,
  //   rightOpen && rightLock ? styles.rightOpen : styles.rightClosed,
  // ];
  return (
    <>
      <MasonryList />
      <PictureInPicture />
    </>
  );
};

const MainMobile = (props) => {
  const [{ canvasOpaque, shadow }] = useTheme();
  const { width: deviceWidth, mobile } = useDimensions();

  return (
    <Container style={{ flexDirection: 'row' }}>
      <View
        style={{
          width: deviceWidth,
          backgroundColor: canvasOpaque,
          ...shadow(4),
        }}>
        <Latest width={deviceWidth} mobile={mobile} />
      </View>
    </Container>
  );
};

const MainPage = () => <MainDesktop />;
// const account = useAccount();
// const { mobile } = useDimensions();
// const { open: socialDrawerIsOpen } = useSocialDrawer();

// const styles = useStyles(theme);

// if (!account && mobile) {
//   return <HeroSwiper horizontal />;
// }

// if (!account) {
//   return <HerosPage />;
// }

// if (mobile) {
//   return (
//     <MainMobile />
//   );
// }

export default MainPage;
