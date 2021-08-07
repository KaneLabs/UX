declare const CardHeader: ({ children, title, subtitle, center, ...props }: {
    [x: string]: any;
    children: any;
    title?: null | undefined;
    subtitle?: null | undefined;
    center?: boolean | undefined;
}) => JSX.Element;
export default CardHeader;
