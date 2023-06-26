import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.body;

  const endpoint = 'https://api.openai.com/v1/chat/completions';

  const header = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  };

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  };

  try {
    const response = await axios.post<{
      choices: [{ message: { content: string } }];
    }>(endpoint, payload, header);

    const reply = response?.data?.choices[0]?.message?.content;

    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred!' });
  }
}
