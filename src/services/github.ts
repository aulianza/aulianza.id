import { GITHUB_ACCOUNTS } from "@/common/constant/github";

const GITHUB_USER_ENDPOINT: string = 'https://api.github.com/graphql';

const GITHUB_USER_QUERY: string = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

export const fetchGithubData = async (username: string, token: string | undefined) => {
  const response = await fetch(GITHUB_USER_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({
      query: GITHUB_USER_QUERY,
      variables: {
        username: username,
      },
    }),
  });

  const status: number = response.status;
  const responseJson = await response.json();

  if (status > 400) {
    return { status, data: {} };
  }

  return { status, data: responseJson.data.user };
};


export const getGithubUser = async (type: string) => {
  const account = GITHUB_ACCOUNTS.find((account) => account?.type === type && account?.is_active);

  if (!account) {
    throw new Error('Invalid user type');
  }

  const { username, token } = account;
  return await fetchGithubData(username, token);
};