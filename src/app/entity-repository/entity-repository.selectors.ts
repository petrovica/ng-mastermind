import map from 'lodash/map';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { Games } from './entity-repository.reducer';
import * as Entities from '../entities';

export const getState = (appStore: Store<AppState>) =>
  appStore.map(appState => appState.entityRepository).distinctUntilChanged();

export const getUsers = (appStore: Store<AppState>) =>
  getState(appStore).map(state => state[Entities.USER]);

export const getRatings = (appStore: Store<AppState>) =>
  getState(appStore).map(state => state[Entities.RATING]);

export const getGuesses = (appStore: Store<AppState>) =>
  getState(appStore).map(state => state[Entities.GUESS]);

export const getGames = (appStore: Store<AppState>): Observable<Games> =>
  getState(appStore).map(state => map(
    state[Entities.GAME],
    game => Object.assign({}, game, {
      ratings: game.ratings.map(ratingId => state[Entities.RATING][ratingId]),
      guesses: game.guesses.map(guessId => state[Entities.GUESS][guessId])
    })).reduce((memo, game) => Object.assign(memo, {
      [game.id]: game
    }), {}));
