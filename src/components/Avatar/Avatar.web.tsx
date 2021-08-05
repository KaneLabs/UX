import React from 'react';
import { View, Image } from 'react-native';
import { useTheme, makeStyles } from 'eros-ui/theme';

export const Avatar = (props) => {
  const styles = useStyles();
  const { PROFILE_AVATAR_SIZE } = useTheme();
  const {
    source,
    avatarUrl,
    size = PROFILE_AVATAR_SIZE,
    style = null,
    ...rest
  } = props;

  const sizeStyles = {
    height: size,
    width: size,
    borderRadius: size,
  };

  return (
    <View style={[sizeStyles, styles.avatarPaper, style]} {...rest}>
      <Image source={source || avatarUrl} style={[sizeStyles]} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  avatarPaper: {
    borderWidth: theme.borderWidth,
    borderColor: theme.borderColor,
    backgroundColor: theme.canvas,
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarPaperHover: {
    cursor: 'pointer',
    overflow: 'hidden',
    borderWidth: theme.borderWidth,
    borderColor: 'rgba(0,0,0,0)',
    backgroundColor: theme.canvas,
    alignItems: 'center',
  },
}));

export default Avatar;
