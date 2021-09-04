import React from 'react';
import { ImageBackground } from 'react-native';
import IconButton from '@kanelabs/ux/components/IconButton';
import { useTheme, makeStyles } from '@kanelabs/ux/theme';
import { useDimensions } from '@kanelabs/ux/state';

const ImagePreview = ({
  uri,
  aspectRatio,
  onRemove = () => alert('Remove File'),
}) => {
  const [{ FEED_WIDTH, gutter }] = useTheme();
  const { width } = useDimensions();
  const styles = useStyles();

  const sizeStyles = useMemo(() => {
    const imageWidth =
      (width - gutter) * 2 >= FEED_WIDTH
        ? FEED_WIDTH - gutter * 2
        : width - gutter * 2;
    const imageHeight = Math.floor(imageWidth / (16 / 9));
    return { width: imageWidth, height: imageHeight };
  }, [width]);

  return (
    <ImageBackground source={{ uri }} style={[styles.image, sizeStyles]}>
      <IconButton
        name="ios-close"
        onPress={onRemove}
        style={styles.closeButton}
        hoverStyle={styles.closeButtonHover}
        padding={4}
        size={28}
        color="rgba(255,255,255,0.95)"
      />
    </ImageBackground>
  );
};

const useStyles = makeStyles((theme) => ({
  container: { alignItems: 'center' },
  image: {
    borderRadius: theme.unit,
    overflow: 'hidden',
    alignItems: 'flex-end',
    marginHorizontal: theme.gutter,
    marginBottom: theme.gutter,
  },
  closeButton: { backgroundColor: 'rgba(0,0,0,0.85)', margin: theme.unit },
  closeButtonHover: { backgroundColor: 'rgba(0,0,0,0.75)', margin: theme.unit },
}));

export default ImagePreview;
