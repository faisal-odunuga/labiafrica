'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { toggleCart, totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-white/5'>
      <div className='flex justify-between items-center px-4 md:px-8 py-6 max-w-[1920px] mx-auto'>
        <div className='flex items-center gap-4'>
          <button 
            className='md:hidden flex items-center text-white hover:text-primary transition-colors'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className='material-symbols-outlined'>{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
          <Link
            href='/'
            className='text-2xl md:text-3xl font-black text-primary tracking-tighter font-headline uppercase'
          >
            Lábi
          </Link>
        </div>

        <div className='hidden md:flex items-center space-x-12 font-headline font-bold tracking-[-0.02em] uppercase text-sm'>
          <Link href='/' className='text-white/70 hover:text-primary transition-colors'>
            Home
          </Link>
          <Link href='/catalog' className='text-white/70 hover:text-primary transition-colors'>
            Catalog
          </Link>
          <Link href='/story' className='text-white/70 hover:text-primary transition-colors'>
            About
          </Link>
        </div>

        <div className='flex items-center space-x-4 md:space-x-6 text-primary'>
          <button className='hover:scale-95 active:scale-90 transition-transform'>
            <span className='material-symbols-outlined'>search</span>
          </button>
          <button
            className='hover:scale-95 active:scale-90 transition-transform relative'
            onClick={toggleCart}
          >
            <span className='material-symbols-outlined'>shopping_bag</span>
            {totalItems > 0 && (
              <span className='absolute -top-1 -right-1 bg-white text-black text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center'>
                {totalItems}
              </span>
            )}
          </button>
          <button className='hover:scale-95 active:scale-90 transition-transform'>
            <span className='material-symbols-outlined'>person</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-[#0e0e0e] border-b border-white/5 py-4 px-8 flex flex-col space-y-4 font-headline font-bold uppercase text-sm'>
          <Link href='/' onClick={() => setIsMobileMenuOpen(false)} className='text-white/70 hover:text-primary transition-colors py-2'>
            Home
          </Link>
          <Link href='/catalog' onClick={() => setIsMobileMenuOpen(false)} className='text-white/70 hover:text-primary transition-colors py-2'>
            Catalog
          </Link>
          <Link href='/story' onClick={() => setIsMobileMenuOpen(false)} className='text-white/70 hover:text-primary transition-colors py-2'>
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
