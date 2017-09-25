import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { getGames } from '../entity-repository/entity-repository.selectors';

export const getState = (appStore: Store<AppState>) => appStore.select('leaderboard');
export const isLoading = (store: Store<AppState>) => getState(store).select('isLoading');
export const getBestGames = (store: Store<AppState>) => Observable.combineLatest(
  getState(store),
  getGames(store),
  (state, games) => state.bestGamesIds.map(gameId => games[gameId])
);
