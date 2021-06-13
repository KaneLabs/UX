import React from 'react';
import { View } from 'react-native';

// One thing to be aware of is that if a style attribute is passed through onHover but is not in the style prop, it will not be overwritten onMouseLeave. (That's why backgroundColor: 'transparent' is set in the style prop of the example)

class HoverableView extends React.Component {
  setStyles = (styles) => {
    this.root.setNativeProps({
      style: styles,
    });
  }

  render() {
    const { onHover, style, ...passThrough } = this.props;
    return (
      <View
        ref={(component) => { this.root = component; }}
        onMouseEnter={() => this.setStyles(onHover)}
        onMouseLeave={() => this.setStyles(style)}
        style={style}
        {...passThrough}
      />
    );
  }
}

export default HoverableView;
