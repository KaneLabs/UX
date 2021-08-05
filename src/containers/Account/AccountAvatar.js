import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
  makeStyles,
  AVATAR_SIZE,
  DEFAULT_AVATAR_URL,
  canvas,
  unit,
  borderRadius,
  borderColor,
} from 'eros-ui/theme';
import { Avatar, Caption } from 'eros-ui/components';
import { ACCOUNT } from 'eros-ui/queries';
import { useQuery } from '@apollo/react-hooks';

export const AccountAvatar = ({
  source = null,
  avatarUrl,
  handle,
  size = AVATAR_SIZE,
  style = {},
}) => {
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  const { data: accountData } = useQuery(ACCOUNT);
  const account = accountData && accountData.account;

  const sizeStyles = {
    height: size,
    width: size,
    borderRadius: size,
  };

  const imageSource = (() => {
    if (source) return source;
    if (avatarUrl) return { uri: avatarUrl };
    return { uri: DEFAULT_AVATAR_URL };
  })();

  return (
    <View
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={[
        sizeStyles,
        styles.avatarPaper,
        hover && styles.avatarPaperHover,
        style,
      ]}>
      <Avatar source={imageSource} style={sizeStyles} />
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
    borderColor,
    backgroundColor: theme.canvas,
    alignItems: 'center',
  },
}));

export default AccountAvatar;
