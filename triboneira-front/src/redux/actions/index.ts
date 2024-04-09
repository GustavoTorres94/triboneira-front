import { Dispatch } from 'react';
import { getStreams, getUsersStreams } from '../../services/streams.services.api';
import {
  GET_STREAMS_ERROR,
  GET_STREAMS_START,
  GET_STREAMS_SUCCESS,
  GET_USERS_STREAMS_SUCCESS,
  GET_USER_STREAMS_ERROR,
  GET_USER_STREAMS_START,
} from './actionsTypes';

export const requestStart = () => ({
  type: GET_STREAMS_START,
  isLoading: true,
});

export const requestStreamUsersStart = () => ({
  type: GET_USER_STREAMS_START,
  isLoading: true,
});

export const requestSuccess = (data: any) => ({
  type: GET_STREAMS_SUCCESS,
  isLoading: false,
  payload: data,
});

export const requestUsersStreamsSuccess = (data: any) => ({
  type: GET_USERS_STREAMS_SUCCESS,
  isLoading: false,
  payload: data,
});

export const requestError = (error: any) => ({
  type: GET_STREAMS_ERROR,
  isLoading: false,
  error,
});

export const requestUserStreamError = (error: any) => ({
  type: GET_USER_STREAMS_ERROR,
  isLoading: false,
  error,
});

// ThunkActions

export const getAllStreams = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(requestStart());
    try {
      const response = await getStreams();
      dispatch(requestSuccess(response));
    } catch (error) {
      dispatch(requestError(error));
    }
  };
};

export const getAllUsersStreams = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(requestStreamUsersStart());
    try {
      const response = await getUsersStreams();
      dispatch(requestUsersStreamsSuccess(response));
    } catch (error) {
      dispatch(requestUserStreamError(error));
    }
  };
};
