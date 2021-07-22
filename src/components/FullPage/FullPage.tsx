import React from 'react';
import { Dimensions, View } from 'react-native';

import { NAV_HEIGHT, appBackgroundColor } from 'eros-ui/theme';

const { height, width } = Dimensions.get('window');

const fullPageStyle = { height: '100%', width: '100%' };

const FullPage = ({
  children, center = false, padding = 16, hero, style = {},
}) => {
  const centeredStyle = center ? {
    alignItems: 'center',
    justifyContent: 'center',
  } : {};

  const paddingStyle = {
    padding: hero ? 0 : padding,
  };

  const overridingStyles = {
    ...style,
    ...centeredStyle,
    ...paddingStyle,
  };

  const overridedStyle = [fullPageStyle, overridingStyles];

  return <View style={overridedStyle}>{children}</View>;
};

export default FullPage;
