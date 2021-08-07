import React, { Component } from 'react';
declare class MenuItem extends Component {
    constructor(props: any);
    handleHover(toggle: any): void;
    _renderIcon(): React.DetailedReactHTMLElement<{
        size: number;
        color: string;
    }, HTMLElement>;
    _renderKeyboardCommand(): JSX.Element;
    _renderText(): JSX.Element;
    render(): JSX.Element;
}
export default MenuItem;
