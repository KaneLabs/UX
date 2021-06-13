import React from 'react';
import { ThemeContext } from './ThemeProvider';

export const withTheme = (Component) => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => <Component theme={theme} toggleTheme={toggleTheme} />}
  </ThemeContext.Consumer>
);

export default withTheme;
