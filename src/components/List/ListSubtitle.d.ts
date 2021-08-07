import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface ListSubtitleProps {
    dense?: boolean;
    text?: string;
    style?: StyleProp<ViewStyle>;
}
declare const ListSubtitle: React.FC<ListSubtitleProps>;
export default ListSubtitle;
