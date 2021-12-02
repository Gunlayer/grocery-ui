import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import ProductsCount from '../../../components/adminPanel/products/ProductsCount';
import { useFilters } from '../../../hooks/useFilters';

const productsCountContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const ProductsCountContainer = () => {
  const token = useSelector((state) => state.auth.token);
  const filters = useSelector((state) => state.adminProducts.filters);
  const filteredProducts = useFilters(filters, token);

  let text = '';

  if (filters.name === '' && !filteredProducts.isLoading) {
    text = `Total products: ${filteredProducts.data?.totalElements}`;
  } else {
    if (filteredProducts.isLoading) {
      text = 'Searching...';
    }

    if (filteredProducts.isError) {
      text = 'Nothing found';
    }

    if (filteredProducts.isSuccess) {
      const productsCount = filteredProducts.data?.totalElements;
      if (productsCount === 0) {
        text = 'Nothing found';
      } else if (productsCount === 1) {
        text = 'Found 1 product';
      } else {
        text = `Found ${productsCount} products`;
      }
    }
  }

  return (
    <Box sx={productsCountContainerStyle}>
      <ProductsCount text={text} />
    </Box>
  );
};

export default ProductsCountContainer;
