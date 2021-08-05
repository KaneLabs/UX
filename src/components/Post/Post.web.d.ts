export function Post({
  id,
  persona,
  content,
  media,
  createdAt,
  friendlyUrl,
  likes,
  liked,
  mobile,
  width,
  ...props
}: {
  [x: string]: any;
  id: any;
  persona: any;
  content: any;
  media: any;
  createdAt: any;
  friendlyUrl: any;
  likes: any;
  liked: any;
  mobile?: boolean | undefined;
  width: any;
}): JSX.Element;
export default Post;
