import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar } from '@kanelabs/ux/components';
import { ACCOUNT } from '@kanelabs/ux/queries';
import { useQuery } from '@apollo/client';

export const AccountAvatarContainer = (props) => {
  const { data: accountData } = useQuery(ACCOUNT);
  const account = accountData && accountData.account;

  return <Avatar avatarUrl={account.avatarUrl} {...props} />;
};

export default AccountAvatarContainer;
