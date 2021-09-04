import * as React from 'react';
import { ContainerProps } from '@kanelabs/ux/components/Container';
interface ScreenProps extends ContainerProps {
    padded?: boolean;
}
declare const Screen: React.FC<ScreenProps>;
export default Screen;
