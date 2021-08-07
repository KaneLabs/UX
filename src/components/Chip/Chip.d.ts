import React from 'react';
import { ViewStyle } from 'react-native';
import { PaperProps } from 'eros-ui/components/Paper';
export interface ChipProps extends PaperProps {
    text?: string;
    flat?: boolean;
    style?: ViewStyle;
    hoverStyle?: ViewStyle;
    focusStyle?: ViewStyle;
    onPress?: () => void;
}
declare const Chip: React.FC<ChipProps>;
export default Chip;
