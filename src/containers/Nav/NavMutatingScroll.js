import React from 'react';
import { useMutation } from '@apollo/client';
import { SET_NAV_DOCKED } from '@kanelabs/ux/queries';
import { Animated, StyleSheet } from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';

export const NavMutatingScroll = ({ children, ...rest }) => {
  const [setNavDocked] = useMutation(SET_NAV_DOCKED);
  const styles = useStyles();

  const onScroll = (e) => {
    if (e.nativeEvent.contentOffset.y === 0) {
      return setNavDocked({ variables: { docked: true } });
    }
    return setNavDocked({ variables: { docked: false } });
  };

  return (
    <Animated.ScrollView
      scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
      onScroll={onScroll}
      {...rest}>
      {children}
    </Animated.ScrollView>
  );
};

const useStyles = makeStyles((theme) => ({
  fill: { flex: 1, height: '100%', width: '100%' },
}));

export default NavMutatingScroll;
