import axios from 'axios';

export const deleteFromCartRequest = (product) => {
  const { productId, size, quantity, userEmail, isAuth } = product;

  if (isAuth) {
    axios.delete('/api/cart', {
      data: {
        productId,
        size,
        quantity,
        userEmail,
      },
    });
  }
};
