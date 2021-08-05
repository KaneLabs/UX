import * as React from 'react';
import { ButtonProps } from 'react-native';
import IconButton from '../../IconButton';

interface ToggleLockButton extends ButtonProps {
  lock?: boolean;
}

const ToggleLockButton: React.FC<ToggleLockButton> = ({
  lock = false,
  ...rest
}) => (
  <IconButton
    name={lock ? 'ios-lock-outline' : 'ios-unlock-outline'}
    {...rest}
  />
);

export default ToggleLockButton;
