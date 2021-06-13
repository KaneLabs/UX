import React from 'react';
import { IconButton, View, AccountButton } from 'eros-ui/components';
import { TOGGLE_DRAWER } from 'eros-ui/queries';
import { useMutation } from '@apollo/react-hooks';
import { unit, makeStyles } from 'eros-ui/theme';
import { StyleSheet } from 'react-native';
import { useRouter } from 'next/router';

export const ForumToolbar = ({ open }) => {
  const [toggleDrawer] = useMutation(TOGGLE_DRAWER);
  const router = useRouter();
  const styles = useStyles();
  return (
    <View onMouseEnter={toggleDrawer} onMouseLeave={toggleDrawer} style={styles.toolbarVertical}>
      <View style={styles.main}>
        <AccountButton size={32} />
        <IconButton name="ios-chatbubbles-outline" onPress={() => router.push('/fora')} />
        <IconButton name="ios-more-outline" onPress={toggleDrawer} />
      </View>
      <IconButton name={open ? 'ios-arrow-back' : 'ios-arrow-forward'} onPress={toggleDrawer} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbarVertical: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 200,
    // alignItems: 'center',
    height: '100%',
    paddingHorizontal: unit,
  },
  main: { flex: 1 },
}));

export default ForumToolbar;
