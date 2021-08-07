declare const Multiline: ({ mobile, flat, style, autoFocus, onChangeText, ...props }: {
    [x: string]: any;
    mobile?: boolean | undefined;
    flat?: boolean | undefined;
    style: any;
    autoFocus?: boolean | undefined;
    onChangeText?: ((text: string) => null) | undefined;
}) => JSX.Element;
export default Multiline;
