import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

type ReduxState = any;

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;

export type NavButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
};

export type SideCardProps = {
  image: string;
  streamer: string;
};

export type StreamType = {
  streamerName: string;
  game: string;
  title?: string;
  status: string;
  viewers?: number;
  image?: string;
};
