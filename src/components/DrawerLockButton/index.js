import React from 'react';
import IconButton from '../IconButton';

export const DrawerLockButton = ({ lock, ...rest }) => (
  <IconButton
    name={lock ? 'ios-lock-outline' : 'ios-unlock-outline'}
    {...rest}
  />
);

export default DrawerLockButton;
