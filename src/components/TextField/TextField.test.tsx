import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TextField from './TextField';
import ThemeProvider from '../../theme/ThemeProvider';

const renderer = new ShallowRenderer();

test('TextField Renders', () => {
  const tree = renderer.render(
    <ThemeProvider>
      <TextField placeholder="Text Field" />
    </ThemeProvider>,
  );
  expect(tree).toMatchSnapshot();
});
