export default Tab;
declare function Tab({
  iconName,
  iconSize,
  text,
  row,
  ...props
}: {
  [x: string]: any;
  iconName: any;
  iconSize?: number | undefined;
  text?: any;
  row?: any;
}): JSX.Element;
