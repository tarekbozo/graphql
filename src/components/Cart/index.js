import React, { useContext } from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from 'context/CartContext';

export const Cart = () => {
  const { checkout } = useContext(CartContext);
  console.log(checkout);
  let totlalQuantity = 0;
  if (checkout) {
    checkout.lineItems.map(lineItem => (totlalQuantity += lineItem.quantity));
  }
  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
      <span>
        {' '}
        {totlalQuantity} items {checkout?.totalPrice || '0.00'}
      </span>{' '}
      <span>{checkout?.currencyCode}</span>
    </CartWrapper>
  );
};
