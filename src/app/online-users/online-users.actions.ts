import { Action } from '@ngrx/store';
import Backend from '../backend';

export const USER_HAS_JOINED = Backend.userChannelEvents.USER_HAS_JOINED;
export const userHasJoinedAction = (userId: string) => ({ type: USER_HAS_JOINED, payload: userId });

export const USER_HAS_DISCONNECTED = Backend.userChannelEvents.USER_HAS_DISCONNECTED;
export const userHasDisconnectedAction = (userId: string) => ({
  type: USER_HAS_DISCONNECTED,
  payload: userId
});
