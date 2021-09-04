import React, { useEffect, useRef, useCallback } from 'react';
import { buildFileSelector } from '@kanelabs/ux/fns';
import IconButton from '../../IconButton';

const ImageUploadButton = ({
  onFiles,
  renderPreviews,
  iconName = null,
  ...rest
}) => {
  const fileSelectorRef = useRef(null);

  const onFilesDetected = useCallback(
    (e) => {
      e.preventDefault();
      // FileList from multi inputs does not extend JS Array prototype so wont have array methods
      const filesArray = Array.from(e.target.files);
      return onFiles(filesArray);
      // return handleFiles(filesArray);
    },
    [onFiles],
  );

  useEffect(() => {
    fileSelectorRef.current = buildFileSelector();
    fileSelectorRef.current.addEventListener('change', onFilesDetected);
    return () => {
      if (fileSelectorRef.current) {
        fileSelectorRef.current.removeEventListener('change', onFilesDetected);
        fileSelectorRef.current.remove();
      }
    };
  }, [onFilesDetected]);

  // useEffect(() => {
  //   fileSelectorRef.current = buildFileSelector();
  //   fileSelectorRef.current.addEventListener('change', readFiles);
  //   return () => {
  //     if (fileSelectorRef.current) {
  //       fileSelectorRef.current.removeEventListener('change', readFiles);
  //       fileSelectorRef.current.remove();
  //     }
  //   };
  // }, []);

  const onPress = (e) => {
    e.preventDefault();
    // fileSelectorRef.current.remove();
    // fileSelectorRef.current = buildFileSelector();
    // fileSelectorRef.current.addEventListener('change', readFiles);
    fileSelectorRef.current.click();
  };

  // const getPresignedUrlsForFiles = async files =>
  //   Promise.all(
  //     files.map(async file => {
  //       const { signedUrl, name } = await getPresignedUrl(file);
  //
  //       file.signedUrl = signedUrl;
  //       file.s3Name = name;
  //
  //       return file;
  //     }),
  //   );

  const getPresignedUrl = async (file) => {
    // const { data } = await props.mutate({ variables: { type: file.type, size: file.size } });
    // return data.getPresignedUrl;
  };

  return (
    <IconButton name={iconName || 'ios-image'} onPress={onPress} {...rest} />
  );
};

export default ImageUploadButton;
