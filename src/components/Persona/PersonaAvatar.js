import React, { useMemo, useState } from 'react';
import { View, Image } from 'react-native';
import { makeStyles, useTheme } from 'eros-ui/theme';

export const PersonaAvatar = (props) => {
  const [{ DEFAULT_AVATAR_URL, PROFILE_AVATAR_SIZE }] = useTheme();
  const { source, avatarUrl, size = PROFILE_AVATAR_SIZE } = props;
  const styles = useStyles();
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const sizeStyles = useMemo(() => ({
    height: size,
    width: size,
    borderRadius: size,
  }));

  const imageSource = useMemo(() => {
    if (source) return source;
    if (avatarUrl) return { uri: avatarUrl };
    return { uri: DEFAULT_AVATAR_URL };
  }, [source, avatarUrl]);

  return (
    <View
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={[
        sizeStyles,
        styles.avatarPaper,
        hover && styles.avatarPaperHover,
      ]}>
      <Image source={imageSource} style={[sizeStyles]} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  avatarPaper: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor,
    backgroundColor: theme.canvas,
    alignItems: 'center',
  },
  avatarPaperHover: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    backgroundColor: theme.canvas,
    alignItems: 'center',
  },
}));
