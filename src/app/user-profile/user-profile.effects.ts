import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import Backend from '../backend';
import Schema from '../backend/schema';
import { User } from '../types';
import { EntityRepositoryService } from '../entity-repository/entity-repository.service';
import {
  userHasLoggedInAction,
  userHasLoggedOutAction,
  LOGIN,
  LOGOUT,
  USER_HAS_LOGGED_IN,
  USER_HAS_LOGGED_OUT
} from './user-profile.actions';

@Injectable()
export class UserProfileEffects {

  @Effect() login$ = this.actions$
    .ofType(LOGIN)
    .flatMap(() => Observable.fromPromise(Backend.login()))
    .flatMap(() => Observable.never());

  @Effect() logout$ = this.actions$
    .ofType(LOGOUT)
    .flatMap(() => Observable.fromPromise(Backend.logout()))
    .flatMap(() => Observable.never());

  @Effect() authChannel$ = Backend.createAuthStateChangesChannel()
    .flatMap(user => {
      if (user) {
        return Backend.joinUser(user)
          .then(() => {
            const userId = this.entityRepository.normalizeAndStore(user, Schema.USER);
            return userHasLoggedInAction(userId);
          });
      } else {
        return Observable.of(userHasLoggedOutAction());
      }
    });

  @Effect() navigateToLoggedInPage$ = this.actions$
    .ofType(USER_HAS_LOGGED_IN)
    .flatMap(() => this.actions$.ofType(USER_HAS_LOGGED_OUT))
    .do(() => window.location.reload());


  constructor(
    private actions$: Actions,
    private entityRepository: EntityRepositoryService
  ) {}

}
