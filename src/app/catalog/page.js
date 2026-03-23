"use client";

import { useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';

const CatalogPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get('category') || 'All';

  const { categories } = useProducts();

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filteredProducts = useMemo(() => {
    if (queryCategory === 'All') return products;
    return products.filter(p => p.category === queryCategory);
  }, [queryCategory]);

  return (
    <main className="pt-32 pb-20">
      {/* Header Section */}
      <header className="px-8 mx-auto mb-20 relative">
        <div className="absolute -left-10 top-0 opacity-10 select-none pointer-events-none">
          <span className="text-9xl font-black font-headline uppercase leading-none text-stroke">HERITAGE</span>
        </div>
        <div className="relative z-10">
          <p className="text-primary font-label text-xs tracking-[0.4em] uppercase mb-4">The Cultural Monolith</p>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight uppercase leading-[0.9] mb-6">
            Our<br/>Catalogue
          </h1>
          <p className="max-w-xl text-white/50 font-body text-lg leading-relaxed">
            A dialogue between traditional Aso Oke weaving techniques and the aggressive silhouettes of contemporary Lagos streetwear.
          </p>
        </div>
      </header>

      <div className="px-8 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Filter Sidebar */}
        <aside className="md:col-span-3 lg:col-span-2 space-y-12">
          <div className="space-y-6">
            <h3 className="text-white font-headline font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-2">Categories</h3>
            <ul className="space-y-4 font-label text-sm uppercase tracking-wider">
              {categories.map(category => (
                <li key={category}>
                  <button 
                    onClick={() => handleCategoryChange(category)}
                    className={cn(
                      "flex justify-between items-center w-full text-left transition-colors",
                      queryCategory === category ? "text-primary" : "text-white/50 hover:text-white"
                    )}
                  >
                    {category} 
                    <span className="text-[10px] opacity-50">
                      ({category === 'All' ? products.length : products.filter(p => p.category === category).length})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-headline font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-2">Price Range</h3>
            <div className="space-y-4">
              <input type="range" className="w-full accent-primary bg-white/10 appearance-none h-1" min="5000" max="150000" />
              <div className="flex justify-between text-[10px] font-label text-white/40 tracking-widest uppercase">
                <span>₦5,000</span>
                <span>₦150,000</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-headline font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-2">Sizes</h3>
            <div className="grid grid-cols-3 gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button key={size} className="border border-white/10 py-2 text-xs font-label hover:border-primary hover:text-primary transition-all uppercase">
                  {size}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-9 lg:col-span-10">
          <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
            <span className="text-[10px] font-label text-white/40 uppercase tracking-[0.3em]">Showing {filteredProducts.length} Results</span>
            <div className="flex items-center space-x-4 text-[10px] font-label uppercase tracking-widest">
              <span className="text-white/40">Sort By:</span>
              <select className="bg-transparent border-none focus:ring-0 text-white cursor-pointer p-0">
                <option>Latest Arrival</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

import { cn } from '@/lib/utils';
export default CatalogPage;
