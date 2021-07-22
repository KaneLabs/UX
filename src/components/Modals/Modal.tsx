import React from 'react';
import { ScrollView, View } from 'react-native';
import { Backdrop } from 'eros-ui/components';
import { useTheme, makeStyles } from 'eros-ui/theme';

import { useDimensions } from 'eros-ui/state';

export const Modal = (props) => {
  const [{
    FEED_WIDTH, borderRadius, borderColor, borderWidth,
  }] = useTheme();

  const {
    children, open = false, onClose, fullHeight = false, Header, Footer, Body,
  } = props;
  const {
    width, height, mobile, desktop,
  } = useDimensions();

  if (!open) {
    return null;
  }

  const modalWidth = desktop ? FEED_WIDTH : width;
  const gutterHorizontal = desktop ? (width - FEED_WIDTH) / 2 : 0;
  const gutterVertical = desktop ? (fullHeight ? 0 : Math.ceil(height * 0.1)) : 0;
  const sizeStyles = {
    width: modalWidth,
    left: gutterHorizontal,
    right: gutterHorizontal,
    top: gutterVertical,
    bottom: gutterVertical,
  };
  // const changingStyles = { height, left: gutter, right: gutter, width: modalWidth, ...desktopStyles};

  return (
    <>
      <View style={[styles.contentContainer, sizeStyles]}>
        {Header && Header}
        <ScrollView style={styles.scrollView} contentContainer={styles.scrollViewContent}>
          {Body || children}
        </ScrollView>
        {Footer && Footer}
      </View>

      <Backdrop open darken blur onPress={() => onClose()} />
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
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: theme.borderRadius,
    borderColor: theme.borderColor,
    borderWidth: theme.borderWidth,
  },
  scrollView: { flex: 1, width: '100%', height: '100%' },
  scrollViewContent: { width: '100%', height: '100%' },
}));

export default Modal;