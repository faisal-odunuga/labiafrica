"use client";

import { useState } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import Image from 'next/image';

const ProductDetail = ({ params }) => {
  const { id } = params;
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  const recommended = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  if (recommended.length === 0) {
    recommended.push(...products.filter(p => p.id !== product.id).slice(0, 3));
  }

  return (
    <main className="pt-24 min-h-screen">
      <section className="max-w-[1920px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
        {/* Images */}
        <div className="md:col-span-7 grid grid-cols-1 gap-4">
          <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden relative">
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
          </div>
          {product.secondaryImages && (
            <div className="grid grid-cols-2 gap-4">
              {product.secondaryImages.map((img, i) => (
                <div key={i} className="aspect-square bg-surface-container-highest overflow-hidden relative">
                  <Image src={img} alt={`${product.name} alternate ${i+1}`} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-5 flex flex-col sticky top-32 h-fit">
          <div className="mb-2">
            <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-label">{product.collection}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white leading-none mb-6 tracking-tighter">
            {product.name} <br/> <span className="text-primary">— {product.model}</span>
          </h1>
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-8">
            <p className="text-2xl font-headline font-bold text-primary">₦{product.price.toLocaleString()}.00</p>
            <p className="text-sm font-label uppercase tracking-widest text-white/70">{product.fabric}</p>
          </div>

          <div className="space-y-10 mb-12">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-xs uppercase tracking-widest text-white/50 font-label">Select Size</label>
                <a href="#" className="text-xs uppercase tracking-widest text-primary hover:underline font-label flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">straighten</span> Find Your Size
                </a>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizesAvailable?.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "py-4 border text-sm font-label transition-colors",
                      selectedSize === size 
                        ? "border-primary bg-primary text-black font-bold" 
                        : "border-white/20 hover:border-primary text-white"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <button 
                onClick={() => addToCart(product, selectedSize)}
                className="w-full bg-primary py-6 text-black font-headline font-black text-lg uppercase tracking-widest hover:bg-primary-dim transition-all active:scale-95"
              >
                Add to Cart
              </button>
              <button className="w-full border border-white/20 py-6 text-white font-headline font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Save to Wishlist
              </button>
            </div>
          </div>

          {product.features && (
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {product.features.map(feature => (
                <div key={feature.name}>
                  <h4 className="text-xs font-black uppercase text-primary mb-2 tracking-widest">{feature.name}</h4>
                  <p className="text-xs text-white/60 leading-relaxed font-body">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Heritage Story */}
      <section className="bg-surface-container-low py-32 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <span className="text-[20rem] font-black font-headline uppercase leading-none select-none">LÁBI</span>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 uppercase tracking-tighter leading-none">
              Woven <br/><span className="text-primary">Legacy</span>
            </h2>
            <p className="text-lg text-white/80 font-body leading-relaxed max-w-lg">
              {product.description}
            </p>
            <div className="mt-12">
              <Link href="/story" className="inline-flex items-center gap-4 text-primary font-headline font-bold uppercase tracking-widest group">
                Explore the Brand Story 
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </Link>
            </div>
          </div>
          <div className="aspect-[3/4] bg-surface-container-highest relative">
            <Image src="/images/about-sokoto.png" alt="Craftsmanship" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover grayscale brightness-75" />
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section className="py-32 px-4 md:px-8 max-w-[1920px] mx-auto">
        <h3 className="text-4xl font-headline font-bold uppercase tracking-tighter mb-16">Recommended Additions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommended.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
};

import { cn } from '@/lib/utils';
export default ProductDetail;
