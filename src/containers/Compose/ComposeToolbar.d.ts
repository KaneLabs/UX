export default ComposeToolbar;
declare function ComposeToolbar({ onFiles, onSubmit, onVideoFiles, urlPreview, }: {
    onFiles?: (() => null) | undefined;
    onSubmit?: (() => null) | undefined;
    onVideoFiles?: (() => null) | undefined;
    urlPreview: any;
}): JSX.Element;
