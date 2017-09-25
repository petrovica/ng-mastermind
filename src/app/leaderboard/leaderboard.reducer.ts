import { ActionWithPayload } from './../types';
import { LOAD_LEADERBOARD, LEADERBOARD_FETCHED } from './leaderboard.actions';

export interface Leaderboard {
  isLoading: boolean;
  bestGamesIds: string[];
}


const initialState: Leaderboard = {
  isLoading: false,
  bestGamesIds: []
};

export function leaderboardReducer(state: Leaderboard = initialState, action: ActionWithPayload) {
  switch (action.type) {
    case LOAD_LEADERBOARD:
      return { ...state, isLoading: true };

    case LEADERBOARD_FETCHED:
      return { ...state, isLoading: false, bestGamesIds: action.payload };

    default:
      return state;
  }
}
