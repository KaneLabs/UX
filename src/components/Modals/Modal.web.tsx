import React from 'react';
import { ScrollView, View } from 'react-native';
import { Backdrop } from '@kanelabs/ux/components';
import { makeStyles, useTheme } from '@kanelabs/ux/theme';

import { useDimensions } from '@kanelabs/ux/state';

export const Modal = (props) => {
  const {
    children,
    open = false,
    onClose,
    fullHeight = false,
    Header = null,
    Footer = null,
    Body = null,
  } = props;
  const { width, height, desktop } = useDimensions();
  const [{ FEED_WIDTH }] = useTheme();

  if (!open) {
    return null;
  }

  const modalWidth = desktop ? FEED_WIDTH : width;
  const gutterHorizontal = desktop ? (width - FEED_WIDTH) / 2 : 0;
  const gutterVertical = desktop
    ? fullHeight
      ? 0
      : Math.ceil(height * 0.1)
    : 0;
  const sizeStyles = {
    width: modalWidth,
    left: gutterHorizontal,
    right: gutterHorizontal,
    top: gutterVertical,
  };
  // const changingStyles = { height, left: gutter, right: gutter, width: modalWidth, ...desktopStyles};

  return (
    <>
      <Backdrop open darken blur onPress={() => onClose()} />
      <View style={[styles.contentContainer, sizeStyles]}>
        {Header}
        {Body}
        {children && (
          <ScrollView
            style={styles.scrollView}
            contentContainer={styles.scrollViewContent}>
            {children}
          </ScrollView>
        )}
        {Footer}
      </View>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    zIndex: 300,
    position: 'absolute',
    width: '100%',
    maxWidth: theme.FEED_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'scroll',
    overflowX: 'hidden',
    backgroundColor: theme.canvas,
    // borderRadius,
    // borderColor,
    // borderWidth,
    ...theme.shadow(8),
  },
  scrollView: { flex: 1, width: '100%', height: '100%' },
  scrollViewContent: { width: '100%', height: '100%' },
}));

export default Modal;
