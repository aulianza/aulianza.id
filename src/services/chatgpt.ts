import axios from 'axios';

const OPENAI_URL = 'https://api.openai.com/v1/completions';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const postChatPrompt = async (prompt: string) => {
  const response = await axios.post(
    OPENAI_URL,
    {
      model: 'text-davinci-003',
      max_tokens: 1000,
      temperature: 0,
      prompt: prompt + '. answer briefly',
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    },
  );

  const status = response?.status;

  if (status >= 400) {
    return {
      status,
      message: response?.statusText,
    };
  }

  const data = response.data;

  return {
    status,
    data,
  };
};

export const sendMessage = async (prompt: string) => {
  try {
    const response = await axios.post('/api/chat', {
      prompt,
    });

    const data = response.data;

    return data?.reply;
  } catch (error) {
    return '';
  }
};
