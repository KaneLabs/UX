import React from 'react';
import { View } from 'react-native';

// One thing to be aware of is that if a style attribute is passed through onHover but is not in the style prop, it will not be overwritten onMouseLeave. (That's why backgroundColor: 'transparent' is set in the style prop of the example)

declare module 'react-native' {
  interface View {
    onMouseEnter?: () => any;
    onMouseLeave?: () => any;
  }
}

const HoverableView = (props) => {
  const { onHover, style, ...rest } = props;
  const viewRef = React.useRef(null);

  const setStyles = React.useCallback((styles) => {
    viewRef?.current.setNativeProps(styles);
  }, []);

  return (
    <View
      ref={viewRef}
      onMouseEnter={() => setStyles(onHover)}
      onMouseLeave={() => setStyles(style)}
      style={style}
      {...rest}
    />
  );
};

export default HoverableView;
