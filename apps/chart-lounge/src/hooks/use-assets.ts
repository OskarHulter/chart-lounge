import { useQuery } from '@tanstack/react-query';

type Asset = {
  id: number;
  title: string;
  body: string;
};

const fetchAssets = async (limit = 10): Promise<Array<Asset>> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/assets');
  const data = await response.json();
  return data.filter((x: Asset) => x.id <= limit);
};

const useAssets = (limit: number) => {
  return useQuery({
    queryKey: ['assets', limit],
    queryFn: () => fetchAssets(limit),
  });
};

export { useAssets, fetchAssets };
