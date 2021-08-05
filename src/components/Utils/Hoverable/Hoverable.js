import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

class Hoverable extends Component {
  static displayName = 'Hoverable';

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    onHoverIn: PropTypes.func,
    onHoverOut: PropTypes.func,
    testID: PropTypes.string,
  };

  state = {
    isHovered: false,
  };

  _handleMouseEnter = () => {
    if (!this.state.isHovered) {
      const { onHoverIn } = this.props;
      if (onHoverIn) {
        onHoverIn();
      }
      this.setState(() => ({ isHovered: true }));
    }
  };

  _handleMouseLeave = () => {
    if (this.state.isHovered) {
      const { onHoverOut } = this.props;
      if (onHoverOut) {
        onHoverOut();
      }
      this.setState(() => ({ isHovered: false }));
    }
  };

  _toggle = () => {
    if (this.state.isHovered) {
      this._handleMouseLeave();
    } else {
      this._handleMouseEnter();
    }
  };

  render() {
    const { children, testID } = this.props;

    const child =
      typeof children === 'function'
        ? children(this.state.isHovered)
        : children;

    if (Platform.OS === 'web') {
      return React.cloneElement(React.Children.only(child), {
        onMouseEnter: this._handleMouseEnter,
        onMouseLeave: this._handleMouseLeave,
      });
    }
    return (
      <TouchableWithoutFeedback onPress={this._toggle} testID={testID}>
        <View>
          {React.cloneElement(React.Children.only(child), {
            onMouseEnter: this._handleMouseEnter,
            onMouseLeave: this._handleMouseLeave,
          })}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Hoverable;
