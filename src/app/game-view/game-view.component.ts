import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Game, Cipher } from '../types';

@Component({
  selector: 'mm-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameViewComponent {

  @Input() game: Game;
  @Input() aiTurn: boolean;
  @Input() lastGuess: Cipher;

  @Output() selectCipher = new EventEmitter<Cipher>();

  constructor() {}

  onCipherSelected(cipher: Cipher) {
    this.selectCipher.emit(cipher);
  }

}
