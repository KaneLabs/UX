import React from 'react';
import { ImageBackground, Platform, ImageSourcePropType } from 'react-native';
import { makeStyles } from 'eros-ui/theme';

const PersonaBanner: React.FC<{ source: ImageSourcePropType }> = ({ source, ...rest }) => {
  const styles = useStyles();

  return (
    <ImageBackground
      accessibilityRole="image"
      resizeMode="cover"
      style={styles.PersonaBanner}
      source={source}
      {...rest}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  PersonaBanner: {
    backgroundColor: theme.canvas3,
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.OS === 'web' ? '100%' : theme.window.width,
    height: Platform.OS === 'web' ? 'calc(100% / 3)' : theme.window.width / 3,
    maxHeight: Platform.OS === 'web' ? 'calc(100% / 3)' : theme.window.height / 3,
  },
}));

export default PersonaBanner;
