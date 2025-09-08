import { generateTimeStream } from './helpers';

export async function generatePriceHistory() {
  const random = Math.floor(Math.random() * 100).toString();
  console.log('generate-price-history', random);
  const timeSeries = generateTimeStream(random);

  return timeSeries;
}
