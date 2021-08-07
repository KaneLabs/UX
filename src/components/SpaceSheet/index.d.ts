import * as React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
export interface SpaceSheetProps extends TouchableWithoutFeedbackProps {
    shadow?: number;
}
declare const SpaceSheet: React.FC<SpaceSheetProps>;
export default SpaceSheet;
