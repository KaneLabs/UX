import * as React from 'react';
import ThemeProvider from 'eros-ui/theme/ThemeProvider';
import useTheme from 'eros-ui/theme/useTheme';
import { addons } from '@storybook/addons';
// import { MockedProvider } from '@apollo/client/testing';

// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// import { useDarkMode } from 'storybook-dark-mode';
// import { addDecorator } from '@storybook/react';

// get channel to listen to event emitter
const channel = addons.getChannel();

// create a component that listens for the DARK_MODE event
function ThemeWrapper(props) {
  const [theme, toggleTheme] = useTheme();

  console.log({ currentTheme: theme });

  // const state = useStorybookState();

  // this example uses hook but you can also use class component as well
  // const [isDark, setDark] = useState(false);

  React.useEffect(() => {
    // listen to DARK_MODE event
    const handle = nextBackground => {
      if (theme.mode !== nextBackground.name) {
        toggleTheme();
      }
    };

    channel.on('storybook/background/update', handle);
    // return () => channel.off('storybook/background/update', toggleTheme);
  }, []);

  // render your custom theme provider
  return props.children;
}

const withThemeProvider = (story, context) => {
  // const [state, setState] = useAddonState('storybook/background', { name: 'light', value: lightBackground, default: true });
  // const state = useStorybookApi();
  // console.log({ state })

  // const [initialScheme, setInitialScheme] = React.useState('light');

  // // const handle = (nextBackground) => {

  // // }

  // React.useEffect(() => {
  //   // listen to DARK_MODE event
  //   channel.on('setCurrentStory', console.log);
  //   // return () => channel.off('DARK_MODE', setDark);
  // }, []);

  // console.log('STORYYYYY', story)
  return (
    <ThemeProvider initialScheme={'light'}>
      <ThemeWrapper>{story(context)}</ThemeWrapper>
    </ThemeProvider>
  );
};

export default withThemeProvider;
