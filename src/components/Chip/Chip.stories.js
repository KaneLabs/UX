import React from 'react';
import { View } from 'react-native';

import Chip from './Chip';

import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

export default storiesOf('Components|Chip', module)
  .addParameters({ jest: ['Chip'] })
  .add('Chip', () => (
    <Container>
      <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
        <Chip text="Default" />
      </View>
    </Container>
  ));
