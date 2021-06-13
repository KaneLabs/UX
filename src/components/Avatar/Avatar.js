import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
  makeStyles, DEFAULT_AVATAR_URL, AVATAR_SIZE, canvas, unit, borderRadius, borderColor,
} from 'eros-ui/theme';

export const Avatar = ({
  source = null, avatarUrl = null, size = AVATAR_SIZE, style = null,
}) => {
  const sizeStyles = {
    height: size,
    width: size,
    borderRadius: size,
  };
  console.log('avatarUrl', avatarUrl);
  const styles = useStyles();
  const imageSource = source || { uri: avatarUrl || DEFAULT_AVATAR_URL };
  const avatarStyles = [sizeStyles, styles.avatarPaper, style];
  return <Image source={imageSource} style={avatarStyles} />;
};

const useStyles = makeStyles((theme) => ({
  avatarPaper: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor,
    backgroundColor: canvas,
    alignItems: 'center',
  },
}));

export default Avatar;
