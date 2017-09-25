import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../app.state';
import { startGameAction, startNewGameAction, startLastGameAction, playerTurnAction } from './game-view.actions';
import { getActiveGame, isAiTurn, isResumeModalVisible, getLastGuess } from './game-view.selectors';
import { Game, Cipher } from '../types';

@Component({
  selector: 'mm-game-view-container',
  template: `
    <mm-confirmation-modal
      *ngIf="isResumeModalVisible$ | async"
      [message]="'There is currently game in progress. Do you want to start a new game?'"
      [confirmMessage]="'Start new game'"
      [cancelMessage]="'Continue plaing'"
      (confirm)="onGameStarted()"
      (cancel)="onGameResumed()"
    ></mm-confirmation-modal>

    <mm-game-view
      [aiTurn]="aiTurn$ | async"
      [game]="game$ | async"
      [lastGuess]="lastGuess$ | async"
      (selectCipher)="onCipherSelected($event)"
    ></mm-game-view>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameViewContainerComponent {

  isResumeModalVisible$: Observable<boolean>;
  aiTurn$: Observable<boolean>;
  game$: Observable<Game>;
  lastGuess$: Observable<Cipher>;

  constructor(private store: Store<AppState>) {
    this.isResumeModalVisible$ = isResumeModalVisible(store);
    this.aiTurn$ = isAiTurn(store);
    this.game$ = getActiveGame(store);
    this.lastGuess$ = getLastGuess(store);

    this.store.dispatch(startGameAction());
  }

  onGameStarted() {
    this.store.dispatch(startNewGameAction());
  }

  onGameResumed() {
    this.store.dispatch(startLastGameAction());
  }

  onCipherSelected(cipher: Cipher) {
    this.store.dispatch(playerTurnAction(cipher));
  }

}
