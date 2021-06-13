import { StyleSheet } from 'react-native';

export const radius = 10;

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'transparent',
    overflow: 'hidden',
    zIndex: 10,
  },

  ripple: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 10,
  },
};

export default styles;
