import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

type ReduxState = any;

export type AppDispatch = ThunkDispatch<ReduxState, null, AnyAction>;

export type NavButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export type SideCardProps = {
  // image: string;
  streamer: string;
  stream: StreamCustonType;
};

export type ToolTipProps = {
  userName: string;
  gameName: string;
  title: string;
  type: string;
  viewerCount: number;
};

export type StreamCustonType = {
  streamerName: string;
  game: string;
  title: string;
  type: string;
  viewers: number;
};

export type StreamType = {
  user_name: string;
  game_name: string;
  title: string;
  type: string;
  viewer_count: number;
  thumbnail_url?: string;
};

export type StreamerReturnType = {
  data: StreamType[];
};

export type UserStreamType = {
  id: string;
  login: string;
  display_name: string;
  profile_image_url: string;
};

export type UserReturnType = {
  data: UserStreamType[];
};

export type RegisterFormType = {
  name: string;
  lastName: string;
  birthDate: string;
  nickname: string;
  email: string;
  password: string;
};
