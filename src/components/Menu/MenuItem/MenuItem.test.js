import React from 'react';
import renderer from 'react-test-renderer';
import MenuItem from './MenuItem';

test('MenuItem Renders', () => {
  const tree = renderer.create(<MenuItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
