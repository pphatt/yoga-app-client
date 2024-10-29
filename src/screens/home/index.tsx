import * as React from 'react';
import {useTheme} from 'react-native-paper';
import {HomeWrapper} from './style.ts';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import CartRow from './components/cart-row';
import GreetingRow from './components/greeting-row';

export default function HomeScreen() {
  const theme = useTheme();
  const bottomBabBarHeight = useBottomTabBarHeight();

  return (
    <HomeWrapper
      color={theme.colors.background}
      tabBarHeight={bottomBabBarHeight}>
      <CartRow />
      <GreetingRow />
    </HomeWrapper>
  );
}
