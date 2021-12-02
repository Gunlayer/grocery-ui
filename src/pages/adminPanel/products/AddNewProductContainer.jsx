import { useEffect } from 'react';
import ProductForm from '../../../components/adminPanel/products/editAndAddNewProduct/ProductForm';

const AddNewProductContainer = ({ setActive }) => {
  useEffect(() => {
    setActive('products');
  }, [setActive]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  return <ProductForm />;
};
export default AddNewProductContainer;
