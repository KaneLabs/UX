import * as React from 'react';
import { ButtonProps } from 'react-native';
interface ToggleLockButton extends ButtonProps {
    lock?: boolean;
}
declare const ToggleLockButton: React.FC<ToggleLockButton>;
export default ToggleLockButton;
