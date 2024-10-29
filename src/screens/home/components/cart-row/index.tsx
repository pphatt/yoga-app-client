import * as React from 'react';
import {CartRowWrapper} from './style.ts';
import CartButton from '../cart-button';

export default function CartRow() {
  return (
    <CartRowWrapper>
      <CartButton />
    </CartRowWrapper>
  );
}
