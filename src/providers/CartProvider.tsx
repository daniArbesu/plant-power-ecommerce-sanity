'use client';
import type { ReactNode } from 'react';
import { CartProvider as ShoppingCartProvider } from 'use-shopping-cart';

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ShoppingCartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY || ''}
      successUrl={`${process.env.NEXT_PUBLIC_DEPLOYED_URL}/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_DEPLOYED_URL}/error`}
      currency="EUR"
      billingAddressCollection={false}
      shouldPersist
      language="es"
    >
      {children}
    </ShoppingCartProvider>
  );
};

export default CartProvider;
