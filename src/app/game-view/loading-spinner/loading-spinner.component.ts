import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mm-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent {

  @Input() loading: boolean;

  constructor() {}

}
