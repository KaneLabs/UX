import React from 'react';
import { View } from 'react-native';
import { storiesOf } from 'eros-ui-storybook/helpers/storiesOf';

import Container from '../Container';
import Paper from './Paper';
import Typography from '../Typography';
import Header from 'eros-ui-storybook/components/Header';
// import Container from 'eros-ui-storybook/components/Container';

/* eslint-disable no-console */

export default storiesOf('Components|Paper', module)
  .addParameters({ jest: ['Paper'] })
  .add('Paper', () => (
    <Container style={{ padding: 20 }}>
      <Paper />
      <Paper>
        <Typography text={'Paper'} />
      </Paper>
    </Container>
  ));
