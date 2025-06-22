import { useState, useEffect } from 'react';

import { fetchProducts } from '../services/productsService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
  try {
    const data = await fetchProducts();
    setProducts(data);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, loading };
};
