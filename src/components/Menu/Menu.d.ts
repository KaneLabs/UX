import { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
declare class Menu extends Component {
    static propTypes: {
        button: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        visible: PropTypes.Requireable<boolean>;
        menuStyle: PropTypes.Requireable<object>;
        sameWidth: PropTypes.Requireable<boolean>;
        onBackdropPress: PropTypes.Requireable<(...args: any[]) => any>;
        modalMenuStyle: PropTypes.Requireable<object>;
        contentContainerStyle: PropTypes.Requireable<object>;
        noBackDrop: PropTypes.Requireable<boolean>;
        tooltip: PropTypes.Requireable<boolean>;
        tooltipPosition: PropTypes.Requireable<string>;
        testID: PropTypes.Requireable<string>;
        fullWidth: PropTypes.Requireable<boolean>;
    };
    state: {
        menuHeight: Animated.Value;
        menuWidth: Animated.Value;
        opacity: Animated.Value;
        modalMenuWidth: number;
        easing: import("react-native").EasingFunction;
        animationDuration: number;
        expanded: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    onModalMenuLayout: (e: any) => void;
    onButtonLayout: (e: any) => void;
    onMenuLayout: (e: any) => void;
    toggle(): void;
    render(): JSX.Element;
}
export default Menu;
