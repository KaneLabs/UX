import React from 'react';
import { IconButton } from '@kanelabs/ux/components';
import { useTheme } from '@kanelabs/ux/theme';

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
