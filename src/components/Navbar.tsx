import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="fixed top-0 flex w-full justify-between px-5 py-4">
      <h1 className="sr-only">Plant Power</h1>
      <a href="/">
        <Logo className="w-[9.7rem]" />
      </a>
      <button className="rounded-full bg-black">
        <div className="flex size-10 flex-col items-center justify-center gap-2">
          <div className="h-[2px] w-1/2 bg-white" />
          <div className="hidden h-[2px] w-1/2 bg-white" />
          <div className="h-[2px] w-1/2 bg-white" />
        </div>
      </button>
    </div>
  );
};

export default Navbar;
