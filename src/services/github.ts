const user_id: string = 'ryan-sirka';
const read_user_token: string | undefined = process.env.GITHUB_READ_USER_TOKEN;

const GITHUB_USER_ENDPOINT: string = 'https://api.github.com/graphql';

const GITHUB_USER_QUERY: string = `query {
  user(login: "${user_id}") {
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

export const getGithubUser = async () => {
  const response = await fetch(GITHUB_USER_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${read_user_token}`,
    },
    body: JSON.stringify({
      query: GITHUB_USER_QUERY,
    }),
  });
  const status: number = response.status;

  if (status > 400) {
    return { status, data: {} };
  }

  const responseJson = await response.json();

  return { status, data: responseJson.data.user };
};
