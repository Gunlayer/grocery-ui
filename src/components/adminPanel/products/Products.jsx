import { useEffect } from 'react';

const Products = ({ setActive }) => {
  useEffect(() => {
    setActive('products');
  }, [setActive]);
  return <div>Products</div>;
};

export default Products;
