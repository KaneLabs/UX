import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

export const Popover = ({ children }) => {
  const onPress = (e) => {
    alert(e.nativeEvent);
  };

  return <TouchableWithoutFeedback onPress={onPress}>{children}</TouchableWithoutFeedback>;
};

export default Popover;
