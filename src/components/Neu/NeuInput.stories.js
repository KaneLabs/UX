import React from 'react';

import { View, TextInput } from 'react-native';
import NeuInput from './NeuInput';
import NeuView from './NeuView';

import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';
import ForaLogo from '../ForaLogo';

const InputStory = () => {
  const [text, setText] = React.useState('');
  return (
    <View style={{ backgroundColor: '#EEEEEE', flexWrap: 'wrap' }}>
      <NeuView
        style={{ margin: 16 }}
        color="#EEEEEE"
        height={40}
        width={240}
        borderRadius={16}
        inset>
        <TextInput
          style={{ height: 40, width: 240 }}
          value={text}
          onChangeText={setText}
        />
      </NeuView>

      <NeuInput value={text} onChangeText={setText} style={{ margin: 16 }} />
    </View>
  );
};

export default storiesOf('Experimental|Neumorphic', module)
  .addParameters({ jest: ['Neumorphic'] })
  .add('Input', () => (
    <Container>
      <InputStory />
    </Container>
  ));
