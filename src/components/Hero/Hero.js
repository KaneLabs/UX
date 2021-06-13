import React from 'react';
import { ImageBackground, Platform } from 'react-native';
import makeStyles from 'eros-ui/theme/makeStyles';

export const Hero = ({ children = null, style = {}, ...rest }) => {
  const styles = useStyles();
  if (!children) {
    return <ImageBackground style={[styles.hero, style]} {...rest} />;
  }

  return (
    <ImageBackground style={[styles.hero, style]} {...rest}>
      {children}
    </ImageBackground>
  );
};

const useStyles = makeStyles((theme) => ({
  hero: Platform.select({
    web: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
    },
    default: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
  }),
}));

export default Hero;
