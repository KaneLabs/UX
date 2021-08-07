import React, { ReactNode } from 'react';
import { ViewStyle, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';
declare module 'react-native' {
    interface Paper {
        onMouseEnter?: () => void;
        onMouseLeave?: () => void;
    }
}
export interface PaperProps extends TouchableWithoutFeedbackProps {
    children?: ReactNode;
    style?: ViewStyle;
    shadow?: number;
    onPress?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    fullWidth?: boolean;
}
declare const Paper: React.ForwardRefExoticComponent<PaperProps & React.RefAttributes<TouchableWithoutFeedback>>;
export default Paper;
