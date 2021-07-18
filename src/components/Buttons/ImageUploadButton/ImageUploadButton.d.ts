export default ImageUploadButton;
declare class ImageUploadButton extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    onChange: (e: any) => Promise<any>;
    handleFiles: (files: any) => Promise<any>;
    getPresignedUrlsForFiles: (files: any) => Promise<[any, any, any, any, any, any, any, any, any, any]>;
    getPresignedUrl: (file: any) => Promise<any>;
    analyzeFile: (file: any) => Promise<any>;
}
import React from "react";
