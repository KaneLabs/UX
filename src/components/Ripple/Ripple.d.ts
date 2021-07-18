export default class Ripple extends React.PureComponent<any, any, any> {
    static defaultProps: any;
    static propTypes: any;
    constructor(props: any);
    onLayout(event: any): void;
    onPress(event: any): void;
    onPressIn(event: any): void;
    onPressOut(event: any): void;
    onLongPress(event: any): void;
    onAnimationEnd(event: any): void;
    renderRipple({ unique, progress, locationX, locationY, R, }: {
        unique: any;
        progress: any;
        locationX: any;
        locationY: any;
        R: any;
    }): JSX.Element;
    unique: number;
    mounted: boolean;
    rippleFades: any;
    isPressingIn: boolean;
    animationWaitingForEnd: boolean;
    webGetPositionInElement: (e: any) => {
        x: number;
        y: number;
    };
    signalAnimationEnd(): void;
    forceAnimationEnd(): void;
    startRipple(event: any): void;
}
import React from "react";
