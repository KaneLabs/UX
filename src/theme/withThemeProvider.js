import react from 'react';
import ThemeProvider from './ThemeProvider';
const withThemeProvider = (Component) => (
  <ThemeProvider>
    <Component />
  </ThemeProvider>
);

export default withThemeProvider;
