import React from 'react';
// import { StyleSheet } from 'react-native';
import { TabBar, Tab } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';
import { useRouter } from 'next/router';
import { useAccount } from 'eros-ui/state';

const AppBarBottom = () => {
  const router = useRouter();
  const account = useAccount();
  const styles = useStyles();
  if (account && account.handle) {
    return (
      <TabBar style={[styles.container]}>
        <Tab />
        <Tab />
        <Tab
          onPress={() => router.push('/create')}
          iconName="ios-create-outline"
        />
        <Tab />
        <Tab />
      </TabBar>
    );
  }

  return null;
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: theme.TABBAR_HEIGHT,
    borderTopWidth: theme.borderWidth,
    borderColor: theme.borderColor,
    backgroundColor: theme.canvasOpaque,
    backdropFilter: 'blur(12px)',
  },
}));

export default AppBarBottom;
