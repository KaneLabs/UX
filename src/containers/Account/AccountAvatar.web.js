import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from '@kanelabs/ux/components';
import { AVATAR_SIZE, makeStyles } from '@kanelabs/ux/theme';
import { ACCOUNT } from '@kanelabs/ux/queries';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

export const AccountAvatar = (props) => {
  const [{ size = AVATAR_SIZE }] = useTheme();
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  const { data: accountData } = useQuery(ACCOUNT);
  const account = accountData && accountData.account;
  const { handle, avatarUrl } = account;

  const sizeStyles = {
    height: size,
    width: size,
    borderRadius: size,
  };

  return (
    <Link href="/[creator]" as={`/${handle}`}>
      <View
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={[
          sizeStyles,
          styles.avatarPaper,
          hover && styles.avatarPaperHover,
        ]}>
        <Avatar source={{ uri: avatarUrl }} size={size} />
      </View>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  avatarPaper: {
    overflow: 'hidden',
    borderWidth: theme.borderWidth,
    borderColor: theme.borderColor,
    backgroundColor: theme.canvas,
    alignItems: 'center',
  },
  avatarPaperHover: {
    cursor: 'pointer',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    backgroundColor: theme.canvas,
    alignItems: 'center',
  },
}));

export default AccountAvatar;
