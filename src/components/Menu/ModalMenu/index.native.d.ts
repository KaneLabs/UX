export default Modal;
declare class Modal extends React.Component<any, any, any> {
    static propTypes: {
        buttons: PropTypes.Requireable<PropTypes.ReactElementLike>;
        visible: PropTypes.Requireable<boolean>;
        onRequestClose: PropTypes.Requireable<(...args: any[]) => any>;
        onShow: PropTypes.Requireable<(...args: any[]) => any>;
        onBackdropPress: PropTypes.Requireable<(...args: any[]) => any>;
        containerStyle: PropTypes.Requireable<object>;
        NativeModalProps: PropTypes.Requireable<PropTypes.InferProps<PropTypes.ValidationMap<any>>>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        visible: boolean;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
import React from "react";
import PropTypes from "prop-types";
