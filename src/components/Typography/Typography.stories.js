import React from 'react';
import { View } from 'react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withDocs } from '@storybook/addon-docs';

import Typography from './Typography';

import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

const TypographyStories = () => {
  const Text = text('Text', 'The spectacle before us was indeed sublime.');
  return (
    <Container style={{ padding: 64 }}>
      <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
        <Typography type="h1" text={Text} />
        <Typography type="h2" text={Text} />
        <Typography type="h3" text={Text} />
        <Typography type="h4" text={Text} />
        <Typography type="h5" text={Text} />
        <Typography type="h6" text={Text} />

        <Typography type="subtitle1" text={Text} />
        <Typography type="subtitle2" text={Text} />

        <Typography type="body1" text={Text} />
        <Typography type="body2" text={Text} />

        <Typography type="caption" text={Text} />
        <Typography type="overline" text={Text} />
        <Typography type="button" text={Text} />
      </View>
    </Container>
  );
};

export default storiesOf('Components|Typography', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Typography'] })
  .add('Typography', TypographyStories);
