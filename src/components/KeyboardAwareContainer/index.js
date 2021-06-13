import React, { useState, useEffect } from 'react';
import { Animated, Keyboard } from 'react-native';
// import Animated from 'react-native-reanimated'

const KeyboardAwareContainer = ({ children, style, ...rest }) => {
  const [keyboardHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardWillShow = (event) => {
      Animated.timing(keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
        // useNativeDriver: true
      }).start();
    };
    const keyboardWillHide = (event) => {
      Animated.timing(keyboardHeight, {
        duration: event.duration,
        toValue: 0,
        // useNativeDriver: true
      }).start();
    };

    const keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      keyboardWillShow,
    );
    const keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      keyboardWillHide,
    );

    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  }, []);

  console.log('keyboardHeight', keyboardHeight);

  return (
    <Animated.View
      style={[styles.container, style, { paddingBottom: keyboardHeight }]}
      {...rest}>
      {children}
    </Animated.View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
};

export default KeyboardAwareContainer;
