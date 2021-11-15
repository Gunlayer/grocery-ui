import axios from 'axios';

export const addToCartRequest = (product) => {
  const { productId, size, quantity, userEmail, isAuth } = product;

  if (isAuth) {
    axios.post('/api/cart', {
      productId,
      size,
      quantity,
      userEmail,
    });
  }
};
