import axios from 'axios';

export const sendMessage = async (prompt: string) => {
  try {
    const response = await axios.post('/api/chat', { prompt });
    return response.data.reply;
  } catch (error) {
    return '';
  }
};
