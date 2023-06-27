const OPENAI_URL = 'https://api.openai.com/v1/completions';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const postChatPrompt = async (prompt: string) => {
  const response = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-curie-001',
      prompt,
    }),
  });

  const status = response?.status;

  if (status >= 400) {
    return {
      status,
      message: response?.statusText,
    };
  }

  const data = await response.json();

  return {
    status,
    data,
  };
};

export const sendMessage = async (prompt: string) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    return data?.reply;
  } catch (error) {
    return '';
  }
};
