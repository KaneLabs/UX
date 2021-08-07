import * as React from 'react';
import { ViewProps } from 'react-native';
export interface RowProps extends ViewProps {
    center?: boolean;
    fullWidth?: boolean;
}
export declare const Row: React.FC<RowProps>;
export default Row;
