import { ActionWithPayload } from './../types';
import { USER_HAS_JOINED, USER_HAS_DISCONNECTED } from './../online-users/online-users.actions';

export interface OnlineUsers {
  userIds: string[];
}

const initialState: OnlineUsers = {
  userIds: []
};

export function onlineUsersReducer(state: OnlineUsers = initialState, action: ActionWithPayload) {
  switch (action.type) {
    case USER_HAS_JOINED:
      return { ...state, userIds: [...state.userIds, action.payload] };

    case USER_HAS_DISCONNECTED:
      return { ...state, userIds: state.userIds.filter(userId => userId !== action.payload) };

    default:
      return state;
  }
}
