import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import ForaLogo from './ForaLogo';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';

/* eslint-disable no-console */

export default storiesOf('Components|ForaLogo', module)
  .addParameters({ jest: ['ForaLogo'] })
  .add('ForaLogo', () => (
    <Container>
      <Header title="ForaLogo" />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <ForaLogo />
      </View>
    </Container>
  ));
