import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Menu from './Menu';

const renderer = new ShallowRenderer();

test('Menu Renders', () => {
  const tree = renderer.render(<Menu />);
  expect(tree).toMatchSnapshot();
});
