import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ACCOUNT } from 'eros-ui/queries';
import { useQuery } from '@apollo/react-hooks';
import { Avatar, Typography, Button } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';
import { useAccount } from 'eros-ui/state';

export const AccountButton = ({ size = 32, style = null, ...rest }) => {
  const account = useAccount();
  const styles = useStyles();

  if (!account) {
    return (
      <Button style={[styles.joinButton, style]} text="JOIN" {...rest} />
    );
  }

  return (
    <TouchableOpacity style={[styles.accountButton, style]} {...rest}>
      <Avatar size={size} avatarUrl={account?.avatarUrl} />
    </TouchableOpacity>
  );
};

const useStyles = makeStyles(({
  unit, padding, borderColor, borderWidth,
}) => ({
  accountButton: { padding: unit },
  joinButton: {
    // padding,
    height: unit * 5,
    paddingHorizontal: 4,
    paddingVertical: padding,
    // marginVertical: unit,
    // borderRadius: unit * 4.5,
    // borderColor,
    // borderWidth,
    // overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default AccountButton;
