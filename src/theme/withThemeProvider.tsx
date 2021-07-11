import react, { FC, ComponentType } from 'react';
import ThemeProvider from './ThemeProvider';

const withThemeProvider: FC<ComponentType> = (Component: ComponentType) => (
  <ThemeProvider>
    <Component />
  </ThemeProvider>
);

export default withThemeProvider;
