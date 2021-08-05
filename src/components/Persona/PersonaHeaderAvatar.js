import React from 'react';
import { View, Avatar } from 'eros-ui/components';
import { makeStyles, useTheme } from 'eros-ui/theme';

export const PersonaHeaderAvatar = (props) => {
  const [{ AVATAR_SIZE, AVATAR_SIZE_DESKTOP }] = useTheme();
  const { avatarUrl, avatarSize = AVATAR_SIZE, mobile = false } = props;
  const styles = useStyles();
  return (
    <View style={[styles.container, mobile ? styles.mobile : styles.desktop]}>
      <Avatar
        avatarUrl={avatarUrl}
        size={mobile ? AVATAR_SIZE : AVATAR_SIZE_DESKTOP}
      />
    </View>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    marginRight: theme.unit * 3,
  },
  mobile: {
    marginRight: theme.unit * 3,
  },
  desktop: {
    marginRight: theme.unit * 3,
  },
}));

export default PersonaHeaderAvatar;
