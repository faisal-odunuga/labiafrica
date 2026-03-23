import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] w-full py-20 px-8 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-black text-white mb-4 uppercase font-headline">Lábi Africa</div>
          <p className="text-white/50 text-xs leading-relaxed font-body uppercase tracking-wider">
            Reimagining heritage through the lens of modern luxury. Handcrafted in Nigeria.
          </p>
          <div className="mt-8 flex gap-6 text-white/50">
            <a href="#" className="hover:text-white transition-colors text-xs font-label uppercase tracking-widest">Instagram</a>
            <a href="#" className="hover:text-white transition-colors text-xs font-label uppercase tracking-widest">Twitter</a>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-white font-headline font-bold text-sm uppercase tracking-widest mb-6">Shopping</h5>
          <ul className="space-y-3 font-body text-xs tracking-widest uppercase text-white/50">
            <li><a href="#" className="hover:text-white transition-colors">Customer Care</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Measurement Guide</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-white font-headline font-bold text-sm uppercase tracking-widest mb-6">Discovery</h5>
          <ul className="space-y-3 font-body text-xs tracking-widest uppercase text-white/50">
            <li><Link href="/story" className="hover:text-white transition-colors">Brand Story</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Woven Legacy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-white font-headline font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h5>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="JOIN THE CIRCLE" 
              className="bg-surface-container-high border-none text-xs font-label p-4 focus:ring-1 focus:ring-primary outline-none text-white"
            />
            <button className="bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] py-4 hover:bg-primary transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs tracking-widest uppercase text-white/30">© 2024 LÁBI AFRICA. ALL RIGHTS RESERVED.</p>
        <p className="font-body text-[10px] tracking-widest uppercase text-white/20">Designed for the Cultural Monolith</p>
      </div>
    </footer>
  );
};

export default Footer;
