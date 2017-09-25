import { ActionReducer } from '@ngrx/store';
import merge from 'lodash/merge';

import * as Entities from '../entities';
import { ENTITY_REPOSITORY_HAS_CHANGED } from './entity-repository.actions';
import { ActionWithPayload, Cipher, Game, Guess, User } from './../types';

export interface EntityList<T> {
  [key: string]: T;
}

export type Games = EntityList<Game>;
export type Guesees = EntityList<Guess>;
export type Ratings = EntityList<Cipher>;
export type Users = EntityList<User>;

export interface EntityRepository {
  GAME?: Games;
  GUESS?: Guesees;
  RATING?: Ratings;
  USER?: Users;
}

const initialState: EntityRepository = {
  [Entities.GAME]: {},
  [Entities.GUESS]: {},
  [Entities.RATING]: {},
  [Entities.USER]: {}
};

export function entityRepositoryReducer(state: EntityRepository = initialState, action: ActionWithPayload) {
  switch (action.type) {
    case ENTITY_REPOSITORY_HAS_CHANGED:
      return {
        ...state,
        [Entities.GAME]: { ...state[Entities.GAME], ...action.payload[Entities.GAME] },
        [Entities.GUESS]: { ...state[Entities.GUESS], ...action.payload[Entities.GUESS] },
        [Entities.RATING]: { ...state[Entities.RATING], ...action.payload[Entities.RATING] },
        [Entities.USER]: { ...state[Entities.USER], ...action.payload[Entities.USER] }
      };

    default:
      return state;
  }
}
