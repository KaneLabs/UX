import React, { ReactNode } from 'react';
import { TouchableOpacity, ViewStyle, ButtonProps as RNButtonProps } from 'react-native';
export interface ButtonProps extends Omit<RNButtonProps, 'title' | 'onPress'> {
    text?: string;
    children?: ReactNode;
    primary?: boolean;
    secondary?: boolean;
    style?: ViewStyle;
    fontStyle?: ViewStyle;
    title?: string;
    onPress?: () => void;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<TouchableOpacity>>;
export default Button;
