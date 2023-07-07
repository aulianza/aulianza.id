/* eslint-disable @typescript-eslint/no-explicit-any */
import querystring from 'querystring';

import { PAIR_DEVICES } from '@/common/constant/devices';
import {
  AccessTokenResponseProps,
  DeviceDataProps,
  DeviceResponseProps,
  NowPlayingResponseProps,
  SongProps,
  TopTracksResponseProps,
  TrackProps,
} from '@/common/types/spotify';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;
const TOKEN = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

const BASE_URL = 'https://api.spotify.com/v1';
const AVAILABLE_DEVICES_ENDPOINT = `${BASE_URL}/me/player/devices`;
const NOW_PLAYING_ENDPOINT = `${BASE_URL}/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `${BASE_URL}/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (): Promise<AccessTokenResponseProps> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });

  return response.json();
};

export const getAvailableDevices = async (): Promise<DeviceResponseProps> => {
  const { access_token } = await getAccessToken();

  const request = await fetch(AVAILABLE_DEVICES_ENDPOINT, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const status = request.status;

  if (status === 204 || status > 400) {
    return { status, data: [] };
  }

  const response: DeviceDataProps = await request.json();

  const devices = response?.devices?.map((device) => ({
    name: device.name,
    is_active: device.is_active,
    type: device.type,
    model: PAIR_DEVICES[device?.type]?.model || 'Unknown Device',
    id: PAIR_DEVICES[device?.type]?.id || 'aulianza-device',
  }));

  return {
    status,
    data: devices,
  };
};

export const getNowPlaying = async (): Promise<NowPlayingResponseProps> => {
  const { access_token } = await getAccessToken();

  const request = await fetch(NOW_PLAYING_ENDPOINT, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const status = request.status;

  if (status === 204 || status > 400) {
    return { status, isPlaying: false, data: null };
  }

  const response: SongProps = await request.json();

  if (!response.item) {
    return { status, isPlaying: false, data: null };
  }

  const isPlaying: boolean = response?.is_playing;
  const album: string = response?.item?.album.name ?? '';
  const albumImageUrl: string | undefined =
    response?.item?.album?.images?.find((image) => image?.width === 640)?.url ??
    undefined;
  const artist: string =
    response?.item?.artists?.map((artist) => artist?.name).join(', ') ?? '';
  const songUrl: string = response?.item?.external_urls?.spotify ?? '';
  const title: string = response?.item?.name ?? '';

  return {
    status,
    isPlaying,
    data: {
      album,
      albumImageUrl,
      artist,
      songUrl,
      title,
    },
  };
};

export const getTopTracks = async (): Promise<TopTracksResponseProps> => {
  const { access_token } = await getAccessToken();

  const request = await fetch(`${TOP_TRACKS_ENDPOINT}?limit=10`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const status = request.status;

  if (status === 204 || status > 400) {
    return { status, data: [] };
  }

  const getData = await request.json();

  const tracks: TrackProps[] = getData.items.map((track: any) => ({
    album: {
      name: track.album.name,
      image: track.album.images.find(
        (image: { width: number }) => image.width === 64
      ),
    },
    artist: track.artists
      .map((artist: { name: string }) => artist.name)
      .join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return { status, data: tracks };
};
