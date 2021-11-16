import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { Box, useMediaQuery } from '@mui/material';
import GreenPageHeader from '../../components/common/GreenPageHeader';
import Spinner from '../../components/common/Spinner';
import ProductName from '../../components/productDetails/ProductName';
import ProductRating from '../../components/productDetails/ProductRating';
import ProductDescription from '../../components/productDetails/ProductDescription';
import ProductPrice from '../../components/productDetails/ProductPrice';
import ProductSize from '../../components/productDetails/ProductSize';
import ProductQuantity from '../../components/productDetails/ProductQuantity';
import ProductSubtotalPrice from '../../components/productDetails/ProductSubtotalPrice';
import AddToCartButton from '../../components/productDetails/AddToCartButton';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { addToCartRequest } from '../../helpers/addToCartRequest';

const productDetailsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 320,
  paddingLeft: { xs: 4, lg: 10 },
  paddingRight: { xs: 4, lg: 10 },
  paddingTop: { xs: 5, lg: 10 },
  paddingBottom: { xs: 5, lg: 10 },
};

const ProductDetailsContainer = () => {
  const { productId } = useParams();

  const maxWidth750 = useMediaQuery('(max-width:750px)');

  const [quantity, setQuantity] = useState(1);

  const [activeSize, setActiveSize] = useState(0);

  const product = useProduct(productId);

  const productDetailsContainerRef = useRef();

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { token, isAuth, email } = auth;

  useEffect(() => {
    productDetailsContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [product.data]);

  if (product.isLoading) {
    return <Spinner />;
  }

  if (product.isError) {
    return null;
  }

  const { id, image, name, rating, description, price, sizes, sizeType } =
    product.data;

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(+(quantity - 1));
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < 99) {
      setQuantity(+(quantity + 1));
    }
  };

  const handleQuantityChange = (e) => {
    const number = +e.target.value;
    if (number !== '') {
      if (!Number.isNaN(number) && number > 0 && number < 100) {
        setQuantity(number);
      }
    } else setQuantity('');
  };

  const handleSizeChange = (index) => {
    setActiveSize(index);
  };

  const handleAddToCart = () => {
    const product = {
      productId: id,
      name,
      price,
      sizeType,
      size: sizes[activeSize],
      quantity,
      image,
    };

    dispatch(addItem(product));
    addToCartRequest({
      token,
      isAuth,
      productId: product.productId,
      size: product.size,
      quantity: product.quantity,
      email,
    });
  };

  const columnStyle = {
    display: 'flex',
    width: maxWidth750 ? '100%' : 'calc(50% - 30px)',
    flexDirection: 'column',
  };

  return (
    <>
      <GreenPageHeader title="Product" />
      <Box ref={productDetailsContainerRef} sx={productDetailsContainerStyle}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            maxWidth: 1100,
            flexGrow: 1,
            gap: '30px',
          }}
        >
          <Box sx={columnStyle}>
            <Box component="img" src={image} sx={{ width: '100%' }}></Box>
          </Box>
          <Box sx={columnStyle}>
            <ProductName name={name} />

            <ProductRating rating={rating} />

            <ProductDescription description={description} />

            <ProductPrice price={price} />

            <ProductSize
              sizes={sizes}
              activeSize={activeSize}
              product={product.data}
              handleSizeChange={handleSizeChange}
            />

            <ProductQuantity
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleQuantityChange={handleQuantityChange}
              quantity={quantity}
            />

            <ProductSubtotalPrice
              price={price}
              quantity={quantity}
              sizes={sizes}
              activeSize={activeSize}
            />

            <AddToCartButton
              handleAddToCart={handleAddToCart}
              disabled={!quantity}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetailsContainer;
