import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'eros-ui/components';
import { ACCOUNT } from 'eros-ui/queries';
import { useQuery } from '@apollo/react-hooks';

export const AccountAvatarContainer = (props) => {
  const { data: accountData } = useQuery(ACCOUNT);
  const account = accountData && accountData.account;

  return <Avatar avatarUrl={account.avatarUrl} {...props} />;
};

export default AccountAvatarContainer;
