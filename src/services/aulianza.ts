const API_URL = process.env.NEXT_PUBLIC_API as string;

export const getApiData = async (query: string) => {
  const response = await fetch(`${API_URL}/fetch?query=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const status: number = response.status;
  const responseJson = await response.json();

  if (status > 400) {
    return { status, data: {} };
  }

  return { status, data: responseJson.data };
};
