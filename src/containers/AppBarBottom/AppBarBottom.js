import React from 'react';
// import { StyleSheet } from 'react-native';
import { TabBar, Tab } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';
import { useAccount } from 'eros-ui/state';

export const AppBarBottom = () => {
  const styles = useStyles();
  const account = useAccount();
  if (account && account.handle) {
    return (
      <TabBar style={[styles.container]}>
        <Tab />
        <Tab />
        <Tab iconName="ios-create-outline" />
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
  },
}));

export default AppBarBottom;
