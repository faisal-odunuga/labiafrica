import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

export default function Home() {
  const featuredProduct = products.find((p) => p.id === 'LA-310');
  const recommendedProducts = products.filter((p) => p.id !== 'LA-310').slice(0, 3);

  return (
    <div className='flex flex-col'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-end pt-32 pb-20 px-8 lg:px-20 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent z-10'></div>
          <Image
            src='https://lh3.googleusercontent.com/aida-public/AB6AXuB3JBAxfLBYj5mHawxUKjHtLycADLQieN4uWgU6-Omvy4pE3p2mUtsWH0Xv43LQHw8W0pM6nCWAbnfe5nwtrWRor8_FLKeUPt12WMwy4E-HqBs8zrYF9iJ1npBK1yMdVEjlXRxT1sb_-bpblpCo-tr659H34AXeglETEOPTpsBUwGASBC5JSFFCBNHUy8Gx_t3aWugzd51baosMCcemwfQNFhreK0zD_Ikbj3boUlxGzrZxMsGvGv18CFk9OOVd1Y46epZr0D6SpQ'
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
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuADRdPaPQIp94YzLHwW0O0jBNQ5AdtjrNR13MM2e7C_WEFbz-yNuomUsXgrGc5lL1E815gugHDgk_1ZAZGT93Gvje_m-zAPDInLDFaElE4AO76Q2ClmhqYf6ia5anwJo8p2iZp7yEHVTYUXCfJQqBsNmCXw5KGMuWJkfK8RwFUDWJgIimWJXs2ZHBIJ4952KLOF-7vvtuV5m0eyl8Mxgv46YkOQfytBjkwHzKrBbaiYV_-Sj0rG1leH7HSdSt2R5fCdhXv2OLwiGA'
                alt='Traditional Heritage'
                width={1920}
                height={1080}
                className='w-full aspect-[4/5] object-cover'
              />
              <div className='absolute bottom-0 right-0 p-8 bg-surface-container-highest max-w-[280px]'>
                <p className='font-body text-sm italic text-white/50 leading-relaxed'>
                  "The thread connects us to our ancestors. Every weave is a whisper of history."
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

      {/* Anatomy of a Monolith (Sòkòtò Details) */}
      <section className='bg-[#0a0a0a] py-32 px-8 lg:px-20 border-y border-white/5'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-20'>
            <span className='text-primary font-label text-sm tracking-[0.3em] uppercase block mb-4'>
              The Cargo Pant By Lábí
            </span>
            <h2 className='text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter'>
              The Anatomy of a Monolith
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* <div>
              <h3 className='text-2xl font-headline font-bold uppercase mb-6'>About Our Sòkòtò Cargo Pant</h3>
              <div className='space-y-6 text-white/70 font-body text-lg leading-relaxed mb-12'>
                <p>
                  Our Sokoto Cargo Pants are a bold fusion of Yoruba tradition and contemporary streetwear. 
                  Crafted from authentic Aso Oke, a handwoven fabric worn by Yoruba royalty. 
                  These pants honor the past while stepping into the future.
                </p>
                <p>
                  The name Sòkòtò means &quot;trousers&quot; in Yoruba, but this isn&apos;t just any pair. 
                  Every element carries purpose.
                </p>
              </div>
              <blockquote className='border-l-4 border-primary pl-6 py-2 text-xl italic font-headline text-white/90'>
                &quot;These are not just pants, they&apos;re legacy in motion.&quot;
              </blockquote>
            </div> */}
            <div>
              <Image
                src={'/images/cargo-pant-details.png'}
                alt={featuredProduct?.name}
                className='w-full h-full object-cover brightness-75 hover:grayscale transition-all duration-700'
                width={1920}
                height={1080}
              />
            </div>

            <div className='space-y-8'>
              <div className='border-b border-white/10 pb-6'>
                <h4 className='text-primary font-headline font-bold uppercase text-xl mb-2 flex items-center gap-4'>
                  <span>01</span> Flex Waist & Heritage Rope
                </h4>
                <p className='text-white/60 font-body'>
                  <strong className='text-white'>Comfort meets culture.</strong> Elastic waist &
                  rope drawstring — for comfort, movement, and a nod to traditional fastening
                  methods. Adjustable fit, rooted in tradition.
                </p>
              </div>
              <div className='border-b border-white/10 pb-6'>
                <h4 className='text-primary font-headline font-bold uppercase text-xl mb-2 flex items-center gap-4'>
                  <span>02</span> Utility & Everyday Pockets
                </h4>
                <p className='text-white/60 font-body'>
                  <strong className='text-white'>Built for kings, crafted for creators.</strong>{' '}
                  Side & cargo pockets built for utility, reflecting the Yoruba value of readiness
                  and self-reliance. For hustle, hands-free.
                </p>
              </div>
              <div className='border-b border-white/10 pb-6'>
                <h4 className='text-primary font-headline font-bold uppercase text-xl mb-2 flex items-center gap-4'>
                  <span>03</span> Woven Legacy
                </h4>
                <p className='text-white/60 font-body'>
                  <strong className='text-white'>Royal threads. Timeless feel.</strong> Aso Oke
                  weave – a living archive of identity, community, and craftsmanship passed through
                  generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fìlà Fit Guide */}
      <section className='py-32 px-8 lg:px-20 bg-surface-container-low'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <span className='text-primary font-label text-sm tracking-[0.3em] uppercase block mb-4'>
              Precision fit
            </span>
            <h2 className='text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter mb-6'>
              Fìlà Sizing & Measurement
            </h2>
            <p className='max-w-2xl mx-auto text-white/60 font-body text-lg leading-relaxed'>
              Your fila is based on the circumference of your head. To determine the right size, you
              need a measurement of your head.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
            {/* Instructions */}
            <div className='bg-surface p-10 lg:p-12'>
              <h3 className='text-2xl font-headline font-bold uppercase mb-8 border-b border-white/10 pb-4'>
                How To Measure
              </h3>
              <ul className='space-y-8 font-body text-white/70'>
                <li className='flex gap-4'>
                  <span className='w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0'>
                    1
                  </span>
                  <div>
                    <h4 className='text-white font-bold mb-2'>Placement</h4>
                    <p>
                      Place the measuring tape around your head. Place it just above your ears. It
                      should sit where the cap normally rests.
                    </p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <span className='w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0'>
                    2
                  </span>
                  <div>
                    <h4 className='text-white font-bold mb-2'>Tension</h4>
                    <p>
                      Don&apos;t pull too tight. Keep it snug but comfortable. Measure in inches or
                      centimetres.
                    </p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <span className='w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0'>
                    3
                  </span>
                  <div>
                    <h4 className='text-white font-bold mb-2'>Need Help?</h4>
                    <p>Need help with your measurements? Talk to us at @labiafrica.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Size Chart */}
            <div className='bg-surface p-10 lg:p-12'>
              <h3 className='text-2xl font-headline font-bold uppercase mb-8 border-b border-white/10 pb-4'>
                Size Chart
              </h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-left font-body'>
                  <thead>
                    <tr className='text-primary text-sm uppercase tracking-widest border-b border-white/10'>
                      <th className='pb-4 font-bold'>Size</th>
                      <th className='pb-4 font-bold'>Inches</th>
                      <th className='pb-4 font-bold whitespace-nowrap'>CM</th>
                    </tr>
                  </thead>
                  <tbody className='text-white/80 divide-y divide-white/5'>
                    <tr>
                      <td className='py-4 font-bold text-white'>XS</td>
                      <td className='py-4'>22.0</td>
                      <td className='py-4'>55.9</td>
                    </tr>
                    <tr>
                      <td className='py-4 font-bold text-white'>S</td>
                      <td className='py-4'>22.5</td>
                      <td className='py-4'>57.2</td>
                    </tr>
                    <tr>
                      <td className='py-4 font-bold text-white'>M</td>
                      <td className='py-4'>23.0</td>
                      <td className='py-4'>58.4</td>
                    </tr>
                    <tr>
                      <td className='py-4 font-bold text-white'>L</td>
                      <td className='py-4'>23.5</td>
                      <td className='py-4'>59.7</td>
                    </tr>
                    <tr>
                      <td className='py-4 font-bold text-white'>XL</td>
                      <td className='py-4'>24.0</td>
                      <td className='py-4'>61.0</td>
                    </tr>
                    <tr>
                      <td className='py-4 font-bold text-white'>XXL</td>
                      <td className='py-4'>24.5</td>
                      <td className='py-4'>62.2</td>
                    </tr>
                    <tr>
                      <td className='py-4 font-bold text-white'>XXXL</td>
                      <td className='py-4'>25.0</td>
                      <td className='py-4'>63.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
