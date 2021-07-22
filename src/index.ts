import * as animations from './animations';
import * as components from './components';
// import * as containers from './containers';
import * as state from './state';

import { useTheme, makeStyles, ThemeProvider, ThemeContext } from './theme';

export default {
  ...animations,
  ...components,
  // ...containers,
  ...state,
  useTheme,
  makeStyles,
  ThemeProvider,
  ThemeContext,
};
