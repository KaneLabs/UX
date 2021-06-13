import React from 'react';
import renderer from 'react-test-renderer';
import Ripple from './Ripple';

test('Ripple Renders', () => {
  const tree = renderer.create(<Ripple />).toJSON();
  expect(tree).toMatchSnapshot();
});
