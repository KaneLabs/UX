import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ThemeProvider from 'eros-ui/theme/ThemeProvider';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    scroll: PropTypes.bool,
  };

  render() {
    const { style, children } = this.props;
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <ScrollView>{children}</ScrollView>
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
