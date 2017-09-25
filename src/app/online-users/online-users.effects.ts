import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';

import Backend from '../backend';
import Schema from '../backend/schema';
import { EntityRepositoryService } from '../entity-repository/entity-repository.service';
import { ActionWithPayload } from './../types';

@Injectable()
export class OnlineUsersEffects {

  @Effect() onlineUsers$ = Backend.createUsersChannel()
    .map(({ type, user }) => {
      const userId = this.entityRepository.normalizeAndStore(user, Schema.USER);
      return {
        type,
        payload: userId
      } as ActionWithPayload;
    });

  constructor(private entityRepository: EntityRepositoryService) {}

}
