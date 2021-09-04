import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';

export const Backdrop = ({
  open = false,
  darken = true,
  blur = true,
  onPress,
}) => {
  if (!open) return null;
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[styles.backdrop, darken && styles.darken, blur && styles.blur]}
      />
    </TouchableWithoutFeedback>
  );
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: 'absolute',
    zIndex: 200,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  darken: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  blur: Platform.select({
    web: {
      backdropFilter: 'blur(3px)',
    },
  }),
}));

export default Backdrop;
