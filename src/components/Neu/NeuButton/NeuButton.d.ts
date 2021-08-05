export default NeuButton;
declare function NeuButton(props: any): JSX.Element;
declare namespace NeuButton {
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
    isConvex: PropTypes.Requireable<boolean>;
    active: PropTypes.Requireable<boolean>;
    noPressEffect: PropTypes.Requireable<boolean>;
    onPress: PropTypes.Requireable<(...args: any[]) => any>;
    onPressIn: PropTypes.Requireable<(...args: any[]) => any>;
    onPressOut: PropTypes.Requireable<(...args: any[]) => any>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
  };
}
import PropTypes from 'prop-types';
