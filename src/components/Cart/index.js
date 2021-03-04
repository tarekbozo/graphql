import React, { useContext } from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from 'context/CartContext';

export const Cart = () => {
  const { checkout } = useContext(CartContext);
  let totlalQuantity = 0;
  if (checkout) {
    checkout.lineItems.map(lineItem => (totlalQuantity += lineItem.quantity));
  }
  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
      <span>
        {totlalQuantity} {totlalQuantity === 1 ? 'item' : 'items'}{' '}
        {checkout?.totalPrice || '0.00'} kr
      </span>{' '}
    </CartWrapper>
  );
};
