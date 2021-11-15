import axios from 'axios';
import { useQuery } from 'react-query';

export const useMostPopularProducts = () =>
  useQuery(['mostPopularProducts'], getMostPopularProducts, {
    staleTime: 1000 * 60 * 5,
  });

const getMostPopularProducts = async () => {
  const res = await axios.get('/api/products/mostpopular', {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbmRhdmEuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjM2NTM5Mzc0LCJleHAiOjE2MzcxNDQxNzR9.8eEiEQNR3Cs_ObF0XKWHwerFANffO9CbZPaODuMmqNc',
    },
  });
  return res.data;
};
