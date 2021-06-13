import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import HeroSwiper from './HeroSwiper';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';

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
