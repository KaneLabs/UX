export default Typography;
declare function Typography({
  text,
  children,
  style,
  gutter,
  type,
  ...rest
}: {
  [x: string]: any;
  text?: any;
  children?: any;
  style?: any;
  gutter?: any;
  type?: string | undefined;
}): JSX.Element;
