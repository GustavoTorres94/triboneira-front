import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

type ReduxState = any;

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
