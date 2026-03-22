"use client";

import { useMemo } from 'react';
import { products } from '../data/products';

export const useProducts = (filters = {}) => {
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filters.category && product.category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }
      if (filters.priceRange) {
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
          return false;
        }
      }
      return true;
    });
  }, [filters]);

  const getProductById = (id) => {
    return products.find(p => p.id === id);
  };

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map(p => p.category))];
  }, []);

  return {
    products: filteredProducts,
    allProducts: products,
    getProductById,
    categories
  };
};
