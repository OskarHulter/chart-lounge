import type { PriceHistory } from '@/lib/schema/asset';
import { useQuery } from '@tanstack/react-query';

type Asset = {
  id: number;
  title: string;
  body: string;
};

const fetchTimeSeries = async (limit = 100): Promise<Array<PriceHistory>> => {
  const response = await fetch('/api/generate-price-history');
  const data = await response.json();
  return data.filter((x: Asset) => x.id <= limit);
};

const fetchAssets = async (limit = 100): Promise<Array<Asset>> => {
  const response = await fetch('/api/asset');
  const data = await response.json();
  return data.filter((x: Asset) => x.id <= limit);
};

const useAssets = (limit: number) => {
  return useQuery({
    queryKey: ['assets', limit],
    queryFn: () => fetchAssets(limit),
  });
};

export { useAssets, fetchAssets, fetchTimeSeries };
