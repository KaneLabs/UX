/* eslint-disable no-param-reassign */

export const buildFileSelector = () => {
  try {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('accept', 'image/*');
    fileSelector.setAttribute('multiple', 'multiple');
    fileSelector.setAttribute('name', 'UploadImageInput');
    fileSelector.setAttribute('capture', 'environment');
    return fileSelector;
  } catch (e) {
    console.log('Must be in a browser');
    return null;
  }
};

export const buildVideoFileSelector = () => {
  try {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('accept', 'video/*');
    fileSelector.setAttribute('multiple', 'multiple');
    fileSelector.setAttribute('name', 'UploadVideoInput');
    fileSelector.setAttribute('capture', 'environment');
    return fileSelector;
  } catch (e) {
    console.log('Must be in a browser');
    return null;
  }
};

export const analyzeFile = (file) =>
  new Promise((resolve, reject) => {
    try {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const image = new Image();
        image.onload = () => {
          // const greatestCommonDivisor = gcd(image.width,image.height);

          // const { aspectRatio, mustCrop } = closestAspectRatio({
          //   width: image.width,
          //   height: image.height,
          // });

          resolve({
            height: image.height,
            width: image.width,
            uri: e.target.result,
            aspectRatio: image.width / image.height,
            // closestAspectRatio: aspectRatio,
            // mustCrop,
          });
        };

        image.src = e.target.result;
      };

      fileReader.readAsDataURL(file);
    } catch (e) {
      reject(e);
    }
  });

export const convertFilesToBase64 = async (files) => {
  // const filesWithPresignedUrls = await getPresignedUrlsForFiles(files);
  const filesWithBase64URI = await Promise.all(
    files.map(async (file) => {
      const { uri, height, width, aspectRatio } = await analyzeFile(file);
      // TODO: update this eventuallu uri can be confusing
      file.uri = uri;
      file.height = height;
      file.width = width;
      file.aspectRatio = aspectRatio;
      return file;
    }),
  );

  return filesWithBase64URI;
  // const uploadFiles = await Promise.all(filesWithURI.map(file => uploadFile(file)))
  // console.log('uploadFiles: ', uploadFiles);
};

export const signFile = (file) => async (createPresignedUrl) => {
  console.log({ file });
  const input = { filename: file.name, fileType: file.type };
  console.log({ input });
  try {
    const response = await createPresignedUrl({ variables: { input } });
    console.log({ response });
    const presignedUrl = response?.data?.CreatePresignedUrl?.presignedUrl;
    const url = response?.data?.CreatePresignedUrl?.url;
    const id = response?.data?.CreatePresignedUrl?.id;
    file.id = id;
    file.presignedUrl = presignedUrl;
    file.url = url;
    return file;
  } catch (e) {
    console.log({ signFileError: e });
  }
};
