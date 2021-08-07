import * as React from 'react';
import { ContainerProps } from 'eros-ui/components/Container';
interface ScreenProps extends ContainerProps {
    padded?: boolean;
}
declare const Screen: React.FC<ScreenProps>;
export default Screen;
