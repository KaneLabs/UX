import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@kanelabs/ux-storybook/helpers/storiesOf';

import Container from '../Container';
import Paper from './Paper';
import Typography from '../Typography';
import TextField from '../TextField';
import Header from '@kanelabs/ux-storybook/components/Header';
// import Container from '@kanelabs/ux-storybook/components/Container';

/* eslint-disable no-console */

export default storiesOf('Components|Paper', module)
  .addParameters({ jest: ['Paper'] })
  .add('Paper', () => (
    <Container style={{ padding: 20 }}>
      <Paper>
        <TextField />
      </Paper>

      <Paper>
        <Typography text={'Paper'} />
      </Paper>
    </Container>
  ));
