"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  // Hydrate from localStorage once on mount
  useEffect(() => {
    try {
      const storedCart = typeof window !== 'undefined' ? localStorage.getItem('labi_cart') : null;
      const storedLastOrder = typeof window !== 'undefined' ? localStorage.getItem('labi_last_order') : null;
      const storedOrders = typeof window !== 'undefined' ? localStorage.getItem('labi_orders') : null;

      if (storedCart) setCart(JSON.parse(storedCart));
      if (storedLastOrder) setLastOrder(JSON.parse(storedLastOrder));
      if (storedOrders) setOrders(JSON.parse(storedOrders));
    } catch (err) {
      console.error('Failed to hydrate cart/orders from storage', err);
    }
  }, []);

  // Persist cart, lastOrder, and orders
  useEffect(() => {
    try {
      localStorage.setItem('labi_cart', JSON.stringify(cart));
    } catch (err) {
      console.error('Failed to persist cart', err);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('labi_last_order', JSON.stringify(lastOrder));
    } catch (err) {
      console.error('Failed to persist last order', err);
    }
  }, [lastOrder]);

  useEffect(() => {
    try {
      localStorage.setItem('labi_orders', JSON.stringify(orders));
    } catch (err) {
      console.error('Failed to persist orders', err);
    }
  }, [orders]);

  const addToCart = useCallback((product, size = 'M') => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id && item.size === size);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, size, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId, size) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === productId && item.size === size)));
  }, []);

  const updateQuantity = useCallback((productId, size, delta) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === productId && item.size === size) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const recordOrder = useCallback((order) => {
    setLastOrder(order);
    setOrders(prev => [order, ...prev]);
    setIsCartOpen(false);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      recordOrder,
      lastOrder,
      orders,
      isCartOpen,
      setIsCartOpen,
      toggleCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
