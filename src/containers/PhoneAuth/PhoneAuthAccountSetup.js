import React from 'react';
// import { StyleSheet } from 'react-native';
import { UpdateAccount } from 'eros-ui/components';
import { ACCOUNT } from 'eros-ui/queries';
import { useQuery } from '@apollo/client';
import { makeStyles } from 'eros-ui/theme';
import AccountSetupHeadline from './AccountSetupHeadline';

export const PhoneAuthAccountSetup = ({ onSuccess }) => {
  const { data: accountData } = useQuery(ACCOUNT);
  const account = accountData && accountData.account;
  console.log('accountData', accountData);
  const last12 = account.id.slice(-12);
  return (
    <>
      <AccountSetupHeadline last12={last12} />
      <UpdateAccount onSuccess={onSuccess} />
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.FEED_WIDTH,
    paddingVertical: theme.NAV_HEIGHT,
    paddingHorizontal: 32,
  },
}));

export default PhoneAuthAccountSetup;
