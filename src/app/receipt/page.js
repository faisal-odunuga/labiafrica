"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const addDays = (dateString, days) => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString("en-NG", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

const ReceiptPage = () => {
  const router = useRouter();
  const { lastOrder } = useCart();

  useEffect(() => {
    if (!lastOrder) return;
    // scroll to top on load for fresh receipt view
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lastOrder]);

  const estimatedDelivery = useMemo(() => {
    if (!lastOrder) return null;
    const delta = lastOrder.shipping?.id === "express" ? 2 : 5;
    return addDays(lastOrder.createdAt, delta);
  }, [lastOrder]);

  if (!lastOrder) {
    return (
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-headline font-bold uppercase tracking-tight">No recent order</h1>
        <p className="text-white/60">
          You’ll see your receipt here after completing checkout.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="/catalog" className="bg-primary text-black px-8 py-4 font-headline font-bold uppercase tracking-widest">
            Browse Catalog
          </Link>
          <Link href="/" className="border border-white/20 px-8 py-4 font-headline font-bold uppercase tracking-widest text-white hover:border-primary">
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-24 px-6 md:px-10 max-w-[1100px] mx-auto space-y-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center">
            <span className="material-symbols-outlined">check</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Order Confirmed</p>
            <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight">
              Thank you, {lastOrder.customer?.fullName || "Monolith Client"}
            </h1>
          </div>
        </div>
        <p className="text-white/60 max-w-2xl">
          We’re preparing your heritage pieces. A confirmation email has been sent to {lastOrder.customer?.email || "your inbox"}.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-label uppercase tracking-[0.25em] text-white/60">
          <span className="bg-white/5 px-3 py-2 border border-white/10">Order ID: {lastOrder.id}</span>
          <span className="bg-white/5 px-3 py-2 border border-white/10">Status: Processing</span>
          {estimatedDelivery && (
            <span className="bg-white/5 px-3 py-2 border border-white/10">
              Est. Delivery: {estimatedDelivery}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-surface-container-highest border border-white/10 p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-headline font-bold uppercase tracking-widest">Items</h2>
              <span className="text-white/50 text-sm">{lastOrder.items.length} item(s)</span>
            </div>
            <div className="space-y-4">
              {lastOrder.items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b border-white/10 pb-4">
                  <div className="w-16 h-20 bg-surface overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-headline font-bold uppercase leading-tight">{item.name}</p>
                    <p className="text-[11px] text-white/50 uppercase tracking-widest">
                      Size {item.size} · {item.model}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-headline text-primary">₦{item.price.toLocaleString()}</p>
                    <p className="text-xs text-white/50">Qty {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-high border border-white/10 p-6 md:p-8 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-headline uppercase tracking-[0.25em] text-white/70 mb-2">Ship To</h3>
              <p className="text-white font-medium leading-relaxed">
                {lastOrder.customer?.fullName}<br />
                {lastOrder.customer?.address}<br />
                {lastOrder.customer?.city} {lastOrder.customer?.country}
              </p>
              <p className="text-white/60 text-sm mt-2">
                Phone: {lastOrder.customer?.phone || "—"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-headline uppercase tracking-[0.25em] text-white/70 mb-2">Shipping Method</h3>
              <p className="text-white font-medium">{lastOrder.shipping?.name}</p>
              <p className="text-white/60 text-sm">{lastOrder.shipping?.description}</p>
            </div>
            <div>
              <h3 className="text-sm font-headline uppercase tracking-[0.25em] text-white/70 mb-2">Payment</h3>
              <p className="text-white font-medium uppercase">{lastOrder.paymentMethod}</p>
              <p className="text-white/60 text-sm">No charge until dispatch.</p>
            </div>
            <div>
              <h3 className="text-sm font-headline uppercase tracking-[0.25em] text-white/70 mb-2">Notes</h3>
              <p className="text-white/80 text-sm">
                {lastOrder.customer?.notes || "No additional instructions."}
              </p>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-surface-container-highest border border-white/10 p-6 md:p-8 space-y-4 sticky top-24">
            <h2 className="text-xl font-headline font-bold uppercase tracking-widest">Payment Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span>₦{lastOrder.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Shipping</span>
                <span>₦{lastOrder.shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Duties</span>
                <span>Included</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/10 text-lg font-headline font-bold">
                <span>Total</span>
                <span className="text-primary">₦{lastOrder.total.toLocaleString()}</span>
              </div>
            </div>
            <Link
              href="/catalog"
              className="block w-full bg-primary text-black text-center py-4 font-headline font-black uppercase tracking-[0.25em] hover:bg-white transition-all active:scale-95"
            >
              Continue Shopping
            </Link>
            <Link
              href="/story"
              className="block w-full border border-white/20 text-center py-4 font-headline font-bold uppercase tracking-[0.2em] text-white hover:border-primary"
            >
              Discover the Story
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ReceiptPage;
