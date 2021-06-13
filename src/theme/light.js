import { StyleSheet, Platform } from 'react-native';

export { default as shadow } from '../components/Shadow';

export const mode = 'light';

export const background = 'rgba(240,240,240,1)';
export const appBackgroundColor = background;
export const backgroundColor = background;
export const backgroundColorOpaque = 'rgba(240,240,240,0.67)';
export const backgroundColorUltraOpaque = 'rgba(240,240,240,0.05)';

export const canvas = 'rgba(255,255,255, 1)';
export const canvasOpaque = 'rgba(255,255,255,0.67)';
export const canvas1 = canvas;
export const canvas1Opaque = canvasOpaque;
export const canvas2 = 'rgba(255,255,255, 1)';
export const canvas2Opaque = 'rgba(255,255,255,0.67)';
export const canvas3 = 'rgba(255,255,255, 1)';
export const canvas3Opaque = 'rgba(255,255,255,0.67)';

export const borderColor = 'rgba(0,0,0,0.12)';


export const unit = 8;
export const gutter = 16;
export const padding = 12;
export const NAV_HEIGHT = 48;
export const AVATAR_SIZE = 40;
export const TOOLBAR_WIDTH_OPEN = 192;
export const TOOLBAR_WIDTH_CLOSED = 64;
export const TABBAR_HEIGHT = 56;
export const PROFILE_AVATAR_SIZE = 90;
export const DESKTOP_BREAKPOINT = 900;
export const FEED_WIDTH = 600;
export const FEED_WIDTH_DENSE = 420;
export const DEFAULT_AVATAR_URL = 'https://art.fora.co/default-avatar.png';
export const DRAWER_WIDTH = 192;
export const CHAT_WIDTH = 192;
export const ASIDE_WIDTH = 300;

export const textColor = {
  primary: 'rgba(0,0,0,0.87)',
  secondary: 'rgba(0,0,0,0.54)',
  inactive: 'rgba(0,0,0,0.38)',
  hint: 'rgba(0,0,0,0.38)',
  disabled: 'rgba(0,0,0,0.38)',
  faint: 'rgba(0,0,0,0.12)',
};

export const iconSize = Platform.OS === 'web' ? 24 : 24;
export const iconPadding = Platform.OS === 'web' ? 12 : 12;
export const iconColor = textColor.secondary;

export const borderColorHover = textColor.primary;
export const borderRadius = 3;
export const borderWidth = StyleSheet.hairlineWidth;

export const Typography = {
  h1: {
    fontWeight: '200',
    fontSize: 96,
    lineHeight: 116,
    letterSpacing: -1.5,
    color: textColor.primary,
  },
  h2: {
    fontWeight: '200',
    fontSize: 60,
    lineHeight: 72,
    letterSpacing: -0.5,
    color: textColor.primary,
  },
  h3: {
    fontWeight: '300',
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: 0,
    color: textColor.primary,
  },
  h4: {
    fontWeight: '300',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.25,
    color: textColor.primary,
  },
  h5: {
    fontWeight: '300',
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: 0,
    color: textColor.primary,
  },
  h6: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: textColor.primary,
  },
  subtitle1: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '300',
    letterSpacing: 0.15,
    color: textColor.primary,
  },
  subtitle2: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '500',
    letterSpacing: 0.1,
    color: textColor.primary,
  },
  body1: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '300',
    letterSpacing: 0.5,
    color: textColor.primary,
  },
  body2: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '300',
    letterSpacing: 0.25,
    color: textColor.primary,
  },
  button: {
    color: textColor.primary,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
    letterSpacing: 1.25,
  },
  caption: {
    color: textColor.secondary,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.4,
  },
  overline: {
    color: textColor.primary,
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 12,
    letterSpacing: 1.5,
  },
};
