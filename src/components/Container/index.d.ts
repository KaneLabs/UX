import React from 'react';
import { ViewProps } from 'react-native';
export interface ContainerProps extends ViewProps {
    center?: boolean;
}
declare const Container: React.FC<ContainerProps>;
export default Container;
