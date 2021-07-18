export default MenuItem;
declare class MenuItem extends React.Component<any, any, any> {
    constructor(props: any);
    handleHover(toggle: any): void;
    _renderIcon(): React.DetailedReactHTMLElement<{
        size: number;
        color: string;
    }, HTMLElement>;
    _renderKeyboardCommand(): JSX.Element;
    _renderText(): JSX.Element;
}
declare namespace MenuItem {
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const disabled: PropTypes.Requireable<boolean>;
        const onPress: PropTypes.Requireable<(...args: any[]) => any>;
        const style: PropTypes.Requireable<object>;
        const textStyle: PropTypes.Requireable<object>;
        const icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const keyboardCommand: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const text: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const disabled_1: boolean;
        export { disabled_1 as disabled };
    }
}
import React from "react";
import PropTypes from "prop-types";
