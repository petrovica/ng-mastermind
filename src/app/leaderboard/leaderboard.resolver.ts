import { Game } from './../types';
import { backendApi } from './../backend/index';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LeaderboardResolver implements Resolve<Game[]> {

  resolve() {
    return new Promise<Game[]>((resolve) => {
      return backendApi.getBestGames()
        .then((bestGames) => {
          setTimeout(() => resolve(bestGames), 5000);
        });
    });
  }

}
