import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Cipher } from '../../types';
import { COLORS } from '../game-view.constants';

@Component({
  selector: 'mm-selected-cipher',
  template: `
  <ul>
    <li *ngFor="let value of cipher" [style.backgroundColor]="getColor(value)"></li>
  </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedCipherComponent {

  @Input() cipher: Cipher;

  constructor() {}

  getColor(value) {
    return COLORS[value];
  }

}
