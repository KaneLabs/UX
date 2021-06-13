import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chip from './Chip';
import ThemeProvider from '../../theme/ThemeProvider';

const renderer = new ShallowRenderer();

test('Chip Renders', () => {
  const tree = renderer.render(
    <ThemeProvider>
      <Chip text="Default" />
    </ThemeProvider>,
  );
  expect(tree).toMatchSnapshot();
});
