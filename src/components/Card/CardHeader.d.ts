export default CardHeader;
declare function CardHeader({
  children,
  title,
  subtitle,
  center,
  ...props
}: {
  [x: string]: any;
  children: any;
  title?: any;
  subtitle?: any;
  center?: boolean | undefined;
}): JSX.Element;
