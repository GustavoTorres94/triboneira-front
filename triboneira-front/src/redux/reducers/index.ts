import { combineReducers } from 'redux';
import stream from './stream';
import userStreams from './userStreams';
import users from './users';

const rootReducer = combineReducers({
  stream,
  userStreams,
  users,
});

export default rootReducer;
