import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { StreamType } from '../../types';

const initialState: StreamType = {
  streamerName: '',
  game: '',
  title: '',
  status: '',
  viewers: 0,
  image: '',
};
