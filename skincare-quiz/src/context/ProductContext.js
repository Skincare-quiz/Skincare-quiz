import { createContext } from 'react';

const ProductContext = createContext({
  allProducts: null,
  product: null,
  setProduct: () => {},
});

export default ProductContext;
