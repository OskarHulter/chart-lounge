import { getStockData } from '@/lib/handler/fetch';
import type { TimeSeriesData } from '@/lib/schema/asset';
import type { NextApiRequest, NextApiResponse } from 'next';
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
  // const body = req.body.parse();
  const timeSeries = await getStockData({ symbol: 'IBM' });

  if (!timeSeries) {
    return NextResponse.json([], { status: 500 });
  }
  console.log('timeSeries', timeSeries);
  return NextResponse.json(timeSeries, { status: 200 });
}
