export default class Modal extends React.Component<any, any, any> {
    static setAppElement(element: any): void;
    static propTypes: {
        animationType: PropTypes.Requireable<string>;
        visible: PropTypes.Requireable<boolean>;
        onShow: PropTypes.Requireable<(...args: any[]) => any>;
        onDismiss: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        ariaHideApp: PropTypes.Requireable<boolean>;
        appElement: PropTypes.Requireable<any>;
        containerStyle: PropTypes.Requireable<object>;
        onBackdropPress: PropTypes.Requireable<(...args: any[]) => any>;
        onLayout: PropTypes.Requireable<(...args: any[]) => any>;
        noBackDrop: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        animationType: string;
        visible: boolean;
        onShow: () => void;
        onDismiss: () => void;
        ariaHideApp: boolean;
        appElement: null;
    };
    constructor(props: any);
    handleShow(): void;
    handleClose(): void;
    getAnimationStyle(): (import("react-native").ViewStyle | import("react-native").ImageStyle | import("react-native").TextStyle)[] | ({
        display: string;
    } | {
        transform: {
            translateY: Animated.AnimatedInterpolation;
        }[];
    })[] | ({
        display: string;
    } | {
        opacity: Animated.Value;
    })[];
    animateFadeIn: (callback: any) => void;
    animateFadeOut: (callback: any) => void;
    animateSlideIn: (callback: any) => void;
    animateSlideOut: (callback: any) => void;
}
import React from "react";
import { Animated } from "react-native";
import PropTypes from "prop-types";
