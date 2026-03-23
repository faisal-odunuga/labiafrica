"use client";

import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const CartDrawer = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    toggleCart();
    router.push('/checkout');
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-500",
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )} 
        onClick={toggleCart}
      />

      {/* Drawer */}
      <aside 
        className={cn(
          "fixed right-0 top-0 h-full w-full sm:w-[450px] bg-[#0e0e0e] z-[100] border-l border-white/10 flex flex-col shadow-2xl transition-transform duration-500 ease-in-out font-headline",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-8 flex justify-between items-center border-b border-white/5">
          <div>
            <h2 className="text-2xl font-black text-primary uppercase tracking-tighter">Your Bag</h2>
            <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mt-1">Lábi Africa Exclusive</p>
          </div>
          <button className="text-white/70 hover:text-primary transition-colors" onClick={toggleCart}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 hide-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-40">
              <span className="material-symbols-outlined text-6xl">shopping_bag</span>
              <p className="uppercase tracking-widest text-xs">Your bag is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-6 group">
                <div className="w-24 h-32 bg-surface-container-highest overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-white uppercase tracking-tight">{item.name} — {item.model}</h3>
                      <button 
                        className="text-white/30 hover:text-red-500 transition-colors"
                        onClick={() => removeFromCart(item.id, item.size)}
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Size: {item.size} | {item.fabric}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 border border-white/10 px-3 py-1">
                      <button className="text-white/40 hover:text-white" onClick={() => updateQuantity(item.id, item.size, -1)}>-</button>
                      <span className="text-xs font-bold">{item.quantity}</span>
                      <button className="text-white/40 hover:text-white" onClick={() => updateQuantity(item.id, item.size, 1)}>+</button>
                    </div>
                    <p className="text-sm font-bold text-primary">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 bg-surface-container-low border-t border-white/10 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-white/50 uppercase tracking-widest">
                <span>Subtotal</span>
                <span>₦{totalPrice.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between items-center text-xs text-white/50 uppercase tracking-widest">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between items-center text-lg font-black text-white uppercase tracking-tighter pt-2">
                <span>Total</span>
                <span className="text-primary">₦{totalPrice.toLocaleString()}.00</span>
              </div>
            </div>
            <button 
              className="w-full bg-primary py-6 text-black font-black text-sm uppercase tracking-[0.3em] hover:bg-white transition-all active:scale-95"
              onClick={handleCheckout}
            >
              Checkout Now
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
