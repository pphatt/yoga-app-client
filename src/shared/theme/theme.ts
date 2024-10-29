import {
  MD3DarkTheme,
  DefaultTheme as PaperLightTheme,
} from 'react-native-paper';

import {Colors, Theme} from '../type/types';

const lightColors: Colors = {
  ...PaperLightTheme.colors,
  primary: '#000000',
  onPrimary: '#FFFFFF',
  primaryContainer: '#000000',
  onPrimaryContainer: '#FFFFFF',
  inversePrimary: '#A6A6A6',
  secondary: '#000000', // Unread badge
  onSecondary: '#FFFFFF', // Unread badge text
  secondaryContainer: '#DDDDDD', // Navigation bar selector pill & progress indicator (remaining)
  onSecondaryContainer: '#0C0C0C', // Navigation bar selector icon
  tertiary: '#FFFFFF', // Downloaded badge
  onTertiary: '#000000', // Downloaded badge text
  tertiaryContainer: '#D8E2FF',
  onTertiaryContainer: '#001947',
  background: '#FDFDFD',
  onBackground: '#222222',
  surface: '#FDFDFD',
  onSurface: '#222222',
  surfaceVariant: '#E8E8E8', // Navigation bar background (ThemePrefWidget)
  onSurfaceVariant: '#515151',
  // surfaceTint: '000000',
  inverseSurface: '#333333',
  inverseOnSurface: '#F4F4F4',
  outline: '#838383',
  // surfaceContainerLowest: 'CFCFCF',
  // surfaceContainerLow: 'DADADA',
  // surfaceContainer: 'E8E8E8', // Navigation bar background
  // surfaceContainerHigh: 'ECECEC',
  // surfaceContainerHighest: 'EFEFEF',
};

export const lightTheme: Theme = {
  ...PaperLightTheme,
  borders: {
    inputBorderRadius: 20,
    messageBorderRadius: 20,
  },
  colors: lightColors,
  fonts: {
    ...PaperLightTheme.fonts,
  },
  insets: {
    messageInsetsHorizontal: 20,
    messageInsetsVertical: 10,
  },
};

const darkColors: Colors = {
  ...MD3DarkTheme.colors,
  primary: '#FFFFFF',
  onPrimary: '#5A5A5A',
  primaryContainer: '#FFFFFF',
  onPrimaryContainer: '#000000',
  inversePrimary: '#CECECE',
  secondary: '#FFFFFF', // Unread badge
  onSecondary: '#5A5A5A', // Unread badge text
  secondaryContainer: '#717171', // Navigation bar selector pill & progress indicator (remaining)
  onSecondaryContainer: '#E4E4E4', // Navigation bar selector icon
  tertiary: '#000000', // Downloaded badge
  onTertiary: '#FFFFFF', // Downloaded badge text
  tertiaryContainer: '#00419E',
  onTertiaryContainer: '#D8E2FF',
  background: '#1E1E1E',
  onBackground: '#E6E6E6',
  surface: '#1E1E1E',
  onSurface: '#E6E6E6',
  surfaceVariant: '#313131', // Navigation bar background (ThemePrefWidget)
  onSurfaceVariant: '#D1D1D1',
  // surfaceTint: '#FFFFFF',
  inverseSurface: '#E6E6E6',
  inverseOnSurface: '#1E1E1E',
  outline: '#999999',
  // surfaceContainerLowest: '#2A2A2A',
  // surfaceContainerLow: '#2D2D2D',
  // surfaceContainer: '#313131', // Navigation bar background
  // surfaceContainerHigh: '#383838',
  // surfaceContainerHighest: '#3F3F3F',
};

export const darkTheme: Theme = {
  ...MD3DarkTheme,
  borders: lightTheme.borders,
  colors: darkColors,
  fonts: {
    ...lightTheme.fonts,
  },
  insets: lightTheme.insets,
};
