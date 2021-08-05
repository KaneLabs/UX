export default NeuInput;
declare function NeuInput(props: any): JSX.Element;
declare namespace NeuInput {
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
    textStyle: PropTypes.Requireable<object>;
    placeholder: PropTypes.Requireable<string>;
    onChangeText: PropTypes.Validator<(...args: any[]) => any>;
    value: PropTypes.Validator<string>;
  };
}
import PropTypes from 'prop-types';
