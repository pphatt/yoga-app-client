/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation';
import {MD3LightTheme, MD3Theme, PaperProvider} from 'react-native-paper';

const theme: MD3Theme = {
  ...MD3LightTheme,
  // Specify custom property
  colors: {
    ...MD3LightTheme.colors,
    surfaceVariant: '#E4D5F8',
    secondaryContainer: '#C9B0E6',
    onSecondaryContainer: '#7B46AF',
    elevation: {
      ...MD3LightTheme.colors.elevation,
      level1: 'aquamarine',
    },
  },
};

export default function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
