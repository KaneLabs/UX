import React, { useState, useEffect } from 'react';
import {
  DRAWER_WIDTH,
  TOOLBAR_WIDTH,
  CHAT_WIDTH,
  borderColor,
  borderWidth,
  unit,
} from 'eros-ui/theme';
import { StyleSheet, Animated } from 'react-native';
import { usePrevious } from 'eros-ui/state';

export const DrawerSheet = ({
  open = false,
  mobile = false,
  children,
  from = 'left',
}) => {
  const [animatedValue] = useState(new Animated.Value(0));
  const prevOpen = usePrevious(open);

  const _open = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 300,
      // friction: number
    }).start();
  };

  const _close = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      useNativeDriver: true,
      duration: 300,
      // friction: number
    }).start();
  };

  useEffect(() => {
    if (open) {
      _open();
    } else if (!open) {
      _close();
    }
  }, [open]);

  const width = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [TOOLBAR_WIDTH, from === 'left' ? DRAWER_WIDTH : CHAT_WIDTH],
  });

  const sideStyle =
    from === 'left'
      ? { left: 0, borderRightWidth: borderWidth }
      : { right: 0, borderLeftWidth: borderWidth };
  const sideStyleOpen =
    from === 'left' ? { left: -TOOLBAR_WIDTH } : { right: TOOLBAR_WIDTH };

  return (
    <Animated.View
      style={[
        styles.drawerSheet,
        { width, opacity: animatedValue },
        sideStyle,
        !open && mobile && sideStyleOpen, // hides offscreen when mobile view
      ]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawerSheet: {
    top: 0,
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    backdropFilter: 'blur(16px)',
    backgroundColor: 'rgba(0,0,0,0.34)',
    height: '100%',
    borderColor,
    // overflow: 'hidden',
  },
});

export default DrawerSheet;
