import { fetchAssets } from '@/lib/fetchers';
import { useQuery } from '@tanstack/react-query';

const useAssets = (limit: number) => {
  return useQuery({
    queryKey: ['assets', limit],
    queryFn: () => fetchAssets(limit),
  });
};

export { useAssets };
