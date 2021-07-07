import React from 'react';
import { View } from 'react-native';
import { storiesOf } from 'eros-ui-storybook/helpers/storiesOf';

import HeroSwiper from './HeroSwiper';
import Header from 'eros-ui-storybook/components/Header';
import Container from 'eros-ui-storybook/components/Container';

/* eslint-disable no-console */

export default storiesOf('Components|HeroSwiper', module)
  .addParameters({ jest: ['HeroSwiper'] })
  .add('HeroSwiper', () => (
    <Container>
      <Header title="Hero Swiper" />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <HeroSwiper />
      </View>
    </Container>
  ));
