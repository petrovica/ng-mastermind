import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { RATINGS } from './game-view.constants';

@Component({
  selector: 'mm-rating',
  template: `
  <ul>
    <li
      *ngFor="let value of rating"
      [style.backgroundColor]="getColor(value)"
    ></li>
  </ul>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {

  @Input() rating: number[];

  constructor() {}

  getColor(value) {
    return RATINGS[value];
  }

}
