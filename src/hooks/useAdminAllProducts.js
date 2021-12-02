import axios from 'axios';
import { useQuery } from 'react-query';

export const useAdminAllProducts = (token) =>
  useQuery(['adminAllProducts', token], getAdminAllProducts, {
    cacheTime: 0,
  });

const getAdminAllProducts = async (context) => {
  const [, token] = context.queryKey;
  const res = await axios({
    method: 'get',
    url: '/api/products',
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};
