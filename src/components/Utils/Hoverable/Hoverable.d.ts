export default Hoverable;
declare class Hoverable extends React.Component<any, any, any> {
    static displayName: string;
    static propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        onHoverIn: PropTypes.Requireable<(...args: any[]) => any>;
        onHoverOut: PropTypes.Requireable<(...args: any[]) => any>;
        testID: PropTypes.Requireable<string>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    _handleMouseEnter: () => void;
    _handleMouseLeave: () => void;
    _toggle: () => void;
}
import React from "react";
import PropTypes from "prop-types";
