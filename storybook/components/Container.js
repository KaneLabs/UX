import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import ThemeProvider from 'eros-ui/theme/ThemeProvider';
import { DimensionsProvider } from 'eros-ui/state/useDimensions';

export default class Container extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
    scroll: PropTypes.bool,
  };

  render() {
    const { style, scroll, children } = this.props;
    if (scroll) {
      return (
        <DimensionsProvider>
          <ThemeProvider>
            <ScrollView>
              <View style={[styles.container, style]}>{children}</View>
            </ScrollView>
          </ThemeProvider>
        </DimensionsProvider>
      );
    }
    return (
      <DimensionsProvider>
        <ThemeProvider>
          <View style={[styles.container, style]}>{children}</View>
        </ThemeProvider>
      </DimensionsProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    // backgroundColor: 'rgb(30,30,30)',
  },
});
