import axios from 'axios';
import { useQuery } from 'react-query';

export const useProduct = (id) =>
  useQuery(['product', id], getProduct, {
    staleTime: 1000 * 60 * 5,
  });

const getProduct = async (context) => {
  const [, id] = context.queryKey;
  const res = await axios.get(`/api/products/${id}`);
  return res.data;
};
