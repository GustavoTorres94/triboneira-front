import { AnyAction } from 'redux';
import {
  GET_STREAMS_ERROR,
  GET_STREAMS_START,
  GET_USERS_STREAMS_SUCCESS,
} from '../actions/actionsTypes';
import { UserReturnType, UserStreamType } from '../../types';

const INITIAL_STATE: UserReturnType = {
  data: [],
};

const userStreams = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case GET_STREAMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_STREAMS_SUCCESS:
      return {
        ...state,
        data: action.payload.map((e: UserStreamType) => ({
          id: e.id,
          login: e.login,
          display_name: e.display_name,
          profile_image_url: e.profile_image_url,
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

export default userStreams;
