import React from 'react';
import { View } from 'react-native';

import Typography from './Typography';

import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

export default storiesOf('Components|Typography', module)
  .addParameters({ jest: ['Typography'] })
  .add('Typography', () => (
    <Container>
      <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
        <Typography type="h1" text="Header One" />
        <Typography type="h2" text="Header Two" />
        <Typography type="h3" text="Header Three" />
        <Typography type="h4" text="Header Four" />
        <Typography type="h5" text="Header Five" />
        <Typography type="h6" text="Header Six" />

        <Typography type="subtitle1" text="Subtitle One" />
        <Typography type="subtitle2" text="Subtitle Two" />

        <Typography type="body1" text="Body One" />
        <Typography type="body2" text="Body Two" />

        <Typography type="caption" text="Caption" />
        <Typography type="overline" text="Overline" />
        <Typography type="button" text="BUTTON" />
      </View>
    </Container>
  ));
