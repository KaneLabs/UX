export default NeuSpinner;
declare function NeuSpinner(props: any): JSX.Element;
declare namespace NeuSpinner {
    const propTypes: {
        color: PropTypes.Validator<string>;
        width: PropTypes.Validator<number>;
        height: PropTypes.Validator<number>;
        radius: PropTypes.Requireable<number>;
        customLightShadow: PropTypes.ValidationMap<import("react-native").ViewProps>;
        customDarkShadow: PropTypes.ValidationMap<import("react-native").ViewProps>;
        borderRadius: PropTypes.Requireable<number>;
        customGradient: PropTypes.Requireable<any[]>;
        style: PropTypes.ValidationMap<import("react-native").ViewProps>;
        containerStyle: PropTypes.ValidationMap<import("react-native").ViewProps>;
        inset: PropTypes.Requireable<boolean>;
        convex: PropTypes.Requireable<boolean>;
        concave: PropTypes.Requireable<boolean>;
        noShadow: PropTypes.Requireable<boolean>;
        indicatorColor: PropTypes.Validator<string>;
        duration: PropTypes.Requireable<number>;
        size: PropTypes.Validator<number>;
        easingType: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
import PropTypes from "prop-types";
