import { LeaderboardResolver } from './leaderboard/leaderboard.resolver';
import { Injectable } from '@angular/core';
import { Routes, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from './app.state';
import { GameViewContainerComponent } from './game-view/game-view.container';
import { LeaderboardContainerComponent } from './leaderboard/leaderboard.container';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { isUserLoggedIn } from './user-profile/user-profile.selectors';

@Injectable()
export class AuthenticatedUserCanActivate implements CanActivate {

  constructor(private store: Store<AppState>) {}

  canActivate() {
    // wait till user logs in and then navigate to requested route
    return isUserLoggedIn(this.store).filter(user => user);
  }

}

export const appRoutes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
    canActivate: [AuthenticatedUserCanActivate]
  },
  {
    path: 'game',
    component: GameViewContainerComponent,
    canActivate: [AuthenticatedUserCanActivate]
  },
  {
    path: 'leaderboard',
    component: LeaderboardContainerComponent,
    canActivate: [AuthenticatedUserCanActivate],
    resolve: { leaderboard: LeaderboardResolver }
  }
];
