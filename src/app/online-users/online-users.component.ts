import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

import { User } from '../types';

@Component({
  selector: 'mm-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineUsersComponent {

  @Input() isUserLoggedIn: boolean;
  @Input() users: User[];

  constructor() { }

}
