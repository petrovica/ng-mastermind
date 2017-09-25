import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Schema, normalize } from 'normalizr';

import { AppState } from '../app.state';
import { entityRepositoryChangedAction } from './entity-repository.actions';

@Injectable()
export class EntityRepositoryService {

  constructor(private store: Store<AppState>) {}

  normalizeAndStore<T>(data: T, schema: Schema) {
    const {
      result,
      entities
    } = normalize(data, schema);

    this.store.dispatch(entityRepositoryChangedAction(entities));

    return result;
  }
}
