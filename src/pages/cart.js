import React from 'react';
import { Layout, CartContents, SEO } from 'components';

const CartPage = () => (
  <Layout>
    <SEO description="Bouzo store Cart" title="Cart" />
    <CartContents />
  </Layout>
);

export default CartPage;
