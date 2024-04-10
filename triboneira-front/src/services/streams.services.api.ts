// futuramente, aplicar um fetch para pegar os dados da API de teams da twitch
const triboList: string[] = [
  'gaules',
  'michel',
  'bt0tv',
  'liminhag0d',
  'gaulestv',
  'velhovamp',
  'boltz',
  'rnakano',
  'lett',
  'ale_apoka',
  'llauqstv',
];

const TOKEN = process.env.TWITCH_ACCESS_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID_TWITCH;

const toSearchParam = (arr: string[]): string => {
  return arr.map((item) => `user_login=${item}`).join('&');
};

const toSearchParamUser = (arr: string[]): string => {
  return arr.map((item) => `login=${item}`).join('&');
};

export const getStreams = async () => {
  try {
    const response = await fetch(
      `https://api.twitch.tv/helix/streams?${toSearchParam(triboList)}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Client-Id': CLIENT_ID as string,
        },
      },
    );
    console.log('request feita streams');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUsersStreams = async () => {
  try {
    const url = `https://api.twitch.tv/helix/users?${toSearchParamUser(triboList)}`;
    const response = await fetch(
      url,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Client-Id': CLIENT_ID as string,
        },
      },
    );
    console.log('request feita users');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
