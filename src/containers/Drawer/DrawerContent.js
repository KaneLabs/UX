import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ME } from 'eros-ui/queries';
import DrawerHeader from './DrawerHeader';
import DrawerList from './DrawerList';
import DrawerFooter from './DrawerFooter';

export const DrawerContent = ({ navigation }) => {
  const { data: accountData } = useQuery(ME);
  const account = (accountData && accountData.me) || {};
  console.log('accountData', accountData);

  return (
    <>
      <DrawerHeader {...account} />
      <DrawerList account={account} navigation={navigation} />
      <DrawerFooter />
    </>
  );
};

export default DrawerContent;
