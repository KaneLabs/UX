declare module 'react-native' {
    interface View {
        onMouseEnter?: () => any;
        onMouseLeave?: () => any;
    }
}
declare const HoverableView: (props: any) => JSX.Element;
export default HoverableView;
