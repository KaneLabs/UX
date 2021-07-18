export default class Anchor extends React.Component<any, any, any> {
    static propTypes: {
        url: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        target: PropTypes.Requireable<string>;
        testID: PropTypes.Requireable<string>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    handlePress: () => void;
}
import React from "react";
import PropTypes from "prop-types";
