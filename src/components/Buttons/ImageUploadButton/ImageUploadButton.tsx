import React from 'react';
import { closestAspectRatio } from 'eros-ui/fns';
import IconButton from '../../IconButton';

class ImageUploadButton extends React.Component {
  onChange = (e) => {
    e.preventDefault();
    const filesArray = Array.from(e.target.files);
    return this.handleFiles(filesArray);
  };

  handleFiles = async (files) => {
    const filesWithPresignedUrls = await this.getPresignedUrlsForFiles(files);

    const filesWithPreviews = await Promise.all(
      filesWithPresignedUrls.map(async (file) => {
        const {
          uri, height, width, aspectRatio,
        } = await this.analyzeFile(file);
        file.uri = uri;
        file.height = height;
        file.width = width;
        file.aspectRatio = aspectRatio;

        console.log('file', file);
        return file;
      }),
    );

    return this.props.renderPreviews(filesWithPreviews);
    // const uploadFiles = await Promise.all(filesWithURI.map(file => this.uploadFile(file)))
    // console.log('uploadFiles: ', uploadFiles);
  };

  getPresignedUrlsForFiles = async (files) => Promise.all(
    files.map(async (file) => {
      const { signedUrl, name } = await this.getPresignedUrl(file);

      file.signedUrl = signedUrl;
      file.s3Name = name;

      return file;
    }),
  );

  getPresignedUrl = async (file) => {
    const { data } = await this.props.mutate({ variables: { type: file.type, size: file.size } });

    return data.getPresignedUrl;
  };

  // upload = (postUrl, fieldName, filePath) => {
  //   const formData = new FormData();
  //   formData.append(fieldName, new File(filePath));
  //
  //   const req = new XMLHttpRequest();
  //   req.open("POST", postUrl);
  //   req.onload = (event) => { alert(event.target.responseText); };
  //   req.send(formData);
  // }

  analyzeFile = (file) => new Promise((resolve, reject) => {
    try {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const image = new Image();
        image.onload = () => {
          // const greatestCommonDivisor = gcd(image.width,image.height);

          const { aspectRatio, mustCrop } = closestAspectRatio({
            width: image.width,
            height: image.height,
          });

          resolve({
            height: image.height,
            width: image.width,
            uri: e.target.result,
            aspectRatio: image.width / image.height,
            closestAspectRatio: aspectRatio,
            mustCrop,
          });
        };

        image.src = e.target.result;
      };

      fileReader.readAsDataURL(file);
    } catch (e) {
      reject(e);
    }
  });

  render() {
    return <IconButton name="ios-image" />;
  }
}

export default ImageUploadButton;
