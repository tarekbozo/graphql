import React from 'react';
import { QuantityAdjusterWrapper, AdjusterButton } from './styles';

export const QuantityAdjuster = ({ item, onAdjust }) => {
  const { quantity } = item;
  const handelDecQyt = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };
  const handelIncQyt = () => {
    onAdjust({ variantId: item.variant.id, quantity: +1 });
  };

  return (
    <QuantityAdjusterWrapper>
      <AdjusterButton onClick={handelDecQyt}>-</AdjusterButton>
      <div>{quantity}</div>
      <AdjusterButton onClick={handelIncQyt}>+</AdjusterButton>
    </QuantityAdjusterWrapper>
  );
};
