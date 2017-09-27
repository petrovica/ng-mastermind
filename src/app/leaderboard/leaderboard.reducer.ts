import { LeaderboardState } from './leaderboard.reducer';
import { Action } from '@ngrx/store';

import { Game, ActionWithPayload } from './../types';
import { LOAD_LEADERBOARD, LEADERBOARD_FETCHED } from './leaderboard.actions';

export interface LeaderboardState {
  isLoading: boolean;
  bestGames: Game[];
}

const initialState: LeaderboardState = {
  isLoading: false,
  bestGames: []
};

export function leaderboardReducer(state: LeaderboardState = initialState, action: ActionWithPayload): LeaderboardState {
  switch (action.type) {
    case LOAD_LEADERBOARD:
      return { ...state, isLoading: true };

    case LEADERBOARD_FETCHED:
      return { ...state, isLoading: false, bestGames: action.payload };
  }
}






// 1. user clicks on link
// 2. emits action { type: LOAD_LEADERBOARD }
// 3. ngrx call every reducer
// 4. our leaderboard reducer changes current state (loading = true)
// 5. ngrx call every effect in the application
// 6. call backend API (download data)
// 7. emits { type: LEADERBORD_FETCHED, payload: bestGames }
// 8. every reducer get called with new action LEADERBOARD_FETCHED
// 9. our leaderboardReducer save payload to current state
// 10. list of best games is in the state, application can render it


// (state, action) => {
//   if (action.type === LOAD_LEADERBOARD) {
//     return { isLoading: true, bestGames: [] }
//   } else if (action.type === LEADERBOARD_FETCHED) {
//     return { isLoding: false, bestGames: action.payload}
//   }
// }

// { isLoading: false, bestGames: [] }

// { type: LOAD_LEADERBOAR }
// { type: LEADERBOARD_FETCHED }

// this.actions$
//   .filter(action => action.type === LOAD_LEDERBOARD)
//   .switchMap(action => backkendAPi.getBestGames())
//   .map(bestGames => { type: LEADERBOARD_FETCHED, payload: bestGames})
