import React from 'react';
import { View } from 'react-native';

import TextField from './TextField';

import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

export default storiesOf('Components|TextField', module)
  .addParameters({ jest: ['TextField'] })
  .add('TextField', () => (
    <Container>
      <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
        <TextField placeholder="Enter Text" />
      </View>
    </Container>
  ));
