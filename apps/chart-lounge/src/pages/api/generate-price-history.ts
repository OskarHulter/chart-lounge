import type { NextApiRequest, NextApiResponse } from 'next';
import {
  generateTimeStream,
  type TimeSeriesData,
} from '@/lib/data-generators/helpers';
import { NextResponse } from 'next/server';
export const runtime = 'edge';
type ResponseData = {
  message: string;
  data: TimeSeriesData;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const random = Math.floor(Math.random() * 100).toString();
  console.log('generate-price-history', random);
  const timeSeries = await generateTimeStream(random);

  if (!timeSeries) {
    return NextResponse.json([], { status: 500 });
  }
  return NextResponse.json(timeSeries, { status: 200 });
}
