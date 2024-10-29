import * as React from 'react';
import {IconButton, useTheme} from 'react-native-paper';
import color from 'color';

export default function CartButton() {
  const theme = useTheme();

  return (
    <IconButton
      theme={theme}
      rippleColor={color(theme.colors.secondary).alpha(0.12).rgb().toString()}
      onPress={() => console.log('Pressed')}
      icon={'cart-outline'}
    />
  );
}
