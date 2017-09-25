import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mm-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {

  @Input() user;

  @Output() login = new EventEmitter();
  @Output() logout = new EventEmitter();

  constructor() { }

  onLogin() {
    this.login.emit();
  }

  onLogout () {
    this.logout.emit();
  }

}
