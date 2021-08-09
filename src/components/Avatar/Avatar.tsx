import React from 'react';
import { Image } from 'react-native';
import {
  makeStyles,
  DEFAULT_AVATAR_URL,
  AVATAR_SIZE,
  Theme,
} from 'eros-ui/theme';

export const Avatar = ({
  source = null,
  avatarUrl = null,
  size = AVATAR_SIZE,
  style = null,
}) => {
  const sizeStyles = {
    height: size,
    width: size,
    borderRadius: size,
  };
  const styles = useStyles();
  const imageSource = source || { uri: avatarUrl || DEFAULT_AVATAR_URL };
  const avatarStyles = [sizeStyles, styles.avatarPaper, style];
  return <Image source={imageSource} style={avatarStyles} />;
};

const useStyles = makeStyles((theme: Theme) => ({
  avatarPaper: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.borderColor,
    backgroundColor: theme.canvas,
    alignItems: 'center',
  },
}));

export default Avatar;
