import React, { useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
export function SlideIn({ children }) {
  const midPoint = height / 2;
  const value = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(value, {
      toValue: 1,
      duration: 4000,
      delay: 2000,
    }).start();
  }, []);

  const style = {
    position: 'absolute',
    top: value.interpolate({
      inputRange: [0, 1],
      outputRange: [0, midPoint],
    }),
    left: width / 2,
  };

  return <Animated.View style={style}>{children}</Animated.View>;
}
