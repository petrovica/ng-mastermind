import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mm-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {

  constructor() { }

}
