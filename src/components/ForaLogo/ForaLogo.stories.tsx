import React from 'react';
import { View } from 'react-native';
import { storiesOf } from 'eros-ui-storybook/helpers/storiesOf';

import ForaLogo from './ForaLogo';
import Header from 'eros-ui-storybook/components/Header';
import Container from 'eros-ui-storybook/components/Container';

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
