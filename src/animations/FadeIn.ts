import React, { useEffect } from 'react';
import { Animated } from 'react-native';

export const useFadeIn = ({ fadeIn = true, duration = 2000, delay = 0 }) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: fadeIn ? 1 : 0,
      duration,
      delay,
    }).start();
  }, []);

  return opacity;
};

export function FadeIn({ fadeIn = true, children, style = {} }) {
  const opacity = useFadeIn({ fadeIn, duration: 2000, delay: 2000 });

  return <Animated.View style={[{ opacity }, style]}>{children}</Animated.View>;
}
