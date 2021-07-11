import ThemeProvider from '../src/theme/ThemeProvider';
// import { Story } from '@storybook/react';
import { makeDecorator } from '@storybook/addons';

const withThemeProvider = makeDecorator({
  name: 'withTheme',
  parameterName: 'options',
  wrapper: (storyFn, context, { parameters }) => {
    // Do something with `parameters`, which are set via { something: ... }

    // Note you may alter the story output if you like.
    // Although generally that's not advised.
    return <ThemeProvider>{storyFn(context)}</ThemeProvider>;
  },
});

export default withThemeProvider;
