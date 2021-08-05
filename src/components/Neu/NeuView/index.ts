export default NeuView;
declare function NeuView(props: any): JSX.Element;
declare namespace NeuView {
  namespace propTypes {
    export const color: PropTypes.Validator<string>;
    export const width: PropTypes.Validator<number>;
    export const height: PropTypes.Validator<number>;
    export const radius: PropTypes.Requireable<number>;
    export { ViewPropTypes as customLightShadow };
    export { ViewPropTypes as customDarkShadow };
    export const borderRadius: PropTypes.Requireable<number>;
    export const customGradient: PropTypes.Requireable<any[]>;
    export { ViewPropTypes as style };
    export { ViewPropTypes as containerStyle };
    export const inset: PropTypes.Requireable<boolean>;
    export const convex: PropTypes.Requireable<boolean>;
    export const concave: PropTypes.Requireable<boolean>;
    export const noShadow: PropTypes.Requireable<boolean>;
  }
}
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
