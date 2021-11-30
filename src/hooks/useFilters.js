import axios from 'axios';
import { useQuery } from 'react-query';

export const useFilters = (filters, token) =>
  useQuery(['filters', filters, token], fetchApi, {
    staleTime: 60 * 1000 * 5,
    cacheTime: 0,
  });

const fetchApi = async (context) => {
  const [, { name, pageNumber }, token] = context.queryKey;
  const res = await axios({
    method: 'get',
    url: `/api/products/?name=${name}&pageNumber=${pageNumber}`,
    headers: {
      Authorization: `${token}`,
    },
  });
  return res.data;
};
