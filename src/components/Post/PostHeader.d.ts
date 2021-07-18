export function PostAvatarButton({ avatarUrl, onPress }: {
    avatarUrl: any;
    onPress?: (() => null) | undefined;
}): JSX.Element;
export function InlineSpacer(): JSX.Element;
export function PostHeaderHeadline({ display, handle, createdAt, location, }: {
    display: any;
    handle: any;
    createdAt: any;
    location?: any;
}): JSX.Element;
export function PostHeader({ avatarUrl, display, handle, createdAt, }: {
    avatarUrl: any;
    display: any;
    handle: any;
    createdAt: any;
}): JSX.Element;
export default PostHeader;
