import { AnyAction } from 'redux';
import { UsersType } from '../../types';
import {
  GET_USERS_FROM_LOCALSTORAGE,
  SET_USERS_IN_LOCALSTORAGE,
  DELETE_USER_FROM_LOCALSTORAGE,
} from '../actions/actionsTypes';
import {
  KEY_LOCAL_STORAGE,
  getLocalStorage,
  createLocalStorage,
  removeLocalStorage,
} from '../../utils/localStorage';

const INITIAL_STATE: UsersType = {
  username: '',
};

const users = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_USERS_IN_LOCALSTORAGE: {
      createLocalStorage(KEY_LOCAL_STORAGE, action.payload);
      return {
        ...state,
        username: action.payload,
      };
    }
    case GET_USERS_FROM_LOCALSTORAGE:
      return {
        ...state,
        username: getLocalStorage(KEY_LOCAL_STORAGE),
      };
    case DELETE_USER_FROM_LOCALSTORAGE: {
      removeLocalStorage(KEY_LOCAL_STORAGE);
      return {
        ...state,
        username: '',
      };
    }
    default:
      return state;
  }
};

export default users;
