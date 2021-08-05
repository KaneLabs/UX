import React from 'react';
import { Image } from 'react-native';
import { BodyText, View, Video } from 'eros-ui/components';
import { makeStyles, useTheme } from 'eros-ui/theme';

const PostContentBlockImage = ({ uri, aspectRatio, width }) => {
  const [{ gutter, FEED_WIDTH }] = useTheme();
  const styles = useStyles();

  const imageWidth =
    width - gutter * 2 >= FEED_WIDTH
      ? FEED_WIDTH - gutter * 2
      : width - gutter * 2;
  const imageHeight = Math.floor(imageWidth / (16 / 9));
  const sizeStyles = { width: imageWidth, height: imageHeight };

  return (
    <View style={styles.contentBlockContainer}>
      <Image source={{ uri }} style={[styles.contentBlockImage, sizeStyles]} />
    </View>
  );
};

export const PostContentBlock = ({
  width,
  type,
  text,
  uri,
  mobile = false,
}) => {
  if (type === 'Image') {
    return <PostContentBlockImage uri={uri} width={width} />;
  }
  if (type === 'Video') {
    return (
      <Video controls src={uri} style={{ height: 'auto', width: '100%' }} />
    );
  }

  return (
    <BodyText
      text={text}
      style={[styles.contentBlockText, mobile ? styles.mobile : styles.desktop]}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  contentBlockText: {
    paddingLeft: theme.gutter,
    paddingRight: theme.gutter,
    paddingBottom: theme.gutter,
  },
  contentBlockContainer: {
    paddingLeft: theme.gutter,
    paddingRight: theme.gutter,
    paddingBottom: theme.gutter,
  },
  contentBlockImage: {
    borderRadius: theme.gutter,
    borderWidth: theme.borderWidth,
    borderColor: theme.borderColor,
  },
  mobile: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '300',
  },
  desktop: {
    fontSize: 21,
    lineHeight: 32,
    fontWeight: '300',
  },
}));

export default PostContentBlock;
