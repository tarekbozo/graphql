import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import { CartItem, CartHeader, CartFooter, Footer } from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { Button } from '../Button';
import { navigate } from '@reach/router';

export const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <section>
      {!!checkout?.lineItems.length && (
        <CartHeader>
          <div>Product</div>
          <div>Unit price</div>
          <div>Quantity</div>
          <div>Amount</div>
        </CartHeader>
      )}
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <div>
            <div>{item.title}</div>
            <div>
              {item.variant.title === 'Default Title' ? '' : item.variant.title}
            </div>
          </div>
          <div>{item.variant.price} Kr</div>
          <div>
            <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
          </div>
          <div>{(item.quantity * item.variant.price).toFixed(2)} Kr</div>
          <div>
            <RemoveLineItem lineItemId={item.id} />
          </div>
        </CartItem>
      ))}
      {!!checkout?.lineItems.length && (
        <CartFooter>
          <div>
            <strong>Total:</strong>
          </div>
          <div>
            <span>{checkout?.totalPrice} Kr</span>
          </div>
        </CartFooter>
      )}
      {!!checkout?.lineItems.length ? (
        <h4>You cart</h4>
      ) : (
        <h4>You cart is empty</h4>
      )}
      <Footer>
        <div>
          <Button onClick={() => navigate(-1)}>Continue shopping</Button>
        </div>
        <div>
          {!!checkout?.lineItems.length && (
            <Button
              onClick={() => {
                window.location.href = checkout.webUrl;
              }}
            >
              Checkout
            </Button>
          )}
        </div>
      </Footer>
    </section>
  );
};
