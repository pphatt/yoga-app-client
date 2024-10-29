/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation';
import {PaperProvider} from 'react-native-paper';
import {StatusBar, useColorScheme} from 'react-native';
import {isAndroid} from './src/utils/index.utils';
import {darkTheme, lightTheme} from './src/shared/theme/theme.ts';

export default function App(): React.JSX.Element {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
    if (isAndroid()) {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      // SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

  return (
    <PaperProvider
      theme={isDarkMode ? darkTheme : lightTheme}
      settings={{
        rippleEffectEnabled: true,
      }}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
