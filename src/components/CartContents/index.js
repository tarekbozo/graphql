import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import { CartItem, CartHeader, CartFooter } from './styles';
import { QuantityAdjuster } from './../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';

export function CartContents() {
  const { checkout, updateLineItem } = useContext(CartContext);

  const handelAdjust = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <section>
      <h1>
        {checkout.totalPrice === '0.00' ? 'Your Cart is empty' : 'Your Cart'}
      </h1>
      <CartHeader>
        <div>Product</div>
        <div>Uint price</div>
        <div>Quantity</div>
        <div>Amount</div>
      </CartHeader>
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <div>
            <div>{item.title}</div>
            <div>
              {item.variant.title === 'Default Title' ? '' : item.variant.title}
            </div>
          </div>
          <div>{item.variant.price} kr</div>
          <div>
            <QuantityAdjuster item={item} onAdjust={handelAdjust} />
          </div>
          <div>{(item.quantity * item.variant.price).toFixed(2)} kr</div>
          <div>
            <RemoveLineItem lineItemId={item.id} />
          </div>
        </CartItem>
      ))}
      <CartFooter>
        <div>
          <strong>Total:</strong>
        </div>
        <div>
          <span>{checkout?.totalPrice} kr</span>
        </div>
      </CartFooter>
    </section>
  );
}
