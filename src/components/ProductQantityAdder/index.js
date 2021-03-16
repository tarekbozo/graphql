import React, { useState, useContext } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { ProductQantityAdderWrapper } from './styles';
import CartContext from 'context/CartContext';

export const ProductQuantityAdder = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);

  const handelQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handelSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };
  return (
    <ProductQantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handelSubmit}>
        <Input
          type="number"
          min="1"
          step="1"
          disabled={!available}
          value={quantity}
          onChange={handelQuantityChange}
        />
        <Button type="submit" disabled={!available} fullwidth>
          Add to cart
        </Button>
      </form>
    </ProductQantityAdderWrapper>
  );
};
