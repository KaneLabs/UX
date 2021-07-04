import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import Hero from './Hero';
import Container from '../../../storybook/components/Container';
import SaintGeorgeHero from '../../assets/Saint_George-1080x1920.jpg';

/* eslint-disable no-console */

export default storiesOf('Components|Hero', module)
  .addParameters({ jest: ['Hero'] })
  .add('Hero', () => (
    <Container>
      <Hero source={SaintGeorgeHero} />
    </Container>
  ));
