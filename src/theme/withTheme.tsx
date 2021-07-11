import React, { ComponentType } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeProvider';

export const withTheme = (Component: ComponentType) => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <Component theme={theme} toggleTheme={toggleTheme} />
    )}
  </ThemeContext.Consumer>
);

export default withTheme;
