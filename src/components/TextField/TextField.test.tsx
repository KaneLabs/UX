import React from 'react';
import renderer from 'react-test-renderer';
import TextField from './TextField';
import ThemeProvider from '../../theme/ThemeProvider';

test('TextField Renders', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <TextField placeholder="Text Field" />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
