import React from 'react';
import { View } from 'react-native';
import { text } from '@storybook/addon-knobs';

import Container from '@kanelabs/ux-storybook/components/Container';
import { storiesOf } from '@kanelabs/ux-storybook/helpers/storiesOf';
import TextField from './TextField';

export default storiesOf('Components|TextField', module)
  .addParameters({ jest: ['TextField'] })
  .add('TextField', () => (
    <Container>
      <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
        <TextField
          placeholder="Enter Text"
          value={text('Text', 'The spectacle before us was indeed sublime.')}
        />
      </View>
    </Container>
  ));
