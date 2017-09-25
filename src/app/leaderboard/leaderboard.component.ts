import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, OnChanges } from '@angular/core';

import { Game } from '../types';

@Component({
  selector: 'mm-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderboardComponent {

  @Input() isLoading: boolean;
  @Input() games: Game[];

  constructor() {}

}
