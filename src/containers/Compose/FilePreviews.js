import React from 'react';
// import { StyleSheet, ImageBackground } from 'react-native';
import { View } from '@kanelabs/ux/components';
import { makeStyles } from '@kanelabs/ux/theme';
// import { useDimensions } from '@kanelabs/ux/state';
import ImagePreview from './ImagePreview';

export const FilePreviews = ({
  files = [],
  onRemove = () => alert('Remove File'),
}) => {
  // const { width } = useDimensions();
  // const imageWidth = width - gutter * 2;
  // const imageHeight = (imageWidth * 9) / 16;
  // const sizeStyles = { width: imageWidth, height: imageHeight };
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {files.map((file, fileIndex) => (
        <ImagePreview uri={file.uri} onRemove={() => onRemove(fileIndex)} />
      ))}
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: { alignItems: 'center' },
  image: {
    maxWidth: theme.FEED_WIDTH - theme.gutter * 2,
    borderRadius: theme.unit,
    overflow: 'hidden',
    alignItems: 'flex-end',
  },
  closeButton: { backgroundColor: 'rgba(0,0,0,0.85)', margin: theme.unit },
  closeButtonHover: { backgroundColor: 'rgba(0,0,0,0.75)', margin: theme.unit },
}));

export default FilePreviews;
