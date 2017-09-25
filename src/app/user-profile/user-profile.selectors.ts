import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../app.state';
import { getUsers } from '../entity-repository/entity-repository.selectors';

export const getState = (appStore: Store<AppState>) => appStore.select('userProfile');
export const isUserLoggedIn = (appStore: Store<AppState>) => getState(appStore).select(state => !!state.userId);
export const getUser = (appStore: Store<AppState>) => Observable.combineLatest(
  getState(appStore),
  getUsers(appStore),
  (state, users) => users[state.userId]
);
