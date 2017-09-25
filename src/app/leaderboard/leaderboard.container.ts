import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../app.state';
import { loadLeaderboardAction } from './leaderboard.actions';
import { getBestGames, isLoading } from './leaderboard.selectors';
import { Game } from '../types';

@Component({
  selector: 'mm-leaderboard-container',
  template: `
    <mm-leaderboard
      [isLoading]="isLoading$ | async"
      [games]="games$ | async"
    ></mm-leaderboard>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderboardContainerComponent implements OnInit {

  isLoading$: Observable<boolean>;
  games$: Observable<Game[]>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = isLoading(store);
    this.games$ = getBestGames(store);
  }

  ngOnInit() {
    this.store.dispatch(loadLeaderboardAction());
  }

}
