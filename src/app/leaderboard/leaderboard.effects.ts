import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { backendApi } from './../backend/index';
import { LOAD_LEADERBOARD, leaderbordFetchedAction } from './leaderboard.actions';

@Injectable()
export class LeaderboardEffects {

  @Effect()
  loadLeaderboard$ = this.actions$
    .filter(action => action.type === LOAD_LEADERBOARD)
    .mergeMap(() => backendApi.getBestGames())
    .map(bestGames => leaderbordFetchedAction(bestGames));

  constructor(private actions$: Actions) {}
}
