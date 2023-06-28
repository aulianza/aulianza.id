import { ReactNode } from 'react';

export interface AccessTokenResponseProps {
  access_token: string;
}

export interface DeviceProps {
  is_active: boolean;
  name: string;
  type: string;
  icon?: ReactNode;
  id?: string;
  model?: string;
}

export type DeviceInfoProps = Pick<DeviceProps, 'icon' | 'model' | 'id'>;

export interface DeviceDataProps {
  devices: DeviceProps[];
}

export interface DeviceResponseProps {
  status: number;
  data: DeviceProps[];
}

export interface SongProps {
  is_playing: boolean;
  item: {
    album: {
      name: string;
      images: {
        width: number;
        url: string;
      }[];
    };
    artists: {
      name: string;
    }[];
    external_urls: {
      spotify: string;
    };
    name: string;
  };
}

export interface TrackProps {
  album: {
    name: string;
    image: {
      width: number;
      url: string;
    };
  };
  artist: string;
  songUrl: string;
  title: string;
}

export interface NowPlayingProps {
  songUrl: string;
  albumImageUrl: string | undefined;
  album: string;
  title: string;
  artist: string;
}
export interface NowPlayingResponseProps {
  status: number;
  isPlaying: boolean;
  data: NowPlayingProps | null;
}

export interface TopTracksResponseProps {
  status: number;
  data: TrackProps[];
}
