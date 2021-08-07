import * as React from 'react';
import { TextInput, TextInputProps, ViewStyle } from 'react-native';
interface TextFieldProps extends TextInputProps {
    flat?: boolean;
    fullWidth?: boolean;
    hoverStyle?: ViewStyle;
    focusStyle?: ViewStyle;
    children?: React.ReactNode;
}
declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<TextInput>>;
export default TextField;
