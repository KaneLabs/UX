import React from 'react';

import { View } from 'react-native';
import NeuSwitch from './NeuSwitch';

import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

const SwitchStory = () => {
  const [isPressed, setIsPressed] = React.useState(true);
  return (
    <View style={{ backgroundColor: '#EEEEEE', flexWrap: 'wrap', flex: 1 }}>
      <View style={{ padding: 30 }}>
        <NeuSwitch
          isPressed={isPressed}
          setIsPressed={() => setIsPressed((prev) => !prev)}
          color="#EEEEEE"
          containerHeight={40}
          containerWidth={80}
          buttonHeight={40}
          buttonWidth={45}
        />
      </View>

      <View style={{ padding: 30 }}>
        <NeuSwitch
          isPressed={isPressed}
          setIsPressed={() => setIsPressed((prev) => !prev)}
          color="#EEEEEE"
          containerHeight={40}
          containerWidth={80}
          buttonHeight={40}
          buttonWidth={45}
          customGradient={['#fc6859', '#e945d0']}
        />
      </View>
    </View>
  );
};

export default storiesOf('Experimental|Neumorphic', module)
  .addParameters({ jest: ['Neumorphic'] })
  .add('Switch', () => {
    return (
      <Container>
        <SwitchStory />
      </Container>
    );
  });
