import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

import { AppState } from './../app.state';
import { loadLeaderboardAction, LEADERBOARD_FETCHED } from './leaderboard.actions';
import { getBestGames } from './leaderboard.selectors';
import { Game } from './../types';

@Injectable()
export class LeaderboardResolver implements Resolve<Game[]> {

  constructor(private store: Store<AppState>, private actions$: Actions) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(loadLeaderboardAction());

    return this.actions$
      .ofType(LEADERBOARD_FETCHED)
      .take(1)
      .mergeMap(() => getBestGames(this.store).take(1));
  }

}
