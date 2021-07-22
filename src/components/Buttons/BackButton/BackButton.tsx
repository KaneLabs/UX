import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { arrayifyStyle } from 'eros-ui/fns';

export const BackButton = ({ style = {}, size = 32, ...rest }) => {
  const iconStyles = [styles.default, ...arrayifyStyle(style)];
  return (
    <IonIcon name="ios-arrow-round-back" style={iconStyles} size={size} {...rest} />
  );
};

const styles = {
  default: {
    padding: 16,
  },
};
