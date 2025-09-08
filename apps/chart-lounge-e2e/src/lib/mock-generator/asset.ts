import { generateTimeStream } from './helpers';

export default async function generateAsset(seed: string) {
  const result = generateTimeStream(seed);
  return result;
}
