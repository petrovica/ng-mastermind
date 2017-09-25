import { ActionWithPayload } from './../types';
import { USER_HAS_LOGGED_IN, USER_HAS_LOGGED_OUT } from './../user-profile/user-profile.actions';

export interface UserProfile {
  userId: string;
}

const initialState: UserProfile = {
  userId: null
};

export function userProfileReducer(state: UserProfile = initialState, action: ActionWithPayload) {
  switch (action.type) {
    case USER_HAS_LOGGED_IN:
      return { ...state, userId: action.payload };

    case USER_HAS_LOGGED_OUT:
      return { ...state, userId: null };

    default:
      return state;
  }
}
