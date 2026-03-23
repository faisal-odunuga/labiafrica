"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const shippingOptions = [
  {
    id: "standard",
    name: "Standard Dispatch",
    description: "3-5 business days within Nigeria",
    cost: 3500,
  },
  {
    id: "express",
    name: "Express Priority",
    description: "1-2 business days Lagos, 2-3 nationwide",
    cost: 7500,
  },
];

const paymentOptions = [
  { id: "card", label: "Card (Visa / MasterCard / Verve)" },
  { id: "transfer", label: "Direct Bank Transfer" },
  { id: "delivery", label: "Pay on Delivery (Lagos only)" },
];

const CheckoutPage = () => {
  const router = useRouter();
  const { cart, totalPrice, clearCart, recordOrder } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "Nigeria",
    notes: "",
    shippingMethod: shippingOptions[0].id,
    paymentMethod: paymentOptions[0].id,
  });

  useEffect(() => {
    if (cart.length === 0) return;
    // prefill name/email if already entered before using sessionStorage
    const saved = sessionStorage.getItem("labi_checkout_prefill");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setForm((prev) => ({ ...prev, ...parsed }));
      } catch {
        // ignore parse error
      }
    }
  }, [cart.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      sessionStorage.setItem("labi_checkout_prefill", JSON.stringify(next));
      return next;
    });
  };

  const selectedShipping = useMemo(
    () => shippingOptions.find((opt) => opt.id === form.shippingMethod) ?? shippingOptions[0],
    [form.shippingMethod]
  );

  const subtotal = totalPrice;
  const shippingCost = selectedShipping.cost;
  const grandTotal = subtotal + shippingCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      router.push("/catalog");
      return;
    }

    const order = {
      id: `LABI-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString(),
      items: cart,
      subtotal,
      shipping: selectedShipping,
      shippingCost,
      total: grandTotal,
      paymentMethod: form.paymentMethod,
      customer: {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        country: form.country,
        notes: form.notes,
      },
      status: "processing",
    };

    recordOrder(order);
    clearCart();
    router.push("/receipt");
  };

  if (cart.length === 0) {
    return (
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-headline font-bold uppercase tracking-tight">Your bag is empty</h1>
        <p className="text-white/60">
          Add pieces from the collection to complete checkout.
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
    <main className="pt-28 pb-24 px-6 md:px-10 max-w-[1400px] mx-auto">
      <header className="flex flex-col gap-4 mb-12">
        <p className="text-[11px] font-label uppercase tracking-[0.35em] text-primary">Secure Checkout</p>
        <h1 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tight leading-none">
          Complete Your Monolith Order
        </h1>
        <p className="text-white/60 max-w-2xl">
          Lagos craftsmanship, delivered with precision. Verify your details to receive your heritage piece.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Form */}
        <section className="lg:col-span-7 space-y-10">
          <div className="bg-surface-container-high p-6 md:p-8 border border-white/10">
            <h2 className="text-xl font-headline font-bold uppercase tracking-widest mb-6">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">Full Name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="bg-black/20 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                  placeholder="Adaeze A."
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-black/20 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="bg-black/20 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                  placeholder="+234 800 000 0000"
                />
              </div>
            </div>
          </div>

          <div className="bg-surface-container-high p-6 md:p-8 border border-white/10">
            <h2 className="text-xl font-headline font-bold uppercase tracking-widest mb-6">Shipping</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">Address</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="bg-black/20 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                  placeholder="House / Street / Landmark"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">City</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="bg-black/20 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                  placeholder="Lagos"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">Country</label>
                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="bg-black/20 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                  placeholder="Nigeria"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">Order Note</label>
                <input
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className="bg-black/20 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                  placeholder="Gate code, delivery window, etc."
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Shipping Method</p>
              <div className="grid gap-3">
                {shippingOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-center gap-4 border border-white/10 p-4 cursor-pointer transition-colors ${form.shippingMethod === option.id ? "border-primary bg-primary/5" : "hover:border-primary/50"}`}
                  >
                    <input
                      type="radio"
                      name="shippingMethod"
                      value={option.id}
                      checked={form.shippingMethod === option.id}
                      onChange={handleChange}
                      className="accent-primary"
                    />
                    <div className="flex-1">
                      <p className="font-headline font-bold uppercase">{option.name}</p>
                      <p className="text-sm text-white/60">{option.description}</p>
                    </div>
                    <span className="font-headline text-primary">₦{option.cost.toLocaleString()}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface-container-high p-6 md:p-8 border border-white/10">
            <h2 className="text-xl font-headline font-bold uppercase tracking-widest mb-6">Payment</h2>
            <div className="space-y-3">
              {paymentOptions.map((option) => (
                <label
                  key={option.id}
                  className={`flex items-center gap-4 border border-white/10 p-4 cursor-pointer transition-colors ${form.paymentMethod === option.id ? "border-primary bg-primary/5" : "hover:border-primary/50"}`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={option.id}
                    checked={form.paymentMethod === option.id}
                    onChange={handleChange}
                    className="accent-primary"
                  />
                  <p className="font-headline font-bold uppercase">{option.label}</p>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container-highest border border-white/10 p-6 md:p-8 space-y-6 sticky top-28">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Order</p>
                <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">Summary</h3>
              </div>
              <span className="text-white/50 text-sm">{cart.length} item(s)</span>
            </div>

            <div className="space-y-4 max-h-72 overflow-y-auto hide-scrollbar pr-1">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b border-white/10 pb-4">
                  <div className="w-16 h-20 bg-surface overflow-hidden shrink-0 relative">
                    <Image src={item.image} alt={item.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-headline font-bold uppercase leading-tight">{item.name}</p>
                    <p className="text-[11px] text-white/50 uppercase tracking-widest">Size {item.size} · {item.model}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-headline text-primary">₦{item.price.toLocaleString()}</p>
                    <p className="text-xs text-white/50">x {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Shipping</span>
                <span>₦{shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Duties</span>
                <span>Included</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/10 text-lg font-headline font-bold">
                <span>Total</span>
                <span className="text-primary">₦{grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-primary text-black py-4 font-headline font-black uppercase tracking-[0.25em] hover:bg-white transition-all active:scale-95"
            >
              Place Order
            </button>
            <p className="text-xs text-white/50 leading-relaxed">
              By placing this order, you agree to our terms of sale. Lagos deliveries qualify for white-glove handoff.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default CheckoutPage;
