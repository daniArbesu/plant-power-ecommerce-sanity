'use client';
import React from 'react';
import Logo from '../Logo';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';

const Navbar = () => {
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-between bg-background px-5 py-4 sm:p-6">
      <h1 className="sr-only">Plant Power</h1>
      <Link href="/">
        <Logo className="w-[9.7rem] sm:w-40 lg:w-44" />
      </Link>
      <div className="flex items-center gap-8">
        <Button variant="link" size="icon" onClick={() => handleCartClick()}>
          <ShoppingCart />
        </Button>
        <Button variant="circle" size="none">
          <div className="flex size-10 flex-col items-center justify-center gap-2 lg:size-12">
            <div className="h-[2px] w-1/2 bg-white" />
            <div className="hidden h-[2px] w-1/2 bg-white" />
            <div className="h-[2px] w-1/2 bg-white" />
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
