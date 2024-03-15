import { NextApiRequest, NextApiResponse } from 'next';

import { postChatPrompt } from '@/services/chatgpt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { prompt } = req.body;

    const response = await postChatPrompt(prompt);

    if (response?.status >= 400) {
      res.status(response?.status).json({ error: response?.message });
    } else {
      const reply = response?.data?.choices[0]?.text;
      res.status(200).json({ reply });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
