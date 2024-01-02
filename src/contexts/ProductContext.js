import React, { createContext, useState, useEffect } from 'react';

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [product, setProducts] = useState([]);
  // fetch product
  useEffect(() => {
    const fetchProducts = async () => {
      // resource file count in this
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return <ProductContext.Provider value={{ product }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
