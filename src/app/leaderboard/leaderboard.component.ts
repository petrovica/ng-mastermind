import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Game } from './../types';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { loadLeaderboardAction } from './leaderboard.actions';
import { LeaderboardResolver } from './leaderboard.resolver';

@Component({
  selector: 'mm-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {

  bestGames: Game[];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadLeaderboardAction());
    this.store
      .select((state) => {
        if (state.leaderboard) {
          return  state.leaderboard.bestGames;
        }

        return [];
      })
      .subscribe((bestGames) => {
        this.bestGames = bestGames;
      });
  }

}
