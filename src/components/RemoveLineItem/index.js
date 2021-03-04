import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import { Icon } from './styles';

export const RemoveLineItem = ({ lineItemId }) => {
  const { removeLineItem } = useContext(CartContext);
  return (
    <Icon onClick={() => removeLineItem(lineItemId)}>
      <FaTrashAlt />
    </Icon>
  );
};
