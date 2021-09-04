import React from 'react';
import { View } from 'react-native';
import { withKnobs, text } from '@storybook/addon-knobs';

import Typography from './Typography';
import { TypographyTypes } from '@kanelabs/ux/theme';

import Container from '@kanelabs/ux-storybook/components/Container';
import { storiesOf } from '@kanelabs/ux-storybook/helpers/storiesOf';

const TypographyStories = () => {
  const Text = text('Text', 'The spectacle before us was indeed sublime.');
  return (
    <Container style={{ padding: 64 }}>
      <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
        <Typography type={TypographyTypes.h1} text={Text} />
        <Typography type={TypographyTypes.h2} text={Text} />
        <Typography type={TypographyTypes.h3} text={Text} />
        <Typography type={TypographyTypes.h4} text={Text} />
        <Typography type={TypographyTypes.h5} text={Text} />
        <Typography type={TypographyTypes.h6} text={Text} />

        <Typography type={TypographyTypes.subtitle1} text={Text} />
        <Typography type={TypographyTypes.subtitle2} text={Text} />

        <Typography type={TypographyTypes.body1} text={Text} />
        <Typography type={TypographyTypes.body2} text={Text} />

        <Typography type={TypographyTypes.caption} text={Text} />
        <Typography type={TypographyTypes.overline} text={Text} />
        <Typography type={TypographyTypes.button} text={Text} />
      </View>
    </Container>
  );
};

export default storiesOf('Components|Typography', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Typography'] })
  .add('Typography', TypographyStories);
