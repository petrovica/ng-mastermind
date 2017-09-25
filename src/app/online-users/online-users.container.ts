import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../app.state';
import { User } from '../types';
import { isUserLoggedIn } from '../user-profile/user-profile.selectors';
import { getOnlineUsers } from './online-users.selectors';

@Component({
  selector: 'mm-online-users-container',
  template: `
    <mm-online-users
      [isUserLoggedIn]="isUserLoggedIn$ | async"
      [users]="users$ | async"
    ></mm-online-users>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineUsersContainerComponent {

  isUserLoggedIn$: Observable<boolean>;
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.isUserLoggedIn$ = isUserLoggedIn(store);
    this.users$ = getOnlineUsers(store);
  }

}
