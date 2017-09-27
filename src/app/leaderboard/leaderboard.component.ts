import { Observable } from 'rxjs/Observable';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Game } from './../types';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { loadLeaderboardAction } from './leaderboard.actions';
import { LeaderboardResolver } from './leaderboard.resolver';
import { getBestGames } from './leaderboard.selectors';

@Component({
  selector: 'mm-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderboardComponent {

  bestGames$: Observable<Game[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadLeaderboardAction());
    this.bestGames$ = getBestGames(this.store);
  }

}
