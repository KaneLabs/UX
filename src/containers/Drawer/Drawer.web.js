import React from 'react';
import { useAccount } from '@kanelabs/ux/state';
import DrawerToolbar from './DrawerToolbar';

export const Drawer = ({ mobile = false }) => {
  const account = useAccount();

  if (account && account.handle && !mobile) {
    return <DrawerToolbar />;
  }
  return null;
};

export default Drawer;
