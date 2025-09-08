import { copycat } from '@snaplet/copycat';

export function generateFakeUser(seed: string) {
  return {
    id: copycat.uuid(seed),
    name: copycat.fullName(seed),
    username: copycat.username(seed),
    phone: copycat.phoneNumber(seed),
    email: copycat.email(seed),
    country: copycat.country(seed),
    createdAt: copycat.dateString(seed),
  };
}

export function generateFakeAsset(seed: string) {
  return {
    id: copycat.uuid(seed),
    symbol: copycat.uuid(seed),
    name: copycat.words(seed),
    price: copycat.float(seed, { min: 0.1, max: 5000 }),
    description: copycat.sentence(seed),
    updatedAt: copycat.dateString(seed),
  };
}

export function generateOHLCV(seed: string) {
  const low = copycat.float(seed, { min: 0.1, max: 5000 });
  const high = copycat.float(seed, { min: low, max: 10000 });
  const open = copycat.float(seed, { min: low, max: high });
  const close = copycat.float(seed, { min: low, max: high });
  const volume = copycat.float(seed, { min: 0.1, max: 10000000 });

  return {
    low,
    high,
    open,
    close,
    volume,
  };
}
export function generateTimeUnit(seed: string) {
  const OHLCV = generateOHLCV(seed);
  const timestamp = copycat.dateString(seed);
  return {
    ...OHLCV,
    timestamp,
  };
}

export type TimeSeriesData = Array<TimeUnit>;
export function generateTimeStream(seed: string, length = 200) {
  const timeStream: TimeSeriesData = [];

  for (let i = 0; i < length; i++) {
    // Generate a new time unit for each iteration
    timeStream.push(generateTimeUnit(`${seed}-${i}`));
  }
  return timeStream;
}
