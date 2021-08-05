export default ImagePreview;
declare function ImagePreview({
  uri,
  aspectRatio,
  onRemove,
}: {
  uri: any;
  aspectRatio: any;
  onRemove?: (() => any) | undefined;
}): JSX.Element;
