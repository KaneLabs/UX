import React from 'react';
import { View } from 'react-native';

import Chip from './Chip';

import Container from 'eros-ui-storybook/components/Container';
import { storiesOf } from 'eros-ui-storybook/helpers/storiesOf';

export default storiesOf('Components|Chip', module)
  .addParameters({ jest: ['Chip'] })
  .add('Chip', () => (
    <Container>
      <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
        <Chip text="Default" />
      </View>
    </Container>
  ));
