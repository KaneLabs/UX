import React from 'react';
import { View } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import Hoverable from './Hoverable';

const renderer = new ShallowRenderer();

test('Switch Renders', () => {
  const tree = renderer.render(
    <Hoverable>
      <View />
    </Hoverable>,
  );
  expect(tree).toMatchSnapshot();
});
