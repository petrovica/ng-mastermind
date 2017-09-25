import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { getUsers } from './../entity-repository/entity-repository.selectors';

export const getState = (appStore: Store<AppState>) => appStore.select('onlineUsers');
export const getOnlineUsers = (store: Store<AppState>) => Observable.combineLatest(
  getState(store),
  getUsers(store),
  (state, users) => state.userIds.map(userId => users[userId])
);
