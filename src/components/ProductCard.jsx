'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className='group relative bg-surface overflow-hidden aspect-[3/4] flex flex-col'>
      <div className='flex-1 bg-surface-container-highest relative overflow-hidden'>
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            className='w-full h-full object-cover group-hover:mix-blend-luminosity  group-hover:scale-105 transition-all duration-700'
            width={500}
            height={500}
          />
        </Link>

        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none'></div>

        {/* Quick Actions */}
        <div className='absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm'>
          <button
            onClick={() => addToCart(product)}
            className='w-full bg-white text-black font-headline font-bold py-4 mb-2 uppercase text-xs tracking-tighter hover:bg-primary transition-colors'
          >
            Add to Cart
          </button>
          <Link
            href={`/product/${product.id}`}
            className='w-full border border-white/30 text-white font-headline font-bold py-4 uppercase text-xs tracking-tighter hover:bg-white/10 transition-colors text-center'
          >
            Quick View
          </Link>
        </div>

        {product.isNewArrival && (
          <div className='absolute top-4 left-4'>
            <span className='bg-primary text-black text-[9px] font-black px-2 py-1 uppercase tracking-tighter'>
              New Arrival
            </span>
          </div>
        )}
        {product.isSoldOut && (
          <div className='absolute top-4 left-4'>
            <span className='bg-red-500 text-white text-[9px] font-black px-2 py-1 uppercase tracking-tighter'>
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className='p-6 bg-surface'>
        <div className='flex justify-between items-start mb-2'>
          <div>
            <p className='text-[10px] text-white/50 font-label uppercase tracking-widest mb-1'>
              {product.model}
            </p>
            <h3 className='text-white font-headline font-bold uppercase text-lg leading-tight'>
              {product.name}
            </h3>
          </div>
          <p className='text-primary font-headline font-bold'>₦{product.price.toLocaleString()}</p>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <span className='text-[9px] text-white/30 font-label uppercase tracking-widest'>
            Made in Nigeria
          </span>
          <span className='text-[9px] text-white/30 font-label uppercase tracking-widest'>
            {product.sizesAvailable?.length === 1 ? product.sizesAvailable[0] : 'All Sizes'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
