import React from 'react';
import { View } from 'react-native';
import { withKnobs, text } from '@storybook/addon-knobs';

import TextField from './TextField';

import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

export default storiesOf('Components|TextField', module)
  .addParameters({ jest: ['TextField'] })
  .addDecorator(withKnobs)
  .add('TextField', () => (
    <Container>
      <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
        <TextField placeholder="Enter Text" value={text('Text', 'The spectacle before us was indeed sublime.')} />
      </View>
    </Container>
  ));
