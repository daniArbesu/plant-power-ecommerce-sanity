'use client';
import type { ReactNode } from 'react';
import { CartProvider as ShoppingCartProvider } from 'use-shopping-cart';

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ShoppingCartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY || ''}
      successUrl="/success"
      cancelUrl="/error"
      currency="EUR"
      billingAddressCollection
      shouldPersist
      language="es"
    >
      {children}
    </ShoppingCartProvider>
  );
};

export default CartProvider;
