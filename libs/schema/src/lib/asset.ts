import { z } from 'zod';

export const assetSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  title: z.string().min(1, 'Title is required'),
  ticker: z.string().min(2, 'Ticker is required'),
  lastPrice: z.coerce.number().positive('Price must be a positive number'),
  priceHistory: z.number(),
  lastUpdated: z.string(),
});

export type Asset = z.infer<typeof assetSchema>;
