import { PriceHistory } from '@chart-lounge/schema';
import { MockAsset } from './fetch-assets';

export const fetchTimeSeries = async (
  limit = 100
): Promise<Array<PriceHistory>> => {
  const response = await fetch('/api/generate-price-history');
  const data = await response.json();
  return data.filter((x: MockAsset) => x.id <= limit);
};
