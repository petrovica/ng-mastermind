import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import Backend from '../backend';
import Schema from '../backend/schema';
import { AppState } from '../app.state';
import {
  gameInProgressAction,
  gameOverAction,
  resumeGameAction,
  waitingForAiAction,
  waitingForPlayerAction,
  PLAYER_TURN,
  RESUME_GAME,
  START_GAME,
  START_NEW_GAME,
  START_LAST_GAME,
} from './game-view.actions';
import { EntityRepositoryService } from '../entity-repository/entity-repository.service';
import { ActionWithPayload, User, Game } from '../types';


@Injectable()
export class GameViewEffects {

  @Effect() startGame$ = this.actions$
    .ofType(START_GAME)
    .flatMap(() => Backend.isGameInProgress())
    .flatMap(isGameInProgress => {
      if (isGameInProgress) {
        this.store.dispatch(gameInProgressAction());

        const startLastGame$ = this.actions$.ofType(START_LAST_GAME).take(1);
        const startNewGame$ = this.actions$.ofType(START_NEW_GAME).take(1)
          .flatMap(() => Backend.deleteActiveGame())
          .flatMap(() => Backend.startGame());

        return Observable.race(startLastGame$, startNewGame$);
      } else {
        return Backend.startGame();
      }
    })
    .flatMap(() => Backend.getActiveGame())
    .map((activeGame: Game) => {
      const activeGameId = this.entityRepository.normalizeAndStore(activeGame, Schema.GAME);
      if (!activeGame.over) {
        return resumeGameAction(activeGameId);
      } else {
        return gameOverAction();
      }
    });

  @Effect() playGame$ = this.actions$
    .ofType(RESUME_GAME)
    .flatMap((action: ActionWithPayload) => this.playOneRound(action.payload));

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private entityRepository: EntityRepositoryService
  ) {}

  playOneRound(activeGameId) {
    return this.actions$.ofType(PLAYER_TURN)
      .takeUntil(this.actions$.ofType(START_GAME).take(1))
      .take(1)
      .do(() => this.store.dispatch(waitingForAiAction()))
      .flatMap((guess: ActionWithPayload) => Backend.playerGuess(guess.payload))
      .flatMap(() => Backend.getGame(activeGameId))
      .do(() => this.store.dispatch(waitingForPlayerAction()))
      .flatMap((activeGame: Game) => {
        this.entityRepository.normalizeAndStore(activeGame, Schema.GAME);
        if (!activeGame.over) {
          return this.playOneRound(activeGameId);
        } else {
          return Observable.empty();
        }
      });
  }

}
