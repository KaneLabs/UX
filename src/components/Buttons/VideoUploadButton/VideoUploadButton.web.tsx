import React, { useEffect, useRef, useCallback } from 'react';
import IconButton from '@kanelabs/ux/components/IconButton';

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

export const VideoUploadButton = ({
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
    fileSelectorRef.current = buildVideoFileSelector();
    fileSelectorRef.current.addEventListener('change', onFilesDetected);
    return () => {
      if (fileSelectorRef.current) {
        fileSelectorRef.current.removeEventListener('change', onFilesDetected);
        fileSelectorRef.current.remove();
      }
    };
  }, [onFilesDetected]);

  // useEffect(() => {
  //   fileSelectorRef.current = buildVideoFileSelector();
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
    // fileSelectorRef.current = buildVideoFileSelector();
    // fileSelectorRef.current.addEventListener('change', readFiles);
    fileSelectorRef.current.click();
  };

  return (
    <IconButton
      name={iconName || 'ios-videocam-outline'}
      onPress={onPress}
      {...rest}
    />
  );
};

export default VideoUploadButton;
