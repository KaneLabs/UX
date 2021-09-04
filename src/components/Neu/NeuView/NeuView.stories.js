import React from 'react';

import { View } from 'react-native';
import Container from '@kanelabs/ux-storybook/components/Container';
import { storiesOf } from '@kanelabs/ux-storybook/helpers/storiesOf';
import NeuView from '.';

export default storiesOf('Experimental|Neumorphic', module)
  .addParameters({ jest: ['Neumorphic'] })
  .add('View', () => (
    <Container>
      <View style={{ flexWrap: 'wrap', flex: 1, backgroundColor: '#EEEEEE' }}>
        <NeuView
          style={{ margin: 16 }}
          color="#EEEEEE"
          height={100}
          width={100}
          borderRadius={16}
        />

        <NeuView
          style={{ margin: 16 }}
          color="#EEEEEE"
          height={100}
          width={100}
          borderRadius={16}
          inset
        />

        <NeuView
          style={{ margin: 16 }}
          color="#EEEEEE"
          height={100}
          width={100}
          borderRadius={16}
          convex
        />

        <NeuView
          style={{ margin: 16 }}
          color="#EEEEEE"
          height={100}
          width={100}
          borderRadius={16}
          concave
        />
      </View>
    </Container>
  ));
