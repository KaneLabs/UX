export default NeuSwitch;
declare function NeuSwitch(props: any): JSX.Element;
declare namespace NeuSwitch {
  const propTypes: {
    color: PropTypes.Validator<string>;
    width: PropTypes.Validator<number>;
    height: PropTypes.Validator<number>;
    radius: PropTypes.Requireable<number>;
    customLightShadow: PropTypes.ValidationMap<
      import('react-native').ViewProps
    >;
    customDarkShadow: PropTypes.ValidationMap<import('react-native').ViewProps>;
    borderRadius: PropTypes.Requireable<number>;
    customGradient: PropTypes.Requireable<any[]>;
    style: PropTypes.ValidationMap<import('react-native').ViewProps>;
    containerStyle: PropTypes.ValidationMap<import('react-native').ViewProps>;
    inset: PropTypes.Requireable<boolean>;
    convex: PropTypes.Requireable<boolean>;
    concave: PropTypes.Requireable<boolean>;
    noShadow: PropTypes.Requireable<boolean>;
    isPressed: PropTypes.Validator<boolean>;
    setIsPressed: PropTypes.Validator<(...args: any[]) => any>;
    containerWidth: PropTypes.Validator<number>;
    containerHeight: PropTypes.Validator<number>;
    buttonWidth: PropTypes.Validator<number>;
    buttonHeight: PropTypes.Validator<number>;
  };
}
import PropTypes from 'prop-types';
