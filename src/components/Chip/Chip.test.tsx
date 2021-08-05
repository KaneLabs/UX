import React from 'react';
import renderer from 'react-test-renderer';
import Chip from './Chip';
import ThemeProvider from '../../theme/ThemeProvider';

test('Chip', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Chip text="Default" />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
