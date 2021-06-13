import React from 'react';
import { IconButton } from 'eros-ui/components';
import { useTheme } from 'eros-ui/theme';

const ThemeToggleButton = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <IconButton
      color={theme.iconColor}
      name={theme.mode === 'dark' ? 'ios-sunny-outline' : 'ios-moon-outline'}
      onPress={toggleTheme}
    />
  );
};

export default ThemeToggleButton;
