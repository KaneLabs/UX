import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import Container from 'eros-ui-storybook/components/Container';
import { storiesOf } from 'eros-ui-storybook/helpers/storiesOf';
import NeuButton from './NeuButton';

export default storiesOf('Experimental|Neumorphic', module)
  .addParameters({ jest: ['Neumorphic'] })
  .add('Button', () => {
    return (
      <Container>
        <View style={{ flexWrap: 'wrap', flex: 1, backgroundColor: '#EEEEEE' }}>
          <NeuButton
            color="#EEEEEE"
            width={100}
            height={100}
            borderRadius={16}
            style={{ margin: 30 }}>
            <Text>Normal Btn</Text>
          </NeuButton>

          <NeuButton
            color="#EEEEEE"
            width={100}
            height={100}
            borderRadius={16}
            isConvex
            style={{ margin: 30 }}>
            <Text>Convex Btn</Text>
          </NeuButton>

          <NeuButton
            color="#EEEEEE"
            width={100}
            height={100}
            borderRadius={16}
            active
            style={{ margin: 30 }}>
            <Text>Active Btn</Text>
          </NeuButton>
        </View>
      </Container>
    );
  });
