import React from 'react';
declare class ImageUploadButton extends React.Component {
    onChange: (e: any) => Promise<any>;
    handleFiles: (files: any) => Promise<any>;
    getPresignedUrlsForFiles: (files: any) => Promise<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>;
    getPresignedUrl: (file: any) => Promise<any>;
    analyzeFile: (file: any) => Promise<unknown>;
    render(): JSX.Element;
}
export default ImageUploadButton;
