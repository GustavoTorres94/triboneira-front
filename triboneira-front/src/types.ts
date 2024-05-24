import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

type ReduxState = any;

export type AppDispatch = ThunkDispatch<ReduxState, null, AnyAction>;

export type NavButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isDisabled?: boolean | undefined;
};

export type SideCardProps = {
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
  description?: string;
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

export type StorageValueType = string | number | boolean | object | Array<any>;

export type StorageType = {
  key: string;
  value: StorageValueType;
};

export type StorageErrorType = {
  error: string;
};

export type UsersType = {
  username: string;
};

export type NewsSliderType = {
  id: number;
  image: string;
  category: string;
  releaseTime: string;
  description: string;
  title: string;
};

export type RankingType = {
  id: number;
  position: number;
  teamLogo: string;
  teamName: string;
};

export type RankingTableProps = {
  title: string;
  ranking: RankingType[];
};

export type NewsSumaryType = {
  id: number;
  title: string;
  realeaseTime: string;
  category: string;
};

export type NewsSumaryProps = {
  news: NewsSumaryType[];
};

export type AdBannerProps = {
  text: string;
  imageArr: string[];
  linkTo: string;
};

export type CustonUserStreamerTypes = {
  id: string;
  display_name: string;
  profile_image_url: string;
};

export type StreamerCardProps = {
  streamer: CustonUserStreamerTypes[];
};

export type InfoCardProps = {
  img: string;
  name: string;
  nickname: string;
  birthDate: string;
  twitch?: string;
  youtube?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
};

export type GenericAboutProps = {
  name: string;
  birthDate: string;
  facebook?: string;
  instagram?: string;
  twitch?: string;
  twitter?: string;
  youtube?: string;
};
