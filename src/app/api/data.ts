// pages/api/data.tsx
import type { NextApiRequest, NextApiResponse } from 'next';

// Interface matching the actual structure of the JSON data
interface Data {
  id: number;
  admin_name: string;
  client_name: string;
  admin_img: string;
  client_img: string;
  task: number;
  comment_amount: number;
  total_file: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
    try {
      const data = await import('../db/mock-data.json'); // Remove the incorrect type assertion
      res.status(200).json(data.default);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }