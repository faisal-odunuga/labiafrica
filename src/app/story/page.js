import Link from 'next/link';
import Image from 'next/image';

const StoryPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-end pt-32 pb-20 px-8 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent z-10"></div>
          <Image 
            src="/images/sokotos/LA-402.jpeg" 
            alt="Heritage Luxury" 
            fill
            priority
            className="object-cover opacity-60 grayscale" 
          />
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="text-primary font-body uppercase tracking-[0.4em] text-xs mb-4 block">Established 2024</span>
            <h1 className="font-headline text-6xl md:text-9xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-white">
              The Cultural <br/> <span className="text-primary">Monolith</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pl-12 pb-4">
            <p className="font-body text-white/60 text-lg leading-relaxed max-w-sm">
              Lábi is an aggressive fusion of ancestral craftsmanship and the kinetic energy of modern Lagos streetwear.
            </p>
          </div>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <span className="text-monolith font-headline text-8xl font-black text-white/5 uppercase select-none">Ancestral Future</span>
        </div>
      </header>

      {/* Heritage Section */}
      <section className="py-32 px-8 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/5] w-full">
            <Image src="/images/jackets/LA-504.jpeg" alt="Heritage" fill className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-headline text-5xl font-bold uppercase mb-8 tracking-tighter">The Heritage</h2>
            <div className="space-y-6 text-white/60 font-body text-lg leading-relaxed">
              <p>Aso Oke is not just fabric; it is a prestige hand-woven cloth created by the Yoruba people of West Africa. For centuries, these textiles have signified status, celebration, and spiritual grounding.</p>
              <p>Lábi takes this sacred geometry and deconstructs it. We strip away the formal expectations of traditional attire and inject the rugged, oversized silhouettes of the global street culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section className="bg-surface-container-low py-32 px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <h2 className="font-headline text-5xl md:text-7xl font-black uppercase text-white tracking-tight">The Craft</h2>
              <p className="font-label text-primary uppercase tracking-widest mt-4">Hand-Spun Perfection</p>
            </div>
            <div className="max-w-md text-white/60 font-body">
              Each garment begins at the spindle. We source raw cotton, hand-spun by master artisans in Iseyin, ensuring that every thread retains its organic texture.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative group overflow-hidden h-[500px]">
              <Image src="/images/filas/LA-316.jpeg" alt="Loom" fill className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-end">
                <h3 className="font-headline text-2xl font-bold text-white uppercase mb-2">The Loom</h3>
                <p className="text-white/70 max-w-xs">Our narrow-strip looms produce fabrics that are inherently durable and structurally superior.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-1/2 bg-surface-container-highest p-10 flex flex-col justify-center border-l-4 border-primary">
                <span className="font-headline text-4xl font-black text-primary mb-4">01</span>
                <h4 className="font-headline font-bold uppercase mb-2">Organic Dyeing</h4>
                <p className="text-sm text-white/50">Using fermented indigo and natural pigments to achieve deep obsidian hues.</p>
              </div>
              <div className="h-1/2 bg-surface-container-high p-10 flex flex-col justify-center">
                <span className="font-headline text-4xl font-black text-white/20 mb-4">02</span>
                <h4 className="font-headline font-bold uppercase mb-2">Precision Tailoring</h4>
                <p className="text-sm text-white/50">Each piece is hand-assembled in our Lagos atelier, marrying raw edges with high-fashion finishing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-40 px-8 lg:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <span className="font-headline text-[30rem] font-black uppercase leading-none">LÁBI</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-headline text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter italic">The Mission</h2>
          <p className="font-body text-xl md:text-3xl text-white leading-tight mb-16">
            To preserve the <span className="text-primary">sanctity of the weave</span> while claiming space in the future of global luxury.
          </p>
          <Link href="/catalog" className="inline-flex items-center gap-6 bg-primary text-black px-12 py-6 font-headline font-black uppercase tracking-widest hover:bg-white transition-all group">
            Explore the Collection
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
