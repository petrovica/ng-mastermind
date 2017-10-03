import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Cipher } from '../../types';
import { COLORS } from '../game-view.constants';

@Component({
  selector: 'mm-cipher-selector',
  templateUrl: './cipher-selector.component.html',
  styleUrls: ['./cipher-selector.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CipherSelectorComponent {

  @Input() cipher: Cipher;

  @Output() cipherChange = new EventEmitter<Cipher>();
  @Output() commit = new EventEmitter<Cipher>();

  colors = COLORS;
  activeSelector: number;

  constructor() {}

  getColor(colorIndex) {
    return this.colors[colorIndex];
  }

  changeActiveSelector(selector) {
    this.activeSelector = this.activeSelector === selector ? null : selector;
  }

  changeColour(selector, colorIndex) {
    this.cipher[selector] = colorIndex;
    this.activeSelector = null;
  }

  onCipherChange() {
    this.cipherChange.emit(this.cipher);
  }

  onComit() {
    this.commit.emit(this.cipher);
  }

}
