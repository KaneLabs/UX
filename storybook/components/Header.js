import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Typography } from 'eros-ui/components';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  };

  render() {
    const { title, subtitle } = this.props;
    return (
      <View style={styles.container}>
        <Typography type={'h4'} align="center">
          {title}
        </Typography>
        {subtitle ? (
          <Typography type={'subtitle1'} style={[styles.subtitle]}>
            {subtitle}
          </Typography>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
  subtitle: {
    marginTop: 40,
  },
});
