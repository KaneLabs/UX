import React from 'react';
import { ImageBackground, Platform } from 'react-native';
import { useDimensions } from 'eros-ui/state';
import { makeStyles } from 'eros-ui/theme';

export const Banner = ({ uri, children }) => {
  const { height, width } = useDimensions();
  const sizeStyles = {
    width: Platform.OS === 'web' ? '100%' : width,
    height: Platform.OS === 'web' ? 'calc(100% / 3)' : width / 3,
    maxHeight: Platform.OS === 'web' ? 'calc(100% / 3)' : height / 3,
  };
  const styles = useStyles();

  return (
    <ImageBackground
      accessibilityRole="img"
      resizeMode="cover"
      style={[styles.banner, sizeStyles]}
      source={{ uri }}
    >
      {children}
    </ImageBackground>
  );
};

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default Banner;
