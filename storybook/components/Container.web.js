import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    scroll: PropTypes.bool,
  };

  render() {
    const { style, children } = this.props;
    return (
        <View style={styles.container}>
          <ScrollView>{children}</ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
  },
});
