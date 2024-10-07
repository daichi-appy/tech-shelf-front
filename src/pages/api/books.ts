import type { NextApiRequest, NextApiResponse } from 'next';
import { BookApiResponse } from '@/types/books';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query;
  if (typeof search !== 'string') {
    res.status(400).json({ error: 'Invalid search query' });
    return;
  }
  
  try {
    const apiUrl = `${process.env.API_URL}/books/search?q=${encodeURIComponent(search)}`;
    const apiRes = await fetch(apiUrl);
    const data: BookApiResponse = await apiRes.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
}
