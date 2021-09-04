import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { FEED_WIDTH, unit, makeStyles } from '@kanelabs/ux/theme';

const gutter = unit * 2;

const Carousel = ({ media = [], sizeStyles }) => (
  <View style={styles.carousel}>
    {media.map((mediaFile) => (
      <Image
        source={{ uri: mediaFile.uri }}
        style={[styles.image, sizeStyles]}
      />
    ))}
  </View>
);

export const PostMedia = ({ media = [], width, mobile = false }) => {
  if (media.length === 0) return null;

  const imageWidth = width - gutter * 2;
  const imageHeight = width - gutter * 2;
  const sizeStyles = { width: imageWidth, height: imageHeight };

  if (media.length === 1) {
    return (
      <Image
        source={{ uri: media[0].uri }}
        style={[styles.image, sizeStyles]}
      />
    );
  }
  return <Carousel media={media} sizeStyles={sizeStyles} />;
};

const useStyles = makeStyles((theme) => ({
  carousel: {
    overflow: 'hidden',
    flexDirection: 'row',
  },
  image: {
    marginHorizontal: theme.gutter,
    marginBottom: theme.gutter,
    maxWidth: theme.FEED_WIDTH - theme.gutter * 2,
    maxHeight: theme.FEED_WIDTH - theme.gutter * 2,
    borderRadius: unit * 2,
    overflow: 'hidden',
  },
}));

export default PostMedia;
