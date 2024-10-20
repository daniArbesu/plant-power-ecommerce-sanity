'use client';

import { useShoppingCart } from 'use-shopping-cart';
import type { AddToCartProps } from './AddToCart';

const CheckoutNow = ({ price_id }: AddToCartProps) => {
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (price_id: string) => {
    checkoutSingleItem(price_id);
  };

  return (
    <button
      className="w-1/2 rounded-[2.5rem] bg-black px-4 py-3 pl-6 text-left font-display text-base uppercase text-white"
      onClick={() => buyNow(price_id)}
    >
      Checkout
    </button>
  );
};

export default CheckoutNow;
