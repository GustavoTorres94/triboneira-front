import { combineReducers } from 'redux';
import stream from './stream';
import userStreams from './userStreams';

const rootReducer = combineReducers({
  stream,
  userStreams,
});

export default rootReducer;
