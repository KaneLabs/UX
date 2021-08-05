import React from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerProps,
  GestureEvent,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

type AnimatedGHContext = {
  startX: number;
};

const PanHandler: React.FC<PanGestureHandlerProps> = ({ children }) => {
  const x = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
    },
    onEnd: _ => {
      x.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: x.value,
      },
    ],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[animatedStyle]}>{children}</Animated.View>
    </PanGestureHandler>
  );
};

export default PanHandler;
