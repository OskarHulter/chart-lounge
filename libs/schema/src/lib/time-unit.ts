import * as z from 'zod';

export const timeUnitSchema = z.object({
  timestamp: z.string(),
  open: z.number(),
  high: z.number(),
  low: z.number(),
  close: z.number(),
  volume: z.number(),
});

export const alhpaVantageTimeUnitSchema = z.object({
  '1. open': z.number(),
  '2. high': z.number(),
  '3. low': z.number(),
  '4. close': z.number(),
  '5. volume': z.number(),
});
export type TimeUnit = z.infer<typeof timeUnitSchema>;
export type AlhpaVantageTimeUnit = z.infer<typeof alhpaVantageTimeUnitSchema>;

export type PriceHistory = Array<TimeUnit>;
export type TimeSeriesData = PriceHistory;
