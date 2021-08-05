export default Multiline;
declare function Multiline({
  mobile,
  flat,
  style,
  autoFocus,
  onChangeText,
  ...props
}: {
  [x: string]: any;
  mobile?: boolean | undefined;
  flat?: boolean | undefined;
  style: any;
  autoFocus?: boolean | undefined;
  onChangeText?: (() => null) | undefined;
}): JSX.Element;
