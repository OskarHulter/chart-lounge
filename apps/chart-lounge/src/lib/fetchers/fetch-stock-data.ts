import { env } from 'process';
import {
  baseUrl,
  defaultResolution,
  defaultSymbol,
  type Resolution,
} from '@/lib/constants';

type StockDataOptions = {
  symbol?: string;
  resolution?: Resolution;
};

export async function getStockData(options: StockDataOptions) {
  const { symbol, resolution } = options;
  const url = `${baseUrl}?function=${resolution ?? defaultResolution}&symbol=${
    symbol ?? defaultSymbol
  }${resolution === 'TIME_SERIES_INTRADAY' ? '&interval=60min' : ''}&apikey=${
    env.ALPHA_VANTAGE_KEY ?? ''
  }`;
  try {
    const response = await fetch(url, {
      headers: {
        // Some APIs may require a specific User-Agent
        'User-Agent': 'javascript-fetch',
      },
    });

    // The fetch() promise only rejects on network errors.
    // We need to manually check for HTTP errors (like 404 or 500).
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // response.json() returns a promise, so we await it
    const data = await response.json();

    // Data is successfully parsed as a JSON object
    console.log(data);
    return data;
  } catch (error) {
    // This will catch network errors and the error we threw above.
    console.error('Error fetching data:', error);
  }
}
