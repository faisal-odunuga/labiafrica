import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

export default function Home() {
  const featuredProduct = products.find((p) => p.id === 'la-fila-gold');

  // console.log('pro',featuredProduct);

  const recommendedProducts = products.filter((p) => p.id !== 'la-fila-gold').slice(0, 3);

  return (
    <div className='flex flex-col'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-end pt-32 pb-20 px-8 lg:px-20 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent z-10'></div>
          <Image
            src='/images/sokotos/LA-404.jpeg'
            alt='Heritage Luxury'
            width={1920}
            height={1080}
            className='w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000'
          />
        </div>
        <div className='relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end'>
          <div className='lg:col-span-8'>
            <span className='text-primary font-body uppercase tracking-[0.4em] text-xs mb-4 block'>
              Established 2024
            </span>
            <h1 className='font-headline text-6xl md:text-9xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-white'>
              The Cultural <br /> <span className='text-primary'>Monolith</span>
            </h1>
          </div>
          <div className='lg:col-span-4 lg:pl-12 pb-4'>
            <p className='font-body text-white/60 text-lg leading-relaxed max-w-sm'>
              Lábi is an aggressive fusion of ancestral craftsmanship and the kinetic energy of
              modern Lagos streetwear.
            </p>
          </div>
        </div>

        {/* Vertical Anchor Text */}
        <div className='absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block'>
          <span className='text-monolith font-headline text-8xl font-black text-white/5 uppercase select-none'>
            Ancestral Future
          </span>
        </div>
      </section>

      {/* Heritage Section */}
      <section className='py-32 px-8 lg:px-20 bg-background'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
            <div className='order-2 lg:order-1 relative'>
              <div className='absolute -top-10 -left-10 w-40 h-40 border border-primary/20 -z-10'></div>
              <Image
                src='/images/jackets/LA-505.jpeg'
                alt='Traditional Heritage'
                width={1920}
                height={1080}
                className='w-full aspect-[4/5] object-cover'
              />
              <div className='absolute bottom-0 right-0 p-8 bg-surface-container-highest max-w-[280px]'>
                <p className='font-body text-sm italic text-white/50 leading-relaxed'>
                  &quot;The thread connects us to our ancestors. Every weave is a whisper of
                  history.&quot;
                </p>
              </div>
            </div>
            <div className='order-1 lg:order-2'>
              <h2 className='font-headline text-5xl font-bold uppercase mb-8 tracking-tighter'>
                The Heritage
              </h2>
              <div className='space-y-6 text-white/60 font-body text-lg leading-relaxed'>
                <p>
                  Aso Oke is not just fabric; it is a prestige hand-woven cloth created by the
                  Yoruba people of West Africa. For centuries, these textiles have signified status,
                  celebration, and spiritual grounding.
                </p>
                <p>
                  Lábi takes this sacred geometry and deconstructs it. We strip away the formal
                  expectations of traditional attire and inject the rugged, oversized silhouettes of
                  the global street culture.
                </p>
              </div>
              <div className='mt-12 flex items-center gap-4'>
                <div className='h-[1px] w-20 bg-primary'></div>
                <span className='font-label text-primary uppercase tracking-widest text-xs'>
                  Legacy Refined
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product: Sokoto Monolith */}
      <section className='bg-surface-container-low py-32 px-8 lg:px-20 relative overflow-hidden'>
        <div className='absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none'>
          <span className='text-[20rem] font-black font-headline uppercase leading-none select-none'>
            LÁBI
          </span>
        </div>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10'>
          <div className='order-2 md:order-1'>
            <h2 className='text-4xl md:text-6xl font-headline font-bold mb-8 uppercase tracking-tighter leading-none'>
              Woven <br />
              <span className='text-primary'>Legacy</span>
            </h2>
            <div className='space-y-6 text-lg text-white/80 font-body leading-relaxed max-w-lg'>
              <p>
                Aso Oke is more than a fabric; it is a manifestation of royalty and communal
                identity. Historically reserved for the most significant life rites, our Sòkòtò
                brings this prestige into the street-luxe arena.
              </p>
            </div>
            <div className='mt-12'>
              <Link
                href={`/product/${featuredProduct?.id}`}
                className='inline-flex items-center gap-4 text-primary font-headline font-bold uppercase tracking-widest group'
              >
                Explore the Monolith
                <span className='material-symbols-outlined group-hover:translate-x-2 transition-transform'>
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>
          <div className='order-1 md:order-2'>
            <div className='aspect-[3/4] bg-surface-container-highest relative'>
              <Image
                src={featuredProduct?.image}
                alt={featuredProduct?.name}
                className='w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700'
                width={1920}
                height={1080}
              />
              <div className='absolute -bottom-10 -right-10 w-64 h-80 border-8 border-primary/20 hidden md:block'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy of a Monolith (Sòkòtò Details) using user posters */}
      <section className='bg-[#0a0a0a] py-24 px-8 lg:px-20 border-y border-white/5'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <span className='text-primary font-label text-sm tracking-[0.3em] uppercase block mb-4'>
              The Cargo Pant By Lábí
            </span>
            <h2 className='text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter'>
              The Anatomy of a Monolith
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Image
              src='/images/about-sokoto.png'
              alt='About Our Sòkòtò Cargo Pant'
              width={1080}
              height={1080}
              className='w-full h-auto object-contain rounded-sm border border-white/10'
            />
            <Image
              src='/images/cargo-pant-details.png'
              alt='Cargo Pant Details'
              width={1080}
              height={1080}
              className='w-full h-auto object-contain rounded-sm border border-white/10'
            />
          </div>
        </div>
      </section>

      {/* Fìlà Fit Guide using user posters */}
      <section className='py-24 px-8 lg:px-20 bg-surface-container-low'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <span className='text-primary font-label text-sm tracking-[0.3em] uppercase block mb-4'>
              Precision fit
            </span>
            <h2 className='text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter'>
              Fìlà Sizing & Measurement
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Image
              src='/images/measurement.png'
              alt='How to measure'
              width={1080}
              height={1080}
              className='w-full h-auto object-contain rounded-sm border border-white/10'
            />
            <Image
              src='/images/size-chart.png'
              alt='Size chart'
              width={1080}
              height={1080}
              className='w-full h-auto object-contain rounded-sm border border-white/10'
            />
          </div>
        </div>
      </section>

      {/* Recommended Grid */}
      <section className='py-32 px-8 lg:px-20 max-w-[1920px] mx-auto'>
        <div className='flex justify-between items-end mb-16'>
          <div>
            <span className='text-xs uppercase tracking-[0.5em] text-primary font-black mb-4 block'>
              Complete the Look
            </span>
            <h3 className='text-4xl font-headline font-bold uppercase tracking-tighter'>
              Recommended Additions
            </h3>
          </div>
          <Link
            href='/catalog'
            className='text-sm font-label uppercase tracking-widest border-b border-white/20 pb-1 hover:border-primary transition-colors'
          >
            View All
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
