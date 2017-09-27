import { Store } from '@ngrx/store';
import { AppState } from './../app.state';

export const getState = (store: Store<AppState>) => store.select('leaderboard');
export const getBestGames = (store: Store<AppState>) => getState(store).select('bestGames');
