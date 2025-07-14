import type { NextApiRequest, NextApiResponse } from 'next';
import { generateTimeStream } from '@/lib/data-generators/helpers';
type ResponseData = {
  message: string;
  result?: ReturnType<typeof generateTimeStream> | null;
  status?: 'success' | 'error' | 'pending';
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const result = await generateTimeStream(req.body.parse());
    res.status(200).send({ result, message: 'Data fetched successfully' });
  } catch (err) {
    console.error('Error generating time stream:', err);
    res.status(500).send({
      result: null,
      message: 'An error occurred',
      status: 'error',
    });
  }
}
