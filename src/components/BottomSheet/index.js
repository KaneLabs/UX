import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

import { PanGestureHandler } from 'react-native-gesture-handler';
import makeStyles from '../../theme/makeStyles';

const useStyles = makeStyles((theme) => ({
  sheet: {
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

const BottomSheet = () => {
  console.log('BottomSheet');
  const styles = useStyles();
  //   const { width, height } = useWindowDimensions();
  const x = useSharedValue(0);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      console.log('START');
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
    },
    onEnd: (_) => {
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
      <Animated.View style={[styles.sheet, animatedStyle]} />
    </PanGestureHandler>
  );
};

export default BottomSheet;
