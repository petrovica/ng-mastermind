import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { schema } from 'normalizr';

import Backend from '../backend';
import Schema from '../backend/schema';
import { EntityRepositoryService } from '../entity-repository/entity-repository.service';
import { leaderboardFetchedAction, LOAD_LEADERBOARD } from './leaderboard.actions';
import * as Constants from './leaderboard.constants';

@Injectable()
export class LeaderboardEffects {

  @Effect() loadLeaderboardChannel$ = this.actions$
    .ofType(LOAD_LEADERBOARD)
    .flatMap(() => Backend.getBestGames(Constants.LEADERBOARD_DISPLAY_COUNT))
    .map(bestGames => {
      const bestGameIds = this.entityRepository
        .normalizeAndStore(bestGames, new schema.Array(Schema.GAME));
      return leaderboardFetchedAction(bestGameIds);
    });

  constructor(
    private actions$: Actions,
    private entityRepository: EntityRepositoryService
  ) {}

}
