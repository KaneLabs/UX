import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Typography, Button, Anchor } from 'eros-ui/components';
import ClassicalWaveImage from 'eros-ui/assets/ClassicalWave.jpg';
import { storiesOf } from '../helpers/storiesOf';

import Container from '../components/Container';

const styles = StyleSheet.create({
  center: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(10, 10, 10, 0.67)',
    fontWeight: '400',
    marginTop: 6,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 22,
  },
  initialText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    marginHorizontal: 'auto',
    maxWidth: 780,
  },
  textRow: {
    marginTop: 20,
    flexWrap: 'wrap',
    maxWidth: 780,
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: 'row',
  },
  secondButton: { marginLeft: 20 },
  logo: {
    width: 540,
    height: 540,
    resizeMode: 'cover',
    margin: 48,
  },
});

export default storiesOf('Docs|Start Here', module).add('Home', () => (
  <Container>
    <View style={styles.center}>
      <Image source={ClassicalWaveImage} style={styles.logo} />
    </View>

    <View style={styles.center}>
      <Typography type="h1" gutterBottom>Eros</Typography>
      <Typography type="h3" gutterBottom>Elite Experiences</Typography>
      <Typography type="h4" style={styles.header}>
        Cross Platform
      </Typography>
      <Typography>
        Build iOS, Android, and Web apps from the same codebase with React
        Native.
      </Typography>
    </View>
  </Container>
));
