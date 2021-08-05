export default Container;
declare function Container({
  style,
  center,
  ...rest
}: {
  [x: string]: any;
  style?: any;
  center?: any;
}): JSX.Element;
