import React from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { Theme, makeStyles } from 'eros-ui/theme';

type AnimatedGHContext = {
  startX: number;
};

const BottomSheet = () => {
  const styles = useStyles();
  const x = useSharedValue(0);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (_, ctx) => {
      console.log('START');
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
    },
    onEnd: _ => {
      console.log('END');
      x.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    // height: 60,
    transform: [
      {
        translateX: x.value,
      },
    ],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.BottomSheet, animatedStyle]} />
    </PanGestureHandler>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  BottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: theme.padding,
    right: theme.padding,
    padding: theme.padding,
    backgroundColor: theme.canvas,
    borderRadius: theme.borderRadius,
    borderColor: theme.borderColor,
    borderWidth: theme.borderWidth,
    ...theme.shadow(8),
  },
}));

export default BottomSheet;
