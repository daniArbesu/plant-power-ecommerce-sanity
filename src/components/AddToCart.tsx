'use client';

import { useShoppingCart } from 'use-shopping-cart';

export interface AddToCartProps {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  price_id: string;
}

const AddToCart = ({ name, description, price, currency, image, price_id }: AddToCartProps) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const selectedProduct = {
    name,
    description,
    price,
    currency,
    image,
    price_id,
  };

  const handleClick = () => {
    addItem(selectedProduct);
    handleCartClick();
  };

  return (
    <button
      className="w-1/2 rounded-[2.5rem] bg-black px-4 py-3 pl-6 text-left font-display text-base uppercase text-white"
      onClick={handleClick}
    >
      Añadir al carrito
    </button>
  );
};

export default AddToCart;
