import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../app.state';
import { User } from '../types';
import { loginAction, logoutAction } from './user-profile.actions';
import { getUser } from './user-profile.selectors';

@Component({
  selector: 'mm-user-profile-container',
  template: `
    <mm-user-profile
      [user]="user$ | async"
      (login)="onLogin($event)"
      (logout)="onLogout($event)"
    ></mm-user-profile>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileContainerComponent {

  user$: Observable<User>;

  constructor(private store: Store<AppState>) {
    this.user$ = getUser(store);
  }

  onLogin() {
    this.store.dispatch(loginAction());
  }

  onLogout() {
    this.store.dispatch(logoutAction());
  }

}
