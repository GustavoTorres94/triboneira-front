import { AnyAction } from 'redux';
import { StreamerReturnType, StreamType } from '../../types';
import {
  GET_STREAMS_ERROR,
  GET_STREAMS_START,
  GET_STREAMS_SUCCESS,
} from '../actions/actionsTypes';

const INITIAL_STATE: StreamerReturnType = {
  data: [],
};

const stream = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case GET_STREAMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_STREAMS_SUCCESS:
      return {
        ...state,
        data: action.payload.map((e: StreamType) => ({
          streamerName: e.user_name,
          game: e.game_name,
          title: e.title,
          status: e.type,
          viewers: e.viewer_count,
          image: e.thumbnail_url,
        })),
        isLoading: false,
      };
    case GET_STREAMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stream;
