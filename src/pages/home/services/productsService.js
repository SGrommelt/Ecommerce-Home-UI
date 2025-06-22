import products from '../mocks/products';

// This function is used to simulate fetching products from a backend
// In a real scenario it should be replaced with call to API
export const fetchProducts = () => {
  return Promise.resolve(products);
};
