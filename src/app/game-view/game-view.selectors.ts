import { Cipher } from './../types';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { getGames } from '../entity-repository/entity-repository.selectors';

export const getState = (appStore: Store<AppState>) => appStore.select('game');
export const isAiTurn = (store: Store<AppState>) => getState(store).select('aiTurn');
export const isResumeModalVisible = (store: Store<AppState>) => getState(store).select('resumeModalVisible');

export const getActiveGame = (store: Store<AppState>) => Observable.combineLatest(
  getState(store),
  getGames(store),
  (state, games) => games[state.activeGameId]
);

export const getLastGuess = (store: Store<AppState>) =>
  getActiveGame(store).map(game => {
    if (game && game.guesses.length) {
      return game.guesses[game.guesses.length - 1].guess;
    }

    return [0, 0, 0, 0] as Cipher;
  });
